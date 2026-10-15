"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { Press_Start_2P } from "next/font/google";
import styles from "./punkrocker.module.css";

const pixel = Press_Start_2P({ weight: "400", subsets: ["latin"], display: "swap" });

// The two encodes live in Vercel Blob (public store). Phones and save-data connections get the 720p one.
const SRC_1080 = "https://l6irar75zfhgcnws.public.blob.vercel-storage.com/punkrocker_1080.mp4";
const SRC_720 = "https://l6irar75zfhgcnws.public.blob.vercel-storage.com/punkrocker_720.mp4";

type Phase = "loading" | "title" | "playing" | "clear";

// Tiny square-wave blips, synthesised on the spot (needs a user gesture first, which START is).
let audioCtx: AudioContext | null = null;
function blip(kind: "start" | "pause" | "resume") {
  try {
    audioCtx = audioCtx ?? new (window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext)();
    const ctx = audioCtx;
    if (ctx.state === "suspended") ctx.resume();
    const seq = kind === "start" ? [[880, 0.07], [1320, 0.12]] : kind === "pause" ? [[660, 0.06], [440, 0.1]] : [[440, 0.06], [660, 0.1]];
    let t = ctx.currentTime;
    for (const [f, d] of seq) {
      const o = ctx.createOscillator(); const g = ctx.createGain();
      o.type = "square"; o.frequency.value = f;
      g.gain.setValueAtTime(0.0001, t); g.gain.exponentialRampToValueAtTime(0.18, t + 0.005); g.gain.exponentialRampToValueAtTime(0.0001, t + d);
      o.connect(g).connect(ctx.destination); o.start(t); o.stop(t + d + 0.02); t += d;
    }
  } catch { /* no audio, no problem */ }
}

function pickSource() {
  if (typeof window === "undefined") return SRC_1080;
  const nav = navigator as Navigator & { connection?: { saveData?: boolean; effectiveType?: string } };
  const slow = nav.connection?.saveData || /2g|3g/.test(nav.connection?.effectiveType ?? "");
  const small = Math.min(window.innerWidth, window.innerHeight) * (window.devicePixelRatio || 1) < 1000;
  return slow || small ? SRC_720 : SRC_1080;
}

export default function Player() {
  const [phase, setPhase] = useState<Phase>("loading");
  const [progress, setProgress] = useState(0);          // 0..1, -1 = unknown length
  const [blobUrl, setBlobUrl] = useState<string | null>(null);
  const [flash, setFlash] = useState(false);
  const [paused, setPaused] = useState(false);
  const [rolling, setRolling] = useState(false);       // true once the video is actually on screen (after the black beat)
  const videoRef = useRef<HTMLVideoElement>(null);
  const stageRef = useRef<HTMLDivElement>(null);

  // 1. LOADING — fetch the whole video so the bar means something and playback never stalls.
  useEffect(() => {
    let cancelled = false;
    const url = pickSource();
    (async () => {
      try {
        const res = await fetch(url);
        if (!res.ok || !res.body) throw new Error("fetch failed");
        const total = Number(res.headers.get("content-length") || 0);
        const reader = res.body.getReader();
        const chunks: BlobPart[] = [];
        let got = 0;
        for (;;) {
          const { done, value } = await reader.read();
          if (done) break;
          chunks.push(value as unknown as BlobPart);     // TS 5.7+ types stream chunks as Uint8Array<ArrayBufferLike>
          got += value.length;
          if (!cancelled) setProgress(total ? got / total : -1);
        }
        if (cancelled) return;
        const blob = new Blob(chunks, { type: "video/mp4" });
        setBlobUrl(URL.createObjectURL(blob));
        setProgress(1);
        setTimeout(() => !cancelled && setPhase("title"), 450);   // let the full bar register
      } catch {
        // Fall back to streaming straight from the server.
        if (!cancelled) { setBlobUrl(url); setProgress(1); setTimeout(() => setPhase("title"), 450); }
      }
    })();
    return () => { cancelled = true; };
  }, []);

  // 2. TITLE — wait for a real press (this is also what unlocks audio in the browser).
  const start = useCallback(() => {
    if (phase !== "title") return;
    const v = videoRef.current;
    if (!v) return;
    blip("start");
    setFlash(true);
    setTimeout(() => setFlash(false), 140);
    setPhase("playing");                       // the video stays hidden (opacity 0) until it actually plays, so this is a black screen
    setPaused(false);
    stageRef.current?.requestFullscreen?.().catch(() => {});
    v.currentTime = 0;
    setTimeout(() => { v.play().then(() => setRolling(true)).catch(() => setRolling(true)); }, 650);   // one beat of black after the press
  }, [phase]);

  // 3. PAUSE — space (or p) while playing; a tap on the picture does the same on phones
  const togglePause = useCallback(() => {
    const v = videoRef.current;
    if (!v || phase !== "playing" || !rolling) return;
    if (v.paused) { blip("resume"); v.play().catch(() => {}); setPaused(false); }
    else { blip("pause"); v.pause(); setPaused(true); }
  }, [phase, rolling]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (phase === "title" && (e.key === "Enter" || e.key === " ")) { e.preventDefault(); start(); }
      if (phase === "clear" && (e.key === "Enter" || e.key === " ")) { e.preventDefault(); setPhase("title"); }
      if (phase === "playing") {
        if (e.key === " " || e.key === "p" || e.key === "P") { e.preventDefault(); togglePause(); return; }
        // no other player shortcuts: swallow arrows / k / m / f so nothing scrubs or mutes
        if (["ArrowLeft", "ArrowRight", "ArrowUp", "ArrowDown", "k", "m", "f"].includes(e.key)) e.preventDefault();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [phase, start, togglePause]);

  const onEnded = () => {
    setRolling(false); setPaused(false);
    setPhase("clear");
    if (document.fullscreenElement) document.exitFullscreen?.().catch(() => {});
  };

  const pct = progress < 0 ? null : Math.round(progress * 100);

  return (
    <div ref={stageRef} className={`${styles.stage} ${pixel.className} ${phase === "playing" ? styles.playing : ""}`} onContextMenu={(e) => e.preventDefault()}>
      {/* the video is always mounted so the blob is attached before START is pressed */}
      <video
        ref={videoRef}
        src={blobUrl ?? undefined}
        preload="auto"
        playsInline
        disablePictureInPicture
        controlsList="nodownload noplaybackrate nofullscreen noremoteplayback"
        onEnded={onEnded}
        onClick={togglePause}
        className={`${styles.video} ${paused ? styles.videoPaused : ""}`}
        style={{ opacity: phase === "playing" && rolling ? 1 : 0, pointerEvents: phase === "playing" ? "auto" : "none" }}
      />

      {phase === "playing" && paused && (
        <div className={styles.pauseOverlay} onClick={togglePause}>
          <div className={styles.pauseIcon} aria-hidden><span /><span /></div>
          <div className={styles.pauseWord}>PAUSED</div>
          <div className={styles.tiny}>space / tap to resume</div>
        </div>
      )}

      {phase === "loading" && (
        <div className={styles.screen}>
          <div className={styles.loadingLabel}>NOW LOADING{pct !== null ? ` ${pct}%` : ""}</div>
          <div className={styles.barFrame}>
            <div className={progress < 0 ? styles.barIndeterminate : styles.barFill} style={progress >= 0 ? { width: `${progress * 100}%` } : undefined} />
          </div>
          <div className={styles.hint}>LOADING ASSETS</div>
        </div>
      )}

      {phase === "title" && (
        <button className={`${styles.screen} ${styles.titleScreen}`} onClick={start} aria-label="Press start">
          <div className={styles.p12}><span className={styles.p1}>P1</span> ♥ <span className={styles.p2}>P2</span></div>
          <div className={styles.title} role="heading" aria-level={1}>PUNKROCKER</div>
          <div className={styles.sub}>EMMY & MICHAEL</div>
          <div className={styles.press}>PRESS START</div>
          <div className={styles.tiny}>sound on • tap or press enter</div>
        </button>
      )}

      {phase === "clear" && (
        <button className={`${styles.screen} ${styles.titleScreen}`} onClick={() => setPhase("title")} aria-label="Play again">
          <div className={styles.title} role="heading" aria-level={1}>STAGE CLEAR</div>
          <div className={styles.sub}>2-PLAYER CO-OP // COMPLETE</div>
          <div className={styles.press}>PLAY AGAIN?</div>
        </button>
      )}

      <div className={styles.scanlines} aria-hidden />
      {flash && <div className={styles.flash} aria-hidden />}
    </div>
  );
}

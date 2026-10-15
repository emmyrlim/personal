import type { Metadata } from "next";
import Player from "./Player";

export const metadata: Metadata = {
  title: "PUNKROCKER — Emmy ♥ Michael",
  description: "Press start.",
  robots: { index: false, follow: false },
};

export default function PunkrockerPage() {
  return <Player />;
}

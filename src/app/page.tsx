import Splash from "@/components/splash";
import Image from "next/image";
import PointerWrapper from "@/components/pointerWrapper";

export default function Home() {
  return (
    <div key="1" className="dark flex min-h-[100dvh] flex-col bg-gray-900">
      <PointerWrapper>
        <Splash />
      </PointerWrapper>
    </div>
  );
}

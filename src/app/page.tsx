import Splash from "@/components/splash";
import Image from "next/image";
import ColorBlobs from "@/components/colorBlobs";
export default function Home() {
  return (
    <div
      key="1"
      className="dark flex min-h-[100dvh] flex-col bg-gray-900 dark:bg-gray-800"
    >
      <ColorBlobs />
      <Splash />
    </div>
  );
}

import { Url } from "next/dist/shared/lib/router/router";
import Link from "next/link";
import { ReactNode, SVGProps } from "react";

interface LinkCardProps {
  title: string;
  desc: string;
  href: Url;
  children?: ReactNode;
}

export default function LinkCard({
  title,
  desc,
  href,
  children,
}: LinkCardProps) {
  return (
    <Link
      className="flex grid-rows-2 flex-col items-center justify-between rounded-xl border border-red-200 bg-white p-4 text-sm shadow-sm transition-colors hover:bg-red-100 hover:text-red-900 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-red-950 dark:border-gray-800"
      href={href}
      target="_blank"
    >
      {children}
      <div className="font-semibold text-red-900">{title}</div>
      <div className="text-xs text-red-500 dark:text-red-400">{desc}</div>
    </Link>
  );
}

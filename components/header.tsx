import Link from "next/link";
import Image from "next/image";
import { ChevronLeft } from "lucide-react";

export default function Header({ backLink = "/" }) {
  return (
    <header className="bg-[#2A548D] p-4 flex items-center border-b relative min-h-28">
      <Link href={backLink}>
        <ChevronLeft className="w-6 h-6 text-white absolute left-4 top-1/2 -translate-y-1/2" />
      </Link>
      <div className="absolute left-1/2 -translate-x-1/2">
        <Link href="/">
          <Image src="/logo.png" alt="La Grande Récré" width={120} height={60} />
        </Link>
      </div>
    </header>
  );
}

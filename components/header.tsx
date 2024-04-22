import { User } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function Header() {
    return (
        <header className="px-12 py-4 flex justify-between items-center">
            <div className="">
                <Image src="/logo.png" alt="Ultimate Futsal" width={50} height={50} />
            </div>
            <Link href="/">
                <div className="bg-uf-secondary-2 px-4 py-2 rounded-full flex gap-4 transition-colors hover:bg-uf-secondary-3">
                    <User color="#df6311" size={24} />
                    <p>Play now</p>
                </div>
            </Link>
        </header>
    )
}
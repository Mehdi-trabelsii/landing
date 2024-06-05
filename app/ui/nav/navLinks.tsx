"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { name: "Home", href: "/" },
  {
    name: "Service",
    href: "/service",
  },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export default function NavLinks() {
  const pathname = usePathname();
  const isActive = (href: string) => {
    return pathname === href;
  };
  return (
    <div className="flex gap-[43px] items-center content-center">
      {links.map((link) => {
        return (
          <Link
            key={link.name}
            href={link.href}
            className={`relative font-helvetica-neue-cyr text-[14px] text font-semibold ${
              isActive(link.href)
                ? "text-[#EC6131] after:content-[''] after:absolute after:bottom-[-0.25em] after:left-[50%] after:translate-x-[-50%] after:w-[5px] after:h-[5px] after:rounded-full after:bg-orange-500"
                : "text-black hover:text-[#EC6131]"
            }`}
          >
            <p>{link.name}</p>
          </Link>
        );
      })}
    </div>
  );
}

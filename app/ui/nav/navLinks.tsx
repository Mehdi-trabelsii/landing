"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { name: "Home", href: "/home" },
  {
    name: "Service",
    href: "/service",
  },
  { name: "About", href: "/about" },
  { name: "About", href: "/contact" },
];

export default function NavLinks() {
  const pathname = usePathname();
  const isActive = (href: string) => {
    return pathname === href;
  };
  return (
    <>
      {links.map((link) => {
        return( <Link
          key={link.name}
          href={link.href}
          className={`relative font-helvetica-neue-cyr text-[14px] font-medium font-${
            isActive(link.href)
              ? "text-[#EC6131] after:content-[''] after:absolute after:bottom-[-0.25em] after:left-[50%] after:translate-x-[-50%] after:w-[5px] after:h-[5px] after:rounded-full after:bg-orange-500"
              : "text-black hover:text-[#EC6131]"
          }`}
        ><p>{link.name}</p></Link>);
         
      })}
    </>
  );
}
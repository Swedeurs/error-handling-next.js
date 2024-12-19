"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";
import { useState } from "react";

const links = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "X-mas wish",
    href: "/christmas-wish",
  },
  {
    name: "Gifts",
    href: "/gifts",
  },
];

export function TopNav() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };
  //throw new Error("Top nav")
  return (
    <nav className="bg-white border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex-shrink-0 flex items-center">
            <Link href="/" className="text-xl font-bold">
              Have an absurd Christmas
            </Link>
          </div>
          <div className="-mr-2 flex items-center sm:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="h-6 w-6"
                stroke="currentColor"
                fill="none"
                viewBox="0 0 24 24"
              >
                {isOpen ? (
                  <path
                    className="block"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    className="block"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                )}
              </svg>
            </button>
          </div>
          <div className="hidden sm:flex sm:items-center">
            <div className="flex">
              {links.map((link, index) => (
                <span key={link.name}>
                  <Link
                    href={link.href}
                    className={clsx({
                      "text-blue-700": pathname === link.href,
                      "text-red-600": link.href === "/",
                    })}
                  >
                    {link.name}
                  </Link>
                  {index < links.length - 1 && (
                    <span key={index} className="mx-2 text-gray-400">
                      |
                    </span>
                  )}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="sm:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {links.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={clsx(
                  "block px-3 py-2 rounded-md text-base font-medium",
                  {
                    "text-blue-700": pathname === link.href,
                    "text-red-600": link.href === "/",
                  },
                )}
              >
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}

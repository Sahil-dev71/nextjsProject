"use client";
import Link from "next/link";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem } from "./ui/navbar-menu";
import { cn } from "../utils/utils";
function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  return (
    <header className="relative z-50">
      <div
        className={cn(
          "fixed inset-x-0 top-4 mx-auto w-[min(1100px,calc(100%-2rem))]",
          className
        )}
      >
        <div className="relative rounded-2xl border border-white/10 bg-black/40 backdrop-blur-xl shadow-[0_20px_60px_-30px_rgba(0,0,0,0.9)]">
          <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-white/[0.10] via-white/[0.04] to-transparent pointer-events-none" />

          <div className="relative flex items-center justify-between gap-3 px-3 py-2">
            <Link
              href="/"
              className="group flex items-center gap-2 rounded-xl px-2 py-1.5 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/25"
              onClick={() => setMobileOpen(false)}
            >
              <span className="relative grid h-9 w-9 place-items-center rounded-xl bg-white/[0.06] ring-1 ring-white/[0.12]">
                <span className="h-3.5 w-3.5 rounded-full bg-gradient-to-br from-white to-white/50 shadow-[0_0_0_1px_rgba(255,255,255,0.15)]" />
              </span>
              <span className="hidden sm:block">
                <span className="block text-sm font-semibold tracking-wide text-white">
                  Music Classes
                </span>
                <span className="block text-[11px] leading-4 text-white/60">
                  Learn. Play. Perform.
                </span>
              </span>
            </Link>

            <div className="hidden md:block">
              <Menu setActive={setActive} className="bg-transparent border-transparent shadow-none">
                <Link href="/" onClick={() => setMobileOpen(false)}>
                  <MenuItem setActive={setActive} active={active} item="Home" />
                </Link>
                <MenuItem setActive={setActive} active={active} item="Courses">
                  <div className="flex flex-col gap-1 text-sm">
                    <HoveredLink href="/all-courses">All courses</HoveredLink>
                    <HoveredLink href="/Basic-Music-Theory">
                      Basic Music Theory
                    </HoveredLink>
                    <HoveredLink href="/Advanced-Composition">
                      Advanced Composition
                    </HoveredLink>
                    <HoveredLink href="/Songwriting">Songwriting</HoveredLink>
                    <HoveredLink href="/Music-Production">
                      Music Production
                    </HoveredLink>
                  </div>
                </MenuItem>
                <Link href="/contact-us" onClick={() => setMobileOpen(false)}>
                  <MenuItem
                    setActive={setActive}
                    active={active}
                    item="Contact"
                  />
                </Link>
              </Menu>
            </div>

            <button
              type="button"
              className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-xl bg-white/[0.06] ring-1 ring-white/[0.12] text-white/90 hover:bg-white/[0.10] focus:outline-none focus-visible:ring-2 focus-visible:ring-white/25"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
              onClick={() => setMobileOpen((v) => !v)}
            >
              <span className="sr-only">Menu</span>
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="opacity-90"
              >
                {mobileOpen ? (
                  <path
                    d="M6 6L18 18M18 6L6 18"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                ) : (
                  <path
                    d="M4 7H20M4 12H20M4 17H20"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                )}
              </svg>
            </button>
          </div>

          {mobileOpen && (
            <div className="md:hidden border-t border-white/10 px-3 py-3">
              <div className="flex flex-col gap-1">
                <Link
                  href="/"
                  onClick={() => setMobileOpen(false)}
                  className="rounded-xl px-3 py-2 text-sm font-medium text-white/90 hover:bg-white/[0.06] focus:outline-none focus-visible:ring-2 focus-visible:ring-white/25"
                >
                  Home
                </Link>
                <div className="rounded-xl bg-white/[0.04] ring-1 ring-white/[0.10]">
                  <div className="px-3 pt-3 text-xs font-semibold tracking-wide text-white/60">
                    Courses
                  </div>
                  <div className="flex flex-col gap-1 p-2">
                    <Link
                      href="/all-courses"
                      onClick={() => setMobileOpen(false)}
                      className="rounded-lg px-3 py-2 text-sm text-white/85 hover:bg-white/[0.06] focus:outline-none focus-visible:ring-2 focus-visible:ring-white/25"
                    >
                      All courses
                    </Link>
                    <Link
                      href="/Basic-Music-Theory"
                      onClick={() => setMobileOpen(false)}
                      className="rounded-lg px-3 py-2 text-sm text-white/85 hover:bg-white/[0.06] focus:outline-none focus-visible:ring-2 focus-visible:ring-white/25"
                    >
                      Basic Music Theory
                    </Link>
                    <Link
                      href="/Advanced-Composition"
                      onClick={() => setMobileOpen(false)}
                      className="rounded-lg px-3 py-2 text-sm text-white/85 hover:bg-white/[0.06] focus:outline-none focus-visible:ring-2 focus-visible:ring-white/25"
                    >
                      Advanced Composition
                    </Link>
                    <Link
                      href="/Songwriting"
                      onClick={() => setMobileOpen(false)}
                      className="rounded-lg px-3 py-2 text-sm text-white/85 hover:bg-white/[0.06] focus:outline-none focus-visible:ring-2 focus-visible:ring-white/25"
                    >
                      Songwriting
                    </Link>
                    <Link
                      href="/Music-Production"
                      onClick={() => setMobileOpen(false)}
                      className="rounded-lg px-3 py-2 text-sm text-white/85 hover:bg-white/[0.06] focus:outline-none focus-visible:ring-2 focus-visible:ring-white/25"
                    >
                      Music Production
                    </Link>
                  </div>
                </div>
                <Link
                  href="/contact-us"
                  onClick={() => setMobileOpen(false)}
                  className="rounded-xl px-3 py-2 text-sm font-medium text-white/90 hover:bg-white/[0.06] focus:outline-none focus-visible:ring-2 focus-visible:ring-white/25"
                >
                  Contact
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}

export default Navbar;

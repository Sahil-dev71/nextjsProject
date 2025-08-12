"use client";
import Link from "next/link";
import React, { useState } from "react";
import { HoveredLink, Menu, MenuItem, ProductItem } from "./ui/navbar-menu";
import { cn } from "../utils/utils";
function Navbar({ className }: { className?: string }) {
  const [active, setActive] = useState<string | null>(null);
  return (
    <div className="relative w-full flex items-center justify-center">
      <div className="top-2">
        <div
          className={cn(
            "fixed top-10 inset-x-0 max-w-2xl mx-auto z-50",
            className
          )}
        >
          <Menu setActive={setActive}>
            <Link href="/">
              <MenuItem setActive={setActive} active={active} item="Home" />
            </Link>
            <MenuItem setActive={setActive} active={active} item="Our-courses">
              <div className="flex flex-col space-y-4 text-sm">
                <HoveredLink href="/all-courses">All courese</HoveredLink>
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
            <Link href="/contact-us">
              <MenuItem
                setActive={setActive}
                active={active}
                item="Contact Us"
              />
            </Link>
          </Menu>
        </div>
      </div>
    </div>
  );
}

export default Navbar;

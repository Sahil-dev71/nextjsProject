"use client";
import React from "react";
import { motion } from "motion/react";
import { cn } from "@/utils/utils";



const transition = {
  type: "spring" as const,
  mass: 0.5,
  damping: 11.5,
  stiffness: 100,
  restDelta: 0.001,
  restSpeed: 0.001,
};

export const MenuItem = ({
  setActive,
  active,
  item,
  children,
}: {
  setActive: (item: string) => void;
  active: string | null;
  item: string;
  children?: React.ReactNode;
}) => {
  const isActive = active === item;
  return (
    <div onMouseEnter={() => setActive(item)} className="relative ">
      <motion.div
        transition={{ duration: 0.2 }}
        className={cn(
          "cursor-pointer select-none rounded-full px-3 py-1.5 text-sm font-medium tracking-wide text-neutral-700",
          "hover:text-neutral-950 dark:text-neutral-200 dark:hover:text-white",
          "hover:bg-black/[0.04] dark:hover:bg-white/[0.06]",
          isActive && "text-neutral-950 dark:text-white"
        )}
      >
        <span className="relative">
          {item}
          {isActive && (
            <motion.span
              layoutId="menu-underline"
              className="absolute -bottom-2 left-0 right-0 mx-auto h-[2px] w-4 rounded-full bg-neutral-950 dark:bg-white"
            />
          )}
        </span>
      </motion.div>
      {active !== null && children && (
        <motion.div
          initial={{ opacity: 0, scale: 0.85, y: 10 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={transition}
        >
          {active === item && (
            <div className="absolute top-[calc(100%_+_1.2rem)] left-1/2 transform -translate-x-1/2 pt-4">
              <motion.div
                transition={transition}
                layoutId="active"
                className={cn(
                  "rounded-2xl overflow-hidden",
                  "border border-black/[0.10] dark:border-white/[0.12]",
                  "bg-white/90 dark:bg-black/70 backdrop-blur-xl",
                  "shadow-[0_20px_60px_-20px_rgba(0,0,0,0.35)] dark:shadow-[0_20px_60px_-20px_rgba(0,0,0,0.7)]"
                )}
              >
                <motion.div
                  layout
                  className="w-max h-full p-4"
                >
                  {children}
                </motion.div>
              </motion.div>
            </div>
          )}
        </motion.div>
      )}
    </div>
  );
};

export const Menu = ({
  setActive,
  children,
  className,
}: {
  setActive: (item: string | null) => void;
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <nav
      onMouseLeave={() => setActive(null)} // resets the state
      className={cn(
        "relative flex items-center justify-center gap-1 px-2 py-2",
        "rounded-full border",
        "border-black/[0.08] dark:border-white/[0.10]",
        "bg-white/75 dark:bg-black/55 backdrop-blur-xl",
        "shadow-[0_10px_30px_-15px_rgba(0,0,0,0.35)] dark:shadow-[0_10px_30px_-15px_rgba(0,0,0,0.7)]",
        className
      )}
    >
      {children}
    </nav>
  );
};

export const ProductItem = ({
  title,
  description,
  href,
  src,
}: {
  title: string;
  description: string;
  href: string;
  src: string;
}) => {
  return (
    <a href={href} className="flex space-x-2">
      <img
        src={src}
        width={140}
        height={70}
        alt={title}
        className="shrink-0 rounded-md shadow-2xl"
      />
      <div>
        <h4 className="text-xl font-bold mb-1 text-black dark:text-white">
          {title}
        </h4>
        <p className="text-neutral-700 text-sm max-w-[10rem] dark:text-neutral-300">
          {description}
        </p>
      </div>
    </a>
  );
};

export const HoveredLink = ({
  children,
  ...rest
}: React.ComponentPropsWithoutRef<"a"> & { children: React.ReactNode }) => {
  return (
    <a
      {...rest}
      className={cn(
        "block rounded-md px-2 py-1.5 text-sm text-neutral-700 dark:text-neutral-200",
        "hover:bg-black/[0.04] hover:text-neutral-950 dark:hover:bg-white/[0.06] dark:hover:text-white",
        "focus:outline-none focus-visible:ring-2 focus-visible:ring-neutral-950/30 dark:focus-visible:ring-white/30"
      )}
    >
      {children}
    </a>
  );
};

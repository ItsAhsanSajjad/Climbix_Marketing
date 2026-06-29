"use client";

import { m } from "framer-motion";
import { staggerContainer, staggerItem, viewport } from "@/lib/motion";

type ElementTag = "div" | "ul" | "ol" | "section";

type StaggerContainerProps = {
  children: React.ReactNode;
  className?: string;
  as?: ElementTag;
  /** Gap between children animations (seconds). */
  stagger?: number;
  /** Delay before the first child animates (seconds). */
  delayChildren?: number;
  /** "inView" fires on scroll; "mount" fires immediately (above-the-fold hero). */
  trigger?: "inView" | "mount";
};

/**
 * Orchestrates a staggered reveal of its StaggerItem children. Reuses the shared
 * motion variants so cadence is identical everywhere.
 */
export function StaggerContainer({
  children,
  className,
  as = "div",
  stagger = 0.09,
  delayChildren = 0,
  trigger = "inView",
}: StaggerContainerProps) {
  const MTag = m[as] as typeof m.div;
  const triggerProps =
    trigger === "mount"
      ? { animate: "show" as const }
      : { whileInView: "show" as const, viewport };

  return (
    <MTag
      className={className}
      variants={staggerContainer(stagger, delayChildren)}
      initial="hidden"
      {...triggerProps}
    >
      {children}
    </MTag>
  );
}

type StaggerItemProps = {
  children: React.ReactNode;
  className?: string;
  as?: "div" | "li" | "span";
};

/** A single child of StaggerContainer. Inherits the container's orchestration. */
export function StaggerItem({ children, className, as = "div" }: StaggerItemProps) {
  const MTag = m[as] as typeof m.div;
  return (
    <MTag className={className} variants={staggerItem}>
      {children}
    </MTag>
  );
}

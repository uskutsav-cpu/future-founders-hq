"use client";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { navigation } from "@/data/site";
export function Header() {
  const [open, setOpen] = useState(false);
  const path = usePathname();
  const toggle = useRef<HTMLButtonElement>(null);
  const panel = useRef<HTMLElement>(null);
  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const key = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        toggle.current?.focus();
      }
      if (e.key === "Tab") {
        const all = [
          toggle.current,
          ...Array.from(
            panel.current?.querySelectorAll<HTMLAnchorElement>("a") || [],
          ),
        ].filter(Boolean) as HTMLElement[];
        const first = all[0],
          last = all.at(-1);
        if (e.shiftKey && document.activeElement === first) {
          e.preventDefault();
          last?.focus();
        } else if (!e.shiftKey && document.activeElement === last) {
          e.preventDefault();
          first?.focus();
        }
      }
    };
    document.addEventListener("keydown", key);
    return () => {
      document.body.style.overflow = previous;
      document.removeEventListener("keydown", key);
    };
  }, [open]);
  useEffect(() => {
    const media = window.matchMedia("(min-width: 1024px)");
    const closeOnDesktop = (event: MediaQueryListEvent) => {
      if (event.matches) setOpen(false);
    };
    media.addEventListener("change", closeOnDesktop);
    return () => media.removeEventListener("change", closeOnDesktop);
  }, []);
  useEffect(() => {
    const content = Array.from(
      document.querySelectorAll<HTMLElement>("main,footer"),
    );
    content.forEach((el) => {
      el.inert = open;
    });
    return () =>
      content.forEach((el) => {
        el.inert = false;
      });
  }, [open]);
  return (
    <header className={`site-header ${open ? "menu-open" : ""}`}>
      <div className="utility-bar">
        <div className="container">
          <span>STUDENT-LED. BUILT TO GO FURTHER.</span>
          <div>
            <Link href="/chapters">Find a Chapter</Link>
            <Link href="/resources#chapter-leaders">For Chapter Leaders ↗</Link>
          </div>
        </div>
      </div>
      <div className="header-inner">
        <Link
          className="brand"
          href="/"
          aria-label="Future Founders home"
          onClick={() => setOpen(false)}
        >
          <Image
            className="brand-image"
            src="/images/brand-mark.png"
            width={52}
            height={58}
            alt=""
            priority
          />
          <span>
            Future <br />
            Founders
          </span>
        </Link>
        <nav className="desktop-nav" aria-label="Main navigation">
          {navigation.map(([label, href]) => (
            <Link
              key={href}
              href={href}
              aria-current={
                path.replace(/\/$/, "") === href ? "page" : undefined
              }
            >
              {label}
            </Link>
          ))}
        </nav>
        <div className="header-actions">
          <Link className="join-link" href="/join">
            Join <span aria-hidden="true">↗</span>
          </Link>
          <Link className="header-cta" href="/start-a-chapter">
            Start a Chapter <span aria-hidden="true">↗</span>
          </Link>
        </div>
        <button
          className="menu-toggle"
          ref={toggle}
          aria-expanded={open}
          aria-controls="mobile-navigation"
          onClick={() => setOpen(!open)}
        >
          {open ? "Close" : "Menu"}
          <span aria-hidden="true">{open ? "×" : "+"}</span>
        </button>
      </div>
      {open && (
        <nav
          ref={panel}
          id="mobile-navigation"
          className="mobile-nav"
          aria-label="Mobile navigation"
        >
          <p className="eyebrow">BUILD WHAT’S NEXT.</p>
          {navigation.map(([label, href], i) => (
            <Link href={href} key={href} onClick={() => setOpen(false)}>
              <span>0{i + 1}</span>
              {label}
              <span aria-hidden="true">↗</span>
            </Link>
          ))}
          <div className="mobile-actions">
            <Link href="/start-a-chapter" onClick={() => setOpen(false)}>
              Start a Chapter →
            </Link>
            <Link href="/join" onClick={() => setOpen(false)}>
              Join the network →
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}

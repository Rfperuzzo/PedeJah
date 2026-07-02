"use client";

import { useState } from "react";

const navigation = ["Recursos", "Como funciona", "Planos", "Contato"];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-[#F8FAFC]/90 backdrop-blur">
      <div className="mx-auto flex h-[72px] w-full max-w-6xl items-center justify-between px-5 sm:px-6 lg:px-8">
        <a
          href="#"
          className="text-xl font-semibold tracking-normal text-[#111827]"
          aria-label="PedeJah"
        >
          PedeJah
        </a>

        <nav className="hidden items-center gap-8 md:flex" aria-label="Principal">
          {navigation.map((item) => (
            <a
              key={item}
              href="#"
              className="text-sm font-medium text-[#6B7280] transition-colors hover:text-[#111827]"
            >
              {item}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <a
            href="#"
            className="inline-flex h-10 items-center justify-center rounded-full bg-[#E53935] px-5 text-sm font-semibold text-white shadow-sm shadow-red-500/20 transition-colors hover:bg-[#d8322f] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#E53935]"
          >
            Começar agora
          </a>
        </div>

        <button
          type="button"
          className="inline-flex size-10 items-center justify-center rounded-full border border-slate-200 bg-white text-[#111827] shadow-sm transition-colors hover:bg-slate-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#E53935] md:hidden"
          aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={isOpen}
          aria-controls="mobile-menu"
          onClick={() => setIsOpen((current) => !current)}
        >
          <span className="sr-only">{isOpen ? "Fechar menu" : "Abrir menu"}</span>
          <span className="relative block h-4 w-5" aria-hidden="true">
            <span
              className={`absolute left-0 top-0 h-0.5 w-5 rounded-full bg-current transition-transform ${
                isOpen ? "translate-y-[7px] rotate-45" : ""
              }`}
            />
            <span
              className={`absolute left-0 top-[7px] h-0.5 w-5 rounded-full bg-current transition-opacity ${
                isOpen ? "opacity-0" : "opacity-100"
              }`}
            />
            <span
              className={`absolute bottom-0 left-0 h-0.5 w-5 rounded-full bg-current transition-transform ${
                isOpen ? "-translate-y-[7px] -rotate-45" : ""
              }`}
            />
          </span>
        </button>
      </div>

      <div
        id="mobile-menu"
        className={`border-t border-slate-200/80 bg-[#F8FAFC] px-5 py-4 md:hidden ${
          isOpen ? "block" : "hidden"
        }`}
      >
        <nav className="mx-auto flex max-w-6xl flex-col gap-1" aria-label="Principal mobile">
          {navigation.map((item) => (
            <a
              key={item}
              href="#"
              className="rounded-xl px-3 py-3 text-sm font-medium text-[#6B7280] transition-colors hover:bg-white hover:text-[#111827]"
              onClick={() => setIsOpen(false)}
            >
              {item}
            </a>
          ))}
          <a
            href="#"
            className="mt-3 inline-flex h-11 items-center justify-center rounded-full bg-[#E53935] px-5 text-sm font-semibold text-white shadow-sm shadow-red-500/20 transition-colors hover:bg-[#d8322f] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#E53935]"
            onClick={() => setIsOpen(false)}
          >
            Começar agora
          </a>
        </nav>
      </div>
    </header>
  );
}

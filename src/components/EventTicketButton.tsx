"use client";

import { useEffect, useState } from "react";
import { TicketIcon } from "@/components/TicketIcon";

type EventTicketButtonProps = {
  href: string;
  eventId: string;
  comingSoon?: boolean;
};

export function EventTicketButton({ href, eventId, comingSoon = false }: EventTicketButtonProps) {
  const isHirschhof = eventId === "summer-closing-2026";
  const [cooldown, setCooldown] = useState<number | null>(null);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (cooldown === null) return;

    if (cooldown === 0) {
      window.location.assign(href);
      return;
    }

    const timer = window.setTimeout(() => setCooldown((value) => (value === null ? null : value - 1)), 1000);
    return () => window.clearTimeout(timer);
  }, [cooldown, href]);

  async function handleHirschhofClick() {
    if (cooldown !== null) return;

    try {
      await navigator.clipboard.writeText("KPO");
    } catch {
      // Keep the interaction usable when clipboard access is unavailable.
    }

    setCopied(true);
    setCooldown(3);
  }

  if (comingSoon && !isHirschhof) {
    return (
      <a
        href={href}
        rel="noopener noreferrer"
        target="_blank"
        data-ticket
        className="btn-accent inline-flex min-h-11 flex-1 items-center justify-center gap-2 rounded-full px-6 text-[0.8rem] font-bold uppercase"
      >
        <TicketIcon className="h-[17px] w-[17px] shrink-0" />
        Tickets
      </a>
    );
  }

  if (isHirschhof) {
    const active = cooldown !== null;
    return (
      <button
        type="button"
        onClick={handleHirschhofClick}
        disabled={active}
        aria-live="polite"
        className={`btn-accent inline-flex min-h-11 flex-1 items-center justify-center gap-2 rounded-full px-6 text-[0.8rem] font-bold uppercase transition-transform duration-500 ${active ? "[transform:rotateY(360deg)]" : "hover:-translate-y-0.5"}`}
      >
        {active ? (
          <>
            <span className="inline-flex animate-[bounce_0.7s_ease-in-out] text-base" aria-hidden="true">⧉</span>
            {copied ? `KPO copied · ${cooldown}s` : "Copy KPO"}
          </>
        ) : (
          <>
            <span aria-hidden="true">KPO</span>
            <span>Tickets</span>
          </>
        )}
      </button>
    );
  }

  return (
    <a
      href={href}
      rel="noopener noreferrer"
      target="_blank"
      data-ticket
      className="btn-accent inline-flex min-h-11 flex-1 items-center justify-center gap-2 rounded-full px-6 text-[0.8rem] font-bold uppercase"
    >
      <TicketIcon className="h-[17px] w-[17px] shrink-0" />
      Tickets
    </a>
  );
}

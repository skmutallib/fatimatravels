"use client";

import { useEffect, useRef, useState, type InputHTMLAttributes, type ReactNode } from "react";

type Suggestion = { id: number; label: string };

type LocationAutocompleteProps = {
  value: string;
  onChange: (value: string) => void;
  icon?: ReactNode;
} & Omit<InputHTMLAttributes<HTMLInputElement>, "value" | "onChange" | "type">;

export default function LocationAutocomplete({
  value,
  onChange,
  icon,
  className,
  ...inputProps
}: LocationAutocompleteProps) {
  const [suggestions, setSuggestions] = useState<Suggestion[]>([]);
  const [open, setOpen] = useState(false);
  const [loading, setLoading] = useState(false);
  const [highlighted, setHighlighted] = useState(-1);
  const containerRef = useRef<HTMLDivElement>(null);
  const requestIdRef = useRef(0);

  useEffect(() => {
    const query = value.trim();
    if (query.length < 3) return;

    const requestId = ++requestIdRef.current;
    const timer = setTimeout(async () => {
      try {
        const res = await fetch(`/api/geocode?q=${encodeURIComponent(query)}`);
        const data = await res.json();
        if (requestId === requestIdRef.current) {
          setSuggestions(data.results ?? []);
        }
      } catch {
        if (requestId === requestIdRef.current) setSuggestions([]);
      } finally {
        if (requestId === requestIdRef.current) setLoading(false);
      }
    }, 350);

    return () => clearTimeout(timer);
  }, [value]);

  useEffect(() => {
    function onClickOutside(e: MouseEvent) {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", onClickOutside);
    return () => document.removeEventListener("mousedown", onClickOutside);
  }, []);

  const select = (label: string) => {
    onChange(label);
    setSuggestions([]);
    setOpen(false);
    setHighlighted(-1);
  };

  const showDropdown = open && value.trim().length >= 3 && (loading || suggestions.length > 0);

  return (
    <div ref={containerRef} className="relative">
      <input
        {...inputProps}
        type="text"
        value={value}
        autoComplete="off"
        className={className}
        onChange={(e) => {
          const next = e.target.value;
          onChange(next);
          setOpen(true);
          setHighlighted(-1);
          if (next.trim().length < 3) {
            setSuggestions([]);
            setLoading(false);
          } else {
            setLoading(true);
          }
        }}
        onFocus={() => setOpen(true)}
        onKeyDown={(e) => {
          if (!open || suggestions.length === 0) return;
          if (e.key === "ArrowDown") {
            e.preventDefault();
            setHighlighted((h) => (h + 1) % suggestions.length);
          } else if (e.key === "ArrowUp") {
            e.preventDefault();
            setHighlighted((h) => (h <= 0 ? suggestions.length - 1 : h - 1));
          } else if (e.key === "Enter" && highlighted >= 0) {
            e.preventDefault();
            select(suggestions[highlighted].label);
          } else if (e.key === "Escape") {
            setOpen(false);
          }
        }}
      />

      {icon}

      {showDropdown && (
        <ul className="absolute left-0 right-0 top-full z-30 mt-1.5 max-h-64 overflow-y-auto rounded-lg border border-zinc-200 bg-white py-1.5 shadow-lg">
          {loading && suggestions.length === 0 ? (
            <li className="px-4 py-2.5 text-sm text-zinc-400">Searching…</li>
          ) : (
            suggestions.map((s, i) => (
              <li key={s.id}>
                <button
                  type="button"
                  onMouseDown={(e) => e.preventDefault()}
                  onClick={() => select(s.label)}
                  className={`block w-full truncate px-4 py-2.5 text-left text-sm ${
                    i === highlighted
                      ? "bg-primary/10 text-primary"
                      : "text-zinc-700 hover:bg-zinc-50"
                  }`}
                >
                  {s.label}
                </button>
              </li>
            ))
          )}
        </ul>
      )}
    </div>
  );
}

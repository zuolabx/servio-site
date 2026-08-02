import React from "react";

const base = {
  width: 20,
  height: 20,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
};

export const icons: Record<string, React.ReactNode> = {
  orders: (
    <svg {...base}><rect x="4" y="4" width="16" height="16" rx="2" /><path d="M8 9h8M8 13h5" /></svg>
  ),
  kitchen: (
    <svg {...base}><path d="M6 20h12M8 20V9a4 4 0 0 1 8 0v11" /><path d="M8 12h8" /></svg>
  ),
  table: (
    <svg {...base}><ellipse cx="12" cy="8" rx="7" ry="3" /><path d="M5 8v4M19 8v4M9 12v8M15 12v8" /></svg>
  ),
  menu: (
    <svg {...base}><path d="M5 5h14M5 12h14M5 19h9" /></svg>
  ),
  inventory: (
    <svg {...base}><path d="M3 7l9-4 9 4-9 4-9-4Z" /><path d="M3 7v10l9 4 9-4V7" /><path d="M12 11v10" /></svg>
  ),
  billing: (
    <svg {...base}><path d="M6 3h12v18l-3-2-3 2-3-2-3 2V3Z" /><path d="M9 8h6M9 12h6" /></svg>
  ),
  payment: (
    <svg {...base}><rect x="3" y="6" width="18" height="13" rx="2" /><path d="M3 10h18M7 15h4" /></svg>
  ),
  staff: (
    <svg {...base}><circle cx="9" cy="8" r="3" /><path d="M3 20c0-3.3 2.7-6 6-6s6 2.7 6 6" /><circle cx="17" cy="8" r="2.5" /><path d="M22 20c0-2.6-1.8-4.8-4-5.6" /></svg>
  ),
  analytics: (
    <svg {...base}><path d="M4 20V10M11 20V4M18 20v-7" /></svg>
  ),
  mobile: (
    <svg {...base}><rect x="7" y="2" width="10" height="20" rx="2" /><path d="M11 18h2" /></svg>
  ),
};

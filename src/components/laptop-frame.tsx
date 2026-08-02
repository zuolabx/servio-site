import React from "react";

export default function LaptopFrame({ children }: { children: React.ReactNode }) {
  return (
    <div className="mx-auto w-full max-w-2xl">
      {/* screen */}
      <div className="rounded-t-2xl rounded-b-md border-[10px] border-b-0 border-neutral-900 bg-neutral-900 shadow-2xl">
        <div className="flex items-center justify-center border-b border-neutral-800 py-1">
          <span className="h-1.5 w-1.5 rounded-full bg-neutral-700" />
        </div>
        <div className="overflow-hidden rounded-b-sm bg-white">{children}</div>
      </div>
      {/* base */}
      <div
        className="mx-auto h-3 w-full rounded-b-xl bg-neutral-800"
        style={{ clipPath: "polygon(4% 0, 96% 0, 100% 100%, 0% 100%)" }}
      />
      <div className="mx-auto h-1 w-24 rounded-b-md bg-neutral-700" />
    </div>
  );
}

'use client';

import { cn } from '@/lib/utils';

interface WindowFrameProps {
  children: React.ReactNode;
  className?: string;
}

export function WindowFrame({ children, className }: WindowFrameProps) {
  return (
    <div
      className={cn(
        'overflow-hidden rounded-xl border border-sand-300 bg-sand-50 shadow-lg',
        className
      )}
    >
      {/* macOS-style title bar */}
      <div className="flex items-center gap-2 border-b border-sand-300 bg-sand-100 px-4 py-3">
        <div className="size-3 rounded-full bg-[#EC6A5E]" />
        <div className="size-3 rounded-full bg-[#F4BF4F]" />
        <div className="size-3 rounded-full bg-[#61C554]" />
        <div className="ml-4 h-5 w-48 rounded-md bg-sand-200" />
      </div>
      {/* Content area */}
      <div className="p-6">{children}</div>
    </div>
  );
}

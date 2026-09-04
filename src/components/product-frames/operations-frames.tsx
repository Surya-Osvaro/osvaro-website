"use client";

import React from "react";
import {
  Kanban,
  ChartBar,
  WarningCircle,
  Clock,
  TrendUp,
  CaretRight,
  UserCircle
} from "@phosphor-icons/react";
import { cn } from "@/lib/utils";
import { WindowFrame } from "@/components/product-frames/window-frame";

export function OPFrame1() {
  return (
    <WindowFrame>
      <div className="flex flex-col h-full bg-[#FAF8F4] text-[#1A1A1A] text-sm overflow-hidden">
        <header className="flex items-center justify-between border-b border-sand-200 p-4 bg-white/50 shrink-0">
          <h3 className="font-semibold text-base flex items-center gap-2">
            <Kanban size={20} /> Matter Pipeline
          </h3>
          <span className="text-xs font-medium text-sand-600 bg-sand-200 px-2 py-1 rounded">29 Active Matters</span>
        </header>
        <div className="p-4 flex-1 overflow-x-auto">
          <div className="flex gap-3 h-full min-w-max">
            {[
              { title: "Intake", count: 4, blocked: 0 },
              { title: "Doc Collection", count: 8, blocked: 2 },
              { title: "Review", count: 3, blocked: 1 },
              { title: "Submission", count: 2, blocked: 0 }
            ].map((col, i) => (
              <div key={i} className="bg-sand-100/50 rounded-lg border border-sand-200 w-48 flex flex-col h-full">
                <div className="p-3 border-b border-sand-200 flex justify-between items-center bg-white/50 rounded-t-lg">
                  <div className="font-medium text-sm">{col.title}</div>
                  <div className="bg-white border border-sand-200 text-xs px-1.5 py-0.5 rounded shadow-sm">{col.count}</div>
                </div>
                <div className="p-2 space-y-2 flex-1 overflow-y-auto">
                  {Array.from({ length: Math.min(col.count, 3) }).map((_, j) => (
                    <div key={j} className={cn("bg-white p-2 rounded border shadow-sm text-xs", (i === 1 && j < 2) || (i === 2 && j === 0) ? "border-red-300 border-l-2 border-l-red-500" : "border-sand-200")}>
                      <div className="font-medium mb-1">Skilled Worker</div>
                      <div className="text-sand-500 flex justify-between">
                        <span>A. Smith</span>
                        <span className="text-[10px] bg-sand-100 px-1 rounded">TechCorp</span>
                      </div>
                    </div>
                  ))}
                  {col.count > 3 && <div className="text-center text-xs text-sand-400 py-1">+{col.count - 3} more</div>}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </WindowFrame>
  );
}

export function OPFrame2() {
  return (
    <WindowFrame>
      <div className="flex flex-col h-full bg-[#FAF8F4] text-[#1A1A1A] text-sm">
        <header className="border-b border-sand-200 p-4 bg-white/50">
          <h3 className="font-semibold text-base">Workload & Capacity</h3>
        </header>
        <div className="p-4 flex-1 overflow-y-auto space-y-6">
          
          <div className="bg-amber-50 border border-amber-200 rounded-lg p-3 flex items-start gap-3">
            <WarningCircle size={20} className="text-amber-600 shrink-0" />
            <div>
              <div className="font-medium text-amber-900 text-sm">Bottleneck Alert</div>
              <div className="text-xs text-amber-800 mt-1">Document Collection stage averaging 12 days (target: 5). Consider redistributing cases.</div>
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="font-medium text-xs uppercase tracking-wider text-sand-500">Team Capacity</h4>
            
            {[
              { name: "J. Smith", matters: 12, cap: 85, color: "bg-olive-500" },
              { name: "S. Khan", matters: 9, cap: 65, color: "bg-olive-500" },
              { name: "R. Evans", matters: 14, cap: 100, color: "bg-red-500" },
              { name: "M. Chen", matters: 7, cap: 50, color: "bg-olive-400" }
            ].map((member, i) => (
              <div key={i}>
                <div className="flex justify-between text-xs mb-1">
                  <span className="font-medium flex items-center gap-1"><UserCircle size={14}/> {member.name}</span>
                  <span className="text-sand-500">{member.matters} matters • {member.cap}%</span>
                </div>
                <div className="h-1.5 w-full bg-sand-200 rounded-full overflow-hidden">
                  <div className={cn("h-full", member.color)} style={{ width: `${member.cap}%` }}></div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </div>
    </WindowFrame>
  );
}

export function OPFrame3() {
  return (
    <WindowFrame>
      <div className="flex flex-col h-full bg-[#FAF8F4] text-[#1A1A1A] text-sm">
        <header className="flex items-center justify-between border-b border-sand-200 p-4 bg-white/50">
          <h3 className="font-semibold text-base">Exception & Ageing Dashboard</h3>
          <span className="bg-red-100 text-red-800 text-xs px-2 py-1 rounded">7 Open Exceptions</span>
        </header>
        <div className="p-4 flex-1 overflow-y-auto space-y-5">
          
          <div>
            <h4 className="font-medium text-xs uppercase tracking-wider text-sand-500 mb-3">Matter Ageing</h4>
            <div className="space-y-2">
              <div className="flex items-center gap-3">
                <div className="w-16 text-xs text-right text-sand-600">0-5 days</div>
                <div className="flex-1 h-3 bg-sand-200 rounded-full overflow-hidden">
                  <div className="h-full bg-green-500 w-[40%]"></div>
                </div>
                <div className="w-6 text-xs font-medium">8</div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-16 text-xs text-right text-sand-600">6-10 days</div>
                <div className="flex-1 h-3 bg-sand-200 rounded-full overflow-hidden">
                  <div className="h-full bg-olive-500 w-[30%]"></div>
                </div>
                <div className="w-6 text-xs font-medium">6</div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-16 text-xs text-right text-sand-600">11-20 days</div>
                <div className="flex-1 h-3 bg-sand-200 rounded-full overflow-hidden">
                  <div className="h-full bg-amber-500 w-[20%]"></div>
                </div>
                <div className="w-6 text-xs font-medium">4</div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-16 text-xs text-right text-sand-600">20+ days</div>
                <div className="flex-1 h-3 bg-sand-200 rounded-full overflow-hidden">
                  <div className="h-full bg-red-500 w-[15%]"></div>
                </div>
                <div className="w-6 text-xs font-medium text-red-600">3</div>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg border border-sand-200 p-3">
            <h4 className="font-medium text-xs border-b border-sand-100 pb-2 mb-2 flex items-center gap-2">
              <Clock size={16} /> Needs Attention (Oldest)
            </h4>
            <div className="space-y-3">
              <div className="flex justify-between items-center text-xs">
                <div>
                  <div className="font-medium">Global Mobility Visa (L. Silva)</div>
                  <div className="text-sand-500">Stuck in Doc Collection</div>
                </div>
                <div className="text-red-600 font-medium bg-red-50 px-2 py-1 rounded">24 days</div>
              </div>
              <div className="flex justify-between items-center text-xs">
                <div>
                  <div className="font-medium">Skilled Worker (T. Chen)</div>
                  <div className="text-sand-500">Missing Sponsor Docs</div>
                </div>
                <div className="text-amber-600 font-medium bg-amber-50 px-2 py-1 rounded">18 days</div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </WindowFrame>
  );
}

export function OPFrame4() {
  return (
    <WindowFrame>
      <div className="flex flex-col h-full bg-[#FAF8F4] text-[#1A1A1A] text-sm">
        <header className="flex items-center justify-between border-b border-sand-200 p-4 bg-white/50">
          <h3 className="font-semibold text-base">Weekly Operational Summary</h3>
          <span className="flex items-center gap-1 text-olive-600 text-xs font-medium bg-olive-50 px-2 py-1 rounded">
            <TrendUp size={14} /> Improving
          </span>
        </header>
        <div className="p-4 flex-1 overflow-y-auto space-y-4">
          
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-white p-3 rounded-lg border border-sand-200">
              <div className="text-2xl font-semibold text-olive-600 mb-1">8</div>
              <div className="text-xs text-sand-500 uppercase tracking-wider">Matters Completed</div>
            </div>
            <div className="bg-white p-3 rounded-lg border border-sand-200">
              <div className="text-2xl font-semibold text-olive-600 mb-1">14 <span className="text-sm font-normal">days</span></div>
              <div className="text-xs text-sand-500 uppercase tracking-wider">Avg Cycle Time</div>
            </div>
            <div className="bg-white p-3 rounded-lg border border-sand-200">
              <div className="text-2xl font-semibold text-olive-600 mb-1">12</div>
              <div className="text-xs text-sand-500 uppercase tracking-wider">Exceptions Resolved</div>
            </div>
            <div className="bg-white p-3 rounded-lg border border-sand-200">
              <div className="text-2xl font-semibold text-olive-600 mb-1">15</div>
              <div className="text-xs text-sand-500 uppercase tracking-wider">Client Updates Sent</div>
            </div>
          </div>

          <div className="bg-sand-100 rounded-lg p-4">
            <h4 className="font-medium text-xs uppercase tracking-wider text-sand-600 mb-3">Recommended Actions</h4>
            <div className="space-y-2">
              <div className="bg-white p-2.5 rounded border border-sand-200 text-xs flex items-center justify-between cursor-pointer hover:border-sand-300">
                <span className="font-medium text-sand-800">Reassign 2 matters from R. Evans</span>
                <CaretRight size={14} className="text-sand-400" />
              </div>
              <div className="bg-white p-2.5 rounded border border-sand-200 text-xs flex items-center justify-between cursor-pointer hover:border-sand-300">
                <span className="font-medium text-sand-800">Review 3 overdue documents</span>
                <CaretRight size={14} className="text-sand-400" />
              </div>
              <div className="bg-white p-2.5 rounded border border-sand-200 text-xs flex items-center justify-between cursor-pointer hover:border-sand-300">
                <span className="font-medium text-sand-800">Approve final submission (A. Patel)</span>
                <CaretRight size={14} className="text-sand-400" />
              </div>
            </div>
          </div>

        </div>
      </div>
    </WindowFrame>
  );
}

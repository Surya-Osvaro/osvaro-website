"use client";

import React from "react";
import {
  CalendarBlank,
  Users,
  Building,
  WarningCircle,
  CheckCircle,
  FileArrowDown,
  ChartPieSlice,
  ShieldCheck,
  ListChecks
} from "@phosphor-icons/react";
import { cn } from "@/lib/utils";
import { WindowFrame } from "@/components/product-frames/window-frame";

export function SCFrame1() {
  return (
    <WindowFrame>
      <div className="flex flex-col h-full bg-[#FAF8F4] text-[#1A1A1A] text-sm">
        <header className="border-b border-sand-200 p-4 bg-white/50">
          <h3 className="font-semibold text-base flex items-center gap-2">
            <Building size={20} /> Sponsor Profile & Compliance
          </h3>
        </header>
        <div className="p-4 flex-1 overflow-y-auto space-y-5">
          
          <div className="bg-white p-4 rounded-lg border border-sand-200 flex flex-col gap-4">
            <div className="flex justify-between items-start">
              <div>
                <h4 className="font-semibold text-lg">TechNova Ltd</h4>
                <p className="text-sand-500 text-xs">Licence: A8B9C0D1</p>
              </div>
              <span className="bg-olive-100 text-olive-800 text-xs font-medium px-2 py-1 rounded flex items-center gap-1">
                <ShieldCheck size={14} /> A-Rated
              </span>
            </div>
            <div className="grid grid-cols-2 gap-2 text-sm pt-2 border-t border-sand-100">
              <div className="flex items-center gap-2"><Users size={16} className="text-sand-400"/> 24 Workers</div>
              <div className="flex items-center gap-2 text-sand-600">2 Key Contacts</div>
            </div>
          </div>

          <div>
            <h4 className="font-medium text-xs uppercase tracking-wider text-sand-500 mb-3 flex items-center gap-1">
              <CalendarBlank size={16} /> Compliance Calendar
            </h4>
            <div className="space-y-2">
              <div className="flex items-center justify-between bg-white p-3 rounded border border-sand-200">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-red-500"></div>
                  <div>
                    <div className="font-medium">Right to Work Renewal (A. Patel)</div>
                    <div className="text-xs text-sand-500">Due: Tomorrow</div>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-between bg-white p-3 rounded border border-sand-200">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-amber-500"></div>
                  <div>
                    <div className="font-medium">Report Change in Work Location</div>
                    <div className="text-xs text-sand-500">Due: Within 5 days</div>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-between bg-white p-3 rounded border border-sand-200">
                <div className="flex items-center gap-3">
                  <div className="w-2 h-2 rounded-full bg-olive-500"></div>
                  <div>
                    <div className="font-medium">Annual Licence Renewal Prep</div>
                    <div className="text-xs text-sand-500">Due: Next Month</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </WindowFrame>
  );
}

export function SCFrame2() {
  return (
    <WindowFrame>
      <div className="flex flex-col h-full bg-[#FAF8F4] text-[#1A1A1A] text-sm">
        <header className="flex items-center justify-between border-b border-sand-200 p-4 bg-white/50">
          <h3 className="font-semibold text-base flex items-center gap-2">
            <ListChecks size={20} /> Assigned Actions
          </h3>
          <span className="text-xs bg-sand-200 px-2 py-1 rounded text-sand-700">3 Pending</span>
        </header>
        <div className="p-4 flex-1 overflow-y-auto">
          <div className="bg-white border border-sand-200 rounded-lg overflow-hidden">
            <table className="w-full text-left text-sm">
              <thead className="bg-sand-50 text-xs text-sand-500 uppercase">
                <tr>
                  <th className="p-3 font-medium">Task</th>
                  <th className="p-3 font-medium">Assignee</th>
                  <th className="p-3 font-medium">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-sand-100">
                <tr>
                  <td className="p-3"><div className="font-medium">Update Home Address</div><div className="text-xs text-sand-400">Due: 12 Oct</div></td>
                  <td className="p-3 text-sand-600">S. Worker</td>
                  <td className="p-3">
                    <span className="bg-sand-100 text-sand-700 text-xs px-2 py-1 rounded">Awaiting</span>
                  </td>
                </tr>
                <tr>
                  <td className="p-3"><div className="font-medium">Confirm Salary Details</div><div className="text-xs text-red-500">Overdue</div></td>
                  <td className="p-3 text-sand-600">HR Mgr</td>
                  <td className="p-3">
                    <span className="bg-red-100 text-red-700 text-xs px-2 py-1 rounded">Overdue</span>
                  </td>
                </tr>
                <tr>
                  <td className="p-3"><div className="font-medium">Upload Payslips (Q3)</div><div className="text-xs text-sand-400">Due: 15 Oct</div></td>
                  <td className="p-3 text-sand-600">Finance</td>
                  <td className="p-3">
                    <span className="bg-amber-100 text-amber-800 text-xs px-2 py-1 rounded">In Progress</span>
                  </td>
                </tr>
                <tr>
                  <td className="p-3"><div className="font-medium">Sign Worker Declaration</div><div className="text-xs text-sand-400">Due: 01 Oct</div></td>
                  <td className="p-3 text-sand-600">M. Chen</td>
                  <td className="p-3">
                    <span className="bg-olive-100 text-olive-800 text-xs px-2 py-1 rounded">Completed</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </WindowFrame>
  );
}

export function SCFrame3() {
  return (
    <WindowFrame>
      <div className="flex flex-col h-full bg-[#FAF8F4] text-[#1A1A1A] text-sm">
        <header className="border-b border-sand-200 p-4 bg-white/50">
          <h3 className="font-semibold text-base">Continuous Risk Detection</h3>
          <p className="text-xs text-sand-500 mt-1">12 Green • 3 Amber • 1 Red</p>
        </header>
        <div className="p-4 flex-1 overflow-y-auto space-y-3">
          
          <div className="bg-white border-l-4 border-l-red-500 border border-sand-200 p-4 rounded-r shadow-sm">
            <div className="flex items-start gap-2 mb-2">
              <WarningCircle size={18} className="text-red-500 mt-0.5"/>
              <div>
                <div className="font-medium text-red-900">Salary below minimum threshold</div>
                <div className="text-xs text-sand-500 mt-0.5">Role: Software Engineer (Worker ID: 9482)</div>
              </div>
            </div>
            <div className="mt-2 text-xs bg-sand-50 p-2 rounded text-sand-600 border border-sand-100">Action: Review salary increase immediately to meet new going rate requirements.</div>
          </div>

          <div className="bg-white border-l-4 border-l-amber-500 border border-sand-200 p-4 rounded-r shadow-sm">
            <div className="flex items-start gap-2 mb-2">
              <WarningCircle size={18} className="text-amber-500 mt-0.5"/>
              <div>
                <div className="font-medium text-amber-900">Passport expiring in 45 days</div>
                <div className="text-xs text-sand-500 mt-0.5">Worker: J. Doe</div>
              </div>
            </div>
            <div className="mt-2 text-xs bg-sand-50 p-2 rounded text-sand-600 border border-sand-100">Action: Automated request sent to worker for updated passport details.</div>
          </div>

          <div className="bg-white border-l-4 border-l-amber-500 border border-sand-200 p-4 rounded-r shadow-sm">
            <div className="flex items-start gap-2 mb-2">
              <WarningCircle size={18} className="text-amber-500 mt-0.5"/>
              <div>
                <div className="font-medium text-amber-900">Incomplete reporting info</div>
                <div className="text-xs text-sand-500 mt-0.5">Change in work location for 2 workers</div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </WindowFrame>
  );
}

export function SCFrame4() {
  return (
    <WindowFrame>
      <div className="flex flex-col h-full bg-[#FAF8F4] text-[#1A1A1A] text-sm">
        <header className="flex flex-col items-center justify-center border-b border-sand-200 p-6 bg-white/50 text-center">
          <div className="relative w-16 h-16 flex items-center justify-center mb-3">
            <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
              <path className="text-sand-200" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeWidth="3" />
              <path className="text-olive-500" strokeDasharray="94, 100" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeWidth="3" />
            </svg>
            <div className="absolute font-bold text-lg">94%</div>
          </div>
          <h3 className="font-semibold text-base">Audit-Ready Overview</h3>
          <p className="text-xs text-sand-500">Compliance Health Score</p>
        </header>
        <div className="p-4 flex-1 overflow-y-auto space-y-4">
          
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-white p-3 rounded border border-sand-200 flex flex-col items-center text-center">
              <div className="font-medium text-olive-600 mb-1">100%</div>
              <div className="text-xs text-sand-500">Right to Work Checks</div>
            </div>
            <div className="bg-white p-3 rounded border border-sand-200 flex flex-col items-center text-center">
              <div className="font-medium text-amber-600 mb-1">92%</div>
              <div className="text-xs text-sand-500">Contact Details Verified</div>
            </div>
          </div>

          <div className="bg-white border border-sand-200 rounded-lg p-4 flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="bg-sand-100 p-2 rounded-full">
                <FileArrowDown size={24} className="text-sand-700" />
              </div>
              <div>
                <div className="font-medium">Audit Preparation Pack</div>
                <div className="text-xs text-sand-500">Generated: Today, 08:00 AM</div>
              </div>
            </div>
            <button className="bg-[#1A1A1A] text-white px-3 py-1.5 rounded text-xs font-medium hover:bg-black/80 transition-colors">
              Download
            </button>
          </div>

        </div>
      </div>
    </WindowFrame>
  );
}

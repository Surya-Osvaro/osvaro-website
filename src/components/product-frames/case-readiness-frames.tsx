"use client";

import React from "react";
import {
  FolderSimple,
  CheckCircle,
  CircleDashed,
  UploadSimple,
  WarningCircle,
  Warning,
  Check,
  Clock,
  FileText
} from "@phosphor-icons/react";
import { cn } from "@/lib/utils";
import { WindowFrame } from "@/components/product-frames/window-frame";

export function CRFrame1() {
  return (
    <WindowFrame>
      <div className="flex flex-col h-full bg-sand-50/50 text-[#1A1A1A] text-sm">
        <header className="flex items-center justify-between border-b border-sand-200 p-4 bg-white/50">
          <div>
            <h3 className="font-semibold text-base">New Matter — Skilled Worker</h3>
            <p className="text-xs text-sand-500">Applicant: A. Patel | Employer: TechCorp Ltd</p>
          </div>
          <span className="bg-olive-100 text-olive-800 text-xs font-medium px-2 py-1 rounded-full flex items-center gap-1">
            <CheckCircle weight="fill" className="text-olive-600" /> Checklist Generated
          </span>
        </header>
        <div className="p-4 flex-1 overflow-y-auto space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white p-3 rounded-lg border border-sand-200">
              <div className="text-xs text-sand-500 mb-1">Matter Type</div>
              <div className="font-medium">Skilled Worker</div>
            </div>
            <div className="bg-white p-3 rounded-lg border border-sand-200">
              <div className="text-xs text-sand-500 mb-1">Workflow</div>
              <div className="font-medium">Standard</div>
            </div>
          </div>
          <h4 className="font-medium pt-2">Generated Checklist</h4>
          <div className="space-y-2">
            {[
              { title: "Identity", items: 2, status: "complete" },
              { title: "Employment", items: 3, status: "pending" },
              { title: "Financial", items: 2, status: "pending" },
              { title: "Sponsor Documents", items: 2, status: "pending" },
              { title: "Supporting Evidence", items: 2, status: "pending" }
            ].map((cat, i) => (
              <div key={i} className="flex items-center justify-between bg-white p-3 rounded border border-sand-200">
                <div className="flex items-center gap-3">
                  <FolderSimple size={20} className="text-sand-400" />
                  <div>
                    <div className="font-medium">{cat.title}</div>
                    <div className="text-xs text-sand-500">{cat.items} items</div>
                  </div>
                </div>
                {cat.status === "complete" ? (
                  <CheckCircle weight="fill" size={20} className="text-olive-500" />
                ) : (
                  <CircleDashed size={20} className="text-sand-300" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </WindowFrame>
  );
}

export function CRFrame2() {
  return (
    <WindowFrame>
      <div className="flex flex-col h-full bg-[#FAF8F4] text-[#1A1A1A] text-sm">
        <header className="flex flex-col gap-2 border-b border-sand-200 p-4 bg-white/50">
          <div className="flex items-center justify-between">
            <h3 className="font-semibold text-base">Evidence Portal</h3>
            <span className="text-xs font-medium bg-sand-200 px-2 py-1 rounded">11 of 18 received</span>
          </div>
          <div className="h-1.5 w-full bg-sand-200 rounded-full overflow-hidden">
            <div className="h-full bg-olive-500 w-[61%]"></div>
          </div>
        </header>
        <div className="p-4 flex-1 overflow-y-auto space-y-6">
          <div className="border-2 border-dashed border-sand-300 rounded-lg p-6 flex flex-col items-center justify-center text-center bg-sand-50">
            <UploadSimple size={24} className="text-sand-400 mb-2" />
            <div className="font-medium">Upload missing documents</div>
            <div className="text-xs text-sand-500 mt-1">Drag and drop or click to browse</div>
          </div>
          
          <div>
            <h4 className="font-medium mb-3 text-sand-500 text-xs uppercase tracking-wider">Required Documents</h4>
            <div className="space-y-2">
              <div className="flex items-center justify-between bg-white p-3 rounded border border-sand-200">
                <span className="font-medium">Passport</span>
                <span className="flex items-center gap-1 text-xs text-olive-600 font-medium"><Check size={14} /> Received</span>
              </div>
              <div className="flex items-center justify-between bg-white p-3 rounded border border-sand-200">
                <span className="font-medium">Right to Work</span>
                <span className="flex items-center gap-1 text-xs text-olive-600 font-medium"><Check size={14} /> Received</span>
              </div>
              <div className="flex items-center justify-between bg-white p-3 rounded border border-sand-200">
                <span className="font-medium">Employment Contract</span>
                <span className="flex items-center gap-1 text-xs text-olive-600 font-medium"><Check size={14} /> Received</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="font-medium mb-3 text-red-700 text-xs uppercase tracking-wider flex items-center gap-1">
              <WarningCircle size={14} /> Still Needed (7 missing)
            </h4>
            <div className="space-y-2">
              <div className="flex items-center justify-between bg-white p-3 rounded border border-red-100">
                <span className="font-medium text-red-900">Bank Statements</span>
                <span className="text-xs text-red-600 font-medium">Missing</span>
              </div>
              <div className="flex items-center justify-between bg-white p-3 rounded border border-red-100">
                <span className="font-medium text-red-900">Qualification Certificate</span>
                <span className="text-xs text-red-600 font-medium">Missing</span>
              </div>
              <div className="flex items-center justify-between bg-white p-3 rounded border border-amber-200">
                <span className="font-medium text-amber-900">TB Certificate</span>
                <span className="text-xs text-amber-600 font-medium flex items-center gap-1"><Clock size={14}/> Reviewing</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </WindowFrame>
  );
}

export function CRFrame3() {
  return (
    <WindowFrame>
      <div className="flex flex-col h-full bg-[#FAF8F4] text-[#1A1A1A] text-sm">
        <header className="flex items-center justify-between border-b border-sand-200 p-4 bg-white/50">
          <div>
            <h3 className="font-semibold text-base">Document Checks</h3>
            <p className="text-xs text-sand-500">15 checks passed, 3 exceptions</p>
          </div>
          <span className="bg-red-100 text-red-800 text-xs font-medium px-2 py-1 rounded flex items-center gap-1">
            <Warning size={14} /> 3 Exceptions Detected
          </span>
        </header>
        <div className="p-4 flex-1 overflow-y-auto space-y-3">
          
          <div className="bg-white border-l-4 border-l-red-500 border border-sand-200 p-4 rounded-r shadow-sm">
            <div className="flex items-start justify-between mb-2">
              <div className="font-medium text-red-900 flex items-center gap-2">
                <WarningCircle size={16} className="text-red-500"/> HIGH: Passport Expiry
              </div>
            </div>
            <p className="text-sm">Passport expires within 60 days.</p>
            <div className="mt-3 text-xs bg-sand-50 p-2 rounded text-sand-600">Action: Request client to renew passport or sign waiver acknowledging risk.</div>
          </div>

          <div className="bg-white border-l-4 border-l-amber-500 border border-sand-200 p-4 rounded-r shadow-sm">
            <div className="flex items-start justify-between mb-2">
              <div className="font-medium text-amber-900 flex items-center gap-2">
                <WarningCircle size={16} className="text-amber-500"/> MEDIUM: Name Mismatch
              </div>
            </div>
            <p className="text-sm">Certificate shows 'A. Patil' vs 'A. Patel' on Passport.</p>
            <div className="mt-3 text-xs bg-sand-50 p-2 rounded text-sand-600">Action: Request deed poll or affidavit of same name.</div>
          </div>

          <div className="bg-white border-l-4 border-l-olive-500 border border-sand-200 p-4 rounded-r shadow-sm">
            <div className="flex items-start justify-between mb-2">
              <div className="font-medium text-olive-900 flex items-center gap-2">
                <WarningCircle size={16} className="text-olive-500"/> REVIEW: Financial Evidence
              </div>
            </div>
            <p className="text-sm">Bank statement covers 2 of 3 required months.</p>
            <div className="mt-3 text-xs bg-sand-50 p-2 rounded text-sand-600">Action: Verify if employer is certifying maintenance. If yes, dismiss exception.</div>
          </div>

        </div>
      </div>
    </WindowFrame>
  );
}

export function CRFrame4() {
  return (
    <WindowFrame>
      <div className="flex flex-col h-full bg-[#FAF8F4] text-[#1A1A1A] text-sm">
        <header className="flex flex-col items-center justify-center border-b border-sand-200 p-6 bg-white/50">
          <div className="bg-olive-100 text-olive-800 text-lg font-semibold px-4 py-2 rounded-full flex items-center gap-2 mb-2">
            <CheckCircle weight="fill" size={24} className="text-olive-600" /> Ready for Review
          </div>
          <h3 className="font-semibold text-base">Matter Readiness Dashboard</h3>
        </header>
        <div className="p-4 flex-1 overflow-y-auto space-y-4">
          
          <div className="grid grid-cols-3 gap-3 text-center">
            <div className="bg-white p-3 rounded-lg border border-sand-200">
              <div className="text-2xl font-semibold text-olive-600 mb-1">18/18</div>
              <div className="text-xs text-sand-500 uppercase tracking-wider">Evidence</div>
            </div>
            <div className="bg-white p-3 rounded-lg border border-sand-200">
              <div className="text-2xl font-semibold text-olive-600 mb-1">0/0</div>
              <div className="text-xs text-sand-500 uppercase tracking-wider">Exceptions</div>
            </div>
            <div className="bg-white p-3 rounded-lg border border-sand-200">
              <div className="text-2xl font-semibold text-olive-600 mb-1">18/18</div>
              <div className="text-xs text-sand-500 uppercase tracking-wider">Checks Passed</div>
            </div>
          </div>

          <div className="bg-white rounded-lg border border-sand-200 overflow-hidden">
            <div className="bg-sand-100 p-3 font-medium border-b border-sand-200 text-sm flex items-center gap-2">
              <FileText size={18} /> Caseworker Brief
            </div>
            <div className="p-4 space-y-2 text-sm">
              <p>• All required documents have been uploaded and verified.</p>
              <p>• 3 initial exceptions were manually cleared (Employer certifying maintenance).</p>
              <p>• Ready for immediate submission to Home Office.</p>
            </div>
          </div>

          <div>
            <h4 className="font-medium text-xs uppercase tracking-wider text-sand-500 mb-3">Recent Activity</h4>
            <div className="space-y-3 relative before:absolute before:inset-y-0 before:left-2 before:w-0.5 before:bg-sand-200 pl-6">
              <div className="relative">
                <div className="absolute -left-[23px] top-1 w-2.5 h-2.5 rounded-full bg-olive-500"></div>
                <div className="text-xs text-sand-500">Today, 10:42 AM</div>
                <div className="font-medium">Caseworker Brief generated</div>
              </div>
              <div className="relative">
                <div className="absolute -left-[23px] top-1 w-2.5 h-2.5 rounded-full bg-sand-300"></div>
                <div className="text-xs text-sand-500">Today, 09:15 AM</div>
                <div className="font-medium">All exceptions resolved by J. Smith</div>
              </div>
              <div className="relative">
                <div className="absolute -left-[23px] top-1 w-2.5 h-2.5 rounded-full bg-sand-300"></div>
                <div className="text-xs text-sand-500">Yesterday, 16:30 PM</div>
                <div className="font-medium">Client uploaded final bank statements</div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </WindowFrame>
  );
}

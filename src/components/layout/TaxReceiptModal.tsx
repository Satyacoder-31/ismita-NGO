import React from 'react';
import { X, Printer, Download, CheckCircle2, ShieldCheck, Heart } from 'lucide-react';
import { useDonation } from '../../context/DonationContext';

export const TaxReceiptModal: React.FC = () => {
  const { activeReceipt, closeReceiptModal } = useDonation();

  if (!activeReceipt) return null;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/70 backdrop-blur-sm overflow-y-auto animate-in fade-in">
      <div 
        className="w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-slate-200 overflow-hidden my-8"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Actions Header */}
        <div className="bg-[#0A192F] px-6 py-4 flex items-center justify-between text-white">
          <div className="flex items-center space-x-2">
            <ShieldCheck className="w-5 h-5 text-emerald-400" />
            <span className="font-bold text-sm">Official 80G Tax Exemption Certificate</span>
          </div>
          <div className="flex items-center space-x-2">
            <button
              onClick={handlePrint}
              className="flex items-center space-x-1.5 px-3 py-1.5 bg-white/10 hover:bg-white/20 rounded-lg text-xs font-medium transition"
              title="Print Receipt"
            >
              <Printer className="w-4 h-4" />
              <span>Print / Save PDF</span>
            </button>
            <button
              onClick={closeReceiptModal}
              className="p-1.5 text-slate-300 hover:text-white hover:bg-white/10 rounded-full transition"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Printable Receipt Body */}
        <div className="p-8 sm:p-10 bg-white text-slate-800 space-y-6 print:p-0">
          {/* Certificate Header */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center border-b-2 border-emerald-900/20 pb-6 gap-4">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 rounded-2xl bg-emerald-900 flex items-center justify-center text-white">
                <Heart className="w-7 h-7 text-amber-400 fill-amber-400" />
              </div>
              <div>
                <h2 className="font-heading font-extrabold text-2xl text-[#0F3E2E] leading-none">
                  ISMITA CHARITABLE FOUNDATION
                </h2>
                <p className="text-xs text-slate-500 font-medium mt-1">
                  Regd. Non-Profit Trust • Registration No: 4021/IV/2015
                </p>
                <p className="text-[11px] text-slate-400">
                  Campus: Mandir Marg, Institutional Area, New Delhi - 110001
                </p>
              </div>
            </div>
            <div className="text-left sm:text-right">
              <span className="inline-block px-3 py-1 bg-emerald-100 text-emerald-800 text-xs font-bold rounded-full uppercase tracking-wider mb-1">
                80G Verified
              </span>
              <p className="text-xs text-slate-500">Receipt No:</p>
              <p className="text-sm font-mono font-bold text-slate-900">{activeReceipt.receiptNumber}</p>
            </div>
          </div>

          {/* Certificate Sub-banner */}
          <div className="text-center py-2 bg-slate-50 rounded-xl border border-slate-100">
            <p className="text-xs font-semibold text-slate-700 uppercase tracking-widest">
              Donation Receipt for Tax Exemption under Section 80G
            </p>
            <p className="text-[11px] text-slate-500">
              Income Tax Act, 1961 • 80G Approval URN: AAATA1234F20214
            </p>
          </div>

          {/* Donor and Amount Details Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
            <div className="bg-slate-50 p-4 rounded-xl border border-slate-100 space-y-1">
              <p className="text-xs text-slate-400 uppercase font-semibold">Donor Information</p>
              <p className="font-bold text-slate-900 text-base">{activeReceipt.donorName}</p>
              <p className="text-xs text-slate-600">Email: {activeReceipt.email}</p>
              <p className="text-xs text-slate-600">Phone: {activeReceipt.phone || 'N/A'}</p>
              <p className="text-xs text-slate-800 font-mono font-semibold pt-1">
                PAN: {activeReceipt.panNumber || 'Declared on file'}
              </p>
            </div>

            <div className="bg-emerald-50/60 p-4 rounded-xl border border-emerald-100 space-y-1">
              <p className="text-xs text-emerald-800 uppercase font-semibold">Contribution Details</p>
              <p className="text-2xl font-black text-emerald-950">
                ₹{activeReceipt.amount.toLocaleString('en-IN')}
              </p>
              <p className="text-xs text-emerald-700 font-medium">
                Category: <span className="font-bold">{activeReceipt.category}</span>
              </p>
              <p className="text-xs text-emerald-700">Frequency: {activeReceipt.frequency}</p>
              <p className="text-xs text-emerald-700">Date of Receipt: {activeReceipt.date}</p>
            </div>
          </div>

          {/* Legal Exemption Text */}
          <div className="text-xs text-slate-500 leading-relaxed bg-slate-50 p-4 rounded-xl border border-slate-100 space-y-1">
            <p className="font-semibold text-slate-700">Statutory Tax Declaration:</p>
            <p>
              Certified that the amount mentioned above was received by Ismita Charitable Foundation as a voluntary contribution. 
              This donation is eligible for deduction under Section 80G(5)(vi) of the Income Tax Act, 1961. No goods or services of commercial value were provided in exchange for this contribution.
            </p>
          </div>

          {/* Signatory & Digital Seal */}
          <div className="flex justify-between items-end pt-4 border-t border-slate-200">
            <div className="text-center sm:text-left">
              <div className="w-20 h-20 rounded-full border-2 border-dashed border-emerald-700/40 flex items-center justify-center p-2 text-center">
                <span className="text-[10px] font-bold text-emerald-800 uppercase leading-tight">
                  Official Seal<br/>Ismita Trust
                </span>
              </div>
            </div>

            <div className="text-right space-y-1">
              <div className="font-serif italic font-semibold text-emerald-900 text-lg">
                Dr. Alok Verma
              </div>
              <p className="text-xs font-bold text-slate-800">Authorized Managing Trustee</p>
              <p className="text-[10px] text-slate-400">Ismita Charitable Foundation</p>
            </div>
          </div>
        </div>

        {/* Modal Close CTA */}
        <div className="p-4 bg-slate-50 border-t border-slate-100 flex justify-end">
          <button
            onClick={closeReceiptModal}
            className="px-5 py-2 bg-slate-800 hover:bg-slate-700 text-white rounded-xl text-sm font-semibold transition"
          >
            Close Receipt
          </button>
        </div>
      </div>
    </div>
  );
};

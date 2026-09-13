import React from 'react';
import { 
  Heart, 
  ShieldCheck, 
  Building2, 
  CreditCard, 
  HelpCircle, 
  CheckCircle2, 
  FileText,
  Lock
} from 'lucide-react';
import { DonationWidget } from '../components/common/DonationWidget';

export const DonationPage: React.FC = () => {
  return (
    <div className="space-y-20 pb-20">
      {/* Hero Header */}
      <section className="relative bg-[#0F3E2E] text-white py-24 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center max-w-3xl">
          <span className="text-xs uppercase font-bold tracking-widest text-amber-300 bg-amber-400/20 px-4 py-1.5 rounded-full border border-amber-400/30">
            50% Tax Exemption Under Section 80G
          </span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold font-heading mt-4 tracking-tight">
            Your Support Can Change a Life.
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-200 font-light leading-relaxed">
            Every contribution directly funds meals, medicines, classrooms, and warm clothing for abandoned youngsters and elderly residents.
          </p>
        </div>
      </section>

      {/* Main Donation Container */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <DonationWidget defaultCategory="Education" />
      </section>

      {/* Direct Bank Wire / NEFT / RTGS Details */}
      <section className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900 text-white rounded-3xl p-8 sm:p-10 border border-slate-800 shadow-xl">
          <div className="flex flex-col md:flex-row md:items-center justify-between border-b border-slate-800 pb-6 mb-6 gap-4">
            <div>
              <span className="text-xs uppercase font-bold tracking-wider text-amber-400">
                Direct Corporate & Wire Transfers
              </span>
              <h3 className="text-xl sm:text-2xl font-bold font-heading mt-1">
                Bank Account Details (NEFT / RTGS / IMPS)
              </h3>
            </div>
            <span className="text-xs px-3 py-1.5 bg-emerald-950 border border-emerald-500/40 text-emerald-300 rounded-full font-semibold">
              Audited Trust Account
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 text-sm">
            <div>
              <p className="text-xs text-slate-400">Account Name</p>
              <p className="font-bold text-white mt-0.5">Ismita Charitable Foundation Trust</p>
            </div>
            <div>
              <p className="text-xs text-slate-400">Bank Name</p>
              <p className="font-bold text-white mt-0.5">State Bank of India (SBI)</p>
            </div>
            <div>
              <p className="text-xs text-slate-400">Account Number</p>
              <p className="font-mono font-bold text-amber-400 mt-0.5 text-base">40210098452134</p>
            </div>
            <div>
              <p className="text-xs text-slate-400">IFSC Code</p>
              <p className="font-mono font-bold text-white mt-0.5">SBIN0001245</p>
            </div>
            <div>
              <p className="text-xs text-slate-400">Branch</p>
              <p className="font-bold text-white mt-0.5">Parliament Street, New Delhi</p>
            </div>
            <div>
              <p className="text-xs text-slate-400">Account Type</p>
              <p className="font-bold text-white mt-0.5">Current Account</p>
            </div>
          </div>

          <p className="mt-6 pt-4 border-t border-slate-800 text-xs text-slate-400">
            *After making a direct wire transfer, please email your transaction reference (UTR) and PAN to <strong className="text-slate-200">accounts@ismitafoundation.org</strong> to claim your Section 80G tax exemption certificate.
          </p>
        </div>
      </section>

      {/* Tax Exemption FAQs */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <h3 className="text-2xl font-bold text-slate-900 text-center mb-8 font-heading">
          Frequently Asked Questions About Donations
        </h3>

        <div className="space-y-4">
          <div className="bg-white p-6 rounded-2xl border border-slate-200">
            <h4 className="font-bold text-slate-900 text-base">How does Section 80G tax exemption work?</h4>
            <p className="text-sm text-slate-600 mt-1">
              Indian citizens donating to Ismita Charitable Foundation can claim 50% of the donated sum as a tax deduction from their total taxable income under Section 80G(5)(vi) of the Income Tax Act.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200">
            <h4 className="font-bold text-slate-900 text-base">When will I receive my official tax receipt?</h4>
            <p className="text-sm text-slate-600 mt-1">
              Immediately! Once your donation is processed, a digitally signed and sealed 80G receipt is generated instantly on screen, which you can print or download as a PDF anytime from your account.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border border-slate-200">
            <h4 className="font-bold text-slate-900 text-base">Can foreign citizens or NRIs donate?</h4>
            <p className="text-sm text-slate-600 mt-1">
              Yes, Ismita Charitable Foundation is registered under the Foreign Contribution Regulation Act (FCRA Reg: 231660998) allowing us to legally accept international wires.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

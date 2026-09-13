import React, { useState } from 'react';
import confetti from 'canvas-confetti';
import { Heart, ShieldCheck, CheckCircle2, ArrowRight, Sparkles, CreditCard, Smartphone, Building } from 'lucide-react';
import { useDonation } from '../../context/DonationContext';
import { useAuth } from '../../context/AuthContext';
import { Donation } from '../../types';

interface DonationWidgetProps {
  defaultCategory?: Donation['category'];
  compact?: boolean;
}

const CATEGORIES: Donation['category'][] = [
  'Education',
  'Childcare',
  'Food & Nutrition',
  'Healthcare',
  'Old Age Care',
  'School Infrastructure',
  'Emergency Support',
];

const PRESET_AMOUNTS = [500, 1000, 2500, 5000, 10000];

export const DonationWidget: React.FC<DonationWidgetProps> = ({
  defaultCategory = 'Education',
  compact = false,
}) => {
  const { addDonation, openReceiptModal } = useDonation();
  const { user } = useAuth();

  const [frequency, setFrequency] = useState<'One-Time' | 'Monthly'>('One-Time');
  const [category, setCategory] = useState<Donation['category']>(defaultCategory);
  const [amount, setAmount] = useState<number>(2500);
  const [customAmount, setCustomAmount] = useState<string>('');
  const [isCustom, setIsCustom] = useState<boolean>(false);

  const [name, setName] = useState(user?.name || '');
  const [email, setEmail] = useState(user?.email || '');
  const [phone, setPhone] = useState(user?.phone || '');
  const [panNumber, setPanNumber] = useState(user?.panNumber || '');
  const [claimTax, setClaimTax] = useState(true);

  // Mock Payment Flow
  const [paymentMode, setPaymentMode] = useState<'UPI' | 'Card' | 'NetBanking'>('UPI');
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [processing, setProcessing] = useState(false);
  const [completedDonation, setCompletedDonation] = useState<Donation | null>(null);

  const selectedAmount = isCustom ? Number(customAmount) || 0 : amount;

  const handleAmountSelect = (val: number) => {
    setIsCustom(false);
    setAmount(val);
    setCustomAmount('');
  };

  const handleCustomChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsCustom(true);
    const val = e.target.value.replace(/[^0-9]/g, '');
    setCustomAmount(val);
  };

  const handleInitiateDonation = (e: React.FormEvent) => {
    e.preventDefault();
    if (selectedAmount < 100) {
      alert('Minimum donation amount is ₹100.');
      return;
    }
    if (!name || !email) {
      alert('Please provide your name and email.');
      return;
    }
    setShowPaymentModal(true);
  };

  const handleMockPaymentSuccess = () => {
    setProcessing(true);
    setTimeout(() => {
      setProcessing(false);
      setShowPaymentModal(false);

      const record = addDonation({
        amount: selectedAmount,
        donorName: name,
        email,
        phone,
        panNumber: claimTax ? panNumber : undefined,
        category,
        frequency,
        paymentMethod: paymentMode,
        taxExemptionClaimed: claimTax,
      });

      setCompletedDonation(record);

      // Trigger Celebration Confetti
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#0F3E2E', '#D4AF37', '#10B981', '#F59E0B'],
        });
      } catch (e) {
        console.error(e);
      }
    }, 1200);
  };

  if (completedDonation) {
    return (
      <div className="bg-white rounded-3xl p-8 sm:p-10 border border-emerald-200 shadow-2xl text-center space-y-6 animate-in zoom-in-95">
        <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto text-emerald-800">
          <CheckCircle2 className="w-10 h-10 text-emerald-700" />
        </div>
        <div>
          <span className="text-xs uppercase tracking-widest text-emerald-700 font-bold bg-emerald-50 px-3 py-1 rounded-full">
            Payment Successful
          </span>
          <h3 className="text-2xl sm:text-3xl font-extrabold text-[#0F3E2E] mt-3 font-heading">
            Thank You, {completedDonation.donorName}!
          </h3>
          <p className="text-slate-600 text-sm mt-2 max-w-md mx-auto">
            Your generous contribution of <strong className="text-emerald-950 font-bold">₹{completedDonation.amount.toLocaleString('en-IN')}</strong> will provide essential meals, healthcare, and schooling for our beneficiaries.
          </p>
        </div>

        <div className="bg-slate-50 border border-slate-200/80 rounded-2xl p-4 text-xs text-left max-w-md mx-auto space-y-1.5 font-mono">
          <div className="flex justify-between">
            <span className="text-slate-500">Receipt No:</span>
            <span className="font-bold text-slate-800">{completedDonation.receiptNumber}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-slate-500">Date:</span>
            <span>{completedDonation.date}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-slate-500">Cause:</span>
            <span>{completedDonation.category}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-slate-500">80G Tax Exemption:</span>
            <span className="text-emerald-700 font-bold">Eligible (50% Deduction)</span>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row justify-center gap-3 pt-2">
          <button
            onClick={() => openReceiptModal(completedDonation)}
            className="px-6 py-3 bg-[#0F3E2E] hover:bg-emerald-900 text-white rounded-xl text-sm font-bold shadow-lg transition flex items-center justify-center space-x-2"
          >
            <span>Download / Print 80G Tax Receipt</span>
            <ArrowRight className="w-4 h-4" />
          </button>
          <button
            onClick={() => setCompletedDonation(null)}
            className="px-6 py-3 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl text-sm font-semibold transition"
          >
            Make Another Donation
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className={`bg-white rounded-3xl border border-slate-200/80 shadow-2xl overflow-hidden ${compact ? 'p-6' : 'p-6 sm:p-10'}`}>
      {/* Frequency Switcher: One-Time vs Monthly */}
      <div className="flex p-1.5 bg-slate-100 rounded-2xl max-w-sm mx-auto mb-6">
        <button
          type="button"
          onClick={() => setFrequency('One-Time')}
          className={`flex-1 py-2.5 text-xs sm:text-sm font-bold rounded-xl transition ${
            frequency === 'One-Time'
              ? 'bg-white text-[#0F3E2E] shadow-sm'
              : 'text-slate-600 hover:text-slate-900'
          }`}
        >
          One-Time Gift
        </button>
        <button
          type="button"
          onClick={() => setFrequency('Monthly')}
          className={`flex-1 py-2.5 text-xs sm:text-sm font-bold rounded-xl transition flex items-center justify-center space-x-1.5 ${
            frequency === 'Monthly'
              ? 'bg-[#0F3E2E] text-white shadow-sm'
              : 'text-slate-600 hover:text-slate-900'
          }`}
        >
          <Sparkles className="w-3.5 h-3.5 text-amber-400" />
          <span>Monthly Recurring</span>
        </button>
      </div>

      <form onSubmit={handleInitiateDonation} className="space-y-6">
        {/* Cause Category Selector */}
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
            Select Donation Purpose
          </label>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
            {CATEGORIES.map((cat) => (
              <button
                key={cat}
                type="button"
                onClick={() => setCategory(cat)}
                className={`p-2.5 text-xs font-semibold rounded-xl border text-center transition ${
                  category === cat
                    ? 'border-[#0F3E2E] bg-emerald-50 text-[#0F3E2E] ring-2 ring-emerald-800/20'
                    : 'border-slate-200 text-slate-700 hover:bg-slate-50'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Amount Selector */}
        <div>
          <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
            Select Contribution Amount (INR)
          </label>
          <div className="grid grid-cols-3 sm:grid-cols-5 gap-2.5">
            {PRESET_AMOUNTS.map((amt) => (
              <button
                key={amt}
                type="button"
                onClick={() => handleAmountSelect(amt)}
                className={`py-3 px-2 rounded-xl text-sm font-extrabold border transition ${
                  !isCustom && amount === amt
                    ? 'bg-[#0F3E2E] text-white border-[#0F3E2E] shadow-md'
                    : 'bg-white text-slate-800 border-slate-200 hover:bg-slate-50'
                }`}
              >
                ₹{amt.toLocaleString('en-IN')}
              </button>
            ))}
          </div>

          {/* Custom Amount Input */}
          <div className="mt-3 relative">
            <span className="absolute left-4 top-3 text-slate-400 font-bold text-base">₹</span>
            <input
              type="text"
              placeholder="Or enter custom amount (e.g. 15,000)"
              value={customAmount}
              onChange={handleCustomChange}
              className={`w-full pl-9 pr-4 py-3 rounded-xl border text-sm font-semibold focus:outline-none transition ${
                isCustom
                  ? 'border-[#0F3E2E] ring-2 ring-emerald-800/20 bg-emerald-50/20'
                  : 'border-slate-200 hover:border-slate-300'
              }`}
            />
          </div>
        </div>

        {/* Impact Descriptor Banner */}
        <div className="p-3.5 bg-amber-50/80 border border-amber-200 rounded-2xl text-xs text-amber-900 flex items-center space-x-2.5">
          <Heart className="w-4 h-4 text-amber-600 flex-shrink-0 fill-amber-500" />
          <span>
            <strong>Your ₹{selectedAmount.toLocaleString('en-IN')}:</strong> Will provide{' '}
            {selectedAmount >= 5000
              ? 'comprehensive school fees, books & nutrition for 2 students for an entire term.'
              : selectedAmount >= 2500
              ? 'full geriatric health support, physiotherapy, and medicines for 1 senior for a month.'
              : 'wholesome mid-day meals and learning stationery kits for underprivileged children.'}
          </span>
        </div>

        {/* Donor Information */}
        <div className="space-y-3 pt-2">
          <label className="block text-xs font-bold uppercase tracking-wider text-slate-500">
            Donor Details (Required for 80G Tax Receipt)
          </label>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <input
              type="text"
              required
              placeholder="Full Legal Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-700/30"
            />
            <input
              type="email"
              required
              placeholder="Email for Tax Receipt"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-700/30"
            />
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <input
              type="tel"
              placeholder="Phone Number (+91)"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-700/30"
            />
            <input
              type="text"
              placeholder="PAN Card (Optional, for 80G exemption)"
              value={panNumber}
              onChange={(e) => setPanNumber(e.target.value.toUpperCase())}
              maxLength={10}
              className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm font-mono focus:outline-none focus:ring-2 focus:ring-emerald-700/30 uppercase"
            />
          </div>
        </div>

        {/* 80G Tax Checkbox */}
        <div className="flex items-center space-x-2 text-xs text-slate-600">
          <input
            type="checkbox"
            id="taxClaim"
            checked={claimTax}
            onChange={(e) => setClaimTax(e.target.checked)}
            className="rounded border-slate-300 text-emerald-800 focus:ring-emerald-800"
          />
          <label htmlFor="taxClaim" className="cursor-pointer">
            I wish to claim 50% Tax Exemption under Section 80G of Income Tax Act.
          </label>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full py-4 bg-gradient-to-r from-[#0F3E2E] to-[#165B43] hover:from-emerald-900 hover:to-emerald-950 text-white font-extrabold rounded-2xl shadow-xl hover:shadow-emerald-900/30 transition text-base flex items-center justify-center space-x-2"
        >
          <Heart className="w-5 h-5 text-amber-400 fill-amber-400" />
          <span>Proceed to Donate ₹{selectedAmount.toLocaleString('en-IN')}</span>
        </button>

        <div className="flex items-center justify-center space-x-2 text-slate-400 text-xs text-center">
          <ShieldCheck className="w-4 h-4 text-emerald-600" />
          <span>256-Bit SSL Encrypted • Direct Bank Transfer • Safe & Transparent</span>
        </div>
      </form>

      {/* Mock Payment Gateway Modal */}
      {showPaymentModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/75 backdrop-blur-sm animate-in fade-in">
          <div 
            className="w-full max-w-md bg-white rounded-3xl shadow-2xl border border-slate-100 p-6 sm:p-8 space-y-6 text-slate-800"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Payment Modal Header */}
            <div className="flex items-center justify-between border-b pb-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 rounded-lg bg-emerald-100 flex items-center justify-center text-emerald-800">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-bold text-sm">Ismita Payment Gateway</h4>
                  <p className="text-[11px] text-amber-600 font-medium">Test & Mock Simulation Mode</p>
                </div>
              </div>
              <span className="text-lg font-black text-[#0F3E2E]">₹{selectedAmount.toLocaleString('en-IN')}</span>
            </div>

            {/* Payment Method Selector */}
            <div className="space-y-3">
              <p className="text-xs font-semibold text-slate-500 uppercase">Select Payment Method</p>
              <div className="grid grid-cols-3 gap-2">
                <button
                  type="button"
                  onClick={() => setPaymentMode('UPI')}
                  className={`p-3 rounded-xl border text-center text-xs font-bold transition flex flex-col items-center justify-center space-y-1 ${
                    paymentMode === 'UPI' ? 'border-[#0F3E2E] bg-emerald-50 text-[#0F3E2E]' : 'border-slate-200'
                  }`}
                >
                  <Smartphone className="w-5 h-5 text-emerald-700" />
                  <span>UPI / QR</span>
                </button>
                <button
                  type="button"
                  onClick={() => setPaymentMode('Card')}
                  className={`p-3 rounded-xl border text-center text-xs font-bold transition flex flex-col items-center justify-center space-y-1 ${
                    paymentMode === 'Card' ? 'border-[#0F3E2E] bg-emerald-50 text-[#0F3E2E]' : 'border-slate-200'
                  }`}
                >
                  <CreditCard className="w-5 h-5 text-blue-700" />
                  <span>Debit / Card</span>
                </button>
                <button
                  type="button"
                  onClick={() => setPaymentMode('NetBanking')}
                  className={`p-3 rounded-xl border text-center text-xs font-bold transition flex flex-col items-center justify-center space-y-1 ${
                    paymentMode === 'NetBanking' ? 'border-[#0F3E2E] bg-emerald-50 text-[#0F3E2E]' : 'border-slate-200'
                  }`}
                >
                  <Building className="w-5 h-5 text-purple-700" />
                  <span>Net Banking</span>
                </button>
              </div>

              {/* UPI Mock Details */}
              {paymentMode === 'UPI' && (
                <div className="p-4 bg-slate-50 rounded-2xl border border-slate-200 text-center space-y-2">
                  <div className="w-32 h-32 bg-white border-2 border-slate-800 rounded-xl mx-auto flex items-center justify-center text-xs text-slate-400 p-2">
                    <div className="text-[11px] font-mono text-center text-slate-700">
                      [Mock UPI QR Code]<br/>
                      <span className="text-emerald-700 font-bold">ismita@upi</span>
                    </div>
                  </div>
                  <p className="text-xs text-slate-500">Scan with Google Pay, PhonePe, Paytm or BHIM</p>
                </div>
              )}

              {/* Card Mock Details */}
              {paymentMode === 'Card' && (
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 space-y-2 text-xs">
                  <input
                    type="text"
                    disabled
                    value="•••• •••• •••• 4021 (Test Sandbox Card)"
                    className="w-full p-2 bg-white border rounded-lg text-slate-600"
                  />
                  <div className="grid grid-cols-2 gap-2">
                    <input type="text" disabled value="12/28" className="p-2 bg-white border rounded-lg text-slate-600" />
                    <input type="text" disabled value="•••" className="p-2 bg-white border rounded-lg text-slate-600" />
                  </div>
                </div>
              )}

              {/* NetBanking Mock */}
              {paymentMode === 'NetBanking' && (
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-200 text-xs">
                  <select className="w-full p-2 bg-white border rounded-lg text-slate-700">
                    <option>State Bank of India</option>
                    <option>HDFC Bank</option>
                    <option>ICICI Bank</option>
                    <option>Axis Bank</option>
                  </select>
                </div>
              )}
            </div>

            {/* Modal Actions */}
            <div className="space-y-2">
              <button
                type="button"
                onClick={handleMockPaymentSuccess}
                disabled={processing}
                className="w-full py-3.5 bg-[#0F3E2E] hover:bg-emerald-900 text-white rounded-xl font-bold text-sm transition flex items-center justify-center space-x-2"
              >
                {processing ? (
                  <span>Processing Secure Donation...</span>
                ) : (
                  <span>Simulate Successful Payment (₹{selectedAmount.toLocaleString('en-IN')})</span>
                )}
              </button>

              <button
                type="button"
                onClick={() => setShowPaymentModal(false)}
                className="w-full py-2 text-xs text-slate-500 hover:text-slate-700"
              >
                Cancel Transaction
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

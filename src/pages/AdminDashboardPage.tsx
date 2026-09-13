import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Users, 
  Heart, 
  ShoppingBag, 
  ShieldCheck, 
  TrendingUp, 
  FileText, 
  CheckCircle2, 
  Plus, 
  Search, 
  ArrowUpRight, 
  DollarSign, 
  Clock, 
  Smile, 
  Building,
  Printer
} from 'lucide-react';
import { 
  CHILDREN_DATA, 
  ELDERS_DATA, 
  PRODUCTS_DATA, 
  INITIAL_DONATIONS, 
  INITIAL_ORDERS 
} from '../data/mockData';
import { useDonation } from '../context/DonationContext';

export const AdminDashboardPage: React.FC = () => {
  const { donations, openReceiptModal } = useDonation();
  const [activeTab, setActiveTab] = useState<'overview' | 'children' | 'elders' | 'donations' | 'products' | 'orders'>('overview');

  const totalDonationSum = donations.reduce((sum, d) => sum + d.amount, 0);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 space-y-8">
      {/* Top Admin Header Bar */}
      <div className="flex flex-col md:flex-row md:items-center justify-between bg-white p-6 rounded-3xl border border-slate-200/80 shadow-sm gap-4">
        <div>
          <div className="flex items-center space-x-2">
            <span className="px-2.5 py-0.5 bg-emerald-100 text-[#0F3E2E] rounded-full text-xs font-extrabold uppercase tracking-wider">
              Executive Portal
            </span>
            <span className="text-xs text-slate-400">Institutional Governance</span>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 font-heading mt-1">
            Trustee & Admin Operations Console
          </h1>
        </div>

        <div className="flex items-center space-x-3">
          <button
            onClick={() => window.print()}
            className="px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-xl text-xs font-bold transition flex items-center space-x-1.5"
          >
            <Printer className="w-3.5 h-3.5" />
            <span>Export Financial Audit</span>
          </button>
          <Link
            to="/donate"
            className="px-4 py-2 bg-[#0F3E2E] text-white rounded-xl text-xs font-bold hover:bg-emerald-900 transition shadow"
          >
            + Add Offline Donation
          </Link>
        </div>
      </div>

      {/* KPI Metric Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-white p-5 rounded-3xl border border-slate-200 shadow-sm space-y-2">
          <div className="flex justify-between items-center text-slate-400">
            <span className="text-xs font-bold uppercase tracking-wider">Total Donations</span>
            <Heart className="w-4 h-4 text-emerald-600" />
          </div>
          <p className="text-2xl font-black text-[#0F3E2E]">₹{(totalDonationSum + 985000).toLocaleString('en-IN')}</p>
          <span className="text-[11px] text-emerald-600 font-semibold flex items-center">
            <ArrowUpRight className="w-3 h-3 mr-0.5" /> +18.4% vs last quarter
          </span>
        </div>

        <div className="bg-white p-5 rounded-3xl border border-slate-200 shadow-sm space-y-2">
          <div className="flex justify-between items-center text-slate-400">
            <span className="text-xs font-bold uppercase tracking-wider">Children Enrolled</span>
            <Users className="w-4 h-4 text-blue-600" />
          </div>
          <p className="text-2xl font-black text-slate-900">254 Students</p>
          <span className="text-[11px] text-slate-500">100% full sponsorship coverage</span>
        </div>

        <div className="bg-white p-5 rounded-3xl border border-slate-200 shadow-sm space-y-2">
          <div className="flex justify-between items-center text-slate-400">
            <span className="text-xs font-bold uppercase tracking-wider">Elder Residents</span>
            <Smile className="w-4 h-4 text-amber-600" />
          </div>
          <p className="text-2xl font-black text-slate-900">64 Elders</p>
          <span className="text-[11px] text-slate-500">24/7 Geriatric care suites</span>
        </div>

        <div className="bg-white p-5 rounded-3xl border border-slate-200 shadow-sm space-y-2">
          <div className="flex justify-between items-center text-slate-400">
            <span className="text-xs font-bold uppercase tracking-wider">Store Revenue</span>
            <ShoppingBag className="w-4 h-4 text-emerald-600" />
          </div>
          <p className="text-2xl font-black text-[#0F3E2E]">₹1,42,850</p>
          <span className="text-[11px] text-emerald-600 font-semibold">Funds 950+ student meals</span>
        </div>
      </div>

      {/* Admin Tabbed Navigation */}
      <div className="flex space-x-2 border-b border-slate-200 pb-2 overflow-x-auto">
        {[
          { id: 'overview', label: 'Executive Analytics', icon: LayoutDashboard },
          { id: 'children', label: `Children Roster (${CHILDREN_DATA.length})`, icon: Users },
          { id: 'elders', label: `Elders Sanctuary (${ELDERS_DATA.length})`, icon: Heart },
          { id: 'donations', label: `80G Donations Ledger (${donations.length})`, icon: FileText },
          { id: 'products', label: `Store Catalog (${PRODUCTS_DATA.length})`, icon: ShoppingBag },
          { id: 'orders', label: 'Store Orders Fulfillment', icon: ShieldCheck },
        ].map((tab) => {
          const Icon = tab.icon;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id as any)}
              className={`px-4 py-2.5 rounded-2xl text-xs font-bold transition flex items-center space-x-2 whitespace-nowrap ${
                activeTab === tab.id
                  ? 'bg-[#0F3E2E] text-white shadow-md'
                  : 'bg-white text-slate-600 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              <Icon className="w-3.5 h-3.5" />
              <span>{tab.label}</span>
            </button>
          );
        })}
      </div>

      {/* Tab 1: Executive Analytics Charts */}
      {activeTab === 'overview' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Monthly Inflow Chart Simulator */}
          <div className="lg:col-span-8 bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-sm space-y-6">
            <div className="flex justify-between items-center border-b pb-4">
              <div>
                <h3 className="text-lg font-bold text-slate-900 font-heading">
                  Quarterly Donation & Funding Inflow (INR)
                </h3>
                <p className="text-xs text-slate-500">Audited monthly contributions and grants</p>
              </div>
              <span className="text-xs font-bold font-mono text-emerald-800 bg-emerald-50 px-2.5 py-1 rounded-lg">
                FY 2025–2026
              </span>
            </div>

            {/* Visual Bar Chart */}
            <div className="h-64 flex items-end justify-between gap-2 sm:gap-4 pt-8 px-2">
              {[
                { month: 'Apr', amount: 320000, height: '45%' },
                { month: 'May', amount: 410000, height: '58%' },
                { month: 'Jun', amount: 380000, height: '52%' },
                { month: 'Jul', amount: 520000, height: '72%' },
                { month: 'Aug', amount: 680000, height: '88%' },
                { month: 'Sep', amount: 740000, height: '96%' },
              ].map((bar) => (
                <div key={bar.month} className="flex-1 flex flex-col items-center space-y-2 h-full justify-end">
                  <span className="text-[10px] font-bold text-slate-500 hidden sm:block">
                    ₹{(bar.amount / 100000).toFixed(1)}L
                  </span>
                  <div
                    className="w-full bg-gradient-to-t from-[#0F3E2E] to-emerald-500 rounded-t-xl hover:opacity-80 transition-all cursor-pointer"
                    style={{ height: bar.height }}
                    title={`${bar.month}: ₹${bar.amount.toLocaleString('en-IN')}`}
                  />
                  <span className="text-xs font-semibold text-slate-700">{bar.month}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Fund Allocation Pie Breakdown */}
          <div className="lg:col-span-4 bg-white p-6 sm:p-8 rounded-3xl border border-slate-200 shadow-sm space-y-6">
            <h3 className="text-lg font-bold text-slate-900 font-heading border-b pb-4">
              Fund Utilization Breakdown
            </h3>

            <div className="space-y-4 text-xs">
              <div>
                <div className="flex justify-between font-semibold mb-1">
                  <span>Child Schooling & Nutritious Meals</span>
                  <span className="font-bold text-emerald-800">54%</span>
                </div>
                <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                  <div className="h-full bg-emerald-700 rounded-full" style={{ width: '54%' }} />
                </div>
              </div>

              <div>
                <div className="flex justify-between font-semibold mb-1">
                  <span>Old Age Geriatric Care & Housing</span>
                  <span className="font-bold text-amber-700">30%</span>
                </div>
                <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                  <div className="h-full bg-amber-500 rounded-full" style={{ width: '30%' }} />
                </div>
              </div>

              <div>
                <div className="flex justify-between font-semibold mb-1">
                  <span>Community Mobile Health Clinics</span>
                  <span className="font-bold text-blue-700">09%</span>
                </div>
                <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                  <div className="h-full bg-blue-500 rounded-full" style={{ width: '9%' }} />
                </div>
              </div>

              <div>
                <div className="flex justify-between font-semibold mb-1">
                  <span>Statutory Trust Administration & Audit</span>
                  <span className="font-bold text-slate-700">07%</span>
                </div>
                <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                  <div className="h-full bg-slate-500 rounded-full" style={{ width: '7%' }} />
                </div>
              </div>
            </div>

            <div className="p-4 bg-slate-50 rounded-2xl border border-slate-100 text-[11px] text-slate-500">
              <ShieldCheck className="w-4 h-4 text-emerald-600 inline mr-1" />
              Verified in conformity with Indian Income Tax Exemption Rule 17A.
            </div>
          </div>
        </div>
      )}

      {/* Tab 2: Children Roster Table */}
      {activeTab === 'children' && (
        <div className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-sm">
          <div className="p-6 border-b flex justify-between items-center">
            <h3 className="text-lg font-bold text-slate-900 font-heading">Children & Students Registry</h3>
            <button className="px-4 py-2 bg-[#0F3E2E] text-white rounded-xl text-xs font-bold">
              + Enroll New Student
            </button>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs text-slate-700">
              <thead className="bg-slate-50 border-b text-[11px] font-bold uppercase text-slate-400">
                <tr>
                  <th className="p-4">Student Name</th>
                  <th className="p-4">Age / Grade</th>
                  <th className="p-4">Aspiration</th>
                  <th className="p-4">Status</th>
                  <th className="p-4">Monthly Cost</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {CHILDREN_DATA.map((child) => (
                  <tr key={child.id} className="hover:bg-slate-50/70 transition">
                    <td className="p-4 flex items-center space-x-3 font-bold text-slate-900">
                      <img src={child.image} alt={child.name} className="w-8 h-8 rounded-full object-cover" />
                      <span>{child.name}</span>
                    </td>
                    <td className="p-4">{child.age} yrs • {child.grade}</td>
                    <td className="p-4 text-slate-500">{child.dream}</td>
                    <td className="p-4">
                      <span className={`px-2 py-0.5 rounded-full font-bold text-[10px] uppercase ${
                        child.sponsored ? 'bg-emerald-100 text-emerald-800' : 'bg-amber-100 text-amber-800'
                      }`}>
                        {child.sponsored ? 'Sponsored' : 'Waiting'}
                      </span>
                    </td>
                    <td className="p-4 font-mono font-bold text-[#0F3E2E]">₹{child.monthlyCost}/mo</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Tab 3: Elders Sanctuary Roster */}
      {activeTab === 'elders' && (
        <div className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-sm">
          <div className="p-6 border-b flex justify-between items-center">
            <h3 className="text-lg font-bold text-slate-900 font-heading">Elders Care Sanctuary Roster</h3>
            <button className="px-4 py-2 bg-amber-500 text-slate-950 rounded-xl text-xs font-bold">
              + New Resident Intake
            </button>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs text-slate-700">
              <thead className="bg-slate-50 border-b text-[11px] font-bold uppercase text-slate-400">
                <tr>
                  <th className="p-4">Resident Name</th>
                  <th className="p-4">Age</th>
                  <th className="p-4">Care Suite</th>
                  <th className="p-4">Primary Health Protocol</th>
                  <th className="p-4">Monthly Care</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {ELDERS_DATA.map((elder) => (
                  <tr key={elder.id} className="hover:bg-slate-50/70 transition">
                    <td className="p-4 flex items-center space-x-3 font-bold text-slate-900">
                      <img src={elder.image} alt={elder.name} className="w-8 h-8 rounded-full object-cover" />
                      <span>{elder.name}</span>
                    </td>
                    <td className="p-4">{elder.age} yrs</td>
                    <td className="p-4 text-slate-600">{elder.roomType}</td>
                    <td className="p-4 text-slate-500">{elder.medicalNeeds.join(', ')}</td>
                    <td className="p-4 font-mono font-bold text-amber-800">₹{elder.monthlyCareCost}/mo</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Tab 4: Donations Ledger */}
      {activeTab === 'donations' && (
        <div className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-sm space-y-4">
          <div className="p-6 border-b flex justify-between items-center">
            <div>
              <h3 className="text-lg font-bold text-slate-900 font-heading">Donations & 80G Tax Register</h3>
              <p className="text-xs text-slate-500">Official log of statutory charitable contributions</p>
            </div>
            <span className="text-xs font-bold text-emerald-800 bg-emerald-50 px-3 py-1 rounded-lg">
              {donations.length} Registered Records
            </span>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs text-slate-700">
              <thead className="bg-slate-50 border-b text-[11px] font-bold uppercase text-slate-400">
                <tr>
                  <th className="p-4">Receipt No</th>
                  <th className="p-4">Date</th>
                  <th className="p-4">Donor Name & Contact</th>
                  <th className="p-4">Cause</th>
                  <th className="p-4">Amount</th>
                  <th className="p-4">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {donations.map((d) => (
                  <tr key={d.id} className="hover:bg-slate-50/70 transition">
                    <td className="p-4 font-mono font-bold text-emerald-900">{d.receiptNumber}</td>
                    <td className="p-4 text-slate-500">{d.date}</td>
                    <td className="p-4">
                      <p className="font-bold text-slate-900">{d.donorName}</p>
                      <p className="text-[11px] text-slate-400">{d.email}</p>
                    </td>
                    <td className="p-4 font-medium">{d.category} ({d.frequency})</td>
                    <td className="p-4 font-mono font-black text-[#0F3E2E]">₹{d.amount.toLocaleString('en-IN')}</td>
                    <td className="p-4">
                      <button
                        onClick={() => openReceiptModal(d)}
                        className="px-3 py-1 bg-slate-100 hover:bg-slate-200 rounded-lg text-[11px] font-bold text-slate-700"
                      >
                        Inspect 80G
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Tab 5: Products & Stock Inventory */}
      {activeTab === 'products' && (
        <div className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-sm">
          <div className="p-6 border-b flex justify-between items-center">
            <h3 className="text-lg font-bold text-slate-900 font-heading">E-Commerce Essentials Inventory</h3>
            <button className="px-4 py-2 bg-[#0F3E2E] text-white rounded-xl text-xs font-bold">
              + Add New Grocery Product
            </button>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs text-slate-700">
              <thead className="bg-slate-50 border-b text-[11px] font-bold uppercase text-slate-400">
                <tr>
                  <th className="p-4">Product Name</th>
                  <th className="p-4">Category</th>
                  <th className="p-4">Price / MRP</th>
                  <th className="p-4">Available Stock</th>
                  <th className="p-4">Social Impact Metric</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {PRODUCTS_DATA.map((p) => (
                  <tr key={p.id} className="hover:bg-slate-50/70 transition">
                    <td className="p-4 flex items-center space-x-3 font-bold text-slate-900">
                      <img src={p.image} alt={p.name} className="w-8 h-8 rounded-lg object-cover" />
                      <span>{p.name} ({p.weight})</span>
                    </td>
                    <td className="p-4">{p.category}</td>
                    <td className="p-4 font-mono font-bold">₹{p.price} <span className="text-slate-400 line-through font-normal">₹{p.mrp}</span></td>
                    <td className="p-4">
                      <span className="font-semibold text-emerald-800">{p.stockCount} units</span>
                    </td>
                    <td className="p-4 text-xs text-slate-500 max-w-xs">{p.impactNote}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Tab 6: Orders Fulfillment */}
      {activeTab === 'orders' && (
        <div className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-sm">
          <div className="p-6 border-b">
            <h3 className="text-lg font-bold text-slate-900 font-heading">Store Orders Fulfillment Log</h3>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs text-slate-700">
              <thead className="bg-slate-50 border-b text-[11px] font-bold uppercase text-slate-400">
                <tr>
                  <th className="p-4">Order ID</th>
                  <th className="p-4">Date</th>
                  <th className="p-4">Customer</th>
                  <th className="p-4">Address</th>
                  <th className="p-4">Amount</th>
                  <th className="p-4">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {INITIAL_ORDERS.map((o) => (
                  <tr key={o.id} className="hover:bg-slate-50/70 transition">
                    <td className="p-4 font-mono font-bold text-slate-900">{o.orderNumber}</td>
                    <td className="p-4 text-slate-500">{o.date}</td>
                    <td className="p-4 font-bold">{o.customerName}</td>
                    <td className="p-4 text-slate-500 max-w-xs truncate">{o.shippingAddress}</td>
                    <td className="p-4 font-mono font-bold text-[#0F3E2E]">₹{o.total}</td>
                    <td className="p-4">
                      <span className="px-2.5 py-0.5 rounded-full font-bold bg-emerald-100 text-emerald-800 text-[10px]">
                        {o.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
};

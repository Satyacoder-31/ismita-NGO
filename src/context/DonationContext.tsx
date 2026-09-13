import React, { createContext, useContext, useState, useEffect } from 'react';
import { Donation, Sponsorship } from '../types';
import { INITIAL_DONATIONS } from '../data/mockData';

interface DonationContextType {
  donations: Donation[];
  sponsorships: Sponsorship[];
  addDonation: (donationData: Omit<Donation, 'id' | 'receiptNumber' | 'date' | 'status'>) => Donation;
  addSponsorship: (sponsorData: Omit<Sponsorship, 'id' | 'startDate' | 'status'>) => Sponsorship;
  activeReceipt: Donation | null;
  openReceiptModal: (donation: Donation) => void;
  closeReceiptModal: () => void;
  totalDonated: number;
}

const DonationContext = createContext<DonationContextType | undefined>(undefined);

export const DonationProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [donations, setDonations] = useState<Donation[]>(() => {
    const saved = localStorage.getItem('asf_donations');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        console.error(e);
      }
    }
    return INITIAL_DONATIONS;
  });

  const [sponsorships, setSponsorships] = useState<Sponsorship[]>(() => {
    const saved = localStorage.getItem('asf_sponsorships');
    if (saved) {
      try {
        return JSON.parse(saved);
      } catch (e) {
        console.error(e);
      }
    }
    return [
      {
        id: 'spon-1',
        type: 'child',
        targetName: 'Aarav Kumar (Grade 4)',
        monthlyAmount: 1500,
        startDate: '15 Jan 2026',
        status: 'Active',
        beneficiaryImage: 'https://images.unsplash.com/photo-1544717305-2782549b5136?q=80&w=800&auto=format&fit=crop',
      },
      {
        id: 'spon-2',
        type: 'elder',
        targetName: 'Savitri Devi (Age 76)',
        monthlyAmount: 3500,
        startDate: '01 Mar 2026',
        status: 'Active',
        beneficiaryImage: 'https://images.unsplash.com/photo-1581579438747-1dc8d17bbce4?q=80&w=800&auto=format&fit=crop',
      },
    ];
  });

  const [activeReceipt, setActiveReceipt] = useState<Donation | null>(null);

  useEffect(() => {
    localStorage.setItem('asf_donations', JSON.stringify(donations));
  }, [donations]);

  useEffect(() => {
    localStorage.setItem('asf_sponsorships', JSON.stringify(sponsorships));
  }, [sponsorships]);

  const addDonation = (data: Omit<Donation, 'id' | 'receiptNumber' | 'date' | 'status'>): Donation => {
    const today = new Date();
    const formattedDate = today.toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' });
    const randomSuffix = Math.floor(1000 + Math.random() * 9000);
    const receiptNumber = `ICF-80G-2026-${randomSuffix}`;

    const newDonation: Donation = {
      ...data,
      id: `don-${Date.now()}`,
      receiptNumber,
      date: formattedDate,
      status: 'Successful',
    };

    setDonations((prev) => [newDonation, ...prev]);
    return newDonation;
  };

  const addSponsorship = (data: Omit<Sponsorship, 'id' | 'startDate' | 'status'>): Sponsorship => {
    const today = new Date();
    const formattedDate = today.toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' });

    const newSponsorship: Sponsorship = {
      ...data,
      id: `spon-${Date.now()}`,
      startDate: formattedDate,
      status: 'Active',
    };

    setSponsorships((prev) => [newSponsorship, ...prev]);
    return newSponsorship;
  };

  const openReceiptModal = (donation: Donation) => setActiveReceipt(donation);
  const closeReceiptModal = () => setActiveReceipt(null);

  const totalDonated = donations.reduce((sum, d) => sum + d.amount, 0);

  return (
    <DonationContext.Provider
      value={{
        donations,
        sponsorships,
        addDonation,
        addSponsorship,
        activeReceipt,
        openReceiptModal,
        closeReceiptModal,
        totalDonated,
      }}
    >
      {children}
    </DonationContext.Provider>
  );
};

export const useDonation = () => {
  const context = useContext(DonationContext);
  if (!context) {
    throw new Error('useDonation must be used within a DonationProvider');
  }
  return context;
};

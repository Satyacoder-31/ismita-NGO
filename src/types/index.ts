export interface User {
  id: string;
  name: string;
  email: string;
  phone?: string;
  role: 'donor' | 'sponsor' | 'volunteer' | 'admin';
  panNumber?: string;
  avatar?: string;
  address?: {
    street: string;
    city: string;
    state: string;
    pincode: string;
  };
}

export interface Child {
  id: string;
  name: string;
  age: number;
  gender: 'male' | 'female';
  grade: string;
  image: string;
  dream: string;
  story: string;
  joinedYear: number;
  monthlyCost: number;
  sponsored: boolean;
  interests: string[];
  healthStatus: string;
}

export interface Elder {
  id: string;
  name: string;
  age: number;
  gender: 'male' | 'female';
  image: string;
  background: string;
  joinedYear: number;
  monthlyCareCost: number;
  medicalNeeds: string[];
  hobbies: string[];
  sponsored: boolean;
  roomType: string;
}

export interface Teacher {
  id: string;
  name: string;
  role: string;
  subject: string;
  experience: string;
  qualification: string;
  image: string;
  quote: string;
}

export interface Product {
  id: string;
  name: string;
  brand: string;
  category: string;
  weight: string;
  price: number;
  mrp: number;
  discountPercent: number;
  rating: number;
  reviewsCount: number;
  inStock: boolean;
  stockCount: number;
  image: string;
  additionalImages?: string[];
  description: string;
  impactNote: string;
  ingredients?: string;
  benefits?: string[];
  deliveryInfo: string;
  featured?: boolean;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface Order {
  id: string;
  orderNumber: string;
  date: string;
  items: CartItem[];
  subtotal: number;
  deliveryFee: number;
  discount: number;
  total: number;
  status: 'Processing' | 'Shipped' | 'Delivered' | 'Cancelled';
  paymentMethod: 'UPI' | 'Card' | 'NetBanking' | 'COD';
  customerName: string;
  email: string;
  phone: string;
  shippingAddress: string;
}

export interface Donation {
  id: string;
  receiptNumber: string;
  date: string;
  amount: number;
  donorName: string;
  email: string;
  phone: string;
  panNumber?: string;
  category: 'Education' | 'Childcare' | 'Food & Nutrition' | 'Healthcare' | 'Old Age Care' | 'School Infrastructure' | 'Emergency Support';
  frequency: 'One-Time' | 'Monthly';
  paymentMethod: string;
  status: 'Successful' | 'Pending';
  taxExemptionClaimed: boolean;
}

export interface Sponsorship {
  id: string;
  type: 'child' | 'elder' | 'education' | 'food' | 'healthcare' | 'supplies';
  targetName: string;
  monthlyAmount: number;
  startDate: string;
  status: 'Active' | 'Completed';
  beneficiaryImage?: string;
}

export interface Project {
  id: string;
  title: string;
  category: 'Education' | 'Child Welfare' | 'Old Age Care' | 'Community Development' | 'Healthcare' | 'Nutrition';
  location: string;
  image: string;
  shortDescription: string;
  fullDescription: string;
  goalAmount: number;
  raisedAmount: number;
  beneficiariesCount: string;
  status: 'Ongoing' | 'Completed' | 'Upcoming';
  milestones: string[];
}

export interface VolunteerApplication {
  id: string;
  name: string;
  email: string;
  phone: string;
  areaOfInterest: string;
  skills: string;
  availability: string;
  message: string;
  date: string;
  status: 'New' | 'Under Review' | 'Approved';
}

export interface GalleryItem {
  id: string;
  title: string;
  category: 'Children' | 'School' | 'Old Age Care' | 'Events' | 'Volunteers' | 'Community Work' | 'Food Distribution';
  image: string;
  description: string;
  date: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: 'Donor' | 'Volunteer' | 'Parent' | 'Community Partner' | 'Student Alumnus';
  quote: string;
  avatar: string;
  location: string;
  rating: number;
}

export interface Booking {
  id: string;
  name: string;
  phone: string;
  deviceModel: string;
  issueType: string;
  date: string;
  time: string;
  notes: string;
  status: "pending" | "completed";
  createdAt: string;
}

export interface Review {
  id: string;
  name: string;
  rating: number;
  text: string;
  status: "pending" | "approved";
  createdAt: string;
}

// In-memory store for demo purposes
export const store = {
  bookings: [
    {
      id: "1",
      name: "John Doe",
      phone: "+91 9211534952",
      deviceModel: "iPhone 13 Pro",
      issueType: "Screen Replacement",
      date: "2026-03-10",
      time: "14:00",
      notes: "Screen is completely shattered but touch still works.",
      status: "pending",
      createdAt: new Date().toISOString(),
    },
  ] as Booking[],
  reviews: [
    {
      id: "1",
      name: "Alice Smith",
      rating: 5,
      text: "Great service! Fixed my phone in 30 minutes.",
      status: "pending",
      createdAt: new Date().toISOString(),
    },
  ] as Review[],
};

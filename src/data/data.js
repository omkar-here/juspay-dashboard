export const projectionsData = [
  { month: "Jan", value: 18 },
  { month: "Feb", value: 22 },
  { month: "Mar", value: 19 },
  { month: "Apr", value: 25 },
  { month: "May", value: 21 },
  { month: "Jun", value: 24 },
];

export const revenueData = [
  { month: "Jan", current: 15, previous: 20 },
  { month: "Feb", current: 18, previous: 16 },
  { month: "Mar", current: 20, previous: 14 },
  { month: "Apr", current: 16, previous: 18 },
  { month: "May", current: 22, previous: 20 },
  { month: "Jun", current: 19, previous: 24 },
];

export const salesData = [
  { name: "Direct", value: 300.56, color: "hsl(var(--dashboard-chart-primary))" },
  { name: "Affiliate", value: 135.18, color: "hsl(var(--dashboard-chart-secondary))" },
  { name: "Sponsored", value: 154.02, color: "hsl(var(--dashboard-chart-tertiary))" },
  { name: "E-mail", value: 48.96, color: "hsl(var(--dashboard-chart-quaternary))" },
];

export const topProducts = [
  { name: "ASOS Ridley High Waist", price: "$79.49", quantity: 82, amount: "$6,518.18" },
  { name: "Marco Lightweight Shirt", price: "$128.50", quantity: 37, amount: "$4,754.50" },
  { name: "Half Sleeve Shirt", price: "$39.99", quantity: 64, amount: "$2,559.36" },
  { name: "Lightweight Jacket", price: "$20.00", quantity: 184, amount: "$3,680.00" },
  { name: "Marco Shoes", price: "$79.49", quantity: 64, amount: "$1,965.81" },
];

export const locations = [
  { city: "New York", value: "72K" },
  { city: "San Francisco", value: "39K" },
  { city: "Sydney", value: "25K" },
  { city: "Singapore", value: "61K" },
];

import { Bug, UserPlus, Bell, GitCommit, Edit, Trash2 } from "lucide-react";

export const notifications = [
  { icon: Bug, text: "You have a bug that needs...", time: "Just now", type: "bug" },
  { icon: UserPlus, text: "New user registered", time: "59 minutes ago", type: "user" },
  { icon: Bug, text: "You have a bug that needs...", time: "12 hours ago", type: "bug" },
  { icon: Bell, text: "Andi Lane subscribed to you", time: "Today, 11:59 AM", type: "notification" },
];

export const activities = [
  { icon: Bug, text: "You have a bug that needs...", time: "Just now", avatar: "👤" },
  { icon: GitCommit, text: "Released a new version", time: "59 minutes ago", avatar: "👤" },
  { icon: Bug, text: "Submitted a bug", time: "12 hours ago", avatar: "👤" },
  { icon: Edit, text: "Modified A data in Page X", time: "Today, 11:59 AM", avatar: "👤" },
  { icon: Trash2, text: "Deleted a page in Project X", time: "Feb 2, 2023", avatar: "👤" },
];

export const contacts = [
  { name: "Natali Craig", avatar: "👤" },
  { name: "Drew Cano", avatar: "👤" },
  { name: "Orlando Diggs", avatar: "👤" },
  { name: "Andi Lane", avatar: "👤" },
  { name: "Kate Morrison", avatar: "👤" },
  { name: "Koray Okumus", avatar: "👤" },
];


export const initialOrders = [
  { id: "#CM9801", user: "Natali Craig", avatar: "https://randomuser.me/api/portraits/women/1.jpg", project: "Landing Page", address: "Meadow Lane Oakland", date: "Just now", status: "In Progress" },
  { id: "#CM9802", user: "Kate Morrison", avatar: "https://randomuser.me/api/portraits/women/2.jpg", project: "CRM Admin pages", address: "Larry San Francisco", date: "A minute ago", status: "Complete" },
  { id: "#CM9803", user: "Drew Cano", avatar: "https://randomuser.me/api/portraits/men/3.jpg", project: "Client Project", address: "Bagwell Avenue Ocala", date: "1 hour ago", status: "Pending" },
  { id: "#CM9804", user: "Orlando Diggs", avatar: "https://randomuser.me/api/portraits/men/4.jpg", project: "Admin Dashboard", address: "Washburn Baton Rouge", date: "Yesterday", status: "Approved" },
  { id: "#CM9805", user: "Andi Lane", avatar: "https://randomuser.me/api/portraits/women/5.jpg", project: "App Landing Page", address: "Nest Lane Olivette", date: "Feb 2, 2023", status: "Rejected" },
  // ...repeat for demo pagination
  { id: "#CM9801", user: "Natali Craig", avatar: "https://randomuser.me/api/portraits/women/1.jpg", project: "Landing Page", address: "Meadow Lane Oakland", date: "Just now", status: "In Progress" },
  { id: "#CM9802", user: "Kate Morrison", avatar: "https://randomuser.me/api/portraits/women/2.jpg", project: "CRM Admin pages", address: "Larry San Francisco", date: "A minute ago", status: "Complete" },
  { id: "#CM9803", user: "Drew Cano", avatar: "https://randomuser.me/api/portraits/men/3.jpg", project: "Client Project", address: "Bagwell Avenue Ocala", date: "1 hour ago", status: "Pending" },
  { id: "#CM9804", user: "Orlando Diggs", avatar: "https://randomuser.me/api/portraits/men/4.jpg", project: "Admin Dashboard", address: "Washburn Baton Rouge", date: "Yesterday", status: "Approved" },
  { id: "#CM9805", user: "Andi Lane", avatar: "https://randomuser.me/api/portraits/women/5.jpg", project: "App Landing Page", address: "Nest Lane Olivette", date: "Feb 2, 2023", status: "Rejected" },
];

export const statusColors = {
  "In Progress": "text-blue-500",
  "Complete": "text-green-400",
  "Pending": "text-blue-400",
  "Approved": "text-yellow-400",
  "Rejected": "text-gray-400",
};

export const statusDots = {
  "In Progress": "bg-blue-500",
  "Complete": "bg-green-400",
  "Pending": "bg-blue-400",
  "Approved": "bg-yellow-400",
  "Rejected": "bg-gray-400",
};

export const PAGE_SIZE = 5;
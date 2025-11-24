import { useEffect, useState } from "react";
import { Outlet, Link } from "react-router-dom";
import { Menu } from "lucide-react";
import Sidebar from "./dashboard/Sidebar";
import Notifications from "./dashboard/Notifications";
import {notifications, activities, contacts } from "../data/data";
import { Star, Clock, Bell, Grid, Search, TrendingUp, TrendingDown } from "lucide-react";
import { ThemeToggle } from "@/components/ThemeToggle";



const Dashboard = ({desktopNotifOpen, setDesktopNotifOpen, mobileNotifOpen, setMobileNotifOpen, dashboardView, setDashboardView}) => {
  
  const [expandedMenu, setExpandedMenu] = useState("User Profile");
  const [activeTab, setActiveTab] = useState("Favorites");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  useEffect(() => {
    // Reset sidebar and menu states when dashboard view changes
    setSidebarOpen(false);
    setExpandedMenu("User Profile");
    setActiveTab("Favorites");
  }, [dashboardView]);

  return (
    <div className="flex h-screen bg-background relative">
      {/* Hamburger for mobile */}
      <button
        className="md:hidden fixed top-4 left-4 z-30 p-2 rounded-lg bg-background border border-border shadow-lg"
        onClick={() => setSidebarOpen(true)}
        aria-label="Open sidebar"
      >
        <Menu size={24} />
      </button>
      <Sidebar
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
        expandedMenu={expandedMenu}
        setExpandedMenu={setExpandedMenu}
        activeTab={activeTab}
        setActiveTab={setActiveTab}
        dashboardView={dashboardView}
        setDashboardView={setDashboardView}
      />
      {/* Header */}
      <div className="border-b border-border px-4 sm:px-6 md:px-8 py-4 bg-background w-full">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-3">
            <span className="md:hidden" />
            <Star size={20} className="text-muted-foreground hover:text-foreground cursor-pointer transition-colors" />
            <div className="h-5 w-px bg-border"></div>
            <div className="flex items-center gap-2 text-sm">
              <span className="text-muted-foreground">Dashboards</span>
              <span className="text-muted-foreground">/</span>
              <span className="font-semibold text-foreground">{dashboardView === 'default' ? 'Default' : 'eCommerce'}</span>
            </div>
          </div>
          <div className="flex items-center gap-3 sm:gap-5">
            <div className="relative w-full max-w-xs">
              <Search size={16} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search"
                className="pl-9 pr-10 py-2 bg-muted rounded-lg text-sm border border-input focus:outline-none focus:ring-2 focus:ring-primary/20 w-full placeholder:text-muted-foreground transition-all"
              />
              <span className="absolute right-3 top-1/2 transform -translate-y-1/2 text-xs text-muted-foreground font-medium">⌘/</span>
            </div>
            <ThemeToggle />
            <Clock size={20} className="text-muted-foreground cursor-pointer hover:text-foreground transition-colors" />
            <Bell
              size={20}
              className="text-muted-foreground cursor-pointer hover:text-foreground transition-colors"
              onClick={() => {
                // toggle desktop panel on large screens, mobile panel on smaller
                if (window && window.innerWidth >= 1024) {
                  setDesktopNotifOpen((v) => !v);
                } else {
                  setMobileNotifOpen(true);
                }
              }}
              aria-label="Show notifications"
            />
            <Grid size={20} className="text-muted-foreground cursor-pointer hover:text-foreground transition-colors" />
          </div>
        </div>
        <Outlet />
      </div>
      

      

      <Notifications
        desktopNotifOpen={desktopNotifOpen}
        mobileNotifOpen={mobileNotifOpen}
        setMobileNotifOpen={setMobileNotifOpen}
        setDesktopNotifOpen={setDesktopNotifOpen}
        notifications={notifications}
        activities={activities}
        contacts={contacts}
      />

      {/* mobile panel is now handled by Notifications component */}
    </div>
  );
};

export default Dashboard;

import React from "react";
import { ChevronRight, ChevronDown, X, Grid, Folder, BookOpen, CreditCard, User, Briefcase, FileText, Share2 } from "lucide-react";
import { NavLink } from "react-router-dom";

const MenuItem = ({ icon: Icon, label, hasSubmenu, isActive, children, expandedMenu, setExpandedMenu }) => {
  const isExpanded = expandedMenu === label;

  return (
    <div>
      <div
        className={`flex items-center justify-between px-3 py-2.5 rounded-md cursor-pointer transition-all ${
          isActive ? "bg-muted text-foreground" : "text-muted-foreground hover:bg-muted/50 hover:text-foreground"
        }`}
        onClick={() => hasSubmenu && setExpandedMenu(isExpanded ? "" : label)}
      >
        <div className="flex items-center gap-2.5">
          <Icon size={18} className="flex-shrink-0" />
          <span className="text-sm font-medium">{label}</span>
        </div>
        {hasSubmenu && (isExpanded ? <ChevronDown size={16} className="flex-shrink-0" /> : <ChevronRight size={16} className="flex-shrink-0" />)}
      </div>
      {hasSubmenu && isExpanded && <div className="ml-10 mt-1.5 space-y-1">{children}</div>}
    </div>
  );
};

const SubMenuItem = ({ label }) => (
  <div className="px-3 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-muted/50 rounded-md cursor-pointer transition-all">{label}</div>
);

export default function Sidebar({ sidebarOpen, setSidebarOpen, expandedMenu, setExpandedMenu, activeTab, setActiveTab, dashboardView, setDashboardView }) {
  return (
    <div
      className={`absolute md:static flex-shrink-0 inset-y-0 left-0 z-40 w-64 border-r border-border flex flex-col bg-background transform transition-transform duration-300
        ${sidebarOpen ? "translate-x-0" : "-translate-x-full"} md:translate-x-0 md:block`}
    >
      {/* Close button for mobile */}
      <button className="md:hidden absolute top-4 right-4 p-2 rounded-lg bg-background border border-border" onClick={() => setSidebarOpen(false)} aria-label="Close sidebar">
        <X size={24} />
      </button>
      {/* User Profile */}
      <div className="p-4 border-b border-border">
        <div className="flex items-center gap-3">
          <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center text-primary-foreground text-xs font-semibold">B</div>
          <span className="font-medium text-[15px] text-foreground">ByeWind</span>
        </div>
      </div>

      {/* Navigation Tabs */}
      <div className="px-4 pt-4 pb-2 flex gap-6 text-sm border-b border-border">
        <button
          className={`pb-2.5 font-medium transition-all ${activeTab === "Favorites" ? "text-foreground border-b-2 border-primary" : "text-muted-foreground hover:text-foreground"}`}
          onClick={() => setActiveTab("Favorites")}
        >
          Favorites
        </button>
        <button
          className={`pb-2.5 font-medium transition-all ${activeTab === "Recently" ? "text-foreground border-b-2 border-primary" : "text-muted-foreground hover:text-foreground"}`}
          onClick={() => setActiveTab("Recently")}
        >
          Recently
        </button>
      </div>

      {/* Menu Items */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        <div className="space-y-1">
          <MenuItem icon={Grid} label="Overview" expandedMenu={expandedMenu} setExpandedMenu={setExpandedMenu} />
          <MenuItem icon={Folder} label="Projects" expandedMenu={expandedMenu} setExpandedMenu={setExpandedMenu} />
        </div>

        <div>
          <div className="px-3 text-xs font-semibold text-muted-foreground/70 mb-3 uppercase tracking-wide">Dashboards</div>
          <div className="space-y-1">
            <NavLink to="/" onClick={() => setDashboardView('default')}>
              <MenuItem icon={Grid} label="Default" isActive={dashboardView === 'default'} hasSubmenu={false} expandedMenu={expandedMenu} setExpandedMenu={setExpandedMenu}>
              <button className="block w-full text-left">Default</button>
            </MenuItem>
            </NavLink>
            <NavLink to="/ecommerce" onClick={() => setDashboardView('ecommerce')}>
            <MenuItem icon={CreditCard} label="eCommerce" isActive={dashboardView === 'ecommerce'} hasSubmenu={false} expandedMenu={expandedMenu} setExpandedMenu={setExpandedMenu}>
              <button className="block w-full text-left">eCommerce</button>
            </MenuItem>
            </NavLink>
            <MenuItem icon={Folder} label="Projects" expandedMenu={expandedMenu} setExpandedMenu={setExpandedMenu} />
            <MenuItem icon={BookOpen} label="Online Courses" expandedMenu={expandedMenu} setExpandedMenu={setExpandedMenu} />
          </div>
        </div>

        <div>
          <div className="px-3 text-xs font-semibold text-muted-foreground/70 mb-3 uppercase tracking-wide">Pages</div>
          <div className="space-y-1">
            <MenuItem icon={User} label="User Profile" hasSubmenu expandedMenu={expandedMenu} setExpandedMenu={setExpandedMenu}>
              <SubMenuItem label="Overview" />
              <SubMenuItem label="Projects" />
              <SubMenuItem label="Campaigns" />
              <SubMenuItem label="Documents" />
              <SubMenuItem label="Followers" />
            </MenuItem>
            <MenuItem icon={CreditCard} label="Account" expandedMenu={expandedMenu} setExpandedMenu={setExpandedMenu} />
            <MenuItem icon={Briefcase} label="Corporate" expandedMenu={expandedMenu} setExpandedMenu={setExpandedMenu} />
            <MenuItem icon={FileText} label="Blog" expandedMenu={expandedMenu} setExpandedMenu={setExpandedMenu} />
            <MenuItem icon={Share2} label="Social" expandedMenu={expandedMenu} setExpandedMenu={setExpandedMenu} />
          </div>
        </div>
      </div>
    </div>
  );
}

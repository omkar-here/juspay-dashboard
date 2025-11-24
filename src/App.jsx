import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import OrderList from "./pages/OrderList";
import Main from "./pages/dashboard/Main";
import { useState } from "react";
import {projectionsData, revenueData, salesData, topProducts, locations } from "./data/data";

const queryClient = new QueryClient();

const App = () => {

  const [dashboardView, setDashboardView] = useState("default");
  const [mobileNotifOpen, setMobileNotifOpen] = useState(false);
  
  // desktop notifications sidebar open by default
  const [desktopNotifOpen, setDesktopNotifOpen] = useState(true);

  return (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={
            <Dashboard 
              desktopNotifOpen={desktopNotifOpen}
              setDesktopNotifOpen={setDesktopNotifOpen}
              mobileNotifOpen={mobileNotifOpen}
              setMobileNotifOpen={setMobileNotifOpen}
              dashboardView={dashboardView}
              setDashboardView={setDashboardView}
            />
          } >
             <Route path="" element={<Main
                     dashboardView={dashboardView}
                     setDashboardView={setDashboardView}
                     projectionsData={projectionsData}
                     revenueData={revenueData}
                     salesData={salesData}
                     topProducts={topProducts}
                     locations={locations}
                     setMobileNotifOpen={setMobileNotifOpen}
                     setDesktopNotifOpen={setDesktopNotifOpen}
                   />} />
             <Route path="ecommerce" element={<OrderList />} />
          </Route>
          
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
  )
};

export default App;

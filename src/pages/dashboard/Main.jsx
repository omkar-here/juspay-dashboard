import { RevenueMap } from "@/components/RevenueMap";
import { TrendingDown, TrendingUp } from "lucide-react";
import { Bar, BarChart, CartesianGrid, Cell, Line, LineChart, Pie, PieChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import OrderList from "../OrderList";

export default function Main({
  dashboardView,
  projectionsData,
  revenueData,
  salesData,
  topProducts,
  locations,
}) {
  return (
    <div className="flex-1 overflow-y-auto transition-all duration-300 ">

      {/* Dashboard Content */}
      <div className="p-4 sm:p-6 md:p-8 space-y-6">
        {dashboardView === 'ecommerce' ? (
          <OrderList />
        ) : (
          <>
            <h1 className="text-2xl sm:text-3xl font-bold text-foreground">eCommerce</h1>
            <div className="flex flex-col lg:flex-row justify-between gap-7">
              {/* Stats Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6 w-full">
                {/* Customers */}
                <div className="border border-border rounded-lg p-6 hover:shadow-sm transition-shadow" style={{ backgroundColor: 'hsl(var(--dashboard-stat-primary))' }}>
                  <div className="text-xs font-medium mb-3 uppercase tracking-wide" style={{ color: '#1C1C1C' }}>Customers</div>
                  <div className="flex items-end justify-between">
                    <div className="text-4xl font-bold" style={{ color: '#1C1C1C' }}>3,781</div>
                    <div className="flex items-center gap-1 text-[hsl(var(--dashboard-success))] text-sm font-semibold" style={{ color: '#1C1C1C' }}>
                      <TrendingUp size={16} />
                      <span>+11.01%</span>
                    </div>
                  </div>
                </div>

                {/* Orders */}
                <div className="border border-border rounded-lg p-6 hover:shadow-sm transition-shadow" style={{ backgroundColor: 'hsl(var(--dashboard-stat-tertiary))' }}>
                  <div className="text-xs font-medium text-muted-foreground mb-3 uppercase tracking-wide">Orders</div>
                  <div className="flex items-end justify-between">
                    <div className="text-4xl font-bold text-foreground">1,219</div>
                    <div className="flex items-center gap-1 text-[hsl(var(--dashboard-danger))] text-sm font-semibold">
                      <TrendingDown size={16} />
                      <span>-0.03%</span>
                    </div>
                  </div>
                </div>

                {/* Revenue */}
                <div className="border border-border rounded-lg p-6 hover:shadow-sm transition-shadow" style={{ backgroundColor: 'hsl(var(--dashboard-stat-tertiary))' }}>
                  <div className="text-xs font-medium text-muted-foreground mb-3 uppercase tracking-wide">Revenue</div>
                  <div className="flex items-end justify-between">
                    <div className="text-4xl font-bold text-foreground">$695</div>
                    <div className="flex items-center gap-1 text-[hsl(var(--dashboard-success))] text-sm font-semibold">
                      <TrendingUp size={16} />
                      <span>+15.03%</span>
                    </div>
                  </div>
                </div>

                {/* Growth */}
                <div className="border border-border rounded-lg p-6 hover:shadow-sm transition-shadow" style={{ backgroundColor: 'hsl(var(--dashboard-stat-secondary))' }}>
                  <div className="text-xs font-medium mb-3 uppercase tracking-wide" style={{ color: '#1C1C1C' }}>Growth</div>
                  <div className="flex items-end justify-between">
                    <div className="text-4xl font-bold" style={{ color: '#1C1C1C' }}>30.1%</div>
                    <div className="flex items-center gap-1 text-[hsl(var(--dashboard-success))] text-sm font-semibold" style={{ color: '#1C1C1C' }}>
                      <TrendingUp size={16} />
                      <span>+6.08%</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Projections vs Actuals */}
              <div className="border border-border rounded-lg p-6 w-full" style={{ backgroundColor: 'hsl(var(--dashboard-stat-tertiary))' }}>
                <h3 className="text-sm font-semibold text-foreground mb-6">Projections vs Actuals</h3>
                <ResponsiveContainer width="100%" height={200}>
                  <BarChart data={projectionsData} margin={{ top: 24, right: 16, left: 0, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="3 0" stroke="hsl(var(--border))" vertical={false} />
                    <XAxis dataKey="month" tick={{ fontSize: 15, fill: "#A3ACB9" }} axisLine={false} tickLine={false} />
                    <YAxis tick={{ fontSize: 15, fill: "#A3ACB9" }} axisLine={false} tickLine={false} width={40} tickFormatter={v => v + 'M'} />
                    <Tooltip contentStyle={{ backgroundColor: "#fff", border: "none", borderRadius: "0.5rem", boxShadow: "0 2px 8px rgba(0,0,0,0.04)" }}
                      itemStyle={{ color: '#222', fontWeight: 500 }}
                      labelStyle={{ color: '#A3ACB9', fontWeight: 400 }}
                    />
                    <Bar dataKey="value" fill="#A3C3E6" radius={[6, 6, 0, 0]} barSize={32} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              <div className="col-span-1 sm:col-span-2 lg:col-span-3 border border-border rounded-lg p-6" style={{ backgroundColor: 'hsl(var(--dashboard-stat-tertiary))' }}>
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-base font-bold text-foreground">Revenue</h3>
                  <div className="flex items-center gap-8 text-base">
                    <div className="flex items-center gap-2">
                      <span className="inline-block w-2.5 h-2.5 rounded-full bg-[#B5B8FF] mr-1"></span>
                      <span className="text-muted-foreground">Current Week</span>
                      <span className="font-bold text-foreground">$58,211</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="inline-block w-2.5 h-2.5 rounded-full bg-[#A3C3E6] mr-1"></span>
                      <span className="text-muted-foreground">Previous Week</span>
                      <span className="font-bold text-foreground">$68,768</span>
                    </div>
                  </div>
                </div>
                <ResponsiveContainer width="100%" height={232}>
                  <LineChart data={revenueData} margin={{ top: 16, right: 16, left: 0, bottom: 0 }}>
                    <CartesianGrid strokeDasharray="3 0" stroke="#393939" vertical={false} />
                    <XAxis dataKey="month" tick={{ fontSize: 15, fill: "#A3ACB9" }} axisLine={false} tickLine={false} />
                    <YAxis tick={{ fontSize: 15, fill: "#A3ACB9" }} axisLine={false} tickLine={false} width={40} tickFormatter={v => v + 'M'} />
                    <Tooltip contentStyle={{ backgroundColor: "#232323", border: "none", borderRadius: "0.5rem", boxShadow: "0 2px 8px rgba(0,0,0,0.04)" }}
                      itemStyle={{ color: '#fff', fontWeight: 500 }}
                      labelStyle={{ color: '#A3ACB9', fontWeight: 400 }}
                    />
                    <Line type="monotone" dataKey="current" stroke="#B5B8FF" strokeWidth={3} dot={false} strokeDasharray="0 0 0 0 0 0 6 6 6 6 6 6" />
                    <Line type="monotone" dataKey="previous" stroke="#A3C3E6" strokeWidth={3} dot={false} />
                  </LineChart>
                </ResponsiveContainer>
              </div>

              <div className="space-y-6">
                {/* Revenue by Location */}
                <div className="border border-border rounded-lg p-6" style={{ backgroundColor: 'hsl(var(--dashboard-stat-tertiary))' }}>
                  <h3 className="text-sm font-semibold text-foreground mb-5">Revenue by Location</h3>
                  <RevenueMap />
                  <div className="space-y-3 mt-4">
                    {locations.map((location, index) => (
                      <div key={index} className="flex items-center justify-between text-sm">
                        <span className="text-muted-foreground">{location.city}</span>
                        <span className="font-semibold text-foreground">{location.value}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Top Selling Products */}
              <div className="sm:col-span-2 lg:col-span-3 border border-border rounded-lg p-6 w-full" style={{ backgroundColor: 'hsl(var(--dashboard-stat-tertiary))' }}>
                <h3 className="text-sm font-semibold text-foreground mb-5">Top Selling Products</h3>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b border-border/60">
                        <th className="text-left text-xs font-semibold text-muted-foreground pb-4">Name</th>
                        <th className="text-left text-xs font-semibold text-muted-foreground pb-4">Price</th>
                        <th className="text-left text-xs font-semibold text-muted-foreground pb-4">Quantity</th>
                        <th className="text-left text-xs font-semibold text-muted-foreground pb-4">Amount</th>
                      </tr>
                    </thead>
                    <tbody>
                      {topProducts.map((product, index) => (
                        <tr key={index} className="border-b border-border/40 hover:bg-muted/30 transition-colors">
                          <td className="py-4 text-sm font-medium text-foreground">{product.name}</td>
                          <td className="py-4 text-sm text-muted-foreground">{product.price}</td>
                          <td className="py-4 text-sm text-muted-foreground">{product.quantity}</td>
                          <td className="py-4 text-sm font-medium text-foreground">{product.amount}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Total Sales */}
              <div className="border border-border rounded-lg p-6 sm:col-span-2 lg:col-span-1" style={{ backgroundColor: 'hsl(var(--dashboard-stat-tertiary))' }}>
                <h3 className="text-sm font-semibold text-foreground mb-5">Total Sales</h3>
                <div className="relative">
                  <ResponsiveContainer width="100%" height={150}>
                    <PieChart>
                      <Pie data={salesData} cx="50%" cy="50%" innerRadius={50} outerRadius={75} paddingAngle={2} dataKey="value">
                        {salesData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={entry.color} />
                        ))}
                      </Pie>
                    </PieChart>
                  </ResponsiveContainer>
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
                    <div className="text-2xl font-bold text-foreground">38.6%</div>
                  </div>
                </div>
                <div className="space-y-3 mt-4">
                  {salesData.map((item, index) => (
                    <div key={index} className="flex items-center justify-between text-sm">
                      <div className="flex items-center gap-2.5">
                        <div className="w-2.5 h-2.5 rounded-full" style={{ backgroundColor: item.color }}></div>
                        <span className="text-muted-foreground">{item.name}</span>
                      </div>
                      <span className="font-semibold text-foreground">${item.value}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </>
        )}
      </div>
    </div>
  );
}

import { useState, useMemo } from "react";
import { initialOrders, PAGE_SIZE, statusColors, statusDots } from "../data/data";



export default function OrderList() {
  const [search, setSearch] = useState("");
  const [sortKey, setSortKey] = useState("date");
  const [sortAsc, setSortAsc] = useState(false);
  const [page, setPage] = useState(1);
  const [filter, setFilter] = useState("");

  const filtered = useMemo(() => {
    let data = initialOrders;
    if (search) {
      data = data.filter(
        o => o.user.toLowerCase().includes(search.toLowerCase()) ||
             o.id.toLowerCase().includes(search.toLowerCase()) ||
             o.project.toLowerCase().includes(search.toLowerCase())
      );
    }
    if (filter) {
      data = data.filter(o => o.status === filter);
    }
    data = [...data].sort((a, b) => {
      if (sortKey === "date") return sortAsc ? a.date.localeCompare(b.date) : b.date.localeCompare(a.date);
      if (sortKey === "user") return sortAsc ? a.user.localeCompare(b.user) : b.user.localeCompare(a.user);
      return 0;
    });
    return data;
  }, [search, sortKey, sortAsc, filter]);

  const paged = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE);
  const pageCount = Math.ceil(filtered.length / PAGE_SIZE);

  return (
    <div className="p-8 w-full">
      <h2 className="text-lg font-semibold mb-6">Order List</h2>
      <div className="flex items-center gap-2 mb-4">
        <button className="p-2 rounded bg-muted border border-border"><span>+</span></button>
        <button className="p-2 rounded bg-muted border border-border"><span>&#8645;</span></button>
        <select className="p-2 rounded bg-muted border border-border text-sm" value={filter} onChange={e => setFilter(e.target.value)}>
          <option value="">All Status</option>
          {Object.keys(statusColors).map(s => <option key={s} value={s}>{s}</option>)}
        </select>
        <input
          className="ml-auto p-2 rounded bg-muted border border-border text-sm w-64"
          placeholder="Search"
          value={search}
          onChange={e => setSearch(e.target.value)}
        />
      </div>
      <div className="overflow-x-auto rounded-lg border border-border bg-card">
        <table className="min-w-full text-sm">
          <thead>
            <tr className="border-b border-border/60">
              <th className="px-4 py-2 text-left font-medium text-muted-foreground">Order ID</th>
              <th className="px-4 py-2 text-left font-medium text-muted-foreground">User</th>
              <th className="px-4 py-2 text-left font-medium text-muted-foreground">Project</th>
              <th className="px-4 py-2 text-left font-medium text-muted-foreground">Address</th>
              <th className="px-4 py-2 text-left font-medium text-muted-foreground cursor-pointer" onClick={() => {setSortKey('date');setSortAsc(a=>!a);}}>Date</th>
              <th className="px-4 py-2 text-left font-medium text-muted-foreground">Status</th>
            </tr>
          </thead>
          <tbody>
            {paged.map((order, i) => (
              <tr key={i} className={i % 2 ? "bg-muted/50" : ""}>
                <td className="px-4 py-2">{order.id}</td>
                <td className="px-4 py-2 flex items-center gap-2">
                  <img src={order.avatar} alt={order.user} className="w-7 h-7 rounded-full object-cover" />
                  {order.user}
                </td>
                <td className="px-4 py-2">{order.project}</td>
                <td className="px-4 py-2">{order.address}</td>
                <td className="px-4 py-2">{order.date}</td>
                <td className="px-4 py-2">
                  <span className={`inline-flex items-center gap-1 ${statusColors[order.status]}`}>
                    <span className={`w-2 h-2 rounded-full ${statusDots[order.status]}`}></span>
                    {order.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="flex items-center justify-end gap-2 mt-4">
        <button disabled={page === 1} onClick={() => setPage(p => Math.max(1, p - 1))} className="px-3 py-1 rounded border border-border bg-muted disabled:opacity-50">&lt;</button>
        {Array.from({ length: pageCount }, (_, i) => (
          <button key={i} onClick={() => setPage(i + 1)} className={`px-3 py-1 rounded border border-border bg-muted ${page === i + 1 ? 'font-bold' : ''}`}>{i + 1}</button>
        ))}
        <button disabled={page === pageCount} onClick={() => setPage(p => Math.min(pageCount, p + 1))} className="px-3 py-1 rounded border border-border bg-muted disabled:opacity-50">&gt;</button>
      </div>
    </div>
  );
}

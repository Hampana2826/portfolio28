import { useState, useEffect } from 'react';
import {
  X,
  ShoppingCart,
  Shield,
  Layers,
  Search,
  Plus,
  Minus,
  CheckCircle,
  Package,
  TrendingUp,
  Boxes,
  Database,
  Github,
  Trash2,
} from 'lucide-react';
import { Project } from '../data/portfolioData';

interface ProjectMarketHubModalProps {
  project: Project;
  onClose: () => void;
}

interface ProductItem {
  id: number;
  name: string;
  category: 'Hardware' | 'Books' | 'Gear';
  price: number;
  stock: number;
  description: string;
}

const INITIAL_PRODUCTS: ProductItem[] = [
  {
    id: 1,
    name: 'Keychron K2 Mechanical Keyboard',
    category: 'Hardware',
    price: 89.99,
    stock: 24,
    description: 'Hot-swappable tactile wireless keyboard engineered for developers.',
  },
  {
    id: 2,
    name: 'Python & Flask Microservices Blueprint',
    category: 'Books',
    price: 34.5,
    stock: 45,
    description: 'Practical guide to REST APIs, SQLAlchemy schemas, and production deployment.',
  },
  {
    id: 3,
    name: 'Sony WH-1000XM4 Noise-Cancelling',
    category: 'Hardware',
    price: 249.99,
    stock: 12,
    description: 'Industry-leading noise cancellation with ergonomic ear cushions.',
  },
  {
    id: 4,
    name: 'High-Performance SQL Query Optimization',
    category: 'Books',
    price: 39.0,
    stock: 30,
    description: 'Indexing strategies, query execution plans, and transaction isolation.',
  },
  {
    id: 5,
    name: 'Developer Tech Hoodie – Jet Black',
    category: 'Gear',
    price: 52.0,
    stock: 18,
    description: 'Heavyweight organic cotton with double-stitched kangaroo pocket.',
  },
  {
    id: 6,
    name: 'Logitech MX Master 3S Ergonomic Mouse',
    category: 'Hardware',
    price: 99.0,
    stock: 15,
    description: 'Quiet clicks and 8,000 DPI track-on-glass sensor for engineering workflow.',
  },
];

interface CartEntry {
  product: ProductItem;
  quantity: number;
}

interface OrderRecord {
  id: string;
  customerName: string;
  itemsCount: number;
  total: number;
  status: 'Processing' | 'Shipped' | 'Delivered';
  createdAt: string;
}

export default function ProjectMarketHubModal({ project, onClose }: ProjectMarketHubModalProps) {
  const [activeView, setActiveView] = useState<'customer' | 'admin' | 'architecture'>('customer');
  const [cart, setCart] = useState<CartEntry[]>([]);
  const [cartDrawerOpen, setCartDrawerOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [orders, setOrders] = useState<OrderRecord[]>([
    {
      id: 'ORD-8419-MK',
      customerName: 'Aarav Sharma',
      itemsCount: 2,
      total: 124.49,
      status: 'Shipped',
      createdAt: 'Today, 10:14 AM',
    },
    {
      id: 'ORD-8420-MK',
      customerName: 'Priya Venkatesh',
      itemsCount: 1,
      total: 249.99,
      status: 'Processing',
      createdAt: 'Today, 11:32 AM',
    },
  ]);
  const [checkoutNotice, setCheckoutNotice] = useState<string | null>(null);

  // Esc key closes modal
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose]);

  // Cart operations
  const addToCart = (product: ProductItem) => {
    setCart((prev) => {
      const existing = prev.find((item) => item.product.id === product.id);
      if (existing) {
        return prev.map((item) =>
          item.product.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [...prev, { product, quantity: 1 }];
    });
    setCheckoutNotice(null);
  };

  const updateQuantity = (productId: number, delta: number) => {
    setCart((prev) =>
      prev
        .map((item) => {
          if (item.product.id === productId) {
            const newQty = item.quantity + delta;
            return newQty > 0 ? { ...item, quantity: newQty } : null;
          }
          return item;
        })
        .filter(Boolean) as CartEntry[]
    );
  };

  const cartTotal = cart.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
  const totalCartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  const handleCheckout = () => {
    if (cart.length === 0) return;
    const newOrderId = `ORD-${Math.floor(1000 + Math.random() * 9000)}-MK`;
    const newOrder: OrderRecord = {
      id: newOrderId,
      customerName: 'Guest Recruiter (You)',
      itemsCount: totalCartCount,
      total: Number(cartTotal.toFixed(2)),
      status: 'Processing',
      createdAt: 'Just now',
    };
    setOrders((prev) => [newOrder, ...prev]);
    setCart([]);
    setCartDrawerOpen(false);
    setCheckoutNotice(`Order ${newOrderId} placed successfully in MySQL database! Switch to Admin Console tab to view and update its status.`);
  };

  const toggleOrderStatus = (orderId: string) => {
    setOrders((prev) =>
      prev.map((ord) => {
        if (ord.id === orderId) {
          const nextStatus =
            ord.status === 'Processing'
              ? 'Shipped'
              : ord.status === 'Shipped'
              ? 'Delivered'
              : 'Processing';
          return { ...ord, status: nextStatus };
        }
        return ord;
      })
    );
  };

  const filteredProducts = INITIAL_PRODUCTS.filter((prod) => {
    const matchesCat = selectedCategory === 'All' || prod.category === selectedCategory;
    const matchesSearch = prod.name.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCat && matchesSearch;
  });

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/85 backdrop-blur-md overflow-y-auto">
      <div className="relative w-full max-w-5xl bg-slate-900 border border-slate-700/80 rounded-2xl shadow-2xl overflow-hidden my-auto max-h-[92vh] flex flex-col">
        {/* Header */}
        <div className="p-4 sm:p-6 border-b border-slate-800 flex items-center justify-between bg-slate-900/95 sticky top-0 z-20">
          <div className="flex items-center gap-3">
            <div className="h-10 w-10 rounded-xl bg-indigo-500/20 text-indigo-400 border border-indigo-500/30 flex items-center justify-center">
              <ShoppingCart className="w-5 h-5" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-lg font-bold text-white font-display">
                  MarketHub – Live Interactive Preview
                </h3>
                <span className="hidden sm:inline text-[10px] font-mono px-2 py-0.5 rounded bg-cyan-950 text-cyan-400 border border-cyan-800">
                  Flask + MySQL
                </span>
              </div>
              <p className="text-xs text-slate-400 font-mono">
                Full-Stack E-Commerce with Dual Customer & Admin Portals
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            {/* Cart Trigger in customer mode */}
            {activeView === 'customer' && (
              <button
                onClick={() => setCartDrawerOpen(!cartDrawerOpen)}
                className="relative inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-slate-800 hover:bg-slate-700 border border-slate-700 text-xs font-semibold text-slate-200"
              >
                <ShoppingCart className="w-4 h-4 text-cyan-400" />
                <span>Cart</span>
                {totalCartCount > 0 && (
                  <span className="h-5 w-5 rounded-full bg-cyan-500 text-slate-950 font-bold text-[10px] flex items-center justify-center">
                    {totalCartCount}
                  </span>
                )}
              </button>
            )}

            <button
              onClick={onClose}
              className="p-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-400 hover:text-white transition-colors"
              aria-label="Close modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* View Switcher Tabs */}
        <div className="px-4 sm:px-6 pt-3 border-b border-slate-800 flex gap-4 text-xs font-semibold bg-slate-900/50">
          <button
            onClick={() => setActiveView('customer')}
            className={`pb-3 border-b-2 flex items-center gap-1.5 transition-colors ${
              activeView === 'customer'
                ? 'border-cyan-400 text-cyan-400'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            <ShoppingCart className="w-3.5 h-3.5" />
            <span>Customer Storefront</span>
          </button>
          <button
            onClick={() => setActiveView('admin')}
            className={`pb-3 border-b-2 flex items-center gap-1.5 transition-colors ${
              activeView === 'admin'
                ? 'border-indigo-400 text-indigo-400'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            <Shield className="w-3.5 h-3.5" />
            <span>Admin Management Console</span>
            <span className="text-[10px] px-1.5 py-0.2 rounded bg-indigo-950 border border-indigo-800 text-indigo-300">
              RBAC
            </span>
          </button>
          <button
            onClick={() => setActiveView('architecture')}
            className={`pb-3 border-b-2 flex items-center gap-1.5 transition-colors ${
              activeView === 'architecture'
                ? 'border-emerald-400 text-emerald-400'
                : 'border-transparent text-slate-400 hover:text-slate-200'
            }`}
          >
            <Layers className="w-3.5 h-3.5" />
            <span>Backend Schema & Tech</span>
          </button>
        </div>

        {/* Body Container */}
        <div className="p-4 sm:p-6 overflow-y-auto space-y-6">
          {checkoutNotice && (
            <div className="p-3 rounded-xl bg-emerald-950/80 border border-emerald-800 text-xs text-emerald-300 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0" />
                <span>{checkoutNotice}</span>
              </div>
              <button
                onClick={() => setCheckoutNotice(null)}
                className="text-emerald-400 hover:text-white text-xs underline"
              >
                Dismiss
              </button>
            </div>
          )}

          {activeView === 'customer' && (
            <div className="space-y-6">
              {/* Filter and Search Bar */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
                <div className="flex items-center gap-1.5 p-1 rounded-lg bg-slate-950 border border-slate-800 w-full sm:w-auto">
                  {['All', 'Hardware', 'Books', 'Gear'].map((cat) => (
                    <button
                      key={cat}
                      onClick={() => setSelectedCategory(cat)}
                      className={`px-3 py-1.5 text-xs font-medium rounded-md transition-colors ${
                        selectedCategory === cat
                          ? 'bg-slate-800 text-cyan-300 shadow-sm'
                          : 'text-slate-400 hover:text-white'
                      }`}
                    >
                      {cat}
                    </button>
                  ))}
                </div>

                <div className="relative w-full sm:w-64">
                  <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search products..."
                    className="w-full pl-8 pr-3 py-1.5 rounded-lg bg-slate-950 border border-slate-800 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-cyan-400"
                  />
                </div>
              </div>

              {/* Product Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {filteredProducts.map((prod) => (
                  <div
                    key={prod.id}
                    className="glass-panel p-4 rounded-xl border border-slate-800 flex flex-col justify-between hover:border-slate-700 transition-all"
                  >
                    <div>
                      <div className="flex items-center justify-between text-[11px] font-mono text-slate-400 mb-2">
                        <span>{prod.category}</span>
                        <span className="text-emerald-400 font-semibold">
                          {prod.stock} in stock
                        </span>
                      </div>
                      <h4 className="text-sm font-bold text-white mb-1.5 line-clamp-1">
                        {prod.name}
                      </h4>
                      <p className="text-xs text-slate-400 leading-relaxed mb-4 line-clamp-2">
                        {prod.description}
                      </p>
                    </div>

                    <div className="pt-3 border-t border-slate-800 flex items-center justify-between">
                      <span className="text-base font-bold text-cyan-400 font-mono">
                        ${prod.price.toFixed(2)}
                      </span>
                      <button
                        onClick={() => addToCart(prod)}
                        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-cyan-600 hover:bg-cyan-500 text-slate-950 font-semibold text-xs transition-colors"
                      >
                        <Plus className="w-3.5 h-3.5" />
                        <span>Add</span>
                      </button>
                    </div>
                  </div>
                ))}
              </div>

              {/* Cart Drawer Modal */}
              {cartDrawerOpen && (
                <div className="p-4 rounded-xl bg-slate-950 border border-cyan-500/30 shadow-2xl space-y-4">
                  <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                    <h4 className="text-sm font-bold text-white flex items-center gap-2">
                      <ShoppingCart className="w-4 h-4 text-cyan-400" />
                      <span>Shopping Cart ({totalCartCount} items)</span>
                    </h4>
                    <button
                      onClick={() => setCartDrawerOpen(false)}
                      className="text-xs text-slate-400 hover:text-white"
                    >
                      Close
                    </button>
                  </div>

                  {cart.length === 0 ? (
                    <div className="text-center py-6 text-xs text-slate-500 font-mono">
                      Your cart is empty. Click "Add" on any item above to test the shopping workflow.
                    </div>
                  ) : (
                    <div className="space-y-3">
                      {cart.map((entry) => (
                        <div
                          key={entry.product.id}
                          className="flex items-center justify-between text-xs py-1 border-b border-slate-800/60"
                        >
                          <div className="max-w-[50%] truncate font-medium text-slate-200">
                            {entry.product.name}
                          </div>
                          <div className="flex items-center gap-2">
                            <span className="font-mono text-cyan-300">
                              ${(entry.product.price * entry.quantity).toFixed(2)}
                            </span>
                            <div className="flex items-center border border-slate-700 rounded bg-slate-900">
                              <button
                                onClick={() => updateQuantity(entry.product.id, -1)}
                                className="px-1.5 py-0.5 text-slate-400 hover:text-white"
                              >
                                <Minus className="w-3 h-3" />
                              </button>
                              <span className="px-2 font-mono text-[11px] text-white">
                                {entry.quantity}
                              </span>
                              <button
                                onClick={() => updateQuantity(entry.product.id, 1)}
                                className="px-1.5 py-0.5 text-slate-400 hover:text-white"
                              >
                                <Plus className="w-3 h-3" />
                              </button>
                            </div>
                          </div>
                        </div>
                      ))}

                      <div className="pt-2 flex items-center justify-between text-sm font-bold text-white font-mono">
                        <span>Total (Incl. Tax):</span>
                        <span className="text-cyan-400">${cartTotal.toFixed(2)}</span>
                      </div>

                      <button
                        onClick={handleCheckout}
                        className="w-full py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-indigo-600 hover:opacity-95 text-white font-bold text-xs shadow-md shadow-cyan-500/20 flex items-center justify-center gap-2"
                      >
                        <CheckCircle className="w-4 h-4" />
                        <span>Simulate Checkout & Place Order</span>
                      </button>
                    </div>
                  )}
                </div>
              )}
            </div>
          )}

          {activeView === 'admin' && (
            <div className="space-y-6">
              {/* Metrics KPIs */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800">
                  <div className="text-[11px] text-slate-400 font-mono">Total Revenue</div>
                  <div className="text-lg font-bold text-emerald-400 font-mono mt-1">$4,892.40</div>
                  <div className="text-[10px] text-slate-500 mt-0.5 flex items-center gap-1">
                    <TrendingUp className="w-3 h-3 text-emerald-400" />
                    +18% this month
                  </div>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800">
                  <div className="text-[11px] text-slate-400 font-mono">Total Orders</div>
                  <div className="text-lg font-bold text-cyan-400 font-mono mt-1">{orders.length + 36}</div>
                  <div className="text-[10px] text-slate-500 mt-0.5">Real-time MySQL count</div>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800">
                  <div className="text-[11px] text-slate-400 font-mono">Catalog Items</div>
                  <div className="text-lg font-bold text-indigo-400 font-mono mt-1">
                    {INITIAL_PRODUCTS.length}
                  </div>
                  <div className="text-[10px] text-slate-500 mt-0.5">3 Active Categories</div>
                </div>

                <div className="p-3.5 rounded-xl bg-slate-950 border border-slate-800">
                  <div className="text-[11px] text-slate-400 font-mono">Security Mode</div>
                  <div className="text-lg font-bold text-amber-400 font-mono mt-1">RBAC Active</div>
                  <div className="text-[10px] text-slate-500 mt-0.5">Admin Session Authenticated</div>
                </div>
              </div>

              {/* Order Management Table */}
              <div className="glass-panel rounded-xl p-4 border border-slate-800">
                <div className="flex items-center justify-between mb-3">
                  <h4 className="text-sm font-bold text-white flex items-center gap-2">
                    <Package className="w-4 h-4 text-cyan-400" />
                    <span>Customer Orders (Click Status to Advance)</span>
                  </h4>
                  <span className="text-[11px] font-mono text-slate-400">
                    Live Database Records
                  </span>
                </div>

                <div className="overflow-x-auto">
                  <table className="w-full text-left text-xs">
                    <thead>
                      <tr className="border-b border-slate-800 text-slate-400 font-mono">
                        <th className="pb-2">Order ID</th>
                        <th className="pb-2">Customer</th>
                        <th className="pb-2">Items</th>
                        <th className="pb-2">Total</th>
                        <th className="pb-2">Time</th>
                        <th className="pb-2 text-right">Status Action</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-800/60 font-sans">
                      {orders.map((ord) => (
                        <tr key={ord.id} className="hover:bg-slate-800/40">
                          <td className="py-2.5 font-mono text-cyan-300">{ord.id}</td>
                          <td className="py-2.5 text-slate-200">{ord.customerName}</td>
                          <td className="py-2.5 font-mono text-slate-400">{ord.itemsCount}</td>
                          <td className="py-2.5 font-mono font-semibold text-white">
                            ${ord.total.toFixed(2)}
                          </td>
                          <td className="py-2.5 text-slate-500 text-[11px]">{ord.createdAt}</td>
                          <td className="py-2.5 text-right">
                            <button
                              onClick={() => toggleOrderStatus(ord.id)}
                              className={`px-2.5 py-1 rounded-md text-[11px] font-mono font-medium transition-colors ${
                                ord.status === 'Processing'
                                  ? 'bg-amber-950/80 text-amber-300 border border-amber-800'
                                  : ord.status === 'Shipped'
                                  ? 'bg-sky-950/80 text-sky-300 border border-sky-800'
                                  : 'bg-emerald-950/80 text-emerald-300 border border-emerald-800'
                              }`}
                              title="Click to advance status"
                            >
                              {ord.status} ↺
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          )}

          {activeView === 'architecture' && (
            <div className="space-y-5 text-xs text-slate-300">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
                  <h4 className="text-sm font-bold text-white flex items-center gap-2">
                    <Boxes className="w-4 h-4 text-cyan-400" />
                    <span>Flask Modular Blueprints</span>
                  </h4>
                  <ul className="space-y-1.5 text-slate-400 list-disc list-inside">
                    <li><strong className="text-slate-200">auth_bp:</strong> User login, registration, password hashing with bcrypt, session tokens.</li>
                    <li><strong className="text-slate-200">product_bp:</strong> Category filtering, query search, pagination, detail routing.</li>
                    <li><strong className="text-slate-200">cart_bp:</strong> Session-based cart persistence, item quantity adjustments, total calculations.</li>
                    <li><strong className="text-slate-200">admin_bp:</strong> Role-restricted routes, CRUD operations for inventory and order dispatch.</li>
                  </ul>
                </div>

                <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
                  <h4 className="text-sm font-bold text-white flex items-center gap-2">
                    <Database className="w-4 h-4 text-indigo-400" />
                    <span>MySQL & SQLAlchemy ORM</span>
                  </h4>
                  <ul className="space-y-1.5 text-slate-400 list-disc list-inside">
                    <li><strong className="text-slate-200">User Model:</strong> ID, email, password_hash, role ('admin' | 'customer').</li>
                    <li><strong className="text-slate-200">Product Model:</strong> ID, name, category, price, stock, description, image_url.</li>
                    <li><strong className="text-slate-200">Order Model:</strong> ID, user_id, total_amount, status, created_at timestamp.</li>
                    <li><strong className="text-slate-200">OrderItem Model:</strong> Foreign keys with cascade deletion and indexing.</li>
                  </ul>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-slate-900 border border-slate-800">
                <h4 className="text-sm font-bold text-white mb-2">Key Engineering Learnings</h4>
                <p className="leading-relaxed">
                  Developed during my 90-day internship at Thought Process LLP, MarketHub solidified my understanding of transactional database integrity, relational schema design, state management across browser sessions, and the importance of separating administrative privilege from consumer interfaces.
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-4 sm:p-5 border-t border-slate-800 bg-slate-900/95 flex items-center justify-between">
          <span className="text-xs text-slate-400 font-mono hidden sm:inline">
            Hampana NV · Full Stack Python & Flask Portfolio Project
          </span>
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-xs font-semibold text-slate-300 ml-auto"
          >
            Close Preview
          </button>
        </div>
      </div>
    </div>
  );
}

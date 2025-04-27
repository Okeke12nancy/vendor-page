// import { useState } from 'react';
// import { DollarSign, CreditCard, TrendingUp, RotateCcw } from 'lucide-react';
// import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
// import { PieChart, Pie, Cell, Legend } from 'recharts';

// const Payments = () => {
//   const [revenueData] = useState([
//     { name: 'Jan', value: 1200 },
//     { name: 'Feb', value: 1900 },
//     { name: 'Mar', value: 1500 },
//     { name: 'Apr', value: 2500 },
//     { name: 'May', value: 2200 },
//     { name: 'Jun', value: 3000 },
//   ]);

//   const [paymentMethods] = useState([
//     { name: 'Credit Card', value: 45, color: '#4ade80' },
//     { name: 'Cash on Delivery', value: 30, color: '#fb923c' },
//     { name: 'Mobile Payment', value: 15, color: '#38bdf8' },
//     { name: 'Bank Transfer', value: 10, color: '#a855f7' },
//   ]);

//   const [transactions] = useState([
//     {
//       id: 'TRX-5678',
//       orderId: 'ORD-7895',
//       date: 'May 15, 2023',
//       method: 'CEMCS Voucher',
//       methodIcon: 'credit-card',
//       amount: '$42.50',
//       status: 'Completed'
//     },
//     {
//       id: 'TRX-5677',
//       orderId: 'ORD-7894',
//       date: 'May 15, 2023',
//       method: 'CEMCS Voucher',
//       methodIcon: 'smartphone',
//       amount: '$28.75',
//       status: 'Pending'
//     },
//     {
//       id: 'TRX-5676',
//       orderId: 'ORD-7893',
//       date: 'May 14, 2023',
//       method: 'CEMCS Voucher',
//       methodIcon: 'credit-card',
//       amount: '$35.20',
//       status: 'Completed'
//     },
//     {
//       id: 'TRX-5675',
//       orderId: 'ORD-7892',
//       date: 'May 14, 2023',
//       method: 'CEMCS Voucher',
//       methodIcon: 'credit-card',
//       amount: '$52.99',
//       status: 'Completed'
//     },
//     {
//       id: 'TRX-5674',
//       orderId: 'ORD-7891',
//       date: 'May 13, 2023',
//       method: 'Credit Card',
//       methodIcon: 'credit-card',
//       amount: '$18.50',
//       status: 'Completed'
//     }
//   ]);

//   return (
//     <div className="p-4">
//       <h1 className="text-2xl font-semibold mb-6">Payments Overview</h1>
      
//       {/* Stats Cards */}
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
//         <StatCard
//           title="Total Revenue"
//           value="$8,459.00"
//           change="+12.5% from last month"
//           icon={<DollarSign className="h-6 w-6 text-red-500" />}
//           iconBg="bg-red-100"
//         />
//         <StatCard
//           title="Pending Payments"
//           value="$1,245.50"
//           change="-2.2% from last month"
//           icon={<CreditCard className="h-6 w-6 text-blue-500" />}
//           iconBg="bg-blue-100"
//           negative
//         />
//         <StatCard
//           title="Average Order Value"
//           value="$34.50"
//           change="+2.8% from last month"
//           icon={<TrendingUp className="h-6 w-6 text-yellow-500" />}
//           iconBg="bg-yellow-100"
//         />
//         <StatCard
//           title="Refunds"
//           value="$245.00"
//           change="+5.1% from last month"
//           icon={<RotateCcw className="h-6 w-6 text-teal-500" />}
//           iconBg="bg-teal-100"
//           negative
//         />
//       </div>

//       {/* Charts */}
//       <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-6">
//         <div className="bg-white rounded-lg shadow p-6">
//           <h2 className="text-lg font-semibold mb-4">Revenue Trends</h2>
//           <div className="h-64">
//             <ResponsiveContainer width="100%" height="100%">
//               <BarChart data={revenueData}>
//                 <CartesianGrid strokeDasharray="3 3" vertical={false} />
//                 <XAxis dataKey="name" />
//                 <YAxis />
//                 <Tooltip />
//                 <Bar dataKey="value" fill="#4ade80" radius={[4, 4, 0, 0]} />
//               </BarChart>
//             </ResponsiveContainer>
//           </div>
//         </div>

//         <div className="bg-white rounded-lg shadow p-6">
//           <h2 className="text-lg font-semibold mb-4">Payment Methods</h2>
//           <div className="h-64">
//             <ResponsiveContainer width="100%" height="100%">
//               <PieChart>
//                 <Pie
//                   data={paymentMethods}
//                   cx="50%"
//                   cy="50%"
//                   innerRadius={70}
//                   outerRadius={100}
//                   paddingAngle={2}
//                   dataKey="value"
//                 >
//                   {paymentMethods.map((entry, index) => (
//                     <Cell key={`cell-${index}`} fill={entry.color} />
//                   ))}
//                 </Pie>
//                 <Legend
//                   verticalAlign="bottom"
//                   align="center"
//                   layout="horizontal"
//                   iconType="circle"
//                   iconSize={10}
//                 />
//                 <Tooltip />
//               </PieChart>
//             </ResponsiveContainer>
//           </div>
//         </div>
//       </div>

//       {/* Recent Transactions */}
//       <div className="bg-white rounded-lg shadow">
//         <div className="flex justify-between items-center p-6 border-b border-gray-200">
//           <h2 className="text-lg font-semibold">Recent Transactions</h2>
//           <div className="relative w-40">
//             <select className="w-full appearance-none bg-white border border-gray-300 rounded-lg px-4 py-2 pr-8 focus:outline-none focus:ring-2 focus:ring-green-500">
//               <option>Last 7 Days</option>
//               <option>Last 30 Days</option>
//               <option>This Month</option>
//             </select>
//             <CreditCard className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4 pointer-events-none" />
//           </div>
//         </div>
//         <div className="overflow-x-auto">
//           <table className="w-full">
//             <thead className="bg-gray-50">
//               <tr>
//                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Transaction ID</th>
//                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Order ID</th>
//                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Date</th>
//                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Payment Method</th>
//                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Amount</th>
//                 <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
//               </tr>
//             </thead>
//             <tbody className="bg-white divide-y divide-gray-200">
//               {transactions.map((transaction) => (
//                 <tr key={transaction.id}>
//                   <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-blue-600">#{transaction.id}</td>
//                   <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">#{transaction.orderId}</td>
//                   <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{transaction.date}</td>
//                   <td className="px-6 py-4 whitespace-nowrap">
//                     <div className="flex items-center">
//                       <div className={`p-2 rounded ${
//                         transaction.methodIcon === 'credit-card' ? 'bg-gray-100' : 'bg-blue-100'
//                       } mr-2`}>
//                         <CreditCard className="h-4 w-4 text-gray-600" />
//                       </div>
//                       <span className="text-sm">{transaction.method}</span>
//                     </div>
//                   </td>
//                   <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">{transaction.amount}</td>
//                   <td className="px-6 py-4 whitespace-nowrap">
//                     <span
//                       className={`px-2 py-1 text-xs rounded-full ${
//                         transaction.status === 'Completed'
//                           ? 'bg-green-100 text-green-800'
//                           : 'bg-yellow-100 text-yellow-800'
//                       }`}
//                     >
//                       {transaction.status}
//                     </span>
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </div>
//     </div>
//   );
// };

// interface StatCardProps {
//   title: string;
//   value: string;
//   change: string;
//   icon: React.ReactNode;
//   iconBg: string;
//   negative?: boolean;
// }

// const StatCard = ({ title, value, change, icon, iconBg, negative = false }: StatCardProps) => {
//   return (
//     <div className="bg-white p-6 rounded-lg shadow">
//       <div className="flex justify-between items-start mb-4">
//         <div className={`p-3 rounded-full ${iconBg}`}>{icon}</div>
//       </div>
//       <h3 className="text-gray-500 text-sm">{title}</h3>
//       <p className="text-2xl font-bold mt-1">{value}</p>
//       <div className={`text-xs mt-2 ${negative ? 'text-red-500' : 'text-green-500'}`}>
//         {change}
//       </div>
//     </div>
//   );
// };

// export default Payments;




import { useState } from 'react';
import { Search, PlusCircle, ChevronDown } from 'lucide-react';

const Products = () => {
  const [products] = useState([
    {
      id: 1,
      name: 'Vegetable Salad',
      category: 'Appetizers',
      price: '$12.99',
      status: 'In Stock',
      image: '/api/placeholder/200/200'
    },
    {
      id: 2,
      name: 'Margherita Pizza',
      category: 'Main Course',
      price: '$14.99',
      status: 'In Stock',
      image: '/api/placeholder/200/200'
    },
    {
      id: 3,
      name: 'Classic Burger',
      category: 'Main Course',
      price: '$9.99',
      status: 'In Stock',
      image: '/api/placeholder/200/200'
    },
    {
      id: 4,
      name: 'Creamy Pasta',
      category: 'Main Course',
      price: '$11.99',
      status: 'In Stock',
      image: '/api/placeholder/200/200'
    },
    {
      id: 5,
      name: 'Chocolate Cake',
      category: 'Desserts',
      price: '$8.99',
      status: 'Low Stock',
      image: '/api/placeholder/200/200'
    },
    {
      id: 6,
      name: 'Fresh Smoothie',
      category: 'Beverages',
      price: '$6.99',
      status: 'Out of stock',
      image: '/api/placeholder/200/200'
    }
  ]);

  return (
    <div className="p-4">
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-semibold">Products Management</h1>
        <button className="bg-green-500 text-white px-4 py-2 rounded-lg flex items-center">
          <PlusCircle className="h-5 w-5 mr-2" />
          Add New Product
        </button>
      </div>

      <div className="bg-white p-6 rounded-lg shadow">
        <div className="flex flex-col sm:flex-row justify-between items-center mb-6">
          <div className="w-full sm:w-auto mb-4 sm:mb-0 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-5 w-5" />
            <input
              type="text"
              placeholder="Search products..."
              className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500 w-full sm:w-64"
            />
          </div>
          <div className="flex space-x-3 w-full sm:w-auto">
            <div className="relative w-full sm:w-40">
              <select className="w-full appearance-none bg-white border border-gray-300 rounded-lg px-4 py-2 pr-8 focus:outline-none focus:ring-2 focus:ring-green-500">
                <option>All Categories</option>
                <option>Appetizers</option>
                <option>Main Course</option>
                <option>Desserts</option>
                <option>Beverages</option>
              </select>
              <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4 pointer-events-none" />
            </div>
            <div className="relative w-full sm:w-40">
              <select className="w-full appearance-none bg-white border border-gray-300 rounded-lg px-4 py-2 pr-8 focus:outline-none focus:ring-2 focus:ring-green-500">
                <option>Sort By: Newest</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
                <option>Name: A to Z</option>
              </select>
              <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4 pointer-events-none" />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product) => (
            <div key={product.id} className="bg-white border border-gray-200 rounded-lg overflow-hidden">
              <div className="h-48 overflow-hidden">
                <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-medium">{product.name}</h3>
                <p className="text-sm text-gray-500 mb-2">{product.category}</p>
                <div className="flex justify-between items-center">
                  <span className="text-lg font-semibold">{product.price}</span>
                  <span 
                    className={`px-2 py-1 text-xs rounded-full ${
                      product.status === 'In Stock'
                        ? 'bg-green-100 text-green-800'
                        : product.status === 'Low Stock'
                        ? 'bg-yellow-100 text-yellow-800'
                        : 'bg-red-100 text-red-800'
                    }`}
                  >
                    {product.status}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Products;

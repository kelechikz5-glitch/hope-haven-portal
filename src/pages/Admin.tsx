import React, { useState } from 'react';
import { Routes, Route, Link, useNavigate, useLocation } from 'react-router-dom';
import { 
  LayoutDashboard, 
  FileText, 
  Users, 
  MessageSquare, 
  Settings, 
  LogOut, 
  Plus, 
  Trash2, 
  Eye, 
  Search,
  ArrowUpRight,
  TrendingUp,
  MoreVertical,
  CheckCircle2,
  XCircle,
  Video,
  Heart,
  Image as ImageIcon,
  Bell,
  ChevronRight,
  Send,
  Download,
  Filter,
  BarChart3,
  Globe,
  DollarSign,
  Phone,
  Menu as LucideMenu
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';
import { Badge } from '@/components/ui/badge';
import { toast } from 'sonner';
import { 
  AreaChart, 
  Area, 
  XAxis, 
  YAxis, 
  CartesianGrid, 
  Tooltip, 
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell
} from 'recharts';

// --- Mock Data ---
const donationData = [
  { name: 'Jan', amount: 4500 },
  { name: 'Feb', amount: 5200 },
  { name: 'Mar', amount: 4800 },
  { name: 'Apr', amount: 6100 },
  { name: 'May', amount: 7500 },
  { name: 'Jun', amount: 8200 },
];

const impactData = [
  { name: 'Education', value: 45, color: '#10b981' },
  { name: 'Health', value: 30, color: '#3b82f6' },
  { name: 'Water', value: 15, color: '#0ea5e9' },
  { name: 'Relief', value: 10, color: '#f59e0b' },
];

// --- Components for Admin ---

const DashboardHome = () => {
  const stats = [
    { title: 'Total Donors', value: '2,842', change: '+12.5%', icon: Users, color: 'blue' },
    { title: 'Total Funding', value: '$124,500', change: '+18.2%', icon: DollarSign, color: 'emerald' },
    { title: 'Active Projects', value: '18', change: '+2', icon: Globe, color: 'amber' },
    { title: 'Volunteer Hours', value: '4,250', change: '+5.4%', icon: Heart, color: 'rose' },
  ];

  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, i) => (
          <Card key={i} className="border-none shadow-sm hover:shadow-md transition-shadow rounded-2xl overflow-hidden">
            <CardContent className="p-6">
              <div className="flex justify-between items-start mb-4">
                <div className="p-3 rounded-xl bg-slate-50 text-slate-600">
                  <stat.icon className="h-5 w-5" />
                </div>
                <Badge variant="outline" className="text-[10px] font-bold border-slate-100 bg-slate-50">Monthly</Badge>
              </div>
              <div>
                <p className="text-slate-500 text-sm font-bold uppercase tracking-widest">{stat.title}</p>
                <h3 className="text-3xl font-black text-slate-900 mt-1">{stat.value}</h3>
                <div className="flex items-center mt-2">
                  <span className="text-emerald-600 text-xs font-bold flex items-center">
                    <ArrowUpRight className="h-3 w-3 mr-1" />
                    {stat.change}
                  </span>
                  <span className="text-slate-400 text-[10px] ml-2 font-medium">vs last period</span>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <Card className="lg:col-span-2 border-none shadow-sm rounded-3xl">
          <CardHeader className="flex flex-row items-center justify-between">
            <div>
              <CardTitle className="text-xl font-bold">Funding Overview</CardTitle>
              <CardDescription>Monthly donation trends for the year 2024</CardDescription>
            </div>
            <Button variant="outline" size="sm" className="rounded-xl h-9">
              <Download className="h-4 w-4 mr-2" /> Report
            </Button>
          </CardHeader>
          <CardContent className="h-[350px] pt-4">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={donationData}>
                <defs>
                  <linearGradient id="colorAmount" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#10b981" stopOpacity={0.2}/>
                    <stop offset="95%" stopColor="#10b981" stopOpacity={0}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                <XAxis 
                  dataKey="name" 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{ fontSize: 12, fontWeight: 600, fill: '#64748b' }} 
                  dy={10}
                />
                <YAxis 
                  axisLine={false} 
                  tickLine={false} 
                  tick={{ fontSize: 12, fontWeight: 600, fill: '#64748b' }} 
                />
                <Tooltip 
                  contentStyle={{ borderRadius: '16px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' }}
                />
                <Area 
                  type="monotone" 
                  dataKey="amount" 
                  stroke="#10b981" 
                  strokeWidth={3} 
                  fillOpacity={1} 
                  fill="url(#colorAmount)" 
                />
              </AreaChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>

        <Card className="border-none shadow-sm rounded-3xl">
          <CardHeader>
            <CardTitle className="text-xl font-bold">Impact Allocation</CardTitle>
            <CardDescription>Funding distribution by sector</CardDescription>
          </CardHeader>
          <CardContent className="h-[350px] flex flex-col items-center justify-center">
            <ResponsiveContainer width="100%" height={220}>
              <PieChart>
                <Pie
                  data={impactData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={80}
                  paddingAngle={8}
                  dataKey="value"
                >
                  {impactData.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={entry.color} />
                  ))}
                </Pie>
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
            <div className="grid grid-cols-2 gap-4 w-full mt-6">
              {impactData.map((item, i) => (
                <div key={i} className="flex items-center space-x-2">
                  <div className="h-3 w-3 rounded-full" style={{ backgroundColor: item.color }} />
                  <span className="text-xs font-bold text-slate-600">{item.name}</span>
                  <span className="text-xs text-slate-400 font-medium">{item.value}%</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 pb-12">
        <Card className="border-none shadow-sm rounded-3xl">
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle className="text-xl font-bold">New Registrations</CardTitle>
            <Button variant="ghost" size="sm" className="text-emerald-600 font-bold">View All</Button>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {[
                { name: 'Sarah Wilson', role: 'Volunteer', date: '2 hours ago', status: 'Pending' },
                { name: 'Tech Solutions Ltd', role: 'Partner', date: '5 hours ago', status: 'Approved' },
                { name: 'Mike Rodriguez', role: 'Volunteer', date: 'Yesterday', status: 'Approved' },
                { name: 'Elena Gilbert', role: 'Volunteer', date: 'Yesterday', status: 'Rejected' },
              ].map((user, i) => (
                <div key={i} className="flex items-center justify-between p-2 group cursor-pointer hover:bg-slate-50 rounded-2xl transition-all">
                  <div className="flex items-center space-x-4">
                    <div className="h-12 w-12 rounded-2xl bg-slate-100 flex items-center justify-center font-bold text-slate-500 border-2 border-white shadow-sm">
                      {user.name.charAt(0)}
                    </div>
                    <div>
                      <h4 className="font-bold text-slate-900 text-sm leading-none">{user.name}</h4>
                      <p className="text-xs text-slate-400 mt-1 font-medium">{user.role} • {user.date}</p>
                    </div>
                  </div>
                  <Badge className={`rounded-xl px-3 py-1 text-[10px] font-black uppercase tracking-widest ${
                    user.status === 'Approved' ? 'bg-emerald-100 text-emerald-600 hover:bg-emerald-100' :
                    user.status === 'Rejected' ? 'bg-rose-100 text-rose-600 hover:bg-rose-100' :
                    'bg-amber-100 text-amber-600 hover:bg-amber-100'
                  }`}>
                    {user.status}
                  </Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card className="border-none shadow-sm rounded-3xl">
          <CardHeader className="flex flex-row items-center justify-between">
            <CardTitle className="text-xl font-bold">Live Messaging</CardTitle>
            <Badge className="bg-emerald-600">3 New</Badge>
          </CardHeader>
          <CardContent>
            <div className="space-y-6">
              {[
                { from: 'Alice Smith', msg: 'Hi admin, can I get the volunteer kit for the next event?', time: '10:30 AM', unread: true },
                { from: 'Marcus Chen', msg: 'The documents for the water project are uploaded.', time: '09:15 AM', unread: true },
                { from: 'Sarah Wilson', msg: 'Thank you for approving my application!', time: 'Yesterday', unread: false },
              ].map((msg, i) => (
                <div key={i} className={`flex items-start space-x-4 p-4 rounded-2xl transition-all ${msg.unread ? 'bg-emerald-50 border border-emerald-100' : 'hover:bg-slate-50'}`}>
                  <div className="h-10 w-10 rounded-full bg-white flex items-center justify-center font-bold text-emerald-600 border border-slate-100 flex-shrink-0">
                    {msg.from.charAt(0)}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-center mb-1">
                      <span className="font-bold text-sm text-slate-900">{msg.from}</span>
                      <span className="text-[10px] text-slate-400 font-medium">{msg.time}</span>
                    </div>
                    <p className="text-xs text-slate-500 truncate font-medium">{msg.msg}</p>
                  </div>
                  {msg.unread && <div className="w-2 h-2 bg-emerald-600 rounded-full mt-2" />}
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

const PostManager = () => {
  const [posts, setPosts] = useState([
    { id: 1, title: 'Village School Empowerment', type: 'Image', views: '12.5k', status: 'Live', date: 'May 15, 2024' },
    { id: 2, title: '2024 Global Impact Documentary', type: 'Video', views: '45.2k', status: 'Live', date: 'May 20, 2024' },
    { id: 3, title: 'Clean Water Initiative - Peru', type: 'Image', views: '8.4k', status: 'Draft', date: 'June 01, 2024' },
  ]);

  const handleDelete = (id: number) => {
    setPosts(posts.filter(p => p.id !== id));
    toast.error('Post moved to trash');
  };

  return (
    <div className="space-y-8 animate-in slide-in-from-bottom duration-500">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div>
          <h2 className="text-3xl font-bold text-slate-900 tracking-tight">Post Management</h2>
          <p className="text-slate-500 text-sm font-medium mt-1">Control your website content, slideshows, and activity feeds.</p>
        </div>
        <div className="flex space-x-3 w-full md:w-auto">
          <Button variant="outline" className="flex-1 md:flex-none h-12 rounded-xl font-bold"><Filter className="h-4 w-4 mr-2" /> Filter</Button>
          <Button className="flex-1 md:flex-none bg-emerald-600 hover:bg-emerald-700 h-12 rounded-xl font-bold px-8 shadow-lg shadow-emerald-900/20">
            <Plus className="h-4 w-4 mr-2" /> New Entry
          </Button>
        </div>
      </div>

      <Card className="border-none shadow-sm rounded-[2rem] overflow-hidden">
        <div className="p-4 border-b border-slate-50 flex items-center space-x-4">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
            <Input className="pl-10 h-11 border-none bg-slate-50 rounded-xl" placeholder="Search entries..." />
          </div>
          <Badge variant="outline" className="h-11 px-4 rounded-xl border-slate-100 font-bold text-slate-500">12 Total</Badge>
        </div>
        <Table>
          <TableHeader className="bg-slate-50/50">
            <TableRow className="hover:bg-transparent">
              <TableHead className="font-bold text-xs uppercase tracking-widest h-14 pl-8">Activity Title</TableHead>
              <TableHead className="font-bold text-xs uppercase tracking-widest h-14">Type</TableHead>
              <TableHead className="font-bold text-xs uppercase tracking-widest h-14">Impact Reach</TableHead>
              <TableHead className="font-bold text-xs uppercase tracking-widest h-14">Publish Date</TableHead>
              <TableHead className="font-bold text-xs uppercase tracking-widest h-14">Status</TableHead>
              <TableHead className="text-right font-bold text-xs uppercase tracking-widest h-14 pr-8">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {posts.map((post) => (
              <TableRow key={post.id} className="group hover:bg-slate-50/50">
                <TableCell className="font-bold text-slate-900 pl-8">{post.title}</TableCell>
                <TableCell>
                  <div className="flex items-center space-x-2">
                    {post.type === 'Video' ? <Video className="h-4 w-4 text-blue-500" /> : <ImageIcon className="h-4 w-4 text-emerald-500" />}
                    <span className="text-sm font-medium">{post.type}</span>
                  </div>
                </TableCell>
                <TableCell className="font-bold text-slate-500">{post.views}</TableCell>
                <TableCell className="text-slate-400 text-sm font-medium">{post.date}</TableCell>
                <TableCell>
                  <Badge className={`rounded-full px-3 py-1 text-[10px] font-black tracking-widest ${post.status === 'Live' ? 'bg-emerald-100 text-emerald-600 hover:bg-emerald-100' : 'bg-slate-100 text-slate-500 hover:bg-slate-100'}`}>
                    {post.status.toUpperCase()}
                  </Badge>
                </TableCell>
                <TableCell className="text-right pr-8">
                  <div className="flex justify-end space-x-2">
                    <Button variant="ghost" size="sm" className="h-10 w-10 rounded-xl hover:bg-white hover:shadow-sm">
                      <Eye className="h-4 w-4 text-slate-400" />
                    </Button>
                    <Button variant="ghost" size="sm" className="h-10 w-10 rounded-xl hover:bg-rose-50 hover:text-rose-600" onClick={() => handleDelete(post.id)}>
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>
    </div>
  );
};

const UserManager = () => {
  const users = [
    { id: 1, name: 'Alice Smith', email: 'alice@impact.org', type: 'Volunteer', status: 'Active', joined: 'Jan 12, 2024' },
    { id: 2, name: 'Metropolitan Bank', email: 'csr@metbank.com', type: 'Partner', status: 'Active', joined: 'Feb 05, 2024' },
    { id: 3, name: 'Marcus Chen', email: 'marcus.c@gmail.com', type: 'Volunteer', status: 'Pending', joined: 'Jun 10, 2024' },
    { id: 4, name: 'Global Tech Inc', email: 'partners@gtech.io', type: 'Partner', status: 'Suspended', joined: 'Mar 22, 2024' },
  ];

  return (
    <div className="space-y-8 animate-in slide-in-from-right duration-500">
      <div className="flex justify-between items-end">
        <div>
          <h2 className="text-3xl font-bold text-slate-900 tracking-tight">Account Profiles</h2>
          <p className="text-slate-500 text-sm font-medium mt-1">Manage volunteers, corporate partners, and stakeholder accounts.</p>
        </div>
        <div className="flex space-x-4">
          <Button variant="outline" className="h-12 rounded-xl font-bold">Export CSV</Button>
        </div>
      </div>

      <Card className="border-none shadow-sm rounded-[2rem] overflow-hidden">
        <Table>
          <TableHeader className="bg-slate-50/50">
            <TableRow className="hover:bg-transparent">
              <TableHead className="font-bold text-xs uppercase tracking-widest h-14 pl-8">Account Name</TableHead>
              <TableHead className="font-bold text-xs uppercase tracking-widest h-14">Classification</TableHead>
              <TableHead className="font-bold text-xs uppercase tracking-widest h-14">System Status</TableHead>
              <TableHead className="font-bold text-xs uppercase tracking-widest h-14">Joined Since</TableHead>
              <TableHead className="text-right font-bold text-xs uppercase tracking-widest h-14 pr-8">Control</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {users.map((user) => (
              <TableRow key={user.id} className="group hover:bg-slate-50/50">
                <TableCell className="pl-8">
                  <div className="flex items-center space-x-4">
                    <div className="h-12 w-12 rounded-full bg-emerald-50 flex items-center justify-center font-bold text-emerald-600 border-2 border-white shadow-sm">
                      {user.name.charAt(0)}
                    </div>
                    <div>
                      <p className="font-bold text-slate-900">{user.name}</p>
                      <p className="text-xs text-slate-400 font-medium">{user.email}</p>
                    </div>
                  </div>
                </TableCell>
                <TableCell>
                  <Badge variant="outline" className={`rounded-xl px-4 py-1 text-[10px] font-black uppercase tracking-widest ${user.type === 'Partner' ? 'border-purple-200 text-purple-600 bg-purple-50' : 'border-emerald-200 text-emerald-600 bg-emerald-50'}`}>
                    {user.type}
                  </Badge>
                </TableCell>
                <TableCell>
                  <div className="flex items-center space-x-2">
                    {user.status === 'Active' ? <CheckCircle2 className="h-4 w-4 text-emerald-500" /> : <XCircle className="h-4 w-4 text-slate-300" />}
                    <span className="text-sm font-bold text-slate-600">{user.status}</span>
                  </div>
                </TableCell>
                <TableCell className="text-slate-400 text-sm font-medium">{user.joined}</TableCell>
                <TableCell className="text-right pr-8">
                  <Button variant="outline" size="sm" className="rounded-xl border-slate-200 hover:bg-slate-900 hover:text-white transition-all font-bold h-10 px-5" asChild>
                    <Link to={`/admin/messages?user=${user.id}`}>Send Message</Link>
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Card>
    </div>
  );
};

const MessagingSystem = () => {
  const [messages] = useState([
    { id: 1, from: 'Alice Smith', content: 'Hi admin, I would like to help with the next event.', time: '10:30 AM', unread: true },
    { id: 2, from: 'Marcus Chen', content: 'Sent the sponsorship documents to your email.', time: 'Yesterday', unread: false },
  ]);

  return (
    <div className="h-[calc(100vh-200px)] flex space-x-8 animate-in zoom-in-95 duration-500">
      {/* Sidebar List */}
      <div className="w-96 flex flex-col space-y-4">
        <div className="bg-white rounded-3xl p-8 shadow-sm flex-1 flex flex-col border border-slate-100">
          <div className="flex justify-between items-center mb-10">
            <h3 className="text-2xl font-black tracking-tight">Inbox</h3>
            <Button size="icon" variant="ghost" className="rounded-xl"><Plus className="h-5 w-5" /></Button>
          </div>
          <div className="relative mb-8">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-slate-400" />
            <Input className="pl-10 h-12 bg-slate-50 border-none rounded-xl text-sm" placeholder="Search chats..." />
          </div>
          <div className="space-y-3 flex-grow overflow-auto custom-scrollbar">
            {messages.map((msg) => (
              <div key={msg.id} className={`p-5 rounded-[1.5rem] cursor-pointer transition-all ${msg.unread ? 'bg-emerald-50 border border-emerald-100 shadow-sm' : 'hover:bg-slate-50 border border-transparent'}`}>
                <div className="flex justify-between items-center mb-2">
                  <span className="font-black text-sm text-slate-900">{msg.from}</span>
                  <span className="text-[10px] text-slate-400 font-bold">{msg.time}</span>
                </div>
                <p className={`text-xs truncate font-medium ${msg.unread ? 'text-slate-600' : 'text-slate-400'}`}>{msg.content}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Chat Area */}
      <div className="flex-1 bg-white rounded-3xl shadow-xl shadow-slate-200/50 flex flex-col overflow-hidden border border-slate-100">
        <div className="p-8 border-b border-slate-50 flex justify-between items-center bg-white/80 backdrop-blur-md z-10">
          <div className="flex items-center space-x-5">
            <div className="h-14 w-14 rounded-2xl bg-emerald-100 flex items-center justify-center font-black text-emerald-600 border-2 border-white shadow-sm">A</div>
            <div>
              <h4 className="font-black text-slate-900 text-lg">Alice Smith</h4>
              <div className="flex items-center mt-1">
                <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse mr-2" />
                <p className="text-[10px] text-emerald-500 font-black uppercase tracking-widest">Active Now</p>
              </div>
            </div>
          </div>
          <div className="flex space-x-2">
            <Button variant="ghost" size="icon" className="h-12 w-12 rounded-xl"><Phone className="h-5 w-5 text-slate-400" /></Button>
            <Button variant="ghost" size="icon" className="h-12 w-12 rounded-xl"><MoreVertical className="h-5 w-5 text-slate-400" /></Button>
          </div>
        </div>
        
        <div className="flex-1 p-8 overflow-auto space-y-6 bg-slate-50/30 custom-scrollbar">
          <div className="flex justify-start">
            <div className="bg-white p-6 rounded-[2rem] rounded-tl-none shadow-sm max-w-[70%] border border-slate-100">
              <p className="text-sm text-slate-600 leading-relaxed font-medium">Hi admin, I would like to help with the next event. Is there a schedule available for the medical drive in Nairobi?</p>
              <div className="flex items-center justify-end mt-4 space-x-2">
                <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">10:30 AM</p>
                <CheckCircle2 className="h-3 w-3 text-emerald-500" />
              </div>
            </div>
          </div>
          <div className="flex justify-end">
            <div className="bg-emerald-600 text-white p-6 rounded-[2rem] rounded-tr-none shadow-2xl shadow-emerald-900/20 max-w-[70%]">
              <p className="text-sm font-medium leading-relaxed">Hello Alice! That's great to hear. We're finalizing the medical kits distribution list today. I'll send you the volunteer pack and schedule by evening.</p>
              <p className="text-[10px] text-emerald-100/70 font-bold uppercase tracking-widest mt-4 text-right">10:35 AM</p>
            </div>
          </div>
        </div>

        <div className="p-8 border-t border-slate-50 bg-white">
          <div className="flex items-center space-x-4 bg-slate-50 p-2 rounded-2xl border border-slate-100">
            <Input className="flex-1 border-none bg-transparent h-12 text-sm font-medium focus-visible:ring-0 shadow-none px-4" placeholder="Type your message here..." />
            <Button className="bg-emerald-600 hover:bg-emerald-700 h-12 w-12 rounded-xl shadow-lg shadow-emerald-900/20">
              <Send className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

const Admin = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const menuItems = [
    { name: 'Dashboard', path: '/admin', icon: LayoutDashboard },
    { name: 'Posts', path: '/admin/posts', icon: FileText },
    { name: 'Users', path: '/admin/users', icon: Users },
    { name: 'Messages', path: '/admin/messages', icon: MessageSquare },
    { name: 'Settings', path: '/admin/settings', icon: Settings },
  ];

  const currentPath = location.pathname;
  const currentTitle = menuItems.find(m => m.path === currentPath)?.name || 'Dashboard';

  return (
    <div className="min-h-screen bg-slate-50 flex font-sans selection:bg-emerald-100 selection:text-emerald-900">
      {/* Sidebar */}
      <aside className="w-80 bg-slate-900 border-r border-slate-800 hidden lg:flex flex-col sticky top-0 h-screen z-50">
        <div className="p-10">
          <Link to="/" className="flex items-center space-x-3 group">
            <div className="bg-emerald-600 p-2 rounded-xl shadow-lg shadow-emerald-900/40">
              <Heart className="h-6 w-6 text-white fill-current" />
            </div>
            <div className="flex flex-col">
              <span className="font-black text-xl tracking-tight text-white leading-none">Hamilton</span>
              <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-emerald-500 mt-1">Foundation</span>
            </div>
          </Link>
        </div>

        <div className="px-6 py-4">
          <p className="text-[10px] text-slate-500 font-black uppercase tracking-[0.2em] px-4 mb-6">Main Command</p>
          <nav className="space-y-2">
            {menuItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className={`flex items-center justify-between px-6 py-4 rounded-2xl transition-all duration-300 group ${
                  currentPath === item.path 
                    ? 'bg-emerald-600 text-white shadow-2xl shadow-emerald-900/40' 
                    : 'text-slate-400 hover:bg-slate-800 hover:text-white'
                }`}
              >
                <div className="flex items-center space-x-4">
                  <item.icon className={`h-5 w-5 ${currentPath === item.path ? 'text-white' : 'text-slate-500 group-hover:text-emerald-500'} transition-colors`} />
                  <span className="font-bold text-sm tracking-tight">{item.name}</span>
                </div>
                {currentPath === item.path && <ChevronRight className="h-4 w-4 text-emerald-200" />}
              </Link>
            ))}
          </nav>
        </div>

        <div className="mt-auto p-8 border-t border-slate-800">
          <div className="bg-slate-800/50 rounded-3xl p-6 mb-8">
            <div className="flex items-center space-x-4 mb-4">
              <div className="h-10 w-10 rounded-xl bg-emerald-600 flex items-center justify-center font-black text-white">JH</div>
              <div>
                <p className="text-white text-xs font-bold leading-none">John Hamilton</p>
                <p className="text-emerald-500 text-[10px] mt-1 font-black uppercase tracking-widest">Administrator</p>
              </div>
            </div>
            <Button variant="outline" size="sm" className="w-full border-slate-700 text-slate-400 hover:bg-slate-700 hover:text-white rounded-xl h-10 font-bold" onClick={() => navigate('/')}>
              <LogOut className="h-3 w-3 mr-2" /> Sign Out
            </Button>
          </div>
          <p className="text-center text-[8px] text-slate-600 font-black uppercase tracking-[0.3em]">Hamilton OS v2.4.0</p>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-auto custom-scrollbar">
        <header className="h-24 px-12 flex items-center justify-between sticky top-0 bg-slate-50/80 backdrop-blur-xl z-40 border-b border-slate-100">
          <div className="flex items-center space-x-4">
            <div className="lg:hidden bg-white p-3 rounded-xl border border-slate-100 mr-4 shadow-sm">
              <LucideMenu className="h-6 w-6 text-slate-900" />
            </div>
            <h1 className="text-2xl font-black text-slate-900 tracking-tight">{currentTitle}</h1>
          </div>
          
          <div className="flex items-center space-x-6">
            <div className="hidden md:flex items-center space-x-2 bg-white px-4 py-2 rounded-xl border border-slate-100 shadow-sm">
              <BarChart3 className="h-4 w-4 text-emerald-500" />
              <span className="text-xs font-black text-slate-700">LIVE FEED</span>
            </div>
            <button className="relative h-12 w-12 bg-white rounded-xl border border-slate-100 flex items-center justify-center shadow-sm hover:shadow-md transition-all">
              <Bell className="h-5 w-5 text-slate-400" />
              <span className="absolute top-2 right-2 w-2.5 h-2.5 bg-rose-500 rounded-full border-2 border-white" />
            </button>
            <div className="h-12 w-12 bg-slate-200 rounded-xl border-2 border-white shadow-sm overflow-hidden">
              <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=100" className="w-full h-full object-cover" alt="User" />
            </div>
          </div>
        </header>

        <div className="p-12 max-w-7xl mx-auto">
          <Routes>
            <Route index element={<DashboardHome />} />
            <Route path="posts" element={<PostManager />} />
            <Route path="users" element={<UserManager />} />
            <Route path="messages" element={<MessagingSystem />} />
            <Route path="settings" element={
              <div className="h-[60vh] flex flex-col items-center justify-center text-center space-y-6">
                <div className="h-20 w-20 bg-slate-100 rounded-3xl flex items-center justify-center text-slate-400">
                  <Settings className="h-10 w-10" />
                </div>
                <div>
                  <h3 className="text-2xl font-black text-slate-900">System Preferences</h3>
                  <p className="text-slate-500 font-medium mt-2">Configuration module is under scheduled maintenance.</p>
                </div>
                <Button className="bg-slate-900 rounded-xl px-10 h-12 font-bold" onClick={() => navigate('/admin')}>Back to Dashboard</Button>
              </div>
            } />
          </Routes>
        </div>
      </main>
    </div>
  );
};

export default Admin;
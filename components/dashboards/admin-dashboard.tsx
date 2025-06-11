"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import {
  Users,
  MapPin,
  Calendar,
  DollarSign,
  TrendingUp,
  LogOut,
  Bell,
  Settings,
  BarChart3,
  UserCheck,
  Activity,
  Plus,
  Edit,
  Trash2,
  Eye,
  UserPlus,
  Shield,
} from "lucide-react"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

// Admin-specific data
const ADMIN_DATA = {
  stats: {
    totalUsers: 45,
    totalGuides: 12,
    totalBookings: 156,
    totalRevenue: 45600,
    monthlyGrowth: 23.5,
    systemHealth: 98.5,
  },
  users: [
    { id: 1, name: "Omar Al-Fahad", email: "omar@saudiexplorer.com", role: "guide", status: "active", tours: 23 },
    { id: 2, name: "Fatima Al-Zahra", email: "fatima@saudiexplorer.com", role: "guide", status: "active", tours: 18 },
    { id: 3, name: "Hassan Al-Maliki", email: "hassan@saudiexplorer.com", role: "manager", status: "active", tours: 0 },
    { id: 4, name: "Sarah Johnson", email: "sarah@saudiexplorer.com", role: "customer", status: "active", tours: 3 },
  ],
  tours: [
    { id: 1, name: "AlUla Heritage Tour", price: 850, duration: "8 hours", status: "active", bookings: 45 },
    { id: 2, name: "Riyadh City Experience", price: 650, duration: "6 hours", status: "active", bookings: 38 },
    { id: 3, name: "Red Sea Adventure", price: 1200, duration: "2 days", status: "active", bookings: 32 },
    { id: 4, name: "Desert Safari", price: 750, duration: "1 day", status: "draft", bookings: 0 },
  ],
  systemLogs: [
    { id: 1, action: "User Login", user: "Omar Al-Fahad", timestamp: "2024-01-15 09:30:00", status: "success" },
    { id: 2, action: "Booking Created", user: "System", timestamp: "2024-01-15 10:15:00", status: "success" },
    { id: 3, action: "Tour Updated", user: "Admin User", timestamp: "2024-01-15 11:00:00", status: "success" },
    { id: 4, action: "Payment Failed", user: "System", timestamp: "2024-01-15 11:30:00", status: "error" },
  ],
}

interface AdminDashboardProps {
  user: any
  onLogout: () => void
}

export default function AdminDashboard({ user, onLogout }: AdminDashboardProps) {
  const [activeTab, setActiveTab] = useState("overview")
  const [isAddUserOpen, setIsAddUserOpen] = useState(false)
  const [isAddTourOpen, setIsAddTourOpen] = useState(false)
  const [newUser, setNewUser] = useState({ name: "", email: "", role: "guide" })
  const [newTour, setNewTour] = useState({ name: "", price: "", duration: "", description: "" })

  const handleAddUser = () => {
    // In a real app, this would make an API call
    console.log("Adding user:", newUser)
    setIsAddUserOpen(false)
    setNewUser({ name: "", email: "", role: "guide" })
  }

  const handleAddTour = () => {
    // In a real app, this would make an API call
    console.log("Adding tour:", newTour)
    setIsAddTourOpen(false)
    setNewTour({ name: "", price: "", duration: "", description: "" })
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-white">
      {/* Header */}
      <header className="bg-white border-b border-green-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <Shield className="h-8 w-8 text-green-600" />
                <span className="text-xl font-bold text-green-800">Admin Dashboard</span>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <Button variant="ghost" size="sm">
                <Bell className="h-4 w-4" />
              </Button>
              <Button variant="ghost" size="sm">
                <Settings className="h-4 w-4" />
              </Button>
              <div className="flex items-center space-x-2">
                <div className="text-right">
                  <p className="text-sm font-medium">{user.name}</p>
                  <Badge variant="default" className="text-xs bg-red-600">
                    {user.role}
                  </Badge>
                </div>
                <Button onClick={onLogout} variant="outline" size="sm">
                  <LogOut className="h-4 w-4 mr-2" />
                  Logout
                </Button>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Navigation Tabs */}
        <div className="mb-8">
          <div className="border-b border-gray-200">
            <nav className="-mb-px flex space-x-8">
              {[
                { id: "overview", name: "Overview", icon: BarChart3 },
                { id: "users", name: "User Management", icon: Users },
                { id: "tours", name: "Tour Management", icon: MapPin },
                { id: "system", name: "System Logs", icon: Activity },
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center space-x-2 py-2 px-1 border-b-2 font-medium text-sm ${
                    activeTab === tab.id
                      ? "border-green-500 text-green-600"
                      : "border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300"
                  }`}
                >
                  <tab.icon className="h-4 w-4" />
                  <span>{tab.name}</span>
                </button>
              ))}
            </nav>
          </div>
        </div>

        {/* Overview Tab */}
        {activeTab === "overview" && (
          <div className="space-y-8">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">Admin Overview 👑</h1>
              <p className="text-gray-600">Complete system management and analytics.</p>
            </div>

            {/* Admin Stats Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6">
              <Card className="bg-gradient-to-r from-blue-500 to-blue-600 text-white">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-blue-100 text-sm">Total Users</p>
                      <p className="text-3xl font-bold">{ADMIN_DATA.stats.totalUsers}</p>
                    </div>
                    <Users className="h-8 w-8 text-blue-200" />
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-r from-green-500 to-green-600 text-white">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-green-100 text-sm">Active Guides</p>
                      <p className="text-3xl font-bold">{ADMIN_DATA.stats.totalGuides}</p>
                    </div>
                    <UserCheck className="h-8 w-8 text-green-200" />
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-r from-purple-500 to-purple-600 text-white">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-purple-100 text-sm">Total Bookings</p>
                      <p className="text-3xl font-bold">{ADMIN_DATA.stats.totalBookings}</p>
                    </div>
                    <Calendar className="h-8 w-8 text-purple-200" />
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-r from-orange-500 to-orange-600 text-white">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-orange-100 text-sm">Revenue</p>
                      <p className="text-3xl font-bold">${ADMIN_DATA.stats.totalRevenue.toLocaleString()}</p>
                    </div>
                    <DollarSign className="h-8 w-8 text-orange-200" />
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-r from-teal-500 to-teal-600 text-white">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-teal-100 text-sm">Growth</p>
                      <p className="text-3xl font-bold">+{ADMIN_DATA.stats.monthlyGrowth}%</p>
                    </div>
                    <TrendingUp className="h-8 w-8 text-teal-200" />
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-r from-indigo-500 to-indigo-600 text-white">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-indigo-100 text-sm">System Health</p>
                      <p className="text-3xl font-bold">{ADMIN_DATA.stats.systemHealth}%</p>
                    </div>
                    <Activity className="h-8 w-8 text-indigo-200" />
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Quick Actions */}
            <Card>
              <CardHeader>
                <CardTitle>Quick Admin Actions</CardTitle>
                <CardDescription>Common administrative tasks</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <Dialog open={isAddUserOpen} onOpenChange={setIsAddUserOpen}>
                    <DialogTrigger asChild>
                      <Button className="h-20 flex-col bg-blue-600 hover:bg-blue-700">
                        <UserPlus className="h-6 w-6 mb-2" />
                        <span className="text-sm">Add User</span>
                      </Button>
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle>Add New User</DialogTitle>
                        <DialogDescription>Create a new user account for the system.</DialogDescription>
                      </DialogHeader>
                      <div className="space-y-4">
                        <div>
                          <Label htmlFor="name">Full Name</Label>
                          <Input
                            id="name"
                            value={newUser.name}
                            onChange={(e) => setNewUser({ ...newUser, name: e.target.value })}
                            placeholder="Enter full name"
                          />
                        </div>
                        <div>
                          <Label htmlFor="email">Email</Label>
                          <Input
                            id="email"
                            type="email"
                            value={newUser.email}
                            onChange={(e) => setNewUser({ ...newUser, email: e.target.value })}
                            placeholder="Enter email address"
                          />
                        </div>
                        <div>
                          <Label htmlFor="role">Role</Label>
                          <Select
                            value={newUser.role}
                            onValueChange={(value) => setNewUser({ ...newUser, role: value })}
                          >
                            <SelectTrigger>
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="guide">Guide</SelectItem>
                              <SelectItem value="manager">Manager</SelectItem>
                              <SelectItem value="admin">Admin</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>
                        <Button onClick={handleAddUser} className="w-full">
                          Create User
                        </Button>
                      </div>
                    </DialogContent>
                  </Dialog>

                  <Dialog open={isAddTourOpen} onOpenChange={setIsAddTourOpen}>
                    <DialogTrigger asChild>
                      <Button variant="outline" className="h-20 flex-col">
                        <Plus className="h-6 w-6 mb-2" />
                        <span className="text-sm">Add Tour</span>
                      </Button>
                    </DialogTrigger>
                    <DialogContent>
                      <DialogHeader>
                        <DialogTitle>Add New Tour</DialogTitle>
                        <DialogDescription>Create a new tour package.</DialogDescription>
                      </DialogHeader>
                      <div className="space-y-4">
                        <div>
                          <Label htmlFor="tourName">Tour Name</Label>
                          <Input
                            id="tourName"
                            value={newTour.name}
                            onChange={(e) => setNewTour({ ...newTour, name: e.target.value })}
                            placeholder="Enter tour name"
                          />
                        </div>
                        <div>
                          <Label htmlFor="price">Price ($)</Label>
                          <Input
                            id="price"
                            type="number"
                            value={newTour.price}
                            onChange={(e) => setNewTour({ ...newTour, price: e.target.value })}
                            placeholder="Enter price"
                          />
                        </div>
                        <div>
                          <Label htmlFor="duration">Duration</Label>
                          <Input
                            id="duration"
                            value={newTour.duration}
                            onChange={(e) => setNewTour({ ...newTour, duration: e.target.value })}
                            placeholder="e.g., 8 hours, 2 days"
                          />
                        </div>
                        <div>
                          <Label htmlFor="description">Description</Label>
                          <Textarea
                            id="description"
                            value={newTour.description}
                            onChange={(e) => setNewTour({ ...newTour, description: e.target.value })}
                            placeholder="Enter tour description"
                          />
                        </div>
                        <Button onClick={handleAddTour} className="w-full">
                          Create Tour
                        </Button>
                      </div>
                    </DialogContent>
                  </Dialog>

                  <Button variant="outline" className="h-20 flex-col">
                    <BarChart3 className="h-6 w-6 mb-2" />
                    <span className="text-sm">Analytics</span>
                  </Button>
                  <Button variant="outline" className="h-20 flex-col">
                    <Settings className="h-6 w-6 mb-2" />
                    <span className="text-sm">Settings</span>
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Users Tab */}
        {activeTab === "users" && (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <div>
                <h2 className="text-2xl font-bold">User Management</h2>
                <p className="text-gray-600">Manage all system users and their permissions</p>
              </div>
              <Dialog open={isAddUserOpen} onOpenChange={setIsAddUserOpen}>
                <DialogTrigger asChild>
                  <Button>
                    <UserPlus className="h-4 w-4 mr-2" />
                    Add User
                  </Button>
                </DialogTrigger>
              </Dialog>
            </div>

            <Card>
              <CardContent className="p-0">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Name</TableHead>
                      <TableHead>Email</TableHead>
                      <TableHead>Role</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Tours</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {ADMIN_DATA.users.map((user) => (
                      <TableRow key={user.id}>
                        <TableCell className="font-medium">{user.name}</TableCell>
                        <TableCell>{user.email}</TableCell>
                        <TableCell>
                          <Badge variant={user.role === "admin" ? "default" : "outline"}>{user.role}</Badge>
                        </TableCell>
                        <TableCell>
                          <Badge variant={user.status === "active" ? "default" : "secondary"}>{user.status}</Badge>
                        </TableCell>
                        <TableCell>{user.tours}</TableCell>
                        <TableCell>
                          <div className="flex space-x-2">
                            <Button size="sm" variant="outline">
                              <Eye className="h-4 w-4" />
                            </Button>
                            <Button size="sm" variant="outline">
                              <Edit className="h-4 w-4" />
                            </Button>
                            <Button size="sm" variant="outline">
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Tours Tab */}
        {activeTab === "tours" && (
          <div className="space-y-6">
            <div className="flex justify-between items-center">
              <div>
                <h2 className="text-2xl font-bold">Tour Management</h2>
                <p className="text-gray-600">Manage all tour packages and their details</p>
              </div>
              <Dialog open={isAddTourOpen} onOpenChange={setIsAddTourOpen}>
                <DialogTrigger asChild>
                  <Button>
                    <Plus className="h-4 w-4 mr-2" />
                    Add Tour
                  </Button>
                </DialogTrigger>
              </Dialog>
            </div>

            <Card>
              <CardContent className="p-0">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Tour Name</TableHead>
                      <TableHead>Price</TableHead>
                      <TableHead>Duration</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Bookings</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {ADMIN_DATA.tours.map((tour) => (
                      <TableRow key={tour.id}>
                        <TableCell className="font-medium">{tour.name}</TableCell>
                        <TableCell>${tour.price}</TableCell>
                        <TableCell>{tour.duration}</TableCell>
                        <TableCell>
                          <Badge variant={tour.status === "active" ? "default" : "secondary"}>{tour.status}</Badge>
                        </TableCell>
                        <TableCell>{tour.bookings}</TableCell>
                        <TableCell>
                          <div className="flex space-x-2">
                            <Button size="sm" variant="outline">
                              <Eye className="h-4 w-4" />
                            </Button>
                            <Button size="sm" variant="outline">
                              <Edit className="h-4 w-4" />
                            </Button>
                            <Button size="sm" variant="outline">
                              <Trash2 className="h-4 w-4" />
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </div>
        )}

        {/* System Logs Tab */}
        {activeTab === "system" && (
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold">System Logs</h2>
              <p className="text-gray-600">Monitor system activities and events</p>
            </div>

            <Card>
              <CardContent className="p-0">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Action</TableHead>
                      <TableHead>User</TableHead>
                      <TableHead>Timestamp</TableHead>
                      <TableHead>Status</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {ADMIN_DATA.systemLogs.map((log) => (
                      <TableRow key={log.id}>
                        <TableCell className="font-medium">{log.action}</TableCell>
                        <TableCell>{log.user}</TableCell>
                        <TableCell>{log.timestamp}</TableCell>
                        <TableCell>
                          <Badge variant={log.status === "success" ? "default" : "destructive"}>{log.status}</Badge>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </div>
        )}
      </main>
    </div>
  )
}

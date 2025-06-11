"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Label } from "@/components/ui/label"
import {
  Users,
  Calendar,
  DollarSign,
  TrendingUp,
  Star,
  BarChart3,
  UserCheck,
  MapPin,
  LogOut,
  Bell,
  Settings,
  CheckCircle,
  XCircle,
  Clock,
  Eye,
  Edit,
  Briefcase,
} from "lucide-react"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

// Manager-specific data
const MANAGER_DATA = {
  stats: {
    totalBookings: 156,
    pendingBookings: 12,
    activeGuides: 8,
    monthlyRevenue: 45600,
    customerSatisfaction: 4.8,
    conversionRate: 23.5,
  },
  bookings: [
    {
      id: 1,
      customer: "Ahmed Al-Rashid",
      tour: "AlUla Heritage Tour",
      date: "2024-01-15",
      guide: "Omar Al-Fahad",
      status: "confirmed",
      amount: 850,
      phone: "+966 50 123 4567",
    },
    {
      id: 2,
      customer: "Sarah Johnson",
      tour: "Riyadh City Experience",
      date: "2024-01-16",
      guide: "Fatima Al-Zahra",
      status: "pending",
      amount: 650,
      phone: "+1 555 123 4567",
    },
    {
      id: 3,
      customer: "Mohammed bin Salman",
      tour: "Red Sea Adventure",
      date: "2024-01-17",
      guide: "Hassan Al-Maliki",
      status: "confirmed",
      amount: 1200,
      phone: "+966 55 987 6543",
    },
  ],
  guides: [
    {
      id: 1,
      name: "Omar Al-Fahad",
      email: "omar@saudiexplorer.com",
      phone: "+966 50 111 2222",
      status: "active",
      todayTours: 2,
      rating: 4.9,
      totalTours: 45,
    },
    {
      id: 2,
      name: "Fatima Al-Zahra",
      email: "fatima@saudiexplorer.com",
      phone: "+966 50 333 4444",
      status: "active",
      todayTours: 1,
      rating: 4.7,
      totalTours: 38,
    },
    {
      id: 3,
      name: "Hassan Al-Maliki",
      email: "hassan@saudiexplorer.com",
      phone: "+966 50 555 6666",
      status: "busy",
      todayTours: 3,
      rating: 4.8,
      totalTours: 52,
    },
  ],
  analytics: {
    weeklyBookings: [12, 19, 15, 22, 18, 25, 20],
    popularTours: [
      { name: "AlUla Heritage Tour", bookings: 45, revenue: 38250 },
      { name: "Riyadh City Experience", bookings: 38, revenue: 24700 },
      { name: "Red Sea Adventure", bookings: 32, revenue: 38400 },
      { name: "Desert Safari", bookings: 28, revenue: 21000 },
    ],
  },
}

interface ManagerDashboardProps {
  user: any
  onLogout: () => void
}

export default function ManagerDashboard({ user, onLogout }: ManagerDashboardProps) {
  const [activeTab, setActiveTab] = useState("overview")
  const [isAssignGuideOpen, setIsAssignGuideOpen] = useState(false)
  const [selectedBooking, setSelectedBooking] = useState<any>(null)
  const [selectedGuide, setSelectedGuide] = useState("")

  const handleApproveBooking = (bookingId: number) => {
    console.log("Approving booking:", bookingId)
    // In a real app, this would make an API call
  }

  const handleRejectBooking = (bookingId: number) => {
    console.log("Rejecting booking:", bookingId)
    // In a real app, this would make an API call
  }

  const handleAssignGuide = () => {
    console.log("Assigning guide:", selectedGuide, "to booking:", selectedBooking?.id)
    setIsAssignGuideOpen(false)
    setSelectedBooking(null)
    setSelectedGuide("")
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-white">
      {/* Header */}
      <header className="bg-white border-b border-green-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <Briefcase className="h-8 w-8 text-green-600" />
                <span className="text-xl font-bold text-green-800">Manager Dashboard</span>
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
                  <Badge variant="default" className="text-xs bg-purple-600">
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
                { id: "bookings", name: "Booking Management", icon: Calendar },
                { id: "guides", name: "Guide Management", icon: Users },
                { id: "analytics", name: "Analytics", icon: TrendingUp },
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
              <h1 className="text-3xl font-bold text-gray-900 mb-2">Manager Overview 📊</h1>
              <p className="text-gray-600">Operations management and team coordination.</p>
            </div>

            {/* Manager Stats */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-6">
              <Card className="bg-gradient-to-r from-green-500 to-green-600 text-white">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-green-100 text-sm">Total Bookings</p>
                      <p className="text-3xl font-bold">{MANAGER_DATA.stats.totalBookings}</p>
                    </div>
                    <Calendar className="h-8 w-8 text-green-200" />
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-r from-orange-500 to-orange-600 text-white">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-orange-100 text-sm">Pending</p>
                      <p className="text-3xl font-bold">{MANAGER_DATA.stats.pendingBookings}</p>
                    </div>
                    <Clock className="h-8 w-8 text-orange-200" />
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-r from-blue-500 to-blue-600 text-white">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-blue-100 text-sm">Active Guides</p>
                      <p className="text-3xl font-bold">{MANAGER_DATA.stats.activeGuides}</p>
                    </div>
                    <UserCheck className="h-8 w-8 text-blue-200" />
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-r from-purple-500 to-purple-600 text-white">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-purple-100 text-sm">Revenue</p>
                      <p className="text-3xl font-bold">${MANAGER_DATA.stats.monthlyRevenue.toLocaleString()}</p>
                    </div>
                    <DollarSign className="h-8 w-8 text-purple-200" />
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-r from-yellow-500 to-yellow-600 text-white">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-yellow-100 text-sm">Satisfaction</p>
                      <p className="text-3xl font-bold">{MANAGER_DATA.stats.customerSatisfaction}</p>
                    </div>
                    <Star className="h-8 w-8 text-yellow-200" />
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-r from-teal-500 to-teal-600 text-white">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-teal-100 text-sm">Conversion</p>
                      <p className="text-3xl font-bold">{MANAGER_DATA.stats.conversionRate}%</p>
                    </div>
                    <TrendingUp className="h-8 w-8 text-teal-200" />
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Quick Actions */}
            <Card>
              <CardHeader>
                <CardTitle>Quick Manager Actions</CardTitle>
                <CardDescription>Common management tasks</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  <Button className="h-20 flex-col bg-green-600 hover:bg-green-700">
                    <CheckCircle className="h-6 w-6 mb-2" />
                    <span className="text-sm">Approve Bookings</span>
                  </Button>
                  <Button variant="outline" className="h-20 flex-col">
                    <Users className="h-6 w-6 mb-2" />
                    <span className="text-sm">Assign Guides</span>
                  </Button>
                  <Button variant="outline" className="h-20 flex-col">
                    <BarChart3 className="h-6 w-6 mb-2" />
                    <span className="text-sm">View Reports</span>
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

        {/* Bookings Tab */}
        {activeTab === "bookings" && (
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold">Booking Management</h2>
              <p className="text-gray-600">Manage and approve tour bookings</p>
            </div>

            <Card>
              <CardContent className="p-0">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Customer</TableHead>
                      <TableHead>Tour</TableHead>
                      <TableHead>Date</TableHead>
                      <TableHead>Guide</TableHead>
                      <TableHead>Amount</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {MANAGER_DATA.bookings.map((booking) => (
                      <TableRow key={booking.id}>
                        <TableCell>
                          <div>
                            <p className="font-medium">{booking.customer}</p>
                            <p className="text-sm text-gray-500">{booking.phone}</p>
                          </div>
                        </TableCell>
                        <TableCell>{booking.tour}</TableCell>
                        <TableCell>{booking.date}</TableCell>
                        <TableCell>{booking.guide}</TableCell>
                        <TableCell>${booking.amount}</TableCell>
                        <TableCell>
                          <Badge variant={booking.status === "confirmed" ? "default" : "secondary"}>
                            {booking.status}
                          </Badge>
                        </TableCell>
                        <TableCell>
                          <div className="flex space-x-2">
                            {booking.status === "pending" && (
                              <>
                                <Button
                                  onClick={() => handleApproveBooking(booking.id)}
                                  size="sm"
                                  className="bg-green-600"
                                >
                                  <CheckCircle className="h-4 w-4" />
                                </Button>
                                <Button onClick={() => handleRejectBooking(booking.id)} size="sm" variant="destructive">
                                  <XCircle className="h-4 w-4" />
                                </Button>
                              </>
                            )}
                            <Button
                              onClick={() => {
                                setSelectedBooking(booking)
                                setIsAssignGuideOpen(true)
                              }}
                              size="sm"
                              variant="outline"
                            >
                              <Users className="h-4 w-4" />
                            </Button>
                            <Button size="sm" variant="outline">
                              <Eye className="h-4 w-4" />
                            </Button>
                          </div>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>

            {/* Assign Guide Dialog */}
            <Dialog open={isAssignGuideOpen} onOpenChange={setIsAssignGuideOpen}>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Assign Guide</DialogTitle>
                  <DialogDescription>
                    Assign a guide to {selectedBooking?.customer}'s {selectedBooking?.tour}
                  </DialogDescription>
                </DialogHeader>
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="guide">Select Guide</Label>
                    <Select value={selectedGuide} onValueChange={setSelectedGuide}>
                      <SelectTrigger>
                        <SelectValue placeholder="Choose a guide" />
                      </SelectTrigger>
                      <SelectContent>
                        {MANAGER_DATA.guides.map((guide) => (
                          <SelectItem key={guide.id} value={guide.name}>
                            {guide.name} - {guide.status} ({guide.todayTours} tours today)
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <Button onClick={handleAssignGuide} className="w-full" disabled={!selectedGuide}>
                    Assign Guide
                  </Button>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        )}

        {/* Guides Tab */}
        {activeTab === "guides" && (
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold">Guide Management</h2>
              <p className="text-gray-600">Monitor and manage tour guides</p>
            </div>

            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {MANAGER_DATA.guides.map((guide) => (
                <Card key={guide.id}>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <CardTitle className="text-lg">{guide.name}</CardTitle>
                      <Badge
                        variant={
                          guide.status === "active" ? "default" : guide.status === "busy" ? "secondary" : "outline"
                        }
                      >
                        {guide.status}
                      </Badge>
                    </div>
                    <CardDescription>{guide.email}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex justify-between text-sm">
                        <span>Today's Tours:</span>
                        <span className="font-semibold">{guide.todayTours}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>Total Tours:</span>
                        <span className="font-semibold">{guide.totalTours}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span>Rating:</span>
                        <div className="flex items-center gap-1">
                          <Star className="h-3 w-3 text-yellow-400 fill-current" />
                          <span className="font-semibold">{guide.rating}</span>
                        </div>
                      </div>
                      <div className="flex space-x-2 pt-2">
                        <Button size="sm" variant="outline" className="flex-1">
                          <Eye className="h-4 w-4 mr-1" />
                          View
                        </Button>
                        <Button size="sm" variant="outline" className="flex-1">
                          <Edit className="h-4 w-4 mr-1" />
                          Edit
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* Analytics Tab */}
        {activeTab === "analytics" && (
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold">Analytics & Reports</h2>
              <p className="text-gray-600">Business insights and performance metrics</p>
            </div>

            {/* Popular Tours Performance */}
            <Card>
              <CardHeader>
                <CardTitle>Popular Tours Performance</CardTitle>
                <CardDescription>Revenue and booking statistics by tour</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                  {MANAGER_DATA.analytics.popularTours.map((tour, index) => (
                    <div key={index} className="p-4 bg-gradient-to-br from-green-50 to-green-100 rounded-lg">
                      <div className="flex items-center gap-2 mb-2">
                        <MapPin className="h-4 w-4 text-green-600" />
                        <h4 className="font-semibold text-sm">{tour.name}</h4>
                      </div>
                      <div className="space-y-1">
                        <div className="flex justify-between text-xs">
                          <span>Bookings:</span>
                          <span className="font-semibold">{tour.bookings}</span>
                        </div>
                        <div className="flex justify-between text-xs">
                          <span>Revenue:</span>
                          <span className="font-semibold">${tour.revenue.toLocaleString()}</span>
                        </div>
                        <div className="flex justify-between text-xs">
                          <span>Avg per booking:</span>
                          <span className="font-semibold">${Math.round(tour.revenue / tour.bookings)}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Weekly Bookings Chart Placeholder */}
            <Card>
              <CardHeader>
                <CardTitle>Weekly Booking Trends</CardTitle>
                <CardDescription>Booking patterns over the last 7 days</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="h-64 flex items-center justify-center bg-gray-50 rounded-lg">
                  <div className="text-center">
                    <BarChart3 className="h-12 w-12 text-gray-400 mx-auto mb-2" />
                    <p className="text-gray-500">Chart visualization would go here</p>
                    <p className="text-sm text-gray-400">
                      Weekly data: {MANAGER_DATA.analytics.weeklyBookings.join(", ")} bookings
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </main>
    </div>
  )
}

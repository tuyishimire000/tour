"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Users,
  MapPin,
  Calendar,
  DollarSign,
  TrendingUp,
  Star,
  Clock,
  Camera,
  Mountain,
  Palmtree,
  LogOut,
  Bell,
  Settings,
  BarChart3,
  UserCheck,
  Globe,
  Activity,
} from "lucide-react"

// Dummy dashboard data
const DASHBOARD_DATA = {
  stats: {
    totalBookings: 156,
    activeGuides: 12,
    totalRevenue: 45600,
    avgRating: 4.8,
    monthlyGrowth: 23.5,
  },
  recentBookings: [
    {
      id: 1,
      customer: "Ahmed Al-Rashid",
      tour: "AlUla Heritage Tour",
      date: "2024-01-15",
      status: "confirmed",
      amount: 850,
    },
    {
      id: 2,
      customer: "Sarah Johnson",
      tour: "Riyadh City Experience",
      date: "2024-01-16",
      status: "pending",
      amount: 650,
    },
    {
      id: 3,
      customer: "Mohammed bin Salman",
      tour: "Red Sea Adventure",
      date: "2024-01-17",
      status: "confirmed",
      amount: 1200,
    },
    { id: 4, customer: "Emily Chen", tour: "Desert Safari", date: "2024-01-18", status: "completed", amount: 750 },
  ],
  popularTours: [
    { name: "AlUla Heritage Tour", bookings: 45, revenue: 38250, rating: 4.9 },
    { name: "Riyadh City Experience", bookings: 38, revenue: 24700, rating: 4.7 },
    { name: "Red Sea Adventure", bookings: 32, revenue: 38400, rating: 4.8 },
    { name: "Desert Safari", bookings: 28, revenue: 21000, rating: 4.6 },
  ],
  upcomingTours: [
    { tour: "AlUla Heritage Tour", date: "Today, 9:00 AM", guide: "Omar Al-Fahad", participants: 8 },
    { tour: "Riyadh City Tour", date: "Tomorrow, 10:00 AM", guide: "Fatima Al-Zahra", participants: 12 },
    { tour: "Jeddah Historic Walk", date: "Jan 20, 2:00 PM", guide: "Hassan Al-Maliki", participants: 6 },
  ],
}

export default function DashboardPage() {
  const [user, setUser] = useState<any>(null)
  const router = useRouter()

  useEffect(() => {
    const userData = localStorage.getItem("user")
    if (!userData) {
      router.push("/login")
    } else {
      setUser(JSON.parse(userData))
    }
  }, [router])

  const handleLogout = () => {
    localStorage.removeItem("user")
    router.push("/login")
  }

  if (!user) {
    return <div>Loading...</div>
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-white">
      {/* Header */}
      <header className="bg-white border-b border-green-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <Mountain className="h-8 w-8 text-green-600" />
                <span className="text-xl font-bold text-green-800">Saudi Explorer Dashboard</span>
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
                  <Badge variant="outline" className="text-xs">
                    {user.role}
                  </Badge>
                </div>
                <Button onClick={handleLogout} variant="outline" size="sm">
                  <LogOut className="h-4 w-4 mr-2" />
                  Logout
                </Button>
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900 mb-2">Welcome back, {user.name}! 👋</h1>
          <p className="text-gray-600">Here's what's happening with your tours today.</p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 mb-8">
          <Card className="bg-gradient-to-r from-green-500 to-green-600 text-white">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-green-100 text-sm">Total Bookings</p>
                  <p className="text-3xl font-bold">{DASHBOARD_DATA.stats.totalBookings}</p>
                </div>
                <Calendar className="h-8 w-8 text-green-200" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-r from-blue-500 to-blue-600 text-white">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-blue-100 text-sm">Active Guides</p>
                  <p className="text-3xl font-bold">{DASHBOARD_DATA.stats.activeGuides}</p>
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
                  <p className="text-3xl font-bold">${DASHBOARD_DATA.stats.totalRevenue.toLocaleString()}</p>
                </div>
                <DollarSign className="h-8 w-8 text-purple-200" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-r from-orange-500 to-orange-600 text-white">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-orange-100 text-sm">Avg Rating</p>
                  <p className="text-3xl font-bold">{DASHBOARD_DATA.stats.avgRating}</p>
                </div>
                <Star className="h-8 w-8 text-orange-200" />
              </div>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-r from-teal-500 to-teal-600 text-white">
            <CardContent className="p-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-teal-100 text-sm">Growth</p>
                  <p className="text-3xl font-bold">+{DASHBOARD_DATA.stats.monthlyGrowth}%</p>
                </div>
                <TrendingUp className="h-8 w-8 text-teal-200" />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Recent Bookings */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <BarChart3 className="h-5 w-5 text-green-600" />
                  Recent Bookings
                </CardTitle>
                <CardDescription>Latest tour bookings and their status</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {DASHBOARD_DATA.recentBookings.map((booking) => (
                    <div key={booking.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                      <div className="flex-1">
                        <h4 className="font-semibold">{booking.customer}</h4>
                        <p className="text-sm text-gray-600">{booking.tour}</p>
                        <p className="text-xs text-gray-500">{booking.date}</p>
                      </div>
                      <div className="text-right">
                        <p className="font-semibold">${booking.amount}</p>
                        <Badge
                          variant={
                            booking.status === "confirmed"
                              ? "default"
                              : booking.status === "pending"
                                ? "secondary"
                                : "outline"
                          }
                          className="text-xs"
                        >
                          {booking.status}
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Upcoming Tours */}
          <div>
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Clock className="h-5 w-5 text-green-600" />
                  Upcoming Tours
                </CardTitle>
                <CardDescription>Tours scheduled for the next few days</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {DASHBOARD_DATA.upcomingTours.map((tour, index) => (
                    <div key={index} className="p-3 border rounded-lg">
                      <h4 className="font-semibold text-sm">{tour.tour}</h4>
                      <p className="text-xs text-gray-600 mb-1">{tour.date}</p>
                      <div className="flex justify-between items-center">
                        <p className="text-xs text-gray-500">Guide: {tour.guide}</p>
                        <Badge variant="outline" className="text-xs">
                          {tour.participants} people
                        </Badge>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Popular Tours */}
        <div className="mt-8">
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Activity className="h-5 w-5 text-green-600" />
                Popular Tours Performance
              </CardTitle>
              <CardDescription>Top performing tours this month</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {DASHBOARD_DATA.popularTours.map((tour, index) => (
                  <div key={index} className="p-4 bg-gradient-to-br from-green-50 to-green-100 rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                      {index === 0 && <Mountain className="h-4 w-4 text-green-600" />}
                      {index === 1 && <Camera className="h-4 w-4 text-green-600" />}
                      {index === 2 && <Palmtree className="h-4 w-4 text-green-600" />}
                      {index === 3 && <Globe className="h-4 w-4 text-green-600" />}
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
                        <span>Rating:</span>
                        <div className="flex items-center gap-1">
                          <Star className="h-3 w-3 text-yellow-400 fill-current" />
                          <span className="font-semibold">{tour.rating}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Quick Actions */}
        <div className="mt-8">
          <Card>
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
              <CardDescription>Common tasks and shortcuts</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <Button className="h-20 flex-col bg-green-600 hover:bg-green-700">
                  <Users className="h-6 w-6 mb-2" />
                  <span className="text-sm">New Booking</span>
                </Button>
                <Button variant="outline" className="h-20 flex-col">
                  <MapPin className="h-6 w-6 mb-2" />
                  <span className="text-sm">Add Tour</span>
                </Button>
                <Button variant="outline" className="h-20 flex-col">
                  <Calendar className="h-6 w-6 mb-2" />
                  <span className="text-sm">Schedule</span>
                </Button>
                <Button variant="outline" className="h-20 flex-col">
                  <BarChart3 className="h-6 w-6 mb-2" />
                  <span className="text-sm">Reports</span>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}

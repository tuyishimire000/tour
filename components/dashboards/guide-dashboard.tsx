"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import {
  Calendar,
  Clock,
  Users,
  Star,
  MapPin,
  Phone,
  MessageSquare,
  LogOut,
  Bell,
  Settings,
  CheckCircle,
  Navigation,
  Route,
} from "lucide-react"
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

// Guide-specific data
const GUIDE_DATA = {
  stats: {
    todayTours: 2,
    weeklyTours: 8,
    totalCustomers: 156,
    avgRating: 4.8,
    earnings: 3200,
  },
  todaySchedule: [
    {
      id: 1,
      tour: "AlUla Heritage Tour",
      time: "09:00 AM",
      duration: "8 hours",
      customers: 8,
      status: "upcoming",
      meetingPoint: "AlUla Visitor Center",
    },
    {
      id: 2,
      tour: "Desert Safari",
      time: "02:00 PM",
      duration: "4 hours",
      customers: 6,
      status: "upcoming",
      meetingPoint: "Desert Camp Base",
    },
  ],
  upcomingTours: [
    {
      id: 1,
      tour: "Riyadh City Experience",
      date: "Tomorrow",
      time: "10:00 AM",
      customers: 12,
      status: "confirmed",
    },
    {
      id: 2,
      tour: "Red Sea Adventure",
      date: "Jan 20",
      time: "08:00 AM",
      customers: 15,
      status: "confirmed",
    },
    {
      id: 3,
      tour: "AlUla Heritage Tour",
      date: "Jan 22",
      time: "09:00 AM",
      customers: 10,
      status: "pending",
    },
  ],
  customers: [
    {
      id: 1,
      name: "Ahmed Al-Rashid",
      phone: "+966 50 123 4567",
      tour: "AlUla Heritage Tour",
      time: "09:00 AM",
      specialRequests: "Wheelchair accessible",
    },
    {
      id: 2,
      name: "Sarah Johnson",
      phone: "+1 555 123 4567",
      tour: "AlUla Heritage Tour",
      time: "09:00 AM",
      specialRequests: "Vegetarian lunch",
    },
  ],
  recentReviews: [
    {
      id: 1,
      customer: "Mohammed bin Salman",
      tour: "Desert Safari",
      rating: 5,
      comment: "Amazing experience! Omar was very knowledgeable and friendly.",
      date: "2024-01-14",
    },
    {
      id: 2,
      customer: "Emily Chen",
      tour: "AlUla Heritage Tour",
      rating: 5,
      comment: "Best tour guide ever! Highly recommend.",
      date: "2024-01-13",
    },
  ],
}

interface GuideDashboardProps {
  user: any
  onLogout: () => void
}

export default function GuideDashboard({ user, onLogout }: GuideDashboardProps) {
  const [activeTab, setActiveTab] = useState("today")
  const [isReportOpen, setIsReportOpen] = useState(false)
  const [tourReport, setTourReport] = useState({ tourId: "", notes: "", issues: "", photos: "" })

  const handleStartTour = (tourId: number) => {
    console.log("Starting tour:", tourId)
    // In a real app, this would update the tour status
  }

  const handleCompleteTour = (tourId: number) => {
    console.log("Completing tour:", tourId)
    setIsReportOpen(true)
  }

  const handleSubmitReport = () => {
    console.log("Submitting tour report:", tourReport)
    setIsReportOpen(false)
    setTourReport({ tourId: "", notes: "", issues: "", photos: "" })
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-white">
      {/* Header */}
      <header className="bg-white border-b border-green-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <Navigation className="h-8 w-8 text-green-600" />
                <span className="text-xl font-bold text-green-800">Guide Dashboard</span>
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
                  <Badge variant="default" className="text-xs bg-blue-600">
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
                { id: "today", name: "Today's Tours", icon: Calendar },
                { id: "schedule", name: "Schedule", icon: Clock },
                { id: "customers", name: "Customers", icon: Users },
                { id: "reviews", name: "Reviews", icon: Star },
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

        {/* Today's Tours Tab */}
        {activeTab === "today" && (
          <div className="space-y-8">
            <div>
              <h1 className="text-3xl font-bold text-gray-900 mb-2">Welcome back, {user.name}! 🗺️</h1>
              <p className="text-gray-600">Here are your tours for today.</p>
            </div>

            {/* Guide Stats */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
              <Card className="bg-gradient-to-r from-green-500 to-green-600 text-white">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-green-100 text-sm">Today's Tours</p>
                      <p className="text-3xl font-bold">{GUIDE_DATA.stats.todayTours}</p>
                    </div>
                    <Calendar className="h-8 w-8 text-green-200" />
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-r from-blue-500 to-blue-600 text-white">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-blue-100 text-sm">This Week</p>
                      <p className="text-3xl font-bold">{GUIDE_DATA.stats.weeklyTours}</p>
                    </div>
                    <Clock className="h-8 w-8 text-blue-200" />
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-r from-purple-500 to-purple-600 text-white">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-purple-100 text-sm">Total Customers</p>
                      <p className="text-3xl font-bold">{GUIDE_DATA.stats.totalCustomers}</p>
                    </div>
                    <Users className="h-8 w-8 text-purple-200" />
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-r from-orange-500 to-orange-600 text-white">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-orange-100 text-sm">Avg Rating</p>
                      <p className="text-3xl font-bold">{GUIDE_DATA.stats.avgRating}</p>
                    </div>
                    <Star className="h-8 w-8 text-orange-200" />
                  </div>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-r from-teal-500 to-teal-600 text-white">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-teal-100 text-sm">Earnings</p>
                      <p className="text-3xl font-bold">${GUIDE_DATA.stats.earnings}</p>
                    </div>
                    <Route className="h-8 w-8 text-teal-200" />
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Today's Schedule */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Calendar className="h-5 w-5 text-green-600" />
                  Today's Schedule
                </CardTitle>
                <CardDescription>Your tours scheduled for today</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {GUIDE_DATA.todaySchedule.map((tour) => (
                    <div key={tour.id} className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                      <div className="flex-1">
                        <h4 className="font-semibold">{tour.tour}</h4>
                        <div className="flex items-center space-x-4 text-sm text-gray-600 mt-1">
                          <span className="flex items-center gap-1">
                            <Clock className="h-4 w-4" />
                            {tour.time}
                          </span>
                          <span className="flex items-center gap-1">
                            <Users className="h-4 w-4" />
                            {tour.customers} people
                          </span>
                          <span className="flex items-center gap-1">
                            <MapPin className="h-4 w-4" />
                            {tour.meetingPoint}
                          </span>
                        </div>
                      </div>
                      <div className="flex space-x-2">
                        <Button onClick={() => handleStartTour(tour.id)} size="sm" className="bg-green-600">
                          <CheckCircle className="h-4 w-4 mr-1" />
                          Start Tour
                        </Button>
                        <Button onClick={() => handleCompleteTour(tour.id)} size="sm" variant="outline">
                          Complete
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Tour Report Dialog */}
            <Dialog open={isReportOpen} onOpenChange={setIsReportOpen}>
              <DialogContent>
                <DialogHeader>
                  <DialogTitle>Complete Tour Report</DialogTitle>
                  <DialogDescription>Please provide details about the completed tour.</DialogDescription>
                </DialogHeader>
                <div className="space-y-4">
                  <div>
                    <Label htmlFor="notes">Tour Notes</Label>
                    <Textarea
                      id="notes"
                      value={tourReport.notes}
                      onChange={(e) => setTourReport({ ...tourReport, notes: e.target.value })}
                      placeholder="How did the tour go? Any highlights?"
                    />
                  </div>
                  <div>
                    <Label htmlFor="issues">Issues or Concerns</Label>
                    <Textarea
                      id="issues"
                      value={tourReport.issues}
                      onChange={(e) => setTourReport({ ...tourReport, issues: e.target.value })}
                      placeholder="Any issues that occurred during the tour?"
                    />
                  </div>
                  <div>
                    <Label htmlFor="photos">Photo URLs</Label>
                    <Input
                      id="photos"
                      value={tourReport.photos}
                      onChange={(e) => setTourReport({ ...tourReport, photos: e.target.value })}
                      placeholder="Upload photos from the tour"
                    />
                  </div>
                  <Button onClick={handleSubmitReport} className="w-full">
                    Submit Report
                  </Button>
                </div>
              </DialogContent>
            </Dialog>
          </div>
        )}

        {/* Schedule Tab */}
        {activeTab === "schedule" && (
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold">Upcoming Schedule</h2>
              <p className="text-gray-600">Your upcoming tours and bookings</p>
            </div>

            <Card>
              <CardContent className="p-0">
                <Table>
                  <TableHeader>
                    <TableRow>
                      <TableHead>Tour</TableHead>
                      <TableHead>Date</TableHead>
                      <TableHead>Time</TableHead>
                      <TableHead>Customers</TableHead>
                      <TableHead>Status</TableHead>
                      <TableHead>Actions</TableHead>
                    </TableRow>
                  </TableHeader>
                  <TableBody>
                    {GUIDE_DATA.upcomingTours.map((tour) => (
                      <TableRow key={tour.id}>
                        <TableCell className="font-medium">{tour.tour}</TableCell>
                        <TableCell>{tour.date}</TableCell>
                        <TableCell>{tour.time}</TableCell>
                        <TableCell>{tour.customers}</TableCell>
                        <TableCell>
                          <Badge variant={tour.status === "confirmed" ? "default" : "secondary"}>{tour.status}</Badge>
                        </TableCell>
                        <TableCell>
                          <Button size="sm" variant="outline">
                            View Details
                          </Button>
                        </TableCell>
                      </TableRow>
                    ))}
                  </TableBody>
                </Table>
              </CardContent>
            </Card>
          </div>
        )}

        {/* Customers Tab */}
        {activeTab === "customers" && (
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold">Today's Customers</h2>
              <p className="text-gray-600">Customer information for today's tours</p>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              {GUIDE_DATA.customers.map((customer) => (
                <Card key={customer.id}>
                  <CardHeader>
                    <CardTitle className="flex items-center justify-between">
                      <span>{customer.name}</span>
                      <Badge variant="outline">{customer.tour}</Badge>
                    </CardTitle>
                    <CardDescription>{customer.time}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex items-center gap-2">
                        <Phone className="h-4 w-4 text-gray-500" />
                        <span className="text-sm">{customer.phone}</span>
                        <Button size="sm" variant="outline" className="ml-auto">
                          <Phone className="h-4 w-4" />
                        </Button>
                      </div>
                      <div className="flex items-center gap-2">
                        <MessageSquare className="h-4 w-4 text-gray-500" />
                        <span className="text-sm">Special Requests: {customer.specialRequests}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {/* Reviews Tab */}
        {activeTab === "reviews" && (
          <div className="space-y-6">
            <div>
              <h2 className="text-2xl font-bold">Recent Reviews</h2>
              <p className="text-gray-600">Customer feedback and ratings</p>
            </div>

            <div className="space-y-4">
              {GUIDE_DATA.recentReviews.map((review) => (
                <Card key={review.id}>
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <div>
                        <CardTitle className="text-lg">{review.customer}</CardTitle>
                        <CardDescription>
                          {review.tour} • {review.date}
                        </CardDescription>
                      </div>
                      <div className="flex items-center gap-1">
                        {[...Array(review.rating)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                        ))}
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700">"{review.comment}"</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}
      </main>
    </div>
  )
}

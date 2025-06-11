"use client"

import { useEffect, useState } from "react"
import { useRouter } from "next/navigation"
import AdminDashboard from "@/components/dashboards/admin-dashboard"
import GuideDashboard from "@/components/dashboards/guide-dashboard"
import ManagerDashboard from "@/components/dashboards/manager-dashboard"

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
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 to-white flex items-center justify-center">
        <div className="text-center">
          <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-600 mx-auto mb-4"></div>
          <p className="text-gray-600">Loading dashboard...</p>
        </div>
      </div>
    )
  }

  // Render different dashboards based on user role
  switch (user.role) {
    case "admin":
      return <AdminDashboard user={user} onLogout={handleLogout} />
    case "guide":
      return <GuideDashboard user={user} onLogout={handleLogout} />
    case "manager":
      return <ManagerDashboard user={user} onLogout={handleLogout} />
    default:
      return <AdminDashboard user={user} onLogout={handleLogout} />
  }
}

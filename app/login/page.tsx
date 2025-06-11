"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { Eye, EyeOff, Compass, Lock, Mail, AlertCircle } from "lucide-react"
import Link from "next/link"

// Dummy user data
const DUMMY_USERS = [
  { email: "admin@saudiexplorer.com", password: "admin123", role: "admin", name: "Admin User" },
  { email: "guide@saudiexplorer.com", password: "guide123", role: "guide", name: "Tour Guide" },
  { email: "manager@saudiexplorer.com", password: "manager123", role: "manager", name: "Tour Manager" },
]

export default function LoginPage() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [showPassword, setShowPassword] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")
  const router = useRouter()

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setError("")

    // Simulate API call delay
    await new Promise((resolve) => setTimeout(resolve, 1000))

    // Check dummy credentials
    const user = DUMMY_USERS.find((u) => u.email === email && u.password === password)

    if (user) {
      // Store user data in localStorage (in real app, use proper auth)
      localStorage.setItem("user", JSON.stringify(user))
      router.push("/dashboard")
    } else {
      setError("Invalid email or password")
    }

    setIsLoading(false)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-white to-green-100 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        {/* Logo and Header */}
        <div className="text-center mb-8">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Compass className="h-10 w-10 text-green-600" />
            <span className="text-3xl font-bold text-green-800">Saudi Explorer</span>
          </div>
          <p className="text-gray-600">Welcome back to your dashboard</p>
        </div>

        {/* Login Card */}
        <Card className="shadow-xl border-0 bg-white/80 backdrop-blur">
          <CardHeader className="space-y-1 pb-6">
            <CardTitle className="text-2xl font-bold text-center">Sign In</CardTitle>
            <CardDescription className="text-center">Enter your credentials to access your dashboard</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleLogin} className="space-y-4">
              {error && (
                <div className="flex items-center space-x-2 text-red-600 bg-red-50 p-3 rounded-lg">
                  <AlertCircle className="h-4 w-4" />
                  <span className="text-sm">{error}</span>
                </div>
              )}

              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="pl-10"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="password">Password</Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="pl-10 pr-10"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-3 text-gray-400 hover:text-gray-600"
                  >
                    {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </button>
                </div>
              </div>

              <Button type="submit" className="w-full bg-green-600 hover:bg-green-700" size="lg" disabled={isLoading}>
                {isLoading ? "Signing in..." : "Sign In"}
              </Button>
            </form>

            {/* Demo Credentials */}
            <div className="mt-6 p-4 bg-green-50 rounded-lg">
              <h4 className="font-semibold text-green-800 mb-2">Demo Credentials:</h4>
              <div className="space-y-2 text-sm">
                {DUMMY_USERS.map((user, index) => (
                  <div key={index} className="flex justify-between items-center">
                    <div>
                      <Badge variant="outline" className="text-xs mr-2">
                        {user.role}
                      </Badge>
                      <span className="text-gray-600">{user.email}</span>
                    </div>
                    <span className="text-gray-500 font-mono">{user.password}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 text-center">
              <Link href="/" className="text-green-600 hover:text-green-700 text-sm">
                ← Back to Website
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutGrid,
  BarChart3,
  Trophy,
  Upload,
  MousePointerClick,
  Users,
  Clock,
  Settings,
  Menu,
  X
} from "lucide-react";

const navigation = [
  { name: "Overview", href: "/dashboard", icon: LayoutGrid },
  { name: "Analytics", href: "/dashboard/analytics", icon: BarChart3 },
  { name: "Campaigns", href: "/dashboard/campaigns", icon: Trophy },
  { name: "Submissions", href: "/dashboard/submissions", icon: Upload },
  { name: "Recipes", href: "/dashboard/recipes", icon: MousePointerClick },
  { name: "Users", href: "/dashboard/users", icon: Users },
  { name: "Activity", href: "/dashboard/activity", icon: Clock },
  { name: "Settings", href: "/dashboard/settings", icon: Settings },
];

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const pathname = usePathname();

  return (
    <div className="min-h-screen bg-white flex">
      {/* Mobile sidebar backdrop */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-black/20 z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Sidebar */}
      <div className={`${
        sidebarOpen ? "translate-x-0" : "-translate-x-full"
      } fixed lg:relative lg:translate-x-0 z-50 lg:z-auto w-64 h-full lg:h-auto bg-gray-50 border-r border-gray-200 transition-transform duration-200 ease-in-out`}>
        <div className="flex flex-col h-screen">
          <div className="p-6 border-b border-gray-200">
            <div className="flex items-center justify-between">
              <Link href="/" className="text-xl font-semibold text-gray-900">
                Royco
              </Link>
              <button
                onClick={() => setSidebarOpen(false)}
                className="lg:hidden p-2 hover:bg-gray-100 rounded-lg"
              >
                <X className="h-5 w-5 text-gray-600" />
              </button>
            </div>
          </div>
          
          <nav className="flex-1 p-4">
            <ul className="space-y-1">
              {navigation.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <li key={item.name}>
                    <Link
                      href={item.href}
                      onClick={() => setSidebarOpen(false)}
                      className={`flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                        isActive
                          ? "bg-gray-900 text-white"
                          : "text-gray-600 hover:bg-gray-100 hover:text-gray-900"
                      }`}
                    >
                      <item.icon className="h-5 w-5" />
                      {item.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          {/* User section */}
          <div className="p-4 border-t border-gray-200">
            <div className="flex items-center gap-3 p-3">
              <div className="w-10 h-10 rounded-full bg-gray-900 flex items-center justify-center">
                <span className="text-white text-sm font-medium">A</span>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-900">Admin</p>
                <p className="text-xs text-gray-500">admin@royco.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="bg-white border-b border-gray-200">
          <div className="flex items-center justify-between px-6 py-4">
            <div className="flex items-center gap-4">
              <button
                onClick={() => setSidebarOpen(true)}
                className="lg:hidden p-2 hover:bg-gray-100 rounded-lg"
              >
                <Menu className="h-5 w-5 text-gray-600" />
              </button>
              <h1 className="text-lg font-semibold text-gray-900">
                {navigation.find(item => item.href === pathname)?.name || "Dashboard"}
              </h1>
            </div>
          </div>
        </header>

        {/* Page content */}
        <main className="flex-1 p-6 bg-white">
          {children}
        </main>
      </div>
    </div>
  );
}

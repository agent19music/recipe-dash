"use client";

import { motion } from "framer-motion";
import {
  Download,
  Users,
  Clock,
  MousePointerClick,
  ChevronRight,
  ArrowUpRight,
  ArrowDownRight
} from "lucide-react";
import Link from "next/link";

const metrics = [
  {
    label: "Total Downloads",
    value: "2.4M",
    change: "+12.5%",
    trend: "up",
    icon: Download
  },
  {
    label: "Active Users",
    value: "842K", 
    change: "+23.1%",
    trend: "up",
    icon: Users
  },
  {
    label: "Avg. Session",
    value: "12m 34s",
    change: "+8.7%",
    trend: "up",
    icon: Clock
  },
  {
    label: "Recipe Clicks",
    value: "1.8M",
    change: "+31.2%",
    trend: "up",
    icon: MousePointerClick
  }
];

const campaigns = [
  { name: "Air Fryer Week", participants: 125432, submissions: 8921, status: "Active" },
  { name: "Pilau Madness", participants: 89234, submissions: 5643, status: "Active" },
  { name: "Nyama Choma Fest", participants: 45678, submissions: 0, status: "Upcoming" }
];

const topRecipes = [
  { name: "Spicy Pilau Rice", clicks: 45234, rating: 4.8 },
  { name: "Air Fryer Wings", clicks: 38921, rating: 4.9 },
  { name: "Ugali & Sukuma", clicks: 34567, rating: 4.7 },
  { name: "Coconut Curry", clicks: 29345, rating: 4.9 },
  { name: "Chapati Rolls", clicks: 27890, rating: 4.6 }
];

const demographics = [
  { country: "Kenya", users: 892345, percentage: 37 },
  { country: "Tanzania", users: 567890, percentage: 24 },
  { country: "Uganda", users: 345678, percentage: 14 },
  { country: "Nigeria", users: 234567, percentage: 10 },
  { country: "South Africa", users: 198765, percentage: 8 },
  { country: "Others", users: 165432, percentage: 7 }
];

export default function DashboardPage() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Overview</h1>
        <p className="mt-1 text-sm text-gray-500">
          Monitor your recipe platform&apos;s performance
        </p>
      </div>

      {/* Metrics Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {metrics.map((metric, index) => (
          <motion.div
            key={metric.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
            className="bg-white p-6 rounded-xl border border-gray-200"
          >
            <div className="flex items-center justify-between mb-4">
              <metric.icon className="h-5 w-5 text-gray-400" />
              <div className={`flex items-center gap-1 text-sm font-medium ${
                metric.trend === "up" ? "text-green-600" : "text-red-600"
              }`}>
                {metric.trend === "up" ? (
                  <ArrowUpRight className="h-4 w-4" />
                ) : (
                  <ArrowDownRight className="h-4 w-4" />
                )}
                {metric.change}
              </div>
            </div>
            <div className="text-2xl font-bold text-gray-900">
              {metric.value}
            </div>
            <div className="text-sm text-gray-500 mt-1">
              {metric.label}
            </div>
          </motion.div>
        ))}
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Active Campaigns */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-semibold text-gray-900">
                Active Campaigns
              </h2>
              <Link 
                href="/dashboard/campaigns"
                className="text-sm text-gray-600 hover:text-gray-900 flex items-center gap-1"
              >
                View all
                <ChevronRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="space-y-4">
              {campaigns.map((campaign) => (
                <div
                  key={campaign.name}
                  className="flex items-center justify-between p-4 rounded-lg bg-gray-50"
                >
                  <div>
                    <h3 className="font-medium text-gray-900">
                      {campaign.name}
                    </h3>
                    <div className="flex items-center gap-4 mt-1">
                      <span className="text-sm text-gray-500">
                        {campaign.participants.toLocaleString()} participants
                      </span>
                      <span className={`text-xs px-2 py-1 rounded-md ${
                        campaign.status === "Active" 
                          ? "bg-green-100 text-green-700"
                          : "bg-gray-100 text-gray-600"
                      }`}>
                        {campaign.status}
                      </span>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-gray-900">
                      {campaign.submissions.toLocaleString()}
                    </div>
                    <div className="text-xs text-gray-500">
                      submissions
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Top Recipes */}
        <div>
          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-lg font-semibold text-gray-900">
                Top Recipes
              </h2>
              <Link 
                href="/dashboard/recipes"
                className="text-sm text-gray-600 hover:text-gray-900 flex items-center gap-1"
              >
                View all
                <ChevronRight className="h-4 w-4" />
              </Link>
            </div>

            <div className="space-y-3">
              {topRecipes.map((recipe, index) => (
                <div
                  key={recipe.name}
                  className="flex items-center justify-between"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-sm font-medium text-gray-600">
                      {index + 1}
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-900">
                        {recipe.name}
                      </p>
                      <p className="text-xs text-gray-500">
                        {(recipe.clicks / 1000).toFixed(1)}K clicks
                      </p>
                    </div>
                  </div>
                  <div className="text-sm text-gray-500">
                    ★ {recipe.rating}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* User Demographics */}
      <div className="bg-white rounded-xl border border-gray-200 p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-lg font-semibold text-gray-900">
            User Demographics
          </h2>
          <Link 
            href="/dashboard/users"
            className="text-sm text-gray-600 hover:text-gray-900 flex items-center gap-1"
          >
            View details
            <ChevronRight className="h-4 w-4" />
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
          {demographics.map((country) => (
            <div key={country.country} className="text-center">
              <div className="text-2xl font-bold text-gray-900">
                {country.percentage}%
              </div>
              <div className="text-sm font-medium text-gray-900 mt-1">
                {country.country}
              </div>
              <div className="text-xs text-gray-500">
                {(country.users / 1000).toFixed(0)}K users
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Activity Graph Placeholder */}
      <div className="bg-white rounded-xl border border-gray-200 p-6">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-lg font-semibold text-gray-900">
            Activity Timeline
          </h2>
          <div className="flex items-center gap-2">
            <button className="px-3 py-1 text-sm bg-gray-900 text-white rounded-lg">
              Week
            </button>
            <button className="px-3 py-1 text-sm text-gray-600 hover:bg-gray-100 rounded-lg">
              Month
            </button>
            <button className="px-3 py-1 text-sm text-gray-600 hover:bg-gray-100 rounded-lg">
              Year
            </button>
          </div>
        </div>
        
        <div className="h-64 flex items-center justify-center bg-gray-50 rounded-lg">
          <p className="text-gray-400">Activity chart visualization</p>
        </div>
      </div>
    </div>
  );
}

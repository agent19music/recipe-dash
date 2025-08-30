"use client";

import { motion } from "framer-motion";
import {
  Users,
  MapPin,
  Smartphone,
  Globe,
  TrendingUp,
  UserCheck,
  UserPlus
} from "lucide-react";

const userStats = [
  { label: "Total Users", value: "2.4M", change: "+23.1%", icon: Users },
  { label: "Active Users", value: "842K", change: "+18.5%", icon: UserCheck },
  { label: "New Users", value: "156K", change: "+31.2%", icon: UserPlus },
  { label: "Retention Rate", value: "68%", change: "+5.2%", icon: TrendingUp }
];

const demographics = [
  { country: "Kenya", users: 892345, percentage: 37, growth: "+24%" },
  { country: "Tanzania", users: 567890, percentage: 24, growth: "+18%" },
  { country: "Uganda", users: 345678, percentage: 14, growth: "+15%" },
  { country: "Nigeria", users: 234567, percentage: 10, growth: "+21%" },
  { country: "South Africa", users: 198765, percentage: 8, growth: "+12%" },
  { country: "Ethiopia", users: 98765, percentage: 4, growth: "+28%" },
  { country: "Rwanda", users: 65432, percentage: 3, growth: "+35%" }
];

const ageGroups = [
  { range: "18-24", percentage: 28, users: 672000 },
  { range: "25-34", percentage: 42, users: 1008000 },
  { range: "35-44", percentage: 18, users: 432000 },
  { range: "45-54", percentage: 8, users: 192000 },
  { range: "55+", percentage: 4, users: 96000 }
];

const devices = [
  { type: "Android", percentage: 58, color: "bg-green-500" },
  { type: "iOS", percentage: 32, color: "bg-gray-900" },
  { type: "Web", percentage: 8, color: "bg-blue-500" },
  { type: "Other", percentage: 2, color: "bg-gray-400" }
];

export default function UsersPage() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900">User Demographics</h1>
        <p className="mt-1 text-sm text-gray-500">
          Understand your user base and demographics
        </p>
      </div>

      {/* Key Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {userStats.map((stat, index) => (
          <motion.div
            key={stat.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
            className="bg-white p-6 rounded-xl border border-gray-200"
          >
            <div className="flex items-center justify-between mb-2">
              <stat.icon className="w-5 h-5 text-gray-400" />
              <span className="text-sm text-green-600 font-medium">{stat.change}</span>
            </div>
            <div className="text-2xl font-bold text-gray-900">{stat.value}</div>
            <div className="text-sm text-gray-500">{stat.label}</div>
          </motion.div>
        ))}
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Geographic Distribution */}
        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-gray-900">
              Geographic Distribution
            </h2>
            <Globe className="w-5 h-5 text-gray-400" />
          </div>
          <div className="space-y-3">
            {demographics.map((country, index) => (
              <motion.div
                key={country.country}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.05 }}
                className="flex items-center justify-between"
              >
                <div className="flex items-center gap-3">
                  <MapPin className="w-4 h-4 text-gray-400" />
                  <div>
                    <div className="text-sm font-medium text-gray-900">
                      {country.country}
                    </div>
                    <div className="text-xs text-gray-500">
                      {(country.users / 1000).toFixed(0)}K users
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <div className="text-sm font-bold text-gray-900">
                    {country.percentage}%
                  </div>
                  <div className="text-xs text-green-600">
                    {country.growth}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Age Distribution */}
        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">
            Age Distribution
          </h2>
          <div className="space-y-4">
            {ageGroups.map((group) => (
              <div key={group.range}>
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-gray-900">
                    {group.range} years
                  </span>
                  <span className="text-sm text-gray-500">
                    {group.percentage}%
                  </span>
                </div>
                <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                  <div
                    className="h-full bg-[#DC143C]"
                    style={{ width: `${group.percentage}%` }}
                  />
                </div>
                <div className="text-xs text-gray-500 mt-1">
                  {(group.users / 1000).toFixed(0)}K users
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Device & Platform Stats */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Device Types */}
        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-lg font-semibold text-gray-900">
              Device Types
            </h2>
            <Smartphone className="w-5 h-5 text-gray-400" />
          </div>
          <div className="space-y-3">
            {devices.map((device) => (
              <div key={device.type} className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className={`w-3 h-3 rounded-full ${device.color}`} />
                  <span className="text-sm text-gray-900">{device.type}</span>
                </div>
                <span className="text-sm font-medium text-gray-900">
                  {device.percentage}%
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* User Activity */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">
              User Activity Pattern
            </h2>
            <div className="h-48 flex items-center justify-center bg-gray-50 rounded-lg">
              <p className="text-gray-400">Activity heatmap visualization</p>
            </div>
            <div className="grid grid-cols-3 gap-4 mt-4 pt-4 border-t border-gray-200">
              <div>
                <div className="text-xs text-gray-500">Peak Hour</div>
                <div className="text-lg font-bold text-gray-900">7PM</div>
              </div>
              <div>
                <div className="text-xs text-gray-500">Peak Day</div>
                <div className="text-lg font-bold text-gray-900">Sunday</div>
              </div>
              <div>
                <div className="text-xs text-gray-500">Avg. Session</div>
                <div className="text-lg font-bold text-gray-900">12m 34s</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Growth Chart */}
      <div className="bg-white rounded-xl border border-gray-200 p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold text-gray-900">
            User Growth
          </h2>
          <div className="flex gap-2">
            <button className="px-3 py-1 text-sm text-gray-600 hover:bg-gray-100 rounded-lg">
              Week
            </button>
            <button className="px-3 py-1 text-sm bg-gray-900 text-white rounded-lg">
              Month
            </button>
            <button className="px-3 py-1 text-sm text-gray-600 hover:bg-gray-100 rounded-lg">
              Year
            </button>
          </div>
        </div>
        <div className="h-64 flex items-center justify-center bg-gray-50 rounded-lg">
          <p className="text-gray-400">User growth chart visualization</p>
        </div>
      </div>
    </div>
  );
}

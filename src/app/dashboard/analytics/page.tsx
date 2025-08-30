"use client";

import { motion } from "framer-motion";
import {
  TrendingUp,
  Users,
  MousePointerClick,
  Clock,
  Download,
  Calendar,
  ArrowUpRight,
  ArrowDownRight
} from "lucide-react";

const metrics = [
  { label: "Total Views", value: "5.2M", change: "+18%", trend: "up" },
  { label: "Unique Visitors", value: "1.8M", change: "+12%", trend: "up" },
  { label: "Avg. Duration", value: "8m 42s", change: "+5%", trend: "up" },
  { label: "Bounce Rate", value: "32%", change: "-3%", trend: "down" }
];

const topPages = [
  { page: "/recipes/pilau", views: 145234, duration: "3m 12s" },
  { page: "/campaigns/air-fryer", views: 98234, duration: "5m 43s" },
  { page: "/recipes/nyama-choma", views: 87345, duration: "4m 21s" },
  { page: "/home", views: 76543, duration: "2m 54s" },
  { page: "/recipes/chapati", views: 65432, duration: "3m 38s" }
];

const deviceStats = [
  { device: "Mobile", percentage: 68, users: 1224000 },
  { device: "Desktop", percentage: 28, users: 504000 },
  { device: "Tablet", percentage: 4, users: 72000 }
];

export default function AnalyticsPage() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Analytics</h1>
          <p className="mt-1 text-sm text-gray-500">
            Platform performance and user insights
          </p>
        </div>
        <div className="flex items-center gap-3">
          <button className="px-4 py-2 text-sm border border-gray-200 rounded-lg hover:bg-gray-50 flex items-center gap-2 text-gray-700">
            <Calendar className="w-4 h-4" />
            Last 30 Days
          </button>
          <button className="px-4 py-2 text-sm bg-[#DC143C] text-white rounded-lg hover:bg-[#C41230] flex items-center gap-2">
            <Download className="w-4 h-4" />
            Export
          </button>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {metrics.map((metric, index) => (
          <motion.div
            key={metric.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
            className="bg-white p-6 rounded-xl border border-gray-200"
          >
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-gray-500">{metric.label}</span>
              <span className={`text-sm font-medium flex items-center gap-1 ${
                metric.trend === "up" ? "text-green-600" : "text-red-600"
              }`}>
                {metric.trend === "up" ? (
                  <ArrowUpRight className="w-3 h-3" />
                ) : (
                  <ArrowDownRight className="w-3 h-3" />
                )}
                {metric.change}
              </span>
            </div>
            <div className="text-2xl font-bold text-gray-900">{metric.value}</div>
          </motion.div>
        ))}
      </div>

      {/* Main Content Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Traffic Chart */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">
              Traffic Overview
            </h2>
            <div className="h-64 flex items-center justify-center bg-gray-50 rounded-lg">
              <p className="text-gray-400">Traffic chart visualization</p>
            </div>
            <div className="grid grid-cols-3 gap-4 mt-6 pt-6 border-t border-gray-200">
              <div>
                <div className="text-xs text-gray-500">Page Views</div>
                <div className="text-xl font-bold text-gray-900">2.4M</div>
              </div>
              <div>
                <div className="text-xs text-gray-500">Sessions</div>
                <div className="text-xl font-bold text-gray-900">842K</div>
              </div>
              <div>
                <div className="text-xs text-gray-500">Users</div>
                <div className="text-xl font-bold text-gray-900">521K</div>
              </div>
            </div>
          </div>
        </div>

        {/* Device Stats */}
        <div>
          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">
              Device Usage
            </h2>
            <div className="space-y-4">
              {deviceStats.map((device) => (
                <div key={device.device}>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-sm font-medium text-gray-900">
                      {device.device}
                    </span>
                    <span className="text-sm text-gray-500">
                      {device.percentage}%
                    </span>
                  </div>
                  <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-[#DC143C]"
                      style={{ width: `${device.percentage}%` }}
                    />
                  </div>
                  <div className="text-xs text-gray-500 mt-1">
                    {(device.users / 1000).toFixed(0)}K users
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Top Pages */}
      <div className="bg-white rounded-xl border border-gray-200 p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">
          Top Pages
        </h2>
        <table className="w-full">
          <thead>
            <tr className="border-b border-gray-200">
              <th className="pb-3 text-left text-xs font-medium text-gray-500 uppercase">
                Page
              </th>
              <th className="pb-3 text-left text-xs font-medium text-gray-500 uppercase">
                Views
              </th>
              <th className="pb-3 text-left text-xs font-medium text-gray-500 uppercase">
                Avg. Duration
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {topPages.map((page, index) => (
              <motion.tr
                key={page.page}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: index * 0.05 }}
              >
                <td className="py-3">
                  <span className="text-sm text-gray-900">{page.page}</span>
                </td>
                <td className="py-3">
                  <span className="text-sm font-medium text-gray-900">
                    {page.views.toLocaleString()}
                  </span>
                </td>
                <td className="py-3">
                  <span className="text-sm text-gray-500">{page.duration}</span>
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Engagement Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <h3 className="text-sm font-medium text-gray-500 mb-2">User Engagement</h3>
          <div className="text-3xl font-bold text-gray-900">78%</div>
          <div className="text-sm text-green-600 mt-1">+5% from last month</div>
        </div>
        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <h3 className="text-sm font-medium text-gray-500 mb-2">Retention Rate</h3>
          <div className="text-3xl font-bold text-gray-900">65%</div>
          <div className="text-sm text-green-600 mt-1">+3% from last month</div>
        </div>
        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <h3 className="text-sm font-medium text-gray-500 mb-2">Conversion Rate</h3>
          <div className="text-3xl font-bold text-gray-900">12.4%</div>
          <div className="text-sm text-green-600 mt-1">+2.1% from last month</div>
        </div>
      </div>
    </div>
  );
}

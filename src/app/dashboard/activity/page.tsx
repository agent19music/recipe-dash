"use client";

import { motion } from "framer-motion";
import {
  Clock,
  Activity,
  Calendar,
  TrendingUp,
  Users,
  Eye,
  MousePointerClick,
  Zap
} from "lucide-react";

const activityMetrics = [
  { label: "Peak Hours", value: "6PM - 9PM", change: "Most active", icon: Clock },
  { label: "Avg. Session", value: "12m 34s", change: "+8.7%", icon: Activity },
  { label: "Daily Active", value: "521K", change: "+15.3%", icon: Users },
  { label: "Page Views", value: "2.4M", change: "+22.1%", icon: Eye }
];

const hourlyActivity = [
  { hour: "12AM", activity: 12 },
  { hour: "3AM", activity: 8 },
  { hour: "6AM", activity: 25 },
  { hour: "9AM", activity: 45 },
  { hour: "12PM", activity: 68 },
  { hour: "3PM", activity: 52 },
  { hour: "6PM", activity: 92 },
  { hour: "9PM", activity: 85 }
];

const weeklyPattern = [
  { day: "Monday", sessions: 145234, duration: "11m 23s", peak: "7PM" },
  { day: "Tuesday", sessions: 138456, duration: "12m 45s", peak: "8PM" },
  { day: "Wednesday", sessions: 142678, duration: "11m 56s", peak: "7PM" },
  { day: "Thursday", sessions: 149234, duration: "13m 12s", peak: "8PM" },
  { day: "Friday", sessions: 167890, duration: "14m 34s", peak: "9PM" },
  { day: "Saturday", sessions: 189234, duration: "15m 23s", peak: "8PM" },
  { day: "Sunday", sessions: 198765, duration: "16m 45s", peak: "7PM" }
];

const userActions = [
  { action: "Recipe Views", count: 1234567, percentage: 42 },
  { action: "Campaign Participation", count: 456789, percentage: 15 },
  { action: "Recipe Saves", count: 345678, percentage: 12 },
  { action: "Comments", count: 234567, percentage: 8 },
  { action: "Shares", count: 198765, percentage: 7 },
  { action: "Votes", count: 187654, percentage: 6 },
  { action: "Profile Updates", count: 98765, percentage: 3 },
  { action: "Other", count: 234567, percentage: 7 }
];

export default function ActivityPage() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Activity Time</h1>
        <p className="mt-1 text-sm text-gray-500">
          Monitor user activity patterns and engagement times
        </p>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {activityMetrics.map((metric, index) => (
          <motion.div
            key={metric.label}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
            className="bg-white p-6 rounded-xl border border-gray-200"
          >
            <div className="flex items-center justify-between mb-2">
              <metric.icon className="w-5 h-5 text-gray-400" />
              <span className="text-sm text-green-600 font-medium">{metric.change}</span>
            </div>
            <div className="text-2xl font-bold text-gray-900">{metric.value}</div>
            <div className="text-sm text-gray-500">{metric.label}</div>
          </motion.div>
        ))}
      </div>

      {/* Activity Charts */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Hourly Activity */}
        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">
            Hourly Activity Pattern
          </h2>
          <div className="space-y-3">
            {hourlyActivity.map((hour, index) => (
              <motion.div
                key={hour.hour}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.05 }}
                className="flex items-center justify-between"
              >
                <span className="text-sm text-gray-600 w-12">{hour.hour}</span>
                <div className="flex-1 mx-4">
                  <div className="h-6 bg-gray-100 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-to-r from-[#DC143C] to-[#FF6B6B]"
                      style={{ width: `${hour.activity}%` }}
                    />
                  </div>
                </div>
                <span className="text-sm font-medium text-gray-900 w-10 text-right">
                  {hour.activity}%
                </span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Weekly Pattern */}
        <div className="bg-white rounded-xl border border-gray-200 p-6">
          <h2 className="text-lg font-semibold text-gray-900 mb-4">
            Weekly Activity
          </h2>
          <div className="space-y-2">
            {weeklyPattern.map((day, index) => (
              <motion.div
                key={day.day}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: index * 0.05 }}
                className="flex items-center justify-between py-2 hover:bg-gray-50 rounded px-2"
              >
                <div className="flex-1">
                  <div className="text-sm font-medium text-gray-900">{day.day}</div>
                  <div className="text-xs text-gray-500">Peak: {day.peak}</div>
                </div>
                <div className="text-right">
                  <div className="text-sm font-medium text-gray-900">
                    {(day.sessions / 1000).toFixed(0)}K
                  </div>
                  <div className="text-xs text-gray-500">{day.duration}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>

      {/* User Actions Breakdown */}
      <div className="bg-white rounded-xl border border-gray-200 p-6">
        <h2 className="text-lg font-semibold text-gray-900 mb-4">
          User Actions Breakdown
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {userActions.map((action, index) => (
            <motion.div
              key={action.action}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: index * 0.05 }}
              className="p-4 bg-gray-50 rounded-lg"
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs text-gray-500">{action.action}</span>
                <span className="text-xs font-medium text-gray-900">
                  {action.percentage}%
                </span>
              </div>
              <div className="text-lg font-bold text-gray-900">
                {(action.count / 1000).toFixed(0)}K
              </div>
              <div className="h-1 bg-gray-200 rounded-full overflow-hidden mt-2">
                <div
                  className="h-full bg-[#DC143C]"
                  style={{ width: `${action.percentage}%` }}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Activity Heatmap */}
      <div className="bg-white rounded-xl border border-gray-200 p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold text-gray-900">
            Activity Heatmap
          </h2>
          <div className="flex gap-2">
            <button className="px-3 py-1 text-sm text-gray-600 hover:bg-gray-100 rounded-lg">
              Day
            </button>
            <button className="px-3 py-1 text-sm bg-gray-900 text-white rounded-lg">
              Week
            </button>
            <button className="px-3 py-1 text-sm text-gray-600 hover:bg-gray-100 rounded-lg">
              Month
            </button>
          </div>
        </div>
        <div className="h-64 flex items-center justify-center bg-gray-50 rounded-lg">
          <p className="text-gray-400">Activity heatmap visualization</p>
        </div>
        <div className="grid grid-cols-3 gap-4 mt-4 pt-4 border-t border-gray-200">
          <div>
            <div className="text-xs text-gray-500">Most Active Day</div>
            <div className="text-lg font-bold text-gray-900">Sunday</div>
          </div>
          <div>
            <div className="text-xs text-gray-500">Most Active Hour</div>
            <div className="text-lg font-bold text-gray-900">7PM - 8PM</div>
          </div>
          <div>
            <div className="text-xs text-gray-500">Peak Traffic</div>
            <div className="text-lg font-bold text-gray-900">198K users</div>
          </div>
        </div>
      </div>
    </div>
  );
}

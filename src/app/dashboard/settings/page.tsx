"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Bell,
  Lock,
  User,
  Globe,
  Shield,
  Smartphone,
  ChevronRight,
  Save
} from "lucide-react";
import { Button } from "@/components/ui/button";

export default function SettingsPage() {
  const [notifications, setNotifications] = useState({
    email: true,
    push: true,
    campaigns: true,
    submissions: false,
    analytics: true
  });

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Settings</h1>
        <p className="mt-1 text-sm text-gray-500">
          Manage your account and platform preferences
        </p>
      </div>

      {/* Settings Sections */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Settings */}
        <div className="lg:col-span-2 space-y-6">
          {/* Profile Settings */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-xl border border-gray-200 p-6"
          >
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <User className="w-5 h-5 text-gray-400" />
                <h2 className="text-lg font-semibold text-gray-900">
                  Profile Settings
                </h2>
              </div>
            </div>
            
            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  defaultValue="Admin User"
                  className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#DC143C]/20 focus:border-[#DC143C] text-gray-700"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  defaultValue="admin@roycorecipe.com"
                  className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#DC143C]/20 focus:border-[#DC143C] text-gray-700  "
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Role
                </label>
                <input
                  type="text"
                  defaultValue="Administrator"
                  disabled
                  className="w-full px-4 py-2 border border-gray-200 rounded-lg bg-gray-50 text-gray-500"
                />
              </div>
            </div>
          </motion.div>

          {/* Notification Settings */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-white rounded-xl border border-gray-200 p-6"
          >
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <Bell className="w-5 h-5 text-gray-400" />
                <h2 className="text-lg font-semibold text-gray-900">
                  Notifications
                </h2>
              </div>
            </div>
            
            <div className="space-y-4">
              {Object.entries(notifications).map(([key, value]) => (
                <div key={key} className="flex items-center justify-between">
                  <div>
                    <div className="text-sm font-medium text-gray-900 capitalize">
                      {key === "email" ? "Email Notifications" :
                       key === "push" ? "Push Notifications" :
                       key === "campaigns" ? "Campaign Updates" :
                       key === "submissions" ? "New Submissions" :
                       "Analytics Reports"}
                    </div>
                    <div className="text-xs text-gray-500">
                      {key === "email" ? "Receive notifications via email" :
                       key === "push" ? "Browser push notifications" :
                       key === "campaigns" ? "Updates about campaign performance" :
                       key === "submissions" ? "Alerts for new recipe submissions" :
                       "Weekly analytics summary"}
                    </div>
                  </div>
                  <button
                    onClick={() => setNotifications({...notifications, [key]: !value})}
                    className={`relative inline-flex h-6 w-11 items-center rounded-full transition-colors ${
                      value ? "bg-[#DC143C]" : "bg-gray-200"
                    }`}
                  >
                    <span
                      className={`inline-block h-4 w-4 transform rounded-full bg-white transition-transform ${
                        value ? "translate-x-6" : "translate-x-1"
                      }`}
                    />
                  </button>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Security Settings */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-xl border border-gray-200 p-6"
          >
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-3">
                <Shield className="w-5 h-5 text-gray-400" />
                <h2 className="text-lg font-semibold text-gray-900">
                  Security
                </h2>
              </div>
            </div>
            
            <div className="space-y-4">
              <button className="w-full flex items-center justify-between p-4 rounded-lg border border-gray-200 hover:bg-gray-50">
                <div className="flex items-center gap-3">
                  <Lock className="w-5 h-5 text-gray-400" />
                  <div className="text-left">
                    <div className="text-sm font-medium text-gray-900">
                      Change Password
                    </div>
                    <div className="text-xs text-gray-500">
                      Last changed 30 days ago
                    </div>
                  </div>
                </div>
                <ChevronRight className="w-4 h-4 text-gray-400" />
              </button>
              
              <button className="w-full flex items-center justify-between p-4 rounded-lg border border-gray-200 hover:bg-gray-50">
                <div className="flex items-center gap-3">
                  <Smartphone className="w-5 h-5 text-gray-400" />
                  <div className="text-left">
                    <div className="text-sm font-medium text-gray-900">
                      Two-Factor Authentication
                    </div>
                    <div className="text-xs text-gray-500">
                      Not configured
                    </div>
                  </div>
                </div>
                <ChevronRight className="w-4 h-4 text-gray-400" />
              </button>
              
              <button className="w-full flex items-center justify-between p-4 rounded-lg border border-gray-200 hover:bg-gray-50">
                <div className="flex items-center gap-3">
                  <Globe className="w-5 h-5 text-gray-400" />
                  <div className="text-left">
                    <div className="text-sm font-medium text-gray-900">
                      Active Sessions
                    </div>
                    <div className="text-xs text-gray-500">
                      3 devices logged in
                    </div>
                  </div>
                </div>
                <ChevronRight className="w-4 h-4 text-gray-400" />
              </button>
            </div>
          </motion.div>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Quick Actions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            className="bg-white rounded-xl border border-gray-200 p-6"
          >
            <h2 className="text-lg font-semibold text-gray-900 mb-4">
              Quick Actions
            </h2>
            <div className="space-y-3">
              <button className="w-full text-left p-3 rounded-lg hover:bg-gray-50 text-sm text-gray-700">
                Export Data
              </button>
              <button className="w-full text-left p-3 rounded-lg hover:bg-gray-50 text-sm text-gray-700">
                API Documentation
              </button>
              <button className="w-full text-left p-3 rounded-lg hover:bg-gray-50 text-sm text-gray-700">
                Support Center
              </button>
              <button className="w-full text-left p-3 rounded-lg hover:bg-gray-50 text-sm text-gray-700">
                Terms & Privacy
              </button>
            </div>
          </motion.div>

          {/* Platform Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-white rounded-xl border border-gray-200 p-6"
          >
            <h2 className="text-lg font-semibold text-gray-900 mb-4">
              Platform Info
            </h2>
            <div className="space-y-3">
              <div className="flex justify-between">
                <span className="text-sm text-gray-500">Version</span>
                <span className="text-sm font-medium text-gray-900">2.0.1</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-gray-500">API Status</span>
                <span className="text-sm font-medium text-green-600">Online</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-gray-500">Last Update</span>
                <span className="text-sm font-medium text-gray-900">Jan 20</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-gray-500">Storage Used</span>
                <span className="text-sm font-medium text-gray-900">45.2 GB</span>
              </div>
            </div>
          </motion.div>

          {/* Save Button */}
          <Button className="w-full bg-[#DC143C] hover:bg-[#C41230] text-white rounded-lg">
            <Save className="w-4 h-4 mr-2" />
            Save Changes
          </Button>
        </div>
      </div>
    </div>
  );
}

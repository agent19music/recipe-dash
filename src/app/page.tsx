"use client";

import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, ChevronRight } from "lucide-react";

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation - Apple-style minimal */}
      <nav className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-md border-b border-gray-200/50">
        <div className="max-w-7xl mx-auto px-8">
          <div className="flex justify-between items-center h-14">
            <Link href="/" className="text-xl font-semibold tracking-tight text-gray-900">
              Royco<span className="text-[#DC143C]">.</span>
            </Link>
            <div className="flex items-center gap-8">
              <Link href="#features" className="text-sm text-gray-600 hover:text-[#DC143C] transition-colors">
                Features
              </Link>
              <Link href="#analytics" className="text-sm text-gray-600 hover:text-[#DC143C] transition-colors">
                Analytics
              </Link>
              <Link href="/dashboard">
                <Button className="bg-[#DC143C] hover:bg-[#C41230] text-white text-sm px-5 py-2 rounded-lg font-medium">
                  Dashboard
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section - Big, Bold, Minimal */}
      <section className="relative pt-28 pb-16 px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-center"
          >
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold tracking-tighter text-gray-900 mb-4">
              Recipe
              <span className="block text-[#DC143C]">Platform</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 max-w-2xl mx-auto mb-8 font-light">
              The intelligent dashboard for modern recipe campaigns. 
              Track, analyze, and optimize culinary engagement.
            </p>
          </motion.div>

          {/* Hero Image - Food Focus */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="relative max-w-5xl mx-auto mb-12"
          >
            <div className="aspect-[16/10] bg-gradient-to-br from-gray-50 to-[#DC143C]/5 rounded-2xl overflow-hidden shadow-2xl border border-gray-200">
              <Image
                src="/stewhero.png"
                alt="Food Excellence"
                fill
                className="object-cover"
                priority
              />
            </div>
            {/* <div className="absolute -bottom-3 -right-3 bg-[#DC143C] text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg">
              Explosion of Flavour
            </div> */}
          </motion.div>

          {/* CTA Buttons - Simple and Clean */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="flex flex-col sm:flex-row gap-4 justify-center"
          >
            <Link href="/dashboard">
              <Button className="bg-[#DC143C] hover:bg-[#C41230] text-white px-8 py-4 rounded-xl text-base font-medium inline-flex items-center gap-2 shadow-lg hover:shadow-xl transition-all">
                Launch Dashboard
                <ArrowRight className="w-4 h-4" />
              </Button>
            </Link>
            <Button variant="outline" className="border-gray-300 text-white hover:text-[#DC143C] hover:border-[#DC143C] px-8 py-4 rounded-xl text-base font-medium transition-all">
              Learn More
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Stats Section - Clean Grid */}
      <section className="py-20 px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { value: "2M+", label: "Active Users" },
              { value: "50K", label: "Daily Recipes" },
              { value: "842K", label: "Downloads" },
              { value: "98%", label: "Satisfaction" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-gray-600">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section - Cards */}
      <section id="features" className="py-24 px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-bold tracking-tight text-gray-900 mb-4">
              Powerful Features
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Everything you need to run successful recipe campaigns
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Campaign Intelligence",
                description: "Launch and manage recipe campaigns with real-time tracking and insights.",
                link: "/dashboard/campaigns"
              },
              {
                title: "Analytics Platform",
                description: "Comprehensive data visualization and user behavior analytics.",
                link: "/dashboard/analytics"
              },
              {
                title: "Community Voting",
                description: "Democratic recipe selection with transparent voting systems.",
                link: "/dashboard/submissions"
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Link href={feature.link} className="block group">
                  <div className="bg-white rounded-2xl p-8 border border-gray-200 hover:border-gray-300 transition-all hover:shadow-lg">
                    <h3 className="text-2xl font-semibold text-gray-900 mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 mb-4">
                      {feature.description}
                    </p>
                    <span className="inline-flex items-center text-[#DC143C] font-medium group-hover:gap-2 transition-all">
                      Learn more
                      <ChevronRight className="w-4 h-4 ml-1" />
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Campaign Showcase - Minimal Cards */}
      <section className="py-24 px-8 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-5xl md:text-6xl font-bold tracking-tight text-gray-900 text-center mb-4">
              Active Campaigns
            </h2>
            <p className="text-xl text-gray-600 text-center max-w-2xl mx-auto">
              Join thousands of users participating in culinary challenges
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { name: "Air Fryer Week", participants: "125K", status: "Active" },
              { name: "Pilau Madness", participants: "89K", status: "Trending" },
              { name: "Nyama Choma Fest", participants: "203K", status: "Featured" }
            ].map((campaign, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl p-6 border border-gray-200"
              >
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-lg font-semibold text-gray-900">
                    {campaign.name}
                  </h3>
                  <span className="text-xs px-2 py-1 bg-gray-100 text-gray-600 rounded-md">
                    {campaign.status}
                  </span>
                </div>
                <div className="text-3xl font-bold text-gray-900 mb-1">
                  {campaign.participants}
                </div>
                <div className="text-sm text-gray-600">
                  Participants
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Analytics Preview */}
      <section id="analytics" className="py-24 px-8">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-6xl font-bold tracking-tight text-gray-900 text-center mb-16">
              Data Intelligence
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { metric: "Real-time Activity", value: "2.3M", desc: "Active users today" },
                { metric: "Geographic Reach", value: "47", desc: "Countries reached" },
                { metric: "Campaign Success", value: "94%", desc: "Completion rate" }
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center"
                >
                  <div className="text-5xl font-bold text-gray-900 mb-2">
                    {item.value}
                  </div>
                  <div className="text-lg font-medium text-gray-900 mb-1">
                    {item.metric}
                  </div>
                  <div className="text-sm text-gray-600">
                    {item.desc}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-8 bg-[#DC143C]">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-6xl font-bold tracking-tight text-white mb-6">
              Ready to start?
            </h2>
            <p className="text-xl text-white/90 mb-12 max-w-2xl mx-auto">
              Join thousands of brands using our platform to create engaging cooking experiences.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/dashboard">
                <Button className="bg-white text-[#DC143C] hover:bg-gray-100 px-8 py-4 rounded-xl text-base font-medium inline-flex items-center gap-2 shadow-lg">
                  Access Dashboard
                  <ArrowRight className="w-4 h-4" />
                </Button>
              </Link>
              <Button variant="outline" className="border-white/30 text-white hover:bg-white/10 px-8 py-4 rounded-xl text-base font-medium">
                Schedule Demo
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-8 border-t border-gray-200">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-lg font-semibold text-gray-900 mb-4 md:mb-0">
              Royco<span className="text-[#DC143C]">.</span>
            </div>
            <div className="flex items-center gap-8">
              <Link href="/dashboard" className="text-sm text-gray-600 hover:text-[#DC143C] transition-colors">
                Dashboard
              </Link>
              <span className="text-sm text-gray-500">
                © 2024 Royco Recipe Platform
              </span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

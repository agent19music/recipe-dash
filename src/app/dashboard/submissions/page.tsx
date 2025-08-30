"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  ThumbsUp,
  MessageCircle,
  Eye,
  Search,
  Clock,
  CheckCircle,
  XCircle
} from "lucide-react";

const submissions = [
  {
    id: 1,
    campaign: "Air Fryer Week",
    title: "Crispy Air Fryer Chicken Wings",
    author: "Sarah Kimani",
    submittedAt: "2024-01-22",
    votes: 3456,
    comments: 234,
    status: "approved"
  },
  {
    id: 2,
    campaign: "Pilau Madness",
    title: "Traditional Coastal Pilau",
    author: "John Mwangi",
    submittedAt: "2024-01-21",
    votes: 2890,
    comments: 189,
    status: "approved"
  },
  {
    id: 3,
    campaign: "Air Fryer Week",
    title: "Healthy Veggie Chips",
    author: "Mary Ochieng",
    submittedAt: "2024-01-23",
    votes: 1234,
    comments: 98,
    status: "pending"
  },
  {
    id: 4,
    campaign: "Pilau Madness",
    title: "Vegan Mushroom Pilau",
    author: "Ahmed Hassan",
    submittedAt: "2024-01-20",
    votes: 987,
    comments: 67,
    status: "approved"
  },
  {
    id: 5,
    campaign: "Air Fryer Week",
    title: "Golden Fish Fillets",
    author: "Grace Wanjiru",
    submittedAt: "2024-01-23",
    votes: 567,
    comments: 34,
    status: "rejected"
  }
];

export default function SubmissionsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [filterStatus, setFilterStatus] = useState("all");
  const [filterCampaign, setFilterCampaign] = useState("all");

  const filteredSubmissions = submissions.filter(submission => {
    const matchesSearch = submission.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          submission.author.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = filterStatus === "all" || submission.status === filterStatus;
    const matchesCampaign = filterCampaign === "all" || submission.campaign === filterCampaign;
    return matchesSearch && matchesStatus && matchesCampaign;
  });

  const getStatusIcon = (status: string) => {
    switch(status) {
      case "approved":
        return <CheckCircle className="w-3 h-3" />;
      case "pending":
        return <Clock className="w-3 h-3" />;
      case "rejected":
        return <XCircle className="w-3 h-3" />;
      default:
        return null;
    }
  };

  const getStatusStyle = (status: string) => {
    switch(status) {
      case "approved":
        return "bg-green-100 text-green-700";
      case "pending":
        return "bg-yellow-100 text-yellow-700";
      case "rejected":
        return "bg-red-100 text-red-700";
      default:
        return "bg-gray-100 text-gray-600";
    }
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Submissions</h1>
        <p className="mt-1 text-sm text-gray-500">
          Review and manage campaign submissions
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white p-4 rounded-xl border border-gray-200">
          <div className="text-2xl font-bold text-gray-900">15,234</div>
          <div className="text-sm text-gray-500">Total Submissions</div>
        </div>
        <div className="bg-white p-4 rounded-xl border border-gray-200">
          <div className="text-2xl font-bold text-gray-900">456K</div>
          <div className="text-sm text-gray-500">Total Votes</div>
        </div>
        <div className="bg-white p-4 rounded-xl border border-gray-200">
          <div className="text-2xl font-bold text-green-600">12,890</div>
          <div className="text-sm text-gray-500">Approved</div>
        </div>
        <div className="bg-white p-4 rounded-xl border border-gray-200">
          <div className="text-2xl font-bold text-yellow-600">1,234</div>
          <div className="text-sm text-gray-500">Pending Review</div>
        </div>
      </div>

      {/* Filters */}
      <div className="flex items-center gap-4">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
          <input
            type="text"
            placeholder="Search submissions..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10 pr-4 py-2 w-full rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#DC143C]/20 focus:border-[#DC143C] text-gray-700"
          />
        </div>
        <select
          value={filterCampaign}
          onChange={(e) => setFilterCampaign(e.target.value)}
          className="px-4 py-2 rounded-lg border border-gray-200 text-sm text-gray-700"
        >
          <option value="all">All Campaigns</option>
          <option value="Air Fryer Week">Air Fryer Week</option>
          <option value="Pilau Madness">Pilau Madness</option>
        </select>
        <div className="flex gap-2">
          {["all", "approved", "pending", "rejected"].map((status) => (
            <button
              key={status}
              onClick={() => setFilterStatus(status)}
              className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                filterStatus === status
                  ? "bg-gray-900 text-white"
                  : "bg-white border border-gray-200 text-gray-600 hover:bg-gray-50"
              }`}
            >
              {status.charAt(0).toUpperCase() + status.slice(1)}
            </button>
          ))}
        </div>
      </div>

      {/* Submissions Table */}
      <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
        <table className="w-full">
          <thead className="bg-gray-50 border-b border-gray-200">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Submission
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Campaign
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Author
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Engagement
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Status
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                Actions
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {filteredSubmissions.map((submission, index) => (
              <motion.tr
                key={submission.id}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: index * 0.05 }}
                className="hover:bg-gray-50"
              >
                <td className="px-6 py-4">
                  <div>
                    <div className="text-sm font-medium text-gray-900">
                      {submission.title}
                    </div>
                    <div className="text-xs text-gray-500">
                      {submission.submittedAt}
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <span className="text-sm text-gray-900">{submission.campaign}</span>
                </td>
                <td className="px-6 py-4">
                  <span className="text-sm text-gray-900">{submission.author}</span>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-4 text-sm text-gray-500">
                    <span className="flex items-center gap-1">
                      <ThumbsUp className="w-3 h-3" />
                      {submission.votes.toLocaleString()}
                    </span>
                    <span className="flex items-center gap-1">
                      <MessageCircle className="w-3 h-3" />
                      {submission.comments}
                    </span>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <span className={`inline-flex items-center gap-1 px-2 py-1 rounded-md text-xs font-medium ${getStatusStyle(submission.status)}`}>
                    {getStatusIcon(submission.status)}
                    {submission.status}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <button className="text-sm font-medium text-[#DC143C] hover:text-[#C41230] flex items-center gap-1">
                    <Eye className="w-4 h-4" />
                    View
                  </button>
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

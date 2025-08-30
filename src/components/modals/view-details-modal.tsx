"use client";

import * as React from "react";
import { motion } from "framer-motion";
import { 
  Calendar, 
  Users, 
  Upload, 
  Trophy, 
  TrendingUp,
  Clock,
  Eye,
  Heart,
  MessageSquare,
  Share2
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

interface CampaignDetails {
  id: number;
  name: string;
  status: string;
  startDate: string;
  endDate: string;
  participants: number;
  submissions: number;
  prize: string;
  description: string;
  rules?: string;
  coverImage?: string;
  views?: number;
  likes?: number;
  comments?: number;
  shares?: number;
  topSubmissions?: Submission[];
}

interface Submission {
  id: number;
  userName: string;
  userAvatar?: string;
  recipeName: string;
  submittedAt: string;
  likes: number;
  imageUrl?: string;
}

interface ViewDetailsModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  campaign: CampaignDetails | null;
  onEdit?: () => void;
  onDelete?: () => void;
}

export const ViewDetailsModal: React.FC<ViewDetailsModalProps> = ({
  open,
  onOpenChange,
  campaign,
  onEdit,
  onDelete,
}) => {
  if (!campaign) return null;

  const getStatusColor = (status: string) => {
    switch (status) {
      case "active":
        return "bg-green-100 text-green-700";
      case "upcoming":
        return "bg-blue-100 text-blue-700";
      case "completed":
        return "bg-gray-100 text-gray-600";
      default:
        return "bg-gray-100 text-gray-600";
    }
  };

  const calculateDaysRemaining = () => {
    const end = new Date(campaign.endDate);
    const now = new Date();
    const diff = end.getTime() - now.getTime();
    const days = Math.ceil(diff / (1000 * 60 * 60 * 24));
    return days > 0 ? days : 0;
  };

  // Mock data for demonstration
  const mockSubmissions: Submission[] = [
    {
      id: 1,
      userName: "Sarah Wanjiku",
      recipeName: "Spicy Coastal Pilau",
      submittedAt: "2024-01-20",
      likes: 1234,
      imageUrl: "/api/placeholder/200/150"
    },
    {
      id: 2,
      userName: "John Kamau",
      recipeName: "Traditional Beef Pilau",
      submittedAt: "2024-01-19",
      likes: 987,
      imageUrl: "/api/placeholder/200/150"
    },
    {
      id: 3,
      userName: "Mary Otieno",
      recipeName: "Vegetarian Pilau Delight",
      submittedAt: "2024-01-18",
      likes: 856,
      imageUrl: "/api/placeholder/200/150"
    }
  ];

  const submissions = campaign.topSubmissions || mockSubmissions;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-4xl max-h-[90vh] overflow-y-auto">
        {/* Header with Cover Image */}
        {campaign.coverImage && (
          <div className="relative -m-6 mb-6 h-48 rounded-t-xl overflow-hidden">
            <img
              src={campaign.coverImage}
              alt={campaign.name}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
            <div className="absolute bottom-4 left-6 text-white">
              <h2 className="text-2xl font-bold">{campaign.name}</h2>
              <span className={`inline-flex items-center px-2 py-1 rounded-md text-xs font-medium mt-2 ${getStatusColor(campaign.status)}`}>
                {campaign.status}
              </span>
            </div>
          </div>
        )}

        {!campaign.coverImage && (
          <DialogHeader>
            <div className="flex items-start justify-between">
              <div>
                <DialogTitle className="text-2xl">{campaign.name}</DialogTitle>
                <span className={`inline-flex items-center px-2 py-1 rounded-md text-xs font-medium mt-2 ${getStatusColor(campaign.status)}`}>
                  {campaign.status}
                </span>
              </div>
            </div>
            <DialogDescription className="mt-2">
              {campaign.description}
            </DialogDescription>
          </DialogHeader>
        )}

        <div className="space-y-6 px-8 py-6">
          {/* Key Metrics */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="bg-gray-50 rounded-lg p-4"
            >
              <div className="flex items-center gap-2 text-gray-600 mb-1">
                <Users className="w-4 h-4" />
                <span className="text-xs">Participants</span>
              </div>
              <div className="text-2xl font-bold text-gray-900">
                {campaign.participants.toLocaleString()}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="bg-gray-50 rounded-lg p-4"
            >
              <div className="flex items-center gap-2 text-gray-600 mb-1">
                <Upload className="w-4 h-4" />
                <span className="text-xs">Submissions</span>
              </div>
              <div className="text-2xl font-bold text-gray-900">
                {campaign.submissions.toLocaleString()}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-gray-50 rounded-lg p-4"
            >
              <div className="flex items-center gap-2 text-gray-600 mb-1">
                <Clock className="w-4 h-4" />
                <span className="text-xs">Days Remaining</span>
              </div>
              <div className="text-2xl font-bold text-gray-900">
                {calculateDaysRemaining()}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-gray-50 rounded-lg p-4"
            >
              <div className="flex items-center gap-2 text-gray-600 mb-1">
                <TrendingUp className="w-4 h-4" />
                <span className="text-xs">Engagement Rate</span>
              </div>
              <div className="text-2xl font-bold text-gray-900">
                {campaign.submissions > 0 
                  ? `${((campaign.submissions / campaign.participants) * 100).toFixed(1)}%`
                  : "0%"}
              </div>
            </motion.div>
          </div>

          {/* Campaign Details */}
          <div className="space-y-4">
            <div>
              <h3 className="text-sm font-medium text-gray-900 mb-2">Campaign Period</h3>
              <div className="flex items-center gap-2 text-sm text-gray-600">
                <Calendar className="w-4 h-4" />
                {new Date(campaign.startDate).toLocaleDateString("en-US", { 
                  month: "long", 
                  day: "numeric", 
                  year: "numeric" 
                })} - {new Date(campaign.endDate).toLocaleDateString("en-US", { 
                  month: "long", 
                  day: "numeric", 
                  year: "numeric" 
                })}
              </div>
            </div>

            <div>
              <h3 className="text-sm font-medium text-gray-900 mb-2">Prize</h3>
              <div className="flex items-center gap-2">
                <Trophy className="w-4 h-4 text-[#DC143C]" />
                <span className="text-sm font-semibold text-gray-700">{campaign.prize}</span>
              </div>
            </div>

            {campaign.rules && (
              <div>
                <h3 className="text-sm font-medium text-gray-900 mb-2">Campaign Rules</h3>
                <p className="text-sm text-gray-600 whitespace-pre-line">
                  {campaign.rules}
                </p>
              </div>
            )}
          </div>

          {/* Engagement Stats */}
          <div className="border-t pt-4">
            <h3 className="text-sm font-medium text-gray-900 mb-3">Engagement</h3>
            <div className="grid grid-cols-4 gap-4">
              <div className="text-center">
                <Eye className="w-5 h-5 text-gray-400 mx-auto mb-1" />
                <div className="text-xl font-bold text-gray-900">
                  {(campaign.views || 234567).toLocaleString()}
                </div>
                <div className="text-xs text-gray-500">Views</div>
              </div>
              <div className="text-center">
                <Heart className="w-5 h-5 text-gray-400 mx-auto mb-1" />
                <div className="text-xl font-bold text-gray-900">
                  {(campaign.likes || 45678).toLocaleString()}
                </div>
                <div className="text-xs text-gray-500">Likes</div>
              </div>
              <div className="text-center">
                <MessageSquare className="w-5 h-5 text-gray-400 mx-auto mb-1" />
                <div className="text-xl font-bold text-gray-900">
                  {(campaign.comments || 12345).toLocaleString()}
                </div>
                <div className="text-xs text-gray-500">Comments</div>
              </div>
              <div className="text-center">
                <Share2 className="w-5 h-5 text-gray-400 mx-auto mb-1" />
                <div className="text-xl font-bold text-gray-900">
                  {(campaign.shares || 8901).toLocaleString()}
                </div>
                <div className="text-xs text-gray-500">Shares</div>
              </div>
            </div>
          </div>

          {/* Top Submissions */}
          <div className="border-t pt-4">
            <h3 className="text-sm font-medium text-gray-900 mb-3">Top Submissions</h3>
            <div className="space-y-3">
              {submissions.slice(0, 3).map((submission, index) => (
                <motion.div
                  key={submission.id}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-3 p-3 bg-gray-50 rounded-lg"
                >
                  <div className="flex items-center justify-center w-8 h-8 rounded-full bg-[#DC143C] text-white font-bold text-sm">
                    {index + 1}
                  </div>
                  <div className="flex-1">
                    <div className="font-medium text-gray-900">{submission.recipeName}</div>
                    <div className="text-xs text-gray-500">by {submission.userName}</div>
                  </div>
                  <div className="flex items-center gap-1">
                    <Heart className="w-4 h-4 text-red-500" />
                    <span className="text-sm font-medium text-gray-700">
                      {submission.likes.toLocaleString()}
                    </span>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex items-center justify-between pt-4 border-t">
            <div className="flex gap-2">
              <Button
                variant="outline"
                onClick={() => {
                  // View all submissions action
                  console.log("View all submissions");
                }}
              >
                View All Submissions
              </Button>
              <Button
                variant="outline"
                onClick={() => {
                  // Export data action
                  console.log("Export data");
                }}
              >
                Export Data
              </Button>
            </div>
            <div className="flex gap-2">
              {onEdit && (
                <Button
                  variant="outline"
                  onClick={() => {
                    onEdit();
                    onOpenChange(false);
                  }}
                >
                  Edit Campaign
                </Button>
              )}
              {onDelete && (
                <Button
                  variant="outline"
                  className="text-red-600 hover:text-red-700 border-red-200 hover:bg-red-50"
                  onClick={() => {
                    onDelete();
                    onOpenChange(false);
                  }}
                >
                  Delete Campaign
                </Button>
              )}
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

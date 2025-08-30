"use client";

import * as React from "react";
import { useState, useEffect } from "react";
import { Calendar, Trophy, FileText, Upload } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "@/components/ui/dialog";

interface EditCampaignModalProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  campaign: CampaignData | null;
  onSubmit?: (data: CampaignFormData) => void;
}

interface CampaignData {
  id: number;
  name: string;
  description: string;
  startDate: string;
  endDate: string;
  prize: string;
  status: string;
  rules?: string;
  coverImage?: string;
}

interface CampaignFormData {
  name: string;
  description: string;
  startDate: string;
  endDate: string;
  prize: string;
  status: string;
  rules: string;
  coverImage?: File | string;
}

export const EditCampaignModal: React.FC<EditCampaignModalProps> = ({
  open,
  onOpenChange,
  campaign,
  onSubmit,
}) => {
  const [formData, setFormData] = useState<CampaignFormData>({
    name: "",
    description: "",
    startDate: "",
    endDate: "",
    prize: "",
    status: "active",
    rules: "",
  });

  const [coverImage, setCoverImage] = useState<string | null>(null);
  const [errors, setErrors] = useState<Partial<CampaignFormData>>({});

  // Populate form when campaign data changes
  useEffect(() => {
    if (campaign) {
      setFormData({
        name: campaign.name,
        description: campaign.description,
        startDate: campaign.startDate,
        endDate: campaign.endDate,
        prize: campaign.prize,
        status: campaign.status,
        rules: campaign.rules || "",
        coverImage: campaign.coverImage,
      });
      setCoverImage(campaign.coverImage || null);
    }
  }, [campaign]);

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error for this field when user starts typing
    if (errors[name as keyof CampaignFormData]) {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setCoverImage(reader.result as string);
      };
      reader.readAsDataURL(file);
      setFormData((prev) => ({ ...prev, coverImage: file }));
    }
  };

  const validateForm = () => {
    const newErrors: Partial<CampaignFormData> = {};
    
    if (!formData.name.trim()) {
      newErrors.name = "Campaign name is required";
    }
    if (!formData.description.trim()) {
      newErrors.description = "Description is required";
    }
    if (!formData.startDate) {
      newErrors.startDate = "Start date is required";
    }
    if (!formData.endDate) {
      newErrors.endDate = "End date is required";
    }
    if (!formData.prize.trim()) {
      newErrors.prize = "Prize information is required";
    }

    // Validate date logic
    if (formData.startDate && formData.endDate) {
      const start = new Date(formData.startDate);
      const end = new Date(formData.endDate);
      if (end <= start) {
        newErrors.endDate = "End date must be after start date";
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (validateForm()) {
      onSubmit?.(formData);
      onOpenChange(false);
    }
  };

  if (!campaign) return null;

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle>Edit Campaign</DialogTitle>
          <DialogDescription>
            Update the details of your campaign
          </DialogDescription>
        </DialogHeader>

        <form onSubmit={handleSubmit} className="space-y-6 px-8 py-6">
          {/* Cover Image Upload */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">
              Cover Image
            </label>
            <div className="relative">
              <input
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                className="hidden"
                id="edit-cover-image"
              />
              <label
                htmlFor="edit-cover-image"
                className="flex flex-col items-center justify-center w-full h-48 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:border-[#DC143C] transition-colors overflow-hidden"
              >
                {coverImage ? (
                  <img
                    src={coverImage}
                    alt="Cover"
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <>
                    <Upload className="w-8 h-8 text-gray-400 mb-2" />
                    <span className="text-sm text-gray-500">
                      Click to upload cover image
                    </span>
                  </>
                )}
              </label>
            </div>
          </div>

          {/* Campaign Name */}
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
              Campaign Name
            </label>
            <input
              id="name"
              name="name"
              type="text"
              value={formData.name}
              onChange={handleInputChange}
              placeholder="e.g., Pilau Madness"
              className={`w-full px-4 py-2 text-gray-700 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#DC143C]/20 focus:border-[#DC143C] placeholder:text-gray-400 ${
                errors.name ? "border-red-500" : "border-gray-200"
              }`}
            />
            {errors.name && (
              <p className="mt-1 text-sm text-red-600">{errors.name}</p>
            )}
          </div>

          {/* Description */}
          <div>
            <label htmlFor="description" className="block text-sm font-medium text-gray-700 mb-2">
              Description
            </label>
            <textarea
              id="description"
              name="description"
              value={formData.description}
              onChange={handleInputChange}
              rows={3}
              placeholder="Describe what this campaign is about..."
              className={`w-full px-4 py-2 text-gray-700 border rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-[#DC143C]/20 focus:border-[#DC143C] placeholder:text-gray-400 ${
                errors.description ? "border-red-500" : "border-gray-200"
              }`}
            />
            {errors.description && (
              <p className="mt-1 text-sm text-red-600">{errors.description}</p>
            )}
          </div>

          {/* Status */}
          <div>
            <label htmlFor="status" className="block text-sm font-medium text-gray-700 mb-2">
              Status
            </label>
            <select
              id="status"
              name="status"
              value={formData.status}
              onChange={handleInputChange}
              className="w-full px-4 py-2 text-gray-700 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#DC143C]/20 focus:border-[#DC143C]"
            >
              <option value="active">Active</option>
              <option value="upcoming">Upcoming</option>
              <option value="completed">Completed</option>
              <option value="paused">Paused</option>
            </select>
          </div>

          {/* Date Range */}
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label htmlFor="startDate" className="block text-sm font-medium text-gray-700 mb-2">
                <Calendar className="w-4 h-4 inline mr-1" />
                Start Date
              </label>
              <input
                id="startDate"
                name="startDate"
                type="date"
                value={formData.startDate}
                onChange={handleInputChange}
                className={`w-full px-4 py-2 text-gray-700 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#DC143C]/20 focus:border-[#DC143C] ${
                  errors.startDate ? "border-red-500" : "border-gray-200"
                }`}
              />
              {errors.startDate && (
                <p className="mt-1 text-sm text-red-600">{errors.startDate}</p>
              )}
            </div>
            <div>
              <label htmlFor="endDate" className="block text-sm font-medium text-gray-700 mb-2">
                <Calendar className="w-4 h-4 inline mr-1" />
                End Date
              </label>
              <input
                id="endDate"
                name="endDate"
                type="date"
                value={formData.endDate}
                onChange={handleInputChange}
                className={`w-full px-4 py-2 text-gray-700 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#DC143C]/20 focus:border-[#DC143C] ${
                  errors.endDate ? "border-red-500" : "border-gray-200"
                }`}
              />
              {errors.endDate && (
                <p className="mt-1 text-sm text-red-600">{errors.endDate}</p>
              )}
            </div>
          </div>

          {/* Prize */}
          <div>
            <label htmlFor="prize" className="block text-sm font-medium text-gray-700 mb-2">
              <Trophy className="w-4 h-4 inline mr-1" />
              Prize Details
            </label>
            <input
              id="prize"
              name="prize"
              type="text"
              value={formData.prize}
              onChange={handleInputChange}
              placeholder="e.g., KSH 50,000 + Kitchen Appliances"
              className={`w-full px-4 py-2 text-gray-700 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#DC143C]/20 focus:border-[#DC143C] placeholder:text-gray-400 ${
                errors.prize ? "border-red-500" : "border-gray-200"
              }`}
            />
            {errors.prize && (
              <p className="mt-1 text-sm text-red-600">{errors.prize}</p>
            )}
          </div>

          {/* Rules */}
          <div>
            <label htmlFor="rules" className="block text-sm font-medium text-gray-700 mb-2">
              <FileText className="w-4 h-4 inline mr-1" />
              Campaign Rules
            </label>
            <textarea
              id="rules"
              name="rules"
              value={formData.rules}
              onChange={handleInputChange}
              rows={4}
              placeholder="Enter the rules and guidelines for participants..."
              className="w-full px-4 py-2 text-gray-700 border border-gray-200 rounded-lg resize-none focus:outline-none focus:ring-2 focus:ring-[#DC143C]/20 focus:border-[#DC143C] placeholder:text-gray-400"
            />
          </div>

          {/* Footer Actions */}
          <DialogFooter>
            <Button
              type="button"
              variant="outline"
              onClick={() => onOpenChange(false)}
            >
              Cancel
            </Button>
            <Button
              type="submit"
              className="bg-[#DC143C] hover:bg-[#C41230] text-white"
            >
              Save Changes
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
};

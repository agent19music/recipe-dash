"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import {
  Plus,
  Search,
  Calendar,
  Users,
  Upload,
  ChevronRight,
  MoreHorizontal,
  Edit,
  Trash2,
  Eye
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { AddCampaignModal } from "@/components/modals/add-campaign-modal";
import { EditCampaignModal } from "@/components/modals/edit-campaign-modal";
import { DeleteConfirmationModal } from "@/components/modals/delete-confirmation-modal";
import { ViewDetailsModal } from "@/components/modals/view-details-modal";

const campaigns = [
  {
    id: 1,
    name: "Pilau Madness",
    status: "active",
    startDate: "2024-01-15",
    endDate: "2024-02-15",
    participants: 89234,
    submissions: 5643,
    prize: "KSH 50,000",
    description: "Show off your best Pilau recipes and win amazing prizes!"
  },
  {
    id: 2,
    name: "Air Fryer Week",
    status: "active",
    startDate: "2024-01-20",
    endDate: "2024-02-20",
    participants: 125432,
    submissions: 8921,
    prize: "Air Fryer + KSH 30,000",
    description: "Discover healthy and delicious air fryer recipes!"
  },
  {
    id: 3,
    name: "Nyama Choma Fest",
    status: "upcoming",
    startDate: "2024-02-01",
    endDate: "2024-03-01",
    participants: 45678,
    submissions: 0,
    prize: "KSH 100,000",
    description: "Celebrate the art of grilled meat with your best Nyama Choma!"
  },
  {
    id: 4,
    name: "Breakfast Champions",
    status: "completed",
    startDate: "2023-12-01",
    endDate: "2023-12-31",
    participants: 156789,
    submissions: 12345,
    prize: "KSH 75,000",
    description: "Start your day right with creative breakfast recipes!"
  }
];

export default function CampaignsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [filterStatus, setFilterStatus] = useState("all");
  
  // Modal states
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [isViewModalOpen, setIsViewModalOpen] = useState(false);
  const [selectedCampaign, setSelectedCampaign] = useState<any>(null);
  const [campaignToDelete, setCampaignToDelete] = useState<any>(null);

  const filteredCampaigns = campaigns.filter(campaign => {
    const matchesSearch = campaign.name.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesStatus = filterStatus === "all" || campaign.status === filterStatus;
    return matchesSearch && matchesStatus;
  });

  // Modal handlers
  const handleAddCampaign = (data: any) => {
    console.log("Adding new campaign:", data);
    // Here you would typically make an API call to create the campaign
    // For now, we'll just log it
  };

  const handleEditCampaign = (data: any) => {
    console.log("Updating campaign:", selectedCampaign?.id, data);
    // Here you would typically make an API call to update the campaign
  };

  const handleDeleteCampaign = () => {
    console.log("Deleting campaign:", campaignToDelete?.id);
    // Here you would typically make an API call to delete the campaign
    setCampaignToDelete(null);
  };

  const handleViewDetails = (campaign: any) => {
    setSelectedCampaign(campaign);
    setIsViewModalOpen(true);
  };

  const handleEdit = (campaign: any) => {
    setSelectedCampaign(campaign);
    setIsEditModalOpen(true);
  };

  const handleDelete = (campaign: any) => {
    setCampaignToDelete(campaign);
    setIsDeleteModalOpen(true);
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-gray-900">Campaigns</h1>
          <p className="mt-1 text-sm text-gray-500">
            Create and manage recipe campaigns
          </p>
        </div>
        <Button 
          className="bg-[#DC143C] hover:bg-[#C41230] text-white rounded-lg"
          onClick={() => setIsAddModalOpen(true)}
        >
          <Plus className="w-4 h-4 mr-2" />
          Create Campaign
        </Button>
      </div>

      {/* Filters */}
      <div className="flex items-center gap-4">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
          <input
            type="text"
            placeholder="Search campaigns..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="pl-10 pr-4 py-2 w-full rounded-lg border text-gray-700 border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#DC143C]/20 focus:border-[#DC143C]"
          />
        </div>
        <div className="flex gap-2">
          {["all", "active", "upcoming", "completed"].map((status) => (
            <button
              key={status}
              onClick={() => setFilterStatus(status)}
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-colors ${
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

      {/* Campaigns Grid */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {filteredCampaigns.map((campaign, index) => (
          <motion.div
            key={campaign.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05 }}
            className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-lg transition-shadow"
          >
            {/* Campaign Header */}
            <div className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900">
                    {campaign.name}
                  </h3>
                  <p className="text-sm text-gray-500 mt-1">
                    {campaign.description}
                  </p>
                </div>
                <div className="relative group">
                  <button className="p-1 hover:bg-gray-100 rounded">
                    <MoreHorizontal className="w-4 h-4 text-gray-400" />
                  </button>
                  <div className="absolute right-0 mt-1 w-48 bg-white rounded-lg shadow-lg border border-gray-200 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 z-10">
                    <button
                      onClick={() => handleViewDetails(campaign)}
                      className="flex items-center gap-2 w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 rounded-t-lg"
                    >
                      <Eye className="w-4 h-4" />
                      View Details
                    </button>
                    <button
                      onClick={() => handleEdit(campaign)}
                      className="flex items-center gap-2 w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
                    >
                      <Edit className="w-4 h-4" />
                      Edit Campaign
                    </button>
                    <button
                      onClick={() => handleDelete(campaign)}
                      className="flex items-center gap-2 w-full px-4 py-2 text-sm text-red-600 hover:bg-red-50 rounded-b-lg"
                    >
                      <Trash2 className="w-4 h-4" />
                      Delete Campaign
                    </button>
                  </div>
                </div>
              </div>

              {/* Status */}
              <div className="flex items-center gap-2 mb-4">
                <span className={`inline-flex items-center px-2 py-1 rounded-md text-xs font-medium ${
                  campaign.status === "active" 
                    ? "bg-green-100 text-green-700"
                    : campaign.status === "upcoming"
                    ? "bg-blue-100 text-blue-700"
                    : "bg-gray-100 text-gray-600"
                }`}>
                  {campaign.status}
                </span>
                <span className="text-xs text-gray-500">
                  {campaign.prize}
                </span>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-2 gap-4 mb-4">
                <div>
                  <div className="flex items-center gap-1 text-xs text-gray-500 mb-1">
                    <Users className="w-3 h-3" />
                    Participants
                  </div>
                  <div className="text-xl font-bold text-gray-900">
                    {campaign.participants.toLocaleString()}
                  </div>
                </div>
                <div>
                  <div className="flex items-center gap-1 text-xs text-gray-500 mb-1">
                    <Upload className="w-3 h-3" />
                    Submissions
                  </div>
                  <div className="text-xl font-bold text-gray-900">
                    {campaign.submissions.toLocaleString()}
                  </div>
                </div>
              </div>

              {/* Dates */}
              <div className="flex items-center gap-2 text-xs text-gray-500">
                <Calendar className="w-3 h-3" />
                {new Date(campaign.startDate).toLocaleDateString()} - {new Date(campaign.endDate).toLocaleDateString()}
              </div>
            </div>

            {/* Action */}
            <div className="px-6 py-3 bg-gray-50 border-t border-gray-200">
              <button 
                onClick={() => handleViewDetails(campaign)}
                className="text-sm font-medium text-[#DC143C] hover:text-[#C41230] flex items-center gap-1"
              >
                View Details
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Modals */}
      <AddCampaignModal
        open={isAddModalOpen}
        onOpenChange={setIsAddModalOpen}
        onSubmit={handleAddCampaign}
      />

      <EditCampaignModal
        open={isEditModalOpen}
        onOpenChange={setIsEditModalOpen}
        campaign={selectedCampaign}
        onSubmit={handleEditCampaign}
      />

      <DeleteConfirmationModal
        open={isDeleteModalOpen}
        onOpenChange={setIsDeleteModalOpen}
        onConfirm={handleDeleteCampaign}
        itemName={campaignToDelete?.name}
        title="Delete Campaign"
        description={`Are you sure you want to delete the campaign "${campaignToDelete?.name}"? This will permanently remove all campaign data including submissions and cannot be undone.`}
      />

      <ViewDetailsModal
        open={isViewModalOpen}
        onOpenChange={setIsViewModalOpen}
        campaign={selectedCampaign}
        onEdit={() => {
          setIsViewModalOpen(false);
          handleEdit(selectedCampaign);
        }}
        onDelete={() => {
          setIsViewModalOpen(false);
          handleDelete(selectedCampaign);
        }}
      />
    </div>
  );
}

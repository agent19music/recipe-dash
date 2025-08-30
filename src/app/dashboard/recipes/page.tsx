"use client";

import { motion } from "framer-motion";
import {
  MousePointerClick,
  Eye,
  Heart,
  Share2,
  Clock,
  TrendingUp,
  Star,
  ChevronRight
} from "lucide-react";

const topRecipes = [
  {
    id: 1,
    name: "Spicy Pilau Rice",
    category: "Main Course",
    clicks: 45234,
    views: 89234,
    likes: 12453,
    shares: 3421,
    rating: 4.8,
    cookTime: "45 mins",
    trend: "+23%"
  },
  {
    id: 2,
    name: "Air Fryer Chicken Wings",
    category: "Appetizer",
    clicks: 38921,
    views: 76543,
    likes: 10234,
    shares: 2876,
    rating: 4.9,
    cookTime: "25 mins",
    trend: "+18%"
  },
  {
    id: 3,
    name: "Ugali & Sukuma Wiki",
    category: "Traditional",
    clicks: 34567,
    views: 68234,
    likes: 9876,
    shares: 2543,
    rating: 4.7,
    cookTime: "30 mins",
    trend: "+15%"
  },
  {
    id: 4,
    name: "Coconut Fish Curry",
    category: "Seafood",
    clicks: 29345,
    views: 58234,
    likes: 8234,
    shares: 2123,
    rating: 4.9,
    cookTime: "35 mins",
    trend: "+12%"
  },
  {
    id: 5,
    name: "Chapati Rolls",
    category: "Snack",
    clicks: 27890,
    views: 54321,
    likes: 7654,
    shares: 1987,
    rating: 4.6,
    cookTime: "20 mins",
    trend: "+10%"
  }
];

const categories = [
  { name: "Main Course", recipes: 234, clicks: 123456 },
  { name: "Appetizer", recipes: 189, clicks: 98234 },
  { name: "Traditional", recipes: 167, clicks: 87345 },
  { name: "Seafood", recipes: 145, clicks: 76543 },
  { name: "Dessert", recipes: 134, clicks: 65432 },
  { name: "Snack", recipes: 123, clicks: 54321 }
];

export default function RecipesPage() {
  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900">Recipe Insights</h1>
        <p className="mt-1 text-sm text-gray-500">
          Track recipe performance and engagement
        </p>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-xl border border-gray-200">
          <div className="flex items-center justify-between mb-2">
            <MousePointerClick className="w-5 h-5 text-gray-400" />
            <span className="text-sm text-green-600 font-medium">+31.2%</span>
          </div>
          <div className="text-2xl font-bold text-gray-900">1.8M</div>
          <div className="text-sm text-gray-500">Total Clicks</div>
        </div>
        <div className="bg-white p-6 rounded-xl border border-gray-200">
          <div className="flex items-center justify-between mb-2">
            <Eye className="w-5 h-5 text-gray-400" />
            <span className="text-sm text-green-600 font-medium">+24.5%</span>
          </div>
          <div className="text-2xl font-bold text-gray-900">3.2M</div>
          <div className="text-sm text-gray-500">Recipe Views</div>
        </div>
        <div className="bg-white p-6 rounded-xl border border-gray-200">
          <div className="flex items-center justify-between mb-2">
            <Heart className="w-5 h-5 text-gray-400" />
            <span className="text-sm text-green-600 font-medium">+19.8%</span>
          </div>
          <div className="text-2xl font-bold text-gray-900">456K</div>
          <div className="text-sm text-gray-500">Total Likes</div>
        </div>
        <div className="bg-white p-6 rounded-xl border border-gray-200">
          <div className="flex items-center justify-between mb-2">
            <Share2 className="w-5 h-5 text-gray-400" />
            <span className="text-sm text-green-600 font-medium">+15.3%</span>
          </div>
          <div className="text-2xl font-bold text-gray-900">234K</div>
          <div className="text-sm text-gray-500">Total Shares</div>
        </div>
      </div>

      {/* Main Content */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Top Recipes Table */}
        <div className="lg:col-span-2">
          <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
            <div className="p-6 border-b border-gray-200">
              <h2 className="text-lg font-semibold text-gray-900">
                Top Performing Recipes
              </h2>
            </div>
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                    Recipe
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                    Engagement
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                    Rating
                  </th>
                  <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase">
                    Trend
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {topRecipes.map((recipe, index) => (
                  <motion.tr
                    key={recipe.id}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: index * 0.05 }}
                    className="hover:bg-gray-50"
                  >
                    <td className="px-6 py-4">
                      <div>
                        <div className="text-sm font-medium text-gray-900">
                          {recipe.name}
                        </div>
                        <div className="text-xs text-gray-500">
                          {recipe.category} • {recipe.cookTime}
                        </div>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-3 text-xs text-gray-500">
                        <span className="flex items-center gap-1">
                          <MousePointerClick className="w-3 h-3" />
                          {(recipe.clicks / 1000).toFixed(1)}K
                        </span>
                        <span className="flex items-center gap-1">
                          <Heart className="w-3 h-3" />
                          {(recipe.likes / 1000).toFixed(1)}K
                        </span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="flex items-center gap-1">
                        <Star className="w-4 h-4 text-yellow-500 fill-current" />
                        <span className="text-sm font-medium text-gray-900">
                          {recipe.rating}
                        </span>
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <span className="text-sm text-green-600 font-medium flex items-center gap-1">
                        <TrendingUp className="w-3 h-3" />
                        {recipe.trend}
                      </span>
                    </td>
                  </motion.tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Categories */}
        <div>
          <div className="bg-white rounded-xl border border-gray-200 p-6">
            <h2 className="text-lg font-semibold text-gray-900 mb-4">
              Recipe Categories
            </h2>
            <div className="space-y-3">
              {categories.map((category) => (
                <div
                  key={category.name}
                  className="flex items-center justify-between p-3 rounded-lg hover:bg-gray-50"
                >
                  <div>
                    <div className="text-sm font-medium text-gray-900">
                      {category.name}
                    </div>
                    <div className="text-xs text-gray-500">
                      {category.recipes} recipes
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-sm font-medium text-gray-900">
                      {(category.clicks / 1000).toFixed(0)}K
                    </div>
                    <div className="text-xs text-gray-500">clicks</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Performance Chart */}
      <div className="bg-white rounded-xl border border-gray-200 p-6">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-lg font-semibold text-gray-900">
            Recipe Performance
          </h2>
          <div className="flex gap-2">
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
          <p className="text-gray-400">Performance chart visualization</p>
        </div>
      </div>
    </div>
  );
}

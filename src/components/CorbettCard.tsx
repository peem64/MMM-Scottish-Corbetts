import React from 'react';
import { Mountain, MapPin, Clock, Star, Calendar, Route } from 'lucide-react';
import { CorbettDisplayProps } from '../types/corbett';
import { CorbettService } from '../services/corbettService';

export const CorbettCard: React.FC<CorbettDisplayProps> = ({ corbett, isLoading }) => {
  if (isLoading) {
    return (
      <div className="bg-gradient-to-br from-slate-800/90 to-slate-900/90 rounded-xl p-4 shadow-xl animate-pulse backdrop-blur-sm border border-slate-700/50">
        <div className="h-32 bg-slate-700/50 rounded-lg mb-3"></div>
        <div className="space-y-2">
          <div className="h-6 bg-slate-700/50 rounded w-3/4"></div>
          <div className="h-4 bg-slate-700/50 rounded w-1/2"></div>
          <div className="h-16 bg-slate-700/50 rounded"></div>
        </div>
      </div>
    );
  }

  const imagePath = CorbettService.getImagePath(corbett.image_filename);
  
  return (
    <div className="bg-gradient-to-br from-slate-800/90 to-slate-900/90 rounded-xl p-4 shadow-xl border border-slate-700/50 backdrop-blur-sm max-w-sm">
      {/* Header */}
      <div className="flex items-center justify-between mb-3">
        <div className="flex items-center space-x-2">
          <Mountain className="text-emerald-400 w-5 h-5" />
          <h1 className="text-lg font-bold text-white">Corbett</h1>
        </div>
        <div className="text-right">
          <div className="text-xs text-slate-400">Height</div>
          <div className="text-lg font-bold text-emerald-400">{corbett.height}m</div>
        </div>
      </div>

      {/* Image and Name */}
      <div className="relative overflow-hidden rounded-lg mb-4">
        <img 
          src={imagePath} 
          alt={corbett.name}
          className="w-full h-32 object-cover transition-transform duration-500 hover:scale-105"
          onError={(e) => {
            e.currentTarget.src = `https://images.pexels.com/photos/1001682/pexels-photo-1001682.jpeg?auto=compress&cs=tinysrgb&w=400&h=300&fit=crop`;
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
        <div className="absolute bottom-2 left-2 right-2">
          <h2 className="text-lg font-bold text-white mb-1 leading-tight">{corbett.name}</h2>
          <div className="flex items-center space-x-1 text-slate-200 text-xs">
            <MapPin className="w-3 h-3" />
            <span className="truncate">{corbett.location}, {corbett.region}</span>
          </div>
        </div>
      </div>

      {/* Compact Stats */}
      <div className="grid grid-cols-2 gap-2 mb-4">
        <div className="bg-slate-700/40 rounded-lg p-2 text-center">
          <div className="text-xs text-slate-400">Prominence</div>
          <div className="text-sm font-bold text-white">{corbett.prominence}m</div>
        </div>
        <div className="bg-slate-700/40 rounded-lg p-2 text-center">
          <div className="text-xs text-slate-400">Time</div>
          <div className="text-sm font-bold text-white">{corbett.estimated_time}</div>
        </div>
      </div>

      {/* Difficulty Rating */}
      <div className="bg-slate-700/30 rounded-lg p-3 mb-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Star className="w-4 h-4 text-slate-400" />
            <span className="text-sm text-slate-400">Difficulty</span>
          </div>
          <div className="flex items-center space-x-1">
            {[...Array(5)].map((_, i) => (
              <Star 
                key={i} 
                className={`w-3 h-3 ${i < corbett.difficulty_rating ? 'text-yellow-400 fill-current' : 'text-slate-600'}`} 
              />
            ))}
          </div>
        </div>
      </div>

      {/* Description */}
      <div className="bg-slate-700/30 rounded-lg p-3 mb-4">
        <h3 className="text-sm font-semibold text-white mb-2">Description</h3>
        <p className="text-xs text-slate-300 leading-relaxed line-clamp-4">
          {corbett.description.length > 150 
            ? corbett.description.substring(0, 150) + "..." 
            : corbett.description}
        </p>
      </div>

      {/* Popular Routes */}
      <div className="bg-slate-700/30 rounded-lg p-3 mb-4">
        <div className="flex items-center space-x-2 mb-2">
          <Route className="w-4 h-4 text-emerald-400" />
          <h3 className="text-sm font-semibold text-white">Routes</h3>
        </div>
        <div className="space-y-1">
          {corbett.popular_routes.slice(0, 3).map((route, index) => (
            <div key={index} className="flex items-start space-x-2">
              <div className="w-1.5 h-1.5 bg-emerald-400 rounded-full mt-1.5 flex-shrink-0"></div>
              <span className="text-xs text-slate-300 leading-tight">{route}</span>
            </div>
          ))}
          {corbett.popular_routes.length > 3 && (
            <div className="text-xs text-slate-400 italic">+{corbett.popular_routes.length - 3} more routes</div>
          )}
        </div>
      </div>

      {/* Best Seasons */}
      <div className="bg-slate-700/30 rounded-lg p-3 mb-4">
        <div className="flex items-center space-x-2 mb-2">
          <Calendar className="w-4 h-4 text-emerald-400" />
          <h3 className="text-sm font-semibold text-white">Best Seasons</h3>
        </div>
        <div className="flex flex-wrap gap-1">
          {corbett.best_seasons.map((season, index) => (
            <span 
              key={index}
              className="px-2 py-1 bg-emerald-500/20 text-emerald-300 rounded-full text-xs border border-emerald-500/30"
            >
              {season}
            </span>
          ))}
        </div>
      </div>

      {/* Additional Info */}
      <div className="bg-slate-700/30 rounded-lg p-3">
        <h3 className="text-sm font-semibold text-white mb-2">Info</h3>
        <div className="space-y-1 text-xs text-slate-300">
          <div><strong>Grid:</strong> {corbett.grid_reference}</div>
          <div><strong>Town:</strong> {corbett.nearest_town}</div>
          <div className="truncate"><strong>Parking:</strong> {corbett.parking_info}</div>
        </div>
      </div>
    </div>
  );
};
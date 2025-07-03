export interface Corbett {
  id: number;
  name: string;
  location: string;
  region: string;
  height: number;
  prominence: number;
  classification: string;
  estimated_time: string;
  description: string;
  difficulty_rating: number;
  popular_routes: string[];
  best_seasons: string[];
  grid_reference: string;
  nearest_town: string;
  parking_info: string;
  image_filename: string;
  created_at: string;
  updated_at: string;
}

export interface CorbettDisplayProps {
  corbett: Corbett;
  isLoading?: boolean;
}
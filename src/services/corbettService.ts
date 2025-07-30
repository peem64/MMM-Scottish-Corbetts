import { supabase } from '../lib/supabase';
import { Corbett } from '../types/corbett';

export class CorbettService {
  static async getAllCorbetts(): Promise<Corbett[]> {
    console.log('Fetching all corbetts from database...');
    const { data, error } = await supabase
      .from('corbetts')
      .select('*')
      .order('name');
    
    if (error) {
      console.error('Error fetching corbetts:', error);
      throw error;
    }
    
    console.log(`Found ${data?.length || 0} corbetts in database`);
    return data || [];
  }

  static async getCorbettById(id: number): Promise<Corbett | null> {
    const { data, error } = await supabase
      .from('corbetts')
      .select('*')
      .eq('id', id)
      .single();
    
    if (error) {
      console.error('Error fetching corbett:', error);
      return null;
    }
    
    return data;
  }

  static async getCurrentCorbett(): Promise<Corbett | null> {
    // Get current hour of the day (0-23)
    const currentHour = new Date().getHours();
    
    // Get all corbetts to determine which one to show
    const corbetts = await this.getAllCorbetts();
    
    if (corbetts.length === 0) {
      return null;
    }
    
    // Calculate which corbett to show based on current hour and day
    const now = new Date();
    const dayOfYear = Math.floor((now.getTime() - new Date(now.getFullYear(), 0, 0).getTime()) / (1000 * 60 * 60 * 24));
    const hourOfYear = (dayOfYear * 24) + currentHour;
    
    // Cycle through all corbetts
    const corbettIndex = hourOfYear % corbetts.length;
    
    return corbetts[corbettIndex];
  }

  static getImagePath(filename: string): string {
    return `/images/corbetts/${filename}`;
  }
}
/* 
 * Node Helper for MMM-SCH
 * Handles server-side operations for Scottish Corbetts data
 */

const NodeHelper = require("node_helper");
const { createClient } = require("@supabase/supabase-js");

module.exports = NodeHelper.create({
  start: function() {
    console.log("Starting node helper: " + this.name);
    this.supabase = null;
  },

  initSupabase: function(config) {
    if (!this.supabase && config.supabaseUrl && config.supabaseKey) {
      this.supabase = createClient(config.supabaseUrl, config.supabaseKey);
      console.log("Supabase client initialized");
    }
  },

  async getCurrentCorbett() {
    if (!this.supabase) {
      throw new Error("Supabase client not initialized");
    }

    try {
      // Get current hour of the day (0-23)
      const currentHour = new Date().getHours();
      
      // Get all corbetts to determine which one to show
      const { data: corbetts, error } = await this.supabase
        .from('corbetts')
        .select('*')
        .order('name');
      
      if (error) {
        throw error;
      }

      if (!corbetts || corbetts.length === 0) {
        return null;
      }
      
      // Calculate which corbett to show based on current hour and day
      const now = new Date();
      const dayOfYear = Math.floor((now.getTime() - new Date(now.getFullYear(), 0, 0).getTime()) / (1000 * 60 * 60 * 24));
      const hourOfYear = (dayOfYear * 24) + currentHour;
      
      // Cycle through all corbetts
      const corbettIndex = hourOfYear % corbetts.length;
      
      return corbetts[corbettIndex];
    } catch (error) {
      console.error("Error fetching current corbett:", error);
      throw error;
    }
  },

  socketNotificationReceived: function(notification, payload) {
    if (notification === "GET_CURRENT_CORBETT") {
      this.initSupabase(payload);
      
      this.getCurrentCorbett()
        .then(corbett => {
          this.sendSocketNotification("CORBETT_DATA", corbett);
        })
        .catch(error => {
          console.error("Error in getCurrentCorbett:", error);
          this.sendSocketNotification("CORBETT_ERROR", error.message);
        });
    }
  }
});
/* 
 * Module: MMM-SCH
 * Description: MagicMirror module displaying Scottish Corbetts
 * Version: 1.0.0
 * Author: MMM-SCH Team
 */

Module.register("MMM-SCH", {
  defaults: {
    updateInterval: 60 * 60 * 1000, // 1 hour
    animationSpeed: 1000,
    showDescription: true,
    showRoutes: true,
    showSeasons: true,
    maxDescriptionLength: 200,
    supabaseUrl: "",
    supabaseKey: "",
    imageDirectory: "modules/MMM-SCH/images/corbetts/"
  },

  start: function() {
    Log.info("Starting module: " + this.name);
    this.corbett = null;
    this.error = null;
    this.loaded = false;
    this.scheduleUpdate();
  },

  getDom: function() {
    const wrapper = document.createElement("div");
    wrapper.className = "mmm-sch-wrapper";

    if (this.error) {
      wrapper.innerHTML = `
        <div class="mmm-sch-error">
          <i class="fas fa-exclamation-triangle"></i>
          <div>Error loading corbett data</div>
        </div>
      `;
      return wrapper;
    }

    if (!this.loaded) {
      wrapper.innerHTML = `
        <div class="mmm-sch-loading">
          <i class="fas fa-mountain"></i>
          <div>Loading Scottish Corbetts...</div>
        </div>
      `;
      return wrapper;
    }

    if (!this.corbett) {
      wrapper.innerHTML = `
        <div class="mmm-sch-error">
          <div>No corbett data available</div>
        </div>
      `;
      return wrapper;
    }

    wrapper.innerHTML = this.getCorbettHTML();
    return wrapper;
  },

  getCorbettHTML: function() {
    const corbett = this.corbett;
    const imagePath = this.config.imageDirectory + corbett.image_filename;
    
    let description = corbett.description;
    if (this.config.maxDescriptionLength && description.length > this.config.maxDescriptionLength) {
      description = description.substring(0, this.config.maxDescriptionLength) + "...";
    }

    let routesHTML = "";
    if (this.config.showRoutes && corbett.popular_routes && corbett.popular_routes.length > 0) {
      const routesToShow = corbett.popular_routes.slice(0, 3);
      routesHTML = `
        <div class="mmm-sch-routes">
          <h4><i class="fas fa-route"></i> Popular Routes</h4>
          <ul>
            ${routesToShow.map(route => `<li>${route}</li>`).join("")}
          </ul>
          ${corbett.popular_routes.length > 3 ? `<div class="more-routes">+${corbett.popular_routes.length - 3} more routes</div>` : ''}
        </div>
      `;
    }

    let seasonsHTML = "";
    if (this.config.showSeasons && corbett.best_seasons && corbett.best_seasons.length > 0) {
      seasonsHTML = `
        <div class="mmm-sch-seasons">
          <h4><i class="fas fa-calendar"></i> Best Seasons</h4>
          <div class="season-tags">
            ${corbett.best_seasons.map(season => `<span class="season-tag">${season}</span>`).join("")}
          </div>
        </div>
      `;
    }

    return `
      <div class="mmm-sch-corbett">
        <div class="mmm-sch-header">
          <h2><i class="fas fa-mountain"></i> ${corbett.name}</h2>
          <div class="mmm-sch-height">${corbett.height}m</div>
        </div>
        
        <div class="mmm-sch-content">
          <div class="mmm-sch-image">
            <img src="${imagePath}" alt="${corbett.name}" onerror="this.src='https://images.pexels.com/photos/1001682/pexels-photo-1001682.jpeg?auto=compress&cs=tinysrgb&w=800&h=600&fit=crop'">
            <div class="mmm-sch-location">
              <i class="fas fa-map-marker-alt"></i>
              ${corbett.location}, ${corbett.region}
            </div>
          </div>
          
          <div class="mmm-sch-details">
            <div class="mmm-sch-stats">
              <div class="stat">
                <span class="label">Prominence</span>
                <span class="value">${corbett.prominence}m</span>
              </div>
              <div class="stat">
                <span class="label">Time</span>
                <span class="value">${corbett.estimated_time}</span>
              </div>
              <div class="stat">
                <span class="label">Difficulty</span>
                <span class="value">${"★".repeat(corbett.difficulty_rating)}${"☆".repeat(5 - corbett.difficulty_rating)}</span>
              </div>
            </div>
            
            ${this.config.showDescription ? `
              <div class="mmm-sch-description">
                <p>${description}</p>
              </div>
            ` : ""}
            
            ${routesHTML}
            ${seasonsHTML}
          </div>
        </div>
      </div>
    `;
  },

  getStyles: function() {
    return [
      "MMM-SCH.css",
      "font-awesome.css"
    ];
  },

  scheduleUpdate: function() {
    this.updateCorbett();
    setInterval(() => {
      this.updateCorbett();
    }, this.config.updateInterval);
  },

  updateCorbett: function() {
    this.sendSocketNotification("GET_CURRENT_CORBETT", this.config);
  },

  socketNotificationReceived: function(notification, payload) {
    if (notification === "CORBETT_DATA") {
      this.corbett = payload;
      this.error = null;
      this.loaded = true;
      this.updateDom(this.config.animationSpeed);
    } else if (notification === "CORBETT_ERROR") {
      this.error = payload;
      this.loaded = true;
      this.updateDom(this.config.animationSpeed);
    }
  }
});
function initMap() {
    
    const mapOptions = {
      center: { lat: 26.2515, lng: 72.9761 }, 
      zoom: 12,
      mapId: "3e6e9d00f8dfbcbb",
    };

   
    new google.maps.Map(document.getElementById("map"), mapOptions);
  }
  
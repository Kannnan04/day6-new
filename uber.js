

class UberCalculator {
    constructor(distanceInMiles, durationInMinutes) {
      this.distanceInMiles = distanceInMiles;
      this.durationInMinutes = durationInMinutes;
    }
  
    calculatePrice() {
        
      const baseFare = 5;  
      const ratePerMile = 2;  
      const ratePerMinute = 0.5;  
  
      const price = baseFare + (ratePerMile * this.distanceInMiles) + (ratePerMinute * this.durationInMinutes);
      return price;
    }
  }
  

  const distance = 10;  
  const duration = 20;  
  
  const uberCalculator = new UberCalculator(distance, duration);
  const totalPrice = uberCalculator.calculatePrice();
  
  console.log(`The estimated Uber price is $${totalPrice.toFixed(2)}`);
  
// Code your solution in this file!
const headquarters = 42;

// Function to calculate distance from HQ in blocks
function distanceFromHqInBlocks(block) {
  return Math.abs(block - headquarters);
}

// Function to calculate distance from HQ in feet
function distanceFromHqInFeet(block) {
  return distanceFromHqInBlocks(block) * 264;
}

// Function to calculate the distance traveled in feet
function distanceTravelledInFeet(start, destination) {
  return Math.abs(start - destination) * 264;
}

// Function to calculate the fare price
function calculatesFarePrice(start, destination) {
  const distance = distanceTravelledInFeet(start, destination);

  if (distance <= 400) {
    return 0; // First 400 feet are free
  } else if (distance > 400 && distance <= 2000) {
    return ((distance - 400) * 0.02); // 2 cents per foot after the first 400 feet
  } else if (distance > 2000 && distance <= 2500) {
    return 25; // Flat rate for distances over 2000 feet but within 2500 feet
  } else {
    return 'cannot travel that far'; // Distances over 2500 feet are not allowed
  }
}

// Exporting functions for testing
module.exports = {
  distanceFromHqInBlocks,
  distanceFromHqInFeet,
  distanceTravelledInFeet,
  calculatesFarePrice
};

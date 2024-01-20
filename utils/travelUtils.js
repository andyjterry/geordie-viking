// travelUtils.js

// Utility function to calculate the number of days between two dates
export function calculateDaysBetweenDates(startDate, endDate) {
  const start = new Date(startDate);
  const end = new Date(endDate);
  const timeDifference = end.getTime() - start.getTime();
  return Math.ceil(timeDifference / (1000 * 3600 * 24));
}

// Calculate various travel statistics based on the provided travel data
export function calculateTravelStatistics(travelData) {
  const soloTrips = travelData.travels.filter((trip) => trip.soloTravel);

  const totalSoloTrips = soloTrips.length;

  const totalTravelCost = soloTrips.reduce(
    (total, trip) => total + trip.flightCost,
    0
  );

  const totalAccommodationCost = soloTrips.reduce(
    (total, trip) => total + trip.accommodationCost,
    0
  );

  const totalCost = totalTravelCost + totalAccommodationCost;

  const totalDaysTraveled = soloTrips.reduce(
    (total, trip) =>
      total + calculateDaysBetweenDates(trip.arrivalDate, trip.departureDate),
    0
  );

  const totalCountriesVisited = new Set(soloTrips.map((trip) => trip.country))
    .size;

  const mostVisitedCountry = soloTrips.reduce((mostVisited, trip) => {
    const country = trip.country;
    const count = soloTrips.filter((t) => t.country === country).length;
    if (!mostVisited || count > mostVisited.count) {
      return { country, count };
    }
    return mostVisited;
  }, null);

  const shortestTrip = soloTrips.reduce((shortest, trip) => {
    const tripDuration = calculateDaysBetweenDates(
      trip.arrivalDate,
      trip.departureDate
    );
    if (!shortest || tripDuration < shortest.duration) {
      return { duration: tripDuration, trip };
    }
    return shortest;
  }, null);

  const longestTrip = soloTrips.reduce((longest, trip) => {
    const tripDuration = calculateDaysBetweenDates(
      trip.arrivalDate,
      trip.departureDate
    );
    if (!longest || tripDuration > longest.duration) {
      return { duration: tripDuration, trip };
    }
    return longest;
  }, null);

  const bestHotel = soloTrips.reduce((best, trip) => {
    if (
      !best ||
      (trip.accommodationRating && trip.accommodationRating > best.rating)
    ) {
      return { name: trip.accommodationName, rating: trip.accommodationRating };
    }
    return best;
  }, null);

  const worstHotel = soloTrips.reduce((worst, trip) => {
    if (
      !worst ||
      (trip.accommodationRating && trip.accommodationRating < worst.rating)
    ) {
      return { name: trip.accommodationName, rating: trip.accommodationRating };
    }
    return worst;
  }, null);

  const averageCostPerTrip =
    soloTrips.length > 0 ? totalCost / soloTrips.length : 0;

  const averageCostPerFlight =
    soloTrips.length > 0 ? totalTravelCost / soloTrips.length : 0;

  const averageCostPerAccommodation =
    soloTrips.length > 0 ? totalAccommodationCost / soloTrips.length : 0;

  return {
    totalSoloTrips,
    totalTravelCost,
    totalAccommodationCost,
    totalCost,
    totalDaysTraveled,
    totalCountriesVisited,
    mostVisitedCountry: mostVisitedCountry ? mostVisitedCountry.country : 'N/A',
    shortestTrip: shortestTrip ? shortestTrip.duration + ' days' : 'N/A',
    longestTrip: longestTrip ? longestTrip.duration + ' days' : 'N/A',
    bestHotel: bestHotel ? bestHotel.name : 'N/A',
    worstHotel: worstHotel ? worstHotel.name : 'N/A',
    averageCostPerTrip,
    averageCostPerFlight,
    averageCostPerAccommodation,
  };
}

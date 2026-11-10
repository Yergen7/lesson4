function taxiPrice(distance: number, pricePerKm: number): number {
  return distance * pricePerKm;
}

function minutesToHours(minutes: number): number {
  return minutes / 60;
}

console.log(taxiPrice(10, 120)); // 1200 тенге
console.log(minutesToHours(120)); // 2 часа

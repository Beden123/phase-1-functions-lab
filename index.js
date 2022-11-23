function distanceFromHqInBlocks(distance) {
  //returns the number of blocks given a value
  const hq = 42;
  if (distance < hq) {
    return hq - distance;
  } else {
    return distance - hq;
  }
}
distanceFromHqInBlocks(43);
function distanceFromHqInFeet(distance) {
  return distanceFromHqInBlocks(distance) * 264;
}
distanceFromHqInFeet();

function distanceTravelledInFeet(start, destination) {
  if (destination > start) {
    return (destination - start) * 264;
  } else if (start > destination) {
    return (start - destination) * 264;
  }
}
distanceTravelledInFeet();
function calculatesFarePrice(start, destination) {
  let distance = distanceTravelledInFeet(start, destination);
  if (distance <= 400) {
    return 0;
  } else if (distance > 400 && distance < 2000) {
    return (distance - 400) * 0.02;
  } else if (distance > 2000 && distance < 2500) {
    return 25;
  } else if (distance > 2500) {
    return "cannot travel that far";
  }
}
calculatesFarePrice(start, destination);

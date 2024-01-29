function distanceFromHqInBlocks(numOfBlocks) {
  let scuberHq = 42;

  if(numOfBlocks > scuberHq) {
    return numOfBlocks - scuberHq;
  } else if(numOfBlocks < scuberHq) {
    return scuberHq - numOfBlocks;
  }
}

function distanceFromHqInFeet(numOfBlocks) {
  let blockSize = 264;
  let blocksInFeet = distanceFromHqInBlocks(numOfBlocks);

  return blocksInFeet * blockSize;

}

function distanceTravelledInFeet(startBlock, endBlock) {
  let blockSize = 264;

  if(startBlock > endBlock) {
    return (startBlock - endBlock) * blockSize;
  } else {
    return (endBlock - startBlock) * blockSize;
  }
}

function calculatesFarePrice(startBlock, endBlock) {
  let pricePerFeet = distanceTravelledInFeet(startBlock, endBlock);

  let pricePerFeetFee = 0.02;
  let flatFare = 25;

  if(pricePerFeet <= 400) {
    return 0;
  } else if(pricePerFeet > 400 && pricePerFeet < 2000) {
    return (pricePerFeet - 400) * pricePerFeetFee;
  } else if(pricePerFeet > 2000 && pricePerFeet < 2500) {
    return flatFare;
  } else if(pricePerFeet > 2500) {
    return 'cannot travel that far';
  }

}

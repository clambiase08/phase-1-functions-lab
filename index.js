// Code your solution in this file!
const hqBlock = 42;
const footCalc = 264;

function distanceFromHqInBlocks(pickup) {
    const calc = hqBlock - pickup;
    return Math.abs(calc);
}

function distanceFromHqInFeet(pickup) {
    return (distanceFromHqInBlocks(pickup) * footCalc);
}

function distanceTravelledInFeet(start, destination) {
    return Math.abs((destination - start) * footCalc);
}


function calculatesFarePrice(start, destination) {
    const pricePerFoot = 0.02;
    const tripLength = distanceTravelledInFeet(start, destination);

    if (tripLength <= 400) {
        return 0;
    } else if (tripLength > 400 && tripLength < 2000) {
        return ((tripLength - 400) * pricePerFoot);
    } else if (tripLength >2000 && tripLength <2500) {
        return 25;
    } else if (tripLength >2500) {
        return 'cannot travel that far';
    }

}
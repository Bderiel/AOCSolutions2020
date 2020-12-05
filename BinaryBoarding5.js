function BinaryBoarding(boardingPasses) {
    let max = 0;
    for (let pass of boardingPasses) {
        let upperR = 127;
        let lowerR = 0;

        const rowCode = pass.slice(0, 7);
        let midR = Math.round((upperR + lowerR) / 2);
        for (let char of rowCode) {
            if (char === 'F') {
                upperR = midR - 1;
            }
            else if (char === 'B') {
                lowerR = midR;
            }
            midR = Math.round((upperR + lowerR) / 2);
        }

        let upperC = 8;
        let lowerC = 0;
        const colCode = pass.slice(7, pass.length);
        let midC = Math.round((upperC + lowerC) / 2);
        for (let char of colCode) {
            if (char === 'L') {
                upperC = midC - 1;
            }
            else if (char === 'R') {
                lowerC = midC;
            }
            midC = Math.round((upperC + lowerC) / 2);
        }

        max = Math.max(max, (midR * 8) + midC)
    }
    return max
}


function BinaryBoarding2(boardingPasses) {
    let seats = [];
    for (let i = 0; i < 128; i++) {
        seats[i] = new Array(8).fill('o');
    }

    for (let pass of boardingPasses) {
        let upperR = 127;
        let lowerR = 0;

        const rowCode = pass.slice(0, 7);
        let midR = Math.round((upperR + lowerR) / 2);
        for (let char of rowCode) {
            if (char === 'F') {
                upperR = midR - 1;
            }
            else if (char === 'B') {
                lowerR = midR;
            }
            midR = Math.round((upperR + lowerR) / 2);
        }

        let upperC = 7;
        let lowerC = 0;
        const colCode = pass.slice(7, pass.length);
        let midC = Math.round((upperC + lowerC) / 2);
        for (let char of colCode) {
            if (char === 'L') {
                upperC = midC - 1;
            }
            else if (char === 'R') {
                lowerC = midC;
            }
            midC = Math.round((upperC + lowerC) / 2);
        }

        const id = (midR * 8) + midC;
        if (midR >= 0 && midC >= 0) {
            seats[midR][midC] = id;
        }
    }
    return findEmptySeat(seats);
}

function findEmptySeat(seats) {
    seats = seats.slice(1);
    for (let i = 0; i < seats.length; i++) {
        for (let j = 0; j < seats[i].length; j++) {
            if (seats[i][j] === 'o') return seats[i][j - 1] + 1;
        }
    }
}
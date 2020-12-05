function twoSum2020(input) {
    input.sort((a, b) => a - b);
    let start = 0;
    let end = input.length - 1;

    while (start < end) {
        const sum = input[start] + input[end];
        if (sum === 2020) {
            return input[start] * input[end];
        }
        if (sum > 2020) {
            end--;
        } else {
            start++;
        }
    }
}




function threeSum2020(input) {
    input.sort((a, b) => a - b);
    for (let i = 0; i < input.length; i++) {
        let start = 0;
        let end = input.length - 1;
        while (start < end) {
            const sum = input[start] + input[end] + input[i];
            if (sum === 2020) {
                return input[start] * input[end] * input[i]
            }
            if (sum > 2020) {
                end--;
            } else {
                start++;
            }
        }
    }


}
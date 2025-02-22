const Add = (numbers) => {
    if (numbers == "0") return 0;

    let splitQuote = /,|\n/

    let nums = numbers.split(splitQuote).map(Number)
    return nums.reduce((sum, num) => sum + num, 0);
}

export default Add
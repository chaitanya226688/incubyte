const Add = (numbers) => {
    if (numbers == "0") return 0;

    let splitQuote = /,|\n/

    if (numbers.startsWith("//")) {
        const items = numbers.split("\n");
        splitQuote = new RegExp(items[0][2])
        numbers = items[1]
    }

    let nums = numbers.split(splitQuote).map(Number)
    return nums.reduce((sum, num) => sum + num, 0);
}

export default Add
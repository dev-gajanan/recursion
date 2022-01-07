function sayDigits(n, arr) {
    //base case
    if(parseInt(n) === 0)
        return;

    //processing
    let digit = parseInt(n) % 10;
    n = parseInt(n) / 10;

    //recursive call
    sayDigits(n, arr);

    console.log(arr[digit]); //print data
}

function main() {
    const arr = ["Zero", "One", "Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine"];
    const n = 123;
    sayDigits(n, arr);
}

main();
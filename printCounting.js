function printNumber(n) {
    if(n === 0)
        return;
    console.log(n);
    printNumber(n-1);
}

function main() {
    const n = 5;
    printNumber(n);
    return 0;
}

main();
function power(n) {
    if(n === 0) 
        return 1;

    return 2 * power(n-1);
}

function main() {
    const n = 6;
    const ans = power(n);
    console.log(ans);
    return 0;
}

main();
function factorial(n) {
    if(n === 0) 
        return 1;
    
    return n * factorial(n-1);
}

function main() {
    const n = 6;

    const ans = factorial(n);
    console.log(ans);
    return 0;
}

main();
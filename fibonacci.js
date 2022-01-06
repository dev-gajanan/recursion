function fibo(n) {
    //base case
    if(n === 0) 
        return 0;
    
    if(n === 1) 
        return 1;
    
    //recursive relation
    return fibo(n-1) + fibo(n-2);
}

function main() {
    const n = 10;
    const ans = fibo(n);
    console.log(ans);
    return 0;
}

main();
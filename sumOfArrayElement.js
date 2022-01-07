//Sum of Array Elements Problems

function sumOfArrayElement(arr) {
    let sum = 0;
    //Base case
    if(arr.length === 0) 
        return 0;

    if(arr.length === 1)
        return arr[0];
        
    sum = arr[0] + sumOfArrayElement(arr.slice(1));
    return sum;
}

function main() {
    const arr = [3, 2, 5, 1, 6, 12];
    const ans = sumOfArrayElement(arr);
    console.log("Sum of Array Element is:", ans);
}

main();
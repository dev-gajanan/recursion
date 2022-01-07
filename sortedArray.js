//Sorted array problems
function isSorted(arr, size) {
    //base case
    if(size === 0 || size === 1) 
        return true;
        
    if(arr[size - 1] < arr[size - 2]) {
        return false;
    } else {
        return isSorted(arr, size - 1);
    }
        
}

function main() {
    const arr = [2, 4, 6, 9, 9];
    const size = 5;

    const ans = isSorted(arr, size);
    if(ans) {
        console.log("Array is sorted");
    } else {
        console.log("Array is not sorted");
    }
}

main();
//Element search problem using binary search 
// The time complexities 
    // - base case: 0(1)
    // - average case and wrost case: 0(log n)

// Space complexity is 0(1)
function binarySearch(arr, low, high, key) {
    //base case

    //element not found
    if(low > high) {
        return -1;
    }

    let mid = low + (high-low)/2;

    //element found
    if(arr[mid] === key) {
        return mid //return the index of found element
    }

    if(arr[mid] < key) {
        return binarySearch(arr, mid+1, high, key);
    } else {
        return binarySearch(arr, low, mid-1, key);
    }
}

function main() {

    const arr = [2, 4, 6, 10, 14, 16];
    const size = arr.length;
    const key = 14;

    const ans = binarySearch(arr, 0, size, key);
    console.log("Element found in index:", ans);

    return 0;
}

main()
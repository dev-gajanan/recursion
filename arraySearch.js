//Array Linear Search Problem
//Find the element in a given array

function search(arr, size, k){
    if(size === 0) 
        return false;
    if(arr[0] == k) {
        return true;
    } else {
        return search(arr.slice(1), size - 1, k);
    }
}

function main() {
    const arr = [2, 4, 3, 6, 9];
    const size = arr.length;
    const key = 3;

    const ans = search(arr, size, key);
    if(ans) {
        console.log("Element found");
    } else {
        console.log("Element not found");
    }

    return 0;
}

main();
function partition(arr, s, e) {

    let pivot = arr[s];
    let cnt = 0;

    for(let i = s+1; i <= e; i++) {
        if(arr[i] <= pivot) {
            cnt++;
        }
    }

    let pivotIndex = s + cnt;
    [arr[pivotIndex], arr[s]] = [arr[s], arr[pivotIndex]];

    //handle left and right part
    let i = s;
    let j = e;
    while(i < pivotIndex && j > pivotIndex) {
        while(arr[i] < pivot) {
            i++;
        }
        while(arr[j] > pivot) {
            j--;
        }
        if(i < pivotIndex && j > pivotIndex) {
            [arr[i], arr[j]] = [arr[j], arr[i]];
        }
    }

    return pivotIndex;

}

function quickSort(arr, s, e) {

    //base case
    if(s >= e) {
        return;
    }

    //make partition
    let p = partition(arr, s, e);
    //sort left part
    quickSort(arr, s, p-1);
    //sort right part
    quickSort(arr, p+1, e);

}

function main() {

    const arr = [4, 1, 3, 2, 5];
    console.log("Original Array:", arr);
    const size = arr.length;
    quickSort(arr, 0, size -1);

    for(let i = 0; i < size; i++) {
        console.log(arr[i]);
    }

    return 0;
}

main();
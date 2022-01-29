function merge(arr, s, m, e) {

    let len1 = m - s + 1;
    let len2 = e - m;

    //create two array
    let first = new Array(len1);
    let second = new Array(len2);

    //copy values to created arrays
    let mainArrayIndex = s;
    for(let i = 0; i < len1; i++) {
        first[i] = arr[mainArrayIndex++];
    }

    mainArrayIndex = m + 1;
    for(let i = 0; i < len2; i++) {
        second[i] = arr[mainArrayIndex++];
    }

    //merge 2 sorted array
    let index1 = 0;
    let index2 = 0;
    mainArrayIndex = s;

    while(index1 < len1 && index2 < len2) {
        if(first[index1] < second[index2]) {
            arr[mainArrayIndex++] = first[index1++];
        } else {
            arr[mainArrayIndex++] = second[index2++];
        }
    }

    while(index1 < len1) {
        arr[mainArrayIndex++] = first[index1++];
    }

    while(index2 < len2) {
        arr[mainArrayIndex++] = second[index2++];
    }

    //relaese memory ==> This is not needed as JS uses garbage collection so it free the used data automatically
    // delete first;
    // delete second;

}

function mergeSort(arr, s, e) {
    
    //base case
    if(s >= e) {
        return;
    }

    let mid = s + parseInt((e-s)/2);
    
    //sort  left part
    mergeSort(arr, s, mid);

    //sort right part
    mergeSort(arr, mid+1, e);
    
    //merge tow array
    merge(arr, s, mid, e);

}

function main() {

    const arr = [12, 11, 13, 5, 6, 7, 1, 100, 23, 87, 78, 98, 2];
    const size = arr.length;

    mergeSort(arr, 0, size - 1);

    //print the sorted array
    for(let i = 0; i < size; i++) {
        console.log(arr[i], " ");
    }

    return 0;

}

main();
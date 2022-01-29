//Reverse String Problem

//Using built in function
function reverseUsingBuiltInMetod(str) {
    return str.split("").reverse().join("");
}

//Usingloop
function reverseUsingLoop(str) {
    let newStr = "";
    for(let i = str.length - 1; i >= 0; i--) {
        newStr += str[i];
    }
    return newStr;
}

//Using recursion
function reverseString(str) {
    //base case
    if(str == "") {
        return "";
    }
    //console.log("Substr", str.substr(1));
    //console.log("Char At", str.charAt(0));
    
    //recursive call
    return reverseString(str.substr(1)) + str.charAt(0);
}

function main() {
    const name = "Gajanan Mallik";
    const ans = reverseString(name);
    console.log("Reverse of", name , "is", ans);

    return 0;
}

main();
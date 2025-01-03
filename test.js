async function sleep10() {
    setTimeout(() => {
        console.log("5 sec later");
    }, 5000); // Wait for 5 seconds
}

async function sleep3() {
    setTimeout(() => {
        console.log("3 sec later");
    }, 3000); // Wait for 3 seconds
}

sleep10();
sleep3();

nums= [];
for(i= 0; i < 10; i++){
    nums.push(i);
}

numbers = nums.map(num => num*num);
console.log("numbers: ", numbers);



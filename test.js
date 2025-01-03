function sleep10() {
    setTimeout(() => {
        console.log("5 sec later");
    }, 5000); // Wait for 5 seconds
}

function sleep3() {
    setTimeout(() => {
        console.log("3 sec later");
    }, 3000); // Wait for 3 seconds
}

sleep10();
sleep3();

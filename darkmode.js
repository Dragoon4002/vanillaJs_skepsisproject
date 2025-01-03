nums= [];
for(i= 0; i < 10; i++){
    nums.push(i);
}

numbers = nums.map(num => num*num);
console.log("numbers: ", numbers);

const button = document.getElementById('flip'); //getting the button element
button.addEventListener('click', () => {
    button.innerText = (document.body.classList[1] == "dark")? "Dark Mode Off" : "Dark Mode On";
    document.body.classList.toggle('dark');
  });
// {element}.addEventListener({eventlisten}, {function});

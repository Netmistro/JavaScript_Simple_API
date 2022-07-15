/* 
Code DOG API
Credit to Clever Programmer
Created by Arnold Bradshaw
15th July, 2022
*/

// Constants declared here
// API URL declared below
// https://dog.ceo/api/breeds/image/random
// Documentation below
// https://dog.ceo/dog-api/documentation/random

const randomDog = document.querySelector('.random-dog');
const dogImage = document.querySelector('.dogImage');
const errorMessage = document.querySelector('.error-message');

dogImage.style.visibility = 'hidden';

randomDog.addEventListener('click', () => {
    fetch('https://dog.ceo/api/breeds/image/random')
        .then(Response => Response.json())
        .then(json => {
            if (json.response = "success") {
                dogImage.style.visibility = 'visible';
                dogImage.src = json.message;
                console.log(json.message);
            } else {
                errorMessage.innerText = "Couldn't Load An Image, Try Again!";
                console.log(json.status);
            }
        });
});

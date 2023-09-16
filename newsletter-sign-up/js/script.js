'use strict';

//subscribe page variables
const subscribeContainer = document.querySelector('[data-subscribe-container]');
const form = document.querySelector('[data-form]');
const input = document.querySelector('[data-subscribe-input]');
const subscribeButton = document.querySelector('[data-subscribe-button]');

//subiscribed success page variables
const subscribedContainer = document.querySelector('[data-subscribed-container]');
const homePageButton = document.querySelector('[data-home-page-button]');

function invalidInputMessage() {
    const errorMessage = document.querySelector('.error-message');

    if (input.checkValidity) {
        errorMessage.style.visibility = 'visible';
    } else {
        
    }
}


function sendSubsciptionForm(element) {

    element.preventDefault()

    if (form.checkValidity) {
        subscribeContainer.style.display = 'none';
        subscribedContainer.style.display = 'block';

        getInputValue();
    }
}

function backToHomePage() {

    subscribeContainer.style.display = 'block';
    subscribedContainer.style.display = 'none';
    input.value = '';
}

function getInputValue() {
    const subscribedEmailInfo = document.querySelector('[data-subscribed-email]');

    subscribedEmailInfo.innerHTML += input.value;
}

form.addEventListener('submit', sendSubsciptionForm);
homePageButton.addEventListener('click', backToHomePage);
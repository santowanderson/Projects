'use strict';

const subscriptionPage = document.querySelector('.subscription-container');
const successSubscriptionPage = document.querySelector('.subscribed-container');
const form = document.querySelector('.form-wrapper');
const dismissButton = document.querySelector('.home-page-button');
const errorMessage = document.querySelector('.error-message');
const input = document.querySelector('.subscribe-input');


function switchPage() {
    subscriptionPage.classList.toggle('hidden');
    successSubscriptionPage.classList.toggle('hidden');
}

function showSubscribedEmail() {
    const inputValue = input.value;
    let subscribedEmailField = document.querySelector('[data-subscribed-email]');

    subscribedEmailField.textContent = inputValue;
}


form.addEventListener('submit', function(element) {
    element.preventDefault();

    switchPage();
    showSubscribedEmail();
})


dismissButton.addEventListener('click', function() {

    input.value = '';
    switchPage();
})
'use strict';

const subscriptionPage = document.querySelector('.subscription-container');
const successSubscriptionPage = document.querySelector('.subscribed-container');
const form = document.querySelector('[data-form]');
const dismissButton = document.querySelector('.home-page-button');


function switchPage() {
    subscriptionPage.classList.toggle('hidden');
    successSubscriptionPage.classList.toggle('hidden');
}

form.addEventListener('submit', function(element) {
    element.preventDefault();

    switchPage();
})

dismissButton.addEventListener('click', function() {
    const input = document.querySelector('.subscribe-input');

    input.value = '';
    switchPage();
})
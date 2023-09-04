
let select = document.querySelector('.selected'),
selectValue = document.getElementById('selected-value'),
optionsViewButton = document.getElementById('options-view-button'),
inputsOptions = document.querySelectorAll('.option input');

inputsOptions.forEach(input => {
    input.addEventListener('click', event => {
        selectValue.textContent = input.dataset.label;

        const isMouseOrTouch = 
        event.pointerType == "mouse" ||

        isMouseOrTouch && optionsViewButton.click()
    })
})

window.addEventListener('keydown', e => {
    if (select.classList.contains('open')) return

    if (e.key == 'Escape' || e.key == ' ') {
        optionsViewButton.click();
    }
})

optionsViewButton.addEventListener('input', () => {
    select.classList.toggle('open')

    if (select.classList.contains('open')) return

    const input =
    document.querySelector('.option input:checked') ||
    document.querySelector('.option input');

    input.focus()
})
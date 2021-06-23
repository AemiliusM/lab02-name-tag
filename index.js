
const nameTag = document.getElementById('name-tag')
console.log(nameTag)

const nameSection = document.getElementById('name-section');
const bottomSection = document.getElementById('bottom-section');
const topSection = document.getElementById('top-section');
const submitButton = document.getElementById('submit-button');
const inputField = document.getElementById('input-field');
const pronounfield = document.getElementById('pro-nouns');
const colorfield = document.getElementById('color-field');
const pronounspan = document.getElementById('Pronouns');


submitButton.addEventListener('click', ()=>{
    topSection.style.backgroundColor = colorfield.value;
    bottomSection.style.backgroundColor = colorfield.value;
    Name.textContent = inputField.value.toUpperCase();
    pronounspan.textContent = pronounfield.value;
});




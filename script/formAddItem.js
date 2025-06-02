document.documentElement.style.overflow = 'hidden';
document.body.style.overflow = 'hidden';

const form = document.getElementById('addItemForm');
const nameInput = form.querySelector('.name-input');
const categoryInput = form.querySelector('.category-input');
const button = form.querySelector('.add-product');

function checkFields() {
    button.disabled = !(nameInput.value.trim() && categoryInput.value);
}

nameInput.addEventListener('input', checkFields);
categoryInput.addEventListener('change', checkFields);

form.querySelector('.add-product-frame').addEventListener('click', function(e) {
    if (!button.disabled) button.click();
});

checkFields();
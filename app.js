document.getElementById('add-item-btn').addEventListener('click', function () {
    const input = document.getElementById('new-item-input');
    const list = document.getElementById('items-list');

    if (input.value.trim()) {
        const newItem = document.createElement('li');
        newItem.textContent = input.value;
        list.appendChild(newItem);
        input.value = '';
    }
});
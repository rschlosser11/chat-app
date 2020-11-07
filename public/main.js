const socket = io();

const list = document.getElementById('messages');
let input = document.getElementById('m');

document.addEventListener('submit', e => {
    e.preventDefault();
    let value = input.value;
    socket.emit('chat', value);
    input.value = '';
});

const addMessage = (text) => {
    let li = document.createElement("li");
    li.innerText = text;
    list.appendChild(li)
};

socket.on('chat', function (text) {
    addMessage(text);
});

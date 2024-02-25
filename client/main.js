// const socket = io.connect('http://192.168.1.128:6677', {'forceNew': true})
const socket = io();
// this will emit the event to all connected sockets
// socket.emit('hello', 1, '2', { 3: '4', 5: Uint8Array.from([6]) });

const form = document.getElementById('form');
const input = document.getElementById('input');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    if (input.value) {
        socket.emit('chat message', input.value);
        input.value = '';
    }
});
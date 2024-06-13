const btn1 = document.getElementById('btn1');
const btn2 = document.getElementById('btn2');
const btn3 = document.getElementById('btn3');
const btn4 = document.getElementById('btn4');
const btn5 = document.getElementById('btn5');
const btn6 = document.getElementById('btn6');
const contenido1 = document.getElementById('contenido1');
const contenido2 = document.getElementById('contenido2');
const contenido3 = document.getElementById('contenido3');
const contenido4 = document.getElementById('contenido4');
const contenido5 = document.getElementById('contenido5');
const contenido6 = document.getElementById('contenido6');

btn1.addEventListener('click', function() {
    contenido6.style.display = 'none';
    contenido5.style.display = 'none';
    contenido4.style.display = 'none';
    contenido3.style.display = 'none';
    contenido2.style.display = 'none';
    contenido1.style.display = 'flex';
});

btn2.addEventListener('click', function() {
    contenido6.style.display = 'none';
    contenido5.style.display = 'none';
    contenido4.style.display = 'none';
    contenido3.style.display = 'none';
    contenido2.style.display = 'flex';
    contenido1.style.display = 'none';
});

btn3.addEventListener('click', function() {
    contenido6.style.display = 'none';
    contenido5.style.display = 'none';
    contenido4.style.display = 'none';
    contenido3.style.display = 'flex';
    contenido2.style.display = 'none';
    contenido1.style.display = 'none';
});

btn4.addEventListener('click', function() {
    contenido6.style.display = 'none';
    contenido5.style.display = 'none';
    contenido4.style.display = 'flex';
    contenido3.style.display = 'none';
    contenido2.style.display = 'none';
    contenido1.style.display = 'none';
});

btn5.addEventListener('click', function() {
    contenido6.style.display = 'none';
    contenido5.style.display = 'flex';
    contenido4.style.display = 'none';
    contenido3.style.display = 'none';
    contenido2.style.display = 'none';
    contenido1.style.display = 'none';
});

btn6.addEventListener('click', function() {
    contenido6.style.display = 'flex';
    contenido5.style.display = 'none';
    contenido4.style.display = 'none';
    contenido3.style.display = 'none';
    contenido2.style.display = 'none';
    contenido1.style.display = 'none';
});
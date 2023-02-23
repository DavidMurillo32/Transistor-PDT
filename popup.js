var btnAbrirPopuo= document.getElementById('btn-abrir-popup'),
    overlay=document.getElementById('overlay'),
    popup=document.getElementById('popup'),
    btnCerrarPopuo=document.getElementById('btn-cerrar-popup');

btnAbrirPopuo.addEventListener('click', function(){
    overlay.classList.add('active');
    popup.classList.add('active');
});

btnCerrarPopuo.addEventListener('click', function(){
    overlay.classList.remove('active');
    popup.classList.remove('active');
});


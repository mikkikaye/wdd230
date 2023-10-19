var dismissibles = Array.prototype.slice.call(document.querySelectorAll('[data-component = "dismissible-item"]'));
console.log(dismissibles);
if (dismissibles.length) {
    for (var i = 0; i < dismissibles.length; i++) {
        var type = dismissibles[i].getAttribute('data-type'),
            value = dismissibles[i].getAttribute("data-value");
        new dismissibleItem(dismissibles[i], type, value);
        console.log(dismissibleItem);
    }
}

function dismissibleItem(el, type, value) {
    var html = '<span>' + value + '<button-type = "button" class = "close">❌</button></span>';

    el.classList.add('dismissible', 'dismissible-' + type);
    el.innerHTML = html;
    console.log(el);
    var closeBtn = el.querySelector('.close');
    closeBtn.addEventListener('click', function() {
        el.style.display = 'none';
        console.log(closeBtn);
    });
}

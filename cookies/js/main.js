dragElement(document.getElementById('cookies'));

function dragElement(obj_drag) {
    let pos1 = 0,
        pos2 = 0,
        pos3 = 0,
        pos4 = 0;
    if (document.getElementById(obj_drag.id + 'body')) {
        document.getElementById(obj_drag.id + 'body').onmousedown = dragMouseDown;
    } else {
        obj_drag.onmousedown = dragMouseDown;
    }


    function dragMouseDown(e) {
        e = e || window.event;
        e.preventDefault();
        pos3 = e.clientX;
        pos4 = e.clientY;
        document.onmouseup = closeDragElement;
        document.onmousemove = elementDrag;
    }

    function elementDrag(e) {
        e = e || window.event;
        e.preventDefault();
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        obj_drag.style.top = (obj_drag.offsetTop - pos2) + 'px';
        obj_drag.style.left = (obj_drag.offsetLeft - pos1) + 'px';
    }

    function closeDragElement() {
        document.onmouseup = null;
        document.onmousemove = null;
    }
}
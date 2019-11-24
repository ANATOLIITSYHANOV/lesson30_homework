/*Создать HTML-страницу для отображения/редактирования текста.
 При открытии страницы текст отображается с помощью тега div. При нажатии Ctrl + E,
  вместо div появляется textarea с тем же текстом,
 который теперь можно редактировать. При нажатии Ctrl + ,
  вместо textarea появляется div с уже измененным текстом.
 Не забудьте выключить поведение по умолчанию для этих сочетаний клавиш.*/

  
let area = null;
let div1 = document.getElementById('div');

document.onkeydown = (e) => {
    if (e.ctrlKey && e.key == 'e') {
        e.preventDefault();
        editStart();
    }
};

editStart = () => {
    area = document.createElement('textarea');
    area.className = 'box';
    area.value = div1.innerHTML;
    area.onkeydown = () => {
        if (event.ctrlKey && event.key == '+') {
            event.preventDefault();
            editEnd();
        }
    };
    div1.replaceWith(area);
    area.focus();
}

 editEnd = () => {
    div1.innerHTML = area.value;
    area.replaceWith(div1);
}




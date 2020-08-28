(function(d){	const l = d['ru'] = d['ru'] || {};	l.dictionary=Object.assign(		l.dictionary||{},		{"%0 of %1":"%0 из %1","Align center":"Выравнивание по центру","Align left":"Выравнивание по левому краю","Align right":"Выравнивание по правому краю",Anonymous:"Аноним","Are you sure?":"Вы уверены?",Big:"Крупный","Block quote":"Цитата","Blue marker":"Выделение синим маркером",Bold:"Жирный","Bulleted List":"Маркированный список",Cancel:"Отмена","Cannot upload file:":"Невозможно загрузить файл","Centered image":"Выравнивание по центру","Change image text alternative":"Редактировать альтернативный текст","Choose heading":"Выбор стиля",Column:"Столбец",Comment:"Комментарий","Comment editor":"Редактор комментариев","Could not insert image at the current position.":"Нельзя вставить изображение на текущую позицию.","Could not obtain resized image URL.":"Не удалось получить URL с измененным размером изображения.",Default:"По умолчанию","Delete column":"Удалить столбец","Delete comment thread?":"Удалить ветку комментариев?","Delete comment?":"Удалить комментарий?","Delete row":"Удалить строку",Downloadable:"Загружаемые","Dropdown toolbar":"Выпадающая панель инструментов",Edit:"Редактировать","Edit link":"Редактировать ссылку","Editor toolbar":"Панель инструментов редактора","Enter image caption":"Подпись к изображению","Font Family":"Семейство шрифтов","Font Size":"Размер шрифта","Full size image":"Оригинальный размер изображения","Green marker":"Выделение зелёным маркером","Green pen":"Зеленый цвет текста","Header column":"Столбец заголовков","Header row":"Строка заголовков",Heading:"Стиль","Heading 1":"Заголовок 1","Heading 2":"Заголовок 2","Heading 3":"Заголовок 3","Heading 4":"Заголовок 4","Heading 5":"Заголовок 5","Heading 6":"Заголовок 6",Highlight:"Выделить",Huge:"Очень крупный","Image resize list":"Список размеров","Image toolbar":"Панель инструментов изображения","image widget":"Виджет изображений",Insert:"","Insert column left":"Вставить столбец слева","Insert column right":"Вставить столбец справа","Insert image":"Вставить изображение","Insert image or file":"Вставьте изображение или файл","Insert image via URL":"","Insert media":"Вставить медиа","Insert paragraph after block":"Вставить параграф после блока","Insert paragraph before block":"Вставить параграф перед блоком","Insert row above":"Вставить строку выше","Insert row below":"Вставить строку ниже","Insert table":"Вставить таблицу","Inserting image failed":"Вставка изображения не удалась",Italic:"Курсив",Justify:"Выравнивание по ширине","Left aligned image":"Выравнивание по левому краю",Link:"Ссылка","Link URL":"Ссылка URL","Media URL":"URL медиа","media widget":"медиа-виджет","Merge cell down":"Объединить с ячейкой снизу","Merge cell left":"Объединить с ячейкой слева","Merge cell right":"Объединить с ячейкой справа","Merge cell up":"Объединить с ячейкой сверху","Merge cells":"Объединить ячейки",Next:"Следующий",No:"Нет",NUMBER_OF_COMMENTS:["%0 Комментарий","%0 Комментариев","%0 Комментариев","%0 Комментария"],"Numbered List":"Нумерованный список","Open in a new tab":"Открыть в новой вкладке","Open link in new tab":"Открыть ссылку в новой вкладке",Original:"Оригинальный",Paragraph:"Параграф","Paste the image source URL.":"","Paste the media URL in the input.":"Вставьте URL медиа в поле ввода.",PENDING_ACTION_COMMENT_THREAD:"Изменения в ветке комментариев не сохранены.","Pink marker":"Выделение розовым маркером",Previous:"Предыдущий","Red pen":"Красный цвет текста",Redo:"Повторить",Remove:"Удалить","Remove Format":"Убрать форматирование","Remove highlight":"Убрать выделение","Reply...":"Ответ...","Resize image":"Изменить размер изображения","Resize image to %0":"Изменить размер изображения до %0","Resize image to the original size":"Вернуть размер изображения к оригинальному","Rich Text Editor":"Редактор","Rich Text Editor, %0":"Редактор, %0","Right aligned image":"Выравнивание по правому краю",Row:"Строка",Save:"Сохранить","Select all":"Выбрать все","Select column":"Выбрать столбец","Select row":"Выбрать строку","Selecting resized image failed":"Выбор изображения с измененным размером не удался","Show more items":"Другие инструменты","Side image":"Боковое изображение",Small:"Мелкий","Split cell horizontally":"Разделить ячейку горизонтально","Split cell vertically":"Разделить ячейку вертикально",Strikethrough:"Зачеркнутый",Submit:"Отправить","Table toolbar":"Панель инструментов таблицы","Text alignment":"Выравнивание текста","Text alignment toolbar":"Выравнивание","Text alternative":"Альтернативный текст","Text highlight toolbar":"Панель инструментов выделения текста","The URL must not be empty.":"URL не должен быть пустым.","This link has no URL":"Для этой ссылки не установлен адрес URL","This media URL is not supported.":"Этот URL медиа не поддерживается.",Tiny:"Очень мелкий","Tip: Paste the URL into the content to embed faster.":"Подсказка: Вставьте URL в контент для быстрого включения.",TOO_LONG_COMMENT_ALERT:"Комментарий слишком длинный. Ваш комментарий состоит из %0 символов, тогда как предел %1 символов.",Underline:"Подчеркнутый",Undo:"Отменить",Unlink:"Убрать ссылку",Update:"","Upload failed":"Загрузка не выполнена","Upload in progress":"Идёт загрузка","Widget toolbar":"Панель инструментов виджета","Write a comment...":"Введите комментарий...","Yellow marker":"Выделение жёлтым маркером",Yes:"Да"}	);l.getPluralForm=function(n){return (n%10==1 && n%100!=11 ? 0 : n%10>=2 && n%10<=4 && (n%100<12 || n%100>14) ? 1 : n%10==0 || (n%10>=5 && n%10<=9) || (n%100>=11 && n%100<=14)? 2 : 3);;};})(window.CKEDITOR_TRANSLATIONS||(window.CKEDITOR_TRANSLATIONS={}));
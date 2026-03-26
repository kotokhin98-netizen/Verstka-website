// Функция для применения стилей
function applyStyles(element, styles) {
    Object.assign(element.style, styles);
}

// Инициализация страницы
function init() {
    applyBodyStyles();
    createHeader();
    createMain();
    createFooter();
}

// Создание header
function createHeader() {
    const header = document.createElement("header");
    header.innerHTML = "<h1>Добро пожаловать!</h1>";
    
    // Применение стилей для Header 
    applyStyles(header, {
        background: "#333",
        color: "white",
        textAlign: "center",
        padding: "1rem",
        width: "100%"
    });
    
    document.body.appendChild(header);
}

// Создание Footer
function createFooter() {
    const footer = document.createElement("footer");
    footer.innerHTML = "2025 Все права защищены";
    
    // Применение стилей для Footer
    applyStyles(footer, {
        textAlign: "center",
        padding: "1rem",
        background: "#333",
        color: "white",
        width: "100%",
        marginTop: "auto"
    });
    
    document.body.appendChild(footer);
}

// Создание main
function createMain() {
    const main = document.createElement("main");
    main.className = "container";

    // Добавляем блоки с котиками
    main.appendChild(createImgBlock("Это котик 1 ", "https://upload.wikimedia.org/wikipedia/commons/thumb/7/74/A-Cat.jpg/2560px-A-Cat.jpg"));
    main.appendChild(createImgBlock("Это котик 2", "https://images.all-free-download.com/images/thumbjpg/cat_hangover_relax_213869.jpg"));
    
    // Добавляем форму
    main.appendChild(createForm());

    // Подключаем стили для Main 
    applyStyles(main, {
        maxWidth: "800px",
        margin: "20px auto",
        padding: "20px",
        background: "white",
        boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: "20px"
    });
     
    document.body.appendChild(main);
}

// Создание блока с изображением
function createImgBlock(text, imgSrc) {
    const block = document.createElement("div");
    block.className = "text-block";
    
    // Подлючаем стили для текстового блока
    applyStyles(block, {
        textAlign: "center",
        padding: "10px"
    });
    
    // Создаем текстовый блок
    const paragraph = document.createElement("p");
    paragraph.textContent = text;
    // Подлючаем стили для текстов
    applyStyles(paragraph, {
        textAlign: "center",
        padding: "10px"
    });

    //Задаем тип элементу 
    const img = document.createElement("img");
    img.className = "image";
    img.src = imgSrc;
    img.alt = "Пример";
    
    // Подключаем стили для изображений
    applyStyles(img, {
        marginTop: "15px",
        maxWidth: "400px",
        height: "auto",
        borderRadius: "8px"
    });
    
    block.appendChild(paragraph);
    block.appendChild(img);
    
    return block;
}

// Создание формы
function createForm() {
    const formContainer = document.createElement("div");
    formContainer.className = "form-container";
    
    // Подлюччение стилей для формы
    applyStyles(formContainer, {
        width: "100%",
        maxWidth: "400px",
        padding: "20px",
        background: "#f9f9f9",
        borderRadius: "8px",
        boxShadow: "0 0 10px rgba(0, 0, 0, 0.1)",
        textAlign: "center"
    });

    // Заголовок элемента
    const heading = document.createElement("h3");
    heading.textContent = "Оставьте заявку";
    formContainer.appendChild(heading);
    
    const form = document.createElement("form");
    
    // Создаем текстовый блок 
    const inputName = document.createElement("input");
    inputName.type = "text";
    inputName.placeholder = "Ваше имя";
    inputName.required = true;

    // Создаем текстовый блок
    const inputEmail = document.createElement("input");
    inputEmail.type = "email";
    inputEmail.placeholder = "Ваш email";
    inputEmail.required = true;
    
    // Созданем кнопку
    const button = document.createElement("button");
    button.type = "submit";
    button.textContent = "Отправить";

    // Инициализация элементов внутри формы
    form.appendChild(inputName);
    form.appendChild(inputEmail);
    form.appendChild(button);
    formContainer.appendChild(form);
    
    // Применяем стили к внутренним элементам
    applyStyles(inputName, {
        width: "100%",
        padding: "10px",
        margin: "10px 0",
        border: "1px solid #ccc",
        borderRadius: "5px"
    });
    
    applyStyles(inputEmail, {
        width: "100%",
        padding: "10px",
        margin: "10px 0",
        border: "1px solid #ccc",
        borderRadius: "5px"
    });
    
    applyStyles(button, {
        backgroundColor: "#333",
        color: "white",
        cursor: "pointer",
        width: "100%",
        padding: "10px",
        margin: "10px 0",
        border: "1px solid #ccc",
        borderRadius: "5px"
    });
    
    return formContainer;
}

// Создание body стилей
function applyBodyStyles() {
    applyStyles(document.body, {
        fontFamily: "Arial, sans-serif",
        margin: "0",
        padding: "0",
        backgroundColor: "#f4f4f4",
        color: "#333",
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        alignItems: "center"
    });
}

// Запускаем после загрузки DOM
document.addEventListener("DOMContentLoaded", init);
const accordion = () => {
  const questionsList = document.querySelector(".questions__list");
  const items = questionsList.querySelectorAll(".questions__item");

  // Функция для проверки ширины экрана
  const isSmallScreen = () => window.innerWidth < 1250;

  questionsList.addEventListener("click", (event) => {
    const target = event.target;

    if (target.classList.contains("questions__span")) {
      const currentItem = target.closest(".questions__item");
      const spanElement = currentItem.querySelector(".questions__span");

      // Убираем активные классы у всех элементов
      items.forEach((item) => {
        const span = item.querySelector(".questions__span");
        if (span) {
          span.classList.remove("questions__span--purple-active");
          span.classList.remove("questions__span--white-active");
        }
      });

      // Закрываем все элементы
      items.forEach((item) => {
        if (item !== currentItem) {
          item
            .querySelector(".questions__paragraf")
            .classList.add("no-visible");
        }
      });

      // Открываем текущий
      currentItem
        .querySelector(".questions__paragraf")
        .classList.toggle("no-visible");

      const isOpen = !currentItem
        .querySelector(".questions__paragraf")
        .classList.contains("no-visible");

      if (spanElement) {
        if (isSmallScreen()) {
          // На маленьких экранах всегда добавляем white-active
          spanElement.classList.toggle("questions__span--white-active", isOpen);
        } else if (currentItem.classList.contains("questions__item_white")) {
          spanElement.classList.toggle(
            "questions__span--purple-active",
            isOpen
          );
        } else if (currentItem.classList.contains("questions__item_purple")) {
          spanElement.classList.toggle("questions__span--white-active", isOpen);
        }
      }
    }
  });
};

const createMenu = () => {
  const overlayMenu = document.createElement("div");
  overlayMenu.classList.add("overlay-menu", "no-visible");

  const menu = document.createElement("div");
  menu.classList.add("menu");
  overlayMenu.append(menu);

  const menuList = document.createElement("ul");
  menuList.classList.add("menu__list");
  menu.append(menuList);

  const itemHalls = document.createElement("li");
  itemHalls.classList.add("menu__item");
  menuList.append(itemHalls);

  const linkHalls = document.createElement("a");
  linkHalls.classList.add("menu__link");
  linkHalls.setAttribute("href", "#halls");
  linkHalls.textContent = "залы";
  itemHalls.append(linkHalls);

  const itemAboutUs = document.createElement("li");
  itemAboutUs.classList.add("menu__item");
  menuList.append(itemAboutUs);

  const linkAboutUs = document.createElement("a");
  linkAboutUs.classList.add("menu__link");
  linkAboutUs.setAttribute("href", "#about-us");
  linkAboutUs.textContent = "О нас";
  itemAboutUs.append(linkAboutUs);

  const itemToBook = document.createElement("li");
  itemToBook.classList.add("menu__item");
  menuList.append(itemToBook);

  const linkToBook = document.createElement("a");
  linkToBook.classList.add("menu__link");
  linkToBook.setAttribute("href", "#to-book");
  linkToBook.textContent = "Бронь";
  itemToBook.append(linkToBook);

  const itemFeedback = document.createElement("li");
  itemFeedback.classList.add("menu__item");
  menuList.append(itemFeedback);

  const linkFeedback = document.createElement("a");
  linkFeedback.classList.add("menu__link");
  linkFeedback.setAttribute("href", "#feedback");
  linkFeedback.textContent = "отзывы";
  itemFeedback.append(linkFeedback);

  const itemContacts = document.createElement("li");
  itemContacts.classList.add("menu__item");
  menuList.append(itemContacts);

  const linkContacts = document.createElement("a");
  linkContacts.classList.add("menu__link");
  linkContacts.setAttribute("href", "#contacts");
  linkContacts.textContent = "Контакты";
  itemContacts.append(linkContacts);

  const blockBtn = document.createElement("div");
  menu.append(blockBtn);

  const callBackBtn = document.createElement("button");
  callBackBtn.setAttribute("type", "button");
  callBackBtn.classList.add("header__button--700px", "no-visible");
  callBackBtn.textContent = "Заказать звонок";
  blockBtn.append(callBackBtn);

  document.body.prepend(overlayMenu);

  return {
    menu,
    overlayMenu,
    callBackBtn,
  };
};

const controlMenu = (menu, overlayMenu, callBackBtn) => {
  const headerMenu = document.querySelector(".header__menu");

  headerMenu.addEventListener("click", () => {
    if(window.innerWidth < 700) {
      callBackBtn.classList.remove("no-visible");
      overlayMenu.classList.remove("no-visible");
    } else if(window.innerWidth > 700) {
      overlayMenu.classList.remove("no-visible");
    }
  });

  overlayMenu.addEventListener("click", (event) => {
    const target = event.target;

    if (target.classList.contains("overlay-menu")) {
      overlayMenu.classList.add("no-visible");
    }
  });
};

const createModalWindow = () => {
  const overlay = document.createElement("div");
  overlay.classList.add("overlay", "no-visible");

  const form = document.createElement("form");
  form.classList.add("form");
  overlay.append(form);

  const closeBtn = document.createElement("button");
  closeBtn.classList.add("close");
  closeBtn.setAttribute("type", "button");
  form.append(closeBtn);

  const formTitle = document.createElement("h3");
  formTitle.classList.add("form__title");
  formTitle.textContent = "Заказать звонок";
  form.append(formTitle);

  const formData = document.createElement("div");
  formData.classList.add("form__data");
  form.append(formData);

  const formLabelName = document.createElement("label");
  formLabelName.classList.add("form__label");
  formLabelName.textContent = "Имя";
  formData.append(formLabelName);

  const formInputName = document.createElement("input");
  formInputName.setAttribute("type", "text");
  formInputName.setAttribute("name", "name");
  formInputName.classList.add("form__input");
  formLabelName.append(formInputName);

  const formLabelPhone = document.createElement("label");
  formLabelPhone.classList.add("form__label");
  formLabelPhone.textContent = "Телефон";
  formData.append(formLabelPhone);

  const formInputPhone = document.createElement("input");
  formInputPhone.setAttribute("type", "text");
  formInputPhone.setAttribute("name", "phone");
  formInputPhone.classList.add("form__input");
  formLabelPhone.append(formInputPhone);

  const submitBtn = document.createElement("button");
  submitBtn.classList.add("form__button");
  submitBtn.setAttribute("type", "submit");
  submitBtn.textContent = "Позвонить мне";
  form.append(submitBtn);

  const body = document.querySelector("body");
  body.prepend(overlay);

  return {
    overlay,
    form,
  };
};

const controlModalWindow = (overlay, form, callBackBtn, overlayMenu) => {
  const headerBtn = document.querySelector(".header__button");

  callBackBtn.addEventListener("click", () => {
    overlay.classList.remove("no-visible");
    overlayMenu.classList.add("no-visible");
  });

  overlay.addEventListener("click", (event) => {
    const target = event.target;

    if (
      target.classList.contains("overlay") ||
      target.classList.contains("close")
    ) {
      overlay.classList.add("no-visible");
      form.reset();
    }
  });

  headerBtn.addEventListener("click", () => {
    overlay.classList.remove("no-visible");
  });

  overlay.addEventListener("click", (event) => {
    const target = event.target;

    if (
      target.classList.contains("overlay") ||
      target.classList.contains("close")
    ) {
      overlay.classList.add("no-visible");
      form.reset();
    }
  });
};

const init = () => {
  accordion();
  const { menu, overlayMenu, callBackBtn } = createMenu();
  controlMenu(menu, overlayMenu, callBackBtn);
  const { overlay, form } = createModalWindow();
  controlModalWindow(overlay, form, callBackBtn, overlayMenu);
};

init();

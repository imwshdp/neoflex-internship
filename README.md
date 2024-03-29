# Интернет магазин аудио аксессуаров

Тестовое задание для учебного центра Neoflex (Входные мероприятия Frontend Development (Весенний набор 2023)).

Посмотреть результат [здесь](https://neoflex-internship.vercel.app/).

## Стек

- `React`
- `TypeScript`
- `Redux Toolkit`
- `React Router`
- `i18next`
- Функциональные компоненты, React Hooks
- Модульные CSS стили

## Реализованные требования к проекту

- Были разработаны две страницы интернет-магазина (Каталог товаров и Коризна с приобретенными товарами) согласно макету
- При нажатии кнопки "Купить" на карточке с товаром, товар добавляется в корзину и рядом с иконкой появляется/увеличивается счётчик
- Если из корзины удаляются все товары - счётчик скрывается
- При наличии скидки у товара, его стоимость пересчитывается, а также отображается новая и старая цены, в соответствии с макетом
- При изменении количества товаров в корзине, итоговая сумма изменяется
- Данные о товарах и категориях хранятся в виде массивов (_src/resources/mock_)
- Данные о товарах, категориях, корзине пользователя и настройках хранятся в приложении с помощью стейт-менеджера Redux, предварительно подгружаясь из статичных массивов с данными
- Для хранения данных о корзине пользователя используется хранилище _SessionStorage_
- Страницы приложения имеют мобильные версии
- В приложение заложена основа системы локализации с помощью react-i18next

## Локальный запуск проекта

Запуск проекта на локальном сервере (http://localhost:3000/) производится командой _npm start_.\
Установить необходимые для запуска модули Node.js можно командой _npm i_.

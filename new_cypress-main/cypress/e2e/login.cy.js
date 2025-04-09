describe('Проверка авторизации', function () {

    it('Верный логин и верный пароль', function () {
         cy.visit('https://login.qa.studio/'); // Зашли на сайт
         cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); // Проверяю цвет кнопки воссьановить пароль

         cy.get('#mail').type('german@dolnikov.ru'); // Ввели верный логин
         cy.get('#pass').type('iLoveqastudio1'); // ВВели верный пароль
         cy.get('#loginButton').click(); // Нажать кнопку войти

         cy.wait(5000)

         cy.get('#messageHeader').contains('Авторизация прошла успешно'); // Проверяю, что после авт. вижу текст
         cy.get('#messageHeader').should('be.visible'); // Текст виден пользователю
         cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // есть крестик и он виден пользователю
     })
 

     it('Верный логин и неверный пароль', function () {
        cy.visit('https://login.qa.studio/'); // Зашли на сайт
        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); // Проверяю цвет кнопки воссьановить пароль

        cy.get('#mail').type('german@dolnikov.ru'); // Ввели верный логин
        cy.get('#pass').type('iLoveqastudio2'); // ВВели верный пароль
        cy.get('#loginButton').click(); // Нажать кнопку войти
        
        cy.get('#messageHeader').contains('Такого логина или пароля нет'); // Проверяю, что после авт. вижу текст
        cy.get('#messageHeader').should('be.visible'); // Текст виден пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // есть крестик и он виден пользователю
    })

    it('Неверный логин и верный пароль', function () {
        cy.visit('https://login.qa.studio/'); // Зашли на сайт
        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); // Проверяю цвет кнопки воссьановить пароль

        cy.get('#mail').type('german@dolnikov.ruqqqq'); // Ввели неверный логин
        cy.get('#pass').type('iLoveqastudio2'); // ВВели верный пароль
        cy.get('#loginButton').click(); // Нажать кнопку войти
        
        cy.get('#messageHeader').contains('Такого логина или пароля нет'); // Проверяю, что после авт. вижу текст
        cy.get('#messageHeader').should('be.visible'); // Текст виден пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // есть крестик и он виден пользователю
    
    }) 

    it('Проверка на негативный кейс валидации', function () {
        cy.visit('https://login.qa.studio/'); // Зашли на сайт
        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); // Проверяю цвет кнопки воссьановить пароль

        cy.get('#mail').type('germandolnikov.ru'); // Ввели логин без @
        cy.get('#pass').type('iLoveqastudio1'); // Ввели верный пароль
        cy.get('#loginButton').click(); // Нажать кнопку войти
        
        cy.get('#messageHeader').contains('Нужно исправить проблему валидации'); // Проверяю, что после авт. вижу текст
        cy.get('#messageHeader').should('be.visible'); // Текст виден пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // есть крестик и он виден пользователю
    })  

    it('Проверка восстановления пароля', function () {
        cy.visit('https://login.qa.studio/'); // Зашли на сайт
        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); // Проверяю цвет кнопки воссьановить пароль

        
        cy.get('#forgotEmailButton').click(); // Нажимаю восстановить пароль

        cy.get('#mailForgot').type('german@dolnikov.ru'); // Ввел почту для восстановления
        cy.get('#restoreEmailButton').click(); // Нажать на поле отправить код

        
        cy.get('#messageHeader').contains('Успешно отправили пароль на e-mail'); // Проверяю на совпадение
        cy.get('#messageHeader').should('be.visible'); // Текст виден пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // есть крестик и он виден пользователю
    })


    it('Проверка на приведение к строчным буквам в логине', function () {
        cy.visit('https://login.qa.studio/'); // Зашли на сайт
        cy.get('#forgotEmailButton').should('have.css', 'color', 'rgb(0, 85, 152)'); // Проверяю цвет кнопки воссьановить пароль

        cy.get('#mail').type('GerMan@Dolnikov.ru'); // Ввели логин GerMan@Dolnikov.ru
        cy.get('#pass').type('iLoveqastudio1'); // Ввели верный пароль
        cy.get('#loginButton').click(); // Нажать кнопку войти
        
        cy.get('#messageHeader').contains('Авторизация прошла успешно'); // Проверяю, что после авт. вижу текст
        cy.get('#messageHeader').should('be.visible'); // Текст виден пользователю
        cy.get('#exitMessageButton > .exitIcon').should('be.visible'); // есть крестик и он виден пользователю
    })

 })
 

 
 // запуск через теринал: npx cypress run --spec cypress/e2e/poke.cy.js --browser chrome


 // + Найти поле логин и ввести логин 
 // Найти поле пароль и ввести правильный пароль
 // Найти кнопку войти на нажать на нее
 // Проверить, что авторизация прошла успешно

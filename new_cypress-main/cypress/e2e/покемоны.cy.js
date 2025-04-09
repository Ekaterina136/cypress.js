

 describe('Проверка на покупку нового аватара для своего тренера', function () {

    it('НАЗВАНИЕ_ТЕСТ', function () {
         cy.visit('https://pokemonbattle.ru/'); // Зашли на сайт
         cy.get('#k_email').type('USER_LOGIN'); // Ввели логин
         cy.get('#k_password').type('USER_PASSWORD');// Ввели правильный пароль
         cy.get('.MuiButton-root').click(); // Нажать кнопку войти

         cy.wait(5000)

         cy.get('.header_card_trainer').click(); // Нажать кнопку мой профиль

         cy.wait(2000);

         cy.get(':nth-child(5) > .k_trainer_in_button_icon').should('be.visible'); // есть иконка и она видна пользователю
         cy.get('.k_mobile > :nth-child(5)').click(); // Нажать кнопку сменить аватар
         cy.get(':nth-child(2) > .shop__button').click(); // Нажать купить 

         cy.get('.payment_form_card_form > :nth-child(2) > .style_1_base_input').type('4111 1111 1111 1111'); // вводим номер карты
         cy.get('.payment_form_card_form_inputs > :nth-child(2) > .style_1_base_input').type('123');     // вводим CVV карты
         cy.get(':nth-child(1) > .style_1_base_input').type('1234');  // вводим срок действия карты
         cy.get('.payment_form_card_form_input_last > .style_1_base_input').type('GERMAN DOLNIKOV'); // вводим имя держателя карты                       // вводим имя владельца действия карты
         cy.get('.style_1_base_button_payment_body > .style_1_base_button_payment').click(); // Нажать оплатить
         


     })
 



    })
    
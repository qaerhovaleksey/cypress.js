describe('Покупка аватара', function () { //Название теста

    it('Тест на покупку нового аватара тренера', function (){ //Название теста
        cy.visit('https://pokemonbattle.ru/login'); //Переходим на сайт https://pokemonbattle.ru/login
        cy.get(':nth-child(1) > .auth__input').type('USER_LOGIN'); //Ввод правильного логина
        cy.get('#password').type('USER_PASSWORD') //Ввод правильного пароля
        cy.get('.auth__button').click() //Нажать на кнопку "Войти"
        cy.get('.header__container > .header__id').click() //Клик в шапке на аву тренера
        cy.get('[href="/shop"]').click() //Нажимаем на кнопку "Смена аватара" 
        cy.get('.available > button').first().click({ force: true }); // Кликаем "Купить у первого доступного аватара"
        cy.get('.pay__payform-v2 > :nth-child(2) > .pay_base-input-v2').type('4620869113632996') //Вводим номер карты
        cy.get(':nth-child(1) > .pay_base-input-v2').type('1225') // Вводим срок действия карты
        cy.get('.pay-inputs-box > :nth-child(2) > .pay_base-input-v2').type('125') // Вводим CVV карты
        cy.get('.pay__input-box-last-of > .pay_base-input-v2').type('ALEKSEY ERHOV') // Вводим имя владельца действия карты
        cy.wait(2000)
        cy.get('.pay-btn').click() // "Нажимаем кнопку Оплатить"
        cy.get('#cardnumber').type('56456') // Вводим код подтверждения СМС
        cy.get('.payment__submit-button').click() // Нажимаем кнопку "Отправить"
        cy.get('.payment__font-for-success') // Проверяем наличие и видимость сообщения о успешной покупке
    })
})

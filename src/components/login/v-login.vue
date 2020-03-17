<template lang="html">
  <div class="v-login">

    <div class="header-form">
      <div class="title">
        Вход
      </div>
      <img class="close-login" src="../../assets/images/icons/close.png" alt="">
    </div>

    <div class="phone-or-mail">
      <div class="choice">
        Телефон
      </div>
      <div class="choice">
        E-mail
      </div>
    </div>

      <div class="login-text">
        На указанный номер телефона будет выслан код для авторизации
      </div>
      <input class="input-number" type="text" name="userNumber" value="" placeholder="+7(___)___-__-__">

      <button class="submit-btn" type="button" name="button">Отправить</button>

      <div class="rules">
        <span class="rules-text">
          Авторизуясь, вы соглашаетесь с
          <a class="rules-link"  href="#">Правилами и Политикой конфиденциальности</a>
        </span>

      </div>

      <div class="auth-footer">
        <div class="auth-text">
          Ещё нет аккаунта?
        </div>

        <a class="auth-link" href="#">Зарегестрируйтесь</a>

      </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss" scoped>
.v-login {
    box-shadow: 0 6px 6px rgba(0, 0, 0, 0.24);
    border-radius: 20px 0;
    background-color: #ffffff;
    width: 328px;
    height: 440px;
    margin: 20px auto;

}

.title {
    float: left;
    color: #424242;
    font-size: 28px;
    font-weight: 700;
    font-weight: 400;
    margin: 22px 0 0 23px;

}
.close-login {
    width: 14px;
    height: 14px;
    opacity: 0.5;
    margin: 22px 23px;
    cursor: pointer;
    &:hover {
        opacity: 1;
    }
}

.header-form {
    display: flex;
    justify-content: space-between;
    margin-bottom: 30px;
}

.phone-or-mail {
    display: flex;
    justify-content: space-around;
    opacity: 0.54;
    font-weight: 500;
    letter-spacing: 0.14px;
    line-height: 20px;
    text-transform: uppercase;
    cursor: pointer;
}
.choice {
    padding: 0 53px 11px;
    border-bottom: 2px solid #dfdfdf;
}

.login-text {
    opacity: 0.87;
    line-height: 20px;
    width: 249px;
    margin: 29px auto 0;
}

.input-number {
    border: none;
    border-bottom: 1px solid #dfdfdf;
    width: 260px;
    margin: 33px 24px 0;
    letter-spacing: 0.14px;
    line-height: 20px;
    height: 20px;
    outline: none;
    padding: 0 10px 4px;
}

.submit-btn {
    background-color: $blue;
    border-radius: 50px;
    padding: 10px 100px 6px 98px;
    margin: 16px auto 0;
    cursor: pointer;
    &:hover{
      background-color: $blueHover;
    }
}

.rules {
    display: flex;
    flex-flow: row;
    margin: 21px auto 0;
    width: 257px;
    font-size: 12px;
    line-height: 18px;
}

.rules-text {
    opacity: 0.54;
}

.rules-link {
  color: $linkColor;
}

.auth-footer {
    display: flex;
    justify-content: space-between;
    margin: 41px 23px auto;
}

.auth-text {
    line-height: 20px;
    letter-spacing: 0.14px;
    opacity: 0.54;
}

.auth-link {
    letter-spacing: 0.14px;
    line-height: 20px;
    color: $linkColor;
    &:hover {
        color: $blueHover;
    }
}
</style>

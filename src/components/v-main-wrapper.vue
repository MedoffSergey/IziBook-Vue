<template>
<div>

  <header v-if="$route.name!=='login'">
    <div class="container">
      <div class="logo-box">
        <img class="logo" src="../assets/images/logo.png" alt="logo">
      </div>

      <nav>
        <ul>
          <li>
            <img class="select-icon" src="../assets/images/icons/point.png" alt="point">
            <vSelect class="nav-link" :options="options" @select="optionSelect" :selected="selected" />
          </li>
          <li>
            <img class="icon" src="../assets/images/icons/call.png" alt="call">
            <a class="nav-link" href="#">8 (800) 123 45 67</a>
          </li>
          <li>
            <img class="icon" src="../assets/images/icons/login.png" alt="login">
            <router-link class="nav-link" to="/login">Вход</router-link>
          </li>
          <li>
            <img class="icon" src="../assets/images/icons/auth.png" alt="auth">
            <router-link class="nav-link" to="/authorization">Регистрация</router-link>
          </li>
        </ul>
      </nav>
    </div>
  </header>

  <div class="container">
    <div v-if='youSity' class="citie">
      <p class="whatSity">Ваш город — {{selected}} ?</p>
      <button class="yesBtn" @click="hideYouSity()" type="button" name="button">Да</button>
      <a class="changeSity" href="#"> Изменить город</a>
    </div>
  </div>

  <div class="body">
    <div class="star">
      <div class="information">
        <div class="information-title">
          Онлайн запись в сфере услуг
        </div>
        <div class="information-subtitle">
          #просто_быстро_для_вас
        </div>
      </div>
      <div class="search-filter">
        <input class="service-search" type="text" placeholder="Поиск компаний и услуг" name="serviceSearch" value="">
        <div class="extra-options">
          Доп. параметры
          <img class="options-icon" src="../assets/images/icons/settings.png" alt="settings">
        </div>
        <div class="extra-options">
          Любая рубрика
          <img class="options-icon__arrow" src="../assets/images/icons/arrow-drop-down.png" alt="arrow-drop-down">
        </div>
        <div class="extra-options">
          Любая подрубрика
          <img class="options-icon__arrow" src="../assets/images/icons/arrow-drop-down.png" alt="arrow-drop-down">
        </div>

        <button class="btn-find" type="button" name="find">
          <span>Найти</span>
        </button>
        <button class="btn-map" type="button" name="onMap">
          <span>На Карте</span>
        </button>
      </div>
      <div class="layers">
        <div class="layer-company">
          <img class="layer-icon" src="../assets/images/layers/1.png" alt="company">
          <div class="layer-title">
            90 000
          </div>
          <div class="layer-subtitle">
            компаний
          </div>
        </div>
        <div class="layer-specialists">
          <img class="layer-icon" src="../assets/images/layers/2.png" alt="specialists">
          <div class="layer-title">
            560 000
          </div>
          <div class="layer-subtitle">
            специалистов и мастеров
          </div>
        </div>
        <div class="layer-client">
          <img class="layer-icon" src="../assets/images/layers/3.png" alt="client">
          <div class="layer-title">
            2 млн
          </div>
          <div class="layer-subtitle">
            клиентов
          </div>
        </div>
        <div class="layer-records">
          <img class="layer-icon" src="../assets/images/layers/4.png" alt="records">
          <div class="layer-title">
            10 000
          </div>
          <div class="layer-subtitle">
            записей ежедневно
          </div>
        </div>
        <div class="layer-reviews">
          <img class="layer-icon" src="../assets/images/layers/5.png" alt="reviews">
          <div class="layer-title">
            45 000
          </div>
          <div class="layer-subtitle">
            отзывов
          </div>
        </div>
      </div>
    </div>
    <!--Фоновое изображение -->

  </div>

  <div class="popular-rubrics">
    <div class="popular-title">
      Популярные рубрики
    </div>
    <div class="check-box">
      <span class="switch-text"> Показать все</span>

      <div @click="isShowText" v-if="!isShow1" class="switch-btn"></div>
      <div @click="isShowText" v-if="!isShow2" class="switch-btn switch-on"></div>
    </div>
  </div>

  <div class="v-rubrics__list">
    <vRubric v-for="rubric in rubrics" :key="rubric.value" :rubric_item="rubric" />
  </div>

  <div class="v-main-wrapper">
    <keep-alive>
      <router-view></router-view>
    </keep-alive>
  </div>

</div>
</template>

<script>
import vSelect from './v-select.vue'
import vRubric from './rubrics/v-rubrics.vue'
export default {
  name: 'v-main-wrapper',
  components: {
    vSelect,
    vRubric
  },
  props: {},
  data() {
    return {
      isShow1: false,
      isShow2: true,
      youSity: true,
      showLoginForm: true,

      selected: 'Екатеринбург',
      options: [{
          name: 'Екатеринбург',
          value: 1
        },
        {
          name: 'Москва',
          value: 2
        },
        {
          name: 'Санкт-Петербург',
          value: 3
        },
        {
          name: 'Нижний Новгород',
          value: 4
        },
      ],

      rubrics: [{
          name: 'Автосервис',
          value: 1
        },
        {
          name: 'Безопасность',
          value: 2
        },
        {
          name: 'Жильё и дом',
          value: 3
        },
        {
          name: 'Бизнес',
          value: 4
        },
        {
          name: 'Еда и напитки',
          value: 5
        },
        {
          name: 'Здоровье и фитнес',
          value: 6
        },
      ]
    }
  },
  methods: {
    optionSelect(option) {
      this.selected = option
    },
    isShowText() {
      this.isShow1 = !this.isShow1;
      this.isShow2 = !this.isShow2;
    },
    hideYouSity() {
      this.youSity = false
    }
  },
  computed: {
    showLogin() {
      if (this.$route.name !== "login") {
        console.log("true")
        return this.showLoginForm;
      } else {
        console.log("false")
        return this.showLoginForm;
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.citie {
    display: flex;
    position: relative;
    max-width: 80%;
    right: 130px;
    margin: 14px auto;
    box-sizing: border-box;
    justify-content: center;
}

.whatSity {
    margin: 0;
    font-weight: 400;
    letter-spacing: 0.14px;
}

.yesBtn {
    width: 50px;
    height: 26px;
    background-color: $blue;
    color: $white;
    margin: -3px 22px 0 16px;
    &:hover {
        background-color: #419EB4;
    }
}

.changeSity {
    text-decoration: none;
    color: $linkColor;
    font-weight: 400;
    letter-spacing: 0.14px;
    &:hover {
        color: $blueHover;
    }
}

.star {
    background-position: center;
    background-image: url("../assets/images/star.png");
    background-size: cover;
}

.information {
    max-width: 80%;
    margin: 0 auto;
    text-align: left;
    position: relative;
    padding: 40px 0 50px;

    &-title {
        font-size: 32px;
        font-weight: 700;
        color: #263548;
    }

    &-subtitle {
        color: $white;
        font-size: 20px;
        font-weight: 500;
        letter-spacing: 0.2px;
    }
}

.search-filter {
    max-width: 80%;

    margin: 0 auto;
    display: flex;
    justify-content: space-between;

}

.btn-map {
    line-height: 20px;
    padding: 12px 27px 8px;
    font-weight: 600;
    text-transform: uppercase;
    background-color: #b7e3e8;
    color: #263548;
}

.btn-find {
    padding: 12px 27px 8px;
    border-radius: $radius;
    background-color: #263548;
}

.btn-find span {
    line-height: 20px;
    color: $white;
    opacity: 0.68;
    font-weight: 600;
    text-transform: uppercase;
}

.service-search {
    border-radius: $radius;
    padding: 12px 0 10px 24px;
    border: none;
    outline: none;
}

.extra-options {
    display: flex;
    background: $white;
    border-radius: $radius;
    padding: 12px 0 0 24px;

}

.options-icon {
    width: 20px;
    height: 20px;
    margin: 0 10px;
    &__arrow {
        width: 12px;
        height: 8px;
        margin: 5px 14px 0 29px;
    }
}

.layers {
    display: flex;
    justify-content: space-around;
    max-width: 80%;
    margin: 0 auto;
    padding: 75px 0 32px;
}

.layer-title {
    text-shadow: 0 0 3px rgba(0, 0, 0, 0.03);
    color: $white;
    opacity: 0.87;
    font-size: 20px;
    font-weight: 500;
    letter-spacing: 0.2px;
    margin: 30px auto 0;
}

.layer-subtitle {
    max-width: 110px;
    font-size: 16px;
    font-weight: 500;
    letter-spacing: 0.16px;
    color: #b7e3e8;
}

// ПЕРЕКЛюЧАТЕЛЬ НАЧАЛО
.switch-btn {
    display: inline-block;
    width: 24px;
    height: 12px;
    border-radius: 10px;
    background: #c3c3c3;
    z-index: 0;
    margin: 5px 0 0;
    padding: 0;
    border: none;
    cursor: pointer;
    position: relative;
}
.switch-btn::after {
    content: "";
    height: 12px;
    width: 12px;
    border-radius: 10px;
    background: $white;
    position: absolute;
    z-index: 1;
    left: 0;
    transition: 300ms;
}
.switch-on {
    background: $switchOn;
}
.switch-on::after {
    left: 12px;
    background: $blue;
}
// ПЕРЕКЛюЧАТЕЛЬ КОНЕЦ
.switch-text {
    font-weight: 400;
    letter-spacing: 0.14px;
    opacity: 0.54;
    margin: 0 16px 0 0;

}

.popular-rubrics {
    max-width: 80%;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    padding: 32px 0;
}

.popular-title {
    font-size: 20px;
    font-weight: 500;
    opacity: 0.68;
}

.v-rubrics__list {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    max-width: 80%;
    margin: 0 auto;
}
</style>

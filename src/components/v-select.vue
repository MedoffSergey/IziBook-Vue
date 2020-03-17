<template lang="html">
  <div class="v-select">
    <p class="title" @click="areOptionsVisible = !areOptionsVisible">{{selected}}
        <img class="arrow-down" src="../assets/images/icons/arrow-down.png" alt="arrow-down">
    </p>
    <div class="options" v-if="areOptionsVisible" >
      <p
        v-for="option in options"
        :key="option.value"
        @click="selectOption(option.name)"
      >
        {{option.name}}
      </p>
    </div>
  </div>
</template>

<script>
export default {
  name: "v-select",
  props: {
    options: {
      type: Array,
      default () {
        return []
      }
    },
    selected: {
      type: String,
      default: ''
    }
  },
  data() {
    return {
      areOptionsVisible: false
    }
  },
  methods: {
    selectOption(option) {
      this.$emit('select', option)
      this.hideSelect()
    },
    hideSelect() {
      this.areOptionsVisible = false
    }
  },
  mounted() {
    document.addEventListener('click', this.hideSelect.bind(this), true)
  },
  beforeDestroy() {
    document.removeEventListener('click', this.hideSelect)
  },


}
</script>

<style lang="scss" scoped>
.v-select {
    width: 163px;
    cursor: pointer;
}

.v-select p {
    margin: 0;
}

.title {
    color: #ffffff;
    opacity: 0.63;
}
.options {
    color: #000;
    position: absolute;
    top: -12px;
    right: 5px;
    width: 220px;
    text-align: left;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.24);
    border-radius: 20px;
    background-color: #ffffff;

}

.options p {
    padding: 10px 21px;

}

.options p:hover {
    background: #eeeeee;
    &:last-child {
        border-radius: 0 0 20px 20px;
    }
    &:first-child {
        border-radius: 20px 20px 0 0;
    }
}

.arrow-down {
    padding-left: 5px;
}
</style>

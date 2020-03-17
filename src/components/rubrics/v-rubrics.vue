<template lang="html">
      <div class="rubrics-item">
        <div class="rubrics-logo">
        </div>
        <div class="rubrics-title">
          {{rubric_item.name}}
          <img class="rubrics-icon__arrow" src="../../assets/images/icons/arrow-drop-down.png" alt="arrow-drop-down">
        </div>
      </div>
</template>

<script>
export default {

  props: {
    rubric_item: {
      type: Object,
      default () {
        return {

        }
      }
    }
  },

  data() {
    return {

    }
  }

}
</script>

<style lang="scss" scoped>

.rubrics-item {
    flex-basis: 30%;
    display: flex;
    padding: 16px 0 16px 0px;
    margin: 0 auto;
    align-items: center;
}

.rubrics-logo {
    width: 48px;
    height: 48px;
    background-color: #bdbdbd;
    border-radius: 50%;
}

.rubrics-title {
    color: #2b4f6f;
    font-family: "Segoe UI";
    font-size: 22px;
    line-height: 26px;
    font-weight: 400;
    margin: 15px 0 0 15px;
    width: 100%;
    text-align: left;
}

.rubrics-icon__arrow {
    float: right;
    margin: 15px 10px;
}
</style>

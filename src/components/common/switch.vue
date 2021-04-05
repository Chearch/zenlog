<template>
  <div>
    <input
      class="ios-switch"
      type="checkbox"
      :style="{ width: width, height: height }"
      ref="checkbox"
      @click="ckcheckbox"
    />
  </div>
</template>

<script>
export default {
  props: {
    width: {
      type: String,
      default: "51px",
    },
    height: {
      type: String,
      default: "31px",
    },
    onTodo: {
      type: Function,
      default: () => {},
    },
    offTodo: {
      type: Function,
      default: () => {},
    },
  },
  methods: {
    ckcheckbox() {
      if (this.$refs.checkbox.checked) {
        //   如果是打开状态，则执行....方法
        this.onTodo();
      } else {
        //   如果是关闭状态，则执行...方法
        this.offTodo();
      }
    },
  },
};
</script>
<style lang='scss' scoped>
.btn {
  border-radius: 31px;
  background-color: #e9e9eb;
}
.ios-switch {
  position: relative;
  appearance: none;
  cursor: pointer;
  @extend .btn;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  outline: none;
  transition: all 100ms;
  &::before {
    position: absolute;
    content: "";
    transition: all 300ms cubic-bezier(0.45, 1, 0.4, 1);
    @extend .btn;
  }
  &::after {
    border-radius: 50%;
    margin-left: 1px;
    width: 28px;
    height: 28px;
    background-color: #fff;
    box-shadow: 1px 1px 5px rgba(#000, 0.3);
    content: "";
    transition: all 300ms cubic-bezier(0.4, 0.4, 0.25, 1.35);
  }
  &:checked {
    background-color: #333533;
    &::before {
      transform: scale(0);
    }
    &::after {
      transform: translateX(21px);
    }
  }
}
</style>
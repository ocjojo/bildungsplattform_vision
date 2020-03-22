<template>
  <div class="collabsable-list">
    <ul>
      <li class="list-heading" :class="{ rotate: collapsed }" @click="collapsed = !collapsed">
        {{ heading }}
      </li>
        <div class="list-container" :class="{'collapsed': collapsed}">
          <li v-for="item of list" v-bind:key="item" :class="type">{{ item }}</li>
        </div>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    heading: String,
    list: Array,
    type: String
  },
  data() {
    return {
      collapsed: false
    };
  },
  methods: {
    isChat(item) {
      console.log(item, item.type, item.type == "chat");
      return item.type == "chat";
    }
  }
};
</script>

<style lang="scss" scoped>
.collabsable-list {
  background: $color-sidebar-list-background;
  color: #fff;
}

ul {
  padding: 0;
  margin: 0;
  li {
    padding: 4px 10px 4px 35px;
    font-size: 1.4rem;
  } 
}

.list-heading {
  border-bottom: 1px solid $color-sidebar-border;
  padding: 10px 15px 10px 0;
  font-weight: 400;
  cursor: pointer;
  &:before {
    font-icon: url("@/assets/icons/arrow-down-block.svg");
    margin-right: 10px;
    margin-left: 10px;
    font-size: 0.8rem;
    transform: rotate(0deg);
    display: inline-block;
    transition: 0.2s ease-in-out;
  }
  &.rotate{
  border: none;
    &:before {
      transform: rotate(-90deg);
    }
  }
  
}

li.chat {
  padding-left: 55px;
  position: relative;
  &:before {
    content: "";
    position: absolute;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: $primary-gradient;
    left: 34px;
    top: 8px;
  }
}
.list-container {
  overflow: hidden;
  max-height: 1000px;
  transition: 0.2s ease-in-out;
  transition-delay: 0s;
}

.collapsed {
  max-height: 0;
  transition-delay: 0s;
  transition: 0.2s ease-in-out;
}

.track:before {
  margin-right: 7px;
}
</style>

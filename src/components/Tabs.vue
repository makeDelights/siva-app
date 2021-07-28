<template>
  <div id="main-tabs">
    <ul class="tabs">
      <router-link
        to="/"
        custom
        v-slot="{ href, navigate, isActive, isExactActive }"
      >
        <li
          :href="href"
          @click="navigate"
          :class="[
            isActive && 'router-link-active',
            isExactActive && 'router-link-exact-active',
            'tab',
          ]"
        >
          List
        </li>
      </router-link>
      <router-link
        to="/bill"
        custom
        v-slot="{ href, navigate, isActive, isExactActive }"
      >
        <li
          :href="href"
          @click="navigate"
          :class="[
            isActive && 'router-link-active',
            isExactActive && 'router-link-exact-active',
            'tab',
          ]"
        >
          Bill
        </li>
      </router-link>
    </ul>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
#main-tabs {
  padding: 0px;

  ul.tabs {
    margin: 0;
    padding: 0;
    list-style-type: none;
    display: flex;
    justify-content: space-around;

    .tab {
      padding: 10px 0;
      text-align: center;
      //   border-left: 1px solid darkgray;
      border-right: 1px solid darkgray;
      flex: 1;
      font-weight: bold;
      cursor: pointer;

      &:last-child {
        border-right: none;
      }

      &.router-link-exact-active {
        color: #d821d8 !important;
        background-color: #d821d83d;
      }
    }
  }
}
</style>

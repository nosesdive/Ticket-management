<template>
  <header class="header">
    <nav class="navigation">
      <ol class="navigation-list">
        <li class="navigation-list-item"><router-link :to="{ name: 'Home'}">Home</router-link></li>
        <li class="navigation-list-item"><router-link :to="{ name: 'Report'}">Report</router-link></li>
      </ol>
    </nav>
  </header>
</template>

<script>
export default {
  name: 'Header',
};
</script>

<style lang="scss" scoped>
  .header {
    display: flex;
    align-items: center;
    height: 64px;
    background-color: #fff;
    box-shadow: 0 2px 8px #f0f1f2;
  }

  .navigation {
    &-list {
      list-style: none;
      display: flex;

      &-item {
        padding: 0 12px;

        a {
          color: var(--color-primary);
        }

        .router-link-exact-active {
          color: var(--color-secondary);
        }
      }
    }
  }
</style>
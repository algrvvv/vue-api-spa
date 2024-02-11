<script>
export default {
  name: "HomeView"
}
</script>

<template>
  <div>
    Домашняя страница
    <br>
    <RouterLink to="/posts">Все посты</RouterLink>
    <br>
    <RouterLink to="/post/create">Создать пост</RouterLink>
  </div>
</template>

<style scoped>

</style>
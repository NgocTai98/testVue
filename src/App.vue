<template>
  <div id="app">
    <router-view>

    </router-view>
  </div>
</template>

<script>

import listUser from './components/listUser'
export default {
  name: 'App',
  components: {
    listUser
  },
  
}
</script>

<style>

</style>

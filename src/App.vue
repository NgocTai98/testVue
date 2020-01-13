<template>
  <div id="app">
    <listUser/>
    <!-- <router-view></router-view> -->
  </div>
</template>

<script>
import listUser from './components/listUser'
export default {
  name: 'App',
  components: {
    listUser
  },
   template: '<listUser/>'
}
</script>

<style>

</style>

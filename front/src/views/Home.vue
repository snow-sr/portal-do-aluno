<script>
import sideNav from "../components/sideNav.vue";
import FeedComponent from "../components/feedComponent.vue";

export default {
  components: { sideNav, FeedComponent },
};
</script>

<template>
  <div class="grid grid-cols-2">
    <side-nav />
    <feed-component />
  </div>
</template>

<style scoped src="@/assets/home.css"></style>

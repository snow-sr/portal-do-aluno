<script>
import SideNav from "@/components/SideNav.vue";
import Feed from "@/components/Feed.vue";
import TagsPesquisa from "@/components/TagsPesquisa.vue";

export default {
  components: { SideNav, Feed, TagsPesquisa },
};
</script>

<template>
  <div class="grid grid-cols-4">
    <div class=""><SideNav /></div>

    <div class="col-span-2"><Feed /></div>

    <div class=""><TagsPesquisa /></div>
  </div>
</template>

<style scoped src="@/assets/home.css"></style>

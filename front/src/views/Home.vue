<script>
import SideNav from "@/components/SideNav.vue";
import Feed from "@/components/Feed.vue";
import TagsPesquisa from "@/components/TagsPesquisa.vue";

export default {
  components: { SideNav, Feed, TagsPesquisa },
};
</script>

<template>
  <div class="grid grid-cols-3">
    <div class="w-25"><SideNav /></div>

    <div class="w-25"><Feed /></div>

    <div class="w-25"><TagsPesquisa /></div>
  </div>
</template>

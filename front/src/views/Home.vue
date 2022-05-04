<script>
import SideNav from "@/components/SideNav.vue";
import Feed from "@/components/Feed.vue";

export default{
    components: { SideNav, Feed},
};
</script>

<template>
  <div class="grid grid-cols-3">
    <div> <SideNav /> </div>

    <div><Feed /></div>

    <div></div>
  </div>
</template>

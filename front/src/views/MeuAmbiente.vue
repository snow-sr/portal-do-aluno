<script>
import SideNav from "@/components/SideNav.vue";
import Perfil from "@/components/Perfil.vue";
import TagsPesquisa from "@/components/TagsPesquisa.vue";

export default {
  components: { SideNav, Perfil, TagsPesquisa },
};
</script>

<template>
  <div class="grid grid-cols-4">
    <div class=""><SideNav /></div>

    <div class="col-span-2"> 
      <Perfil />
      </div>

    <div class=""><TagsPesquisa /></div>
  </div>
</template>

<style scoped src="@/assets/home.css"></style>
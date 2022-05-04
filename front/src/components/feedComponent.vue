<script>
import axios from "axios";
import Post from "../components/Post.vue";

export default {
  data() {
    return {
      kisks: [],
      error: false,
    };
  },
  methods: {
    async getKisks() {
      let user = localStorage.getItem("user");
      if (!user) {
        this.$router.push("/");
      }

      console.log("getKisks runned");
      let request = await axios.get("http://localhost:8087/kisks");
      this.kisks = request.data;
    },
  },
  components: { Post },
};
</script>

<template>
  <div class="text-center">
    <a
      href="#/createPost"
      type="button"
      class="inline-block px-8 py-2.5 m-4 bg-purple-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-purple-700 hover:shadow-lg focus:bg-purple-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-purple-800 active:shadow-lg transition duration-150 ease-in-out"
      >Criar post
    </a>

    <a
      @click="getKisks"
      type="button"
      class="inline-block px-6 py-2.5 bg-purple-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-purple-700 hover:shadow-lg focus:bg-purple-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-purple-800 active:shadow-lg transition duration-150 ease-in-out"
      >Verificar posts</a
    >
    <div id="content"></div>
    <div v-for="kisk in kisks" v-bind:key="kisk.authorId">
      <Post :kisk="kisk" />
    </div>
  </div>
</template>

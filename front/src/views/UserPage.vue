<script>
import axios from "axios";
import Post from "../components/Post.vue";
export default {
  mounted() {
    let user = JSON.parse(localStorage.getItem("user"));
    if (!user) {
      this.$router.push("/");
    }
    console.log(user);
    this.user = user;
    let kisks = axios.post("http://localhost:8087/getKisksByUser", {
      userId: user.id,
    });
    kisks.then((response) => {
      this.kisks = response.data;
    });
  },
  data() {
    return {
      user: {},
      kisks: [],
    };
  },
  components: { Post },
  methods: {
    removerPost(kiskId) {
      this.kisks.map((kisk) => {
        if (kisk.id === kiskId) {
          kisk.visibility = !kisk.visibility;
        }
      });

      let kisk = axios.post("http://localhost:8087/changeKiskVisibility", {
        kiskId: kiskId,
        isVisible: false,
      });

      kisk.then((response) => {
        console.log(response);
      });
    },
  },
};
</script>

<template>
  <div class="h-full flex flex-col items-center justify-center">
    <img
      src="https://mdbcdn.b-cdn.net/img/new/avatars/2.webp"
      class="rounded-full w-32"
      alt="Avatar"
    />
    <p class="text-3xl">Olá {{ user.name }}!</p>
    <p class="text-xl">Estes são seus últimos posts:</p>
    <div
      v-for="kisk in kisks"
      v-bind:key="kisk.authorId"
      :class="{ 'bg-red-100': kisk.visibility }"
    >
      <Post :kisk="kisk" @click="removerPost(kisk.id)"></Post>
    </div>
  </div>
</template>

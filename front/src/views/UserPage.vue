<script>
export default {
  mounted() {
    let user = JSON.parse(localStorage.getItem("user"));
    if (!user) {
      this.$router.push("/");
    }

    console.log(user);
    this.user = user;
  },
  data() {
    return {
      user: {},
    };
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
  </div>
</template>

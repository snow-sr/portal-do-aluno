<script>
import axios from "axios";
export default {
  data() {
    return {
      title: "",
      content: "",
      tags: "",
      posted: false,
      error: false,
    };
  },
  methods: {
    async createKisk() {
      let user = JSON.parse(localStorage.getItem("user"));
      if (!user) {
        this.$router.push("/");
      }

      let request = axios.post("http://localhost:8087/createKisk", {
        title: this.title,
        content: this.content,
        author: {
          id: user.id,
          name: user.name,
        },
        isArticle: false,
      });

      await request
        .then((response) => {
          if (response.statusText == "OK") {
            this.posted = true;
          }
        })
        .catch((err) => {
          if (err.response.statusText == "Unauthorized") {
            console.log(
              "Unauthorized, that user can't be found at our system!"
            );
          }
          console.log(err);
          this.error = true;
        });
    },
  },
};
</script>

<template>
  <div class="h-screen w-full flex items-center justify-center">
    <div
      class="bg-red-100 rounded-lg py-5 px-6 mb-4 text-base text-red-700 mb-3"
      role="alert"
      v-if="error"
    >
      Algo deu errado, quer tentar de novo?
    </div>

    <div class="block p-8 rounded-lg shadow-lg bg-gray-200">
      <div
        class="bg-green-100 rounded-lg py-5 px-6 mb-4 text-base text-green-700 mb-3"
        role="alert"
        v-if="posted"
      >
        Postado com sucesso!
      </div>
      <div class="form-group mb-6">
        <input
          type="text"
          class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
          id="exampleInput7"
          v-model="title"
          placeholder="Título"
          @change="
            () => {
              this.posted = false;
            }
          "
        />
      </div>
      <div class="form-group mb-6">
        <input
          type="text"
          class="disabled form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
          id="exampleInput8"
          disabled
          placeholder="Tags"
        />
      </div>
      <div class="form-group mb-6">
        <textarea
          class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
          id="exampleFormControlTextarea13"
          rows="3"
          v-model="content"
          placeholder="Digite..."
          @change="
            () => {
              this.posted = false;
            }
          "
        ></textarea>
      </div>
      <div class="form-group form-check text-center mb-6">
        <input
          type="checkbox"
          class="form-check-input appearance-none h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-green_ifc checked:border-green_ifc focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain mr-2 cursor-pointer"
          id="exampleCheck87"
          checked
        />
        <label
          class="form-check-label inline-block text-gray-800"
          for="exampleCheck87"
          >Pode ser compartilhado?</label
        >
        <button>Enviar</button>
      </div>
    </div>
  </div>
</template>

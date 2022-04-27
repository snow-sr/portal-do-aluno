<script>
import axios from "axios";
axios.defaults.baseURL = "http://localhost:8087/";

export default {
  data() {
    return {
      email: "",
      password: "",
      error: false,
    };
  },
  methods: {
    async login() {
      let request = axios.post("http://localhost:8087/login", {
        email: this.email,
        password: this.password,
      });

      await request
        .then((response) => {
          if (response.statusText == "OK") {
            this.error = false;
            console.log("success!");
            this.$router.push("/home");
          }
        })
        .catch((error) => {
          if (error.response.statusText == "Unauthorized") {
            console.log(
              "Unauthorized, that user can't be found at our system!"
            );
          }
          console.log(error);
          this.error = true;
        });
    },
  },
};
</script>

<template>
  <div
    class="min-h-full flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8"
  >
    <div class="max-w-md w-full space-y-8">
      <div>
        <img class="mx-auto h-18 w-auto" src="logo-if.png" alt="Workflow" />
        <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">
          Portal do Aluno
        </h2>
      </div>
      <div class="mt-8 space-y-6">
        <div
          class="bg-red-100 rounded-lg py-5 px-6 mb-4 text-base text-red-700 mb-3"
          role="alert"
          v-if="error"
        >
          Não conseguimos encontrar alguém com essas credenciais. Se você
          esqueceu sua senha, clique aqui:
          <a href="#" class="font-bold text-red-800 underline"
            >Recuperar senha</a
          >
          .
        </div>
        <input type="hidden" name="remember" value="true" />
        <div class="rounded-md shadow-sm -space-y-px">
          <div>
            <label for="email-address" class="sr-only">Email address</label>
            <input
              id="email-address"
              name="email"
              type="email"
              autocomplete="email"
              v-model="email"
              required
              class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              placeholder="Email"
            />
          </div>
          <div>
            <label for="password" class="sr-only">Password</label>
            <input
              id="password"
              name="password"
              type="password"
              v-model="password"
              autocomplete="current-password"
              required
              class="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-b-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
              placeholder="Senha"
            />
          </div>
        </div>

        <div class="flex items-center justify-between">
          <div class="flex items-center">
            <input
              id="remember-me"
              name="remember-me"
              type="checkbox"
              class="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
            />
            <label for="remember-me" class="ml-2 block text-sm text-gray-900"
              >Lembrar de mim</label
            >
          </div>

          <div class="text-sm">
            <a href="#" class="font-medium text-green_ifc hover:text-green-800">
              Esqueceu sua senha?
            </a>
          </div>
        </div>

        <div>
          <button
            type="submit"
            id="btnLogar"
            @click="login"
            class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-green_ifc hover:bg-green-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-green_ifc"
          >
            <span class="absolute left-0 inset-y-0 flex items-center pl-3">
            </span>
            Logar
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<template>
  <div
    class="bg-blue-600 font-[Poppins] collapse container-fluid w-full flex flex-wrap"
    id="post"
  >
    <div
      class="sidebar fixed top-0 bottom-0 lg:left-0 left-[-300px] p-2 w-[300px] overflow-y-auto text-center bg-gray-900"
    >
      <div class="text-gray-100 text-x1">
        <div class="p-2.5 mt-1 flex items-center">
          <h1 class="font-bold text-gray-200 text-[20px] ml-3">Tailwindbar</h1>
        </div>
        <hr class="my-2 text-gray-600" />
      </div>
      <div
        class="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white"
      >
        <span class="text-[15px] ml-4 text-gray-200">Home</span>
      </div>

      <div
        class="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white"
      >
        <span class="text-[15px] ml-4 text-gray-200">Perfil</span>
      </div>

      <hr class="my-4 text-gray-600" />

      <div
        class="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white"
      >
        <span class="text-[15px] ml-4 text-gray-200">Notificações</span>
      </div>

      <div
        class="p-2.5 mt-3 flex items-center rounded-md px-4 duration-300 cursor-pointer hover:bg-blue-600 text-white"
      >
        <span class="text-[15px] ml-4 text-gray-200">Ajuda</span>
      </div>
    </div>
  </div>
</template>

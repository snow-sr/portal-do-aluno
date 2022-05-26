<template>
<div class="invisible h-screen md:visible border-l-4 border-gray-300 ... overflow-y-auto">
  <div class="border-4 border-gray-300 p-3 pt-10 m-10 collapse" id="tags">
    <div class="flex justify-center">
      <div class="mb-3 xl:w-96">
        <div
          class="input-group relative flex flex-wrap items-stretch w-full mb-4 rounded"
        >
          <input
            type="search"
            class="form-control relative flex-auto min-w-0 block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
            placeholder="Search"
            aria-label="Search"
            aria-describedby="button-addon2"
          />
        </div>
      </div>
    </div>

    <div class="text-2xl">
      <a href=""> <p class="text-red-500 flex items-center py-5 px-6 h-12 overflow-hidden text-ellipsis whitespace-nowrap rounded hover:bg-gray-100 transition duration-300 ease-in-out">#Institucional</p></a>
      <a href=""> <p class="text-blue-500 flex items-center py-5 px-6 h-12 overflow-hidden text-ellipsis whitespace-nowrap rounded hover:bg-gray-100 transition duration-300 ease-in-out">#Cursos</p></a>
      <a href=""> <p class="text-green-400 flex items-center py-5 px-6 h-12 overflow-hidden text-ellipsis whitespace-nowrap rounded hover:bg-gray-100 transition duration-300 ease-in-out">#Podcast</p></a>
      <a href=""> <p class="text-yellow-500 flex items-center py-5 px-6 h-12 overflow-hidden text-ellipsis whitespace-nowrap rounded hover:bg-gray-100 transition duration-300 ease-in-out">#Entrevista</p></a>
      <a href=""> <p class="text-purple-500 flex items-center py-5 px-6 h-12 overflow-hidden text-ellipsis whitespace-nowrap rounded hover:bg-gray-100 transition duration-300 ease-in-out">#Newsletter</p></a>
    </div>
  </div>
</div>
</template>

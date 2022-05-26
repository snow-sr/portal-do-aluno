<script>
import Post from "@/components/Post.vue";
import CreatePost from "../views/CreatePost.vue";
import CreateKisk from "../components/CreateKisk.vue";
export default {
  components: { Post, CreatePost, CreateKisk },
};

</script>

<template>
  <div class="flex justify-center flex-col overflow-y-auto">
    <div class="content-center block p-8 shadow-lg bg-green-600 w-auto border-2 border-t-0">
      <button type="button"
        class="w-full inline-block px-6 py-2.5 bg-green-400 text-black font-medium text-xs leading-tight uppercase rounded shadow-md hover:shadow-lg focus:bg-green-300 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-green-300 active:shadow-lg transition duration-150 ease-in-out"
        data-bs-toggle="modal" data-bs-target="#staticBackdrop">
        Criar Kisk
      </button>

      <div class="modal fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto"
        id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1"
        aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div class="modal-dialog relative w-auto pointer-events-none">
          <div
            class="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">
            <div
              class="modal-header flex flex-shrink-0 items-center justify-between p-4 border-b border-gray-200 rounded-t-md">
              <h5 class="text-xl font-medium leading-normal text-gray-800" id="exampleModalLabel">
                Modal title
              </h5>
              <button type="button"
                class="btn-close box-content w-4 h-4 p-1 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline"
                data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body relative p-4">
              ...
            </div>
            <div
              class="modal-footer flex flex-shrink-0 flex-wrap items-center justify-end p-4 border-t border-gray-200 rounded-b-md">
              <button type="button"
                class="inline-block px-6 py-2.5 bg-purple-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-purple-700 hover:shadow-lg focus:bg-purple-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-purple-800 active:shadow-lg transition duration-150 ease-in-out"
                data-bs-dismiss="modal">Close</button>
              <button type="button"
                class="inline-block px-6 py-2.5 bg-blue-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out ml-1">Understood</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="block p-12 shadow-lg bg-green-600 w-auto border-2 border-t-0">
      <h5 class="text-gray-900 text-xl leading-tight font-medium">TITLE</h5>
      <p class="text-black mb-4">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt
        tempora officia quisquam repudiandae alias quidem, distinctio eligendi.
        Nulla aperiam qui fugiat tenetur praesentium voluptatum sed nostrum
        ratione? Inventore, nisi odit? Qui ut sed praesentium saepe officiis
        facere placeat, assumenda rem porro molestiae incidunt corporis beatae
        temporibus error ab dolore aspernatur ratione amet iste harum odio
        voluptatibus. Error vel eius suscipit?
      </p>
      <p class="text-xl underline">AUTHOR</p>
    </div>
    <div class="block p-12 shadow-lg bg-green-600 w-auto border-2">
      <h5 class="text-gray-900 text-xl leading-tight font-medium">TITLE</h5>
      <p class="text-black mb-4">
        <img src="x" alt="" width="700px" height="300px" class="content-center bg-white">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt
        tempora officia quisquam repudiandae alias quidem, distinctio eligendi.
        Nulla aperiam qui fugiat tenetur praesentium voluptatum sed nostrum
        ratione?
      </p>
      <p class="text-xl underline">AUTHOR</p>
    </div>
    <div class="block p-12 shadow-lg bg-green-400 w-auto border-2">
      <h5 class="text-gray-900 text-xl leading-tight font-medium">TITLE</h5>
      <p class="text-black mb-4">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt
        tempora officia quisquam repudiandae alias quidem, distinctio eligendi.
        Nulla aperiam qui fugiat tenetur praesentium voluptatum sed nostrum
        ratione? Inventore, nisi odit? Qui ut sed praesentium saepe officiis
        facere placeat, assumenda rem porro molestiae incidunt corporis beatae
        temporibus error ab dolore aspernatur ratione amet iste harum odio
        voluptatibus. Error vel eius suscipit?
      </p>
      <p class="text-xl underline">AUTHOR</p>
    </div>
  </div>
</template>

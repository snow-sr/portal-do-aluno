<script>
export default {
  props: {
    kisk: {
      type: Object,
      required: true,
    },
  },
};
</script>

<template>
  <div class="flex justify-center m-4">
    <div class="block p-6 rounded-lg shadow-lg bg-white max-w-sm">
      <h5 class="text-gray-900 text-xl leading-tight font-medium mb-2">
        {{ kisk.title }}
      </h5>
      <p class="text-gray-700 text-base mb-4">
        {{ kisk.content }}
      </p>
      <p class="text-xl underline">{{ kisk.authorName }}</p>
    </div>
  </div>
</template>

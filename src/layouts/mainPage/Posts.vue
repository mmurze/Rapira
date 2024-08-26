<template>
  <div class="bg-white p-4 sm:p-8 rounded-xl">
    <ul class="grids" v-if="props.showPosts.length > 0">
      <li
          v-for="post in props.showPosts"
          @click="$emit('clickPost', post)"
      >
        <Post :post="post"/>
      </li>
    </ul>
    <div v-else class="flex justify-center mt-10 h-screen">
      <div class="max-w-72 flex flex-col items-center text-center	">
        <img :src="notFound" alt="notFound">
        <p class="font-medium text-sm text-gray-500">
          Поиск не дал результатов
        </p>
        <p class="font-medium text-xs text-gray-400">
          Повторите поиск или используйте фильтр для структуризации контента
        </p>
      </div>
    </div>
  </div>
</template>


<script setup lang="ts">
import Post from "../../components/Post.vue";
import notFound from "../../assets/img/not_found.svg"
import { InterfacePost } from "src/assets/interfacePost";

const props = defineProps<{
  showPosts: InterfacePost[];
}>();

const emit = defineEmits<{
  clickPost: [post: InterfacePost]
}>();
</script>


<style scoped lang="sass">
.grids
  display: grid
  grid-template-columns: repeat(auto-fill, minmax(380px, 1fr))
  gap: 40px 20px

@media (max-width: 550px)
  .grids
    grid-template-columns: repeat(auto-fill, minmax(250px, 1fr))

</style>

<template>
  <div class="flex flex-col gap-1 sm:gap-3 cursor-pointer">
    <div class="sm:h-64">
      <img
          :src="props.post.img"
          class="rounded-xl w-full h-full object-cover"
      />
    </div>
    <DateTimeComment
        class="mt-2.5"
        :post="props.post"
    />
    <h3 class="text-xl sm:text-2xl font-semibold">
      {{props.post.title}}
    </h3>
    <div class="text-sm sm:text-base font-medium">
      {{props.post.mini_description}}
    </div>
    <PostsFilter :post="props.post"/>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';
import { InterfacePost } from "../assets/interfacePost.ts";
import DateTimeComment from "./Post/DateTimeComment.vue";
import PostsFilter from "../components/Post/PostsFilter.vue";

const props = defineProps<{
  post: InterfacePost
}>();
</script>



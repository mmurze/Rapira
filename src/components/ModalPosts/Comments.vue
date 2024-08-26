<template>
  <ul class="flex flex-col gap-3">
    <li
        v-for="comment in props.post.comments"
        class="flex gap-2 items-start"
    >
      <div class="h-10 min-w-10">
        <img :src="comment.img" alt="img" class="w-full h-full object-cover rounded-full">
      </div>
      <div class="flex flex-col gap-1">
        <p class="text-base font-semibold">
          {{comment.name}}
        </p>
        <p class="text-sm font-medium">
          {{comment.comment}}
        </p>
        <p class="text-xs font-medium text-gray-500">
          {{getTimeAndDte(comment.date)}}
        </p>
      </div>
    </li>
  </ul>
</template>

<script setup lang="ts">
import {defineProps} from "vue";
import {InterfacePost} from "../../assets/interfacePost";

const props = defineProps<{
  post: InterfacePost;
}>();

function getTimeAndDte(data: string): string{
  const date = new Date(data)
  return date.getDate() + "." + (date.getMonth() + 1) + "." + date.getFullYear() + " в " + date.getHours() + ":" + date.getMinutes()
}
</script>

<style scoped>

</style>

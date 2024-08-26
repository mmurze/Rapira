<template>
  <div class="flex items-center flex-wrap gap-1 sm:gap-2.5 text-[#7E8299] text-xs sm:text-sm">
    <p>{{getTime(props.post.date)}}</p>
    <img :src="dot" width="7px"/>
    <div class="flex gap-1">
      <img :src="time"/>
      <p>{{props.post.timeForRead ? props.post.timeForRead : 0}}</p>
      <p>мин</p>
    </div>
    <img :src="dot" width="7px"/>
    <div class="flex gap-1">
      <img :src="commentsImg"/>
      <p>{{props.post.comments.length}}</p>
      <p>{{getCommentWord(props.post.comments.length)}}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import dot from "../../assets/img/dot.svg"
import time from "../../assets/img/time.svg"
import commentsImg from "../../assets/img/comments.svg"
import {EnumMonths} from "../../assets/enumMonths.ts";
import {defineProps} from "vue";
import {InterfacePost} from "../../assets/interfacePost";

const props = defineProps<{
  post: InterfacePost;
}>();

function getTime(data: string): string{
  const date = new Date(data)
  return date.getDate() + " " + EnumMonths[date.getMonth()]
}

function getCommentWord(n: number): string{
  if (n === 1) {
    return "комментарий"
  }
  else if (n >= 2 && n <= 4){
    return "комментария"
  }
  else{
    return "комментариев"
  }
}
</script>


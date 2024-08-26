<template>
  <ul class="flex gap-2 flex-wrap">
    <li
        v-for="filter in props.post.filters"
        class="text-sm bg-[#EEF6FF] font-medium rounded-3xl py-1.5 px-3.5 text-[#2884EF]"
    >
      {{getFilter(filter)}}
    </li>
  </ul>
</template>

<script setup lang="ts">
import {EnumFilters} from "../../assets/enumFilters.ts";
import {defineProps} from "vue";
import {InterfacePost} from "../../assets/interfacePost";

const props = defineProps<{
  post: InterfacePost;
}>();

function getFilter(filter: string): string {
  return EnumFilters[filter]
}
</script>


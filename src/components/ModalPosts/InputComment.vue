<template>
  <div class="flex relative">
        <textarea
            :class=" [
                {
                  'border-blue-400 border-2 min-h-32':  props.inputComment.length > 0 && props.inputComment.length < 251,
                  'border-red-600 border-2 min-h-32': props.inputComment.length >= 251
                },
                'border-2 border-gary-100 p-4 pr-9 rounded-md text-sm font-mediumh h-[56px] resize-none'
                ]"
            type="text"
            :value="props.inputComment"
            @input="$emit('update:inputComment', $event.target.value)"
            placeholder="Введите комментарий"
        />
    <button
        class="absolute right-6 top-5"
        v-if="props.inputComment.length > 0"
        @click="$emit('update:inputComment', '')"
    >
      <img :src="cross" alt="cross" width="10px">
    </button>
  </div>
  <div
      class="flex gap-1 text-xs font-medium text-gray-400"
      v-if="props.inputComment.length > 0"
  >
    <p :class="{'text-red-600': props.inputComment.length >= 251}">
      {{props.inputComment.length}}
    </p>
    <p>из 250 символов</p>
  </div>
  <div
      class="flex gap-3 justify-end"
      v-if="props.inputComment.length"
  >
    <button
        class="text-sm bg-[#EEF6FF] rounded-md font-bold py-3 w-32 text-[#2884EF]"
        @click="$emit('update:inputComment', '')"
    >
      Отмена
    </button>
    <button
        :class="[
                {'text': props.inputComment.length >= 251},
                'text-sm text-white bg-[#2884EF] rounded-md font-bold py-3 w-32 '
                ]"
        :disabled="props.inputComment.length >= 251"
        @click="$emit('postComment')"
    >
      Опубликовать
    </button>
  </div>
</template>

<script setup lang="ts">
import {defineProps} from "vue";
import cross from '../../assets/img/cross.svg'

const props = defineProps<{
  inputComment: string
}>();

const emit = defineEmits<{
  'update:inputComment': [value: string]
  postComment
}>();
</script>

<style scoped>
.text{
  background-color: #F9F9F9;
  color: #D8D8E5;
}
</style>

<template>
  <div v-if="isOpen" class="modal">
    <div class="modal_container">
      <div class="flex justify-between text-xl sm:text-2xl font-semibold">
        <h2>{{props.post.title}}</h2>
        <button @click="clickClose">
          <img :src="cross" alt="cross" width="15px">
        </button>
      </div>
      <DateTimeComment
          :post="props.post"
      />
      <div class="sm:h-96">
        <img
            :src="props.post.img"
            alt="img"
            class="rounded-xl w-full h-full object-cover"
        />
      </div>
      <div class="font-medium text-sm sm:text-base">
        {{props.post.description}}
      </div>
      <PostsFilter :post="props.post"/>
      <div class="flex gap-1.5 items-center text-base">
        <p class="font-semibold">Комментариев</p>
        <p class="text-[#7E8299]">{{props.post.comments.length}}</p>
      </div>
      <InputComment
          :input-comment="inputComment"
          @update:input-comment="updateInputComment"
          @post-comment="postComment"
      />
      <Comments :post="props.post"/>
    </div>
  </div>
</template>

<script setup lang="ts">
import cross from '../assets/img/cross.svg'
import DateTimeComment from "./Post/DateTimeComment.vue";
import PostsFilter from "../components/Post/PostsFilter.vue";
import { defineProps, ref} from 'vue';
import { InterfacePost } from "../assets/interfacePost.ts";
import { Ref } from "vue/dist/vue";
import Comments from "./ModalPosts/Comments.vue";
import InputComment from "./ModalPosts/InputComment.vue";

const props = defineProps<{
  post: InterfacePost;
  isOpen: boolean
}>();

const emit = defineEmits(['modal-close']);

const inputComment: Ref<string> = ref('')

function clickClose(): void{
  inputComment.value = ''
  emit('modal-close')
}

function updateInputComment(value): void{
  inputComment.value = value
}

function postComment(): void{
  console.log("post comment", inputComment.value)
  inputComment.value = ''
}

</script>

<style scoped lang="sass">
.modal
  position: fixed
  z-index: 9998
  top: 0
  left: 0
  width: 100%
  height: 100%
  padding: 10px
  background-color: rgba(0, 0, 0, 0.5)

.modal_container
  max-width: 700px
  width: 80%
  overflow-y: auto
  max-height: 80vh
  margin: 5vh auto 0
  padding: 15px
  display: flex
  flex-direction: column
  gap: 10px
  border-radius: 15px
  background-color: #fff
</style>

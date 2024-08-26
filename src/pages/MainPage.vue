<template>
  <Wrapper>
    <Filters
        :activeted-filter="activetedFilter"
        :search-title="searchTitle"
        @choose-filter="chooseFilter"
        @update:search-title="updateSearchTitle"
        @clean-filters="cleanFilters"
    />
  </Wrapper>
  <div class="bg-gray-100">
    <Wrapper>
      <Posts :show-posts="showPosts" @click-post="clickPost"/>
    </Wrapper>
  </div>
  <ModalPost :post="activePost" :is-open="activeModal" @modal-close="activeModal = false"/>
</template>

<script setup lang="ts">
import Wrapper from "../helpers/Wrapper.vue";
import Filters from "../layouts/mainPage/Filters.vue";
import axios from "axios";
import {Ref, ref, watch} from "vue";
import { InterfacePost } from "../assets/interfacePost";
import ModalPost from "../components/ModalPost.vue";
import { EnumFilters } from "../assets/enumFilters.ts";
import Posts from "../layouts/mainPage/Posts.vue";

const posts: Ref<InterfacePost[]> = ref([]);
const showPosts: Ref<InterfacePost[]> = ref([]);
const searchTitle: Ref<string> = ref('')
const activeModal: Ref<Boolean> = ref(false);
const activePost: Ref<InterfacePost> = ref(null);
const activetedFilter: Ref<boolean[]> = ref(Array(Object.keys(EnumFilters).length).fill(false))

//as if from the server
async function getPost(): Promise<void>{
  await axios.get<InterfacePost[]>("../../public/data.json")
      .then(res => {
        posts.value = <InterfacePost[]>res.data
      })
      .catch(e => console.error("error:", e))
}
getPost()

watch(
    [() => activetedFilter.value, () => searchTitle.value, () => posts.value],
    () => {
      showPosts.value = posts.value

      if(searchTitle.value.length > 0){
        const query = searchTitle.value.toLowerCase()
        showPosts.value = showPosts.value.filter(post => post.title.toLowerCase().includes(query))
      }

      if(activetedFilter.value.includes(true)){
        const activeKeys = []
        activetedFilter.value.forEach((value, index) => {
          if (value) {
            activeKeys.push(Object.keys(EnumFilters)[index])
          }
        })
        showPosts.value = showPosts.value.filter(post => post.filters.some(filter => activeKeys.includes(filter)))
      }
    },
    { deep: true }
);

function chooseFilter(key: string): void{
  const ind = Object.keys(EnumFilters).findIndex(item => item === key)
  activetedFilter.value[ind] = !activetedFilter.value[ind]
}

function clickPost(post: InterfacePost): void{
  activePost.value = post
  activeModal.value = true
}

function updateSearchTitle(value): void{
  searchTitle.value = value
}

function cleanFilters(): void{
  activetedFilter.value = Array(Object.keys(EnumFilters).length).fill(false)
}
</script>



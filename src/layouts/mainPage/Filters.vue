<template>
  <div class="px-4 sm:px-10">
    <div class="hidden sm:flex justify-between items-center gap-5">
      <div class="flex gap-10 items-center w-3/4">
        <h2 class="font-bold">Блог</h2>
        <div class="flex relative w-3/4 max-w-[400px]">
          <input
              type="text"
              :value="searchTitle"
              @input="$emit('update:searchTitle', $event.target.value)"
              placeholder="Поиск"
              class="bg-gray-100 w-full py-3 px-8 rounded-md bg-search-icon bg-no-repeat bg-[center_left_11px] text-sm"
          >
          <button
              v-if="searchTitle.length > 0"
              class="absolute top-4 right-3.5"
              @click="$emit('update:searchTitle', '')"
          >
            <img :src="cross" alt="cross" width="10px">
          </button>
        </div>
      </div>
      <div
          class="text-gray-400 text-sm cursor-pointer flex items-center gap-2"
      >
        <div
            v-if="props.activetedFilter.includes(true)"
            class="text-[#2884EF]"
            @click="$emit('cleanFilters')"
        >
          Очистить
        </div>
        <div
            v-if="isShowFilter"
            class="flex gap-1"
            @click="isShowFilter = false"
        >
          <p>Скрыть фильтр</p>
          <img :src="arrow_up" alt="arrow_up">
        </div>
        <div
            v-else
            class="flex gap-1"
            @click="isShowFilter = true"
        >
          <p>Фильтр</p>
          <img :src="arrow_down" alt="arrow_down">
        </div>
      </div>
    </div>
    <div class="flex flex-col sm:hidden justify-between items-center gap-5">
      <div class="flex gap-10 items-center justify-between w-full">
        <h2 class="font-bold">Блог</h2>
        <div class="text-gray-400 text-sm cursor-pointer flex items-center gap-2">
          <div
              v-if="props.activetedFilter.includes(true)"
              class="text-[#2884EF]"
              @click="$emit('cleanFilters')"
          >
            Очистить
          </div>
          <div
              v-if="isShowFilter"
              class="flex gap-1"
              @click="isShowFilter = false"
          >
            <p>Скрыть фильтр</p>
            <img :src="arrow_up" alt="arrow_up">
          </div>
          <div
              v-else
              class="flex gap-1"
              @click="isShowFilter = true"
          >
            <p>Фильтр</p>
            <img :src="arrow_down" alt="arrow_down">
          </div>
        </div>
      </div>
      <div class="flex relative w-full">
        <input
            type="text"
            :value="searchTitle"
            @input="$emit('update:searchTitle', $event.target.value)"
            placeholder="Поиск"
            class="bg-gray-100 w-full py-3 px-8 rounded-md bg-search-icon bg-no-repeat bg-[center_left_11px] text-sm"
        >
        <button
            v-if="searchTitle.length > 0"
            class="absolute top-4 right-3.5"
            @click="$emit('update:searchTitle', '')"
        >
          <img :src="cross" alt="cross" width="10px">
        </button>
      </div>
    </div>
    <div class="pt-5" v-if="isShowFilter">
      <ul class="flex gap-3 flex-wrap">
        <li
            v-for="(filter, key) in EnumFilters"
            :key="key"
            :class="[
                {'active': isActiveFilter(key)},
                'flex gap-2 text-sm sm:text-base bg-[#EEF6FF] select-none font-medium rounded-3xl py-2 px-3 text-[#2884EF] cursor-pointer'
                ]"
            @click="onClickFilter(key)"
        >
          {{filter}}
          <img v-if="!isActiveFilter(key)" :src="plus" alt="plus">
          <img v-else :src="mark" alt="mark" >
        </li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import {Ref, ref } from 'vue';
import arrow_up from '../../assets/img/arrow_up.svg'
import arrow_down from '../../assets/img/arrow_down.svg'
import plus from '../../assets/img/plus.svg'
import mark from '../../assets/img/mark.svg'
import cross from '../../assets/img/cross.svg'
import { EnumFilters } from "../../assets/enumFilters";

const props = defineProps<{
  activetedFilter: boolean[];
  searchTitle: string;
}>();

const emit = defineEmits<{
  chooseFilter: [key: string],
  'update:searchTitle': [value: string],
  cleanFilters,
}>();

const isShowFilter: Ref<boolean> = ref(false)

function onClickFilter(key){
  emit('chooseFilter', key)
}

function isActiveFilter(key: string): boolean{
  const ind = Object.keys(EnumFilters).findIndex(item => item === key)
  return props.activetedFilter[ind]
}
</script>

<style scoped>
.active{
  background-color: #3E97FF;
  color: white;
}
</style>

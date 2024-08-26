<template>
  <div class="bg-black">
    <Wrapper>
      <div class="flex gap-20">
        <img :src="logo" alt="logo">
        <div class="flex gap-5 text-white text-sm font-semibold">
          <button class="px-3.5 py-2">
            Главная
          </button>
          <button class="bg-white/[.1] px-3.5 py-2 rounded-md text-[#3E97FF]">
            Блог
          </button>
        </div>
      </div>
    </Wrapper>
  </div>
</template>

<script setup>
import logo from "../assets/img/logo.svg"
import Wrapper from "../helpers/Wrapper.vue";
</script>


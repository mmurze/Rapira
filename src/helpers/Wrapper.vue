<template>
  <div class="wrapper">
    <slot></slot>
  </div>
</template>

<style lang="sass">
.wrapper
  width: 100%
  max-width: 1300px
  margin: 0 auto
  padding: 15px
  font-size: 25px


@media (max-width: 600px)
  .wrapper
    font-size: 20px

</style>

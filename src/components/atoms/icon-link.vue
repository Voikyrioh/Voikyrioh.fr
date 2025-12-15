<script setup lang="ts">
import { useTemplateRef } from "vue";

const { link, icon, name } = defineProps<{link: string, icon: string, name: string}>()
const linkRef = useTemplateRef('link')
</script>

<template>
  <img
      :src="icon"
      class="size-4 cursor-pointer transition-all duration-200 hover:scale-125"
      v-on:click="linkRef?.click()"
      :alt="name + ' link'">
  <a :href="link" ref="link" hidden></a>
</template>

<style scoped>

</style>

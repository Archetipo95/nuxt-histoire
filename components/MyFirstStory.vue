<script setup lang="ts">
import MyNuxtLink from "./MyNuxtLink";
</script>

<template>
  <div class="bg-slate-700 shadow-lg text-white h-screen flex justify-center items-center text-2xl">
    <ul>
      <li>
        <a href="https://github.com/Archetipo95">HTML link</a>
      </li>
      <li>
        <NuxtLink to="/about"> About page </NuxtLink>
      </li>
      <li>
        <NuxtLink v-slot="{ navigate }" to="/about" custom>
          <button @click="navigate">Custom about page</button>
        </NuxtLink>
      </li>
      <li>
        <NuxtLink to="https://nuxtjs.org"> Nuxt website </NuxtLink>
      </li>
      <li>
        <NuxtLink v-slot="{ href, target }" to="https://nuxtjs.org" custom>
          <a :href="href" :target="target">Go to {{ href }}</a>
        </NuxtLink>
      </li>
      <li>
        <NuxtLink to="https://twitter.com/nuxt_js" target="_blank">
          Nuxt Twitter with a blank target
        </NuxtLink>
      </li>
      <li>
        <NuxtLink to="https://discord.nuxtjs.org" target="_blank" rel="noopener">
          Nuxt Discord with a blank target and custom rel value
        </NuxtLink>
      </li>
      <li>
        <NuxtLink to="https://github.com/nuxt" no-rel>
          Nuxt GitHub without rel attribute
        </NuxtLink>
      </li>
      <li>
        <MyNuxtLink to="https://nuxtjs.org">
          Nuxt website with a custom link component with no default rel
          attribute
        </MyNuxtLink>
      </li>
      <li>
        <MyNuxtLink to="/">
          Index page with a custom link component with a custom active class
        </MyNuxtLink>
      </li>
      <li>
        <NuxtLink>Link without href and to</NuxtLink>
      </li>
    </ul>
  </div>
</template>

<style scoped lang="scss"></style>

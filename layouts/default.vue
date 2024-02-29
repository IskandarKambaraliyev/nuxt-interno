<script setup></script>

<template>
  <div class="min-h-[100svh] flex flex-col relative">
    <LayoutHeader />
    <main class="flex-1 text-secondary-500">
      <slot />
    </main>
    <LayoutFooter />
    <LayoutCopyright />
    <LayoutBackground />
  </div>
</template>

<style>
</style>

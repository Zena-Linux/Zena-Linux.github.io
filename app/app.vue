<template>
  <div class="h-dvh w-screen flex flex-col bg-base-200">
    <Navbar />
    <NuxtRouteAnnouncer />
    <DrawerSidebar>
      <NuxtPage />
    </DrawerSidebar>
    <ClientOnly>
      <Footer :class="isAtBottom ? 'h-18' : 'h-0'" class="overflow-hidden duration-300" />
    </ClientOnly>
  </div>
</template>

<script setup lang="ts">

const { isAtBottom } = useScrollBottom()
</script>
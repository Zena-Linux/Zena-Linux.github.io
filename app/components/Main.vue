<template>
  <div class="relative h-full w-full border-4 border-base-300/70 shadow-[inset_0_4px_5px_rgba(0,0,0,0.15)] rounded-xl bg-base-100">
    <div ref="scrollContainer" class="h-full w-full overflow-y-auto flex flex-col items-center">
      <div class="relative w-full px-4 lg:px-8 pt-8 pb-16 flex flex-col items-center">
        <slot></slot>
      </div>
      <div ref="bottom" class="h-px shrink-0 w-full"></div>
    </div>
    <label for="drawer" class=" absolute top-2 left-2 btn btn-circle drawer-button lg:hidden opacity-50 hover:opacity-100 transition-opacity motion-preset-fade"
    :class="{ 'hidden': !isDocs }">
      <Icon name="lucide:panel-left-open"></Icon>
    </label>
  </div>
</template>

<script setup lang="ts">
const bottom = ref<HTMLElement | null>(null);
const scrollContainer = ref<HTMLElement | null>(null);

useScrollBottom(bottom, scrollContainer);

const route = useRoute();
const router = useRouter();
const nuxtApp = useNuxtApp();
const scrollStore = useState<Record<string, number>>('route-scroll-positions', () => ({}));
const isDocs = computed(() => route.path.startsWith('/docs'))

const unregisterSave = router.beforeEach((to, from) => {
  if (scrollContainer.value) {
    scrollStore.value[from.fullPath] = scrollContainer.value.scrollTop;
  }
});

nuxtApp.hook('page:transition:finish', () => {
  if (scrollContainer.value) {
    const saved = scrollStore.value[route.fullPath] || 0;
    scrollContainer.value.scrollTo({
      top: saved,
      behavior: 'instant'
    });
  }
});

onUnmounted(() => {
  unregisterSave();
});
</script>
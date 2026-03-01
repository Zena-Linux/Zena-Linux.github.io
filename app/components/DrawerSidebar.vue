<template>
  <div class="drawer lg:drawer-open h-full overflow-auto bg-base-200">
    <input id="drawer" type="checkbox" class="drawer-toggle" />
    <div class="drawer-content h-full overflow-auto">
      <Main>
        <slot></slot>
      </Main>
    </div>

    <div class="drawer-side h-full">
      <label for="drawer" aria-label="close sidebar" class="drawer-overlay"></label>
      <div class="h-full overflow-x-hidden duration-300" :class="isDocs ? 'w-60' : 'w-0'">
        <ul class="menu h-full w-60 bg-base-200 p-4">
          <li v-for="parent in docs" :key="parent.path">
            <NuxtLink :to="parent.path" :class="{ 'menu-active': route.path === parent.path }">
              {{ parent.title }}
            </NuxtLink>

            <ul v-if="parent.children?.length">
              <li v-for="child in parent.children" :key="child.path">
                <NuxtLink :to="child.path" class="menu-link" :class="{ 'menu-active': route.path === child.path }">
                  {{ child.title }}
                </NuxtLink>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
const route = useRoute()

const isDocs = computed(() => route.path.startsWith('/docs'))

const { data: nav } = await useAsyncData('nav', () =>
  queryCollectionNavigation('docs')
    .order('order', 'ASC')
)
const docs = computed(() => {
  const items = nav.value?.[0]?.children?.map(parent => {
    if (parent.children?.length) {
      const indexFile = parent.children.find(child => child.path === parent.path)
      if (indexFile) {
        parent.order = indexFile.order
        parent.children = parent.children.filter(child => child.path !== parent.path)
      }
    }
    return parent
  }) ?? []

  return items.sort((a, b) => {
    const orderA = Number(a.order ?? 0)
    const orderB = Number(b.order ?? 0)
    return orderA - orderB
  })
})
</script>
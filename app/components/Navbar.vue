<template>
  <div class="navbar bg-base-200 shrink-0">
    <div class="navbar-start">
      <NuxtLink to="/" class="px-2 hover:motion-preset-pulse-sm">
        <img src="/favicon.ico" alt="Zena Logo" class="w-8 h-8"/>
      </NuxtLink>
    </div>
    <div class="navbar-center">
      <ul class="menu menu-horizontal px-1 gap-5">
        <li>
          <NuxtLink to="/">Home</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/blogs">Blogs</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/docs">Docs</NuxtLink>
        </li>
      </ul>
    </div>
    <div class="navbar-end">
    </div>
  </div>
</template>
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
    <div class="navbar-end gap-2 px-2">
      <a href="https://discord.gg/22MFgGgjG9" target="_blank" rel="noopener" class="btn btn-ghost btn-circle shadow-sm hover:scale-105 transition-transform">
        <Icon name="ic:baseline-discord" class="text-2xl" />
      </a>
      <a href="https://github.com/Zena-Linux/" target="_blank" rel="noopener" class="btn btn-ghost btn-circle shadow-sm hover:scale-105 transition-transform">
        <Icon name="mdi:github" class="text-2xl" />
      </a>
    </div>
  </div>
</template>
<template>
  <div id="download"
    class="p-8 md:p-12 bg-linear-to-r from-primary/20 to-secondary/20 rounded-2xl mb-12 border border-primary/20 shadow-2xl">
    <div class="text-center">
      <h2 class="text-4xl font-bold mb-4">
        <Icon name="lucide:download" class="mr-2 align-middle" />
        Get Zena
      </h2>
      <p class="text-2xl mb-8 font-medium">
        Ground your unbounded workspace on an enduring core. Ready to try Zena?
      </p>
      <p class="text-xl mb-8 text-base-content/70">
        Download the latest ISO below.
      </p>

      <div class="flex flex-col md:flex-row justify-center gap-6 mb-12">
        <a href="https://gofile.io/d/NOybCa" class="btn btn-primary btn-lg btn-wide gap-3 shadow-lg hover:scale-105 transition-transform">
          <Icon name="lucide:download" />
          GoFile
        </a>
        <a href="https://send.now/a/1CSI" class="btn btn-secondary btn-lg btn-wide gap-3 shadow-lg hover:scale-105 transition-transform">
          <Icon name="lucide:download" />
          Send.now
        </a>
      </div>

      <div class="rounded-2xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 shadow-xl bg-base-100 max-w-4xl mx-auto p-2">
        <div class="stat place-items-center">
          <div class="stat-figure text-primary">
            <Icon name="lucide:box" class="text-3xl" />
          </div>
          <div class="stat-title">Container-Ready</div>
          <div class="stat-value text-primary">100%</div>
          <div class="stat-desc">Out of the box</div>
        </div>

        <div class="stat place-items-center border-r-0 lg:border-r">
          <div class="stat-figure text-secondary">
            <Icon name="lucide:blocks" class="text-3xl" />
          </div>
          <div class="stat-title">Immutable Base</div>
          <div class="stat-value text-secondary">Atomic</div>
          <div class="stat-desc">Updates & Rollbacks</div>
        </div>

        <div class="stat place-items-center sm:col-span-2 lg:col-span-1">
          <div class="stat-figure text-accent">
            <Icon name="lucide:infinity" class="text-3xl" />
          </div>
          <div class="stat-title">Packages</div>
          <div class="stat-value text-accent">120k+</div>
          <div class="stat-desc">Via Nix</div>
        </div>
      </div>
    </div>
  </div>
</template>

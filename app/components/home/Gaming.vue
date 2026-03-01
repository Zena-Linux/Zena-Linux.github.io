<template>
  <div id="gaming"
    class="w-full bg-linear-to-r from-purple-900/20 to-pink-900/20 rounded-2xl shadow-2xl mb-12 p-8 md:p-12 border border-purple-500/20">
    <div class="flex flex-col">
      <h2 class="text-4xl font-bold mb-6">
        <Icon name="lucide:gamepad-2" class="text-purple-400 mr-3 align-middle" />
        Gaming? Just Opt‑In.
      </h2>

      <div class="grid lg:grid-cols-2 gap-12 items-center">
        <div>
          <p class="text-xl mb-6 leading-relaxed">
            Love games? Run one command and we'll set up everything you need:
          </p>

          <div class="mockup-code bg-base-300 mb-8 w-fit shadow-lg border border-white/5">
            <pre data-prefix="$" class="text-info"><code>gaming install</code></pre>
          </div>

          <p class="text-lg mb-6">
            We'll set up a dedicated <strong class="text-primary">Gaming Distrobox based on CachyOS v3</strong> with Steam,
            Heroic, Lutris, ProtonUp‑Qt, and everything else you need.
          </p>

          <p class="text-base-content/80 leading-relaxed">
            The gaming environment runs in a CachyOS v3 Distrobox, giving you the latest gaming libraries and tools. All
            launchers appear right in your app menu — no fuss, all performance. Your games benefit from both host-level
            kernel optimizations and a containerized, up-to-date gaming environment.
          </p>
        </div>

        <div class="space-y-6">
          <div class="p-6 bg-purple-900/20 rounded-2xl border-l-4 border-purple-500 shadow-inner">
            <h3 class="font-bold text-2xl mb-4 text-purple-300 flex items-center gap-2">
              <Icon name="lucide:cpu" />
              Performance at Every Level
            </h3>
            <p class="mb-4 text-purple-100/80">
              Zena gives you gaming optimizations <strong class="text-primary">from the host to the container</strong>:
            </p>
            <ul class="space-y-3">
              <li class="flex items-start gap-3">
                <Icon name="lucide:circle-check" class="text-purple-400 mt-1 shrink-0" />
                <span class="text-base-content/90"><strong>CachyOS Kernel</strong> on the host — LTO-optimized for
                  maximum performance</span>
              </li>
              <li class="flex items-start gap-3">
                <Icon name="lucide:circle-check" class="text-purple-400 mt-1 shrink-0" />
                <span class="text-base-content/90"><strong>Extended Scheduler (sched_ext)</strong> at the host level —
                  better CPU allocation</span>
              </li>
              <li class="flex items-start gap-3">
                <Icon name="lucide:circle-check" class="text-purple-400 mt-1 shrink-0" />
                <span class="text-base-content/90"><strong>CachyOS v3 Gaming Distrobox</strong> — optimized container
                  environment</span>
              </li>
              <li class="flex items-start gap-3">
                <Icon name="lucide:circle-check" class="text-purple-400 mt-1 shrink-0" />
                <span class="text-base-content/90"><strong>Latest gaming libraries</strong> — updated graphics drivers
                  and compatibility layers</span>
              </li>
              <li class="flex items-start gap-3">
                <Icon name="lucide:circle-check" class="text-purple-400 mt-1 shrink-0" />
                <span class="text-base-content/90"><strong>Complete isolation</strong> — gaming setup separated from
                  your main system</span>
              </li>
            </ul>
            <p class="mt-4 text-sm text-purple-200/70 italic">
              Unlike setups where only the host or only the container is optimized, Zena delivers performance at every
              level.
            </p>
          </div>
        </div>
      </div>

      <div class="mt-12 flex flex-wrap justify-center gap-4">
        <BadgeLarge class="badge-primary">
          <Icon name="lucide:zap" class="mr-2" />
          Host-Level Optimizations
        </BadgeLarge>
        <BadgeLarge class="badge-secondary">
          <Icon name="lucide:cpu" class="mr-2" />
          CachyOS Kernel
        </BadgeLarge>
        <BadgeLarge class="badge-accent">
          <Icon name="lucide:package" class="mr-2" />
          CachyOS v3 Container
        </BadgeLarge>
      </div>
    </div>
  </div>
</template>

<template>
  <CardLarge id="updates">
    <div class="w-full">
      <div class="lg:mr-12">
        <h2 class="text-3xl md:text-4xl font-bold mb-4 md:mb-6 text-center">
          <Icon name="lucide:refresh-cw" class="text-primary mr-2 align-middle" />
          Always Fresh. Never Fragile.
        </h2>

        <p class="text-lg md:text-xl mb-4 md:mb-6 leading-relaxed text-center">
          Zena delivers <strong>daily image-based updates</strong> while respecting your workflow.
          The immutable design means you can update with confidence that your current version stays rock-solid until
          you're ready to move forward.
        </p>

        <div class="grid md:grid-cols-2 gap-6 md:gap-8 mb-6 md:mb-8">
          <div class="space-y-3 md:space-y-4">
            <h3 class="text-xl md:text-2xl font-bold text-primary flex items-center gap-2">
              <Icon name="lucide:user-check" />
              Update on Your Terms
            </h3>
            <ul class="space-y-2 md:space-y-3">
              <li class="flex items-start gap-2 md:gap-3">
                <Icon name="lucide:rotate-cw" class="text-primary text-lg md:text-xl mt-0.5 shrink-0" />
                <span><strong>Daily updates available</strong> but never forced</span>
              </li>
              <li class="flex items-start gap-2 md:gap-3">
                <Icon name="lucide:wifi-off" class="text-primary text-lg md:text-xl mt-0.5 shrink-0" />
                <span><strong>Work offline confidently</strong> without updates</span>
              </li>
              <li class="flex items-start gap-2 md:gap-3">
                <Icon name="lucide:infinity" class="text-primary text-lg md:text-xl mt-0.5 shrink-0" />
                <span><strong>Stay on any version</strong> as long as you want</span>
              </li>
            </ul>
          </div>

          <div class="space-y-3 md:space-y-4">
            <h3 class="text-xl md:text-2xl font-bold text-secondary flex items-center gap-2">
              <Icon name="lucide:shield-check" />
              Zero-Risk Updates
            </h3>
            <ul class="space-y-2 md:space-y-3">
              <li class="flex items-start gap-2 md:gap-3">
                <Icon name="lucide:box" class="text-secondary text-lg md:text-xl mt-0.5 shrink-0" />
                <span><strong>Atomic updates</strong>: Entire system as one unit</span>
              </li>
              <li class="flex items-start gap-2 md:gap-3">
                <Icon name="lucide:rotate-ccw" class="text-secondary text-lg md:text-xl mt-0.5 shrink-0" />
                <span><strong>Instant rollbacks</strong> at boot time</span>
              </li>
              <li class="flex items-start gap-2 md:gap-3">
                <Icon name="lucide:circle-check" class="text-secondary text-lg md:text-xl mt-0.5 shrink-0" />
                <span><strong>No broken states</strong> - all or nothing</span>
              </li>
            </ul>
          </div>
        </div>
        <div class="bg-base-100/50 rounded-xl p-4 md:p-6 mb-6 md:mb-8 border border-base-300">
          <div class="flex items-center gap-3 mb-3 md:mb-4">
            <Icon name="lucide:rocket" class="text-accent text-xl md:text-2xl" />
            <h3 class="text-xl md:text-2xl font-bold text-accent">
              Update with Confidence
            </h3>
          </div>
          <p class="text-base md:text-lg mb-3 md:mb-4">
            Because Zena is immutable, your current version remains <strong>completely stable</strong> regardless of how
            long you use it.
            Whether you update daily or stay on a version for weeks, you're always on a rock-solid foundation.
          </p>
          <div class="flex items-start p-3 md:p-4 bg-primary/10 rounded-lg">
            <Icon name="lucide:lightbulb" class="text-primary text-lg md:text-xl mt-0.5 mr-2 md:mr-3 shrink-0" />
            <div>
              <h4 class="font-bold text-base md:text-lg">No Pressure to Update</h4>
              <p class="text-base-content/70 text-sm md:text-base">Unlike traditional systems that degrade over time,
                Zena's immutable design
                means every version is as stable as the day it was installed.</p>
            </div>
          </div>
        </div>

        <div class="mt-6 md:mt-8 flex flex-wrap gap-2 md:gap-4 justify-center">
          <BadgeLarge class="badge-primary">
            <Icon name="lucide:user-check" class="mr-2" />
            Your Schedule
          </BadgeLarge>
          <BadgeLarge class="badge-secondary">
            <Icon name="lucide:rotate-ccw" class="mr-2" />
            Instant Rollbacks
          </BadgeLarge>
          <BadgeLarge class="badge-accent">
            <Icon name="lucide:rocket" class="mr-2" />
            Update with Confidence
          </BadgeLarge>
        </div>
      </div>
    </div>
  </CardLarge>
</template>

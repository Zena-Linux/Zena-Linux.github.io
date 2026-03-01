<template>
  <div id="support" class="w-full">
    <div class="grid lg:grid-cols-2 lg:gap-8">
      <!-- Sponsorship Section -->
      <CardLarge>
        <h3 class="card-title text-2xl mb-4 flex items-center gap-3">
          <Icon name="lucide:coffee" class="text-warning text-3xl" />
          Sponsorship & Donations
        </h3>
        <p class="mb-6 text-base-content/70">Support the development and maintenance of Zena:</p>

        <div class="space-y-4 mb-2">
          <!-- GitHub Sponsors -->
          <a href="https://github.com/sponsors/JianZcar" target="_blank" rel="noopener"
            class="flex items-center p-4 bg-base-100 rounded-xl hover:bg-base-300 transition-all border border-transparent hover:border-purple-500/30 group shadow-sm">
            <div
              class="w-12 h-12 rounded-full bg-linear-to-r from-purple-500 to-pink-500 flex items-center justify-center mr-4 group-hover:scale-110 transition-transform">
              <Icon name="lucide:heart" class="text-white text-xl fill-white" />
            </div>
            <div class="flex-1">
              <h4 class="font-bold text-lg">GitHub Sponsors</h4>
              <p class="text-sm text-base-content/60">Support development on GitHub</p>
            </div>
            <Icon name="lucide:arrow-right" class="text-base-content/30 group-hover:text-primary transition-colors" />
          </a>

          <!-- Buy Me a Coffee -->
          <a href="https://buymeacoffee.com/jianzcar" target="_blank" rel="noopener"
            class="flex items-center p-4 bg-base-100 rounded-xl hover:bg-base-300 transition-all border border-transparent hover:border-warning/30 group shadow-sm">
            <div
              class="w-12 h-12 rounded-full bg-linear-to-r from-yellow-500 to-orange-500 flex items-center justify-center mr-4 group-hover:scale-110 transition-transform">
              <Icon name="lucide:coffee" class="text-white text-xl" />
            </div>
            <div class="flex-1">
              <h4 class="font-bold text-lg">Buy Me a Coffee</h4>
              <p class="text-sm text-base-content/60">Show support with a coffee</p>
            </div>
            <Icon name="lucide:arrow-right" class="text-base-content/30 group-hover:text-warning transition-colors" />
          </a>
        </div>
        <p class="text-sm text-base-content/50 text-center mt-6">
          Every donation helps sustain the project
        </p>
      </CardLarge>

      <!-- Contribute Section -->
      <CardLarge>
        <h3 class="card-title text-2xl mb-4 flex items-center gap-3">
          <Icon name="lucide:code-2" class="text-secondary text-3xl" />
          Contribute
        </h3>
        <p class="mb-6 text-base-content/70">Every contribution helps, no matter how small:</p>

        <div class="space-y-4">
          <a href="https://github.com/Zena-Linux/Zena/issues" target="_blank" rel="noopener"
            class="flex items-center p-4 bg-base-100 rounded-xl hover:bg-base-300 transition-all border border-transparent hover:border-accent/30 group shadow-sm">
            <div
              class="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mr-4 group-hover:scale-110 transition-transform">
              <Icon name="lucide:bug" class="text-accent text-xl" />
            </div>
            <div class="flex-1">
              <h4 class="font-bold text-lg">Report Bugs</h4>
              <p class="text-sm text-base-content/60">Help us find and fix issues</p>
            </div>
            <Icon name="lucide:arrow-right" class="text-base-content/30 group-hover:text-accent transition-colors" />
          </a>

          <a href="https://github.com/Zena-Linux/Zena/pulls" target="_blank" rel="noopener"
            class="flex items-center p-4 bg-base-100 rounded-xl hover:bg-base-300 transition-all border border-transparent hover:border-accent/30 group shadow-sm">
            <div
              class="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mr-4 group-hover:scale-110 transition-transform">
              <Icon name="lucide:git-pull-request" class="text-accent text-xl" />
            </div>
            <div class="flex-1">
              <h4 class="font-bold text-lg">Submit Pull Requests</h4>
              <p class="text-sm text-base-content/60">Contribute code directly</p>
            </div>
            <Icon name="lucide:arrow-right" class="text-base-content/30 group-hover:text-accent transition-colors" />
          </a>

          <a href="https://github.com/Zena-Linux/Zena/discussions" target="_blank" rel="noopener"
            class="flex items-center p-4 bg-base-100 rounded-xl hover:bg-base-300 transition-all border border-transparent hover:border-accent/30 group shadow-sm">
            <div
              class="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center mr-4 group-hover:scale-110 transition-transform">
              <Icon name="lucide:message-square" class="text-accent text-xl" />
            </div>
            <div class="flex-1">
              <h4 class="font-bold text-lg">Join Discussions</h4>
              <p class="text-sm text-base-content/60">Share ideas and feedback</p>
            </div>
            <Icon name="lucide:arrow-right" class="text-base-content/30 group-hover:text-accent transition-colors" />
          </a>
        </div>
        <p class="text-sm text-base-content/50 text-center mt-6">
          Help us build the future of Zena
        </p>
      </CardLarge>
    </div>
  </div>
</template>

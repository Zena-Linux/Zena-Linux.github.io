<template>
  <CardLarge id="isolated-environments">
    <div class="w-full">
      <div class="text-center mb-12">
        <h2 class="text-4xl font-bold mb-4">
          <Icon name="lucide:layers" class="text-primary align-middle mr-2" />
          Separate Spaces, Shared System
        </h2>
        <p class="text-2xl text-base-content/70 max-w-3xl mx-auto">
          Complete separation between environments while sharing the same robust foundation.
        </p>
      </div>

      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        <Card>
          <div
            class="w-20 h-20 bg-linear-to-br from-primary/30 to-primary/10 rounded-full flex items-center justify-center mb-4">
            <Icon name="lucide:lock" class="text-primary text-3xl" />
          </div>
          <h3 class="card-title text-2xl mb-2 text-primary">Encrypted Home</h3>
          <p class="text-base-content/70">Each user's home directory is individually encrypted with LUKS</p>
        </Card>

        <Card>
          <div
            class="w-20 h-20 bg-linear-to-br from-secondary/30 to-secondary/10 rounded-full flex items-center justify-center mb-4">
            <Icon name="lucide:layers" class="text-secondary text-3xl" />
          </div>
          <h3 class="card-title text-2xl mb-2 text-secondary">Independent Nix Profiles</h3>
          <p class="text-base-content/70">Different tools, versions, and configurations per user</p>
        </Card>

        <Card>
          <div
            class="w-20 h-20 bg-linear-to-br from-accent/30 to-accent/10 rounded-full flex items-center justify-center mb-4">
            <Icon name="lucide:box" class="text-accent text-3xl" />
          </div>
          <h3 class="card-title text-2xl mb-2 text-accent">Container Space</h3>
          <p class="text-base-content/70">Separate Distrobox and Podman environments for each user</p>
        </Card>
      </div>

      <Card class="mb-12">
        <div class="flex-col text-center">
          <h3 class="text-3xl font-bold mb-6">
            <Icon name="lucide:split" class="text-primary mr-3" />
            How It Works
          </h3>

          <div class="grid md:grid-cols-2 gap-6 mt-8">
            <div class="text-left">
              <ul class="space-y-4">
                <li class="flex items-start">
                  <div class="shrink-0 w-8 h-8 rounded-full bg-success/20 flex items-center justify-center mt-1 mr-3">
                    <Icon name="lucide:check" class="text-success" />
                  </div>
                  <div>
                    <h4 class="font-bold text-lg">Encrypted User Homes</h4>
                    <p class="text-base-content/70">Each user's home directory is encrypted separately</p>
                  </div>
                </li>
                <li class="flex items-start">
                  <div class="shrink-0 w-8 h-8 rounded-full bg-success/20 flex items-center justify-center mt-1 mr-3">
                    <Icon name="lucide:check" class="text-success" />
                  </div>
                  <div>
                    <h4 class="font-bold text-lg">Separate Nix Profiles</h4>
                    <p class="text-base-content/70">Users can install different tools without conflicts</p>
                  </div>
                </li>
              </ul>
            </div>

            <div class="text-left">
              <ul class="space-y-4">
                <li class="flex items-start">
                  <div class="shrink-0 w-8 h-8 rounded-full bg-success/20 flex items-center justify-center mt-1 mr-3">
                    <Icon name="lucide:check" class="text-success" />
                  </div>
                  <div>
                    <h4 class="font-bold text-lg">Application Sandboxing</h4>
                    <p class="text-base-content/70">Flatpak isolates GUI applications per user</p>
                  </div>
                </li>
                <li class="flex items-start">
                  <div class="shrink-0 w-8 h-8 rounded-full bg-success/20 flex items-center justify-center mt-1 mr-3">
                    <Icon name="lucide:check" class="text-success" />
                  </div>
                  <div>
                    <h4 class="font-bold text-lg">Container Isolation</h4>
                    <p class="text-base-content/70">Distrobox environments are user-specific and isolated</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          <div class="mt-8 flex flex-wrap gap-4 justify-center">
            <BadgeLarge class="badge-primary">
              <Icon name="lucide:user-check" class="mr-2" />
              Multi-User Ready
            </BadgeLarge>
            <BadgeLarge class="badge-secondary">
              <Icon name="lucide:wrench" class="mr-2" />
              No Tool Conflicts
            </BadgeLarge>
            <BadgeLarge class="badge-accent">
              <Icon name="lucide:fingerprint" class="mr-2" />
              Enhanced Privacy
            </BadgeLarge>
          </div>
        </div>
      </Card>

      <div class="grid lg:grid-cols-2 gap-8">
        <Card>
          <div>
            <h3 class="text-3xl font-bold mb-6 text-primary">
              <Icon name="lucide:lightbulb" class="mr-3" />
              Practical Benefits
            </h3>

            <div class="space-y-6">
              <div class="flex items-start gap-4">
                <div class="shrink-0 w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                  <Icon name="lucide:users" class="text-primary text-xl" />
                </div>
                <div class="w-full">
                  <h4 class="font-bold text-lg mb-1">Shared Computers</h4>
                  <p class="text-base-content/70">Perfect for family or team computers where each user needs their own
                    setup</p>
                </div>
              </div>

              <div class="flex items-start gap-4">
                <div class="shrink-0 w-12 h-12 bg-secondary/20 rounded-lg flex items-center justify-center">
                  <Icon name="lucide:briefcase" class="text-secondary text-xl" />
                </div>
                <div class="w-full">
                  <h4 class="font-bold text-lg mb-1">Work-Life Separation</h4>
                  <p class="text-base-content/70">Keep work tools and personal environments completely separate</p>
                </div>
              </div>

              <div class="flex items-start gap-4">
                <div class="shrink-0 w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center">
                  <Icon name="lucide:hard-drive-download" class="text-accent text-xl" />
                </div>
                <div class="w-full">
                  <h4 class="font-bold text-lg mb-1">Portable Environments</h4>
                  <p class="text-base-content/70">Your encrypted home can be moved to another Systemd based system</p>
                </div>
              </div>
            </div>
          </div>
        </Card>

        <Card>
          <div>
            <h3 class="text-3xl font-bold mb-6 text-secondary">
              <Icon name="lucide:network" class="mr-3" />
              Complete Isolation Stack
            </h3>

            <div class="space-y-4">
              <div
                class="flex flex-col sm:flex-row sm:items-center justify-between p-3 bg-base-200/80 rounded-lg gap-2 sm:gap-0">
                <div class="flex items-center gap-3">
                  <Icon name="lucide:home" class="text-primary text-xl" />
                  <span class="font-semibold">Home Directory</span>
                </div>
                <BadgeLarge class="badge-primary">LUKS Encrypted</BadgeLarge>
              </div>

              <div
                class="flex flex-col sm:flex-row sm:items-center justify-between p-3 bg-base-200/80 rounded-lg gap-2 sm:gap-0">
                <div class="flex items-center gap-3">
                  <Icon name="lucide:package-search" class="text-secondary text-xl" />
                  <span class="font-semibold">Package Management</span>
                </div>
                <BadgeLarge class="badge-secondary">Per-User Nix Profile</BadgeLarge>
              </div>

              <div
                class="flex flex-col sm:flex-row sm:items-center justify-between p-3 bg-base-200/80 rounded-lg gap-2 sm:gap-0">
                <div class="flex items-center gap-3">
                  <Icon name="lucide:monitor" class="text-accent text-xl" />
                  <span class="font-semibold">GUI Applications</span>
                </div>
                <BadgeLarge class="badge-accent">Flatpak Sandboxed</BadgeLarge>
              </div>

              <div
                class="flex flex-col sm:flex-row sm:items-center justify-between p-3 bg-base-200/80 rounded-lg gap-2 sm:gap-0">
                <div class="flex items-center gap-3">
                  <Icon name="lucide:box" class="text-primary text-xl" />
                  <span class="font-semibold">Container Workspaces</span>
                </div>
                <BadgeLarge class="badge-primary">User Distrobox</BadgeLarge>
              </div>
            </div>

            <div class="mt-6 p-4 bg-secondary/10 rounded-lg border-l-4 border-secondary">
              <p class="text-sm text-base-content/90">
                <Icon name="lucide:info" class="text-secondary mr-2 inline-block" />
                Each layer adds protection and separation, ensuring your tools and data stay isolated from other users.
              </p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  </CardLarge>
</template>

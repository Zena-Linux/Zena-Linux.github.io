<template>
  <div class="flex flex-col gap-12 w-full">
    <div class="flex justify-center items-center">
      <img src="/images/logo.png" class="w-25 lg:w-50" alt="Zena OS Logo" />
      <h1
        class="text-6xl lg:text-9xl font-bold bg-linear-to-t from-blue-400 to-primary bg-clip-text text-transparent -mb-5 lg:-mb-6 scale-x-110">
        ena
      </h1>
    </div>
    <CardLarge>
      <div>
        <p class="py-6 text-xl lg:text-2xl leading-relaxed text-center">
          A modern, immutable operating system that brings the power of containers and reproducible environments to your
          desktop.
          Experience a rock‑solid foundation that stays <em class="italic font-semibold">rock-solid</em>, with complete
          flexibility in your user environment.
        </p>

        <div class="flex flex-wrap justify-center gap-4 mt-8 whitespace-nowrap">
          <BadgeLarge class="badge-primary shrink-0">
            <Icon name="lucide:shield-check" />
            Immutable
          </BadgeLarge>
          <BadgeLarge class="badge-secondary shrink-0">
            <Icon name="ph:package-duotone" />
            Container-Native
          </BadgeLarge>
          <BadgeLarge class="badge-accent shrink-0">
            <Icon name="lucide:terminal" />
            Built for Developers
          </BadgeLarge>
        </div>
      </div>
    </CardLarge>
    <CardLarge>
      <div class="text-center">
        <div class="flex mb-8 justify-center gap-4">
          <img src="https://github.com/user-attachments/assets/07d05cd0-d5dc-4a28-9a35-51bae8f119a0"
            class="w-24 lg:w-full max-w-48" alt="niri logo" />
          <img
            src="https://raw.githubusercontent.com/DreamMaoMao/mangowc/refs/heads/main/assets/mango-transparency-256.png"
            class="w-24 lg:w-full max-w-48" alt="MangoWC logo" />
        </div>

        <h2 class="text-3xl lg:text-4xl font-bold mb-6">
          <Icon name="lucide:layout-dashboard" class="text-primary mr-3" />
          Work in Tiles, Not Chaos
        </h2>

        <p class="lg:text-xl py-4">
          Zena features two
          <span class="font-bold">powerful Wayland compositors</span> —
          <strong class="text-primary">niri</strong> and
          <strong class="text-secondary">MangoWC</strong> — giving you
          flexible, modern workflows on Wayland.
          <strong class="text-primary">Niri</strong> brings a unique
          <span class="font-semibold">scrollable tiling experience</span>,
          where windows are arranged in a horizontal, infinitely scrollable layout
          to keep focus and flow without resizing existing windows.
          Meanwhile, <strong class="text-secondary">MangoWC</strong>
          offers a lightweight,
          <span class="font-semibold">feature-rich compositor</span> built on dwl
          that delivers excellent XWayland support, smooth animations, tag-based
          layouts, and rich window states for maximum flexibility and performance.
          Paired with <strong class="text-accent">Dank Material Shell</strong>,
          you get dynamic theming, smooth animations, and a desktop that’s
          both beautiful and incredibly efficient.
        </p>

        <p class="mt-6 text-lg font-semibold">
          Smart Tiling • Dynamic Themes • Smooth Animations
        </p>
      </div>
    </CardLarge>

    <CardLarge>
      <div>
        <div class="text-center mb-12">
          <h2 class="text-4xl font-bold mb-4">
            <Icon name="lucide:sparkles" class="text-primary align-middle mr-2" />
            Why Zena Works
          </h2>
          <p class="text-xl text-base-content/70">Core principles for a better desktop experience</p>
        </div>

        <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div class="card bg-base-100 shadow-xl">
            <div class="card-body items-center text-center">
              <div
                class="w-20 h-20 bg-linear-to-br from-primary/30 to-primary/10 rounded-full flex items-center justify-center mb-4">
                <Icon name="ph:lightning-bold" class="text-primary text-3xl" />
              </div>
              <h3 class="card-title text-2xl mb-2">Performance First</h3>
              <p class="text-base-content/70">Powered by CachyOS kernel with LTO optimizations for a snappier experience
              </p>
            </div>
          </div>

          <div class="card bg-base-100 shadow-xl">
            <div class="card-body items-center text-center">
              <div
                class="w-20 h-20 bg-linear-to-br from-secondary/30 to-secondary/10 rounded-full flex items-center justify-center mb-4">
                <Icon name="lucide:shield-check" class="text-secondary text-3xl" />
              </div>
              <h3 class="card-title text-2xl mb-2">Security by Design</h3>
              <p class="text-base-content/70">Encrypted home directories, atomic updates, and Secure Boot support</p>
            </div>
          </div>

          <div class="card bg-base-100 shadow-xl">
            <div class="card-body items-center text-center">
              <div
                class="w-20 h-20 bg-linear-to-br from-accent/30 to-accent/10 rounded-full flex items-center justify-center mb-4">
                <Icon name="lucide:terminal" class="text-accent text-3xl" />
              </div>
              <h3 class="card-title text-2xl mb-2">Developer Ready</h3>
              <p class="text-base-content/70">Built-in Nix means any tool you need is just a command away</p>
            </div>
          </div>

          <div class="card bg-base-100 shadow-xl">
            <div class="card-body items-center text-center">
              <div
                class="w-20 h-20 bg-linear-to-br from-info/30 to-info/10 rounded-full flex items-center justify-center mb-4">
                <Icon name="ph:cube-duotone" class="text-info text-3xl" />
              </div>
              <h3 class="card-title text-2xl mb-2">Isolated Environments</h3>
              <p class="text-base-content/70">Purpose-built isolation: Nix profiles, Flatpak apps, containers, and
                multi-user separation</p>
            </div>
          </div>
        </div>

        <div class="mt-12 overflow-x-auto">
          <table class="table table-zebra w-full">
            <thead>
              <tr class="text-lg">
                <th class="bg-base-300">
                  <Icon name="lucide:list-checks" class="mr-2" />
                  Feature
                </th>
                <th class="bg-base-300">
                  <Icon name="lucide:file-text" class="mr-2" />
                  Description
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td class="font-bold">Isolated Environments</td>
                <td>Per-user isolation: Separate encrypted homes, Nix profiles, and configurations for each account</td>
              </tr>
              <tr>
                <td class="font-bold">Smart Tiling Workspace</td>
                <td>niri & MangoWC automatically arranges windows in columns on an infinite strip</td>
              </tr>
              <tr>
                <td class="font-bold">Atomic Updates</td>
                <td>Update the entire OS as a single image with instant rollbacks</td>
              </tr>
              <tr>
                <td class="font-bold">Encrypted Homes</td>
                <td>Your home directory is a secure encrypted container</td>
              </tr>
              <tr>
                <td class="font-bold">Nix & Zix</td>
                <td>Access 120,000+ packages with Nix, use zix for easy management</td>
              </tr>
              <tr>
                <td class="font-bold">Container-Native</td>
                <td>Podman and Distrobox ready out‑of‑box for safe isolation</td>
              </tr>
              <tr>
                <td class="font-bold">Dynamic Desktop</td>
                <td>Dank Material Shell brings smooth animations and dynamic theming</td>
              </tr>
              <tr>
                <td class="font-bold">Gaming On Demand</td>
                <td>One command sets up Steam, Heroic, Lutris, and more</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </CardLarge>

    <div id="isolated-environments" class="pt-8">
      <div class="text-center mb-12">
        <h2 class="text-4xl font-bold mb-4">
          Separate Spaces, Shared System
        </h2>
        <p class="text-2xl text-base-content/70 max-w-3xl mx-auto">
          Complete separation between environments while sharing the same robust foundation.
        </p>
      </div>

      <div class="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
        <div class="card bg-base-200 shadow-xl">
          <div class="card-body items-center text-center">
            <div
              class="w-20 h-20 bg-linear-to-br from-primary/30 to-primary/10 rounded-full flex items-center justify-center mb-4">
              <Icon name="lucide:lock" class="text-primary text-3xl" />
            </div>
            <h3 class="card-title text-2xl mb-2 text-primary">Encrypted Home</h3>
            <p class="text-base-content/70">Each user's home directory is individually encrypted with LUKS</p>
          </div>
        </div>

        <div class="card bg-base-200 shadow-xl">
          <div class="card-body items-center text-center">
            <div
              class="w-20 h-20 bg-linear-to-br from-secondary/30 to-secondary/10 rounded-full flex items-center justify-center mb-4">
              <Icon name="lucide:layers" class="text-secondary text-3xl" />
            </div>
            <h3 class="card-title text-2xl mb-2 text-secondary">Independent Nix Profiles</h3>
            <p class="text-base-content/70">Different tools, versions, and configurations per user</p>
          </div>
        </div>

        <div class="card bg-base-200 shadow-xl">
          <div class="card-body items-center text-center">
            <div
              class="w-20 h-20 bg-linear-to-br from-accent/30 to-accent/10 rounded-full flex items-center justify-center mb-4">
              <Icon name="lucide:box" class="text-accent text-3xl" />
            </div>
            <h3 class="card-title text-2xl mb-2 text-accent">Container Space</h3>
            <p class="text-base-content/70">Separate Distrobox and Podman environments for each user</p>
          </div>
        </div>
      </div>

      <div class="bg-base-200 rounded-2xl shadow-2xl mb-12 p-8">
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
            <div class="badge badge-primary badge-lg p-4 whitespace-nowrap">
              <Icon name="lucide:user-check" class="mr-2" />
              Multi-User Ready
            </div>
            <div class="badge badge-secondary badge-lg p-4 whitespace-nowrap">
              <Icon name="lucide:wrench" class="mr-2" />
              No Tool Conflicts
            </div>
            <div class="badge badge-accent badge-lg p-4 whitespace-nowrap">
              <Icon name="lucide:fingerprint" class="mr-2" />
              Enhanced Privacy
            </div>
          </div>
        </div>
      </div>

      <div class="grid lg:grid-cols-2 gap-8">
        <div class="bg-base-200 p-8 rounded-2xl shadow-xl">
          <h3 class="text-3xl font-bold mb-6 text-primary">
            <Icon name="lucide:lightbulb" class="mr-3" />
            Practical Benefits
          </h3>

          <div class="space-y-6">
            <div class="flex items-start gap-4">
              <div class="shrink-0 w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                <Icon name="lucide:users" class="text-primary text-xl" />
              </div>
              <div>
                <h4 class="font-bold text-lg mb-1">Shared Computers</h4>
                <p class="text-base-content/70">Perfect for family or team computers where each user needs their own
                  setup</p>
              </div>
            </div>

            <div class="flex items-start gap-4">
              <div class="shrink-0 w-12 h-12 bg-secondary/20 rounded-lg flex items-center justify-center">
                <Icon name="lucide:briefcase" class="text-secondary text-xl" />
              </div>
              <div>
                <h4 class="font-bold text-lg mb-1">Work-Life Separation</h4>
                <p class="text-base-content/70">Keep work tools and personal environments completely separate</p>
              </div>
            </div>

            <div class="flex items-start gap-4">
              <div class="shrink-0 w-12 h-12 bg-accent/20 rounded-lg flex items-center justify-center">
                <Icon name="lucide:hard-drive-download" class="text-accent text-xl" />
              </div>
              <div>
                <h4 class="font-bold text-lg mb-1">Portable Environments</h4>
                <p class="text-base-content/70">Your encrypted home can be moved to another Systemd based system</p>
              </div>
            </div>
          </div>
        </div>

        <div class="bg-base-200 p-8 rounded-2xl shadow-xl">
          <h3 class="text-3xl font-bold mb-6 text-secondary">
            <Icon name="lucide:network" class="mr-3" />
            Complete Isolation Stack
          </h3>

          <div class="space-y-4">
            <div
              class="flex flex-col sm:flex-row sm:items-center justify-between p-3 bg-base-100 rounded-lg gap-2 sm:gap-0">
              <div class="flex items-center gap-3">
                <Icon name="lucide:home" class="text-primary text-xl" />
                <span class="font-semibold">Home Directory</span>
              </div>
              <span class="badge badge-primary sm:self-center">LUKS Encrypted</span>
            </div>

            <div
              class="flex flex-col sm:flex-row sm:items-center justify-between p-3 bg-base-100 rounded-lg gap-2 sm:gap-0">
              <div class="flex items-center gap-3">
                <Icon name="lucide:package-search" class="text-secondary text-xl" />
                <span class="font-semibold">Package Management</span>
              </div>
              <span class="badge badge-secondary sm:self-center whitespace-nowrap">Per-User Nix Profile</span>
            </div>

            <div
              class="flex flex-col sm:flex-row sm:items-center justify-between p-3 bg-base-100 rounded-lg gap-2 sm:gap-0">
              <div class="flex items-center gap-3">
                <Icon name="lucide:monitor" class="text-accent text-xl" />
                <span class="font-semibold">GUI Applications</span>
              </div>
              <span class="badge badge-accent sm:self-center">Flatpak Sandboxed</span>
            </div>

            <div
              class="flex flex-col sm:flex-row sm:items-center justify-between p-3 bg-base-100 rounded-lg gap-2 sm:gap-0">
              <div class="flex items-center gap-3">
                <Icon name="lucide:box" class="text-primary text-xl" />
                <span class="font-semibold">Container Workspaces</span>
              </div>
              <span class="badge badge-primary sm:self-center">User Distrobox</span>
            </div>
          </div>

          <div class="mt-6 p-4 bg-secondary/10 rounded-lg border-l-4 border-secondary">
            <p class="text-sm text-base-content/90">
              <Icon name="lucide:info" class="text-secondary mr-2 inline-block" />
              Each layer adds protection and separation, ensuring your tools and data stay isolated from other users.
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
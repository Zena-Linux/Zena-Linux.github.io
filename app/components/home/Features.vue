<template>
  <CardLarge>
    <div class="w-full">
      <div class="text-center mb-12">
        <h2 class="text-4xl font-bold mb-4">
          <Icon name="lucide:sparkles" class="text-primary align-middle mr-2" />
          Why Zena Works
        </h2>
        <p class="text-xl text-base-content/70">Core principles for a better desktop experience</p>
      </div>

      <div class="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
        <Card>
          <div
            class="w-20 h-20 bg-linear-to-br from-primary/30 to-primary/10 rounded-full flex items-center justify-center mb-4">
            <Icon name="ph:lightning-bold" class="text-primary text-3xl" />
          </div>
          <h3 class="card-title text-2xl mb-2">Performance First</h3>
          <p class="text-base-content/70">Powered by CachyOS kernel with LTO optimizations for a snappier experience
          </p>
        </Card>

        <Card>
          <div
            class="w-20 h-20 bg-linear-to-br from-secondary/30 to-secondary/10 rounded-full flex items-center justify-center mb-4">
            <Icon name="lucide:shield-check" class="text-secondary text-3xl" />
          </div>
          <h3 class="card-title text-2xl mb-2">Security by Design</h3>
          <p class="text-base-content/70">Encrypted home directories, atomic updates, and Secure Boot support</p>
        </Card>

        <Card>
          <div
            class="w-20 h-20 bg-linear-to-br from-accent/30 to-accent/10 rounded-full flex items-center justify-center mb-4">
            <Icon name="lucide:terminal" class="text-accent text-3xl" />
          </div>
          <h3 class="card-title text-2xl mb-2">Developer Ready</h3>
          <p class="text-base-content/70">Built-in Nix means any tool you need is just a command away</p>
        </Card>

        <Card>
          <div
            class="w-20 h-20 bg-linear-to-br from-info/30 to-info/10 rounded-full flex items-center justify-center mb-4">
            <Icon name="ph:cube-duotone" class="text-info text-3xl" />
          </div>
          <h3 class="card-title text-2xl mb-2">Isolated Environments</h3>
          <p class="text-base-content/70">Purpose-built isolation: Nix profiles, Flatpak apps, containers, and
            multi-user separation</p>
        </Card>
      </div>

      <div class="mt-12 overflow-x-auto rounded-2xl bg-base-100 shadow-inner border-b border-r border-primary/20">
        <table class="table w-full">
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
</template>

<template>
  <div id="credits" class="w-full max-w-4xl mx-auto mb-20 text-center px-4">
    <div class="divider mb-12 opacity-50">
      <Icon name="lucide:heart" class="text-red-500 scale-400" />
    </div>

    <h2 class="text-3xl font-bold mb-8">Credits & Appreciation</h2>

    <div class="grid md:grid-cols-2 gap-8 mb-12 text-left">
      <div class="space-y-4">
        <h3 class="text-xl font-bold flex items-center gap-2 text-primary">
          <Icon name="lucide:users" />
          To Our Contributors
        </h3>
        <p class="text-base-content/70 leading-relaxed">
          Special thanks to all contributors who make Zena possible. Whether through code, documentation, bug reports,
          or feedback, your involvement is what drives this project forward.
        </p>
      </div>

      <div class="space-y-4">
        <h3 class="text-xl font-bold flex items-center gap-2 text-secondary">
          <Icon name="lucide:globe" />
          The FOSS Community
        </h3>
        <p class="text-base-content/70 leading-relaxed">
          Grateful for the Linux/FOSS community and everyone who shares their knowledge. Zena is a product of the
          collaborative spirit that defines open source.
        </p>
      </div>
    </div>

    <div class="bg-base-200/50 rounded-2xl p-8 mb-12 border border-base-300">
      <h3 class="text-xl font-bold mb-6 flex items-center justify-center gap-2">
        <Icon name="lucide:layers" class="text-accent" />
        Standing on the Shoulders of Giants
      </h3>
      <div class="flex flex-wrap justify-center gap-x-8 gap-y-4 text-sm font-medium text-base-content/60">
        <div class="flex items-center gap-1 hover:text-primary transition-colors cursor-default">
          <Icon name="lucide:cpu" class="text-xs" /> CachyOS / Fedora
        </div>
        <div class="flex items-center gap-1 hover:text-primary transition-colors cursor-default">
          <Icon name="lucide:package" class="text-xs" /> Nix & NixOS
        </div>
        <div class="flex items-center gap-1 hover:text-primary transition-colors cursor-default">
          <Icon name="lucide:layout" class="text-xs" /> niri & MangoWC
        </div>
        <div class="flex items-center gap-1 hover:text-primary transition-colors cursor-default">
          <Icon name="lucide:box" class="text-xs" /> Podman & Distrobox
        </div>
        <div class="flex items-center gap-1 hover:text-primary transition-colors cursor-default">
          <Icon name="lucide:terminal" class="text-xs" /> Systemd
        </div>
        <div class="flex items-center gap-1 hover:text-primary transition-colors cursor-default">
          <Icon name="lucide:archive" class="text-xs" /> Flatpak
        </div>
        <div class="flex items-center gap-1 hover:text-primary transition-colors cursor-default">
          <Icon name="lucide:monitor" class="text-xs" /> GNOME
        </div>
        <div class="flex items-center gap-1 hover:text-primary transition-colors cursor-default">
          <Icon name="lucide:code" class="text-xs" /> Material Shell
        </div>
      </div>
      <p class="mt-8 text-lg italic text-base-content/80">
        "Zena stands on the shoulders of giants."
      </p>
    </div>

    <div class="space-y-4">
      <p class="text-xl font-medium">
        Thank you for being part of this journey.
      </p>
      <div class="flex justify-center gap-2">
        <div class="w-1 h-1 rounded-full bg-primary/40"></div>
        <div class="w-1 h-1 rounded-full bg-primary/60"></div>
        <div class="w-1 h-1 rounded-full bg-primary/80"></div>
        <div class="w-1 h-1 rounded-full bg-primary/60"></div>
        <div class="w-1 h-1 rounded-full bg-primary/40"></div>
      </div>
    </div>
  </div>
</template>

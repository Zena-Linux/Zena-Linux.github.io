---
title: Introduction
order: 1
---

# Welcome to Zena

Zena is an operating system built with **bootc**. It is immutable and container‑native, designed for reproducibility, developer productivity, and a responsive desktop experience. Zena ships with `systemd-homed` for secure, portable home directories and a **Cachy kernel** compiled with Link‑Time Optimization (LTO) for improved performance.

---

## Project Overview

Zena delivers an immutable desktop operating system optimized for developer workflows and reproducibility. 

### Core Design Principles

* **Atomic & container-native** - The OS is delivered as an image and updated atomically with rollback support via the `bootc` model.
* **Fedora-based** - Zena uses Fedora as its base, currently tracking Fedora 43, inheriting its toolchain and ecosystem.
* **Rapid, image-based updates** - Updates are delivered daily, and sometimes multiple times per day, while remaining fully atomic and rollback-safe.
* **Secure & portable homes** - `systemd-homed` is enabled by default to provide portable, encrypted home directories.
* **Reproducible development environment** - Nix is included for reproducible builds and per-user package management.
* **Developer friendly** - Nix and Containers with all the tooling you need.

---

## Key Features at a Glance

* **[Cachy Kernel (LTO)](https://wiki.cachyos.org/features/kernel/)** - Kernel built with Link-Time Optimization to improve performance
* **[systemd-homed](https://systemd.io/HOME_DIRECTORY/)** - Encrypted LUKS homes with btrfs by default (configurable to fscrypt or plain directories)
* **[niri](https://github.com/YaLTeR/niri/)** - A Wayland compositor with windows arranged in columns on an infinite strip
* **[MangoWC](https://mangowc.vercel.app/)** - A modern, lightweight, high-performance Wayland compositor built on dwl
* **[Dank Material Shell](https://danklinux.com/)** - A modern and beautiful desktop shell with dynamic theming and smooth animations
* **[Nix](https://nixos.org/guides/how-nix-works/) + Zix** - Nix package manager available system-wide with a convenient per-user wrapper
* **Immutable, [Bootc](https://bootc-dev.github.io/bootc/)** - Atomic updates and simple rollback
* **[Podman](https://podman.io/) friendly** - Guidance for subordinate UID/GID mapping and unprivileged containers
* **Gaming (opt-in)** - Optional CLI-managed gaming environment via Distrobox

---

## Design Principles

Zena follows these principles:

- **Immutable base** - The system image is read-only and updated atomically
- **User environment flexibility** - Nix, containers, and Flatpak for user-installed software
- **Reproducibility** - Development environments can be replicated via Nix and container images
- **Security** - Encrypted home directories via systemd-homed
- **Performance** - Cachy kernel with LTO optimizations

### Package Availability

- **Nix packages**: 120,000+ available via Nix repositories
- **Flatpak applications**: Available via Flathub

Get started by checking the [Installation](/docs/installation) guide!

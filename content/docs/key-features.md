---
title: Key Features
order: 2
---

# Key Features

Zena comes with features designed for performance, security, and developer productivity. This page provides an overview of each feature.

---

## Cachy Kernel with LTO

The Cachy Kernel is a custom Linux kernel built with Link-Time Optimization (LTO). It also includes the **Extended Scheduler (sched_ext)** for CPU allocation.

### What is LTO?

Link-Time Optimization performs optimization across the entire codebase at link time, rather than on a per-file basis.

- Better inline decisions across compilation units
- Dead code elimination
- Improved runtime performance

Visit the [CachyOS Wiki](https://wiki.cachyos.org/features/kernel/) to learn more.

---

## systemd-homed

Zena enables systemd-homed by default for portable, encrypted home directories.

### Features

- **Encrypted LUKS homes** - Home directories encrypted by default
- **Portable** - Users can move their home between systems

### Storage Backends

| Backend | Description | Encryption |
|---------|-------------|------------|
| LUKS2 | Default, encrypted container with btrfs | Yes |
| fscrypt | Native Linux encryption | Yes |
| plain | Regular directory | No |

See the [systemd-homed](/docs/systemd-homed) documentation for details.

---

## Window Managers & Desktop Shell

Zena offers multiple window managers and a desktop shell.

### niri - Scrollable Workspace Compositor

[niri](https://github.com/YaLTeR/niri/) is a Wayland compositor that arranges windows in columns on an infinite horizontal strip.

- Windows arranged in columns on an infinite strip
- Horizontal scrolling workspace
- Keyboard-driven workflow

### MangoWC - Wayland Compositor

[MangoWC](https://mangowc.vercel.app/) is a lightweight Wayland compositor built on dwl.

- Built on dwl
- Minimal dependencies
- Configurable

### Dank Material Shell - Desktop Shell

[Dank Material Shell](https://danklinux.com/) is a desktop shell that runs on top of existing window managers.

- Dynamic theming
- Smooth animations
- Material Design aesthetics

---

## Package Management

Zena provides multiple package management methods. See the [Package Manager](/docs/package-manager) section for details.

| Method | Use Case |
|--------|----------|
| **Zix** | User packages (recommended) |
| **Nix** | Direct Nix package management |
| **Flatpak** | GUI applications |
| **AppImage** | Portable applications |
| **Distrobox** | Distribution packages in containers |

---

## Isolated Environments

Zena separates user environments while sharing the same system base.

| Layer | Technology | Isolation Level |
|-------|------------|-----------------|
| Home directory | LUKS encryption | Per-user encryption |
| Packages | Nix profiles | Per-user package sets |
| GUI applications | Flatpak | Application sandboxing |
| Containers | Distrobox/Podman | User-specific containers |

**Multi-user behavior:**
- Users have independent encrypted home directories
- Nix profiles are per-user, allowing different tool versions
- Flatpak applications run in user-specific sandboxes
- Distrobox containers are created and managed per user

---

## Update Mechanism

Zena uses bootc for image-based updates.

- **Update availability** - New images built daily
- **User control** - Users choose when to upgrade
- **Atomic operation** - Updates either complete fully or fail
- **Rollback** - Previous images available at boot

### Commands

```bash
# Upgrade to latest image
sudo bootc upgrade

# List available images
sudo bootc status

# Rollback to previous image
sudo bootc rollback

# Switch to a different image
sudo bootc switch ghcr.io/zena-linux/zena:latest
```

---

## Container Support

### Podman

Podman provides rootless container execution.

- Rootless by default
- No daemon
- Docker-compatible CLI

### Distrobox

Distrobox creates containerized development environments with system integration.

- Full system integration
- Use any distribution
- Share environments between systems

See the [Podman & Distrobox](/docs/podman-distrobox) documentation for details.

---

## Gaming (Opt-in)

Zena includes an optional gaming environment.

### Features

- Isolated from main system
- Includes Steam, Heroic, Lutris, ProtonUp-Qt
- GPU acceleration support

See the [Gaming](/docs/gaming) section for details.

---

## Summary

| Feature | Description |
|---------|-------------|
| Cachy Kernel LTO + sched_ext | Kernel with optimizations |
| systemd-homed | Encrypted, portable homes |
| Isolated Environments | Per-user separation |
| Nix + Zix | Package management |
| Flatpak | GUI application sandboxing |
| bootc | Atomic updates with rollback |
| niri / MangoWC | Wayland compositors |
| Dank Material Shell | Desktop shell |
| Podman/Distrobox | Container support |
| Gaming | Optional gaming environment |
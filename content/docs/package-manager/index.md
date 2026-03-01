---
title: Package Manager
order: 6
---

# Package Manager

Zena provides multiple ways to install software, each suited for different use cases.

---

## Overview

| Method | Use Case | Installation Scope |
|--------|----------|-------------------|
| **Zix** | User packages (recommended) | Per-user Nix profiles |
| **Nix** | Direct Nix package management | Per-user profiles |
| **Flatpak** | GUI applications | Sandboxed, per-user |
| **AppImage** | Portable applications | Single-file, per-user |
| **Distrobox** | Distribution packages | Containerized environments |

---

## Zix (Recommended)

Zix is a wrapper around Nix that provides simple imperative commands while maintaining a declarative manifest.

```bash
# Add packages
zix add ripgrep fd

# Remove packages
zix remove fd

# Apply changes
zix apply

# List packages
zix list
```

See the [Zix documentation](/docs/package-manager/zix) for details.

---

## Nix

Nix provides access to over 120,000 packages directly.

```bash
# Search for packages
nix search nixpkgs python

# Install a package
nix profile install nixpkgs#ripgrep

# List installed packages
nix profile list

# Remove a package
nix profile remove ripgrep
```

---

## Flatpak

Flatpak provides sandboxed GUI applications from Flathub.

```bash
# Add Flathub remote
flatpak remote-add --if-not-exists flathub https://flathub.org/repo/flathub.flatpakrepo

# Search for applications
flatpak search firefox

# Install an application
flatpak install flathub org.mozilla.firefox

# Run an application
flatpak run org.mozilla.firefox
```

**Bazaar** - A GUI store for Flatpak applications is pre-installed.

---

## AppImage

AppImages are portable, single-file applications that run without installation.

```bash
# Make AppImage executable
chmod +x application.AppImage

# Run it
./application.AppImage
```

For desktop integration, use tools like **AppImageLauncher**.

---

## Distrobox (Container Packages)

When software isn't available via other methods, use Distrobox to create a container with another distribution's package manager.

```bash
# Create a container
distrobox create --name ubuntu-env --image ubuntu:latest

# Enter container
distrobox enter ubuntu-env

# Install packages using apt
sudo apt update
sudo apt install package-name
```

Applications installed in Distrobox can be exported to the host menu:

```bash
# From inside the container
distrobox-export --app app-name
```

---

## Comparison

| Feature | Zix | Nix | Flatpak | AppImage | Distrobox |
|---------|-----|-----|---------|----------|-----------|
| Package count | 120k+ | 120k+ | ~2.4k | ~1.5k | Distribution-dependent |
| GUI apps work | Some | Some | Yes | Yes | Yes |
| GUI store available | No | No | Bazaar | No | No |
| Isolation | Profile | Profile | Sandbox | None | Full container |
| Disk usage | Per-user | Per-user | Shared/Per-user | Single-file | Per-container |
| Learning curve | Low | Medium-High | Low | Low | Medium |

---

## When to Use What

- **Zix** - Default for CLI tools and development utilities (some GUI apps work)
- **Flatpak** - GUI applications (Firefox, Discord, etc.) with Bazaar store
- **AppImage** - Portable apps that don't need installation
- **Distrobox** - When you need a specific distribution's packages
- **Nix** - Advanced users who want direct Nix control (some GUI apps work)
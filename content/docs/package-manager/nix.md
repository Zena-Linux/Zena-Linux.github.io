---
title: Nix
order: 8
---

# Nix

Zena includes Nix for reproducible, per-user package management with access to over 120,000 packages.

---

## What is Nix?

Nix is a purely functional package manager that allows for reproducible builds and per-user environments. Packages are installed in isolation without interfering with each other or the system.

---

## Basic Commands

### Search for Packages

```bash
nix search nixpkgs <package-name>
```

Example:
```bash
nix search nixpkgs ripgrep
```

### Install Packages

```bash
nix profile add nixpkgs#<package-name>
```

Example:
```bash
nix profile add nixpkgs#ripgrep nixpkgs#fd
```

### List Installed Packages

```bash
nix profile list
```

### Remove Packages

```bash
nix profile remove <package-name>
```

### Update Packages

```bash
nix profile upgrade
```

### Rollback

```bash
nix profile rollback
```

---

## Common Packages

| Category | Packages |
|----------|----------|
| Editors | neovim, vim, emacs, vscode |
| Shell tools | ripgrep, fd, fzf, zoxide, bat |
| Development | git, gcc, python, nodejs, go, rustc |
| System | htop, btop, tmux, screen |

---

## Where Packages Come From

Nix packages come from **nixpkgs**, the official Nix package repository. The version of nixpkgs is pinned in your Nix installation for reproducibility.

---

## GUI Applications

Some GUI applications are available via Nix, though Flatpak is generally recommended for GUI apps.

```bash
# Example GUI apps in Nix
nix profile install nixpkgs#firefox
nix profile install nixpkgs#obsidian
nix profile install nixpkgs#spotify
```

---

## Official Documentation

For comprehensive documentation:

- [Nix Manual](https://nixos.org/manual/nix/stable/)
- [Nixpkgs Manual](https://nixos.org/manual/nixpkgs/stable/)
- [Nix Search](https://search.nixos.org/packages) - Search for packages
- [Nix Wiki](https://nixos.wiki/)

---

## See Also

- [Zix](/docs/package-manager/zix) - Simplified Nix wrapper
- [Package Manager](/docs/package-manager) - Overview of all package options
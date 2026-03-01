---
title: Flatpak
order: 9
---

# Flatpak

Zena includes Flatpak for sandboxed GUI applications, with Bazaar as the default graphical store.

---

## What is Flatpak?

Flatpak is a system for building, distributing, and running sandboxed desktop applications on Linux. Applications are isolated from the host system for security and reliability.

---

## Basic Commands

### Search for Applications

```bash
flatpak search <application-name>
```

Example:
```bash
flatpak search firefox
```

### Install Applications

```bash
flatpak install flathub <application-id>
```

Example:
```bash
flatpak install flathub org.mozilla.firefox
```

### Run Applications

```bash
flatpak run <application-id>
```

Example:
```bash
flatpak run org.mozilla.firefox
```

### List Installed Applications

```bash
flatpak list
```

### Update Applications

```bash
flatpak update
```

### Remove Applications

```bash
flatpak uninstall <application-id>
```

---

## Bazaar (GUI Store)

Bazaar is the default graphical application store for Flatpak on Zena.

- Launch **Bazaar** from your application menu
- Browse, search, and install Flatpak applications
- Manage installed applications

---

## Permissions

Flatpak applications run in sandboxes with controlled permissions. Manage permissions using:

```bash
# View permissions
flatpak info -m <application-id>

# Override permissions
flatpak override --user <application-id> --socket=wayland
```

---

## Official Documentation

For comprehensive documentation:

- [Flatpak Documentation](https://docs.flatpak.org/)
- [Flathub](https://flathub.org) - Browse available applications
- [Flatpak Command Reference](https://docs.flatpak.org/en/latest/flatpak-command-reference.html)

---

## See Also

- [Package Manager](/docs/package-manager) - Overview of all package options
- [Bazaar](https://github.com/kolunmi/bazaar) - Appstore for Flatpak
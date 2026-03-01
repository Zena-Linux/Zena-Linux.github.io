---
title: Gaming
order: 12
---

# Gaming (Opt-in)

Zena includes an optional gaming feature implemented as a small CLI wrapper named `gaming`. This feature is opt-in and provides a convenient, reproducible gaming environment isolated from the main immutable system image using a **CachyOS v3** Distrobox container.

---

## Overview

The gaming feature creates a Distrobox container named `Gaming` that contains common gaming tools and launchers. The container is based on **CachyOS v3**, providing the latest gaming libraries and tools for optimal performance.

### Performance Layers

The gaming environment uses:

- **Host kernel** - Cachy kernel with LTO and sched_ext scheduler
- **Container base** - CachyOS v3 Distrobox with gaming libraries
- **Launchers included** - Steam, Heroic Games Launcher, Lutris, ProtonUp-Qt

The container runs with GPU access and shares the host kernel, while maintaining isolation from the main system.

---

## Installation

### Prerequisites

Before installing, ensure:

1. You have configured subordinate UID/GID ranges:
   ```bash
   sudo homectl with $(whoami) add-subuids

   podman migrate
   ```

2. You have sufficient disk space (50+ GB recommended)

### Install Gaming Environment

```bash
# Install gaming environment
gaming install
```

This will:
1. Create a Distrobox named `Gaming`
2. Install gaming tools and launchers
3. Register desktop entries on the host
4. Leave the environment ready for use

### What Gets Installed

The gaming environment includes:

| Tool | Description |
|------|-------------|
| Heroic Games Launcher | GOG and Epic Games launcher |
| Lutris | Linux gaming platform |
| Steam | Valve's gaming platform |
| ProtonUp-Qt | Manage Proton versions |
| gOverlay | GPU overlay tools |

---

## Usage

### Enter Gaming Container

```bash
# Open interactive shell in Gaming container
gaming enter

# Or use distrobox directly
distrobox enter Gaming
```

### Run Launchers

Launchers are available from your desktop environment:

- **Heroic Games Launcher**
- **Lutris**
- **Steam**

Run from terminal if desktop entry doesn't work:

```bash
# Enter container
gaming enter

# Run launcher
heroic
lutris
steam
```

---

## Upgrading

### Upgrade Gaming Environment

```bash
# Update packages inside Gaming container
gaming upgrade
```

This will:
1. Update package lists
2. Upgrade all packages to latest versions
3. Preserve your installed games and configs

---

## Uninstalling

### Remove Gaming Environment

```bash
# Uninstall gaming environment
gaming uninstall
```

This will:
1. Remove the `Gaming` Distrobox
2. Delete all installed packages
3. Remove exported desktop entries

---

## Troubleshooting

### Steam Black Screen

If Steam shows a black screen:

1. Open Steam settings
2. Disable GPU acceleration in Steam settings via system tray

### Permission Issues

If you encounter permission problems:

1. Verify subordinate UID/GID ranges:
   ```bash
   # Check subuid ranges
   grep $(whoami) /etc/subuid
   
   # Check subgid ranges
   grep $(whoami) /etc/subgid
   ```

2. Re-run if needed:
   ```bash
   sudo homectl with $(whoami) add-subuids
   
   podman migrate
   ```

### Container Won't Start

If the Gaming container fails to start:

```bash
# Check distrobox status
distrobox list

# Try recreating
gaming uninstall
gaming install
```

---

## FAQ

### Is gaming performance native?

Yes! The Gaming Distrobox runs with full GPU access, so performance is essentially native.

### Can I use Steam Proton?

Yes, Steam and Proton work perfectly in the Gaming container.

### Do I need a gaming laptop?

A modern discrete GPU is recommended but not strictly required. Many games work on integrated graphics.

### Can I install Epic Games Store?

Yes, Heroic Games Launcher supports Epic Games Store, GOG, and Amazon Games.

### Is this safe for the main system?

Yes, the gaming environment is fully isolated in a container and won't affect your main system.
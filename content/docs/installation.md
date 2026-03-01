---
title: Installation
order: 4
---

# Installation

This guide covers how to install Zena on your system. Whether you're setting up a new machine or switching from an existing Linux distribution, follow these steps to get Zena up and running.

---

## Pre-Installation

Before you begin, make sure you have:

- Downloaded the latest Zena ISO/installer image
- Created a bootable USB drive
- Backed up important data
- Reviewed system requirements
- Prepared target disk with sufficient space

### Downloading Zena

1. Visit the [Zena Landing Page](https://zena-linux.github.io/)
2. Download the latest ISO/installer image

---

## Creating a Bootable USB

### Using balenaEtcher

1. Download and install [balenaEtcher](https://etcher.balena.io/)
2. Select the Zena ISO
3. Select your USB drive
4. Click "Flash"

---

## Installation Process

### Step 1: Boot from USB

1. Insert the bootable USB into your target machine
2. Enter BIOS/UEFI settings (usually DEL, F2, or F12)
3. Set USB as the first boot device
4. Save and reboot

### Step 2: Configure Installation

The installer provides several options:

#### Disk Selection

- Choose the target disk for installation
- Select which disk(s) to use

#### Encryption Options

- **LUKS2** - Full disk encryption (not recommended)
- **No Encryption** - Unencrypted system (recommended since home directories are encrypted)

---

## Post-Installation

### First Boot

After installation completes:

1. Remove the USB drive
2. Reboot the system
3. The system will boot into Zena
4. Complete the [Initial Setup](/docs/initial-setup) process

### Verifying Installation

Check that everything is working:

```bash
# Check bootc status
sudo bootc status

# Verify systemd-homed
homectl list

# Check system stats
neofetch
```

---

## Switching from Existing bootc System

If you already have a bootc-based system, you can switch to Zena directly:

### Using bootc switch

```bash
# Switch to the latest Zena image
bootc switch ghcr.io/zena-linux/zena:latest
# If nvidia
bootc switch ghcr.io/zena-linux/zena-nvidia:latest

sudo reboot
```

---


## Upgrading from Previous Version

To upgrade an existing Zena installation:

```bash
sudo bootc upgrade

sudo reboot
```

---

## Summary

Installing Zena is straightforward:

1. Download the latest ISO
2. Create a bootable USB
3. Boot and follow the installer
4. Complete initial setup
5. Enjoy your new system!

For detailed first-boot setup, see the [Initial Setup](/docs/initial-setup) guide.
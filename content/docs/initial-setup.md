---
title: Initial Setup
order: 5
---

# Initial Setup (First Boot)

This guide walks you through the first-time setup process after installing Zena. The system will present a TUI (Text User Interface) setup wizard to configure basic account and system settings.

---

## First Boot Setup

On first boot, the system automatically launches the Zena Setup. This wizard guides you through essential initial configuration.

### Setup Options

The setup wizard presents the following options:

#### 1. Select Keymap & Locale

#### 2. Select Timezone

#### 3. Create Account

Create your primary user account with the following details:

- **Full name**
- **Username** 
- **Password** 

Configure the size for your encrypted home container:

- **Size Slider** - Choose the amount of space for /home
- **Recommendations**:
  - Light use (documents, web): 32-64 GiB
  - Development: 64-128 GiB
  - Media/Gaming: 128+ GiB

---

## Post-GUI Setup

After the GUI completes and you log in, perform these recommended steps:

### Step 1: Verify systemd-homed Account

Confirm your account was properly provisioned:

```bash
# Show your user account details
homectl show $USER
```

Review these important fields:
- **Storage** - Should show LUKS or fscrypt
- **Encryption** - Should show yes
- **Home Size** - Your configured size
- **UID/GID** - Your user identifiers

### Step 2: Configure Container Subordinate IDs

For unprivileged containers (like Podman), configure subordinate UID/GID ranges:

```bash
# Add subordinate UID/GID ranges to the system
sudo homectl with $(whoami) add-subuids
```

This allows containers to map user IDs without root privileges.

### Step 3: Migrate Podman Storage

Run a one-time storage migration for Podman:

```bash
# Migrate Podman storage
podman system migrate
```

### Step 4: Ensure Latest Updates

Verify you're running the latest system image:

```bash
# Check for and apply updates
sudo bootc upgrade

# Reboot if kernel was updated
sudo reboot
```

---

## Installing Software

After initial setup, you can install software using:

### Flatpak Applications

Use **Bazaar**, the dedicated GUI app store for Flatpak applications.

### Per-User Packages

Use **Zix** or **Nix** for per-user package management:

```bash
# Using Zix (recommended for beginners)
zix add ripgrep fd

# Using Nix directly
nix profile install nixpkgs#ripgrep
```

See the [Package Manager](/docs/package-manager) section for more details.

## Secure Boot

Secure Boot is supported in Zena. To enable it:

1. Import the MOK certificate after installation

  ```bash
  sudo mokutil --import /secureboot/MOK.der
  ```
You will be prompted to set a temporary password.

2. Reboot your machine. During boot the **MOK Manager** will appear:

   * Choose **Enroll MOK**.
   * Enter the password set during import.
   * Confirm and finish enrollment, then reboot again.

3. Verify the enrollment:

  ```bash
  sudo mokutil --sb-state
  sudo mokutil --list-enrolled
  ```
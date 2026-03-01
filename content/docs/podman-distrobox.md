---
title: Podman & Distrobox
order: 11
---

# Podman, Distrobox and homectl Notes

This section covers how to configure and use Podman and Distrobox on Zena for container-based development workflows.

---

## Overview

Zena is designed with container-friendly workflows in mind:
- **Podman** - Rootless container runtime
- **Distrobox** - Tool for creating containerized development environments
- **Subordinate UID/GID** - For unprivileged container operations

---

## Podman Configuration

### What is Podman?

Podman is a daemonless container engine for developing, managing, and running OCI containers on Linux.

### Installing Podman

Podman is pre-installed on Zena. To verify:

```bash
# Check Podman version
podman --version

# Run a test container
podman run hello-world
```

### Basic Podman Commands

```bash
# Pull an image
podman pull fedora:latest

# Run a container
podman run -it fedora:latest /bin/bash

# List running containers
podman ps

# List all containers
podman ps -a

# Remove a container
podman rm <container-id>
```

### Rootless Containers

Podman runs containers without root privileges by default:

```bash
# Run as regular user
podman run -it fedora:latest
```

---

## Distrobox

### What is Distrobox?

Distrobox is a utility that allows you to create containers with full system integration, sharing the user's home directory, DNS, PulseAudio, and more.

### Using Distrobox

```bash
# Create a new distrobox
distrobox create --name mydev --image fedora:latest

# Enter the distrobox
distrobox enter mydev

# List distroboxes
distrobox list

# Stop a distrobox
distrobox stop mydev

# Remove a distrobox
distrobox rm mydev
```

### Features of Distrobox

- Full integration with host system
- Access to user's home directory
- GPU acceleration support
- Audio support

---

## Subordinate UID/GID Configuration

### Why It Matters

For unprivileged containers to work properly, you need to configure subordinate UID/GID ranges. This allows containers to map user IDs without requiring root.

### Configuration Steps

#### Step 1: Add Subordinate Ranges

```bash
# Add subordinate UID/GID ranges to the system
sudo homectl with $(whoami) add-subuids
```

#### Step 2: Verify Configuration

```bash
# Check subuid ranges
grep $(whoami) /etc/subuid

# Check subgid ranges
grep $(whoami) /etc/subgid
```

Expected output:
```
username:524288:65536
```

This means:
- Starting UID: 524288
- Range: 65536 UIDs

---

## Podman Storage Migration

### Why Migrate?

When using systemd-homed, Podman storage needs to be migrated to work correctly with encrypted home directories.

### Running Migration

```bash
# Migrate Podman storage
podman system migrate
```

This command:
- Updates storage configuration
- Ensures compatibility with systemd-homed
- Fixes permission issues

---

## Use Cases

### Development Environment

```bash
# Create a development distrobox
distrobox create --name dev --image fedora:latest

# Enter and install tools
distrobox enter dev
dnf install vim git gcc
```

### Testing

```bash
# Create test environment
distrobox create --name test --image ubuntu:latest

# Run tests
distrobox enter test
./run_tests.sh
```

### Multiple Distributions

```bash
# Fedora
distrobox create --name fedora-dev --image fedora:latest

# Ubuntu
distrobox create --name ubuntu-dev --image ubuntu:latest

# Arch
distrobox create --name arch-dev --image archlinux:latest
```
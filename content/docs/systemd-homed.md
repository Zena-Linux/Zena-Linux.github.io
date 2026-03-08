---
title: systemd-homed
order: 10
---

# systemd-homed

Zena enables systemd-homed by default for portable, encrypted home directories.

---

## What is systemd-homed?

systemd-homed is a system service that manages user home directories as self-contained, portable units. Each home directory is stored in its own LUKS encrypted container.

---

## **Important: SELinux Policy Warning**

> [!WARNING]
> Due to a regression in SELinux policies regarding `homed` interactions, you may encounter permission errors when modifying users (creating, resizing, or changing passwords).
> It is recommended to temporarily set SELinux to permissive mode before performing management tasks:
> 1. **Disable enforcement:** `sudo setenforce 0`
> 2. **Run your `homectl` command.**
> 3. **Re-enable enforcement:** `sudo setenforce 1`
> 
> 

---

## Basic Commands

### View User Information

```bash
homectl show <username>
```

### List All Users

```bash
homectl list
```

### Create a User

```bash
sudo setenforce 0
sudo homectl create <username>
sudo setenforce 1
```

### Change Password

```bash
sudo setenforce 0
homectl passwd <username>
sudo setenforce 1
```

### Resize Home

```bash
sudo setenforce 0
sudo homectl resize <username> --size=<size>
sudo setenforce 1
```

**Example:**

```bash
sudo homectl resize username --size=100G
```

### Remove User

```bash
sudo homectl remove <username>
```

---

## Official Documentation

For comprehensive documentation:

* [systemd-homed Home Page](https://systemd.io/HOME_DIRECTORY/)
* [homectl Manual](https://www.freedesktop.org/software/systemd/man/latest/homectl.html)
* [systemd-homed.service Manual](https://www.freedesktop.org/software/systemd/man/latest/systemd-homed.service.html)

---

Would you like me to add a section on how to verify if an operation failed specifically due to an SELinux denial using `journalctl`?
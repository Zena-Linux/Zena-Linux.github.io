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
sudo homectl create <username>
```

### Change Password

```bash
homectl passwd <username>
```

### Resize Home

```bash
sudo homectl resize <username> --size=<size>
```

Example:
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

- [systemd-homed Home Page](https://systemd.io/HOME_DIRECTORY/)
- [homectl Manual](https://www.freedesktop.org/software/systemd/man/latest/homectl.html)
- [systemd-homed.service Manual](https://www.freedesktop.org/software/systemd/man/latest/systemd-homed.service.html)
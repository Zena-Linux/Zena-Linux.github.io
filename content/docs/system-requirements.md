---
title: System Requirements
order: 3
---

# System Requirements

## Minimum Requirements

For a basic desktop experience, your system should meet these minimum specifications:

| Component | Minimum | Notes |
|-----------|---------|-------|
| CPU | 64-bit x86_64 | Modern Intel/AMD recommended |
| RAM | 8 GB | Required for comfortable usage |
| Disk Space | 128 GB | For system images + user storage |
| Firmware | UEFI | Required for bootc |

---

## Recommended Requirements

For the best experience, especially for development and gaming workloads:

| Component | Recommended | Notes |
|-----------|-------------|-------|
| CPU | Modern Intel/AMD (6+ cores) | Better multi-tasking |
| RAM | 16 GB | For development/gaming |
| Disk | 256 GB+ NVMe SSD | Faster I/O performance |
| GPU | Discrete GPU | For gaming/GPU compute |
| Firmware | UEFI with Secure Boot | Enhanced security |

---

## NVIDIA Support

Zena supports NVIDIA GPUs with the following models:

| Series | Support Level | Notes |
|--------|---------------|-------|
| GTX 16xx | Supported | Turing architecture |
| RTX 20xx | Supported | Turing architecture |
| RTX 30xx | Supported | Ampere architecture |
| RTX 40xx | Supported | Ada Lovelace architecture |
| RTX 50xx | Supported | Blackwell architecture |

---

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

---

If you're unsure about compatibility, check your hardware against these requirements. Most modern laptops and desktops from the last 5 years should work well with Zena.
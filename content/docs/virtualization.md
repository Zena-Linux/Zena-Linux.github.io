---
title: Virtualization 
order: 13
---

# Virtualization

This guide covers setting up virtualization environments on Zena Linux, including KVM/QEMU for traditional virtual machines and Waydroid for running Android applications.

## KVM/QEMU

For running virtual machines with KVM/QEMU, your user account needs to be part of the correct groups to manage virtualization and have the necessary permissions.

If you find that you are unable to manage virtual machines or lack permissions, you can update your user account with the following command.

```bash
sudo setenforce 0
homectl update <username> \
    --member-of=wheel,users,libvirt,kvm \
    --luks-extra-mount-options=acl,compress=zstd,user_subvol_rm_allowed,defcontext=system_u:object_r:user_home_dir_t:s0
```

After running this command, it's recommended to set SELinux to enforcing to ensure the new security contexts are applied correctly.

```bash
sudo setenforce 1
```

Afterward, log out and log back in for the group changes to take effect.

You can then use the **Virtual Machine Manager** application from the applications menu to create and manage your virtual machines.

## Waydroid

Waydroid allows you to run a full Android system in a container on Zena Linux.

1.  Launch **Waydroid** from the applications menu.
2.  Proceed with the initialization. When prompted for OTA updates, use the following URLs:

    - **System OTA:** `https://ota.waydro.id/system`
    - **Vendor OTA:** `https://ota.waydro.id/vendor`

Once the initialization is complete, you can use Waydroid.

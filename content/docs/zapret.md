---
title: Zapret 
order: 14
---

# Zapret on Zena

Zapret is a powerful tool designed to bypass Deep Packet Inspection (DPI) systems. On Zena, it is recommended to run Zapret within a containerized environment using **Podman** to maintain system stability while granting the necessary network privileges.

---

## Deployment Instructions

Follow these steps to pull the image, configure the environment, and initialize the control script.

### 1. Run the Container

Execute the following command to start the Zapret container. This uses `--network host` and `--privileged` mode to allow the container to manage network tables and traffic.

```bash
sudo podman run -dt --replace --name Zapret --network host --privileged ghcr.io/zena-linux/zapret:latest
```

### 2. Enter the Container Shell

Access the running container's interactive shell to perform the initial setup:

```bash
sudo podman exec -it Zapret /bin/sh
```

### 3. Configure Network Tables

Inside the container, ensure the system is using `iptables-nft` to remain compatible with modern kernel structures:

```bash
alternatives --set iptables /usr/sbin/iptables-nft
```

### 4. Run Zapret Control

Launch the configuration and control script to finalize the setup:

```bash
/opt/zapret.installer/zapret-control.sh
```

---

## Management

### Start/Stop the Service

Once configured, you can manage the container lifecycle from the host:

* **Stop:** `sudo podman stop Zapret`
* **Start:** `sudo podman start Zapret`
* **Check Logs:** `sudo podman logs Zapret`
---
name: docker-compose-wsl
description: Start and verify this site's Docker Compose service when Docker is available through WSL rather than Windows PowerShell.
---

# Docker Compose Through WSL

Use this workflow when working on the personal-site Compose service from Windows and `docker` is not available in PowerShell.

1. Start or rebuild the service from the repository directory:

   ```powershell
   wsl.exe -d Ubuntu -- docker compose up -d --build
   ```

2. Check container lifecycle separately:

   ```powershell
   wsl.exe -d Ubuntu -- docker compose ps
   ```

3. Check the expected site URL from the Windows host:

   ```powershell
   curl.exe --fail --silent --show-error --head http://localhost:3000/
   ```

`docker compose ps` showing `Up` confirms only that the container is running; it does not prove the site is healthy. This repository's README expects the site at `http://localhost:3000/`, so a 404 is a failed site check. Inspect `wsl.exe -d Ubuntu -- docker compose logs hexosite` and the generated site before reporting success.

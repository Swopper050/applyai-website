# ApplyAI website

Code for the [ApplyAI website](https://www.applyai.nl).

## Installation
In order to run the project locally you need to:
  * [Install Node v20](https://nodejs.org/en/download/package-manager)
  * [Install pnpm](https://pnpm.io/installation)
  * [Install Python 3.12](https://www.python.org/downloads/)
  * [Install docker](https://docs.docker.com/engine/install/) together with [docker compose](https://docs.docker.com/compose/)

When you have all of this installed, setup all docker services:

```bash
cd applyai/
make docker_up
```

Setup the ui:
```bash
cd ui/
make deps
make server
```

Setup the api:
```bash
cd api/
python -m venv .env
make deps
make fixtures
make server
```

Now you can visit the local web application at http://localhost:5173

## Deployment
This project currently supports deployment onto a single VPS (frontend, backend and database all running on that VPS). For more information on how to do this, see the [deployment docs](docs/web_deployment.md).

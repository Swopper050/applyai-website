LINT_FILES=src/**
DOCKERHUB_NAMESPACE=test
VERSION = $(shell git describe --tags --always)


##@ Utility
help:  ## Display this help
	@awk 'BEGIN {FS = ":.*##"; printf "\nUsage:\n  make \033[36m\033[0m\n"} /^[a-zA-Z_-]+:.*?##/ { printf "  \033[36m%-15s\033[0m %s\n", $$1, $$2 } /^##@/ { printf "\n\033[1m%s\033[0m\n", substr($$0, 5) } ' $(MAKEFILE_LIST)

deps: ## Install all dependencies
	rm -rf node_modules/
	pnpm install

format: ## Format code with eslint and prettier
	pnpm eslint $(LINT_FILES) --fix --no-warn-ignored
	pnpm prettier --write $(LINT_FILES)

lint: ## Run lint check with eslint and prettier
	pnpm eslint $(LINT_FILES) --no-warn-ignored
	pnpm prettier --check $(LINT_FILES)

formatlint: format lint ## First format code, then run linters

server: ## Start the development server
	pnpm run dev

sort-locales: ## Sort locale files alphabetically
	node scripts/sort-locales.js

docker_latest: ## Build a docker container and tag it with the current git version tag and 'latest'
	docker build -t $(DOCKERHUB_NAMESPACE)/applyai-ui:$(VERSION) -t $(DOCKERHUB_NAMESPACE)/applyai-ui:latest .

docker_push: ## Push the odcker containers with the current git version tag and 'latest'
	docker push $(DOCKERHUB_NAMESPACE)/applyai-ui:$(VERSION)
	docker push $(DOCKERHUB_NAMESPACE)/applyai-ui:latest

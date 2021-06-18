# Mitchell Fenner's Personal Website

[![Publish container](https://github.com/mitchfen/mitchfen.github.io/actions/workflows/publishContainer.yaml/badge.svg)](https://github.com/mitchfen/mitchfen.github.io/actions/workflows/publishContainer.yaml)
[![Publish site](https://github.com/mitchfen/mitchfen.github.io/actions/workflows/publishSite.yaml/badge.svg)](https://github.com/mitchfen/mitchfen.github.io/actions/workflows/publishSite.yaml)

I'm more interested in DevOps than front-end development, so I'm using this site as an opportunity to play with CI/CD pipelines, Docker, and cloud hosting platforms.

## How I automate it

- Publishing the site 🚀
  - When code is pushed to the main branch, the [publish workflow](https://github.com/mitchfen/mitchfen.github.io/actions/workflows/publish.yaml) automatically runs. This action clones my repo to an Ubuntu environment, uses npm to create a production build, and publishes the build to the gh-pages branch.
- Publishing the container 🐳
  - Upon success of the publish workflow, a [second workflow](https://github.com/mitchfen/mitchfen.github.io/actions/workflows/docker-push.yml) builds and pushes my Docker image to dockerhub. This will be especially useful if I switch to Azure app service or Digital Ocean in the future.

## Run Locally

Using npm

```bash
  git clone https://github.com/mitchfen/mitchfen.github.io.git
  cd mitchfen.github.io
  npm ci
  npm run start
```

Using docker

```bash
sudo docker run --rm -p 80:80 ghcr.io/mitchfen/mitchfen.github.io:latest
```

## History

I started out using the static site generator [Jekyll](https://github.com/jekyll/jekyll) to build my site.
Adding new pages as markdown was easy and fast, but soon I wanted something more customizable.
I rebuilt the site using HTML and Bootstrap CSS, which was a "good enough" solution, but it was tedious to copy the same boilerplate to each page.
Using React alleviated much of the tediousness, helped improve my JavaScript skills, and allowed me to learn Docker and CI/CD pipelines.

<h1 class="title" style="text-align: center;"> Portfolio App </h1>
<hr>

<h2 class="section" id="docker-setup"> Docker Setup </h2>
<p>
The Portfolio app was created with the intention to be containerized. As such, this is the preferred setup method
</p>

<h2 class="instruct" id="docker-engine"> Install Docker Engine</h2>

<h3> Windows </h3>
<p>
Use the following link to find instructions on installing Docker Desktop on Windows, or run the following command.
<a href="https://docs.docker.com/desktop/setup/install/windows-install">https://docs.docker.com/desktop/setup/install/windows-install</a>
</p>
<p>
Alternatively, use winget to install Docker from your terminal.
</p>
<blockquote>
<code>winget install -e --id Docker.DockerDesktop</code>
</blockquote>
<h3> Linux </h3>

Follow the installation instruction for your distro
https://docs.docker.com/engine/install/

Generally the process is, update your system and package manager, then install install the new software.

Linux users can choose between installing just the docker engine or installing Docker Desktop.

Docker Desktop contains all of the necessary tools to proceed. If you install only docker.io, you will need to also install docker-compose.

<h3> MacOS </h3>

Use the following link for instruction on install Docker Desktop. https://docs.docker.com/desktop/setup/install/mac-install/

<h2 class="instruct"> Docker-Compose </h2>
<p>Install docker-compose using the method that applies to you operating system</p>

*Local setup*
--
The local setup will configure your machine to host the Portfolio app.

## Install modules
```
npm install serve && npm install
```

### Compiles and hot-reloads for development
```
serve ./dist
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

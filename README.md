# Portfolio

---

Tom Otero's resume storage and portfolio website source code.

- Portfolio: <a href="www.tom-otero.com">tom-otero.fyi</a>
- Resume: <a href="./Resume/Tom Otero - Resume.pdf">Tom Otero - Resume.pdf</a>
- Linkedin: <a href="www.linkedin.com/in/tomotero1984">www.linkedin.com/in/tomotero1984</a>

---

### 🗺️ Overview
This repo has two main directories, Resume and app.

#### 📂 Folders:
- Resume: Contains various, mostly generalized, copies of my resume.

- app: Vite web app to display my portfolio.

---

## 🧠 How To...
There's a couple methods to get this app running.

### 🤖 Bare metal
The quickest way to get this app running is to host it directly on your machine.

<ol>
  <style>
    code {
      color: lightgreen;
    }
  </style>
  <li> Install npm using whatever package manager is used on your machine, directly from their webside <a href=https://www.npmjs.com> nodejs.com</a>
  <li> Run <code>npm ci</code>
  <li> Run <code>npm run build</code>
  <li> Run <code>npx serve dist</code>
</ol>

That's it! Your terminal should  print a link that you can click or copy into your browser.

### 🐳 Docker
Slightly more complicate but way cooler and it keeps your environment clean. These instructions target Linux, specifically, Ubuntu 24.04. However, the general steps apply to all OS.
<ol>
  <style>
    code {
      color: lightgreen;
    }
  </style>
  <li> Install a docker runtime and docker-compose
    <blockquote>
      <code>sudo apt-get update && sudo apt install -y docker.io docker-compose</code>
    </blockquote>
  <li> Run the following docker-compose command from the <b><i>app/</i></b> directory
    <blockquote>
      <code>docker-compose up --build --detach vue-server</code>
    </blockquote>
    The installation might take a couple minutes the first time you run this command.
</ol>
<br>

#### Troubleshooting

<ul>
  <li>
    <h4>Problem</h4>
    The current docker setup has been hitting the following error:
    <br><br>
    <b style="color: grey;">TO-DO: Copy the error message into the blockquote below</b>
    <blockquote>
      <code> It's some kind of context error that now I can't  find...</code>
    </blockquote>
    <h4>Solution</h4>
    The error appears to resolve by <i>prune</i>-ing the containers, images, and networks (for good measure).
    <blockquote>
      <code>docker container prune -f && docker image prune -f && docker network prune -f</code>
    </blockquote>
</ul>

FROM debian:latest AS server-base

RUN apt-get update && apt install -y \
    nodejs npm git \
    curl openssh-server vim unzip
RUN npm install -g serve

FROM server-base AS app-builder

RUN curl -L -o portfolio.tar.gz \
    https://github.com/TomOtero1984/Portfolio/archive/refs/heads/main.tar.gz && \
    mkdir src && \
    tar -xzf portfolio.tar.gz -C src --strip-components=1

WORKDIR /src/app

RUN npm config set -g yes true && \
    npm config set -g fund false && \
    npm config set -g audit false && \
    npm config set -g registry https://registry.npmjs.org/ && \
    npm config set -g save-exact true

RUN rm -rf package-lock.json node_modules dist

RUN npm install && npm run build

# Setting up SSH
RUN sed -i \
    -e 's/#PubkeyAuthentication yes/PubkeyAuthentication yes/' \
    -e 's|#AuthorizedKeysFile.*|AuthorizedKeysFile /ssh/authorized_keys|' \
    -e 's/#HashKnownHosts yes/HashKnownHosts yes/' \
    /etc/ssh/sshd_config

# Create a non-root user
RUN useradd -m -d /home/docker -s /bin/bash docker && \
    usermod -aG sudo docker && \
    echo "docker:docker" | chpasswd
COPY ./ssh /home/docker/.ssh

FROM server-base AS app

# Setting up web app
COPY --from=app-builder /src/app/dist /app/dist
COPY ./vue-server/entrypoint.sh /entrypoint.sh

ENTRYPOINT [ "/bin/bash", "/entrypoint.sh" ]

FROM debian:latest

RUN apt-get update && \
    apt install -y nodejs npm openssh-server vim sudo git

# Copying host files
# COPY .. /app
COPY ./vue-server/entrypoint.sh /entrypoint.sh

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
#RUN chmod 700 /home/docker/.ssh && \
#    chown -R docker:docker /home/docker/.ssh && \
#    chmod 600 /home/docker/.ssh/*

# Setting up web app
WORKDIR /app/app

RUN git clone https://github.com/TomOtero1984/Portfolio.git .

RUN npm config set -g yes true && \
    npm config set -g fund false && \
    npm config set -g audit false && \
    npm config set -g registry https://registry.npmjs.org/ && \
    npm config set -g save-exact true

RUN rm -rf package-lock.json node_modules dist

RUN npm install -g serve
RUN npm install
RUN npm run build

ENTRYPOINT [ "/bin/bash", "/entrypoint.sh" ]

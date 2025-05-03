FROM debian

RUN apt-get update && apt install -y nodejs npm openssh

# Create a non-root user
RUN useradd -m -d /home/docker -s /bin/bash docker
# Create .ssh directory with correct permissions
RUN mkdir -p /home/docker/.ssh && \
    chmod 700 /home/docker/.ssh
# Copy SSH files and set correct ownership and permissions
COPY ../ssh /home/docker/.ssh/
RUN chown -R docker:docker /home/docker/.ssh && \
    chmod 600 /home/docker/.ssh/*

RUN sed -i 's/#PubkeyAuthentication yes/PubkeyAuthentication yes/' /etc/ssh/sshd_config && \
    sed -i 's|#AuthorizedKeysFile.*|AuthorizedKeysFile %h/.ssh/authorized_keys|' /etc/ssh/sshd_config

RUN npm install -g vue-template-compiler
RUN npm install -g vue @vue/cli @vue/cli-service

COPY ../Resume/app /app

WORKDIR /app
# Switch to the non-root user
USER docker
CMD [ "npm", "run", "serve" ]
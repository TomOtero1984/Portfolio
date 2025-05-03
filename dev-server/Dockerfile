FROM node
RUN npm install -g npm@latest serve

COPY ../Resume/app /app
WORKDIR /app
CMD ["npx", "serve"]

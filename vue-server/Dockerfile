FROM debian
WORKDIR /app

RUN apt-get update && apt install -y nodejs npm
RUN npm install -g vue-template-compiler
RUN npm install -g vue @vue/cli @vue/cli-service
RUN vue create -b -r "https://registry.npmmirror.com" -p "Default (Vue 3)" portfolio

# RUN touch /app/start.sh && echo "#!/bin/sh\ncd /app/portfolio && npm run serve &" > /app/start.sh
# RUN chmod +x /app/start.sh

WORKDIR /app/portfolio
#RUN echo "cd /app/portfolio && npm run serve" > start.sh
#RUN chmod +x start.sh
CMD [ "npm", "run", "serve" ]

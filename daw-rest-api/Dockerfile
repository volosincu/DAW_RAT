# Start from argon (latest long term supported version of node)
# - argon : Full node dev env (640 MB)
# - argon-slim : Full node dev env (200 MB)
FROM node:14-alpine3.12

# install sails
RUN npm -g install sails

# create user node
USER root

RUN mkdir -p /opt/app/runme
WORKDIR /opt/app/runme

USER node

# COPY . ./


RUN npm install

EXPOSE 51337:1337

CMD ["sails", "lift"]


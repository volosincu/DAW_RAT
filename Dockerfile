# Start from argon (latest long term supported version of node)
# - argon : Full node dev env (640 MB)
# - argon-slim : Full node dev env (200 MB)
FROM node:14-alpine3.12

# install sails
RUN npm -g install sails

# create user node
USER root

# RUN chmod /var/lib/docker/

RUN mkdir -p /opt/app/runme
RUN mkdir -p /opt/app/runme/.tmp


# USER node
COPY daw-rest-api/ /opt/app/runme/
COPY daw-rest-api/.tmp/ /opt/app/runme/.tmp/

RUN chown -R node /opt/app/runme

WORKDIR /opt/app/runme
RUN ls -la /
USER node

RUN npm install

EXPOSE 51337:1337

ENTRYPOINT ["sails", "lift"]
CMD []


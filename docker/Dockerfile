FROM node:18.17-alpine

ARG BUILD_ID
ENV BUILD_ID $BUILD_ID
ENV NODE_HOME=/home/node
LABEL stage=builder build_id=$BUILD_ID

RUN mkdir -p /usr/local/lib/node_modules/ && chown -R node:node /usr/local/lib/node_modules/

#uid user node
USER 1000

WORKDIR ${NODE_HOME}

ENV PATH ${NODE_HOME}/node_modules/.bin:$PATH
ENV CI=false

COPY --chown=node ./ /${NODE_HOME}/

RUN npm -v
RUN npm install --ignore-scripts
RUN npm install tsx serve --unsafe-perm=true --allow-root
RUN npm run build

CMD ["serve", "-s", "dist"]

EXPOSE 3000
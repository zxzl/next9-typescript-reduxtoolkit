FROM node:12 as base

WORKDIR /app
# Copy package.json first to reuse image layer
COPY package.json .
RUN yarn
ADD . .
RUN yarn build
# Delete unnecessary packages for running built application
RUN yarn install --production

FROM node:12-alpine
WORKDIR /app
COPY --from=base /app/package.json .
COPY --from=base /app/node_modules node_modules
COPY --from=base /app/.next .next
CMD ["yarn", "run", "start"]

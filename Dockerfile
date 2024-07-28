### ビルド環境 ###
FROM node:20.16.0-slim AS builder
WORKDIR /app
ENV NODE_OPTIONS=--max_old_space_size=4096

RUN corepack enable
COPY package.json pnpm-lock.yaml ./
RUN pnpm install --frozen-lockfile

COPY . ./
RUN pnpm run build


### 実行環境 ###
FROM gcr.io/distroless/nodejs20-debian12:latest
WORKDIR /app

COPY --from=builder /app/.output ./
EXPOSE 8080

ENV HOST=0.0.0.0 PORT=8080 NODE_ENV=production NODE_OPTIONS=--max_old_space_size=4096
CMD ["/app/server/index.mjs"]

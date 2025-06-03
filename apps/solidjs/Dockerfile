FROM node:20.14.0-alpine AS base

FROM base AS builder
WORKDIR /app
RUN npm install --global turbo
COPY . .
RUN turbo prune @rwx/solidjs --docker --skip-infer

FROM base AS installer
WORKDIR /app
COPY --from=builder /app/out/json/ .
RUN npm ci && npm cache clean --force
COPY --from=builder /app/.env .
COPY --from=builder /app/out/full/ .
RUN npm run build

FROM base AS runner
WORKDIR /app
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 solidjs
USER solidjs
COPY --from=installer --chown=solidjs:nodejs /app/ .

CMD ["node", "/app/apps/solidjs/.output/server/index.mjs"]

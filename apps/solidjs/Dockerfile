FROM oven/bun:1.2.14-alpine AS base

FROM base AS builder
WORKDIR /app
RUN bun install --global turbo
COPY . .
RUN turbo prune @rwx/solidjs --docker --skip-infer

FROM base AS installer
WORKDIR /app
COPY --from=builder /app/out/json/ .
RUN bun install
COPY --from=builder /app/out/full/ .
RUN bun run build

FROM base AS runner
WORKDIR /app
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 solidjs
USER solidjs
COPY --from=installer --chown=solidjs:nodejs /app/apps/solidjs/.output/ .

CMD ["bun", "run", "/app/server/index.mjs"]

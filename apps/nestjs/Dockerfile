FROM node:20.14.0-alpine AS base

FROM base AS builder
WORKDIR /app
RUN npm install --global turbo
COPY . .
RUN turbo prune @rwx/nestjs --docker --skip-infer

FROM base AS installer
WORKDIR /app
COPY --from=builder /app/out/json/ .
RUN npm ci && npm cache clean --force
COPY --from=builder /app/out/full/ .
RUN npm run build

FROM base AS runner
WORKDIR /app
RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nestjs
USER nestjs
COPY --from=installer --chown=nestjs:nodejs /app/ .
COPY nest-up.sh /app/nest-up.sh

ENTRYPOINT ["/app/nest-up.sh"]

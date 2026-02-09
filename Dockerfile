# 使用 Node.js 官方镜像作为基础镜像
FROM node:20-alpine AS base

# 1. 安装依赖阶段
FROM base AS deps
RUN apk add --no-cache libc6-compat
WORKDIR /app

# 复制 package.json 和 package-lock.json
COPY package.json package-lock.json ./
RUN npm ci

# 2. 构建阶段
FROM base AS builder
WORKDIR /app
COPY --from=deps /app/node_modules ./node_modules
COPY . .

# Next.js 遥测数据收集（可选关闭）
ENV NEXT_TELEMETRY_DISABLED 1

RUN npm run build

# 3. 运行阶段
FROM base AS runner
WORKDIR /app

ENV NODE_ENV production
ENV NEXT_TELEMETRY_DISABLED 1

RUN addgroup --system --gid 1001 nodejs
RUN adduser --system --uid 1001 nextjs

COPY --from=builder /app/public ./public

# 设置构建产物的正确权限
RUN mkdir .next
RUN chown nextjs:nodejs .next

# 自动输出独立运行文件
COPY --from=builder --chown=nextjs:nodejs /app/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/.next/static ./.next/static

USER nextjs

EXPOSE 3000

ENV PORT 3000
# 允许绑定到 0.0.0.0
ENV HOSTNAME "0.0.0.0"

CMD ["node", "server.js"]

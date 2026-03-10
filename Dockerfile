# ---------- Build Stage ----------
FROM node:20-alpine AS builder

WORKDIR /app

# Copy dependency files
COPY package*.json pnpm-lock.yaml ./

RUN corepack enable

# Install dependencies (including devDependencies needed for build)
RUN pnpm install --frozen-lockfile

# Copy project files
COPY . .

# Compile TypeScript
RUN pnpm run build


# ---------- Production Stage ----------
FROM node:20-alpine

WORKDIR /app

# Copy only needed files from build stage
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/build ./build

# Expose port
EXPOSE 3000

# Start app
CMD ["node", "--enable-source-maps", "build/index.js"]
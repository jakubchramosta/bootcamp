# ---------- Build Stage ----------
FROM node:20-alpine AS builder

WORKDIR /app

# Copy dependency files
COPY package*.json ./

# Install dependencies
RUN pnpm install

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
COPY --from=builder /app/dist ./dist

# Expose port
EXPOSE 3000

# Start app
CMD ["node", "dist/server.js"]
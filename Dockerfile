FROM node:20-alpine As development

# Install OpenSSL 3.0
RUN apk add --no-cache openssl3

# Install pnpm and @nestjs/cli globally
RUN npm install -g @nestjs/cli
WORKDIR /usr/src/app/monorepo

COPY package*.json package-lock.json ./

# Install dependencies
RUN npm install

# Copy the wait-for-it script
COPY wait-for-it.sh /usr/src/app/wait-for-it.sh
RUN chmod +x /usr/src/app/wait-for-it.sh

# Bundle app source
COPY . .

# Wait for the database to be ready and run migrations
CMD ["./wait-for-it.sh", "postgres", "--", "npx", "prisma", "migrate", "dev"]

# Start the application
CMD ["npm", "run", "start:dev", "backend"]

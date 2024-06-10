###################
# BUILD FOR LOCAL DEVELOPMENT
###################

FROM node:20-alpine As development

# Install pnpm and @nestjs/cli globally
RUN npm install -g @nestjs/cli

WORKDIR /usr/src/app

COPY package*.json package-lock.json ./

# Install dependencies
RUN npm install

# Bundle app source
COPY . .
RUN npx prisma generate
# Start the application
CMD ["npm", "run", "start:dev", "backend"]

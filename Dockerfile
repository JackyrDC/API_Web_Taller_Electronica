FROM node:24.12.0

# Habilitar pnpm con corepack
RUN corepack enable && corepack prepare pnpm@latest --activate

WORKDIR /src/app

# Copiar archivos de dependencias
COPY package.json pnpm-lock.yaml pnpm-workspace.yaml ./

# Copiar schema de Prisma antes de instalar (necesario para generate)
COPY prisma ./prisma
COPY prisma.config.ts ./

# Instalar dependencias
RUN pnpm install --frozen-lockfile

# Copiar el resto del código fuente
COPY src ./src
COPY tsconfig.json tsconfig.build.json nest-cli.json ./

# Generar cliente Prisma (usar URL dummy solo para generar el cliente)
RUN DATABASE_URL="postgresql://postgres:root@localhost:5432/Taller_Electronica_Db?schema=public" pnpm prisma generate

# Compilar la aplicación
RUN pnpm run build

# Verificar que dist existe
RUN ls -la dist/

EXPOSE 3000

CMD ["node", "dist/src/main.js"]
import 'dotenv/config';
import { createPrismaClient } from './prismaClient.js';

export const prisma = createPrismaClient(process.env.DATABASE_URL);

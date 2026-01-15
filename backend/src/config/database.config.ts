import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import { User } from '../modules/users/user.entity';

export const databaseConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: process.env.DB_HOST || 'localhost',
  port: Number(process.env.DB_PORT) || 5432,
  username: process.env.DB_USER || 'postgres',
  password: process.env.DB_PASS || 'postgres',
  database: process.env.DB_NAME || 'auth_db',
  entities: [User],
  synchronize: true, // depois trocamos por migrations
};

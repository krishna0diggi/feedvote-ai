import { TypeOrmModuleOptions } from "@nestjs/typeorm";
import { ConfigService } from "@nestjs/config";

export const getDatabaseConfig = (configService:ConfigService): TypeOrmModuleOptions => ({
    type: 'postgres',
    host: configService.get('DB_HOST', 'localhost'),
    port: Number(configService.get('DB_PORT', 5432)),
    username: configService.get('DB_USERNAME', 'postgres'),
    password: configService.get('DB_PASSWORD', ''),
    database: configService.get('DB_NAME', 'default_db'),
    autoLoadEntities: true,
    synchronize: true,
})
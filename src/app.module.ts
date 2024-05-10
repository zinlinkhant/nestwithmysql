import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './user/entities/user.entity'; // Example entity import
console.log('DB_HOST:', process.env.DB_HOST);
console.log('DB_PORT:', process.env.DB_PORT);
console.log('DB_USERNAME:', process.env.DB_USERNAME);
console.log('DB_PASSWORD:', process.env.DB_PASSWORD); // Avoid logging passwords in production
console.log('DB_DATABASE:', process.env.DB_DATABASE);
@Module({
  imports: [
    UserModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: process.env.DB_HOST, // Make sure to have the correct environment variable name
      port: +process.env.DB_PORT, // Convert to number with '+'
      username: process.env.DB_USER, // Correct environment variable name
      password: process.env.DB_PASSWORD, // Ensure the name is correct
      database: process.env.DB_NAME, // Correct environment variable
      entities: [User], // Include your entities
      synchronize: true, // Be cautious using this in production
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

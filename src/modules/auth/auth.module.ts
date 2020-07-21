import { Module } from '@nestjs/common';
import { GoogleStrategy } from './strategies/google.strategy';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { ConfigService } from 'src/config/config.service';

@Module({
  providers: [GoogleStrategy, AuthService, ConfigService],
  controllers: [AuthController],
})
export class AuthModule {}

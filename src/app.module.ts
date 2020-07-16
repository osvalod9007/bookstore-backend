import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './modules/user/user.module';
import { ConfigModule } from './config/config.module';
import { ConfigService } from './config/config.service';
import { Configuration } from './config/config.keys';
import { DatabaseModule } from './database/database.module';

@Module({
  imports: [UserModule, ConfigModule, DatabaseModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  static port: number | string;
  static prefix: string;
  static documentation: {
    title: string;
    description: string;
    version: string;
  };

  constructor(private readonly _configService: ConfigService) {
    AppModule.port = this._configService.get(Configuration.PORT);
    AppModule.prefix = this._configService.get(Configuration.APP_PREFIX);
    AppModule.documentation = {
      title: this._configService.get(Configuration.DOCUMENTATION_TITLE),
      description: this._configService.get(
        Configuration.DOCUMENTATION_DESCRIPTION,
      ),
      version: this._configService.get(Configuration.DOCUMENTATION_VERSION),
    };
  }
}

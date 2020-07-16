import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

import * as helmet from 'helmet';
import * as csurf from 'csurf';
import * as compression from 'compression';
import * as rateLimit from 'express-rate-limit';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });
  app.setGlobalPrefix(AppModule.prefix);
  app.enableCors();
  app.use(helmet());
  app.use(compression());
  // app.use(csurf());
  app.use(
    rateLimit({
      windowMs: 15 * 60 * 1000,
      max: 100,
    }),
  );

  const options = new DocumentBuilder()
    .setTitle(AppModule.documentation.title)
    .setDescription(AppModule.documentation.description)
    .setVersion(AppModule.documentation.version)
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup(AppModule.prefix, app, document);

  await app.listen(AppModule.port, '0.0.0.0');
}
bootstrap();

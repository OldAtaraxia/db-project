import { NestFactory } from '@nestjs/core';
import { AdminModule } from './admin.module';
import { DocumentBuilder, SwaggerModule} from '@nestjs/swagger'

async function bootstrap() {
  const app = await NestFactory.create(AdminModule);
  
  const options = new DocumentBuilder()
    .setTitle('api文档')
    .setDescription('一个nest.js项目')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api-docs', app, document);

  await app.listen(3000);
  console.log('http://localhost:3000')
}
bootstrap();

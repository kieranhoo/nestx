import App from '@/app';

async function bootstrap() {
  const app = new App();
  await app.initialize();
  await app.listen(3000);
}
bootstrap();

import { Test, TestingModule } from '@nestjs/testing';
import { CommonController, CommonService } from '.';

describe('AppController', () => {
  let appController: CommonController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [CommonController],
      providers: [CommonService],
    }).compile();

    appController = app.get<CommonController>(CommonController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(appController.getHello()).toBe('Hello World!');
    });
  });
});

import { Test, TestingModule } from '@nestjs/testing';
import { ServiciosController } from './servicios.controller';
import { ServiciosService } from './servicios.service';

describe('ServiciosController', () => {
  let serviciosController: ServiciosController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [ServiciosController],
      providers: [ServiciosService],
    }).compile();

    serviciosController = app.get<ServiciosController>(ServiciosController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(serviciosController.getHello()).toBe('Hello World!');
    });
  });
});

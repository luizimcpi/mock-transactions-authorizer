import { Test, TestingModule } from '@nestjs/testing';
import { TransactionsService } from './transactions.service';
import { HttpService } from '@nestjs/axios';
import { of } from 'rxjs';
import { AxiosResponse } from 'axios';

describe('TransactionsService', () => {
  let service: TransactionsService;
  let httpService: HttpService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        TransactionsService,
        {
          provide: HttpService,
          useValue: {
            post: jest.fn(),
          },
        },
      ],
    }).compile();

    service = module.get<TransactionsService>(TransactionsService);
    httpService = module.get<HttpService>(HttpService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
    expect(httpService).toBeDefined();
  });

  describe('create', () => {
    it('should create a random transaction with success', async () => {
      const data = ['true'];
      const response: AxiosResponse<any> = {
        data,
        headers: {},
        config: {
          headers: undefined,
        },
        status: 200,
        statusText: 'OK',
      };
      jest
        .spyOn(httpService, 'post')
        .mockImplementationOnce(() => of(response));
      const result = await service.create();
      expect(result).toBeTruthy();
      expect(httpService.post).toBeCalledTimes(1);
    });
  });
});

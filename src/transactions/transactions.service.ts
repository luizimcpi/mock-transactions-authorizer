import { HttpStatus, Injectable, Logger } from '@nestjs/common';
import { CreateTransactionDto } from './dto/create-transaction.dto';
import { HttpService } from '@nestjs/axios';
import { v4 as uuidv4 } from 'uuid';
import { lastValueFrom } from 'rxjs';

@Injectable()
export class TransactionsService {
  private readonly logger = new Logger(TransactionsService.name);
  constructor(private readonly httpService: HttpService) {}

  async create(): Promise<boolean> {
    const randomAmount = Math.floor(Math.random() * 6) + 100;
    const transaction: CreateTransactionDto = {
      id: uuidv4(),
      client_document: uuidv4(),
      amount: randomAmount,
      type: randomAmount % 2 == 0 ? 'CREDIT' : 'DEBIT',
      created_at: new Date(),
    };
    this.logger.debug(
      `Calling bank service with transactionId : ${transaction.id}`,
    );

    return this.sendToWebhook(transaction);
  }

  async sendToWebhook(data: CreateTransactionDto): Promise<boolean> {
    const url = 'https://webhook.site/14da156a-cfbb-4f00-84e1-57d6e682b14c';
    const config = {
      headers: {
        'Content-Type': 'Application/json',
      },
    };

    const response = await lastValueFrom(
      this.httpService.post(url, data, config),
    );

    return response.status == HttpStatus.OK;
  }
}

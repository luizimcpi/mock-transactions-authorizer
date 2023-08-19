import { Injectable, Logger } from '@nestjs/common';
import { CreateTransactionDto } from './dto/create-transaction.dto';
import { HttpService } from '@nestjs/axios';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class TransactionsService {
  private readonly logger = new Logger(TransactionsService.name);
  constructor(private readonly httpService: HttpService) {}

  create() {
    const transaction: CreateTransactionDto = {
      id: uuidv4(),
      client_document: uuidv4(),
      amount: 1000,
      type: 'CREDIT',
      created_at: new Date(),
    };
    this.logger.debug(
      `Calling bank service with transactionId : ${transaction.id}`,
    );

    return this.httpService.post(
      'https://webhook.site/e7648810-8661-47af-8b64-cff6e4b0e630',
      transaction,
    );
  }
}

export class CreateTransactionDto {
  id: string;
  client_document: string;
  amount: number;
  type: string;
  created_at: Date;
}

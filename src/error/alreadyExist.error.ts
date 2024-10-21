export default class AlreadyExistError extends Error {
  statusCode: number;
  detail: string;
  constructor(message: string) {
    super(message);
    this.name = 'AlreadyExistError';
    this.detail = message;
    this.statusCode = 400;
  }
}

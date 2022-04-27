export class response {
  "status": number;
  "message": any;
  "user": any;
  constructor(status: number, message: any, user?: any) {
    this.status = status;
    this.message = message;
    this.user = user;
  }
}

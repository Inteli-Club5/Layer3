import { HttpException } from "@nestjs/common";

export class SyntaxException extends HttpException {
    constructor(message: string) {
        super(message, 400);
        this.name = 'SyntaxException';
        Object.setPrototypeOf(this, SyntaxException.prototype);
    }
}
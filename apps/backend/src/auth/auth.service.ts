import { PrismaService } from "@namnh240795/prisma";
import { Injectable } from "@nestjs/common";

@Injectable()
export class AuthService {
    constructor(private readonly prisma: PrismaService) {

    }
}
import { PrismaService } from "@namnh240795/prisma";
import { Injectable } from "@nestjs/common";

@Injectable()
export class BoostService {
    constructor(private readonly prisma: PrismaService) { }
}
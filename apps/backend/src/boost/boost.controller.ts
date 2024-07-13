import { Controller } from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import { BoostService } from "./boost.service";

@Controller('boost')
@ApiTags('Boost')
export class BoostController {
    constructor(private readonly boostService: BoostService) {

    }
}
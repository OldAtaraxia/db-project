import { Controller } from '@nestjs/common';
import { Crud } from 'nestjs-mongoose-crud'
import { InjectModel } from 'nestjs-typegoose';
import { ReturnModelType } from '@typegoose/typegoose'
import { Episode } from '@libs/db/models/episode.model';




@Crud({
    model: Episode
})
@Controller('Episode')
export class EpisodeController {
    constructor(
        @InjectModel(Episode) private readonly model: ReturnModelType<typeof Episode>
    ){ }
}

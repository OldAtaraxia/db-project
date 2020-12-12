import { Controller, Get } from '@nestjs/common';
import { Crud } from 'nestjs-mongoose-crud'
import { InjectModel } from 'nestjs-typegoose';
import { ReturnModelType } from '@typegoose/typegoose'
import { Episode } from '@libs/db/models/episode.model';
import { Anime } from '@libs/db/models/anime.model';




@Crud({
    model: Episode
})
@Controller('episodes')
export class EpisodeController {
    constructor(
        @InjectModel(Episode) private readonly model: ReturnModelType<typeof Episode>,
        @InjectModel(Anime) private readonly animeModel: ReturnModelType<typeof Anime>
    ){}
    
}


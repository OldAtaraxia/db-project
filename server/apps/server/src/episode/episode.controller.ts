import { Episode } from '@libs/db/models/episode.model';
import { Controller } from '@nestjs/common';
import { Crud } from 'nestjs-mongoose-crud';
import { InjectModel } from 'nestjs-typegoose';

@Crud({
    model: Episode,
    routes: {
        create: false,
        update: false,
        delete: false
    }
})
@Controller('episode')
export class EpisodeController {
    constructor(
        @InjectModel(Episode) private model
    ){}
}

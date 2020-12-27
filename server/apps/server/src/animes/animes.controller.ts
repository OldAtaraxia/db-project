import { Anime } from '@libs/db/models/anime.model';
import { Controller } from '@nestjs/common';
import { Crud } from 'nestjs-mongoose-crud';
import { InjectModel } from 'nestjs-typegoose';
import { ReturnModelType } from '@typegoose/typegoose'


@Crud({
    model: Anime,
    routes: {
        create: false,
        update: false,
        delete: false
    }
})
@Controller('animes')
export class AnimesController {
    constructor(
        @InjectModel(Anime) private model
    ){}
}

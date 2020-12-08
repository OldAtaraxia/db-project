import { modelOptions, prop, Ref } from "@typegoose/typegoose";
import { Anime } from './anime.model'

@modelOptions({
    schemaOptions: {
        timestamps: true //给模型加上字段:创建时间和更新时间
    }
})
export class Episode{
    @prop()
    name:string

    @prop()
    file: string

    @prop({ref: 'Anime'})
    anime: Ref<Anime>


}
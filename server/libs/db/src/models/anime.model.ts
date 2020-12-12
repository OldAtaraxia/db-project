import {  modelOptions, prop, Ref } from '@typegoose/typegoose'
import { Episode } from './episode.model'


@modelOptions({
    schemaOptions: {
        timestamps: true //给模型加上字段:创建时间和更新时间
    }
})

export class Anime{
    @prop()
    title: string
    //封面图
    @prop()
    cover: string    
    @prop()
    episodeNumber: number
}
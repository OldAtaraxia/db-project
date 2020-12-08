import { modelOptions, prop } from "@typegoose/typegoose";

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
}
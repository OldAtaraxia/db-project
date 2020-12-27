import { modelOptions, prop } from '@typegoose/typegoose'
import { hashSync } from 'bcryptjs'


@modelOptions({
    schemaOptions: {
        timestamps: true //给模型加上字段:创建时间和更新时间
    }
})
export class User{
    @prop()
    username: string
    @prop({
        select: false,
        get(val){
            return val
        },
        set(val){
            return val ? hashSync(val) : val
        }
    })
    password: string    
}
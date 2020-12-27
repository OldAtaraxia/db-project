import { StrategyOptions, Strategy, ExtractJwt } from 'passport-jwt'
import { PassportStrategy } from '@nestjs/passport'
import { User } from '@libs/db/models/user.model'
import { InjectModel } from 'nestjs-typegoose'
import { ReturnModelType } from '@typegoose/typegoose'
import { BadRequestException } from '@nestjs/common'
import { compareSync } from 'bcryptjs'

export class JwtStrategy extends PassportStrategy(Strategy, ){
    constructor(
        @InjectModel(User) private userModel: ReturnModelType<typeof User>
        
    ) {
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            secretOrKey: "da3idfjjfe83jsjfdw4r4667jhyhfv4t5"
        } as StrategyOptions)
    }

    async validate(id){
        return await this.userModel.findById(id)
    }
}

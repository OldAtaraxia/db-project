import { IStrategyOptions, Strategy } from 'passport-local'
import { PassportStrategy } from '@nestjs/passport'
import { User } from '@libs/db/models/user.model'
import { InjectModel } from 'nestjs-typegoose'
import { ReturnModelType } from '@typegoose/typegoose'
import { BadRequestException } from '@nestjs/common'
import { compareSync } from 'bcryptjs'

export class LocalStrategy extends PassportStrategy(Strategy, 'local'){
    constructor(
        @InjectModel(User) private userModel: ReturnModelType<typeof User>
        
    ) {
        super({
            usernameField: 'username',
            passwordField: 'password'
        } as IStrategyOptions)
    }

    async validate(username: string, password: string){
        const user = await this.userModel.findOne({username}).select('+password') //通过用户名查用户
        if(!user){
            throw new BadRequestException('用户名不正确');
        }
        if(!compareSync(password, user.password)){
            throw new BadRequestException('密码错误')
        }
        return user;
    }
}

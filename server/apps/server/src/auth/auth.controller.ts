import { User } from '@libs/db/models/user.model';
import { Body, Controller, Post, Get, UseGuards, Req } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { AuthGuard } from '@nestjs/passport';
import { ApiBearerAuth, ApiProperty } from '@nestjs/swagger';
import { ReturnModelType } from '@typegoose/typegoose';
import { InjectModel } from 'nestjs-typegoose';
import { LoginDto } from './dto/login.dto';

export class RegisterDto {
    @ApiProperty()
    username: string
    @ApiProperty()
    password: string
}


@Controller('auth')
export class AuthController {

    constructor(
        private jwtService: JwtService,
        @InjectModel(User) private userModel: ReturnModelType<typeof User>
    ){}

    //用户注册
    @Post('register')
    async register(@Body() dto: RegisterDto){
        const {username, password} = dto;
        const user = await this.userModel.create({
            username,
            password
        })
        return user;
    }

    //用户登录
    @Post('login')
    @UseGuards(AuthGuard('local'))
    async login(@Body() dto:LoginDto, @Req() req){
        return {
            token: this.jwtService.sign(String(req.user._id))
        }
    }

    //获取个人信息
    @Get('user')
    @UseGuards(AuthGuard('jwt'))
    @ApiBearerAuth()
    async user(@Req() req){
        return req.user;
    }
}

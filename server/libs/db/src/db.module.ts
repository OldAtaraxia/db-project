import { Global, Module } from '@nestjs/common';
import { DbService } from './db.service';
import { TypegooseModule } from 'nestjs-typegoose'
import { User } from './models/user.model';
import { Anime } from './models/anime.model';
import { Episode } from './models/episode.model';
import { JwtModule } from '@nestjs/jwt'

const models = TypegooseModule.forFeature([User,
  Anime,
  Episode
])

@Global()
@Module({
  imports: [
    TypegooseModule.forRoot('mongodb://localhost/dili', {
      useCreateIndex:true,
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
    }),
    models,
    JwtModule.registerAsync({
      useFactory(){
        return{
          secret: "da3idfjjfe83jsjfdw4r4667jhyhfv4t5"
        }
      }
    }),
  ],
  providers: [DbService],
  exports: [DbService, models, JwtModule],
})
export class DbModule {}

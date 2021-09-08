import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GraphQLModule } from '@nestjs/graphql';
import { MongooseModule } from '@nestjs/mongoose';
import { TeamsModule } from './components/teams/teams.module';

@Module({
  imports: [
    TeamsModule, 
    GraphQLModule.forRoot({
      playground: true,
      debug: true,
      autoSchemaFile: true
    }),
    MongooseModule.forRoot('mongodb://localhost/nest')
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}

import { Field, ObjectType } from "@nestjs/graphql";
import { ObjectID } from "typeorm";
import { PokemonType } from "./pokemon";

@ObjectType()
export class TeamType {

    @Field(type => String)
    _id: ObjectID
    
    @Field()
    name: string;

    @Field(() => [PokemonType]) 
    pokemon: PokemonType[];
}
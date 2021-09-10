import { Field, ObjectType } from "@nestjs/graphql";
import { PrimaryGeneratedColumn } from "typeorm";
import { PokemonType } from "./pokemon";

@ObjectType()
export class TeamType {

    @Field()
    @PrimaryGeneratedColumn('uuid')
    id!: string;
    
    @Field()
    name: string;

    @Field(() => [PokemonType]) 
    pokemon: PokemonType[];
}
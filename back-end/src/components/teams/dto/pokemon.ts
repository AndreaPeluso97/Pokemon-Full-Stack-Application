import { Field, ObjectType } from "@nestjs/graphql";
import { AbilitiesType } from "./abilities";
import { TypesType } from "./types";

@ObjectType()
export class PokemonType {
    
    @Field()
    name: string;

    @Field()
    base_experience: number;

    @Field()
    thumbnailSrc: string;

    @Field(() => [AbilitiesType]) 
    abilities: AbilitiesType[];


    @Field(() => [TypesType]) 
    types: TypesType[];

} 

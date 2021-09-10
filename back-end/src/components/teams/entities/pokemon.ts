import { Field, InputType } from "@nestjs/graphql";
import { Column } from "typeorm";
import { Abilities } from "./abilities";
import { Types } from "./types";

@InputType()
export class Pokemon {
    
    @Column()
    @Field()
    name: string;

    @Column()
    @Field()
    base_experience: number;

    @Column()
    @Field()
    thumbnailSrc: string;

    @Field(() => [Abilities]) 
    abilities: Abilities[];


    @Field(() => [Types]) 
    types: Types[];


    constructor(name: string, base_experience: number, thumbnailSrc: string, abilities: Abilities[], types: Types[]) {
        this.name = name;
        this.base_experience = base_experience;
        this.thumbnailSrc = thumbnailSrc;
        this.abilities = abilities;
        this.types = types;
    }
} 

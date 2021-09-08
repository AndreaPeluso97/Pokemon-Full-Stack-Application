import { Field, InputType } from "@nestjs/graphql";
import { Column, ObjectID, ObjectIdColumn } from "typeorm";
import { Pokemon } from "../entities/pokemon";

@InputType()
export class TeamInput {

    @ObjectIdColumn()
    _id: ObjectID;
    
    @Column()
    @Field()
    name: string;

    @Field(() => [Pokemon]) 
    pokemon: Pokemon[];
}
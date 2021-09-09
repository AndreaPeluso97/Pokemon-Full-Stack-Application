import { Field, InputType } from "@nestjs/graphql";
import { Column, ObjectIdColumn, PrimaryGeneratedColumn } from "typeorm";
import { Pokemon } from "../entities/pokemon";

@InputType()
export class TeamInput {

    @ObjectIdColumn()
    @PrimaryGeneratedColumn('uuid')
    id: string;
    
    @Column()
    @Field()
    name: string;

    @Field(() => [Pokemon]) 
    pokemon: Pokemon[];
}
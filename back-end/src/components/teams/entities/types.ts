import { Field, InputType } from "@nestjs/graphql";
import { Column } from "typeorm";

@InputType()
export class Types {
    @Column()
    @Field()
    name: string;

    constructor(name: string) {
        this.name = name;
    }
} 
   
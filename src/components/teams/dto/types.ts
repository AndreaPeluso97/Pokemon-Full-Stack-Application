import { Field, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class TypesType {
    @Field()
    name: string;
} 
   
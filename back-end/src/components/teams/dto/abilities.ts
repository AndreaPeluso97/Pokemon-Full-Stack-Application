import { Field, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class AbilitiesType {
    @Field()
    name: string;

}
   
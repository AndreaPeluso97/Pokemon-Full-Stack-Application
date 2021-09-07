import { Field, InputType } from "@nestjs/graphql";
import { Max } from "class-validator";

@InputType()
export class NewTeamInput {
    @Field()
    name: string;
}

import { Module } from "@nestjs/common";
import { TeamsModule } from "./teams/teams.module";

@Module({
    imports: [TeamsModule]
})
export class ComponentsModule {}
import { CreateTeamDto } from "src/teams/dto/create-team.dto";

// @Relation('todoItem', () => TodoItemDTO, { disableRemove: true })
export class CreateUserDto {
    id: string;
    email: string;
    name: string;
    password: string;
    team: CreateTeamDto

    constructor(user){
        this.id = user.id
        this.email = user.email
        this.name = user.name;
    }

}



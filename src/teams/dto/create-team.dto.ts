

// @Relation('todoItem', () => TodoItemDTO, { disableRemove: true })
export class CreateTeamDto {
    id: string;
    name: string;
    teamOwner: any;

    constructor(user){
        this.id = user.id
        this.name = user.name;
        this.teamOwner = user.teamOwner;
    }

}



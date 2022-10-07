

// @Relation('todoItem', () => TodoItemDTO, { disableRemove: true })
export class CreateTeamDto {
    id: string;
    name: string;

    constructor(user){
        this.id = user.id
        this.name = user.name;
    }

}



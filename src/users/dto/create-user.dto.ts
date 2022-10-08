export class CreateUserDto {
    _id: string;
    email: string;
    name: string;
    password: string;
    teamId: any;

    constructor(user){
        this._id = user._id
        this.email = user.email
        this.name = user.name;
        this.teamId = user.team ? user.team._id : null;
    }

}



export default class UserModel{
    name: string
    email: string
    message: string

    constructor(){

    }

    toString(): string{
        return JSON.stringify(this);
    }

    private _to;public get to() {
        return this._to;
    }
public set to(value) {
        this._to = value;
    }
 JSON(userStringed: string): UserModel{
        return JSON.parse(userStringed) as UserModel
    }
}
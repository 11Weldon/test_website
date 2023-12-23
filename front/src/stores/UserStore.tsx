import {makeAutoObservable} from "mobx";

export default class UserStore{
    set user(value: {}) {
        this._user = value;
    }
    private _user: {};
    set isAuth(value: boolean) {
        this._isAuth = value;
    }
    private _isAuth: boolean;

    constructor() {
        this._isAuth = false
        this._user={}
        makeAutoObservable(this)
    }
}
export class ApiKeyModel {
    public userId: string;
    public token: string;
    public appId: string;
    public role: string;

    constructor(userId: string, token: string, appId: string, role: string) {
        this.userId = userId;
        this.token = token;
        this.appId = appId;
        this.role = role;
    }
}
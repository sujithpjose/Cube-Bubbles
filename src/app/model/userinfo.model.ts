export class UserInfoModel {
    public apartmentName: string;
    public apartmentId: string;
    public apartmentNumber: number;

    constructor(apartmentName: string, apartmentId: string, apartmentNumber: number) {
        this.apartmentName = apartmentName;
        this.apartmentId = apartmentId;
        this.apartmentNumber = apartmentNumber;
    }
}
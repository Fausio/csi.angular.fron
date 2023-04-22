

export interface householdDTO {

    id: number;
    guid: string;
    createdDate: Date;
    updatedDate: Date;

    name: string;
    address: string;
    NeighborhoodName: string;
    Block: string;
    FamilyPhoneNumber: string;
    ClosePlaceToHome: string;

    partnerId: number;
    FamilyHeadId: number;
    FamilyOriginRefId: number;

}

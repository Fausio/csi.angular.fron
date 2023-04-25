

export interface householdDTO {

    id: number;
    guid: string;
    createdDate: Date;
    updatedDate: Date;

    name: string;
    address: string;
    neighborhoodName: string;
    block: string;
    familyPhoneNumber: string;
    closePlaceToHome: string;

    otherFamilyOriginRef: string;

    partnerId: number;
    familyHeadId: number;
    familyOriginRefId: number;

}

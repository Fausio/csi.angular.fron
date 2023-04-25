 
import { pagination } from "../common/pagination";
import { beneficiaryDTO } from "./beneficiary.model";

export interface beneficiaryPage extends pagination {

    result: beneficiaryDTO[];

}

import { householdDTO } from "../household/household.model";
import { pagination } from "../common/pagination";

export interface householdPage extends pagination {

    result: householdDTO[];

}

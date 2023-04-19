import { householdDTO } from "./household.model";
import { pagination } from "./pagination";

export interface householdPage extends pagination {

    result: householdDTO[];

}

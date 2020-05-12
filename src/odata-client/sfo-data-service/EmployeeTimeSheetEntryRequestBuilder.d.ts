import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder } from '@sap-cloud-sdk/core';
import { EmployeeTimeSheetEntry } from './EmployeeTimeSheetEntry';
/**
 * Request builder class for operations supported on the [[EmployeeTimeSheetEntry]] entity.
 */
export declare class EmployeeTimeSheetEntryRequestBuilder extends RequestBuilder<EmployeeTimeSheetEntry> {
    /**
     * Returns a request builder for retrieving one `EmployeeTimeSheetEntry` entity based on its keys.
     * @param employeeTimeSheetExternalCode Key property. See [[EmployeeTimeSheetEntry.employeeTimeSheetExternalCode]].
     * @param externalCode Key property. See [[EmployeeTimeSheetEntry.externalCode]].
     * @returns A request builder for creating requests to retrieve one `EmployeeTimeSheetEntry` entity based on its keys.
     */
    getByKey(employeeTimeSheetExternalCode: string, externalCode: string): GetByKeyRequestBuilder<EmployeeTimeSheetEntry>;
    /**
     * Returns a request builder for querying all `EmployeeTimeSheetEntry` entities.
     * @returns A request builder for creating requests to retrieve all `EmployeeTimeSheetEntry` entities.
     */
    getAll(): GetAllRequestBuilder<EmployeeTimeSheetEntry>;
}
//# sourceMappingURL=EmployeeTimeSheetEntryRequestBuilder.d.ts.map
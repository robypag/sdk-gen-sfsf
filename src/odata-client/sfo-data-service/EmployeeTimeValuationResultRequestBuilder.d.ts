import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder } from '@sap-cloud-sdk/core';
import { EmployeeTimeValuationResult } from './EmployeeTimeValuationResult';
/**
 * Request builder class for operations supported on the [[EmployeeTimeValuationResult]] entity.
 */
export declare class EmployeeTimeValuationResultRequestBuilder extends RequestBuilder<EmployeeTimeValuationResult> {
    /**
     * Returns a request builder for retrieving one `EmployeeTimeValuationResult` entity based on its keys.
     * @param employeeTimeSheetExternalCode Key property. See [[EmployeeTimeValuationResult.employeeTimeSheetExternalCode]].
     * @param externalCode Key property. See [[EmployeeTimeValuationResult.externalCode]].
     * @returns A request builder for creating requests to retrieve one `EmployeeTimeValuationResult` entity based on its keys.
     */
    getByKey(employeeTimeSheetExternalCode: string, externalCode: string): GetByKeyRequestBuilder<EmployeeTimeValuationResult>;
    /**
     * Returns a request builder for querying all `EmployeeTimeValuationResult` entities.
     * @returns A request builder for creating requests to retrieve all `EmployeeTimeValuationResult` entities.
     */
    getAll(): GetAllRequestBuilder<EmployeeTimeValuationResult>;
}
//# sourceMappingURL=EmployeeTimeValuationResultRequestBuilder.d.ts.map
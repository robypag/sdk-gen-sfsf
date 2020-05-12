import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder } from '@sap-cloud-sdk/core';
import { EmployeeTimeSheet } from './EmployeeTimeSheet';
/**
 * Request builder class for operations supported on the [[EmployeeTimeSheet]] entity.
 */
export declare class EmployeeTimeSheetRequestBuilder extends RequestBuilder<EmployeeTimeSheet> {
    /**
     * Returns a request builder for retrieving one `EmployeeTimeSheet` entity based on its keys.
     * @param externalCode Key property. See [[EmployeeTimeSheet.externalCode]].
     * @returns A request builder for creating requests to retrieve one `EmployeeTimeSheet` entity based on its keys.
     */
    getByKey(externalCode: string): GetByKeyRequestBuilder<EmployeeTimeSheet>;
    /**
     * Returns a request builder for querying all `EmployeeTimeSheet` entities.
     * @returns A request builder for creating requests to retrieve all `EmployeeTimeSheet` entities.
     */
    getAll(): GetAllRequestBuilder<EmployeeTimeSheet>;
}
//# sourceMappingURL=EmployeeTimeSheetRequestBuilder.d.ts.map
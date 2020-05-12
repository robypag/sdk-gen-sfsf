import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder } from '@sap-cloud-sdk/core';
import { TimeManagementAlert } from './TimeManagementAlert';
/**
 * Request builder class for operations supported on the [[TimeManagementAlert]] entity.
 */
export declare class TimeManagementAlertRequestBuilder extends RequestBuilder<TimeManagementAlert> {
    /**
     * Returns a request builder for retrieving one `TimeManagementAlert` entity based on its keys.
     * @param externalCode Key property. See [[TimeManagementAlert.externalCode]].
     * @returns A request builder for creating requests to retrieve one `TimeManagementAlert` entity based on its keys.
     */
    getByKey(externalCode: string): GetByKeyRequestBuilder<TimeManagementAlert>;
    /**
     * Returns a request builder for querying all `TimeManagementAlert` entities.
     * @returns A request builder for creating requests to retrieve all `TimeManagementAlert` entities.
     */
    getAll(): GetAllRequestBuilder<TimeManagementAlert>;
}
//# sourceMappingURL=TimeManagementAlertRequestBuilder.d.ts.map
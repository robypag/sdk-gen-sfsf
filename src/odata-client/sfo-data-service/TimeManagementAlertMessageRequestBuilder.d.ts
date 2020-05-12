import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder } from '@sap-cloud-sdk/core';
import { TimeManagementAlertMessage } from './TimeManagementAlertMessage';
/**
 * Request builder class for operations supported on the [[TimeManagementAlertMessage]] entity.
 */
export declare class TimeManagementAlertMessageRequestBuilder extends RequestBuilder<TimeManagementAlertMessage> {
    /**
     * Returns a request builder for retrieving one `TimeManagementAlertMessage` entity based on its keys.
     * @param timeManagementAlertExternalCode Key property. See [[TimeManagementAlertMessage.timeManagementAlertExternalCode]].
     * @param externalCode Key property. See [[TimeManagementAlertMessage.externalCode]].
     * @returns A request builder for creating requests to retrieve one `TimeManagementAlertMessage` entity based on its keys.
     */
    getByKey(timeManagementAlertExternalCode: string, externalCode: string): GetByKeyRequestBuilder<TimeManagementAlertMessage>;
    /**
     * Returns a request builder for querying all `TimeManagementAlertMessage` entities.
     * @returns A request builder for creating requests to retrieve all `TimeManagementAlertMessage` entities.
     */
    getAll(): GetAllRequestBuilder<TimeManagementAlertMessage>;
}
//# sourceMappingURL=TimeManagementAlertMessageRequestBuilder.d.ts.map
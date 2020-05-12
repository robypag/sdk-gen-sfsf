import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder } from '@sap-cloud-sdk/core';
import { TimeAccountType } from './TimeAccountType';
/**
 * Request builder class for operations supported on the [[TimeAccountType]] entity.
 */
export declare class TimeAccountTypeRequestBuilder extends RequestBuilder<TimeAccountType> {
    /**
     * Returns a request builder for retrieving one `TimeAccountType` entity based on its keys.
     * @param externalCode Key property. See [[TimeAccountType.externalCode]].
     * @returns A request builder for creating requests to retrieve one `TimeAccountType` entity based on its keys.
     */
    getByKey(externalCode: string): GetByKeyRequestBuilder<TimeAccountType>;
    /**
     * Returns a request builder for querying all `TimeAccountType` entities.
     * @returns A request builder for creating requests to retrieve all `TimeAccountType` entities.
     */
    getAll(): GetAllRequestBuilder<TimeAccountType>;
}
//# sourceMappingURL=TimeAccountTypeRequestBuilder.d.ts.map
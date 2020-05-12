import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder } from '@sap-cloud-sdk/core';
import { TimeCollector } from './TimeCollector';
/**
 * Request builder class for operations supported on the [[TimeCollector]] entity.
 */
export declare class TimeCollectorRequestBuilder extends RequestBuilder<TimeCollector> {
    /**
     * Returns a request builder for retrieving one `TimeCollector` entity based on its keys.
     * @param externalCode Key property. See [[TimeCollector.externalCode]].
     * @returns A request builder for creating requests to retrieve one `TimeCollector` entity based on its keys.
     */
    getByKey(externalCode: string): GetByKeyRequestBuilder<TimeCollector>;
    /**
     * Returns a request builder for querying all `TimeCollector` entities.
     * @returns A request builder for creating requests to retrieve all `TimeCollector` entities.
     */
    getAll(): GetAllRequestBuilder<TimeCollector>;
}
//# sourceMappingURL=TimeCollectorRequestBuilder.d.ts.map
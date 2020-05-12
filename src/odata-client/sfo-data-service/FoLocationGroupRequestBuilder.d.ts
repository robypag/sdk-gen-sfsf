import { Moment } from 'moment';
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder } from '@sap-cloud-sdk/core';
import { FoLocationGroup } from './FoLocationGroup';
/**
 * Request builder class for operations supported on the [[FoLocationGroup]] entity.
 */
export declare class FoLocationGroupRequestBuilder extends RequestBuilder<FoLocationGroup> {
    /**
     * Returns a request builder for retrieving one `FoLocationGroup` entity based on its keys.
     * @param externalCode Key property. See [[FoLocationGroup.externalCode]].
     * @param startDate Key property. See [[FoLocationGroup.startDate]].
     * @returns A request builder for creating requests to retrieve one `FoLocationGroup` entity based on its keys.
     */
    getByKey(externalCode: string, startDate: Moment): GetByKeyRequestBuilder<FoLocationGroup>;
    /**
     * Returns a request builder for querying all `FoLocationGroup` entities.
     * @returns A request builder for creating requests to retrieve all `FoLocationGroup` entities.
     */
    getAll(): GetAllRequestBuilder<FoLocationGroup>;
}
//# sourceMappingURL=FoLocationGroupRequestBuilder.d.ts.map
import { Moment } from 'moment';
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder } from '@sap-cloud-sdk/core';
import { FoPayRange } from './FoPayRange';
/**
 * Request builder class for operations supported on the [[FoPayRange]] entity.
 */
export declare class FoPayRangeRequestBuilder extends RequestBuilder<FoPayRange> {
    /**
     * Returns a request builder for retrieving one `FoPayRange` entity based on its keys.
     * @param externalCode Key property. See [[FoPayRange.externalCode]].
     * @param startDate Key property. See [[FoPayRange.startDate]].
     * @returns A request builder for creating requests to retrieve one `FoPayRange` entity based on its keys.
     */
    getByKey(externalCode: string, startDate: Moment): GetByKeyRequestBuilder<FoPayRange>;
    /**
     * Returns a request builder for querying all `FoPayRange` entities.
     * @returns A request builder for creating requests to retrieve all `FoPayRange` entities.
     */
    getAll(): GetAllRequestBuilder<FoPayRange>;
}
//# sourceMappingURL=FoPayRangeRequestBuilder.d.ts.map
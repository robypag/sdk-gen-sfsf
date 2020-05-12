import { Moment } from 'moment';
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder } from '@sap-cloud-sdk/core';
import { FoJobClassLocalDeflt } from './FoJobClassLocalDeflt';
/**
 * Request builder class for operations supported on the [[FoJobClassLocalDeflt]] entity.
 */
export declare class FoJobClassLocalDefltRequestBuilder extends RequestBuilder<FoJobClassLocalDeflt> {
    /**
     * Returns a request builder for retrieving one `FoJobClassLocalDeflt` entity based on its keys.
     * @param country Key property. See [[FoJobClassLocalDeflt.country]].
     * @param externalCode Key property. See [[FoJobClassLocalDeflt.externalCode]].
     * @param startDate Key property. See [[FoJobClassLocalDeflt.startDate]].
     * @returns A request builder for creating requests to retrieve one `FoJobClassLocalDeflt` entity based on its keys.
     */
    getByKey(country: string, externalCode: string, startDate: Moment): GetByKeyRequestBuilder<FoJobClassLocalDeflt>;
    /**
     * Returns a request builder for querying all `FoJobClassLocalDeflt` entities.
     * @returns A request builder for creating requests to retrieve all `FoJobClassLocalDeflt` entities.
     */
    getAll(): GetAllRequestBuilder<FoJobClassLocalDeflt>;
}
//# sourceMappingURL=FoJobClassLocalDefltRequestBuilder.d.ts.map
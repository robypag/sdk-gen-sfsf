import { Moment } from 'moment';
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder } from '@sap-cloud-sdk/core';
import { FoJobClassLocalFra } from './FoJobClassLocalFra';
/**
 * Request builder class for operations supported on the [[FoJobClassLocalFra]] entity.
 */
export declare class FoJobClassLocalFraRequestBuilder extends RequestBuilder<FoJobClassLocalFra> {
    /**
     * Returns a request builder for retrieving one `FoJobClassLocalFra` entity based on its keys.
     * @param country Key property. See [[FoJobClassLocalFra.country]].
     * @param externalCode Key property. See [[FoJobClassLocalFra.externalCode]].
     * @param startDate Key property. See [[FoJobClassLocalFra.startDate]].
     * @returns A request builder for creating requests to retrieve one `FoJobClassLocalFra` entity based on its keys.
     */
    getByKey(country: string, externalCode: string, startDate: Moment): GetByKeyRequestBuilder<FoJobClassLocalFra>;
    /**
     * Returns a request builder for querying all `FoJobClassLocalFra` entities.
     * @returns A request builder for creating requests to retrieve all `FoJobClassLocalFra` entities.
     */
    getAll(): GetAllRequestBuilder<FoJobClassLocalFra>;
}
//# sourceMappingURL=FoJobClassLocalFraRequestBuilder.d.ts.map
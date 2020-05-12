import { Moment } from 'moment';
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder } from '@sap-cloud-sdk/core';
import { FoJobClassLocalAus } from './FoJobClassLocalAus';
/**
 * Request builder class for operations supported on the [[FoJobClassLocalAus]] entity.
 */
export declare class FoJobClassLocalAusRequestBuilder extends RequestBuilder<FoJobClassLocalAus> {
    /**
     * Returns a request builder for retrieving one `FoJobClassLocalAus` entity based on its keys.
     * @param country Key property. See [[FoJobClassLocalAus.country]].
     * @param externalCode Key property. See [[FoJobClassLocalAus.externalCode]].
     * @param startDate Key property. See [[FoJobClassLocalAus.startDate]].
     * @returns A request builder for creating requests to retrieve one `FoJobClassLocalAus` entity based on its keys.
     */
    getByKey(country: string, externalCode: string, startDate: Moment): GetByKeyRequestBuilder<FoJobClassLocalAus>;
    /**
     * Returns a request builder for querying all `FoJobClassLocalAus` entities.
     * @returns A request builder for creating requests to retrieve all `FoJobClassLocalAus` entities.
     */
    getAll(): GetAllRequestBuilder<FoJobClassLocalAus>;
}
//# sourceMappingURL=FoJobClassLocalAusRequestBuilder.d.ts.map
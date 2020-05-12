import { Moment } from 'moment';
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder } from '@sap-cloud-sdk/core';
import { FoJobClassLocalBra } from './FoJobClassLocalBra';
/**
 * Request builder class for operations supported on the [[FoJobClassLocalBra]] entity.
 */
export declare class FoJobClassLocalBraRequestBuilder extends RequestBuilder<FoJobClassLocalBra> {
    /**
     * Returns a request builder for retrieving one `FoJobClassLocalBra` entity based on its keys.
     * @param country Key property. See [[FoJobClassLocalBra.country]].
     * @param externalCode Key property. See [[FoJobClassLocalBra.externalCode]].
     * @param startDate Key property. See [[FoJobClassLocalBra.startDate]].
     * @returns A request builder for creating requests to retrieve one `FoJobClassLocalBra` entity based on its keys.
     */
    getByKey(country: string, externalCode: string, startDate: Moment): GetByKeyRequestBuilder<FoJobClassLocalBra>;
    /**
     * Returns a request builder for querying all `FoJobClassLocalBra` entities.
     * @returns A request builder for creating requests to retrieve all `FoJobClassLocalBra` entities.
     */
    getAll(): GetAllRequestBuilder<FoJobClassLocalBra>;
}
//# sourceMappingURL=FoJobClassLocalBraRequestBuilder.d.ts.map
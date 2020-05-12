import { Moment } from 'moment';
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder } from '@sap-cloud-sdk/core';
import { FoLegalEntityLocalUsa } from './FoLegalEntityLocalUsa';
/**
 * Request builder class for operations supported on the [[FoLegalEntityLocalUsa]] entity.
 */
export declare class FoLegalEntityLocalUsaRequestBuilder extends RequestBuilder<FoLegalEntityLocalUsa> {
    /**
     * Returns a request builder for retrieving one `FoLegalEntityLocalUsa` entity based on its keys.
     * @param country Key property. See [[FoLegalEntityLocalUsa.country]].
     * @param externalCode Key property. See [[FoLegalEntityLocalUsa.externalCode]].
     * @param startDate Key property. See [[FoLegalEntityLocalUsa.startDate]].
     * @returns A request builder for creating requests to retrieve one `FoLegalEntityLocalUsa` entity based on its keys.
     */
    getByKey(country: string, externalCode: string, startDate: Moment): GetByKeyRequestBuilder<FoLegalEntityLocalUsa>;
    /**
     * Returns a request builder for querying all `FoLegalEntityLocalUsa` entities.
     * @returns A request builder for creating requests to retrieve all `FoLegalEntityLocalUsa` entities.
     */
    getAll(): GetAllRequestBuilder<FoLegalEntityLocalUsa>;
}
//# sourceMappingURL=FoLegalEntityLocalUsaRequestBuilder.d.ts.map
import { Moment } from 'moment';
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder } from '@sap-cloud-sdk/core';
import { FoLegalEntityLocalFra } from './FoLegalEntityLocalFra';
/**
 * Request builder class for operations supported on the [[FoLegalEntityLocalFra]] entity.
 */
export declare class FoLegalEntityLocalFraRequestBuilder extends RequestBuilder<FoLegalEntityLocalFra> {
    /**
     * Returns a request builder for retrieving one `FoLegalEntityLocalFra` entity based on its keys.
     * @param country Key property. See [[FoLegalEntityLocalFra.country]].
     * @param externalCode Key property. See [[FoLegalEntityLocalFra.externalCode]].
     * @param startDate Key property. See [[FoLegalEntityLocalFra.startDate]].
     * @returns A request builder for creating requests to retrieve one `FoLegalEntityLocalFra` entity based on its keys.
     */
    getByKey(country: string, externalCode: string, startDate: Moment): GetByKeyRequestBuilder<FoLegalEntityLocalFra>;
    /**
     * Returns a request builder for querying all `FoLegalEntityLocalFra` entities.
     * @returns A request builder for creating requests to retrieve all `FoLegalEntityLocalFra` entities.
     */
    getAll(): GetAllRequestBuilder<FoLegalEntityLocalFra>;
}
//# sourceMappingURL=FoLegalEntityLocalFraRequestBuilder.d.ts.map
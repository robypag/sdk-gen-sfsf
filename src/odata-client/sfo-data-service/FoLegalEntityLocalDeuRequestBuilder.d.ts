import { Moment } from 'moment';
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder } from '@sap-cloud-sdk/core';
import { FoLegalEntityLocalDeu } from './FoLegalEntityLocalDeu';
/**
 * Request builder class for operations supported on the [[FoLegalEntityLocalDeu]] entity.
 */
export declare class FoLegalEntityLocalDeuRequestBuilder extends RequestBuilder<FoLegalEntityLocalDeu> {
    /**
     * Returns a request builder for retrieving one `FoLegalEntityLocalDeu` entity based on its keys.
     * @param country Key property. See [[FoLegalEntityLocalDeu.country]].
     * @param externalCode Key property. See [[FoLegalEntityLocalDeu.externalCode]].
     * @param startDate Key property. See [[FoLegalEntityLocalDeu.startDate]].
     * @returns A request builder for creating requests to retrieve one `FoLegalEntityLocalDeu` entity based on its keys.
     */
    getByKey(country: string, externalCode: string, startDate: Moment): GetByKeyRequestBuilder<FoLegalEntityLocalDeu>;
    /**
     * Returns a request builder for querying all `FoLegalEntityLocalDeu` entities.
     * @returns A request builder for creating requests to retrieve all `FoLegalEntityLocalDeu` entities.
     */
    getAll(): GetAllRequestBuilder<FoLegalEntityLocalDeu>;
}
//# sourceMappingURL=FoLegalEntityLocalDeuRequestBuilder.d.ts.map
import { Moment } from 'moment';
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder } from '@sap-cloud-sdk/core';
import { FoLegalEntityLocalArg } from './FoLegalEntityLocalArg';
/**
 * Request builder class for operations supported on the [[FoLegalEntityLocalArg]] entity.
 */
export declare class FoLegalEntityLocalArgRequestBuilder extends RequestBuilder<FoLegalEntityLocalArg> {
    /**
     * Returns a request builder for retrieving one `FoLegalEntityLocalArg` entity based on its keys.
     * @param country Key property. See [[FoLegalEntityLocalArg.country]].
     * @param externalCode Key property. See [[FoLegalEntityLocalArg.externalCode]].
     * @param startDate Key property. See [[FoLegalEntityLocalArg.startDate]].
     * @returns A request builder for creating requests to retrieve one `FoLegalEntityLocalArg` entity based on its keys.
     */
    getByKey(country: string, externalCode: string, startDate: Moment): GetByKeyRequestBuilder<FoLegalEntityLocalArg>;
    /**
     * Returns a request builder for querying all `FoLegalEntityLocalArg` entities.
     * @returns A request builder for creating requests to retrieve all `FoLegalEntityLocalArg` entities.
     */
    getAll(): GetAllRequestBuilder<FoLegalEntityLocalArg>;
}
//# sourceMappingURL=FoLegalEntityLocalArgRequestBuilder.d.ts.map
import { Moment } from 'moment';
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder } from '@sap-cloud-sdk/core';
import { FoLegalEntityLocalEsp } from './FoLegalEntityLocalEsp';
/**
 * Request builder class for operations supported on the [[FoLegalEntityLocalEsp]] entity.
 */
export declare class FoLegalEntityLocalEspRequestBuilder extends RequestBuilder<FoLegalEntityLocalEsp> {
    /**
     * Returns a request builder for retrieving one `FoLegalEntityLocalEsp` entity based on its keys.
     * @param country Key property. See [[FoLegalEntityLocalEsp.country]].
     * @param externalCode Key property. See [[FoLegalEntityLocalEsp.externalCode]].
     * @param startDate Key property. See [[FoLegalEntityLocalEsp.startDate]].
     * @returns A request builder for creating requests to retrieve one `FoLegalEntityLocalEsp` entity based on its keys.
     */
    getByKey(country: string, externalCode: string, startDate: Moment): GetByKeyRequestBuilder<FoLegalEntityLocalEsp>;
    /**
     * Returns a request builder for querying all `FoLegalEntityLocalEsp` entities.
     * @returns A request builder for creating requests to retrieve all `FoLegalEntityLocalEsp` entities.
     */
    getAll(): GetAllRequestBuilder<FoLegalEntityLocalEsp>;
}
//# sourceMappingURL=FoLegalEntityLocalEspRequestBuilder.d.ts.map
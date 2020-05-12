import { Moment } from 'moment';
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder } from '@sap-cloud-sdk/core';
import { FoLegalEntityLocalDeflt } from './FoLegalEntityLocalDeflt';
/**
 * Request builder class for operations supported on the [[FoLegalEntityLocalDeflt]] entity.
 */
export declare class FoLegalEntityLocalDefltRequestBuilder extends RequestBuilder<FoLegalEntityLocalDeflt> {
    /**
     * Returns a request builder for retrieving one `FoLegalEntityLocalDeflt` entity based on its keys.
     * @param country Key property. See [[FoLegalEntityLocalDeflt.country]].
     * @param externalCode Key property. See [[FoLegalEntityLocalDeflt.externalCode]].
     * @param startDate Key property. See [[FoLegalEntityLocalDeflt.startDate]].
     * @returns A request builder for creating requests to retrieve one `FoLegalEntityLocalDeflt` entity based on its keys.
     */
    getByKey(country: string, externalCode: string, startDate: Moment): GetByKeyRequestBuilder<FoLegalEntityLocalDeflt>;
    /**
     * Returns a request builder for querying all `FoLegalEntityLocalDeflt` entities.
     * @returns A request builder for creating requests to retrieve all `FoLegalEntityLocalDeflt` entities.
     */
    getAll(): GetAllRequestBuilder<FoLegalEntityLocalDeflt>;
}
//# sourceMappingURL=FoLegalEntityLocalDefltRequestBuilder.d.ts.map
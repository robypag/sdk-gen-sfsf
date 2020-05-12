import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder } from '@sap-cloud-sdk/core';
import { FoTranslation } from './FoTranslation';
/**
 * Request builder class for operations supported on the [[FoTranslation]] entity.
 */
export declare class FoTranslationRequestBuilder extends RequestBuilder<FoTranslation> {
    /**
     * Returns a request builder for retrieving one `FoTranslation` entity based on its keys.
     * @param externalCode Key property. See [[FoTranslation.externalCode]].
     * @returns A request builder for creating requests to retrieve one `FoTranslation` entity based on its keys.
     */
    getByKey(externalCode: string): GetByKeyRequestBuilder<FoTranslation>;
    /**
     * Returns a request builder for querying all `FoTranslation` entities.
     * @returns A request builder for creating requests to retrieve all `FoTranslation` entities.
     */
    getAll(): GetAllRequestBuilder<FoTranslation>;
}
//# sourceMappingURL=FoTranslationRequestBuilder.d.ts.map
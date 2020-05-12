import { BigNumber } from 'bignumber.js';
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder } from '@sap-cloud-sdk/core';
import { OfferLetter } from './OfferLetter';
/**
 * Request builder class for operations supported on the [[OfferLetter]] entity.
 */
export declare class OfferLetterRequestBuilder extends RequestBuilder<OfferLetter> {
    /**
     * Returns a request builder for retrieving one `OfferLetter` entity based on its keys.
     * @param offerLetterId Key property. See [[OfferLetter.offerLetterId]].
     * @returns A request builder for creating requests to retrieve one `OfferLetter` entity based on its keys.
     */
    getByKey(offerLetterId: BigNumber): GetByKeyRequestBuilder<OfferLetter>;
    /**
     * Returns a request builder for querying all `OfferLetter` entities.
     * @returns A request builder for creating requests to retrieve all `OfferLetter` entities.
     */
    getAll(): GetAllRequestBuilder<OfferLetter>;
    /**
     * Returns a request builder for creating a `OfferLetter` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `OfferLetter`.
     */
    create(entity: OfferLetter): CreateRequestBuilder<OfferLetter>;
}
//# sourceMappingURL=OfferLetterRequestBuilder.d.ts.map
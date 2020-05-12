import { BigNumber } from 'bignumber.js';
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder } from '@sap-cloud-sdk/core';
import { TalentRatings } from './TalentRatings';
/**
 * Request builder class for operations supported on the [[TalentRatings]] entity.
 */
export declare class TalentRatingsRequestBuilder extends RequestBuilder<TalentRatings> {
    /**
     * Returns a request builder for retrieving one `TalentRatings` entity based on its keys.
     * @param feedbackId Key property. See [[TalentRatings.feedbackId]].
     * @returns A request builder for creating requests to retrieve one `TalentRatings` entity based on its keys.
     */
    getByKey(feedbackId: BigNumber): GetByKeyRequestBuilder<TalentRatings>;
    /**
     * Returns a request builder for querying all `TalentRatings` entities.
     * @returns A request builder for creating requests to retrieve all `TalentRatings` entities.
     */
    getAll(): GetAllRequestBuilder<TalentRatings>;
}
//# sourceMappingURL=TalentRatingsRequestBuilder.d.ts.map
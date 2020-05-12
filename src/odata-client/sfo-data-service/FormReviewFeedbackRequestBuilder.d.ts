import { BigNumber } from 'bignumber.js';
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder } from '@sap-cloud-sdk/core';
import { FormReviewFeedback } from './FormReviewFeedback';
/**
 * Request builder class for operations supported on the [[FormReviewFeedback]] entity.
 */
export declare class FormReviewFeedbackRequestBuilder extends RequestBuilder<FormReviewFeedback> {
    /**
     * Returns a request builder for retrieving one `FormReviewFeedback` entity based on its keys.
     * @param feedbackId Key property. See [[FormReviewFeedback.feedbackId]].
     * @returns A request builder for creating requests to retrieve one `FormReviewFeedback` entity based on its keys.
     */
    getByKey(feedbackId: BigNumber): GetByKeyRequestBuilder<FormReviewFeedback>;
    /**
     * Returns a request builder for querying all `FormReviewFeedback` entities.
     * @returns A request builder for creating requests to retrieve all `FormReviewFeedback` entities.
     */
    getAll(): GetAllRequestBuilder<FormReviewFeedback>;
}
//# sourceMappingURL=FormReviewFeedbackRequestBuilder.d.ts.map
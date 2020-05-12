import { BigNumber } from 'bignumber.js';
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder } from '@sap-cloud-sdk/core';
import { FormUserRatingComment } from './FormUserRatingComment';
/**
 * Request builder class for operations supported on the [[FormUserRatingComment]] entity.
 */
export declare class FormUserRatingCommentRequestBuilder extends RequestBuilder<FormUserRatingComment> {
    /**
     * Returns a request builder for retrieving one `FormUserRatingComment` entity based on its keys.
     * @param formContentId Key property. See [[FormUserRatingComment.formContentId]].
     * @param formDataId Key property. See [[FormUserRatingComment.formDataId]].
     * @param itemId Key property. See [[FormUserRatingComment.itemId]].
     * @param ratingType Key property. See [[FormUserRatingComment.ratingType]].
     * @param sectionIndex Key property. See [[FormUserRatingComment.sectionIndex]].
     * @param userId Key property. See [[FormUserRatingComment.userId]].
     * @returns A request builder for creating requests to retrieve one `FormUserRatingComment` entity based on its keys.
     */
    getByKey(formContentId: BigNumber, formDataId: BigNumber, itemId: BigNumber, ratingType: string, sectionIndex: number, userId: string): GetByKeyRequestBuilder<FormUserRatingComment>;
    /**
     * Returns a request builder for querying all `FormUserRatingComment` entities.
     * @returns A request builder for creating requests to retrieve all `FormUserRatingComment` entities.
     */
    getAll(): GetAllRequestBuilder<FormUserRatingComment>;
}
//# sourceMappingURL=FormUserRatingCommentRequestBuilder.d.ts.map
import { BigNumber } from 'bignumber.js';
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder } from '@sap-cloud-sdk/core';
import { FormReviewInfoSection } from './FormReviewInfoSection';
/**
 * Request builder class for operations supported on the [[FormReviewInfoSection]] entity.
 */
export declare class FormReviewInfoSectionRequestBuilder extends RequestBuilder<FormReviewInfoSection> {
    /**
     * Returns a request builder for retrieving one `FormReviewInfoSection` entity based on its keys.
     * @param formContentId Key property. See [[FormReviewInfoSection.formContentId]].
     * @param formDataId Key property. See [[FormReviewInfoSection.formDataId]].
     * @returns A request builder for creating requests to retrieve one `FormReviewInfoSection` entity based on its keys.
     */
    getByKey(formContentId: BigNumber, formDataId: BigNumber): GetByKeyRequestBuilder<FormReviewInfoSection>;
    /**
     * Returns a request builder for querying all `FormReviewInfoSection` entities.
     * @returns A request builder for creating requests to retrieve all `FormReviewInfoSection` entities.
     */
    getAll(): GetAllRequestBuilder<FormReviewInfoSection>;
}
//# sourceMappingURL=FormReviewInfoSectionRequestBuilder.d.ts.map
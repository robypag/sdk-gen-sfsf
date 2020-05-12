import { BigNumber } from 'bignumber.js';
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder } from '@sap-cloud-sdk/core';
import { FormSummarySection } from './FormSummarySection';
/**
 * Request builder class for operations supported on the [[FormSummarySection]] entity.
 */
export declare class FormSummarySectionRequestBuilder extends RequestBuilder<FormSummarySection> {
    /**
     * Returns a request builder for retrieving one `FormSummarySection` entity based on its keys.
     * @param formContentId Key property. See [[FormSummarySection.formContentId]].
     * @param formDataId Key property. See [[FormSummarySection.formDataId]].
     * @returns A request builder for creating requests to retrieve one `FormSummarySection` entity based on its keys.
     */
    getByKey(formContentId: BigNumber, formDataId: BigNumber): GetByKeyRequestBuilder<FormSummarySection>;
    /**
     * Returns a request builder for querying all `FormSummarySection` entities.
     * @returns A request builder for creating requests to retrieve all `FormSummarySection` entities.
     */
    getAll(): GetAllRequestBuilder<FormSummarySection>;
}
//# sourceMappingURL=FormSummarySectionRequestBuilder.d.ts.map
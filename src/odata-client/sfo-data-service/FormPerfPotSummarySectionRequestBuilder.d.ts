import { BigNumber } from 'bignumber.js';
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder } from '@sap-cloud-sdk/core';
import { FormPerfPotSummarySection } from './FormPerfPotSummarySection';
/**
 * Request builder class for operations supported on the [[FormPerfPotSummarySection]] entity.
 */
export declare class FormPerfPotSummarySectionRequestBuilder extends RequestBuilder<FormPerfPotSummarySection> {
    /**
     * Returns a request builder for retrieving one `FormPerfPotSummarySection` entity based on its keys.
     * @param formContentId Key property. See [[FormPerfPotSummarySection.formContentId]].
     * @param formDataId Key property. See [[FormPerfPotSummarySection.formDataId]].
     * @returns A request builder for creating requests to retrieve one `FormPerfPotSummarySection` entity based on its keys.
     */
    getByKey(formContentId: BigNumber, formDataId: BigNumber): GetByKeyRequestBuilder<FormPerfPotSummarySection>;
    /**
     * Returns a request builder for querying all `FormPerfPotSummarySection` entities.
     * @returns A request builder for creating requests to retrieve all `FormPerfPotSummarySection` entities.
     */
    getAll(): GetAllRequestBuilder<FormPerfPotSummarySection>;
}
//# sourceMappingURL=FormPerfPotSummarySectionRequestBuilder.d.ts.map
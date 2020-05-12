import { BigNumber } from 'bignumber.js';
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder } from '@sap-cloud-sdk/core';
import { FormObjCompSummarySection } from './FormObjCompSummarySection';
/**
 * Request builder class for operations supported on the [[FormObjCompSummarySection]] entity.
 */
export declare class FormObjCompSummarySectionRequestBuilder extends RequestBuilder<FormObjCompSummarySection> {
    /**
     * Returns a request builder for retrieving one `FormObjCompSummarySection` entity based on its keys.
     * @param formContentId Key property. See [[FormObjCompSummarySection.formContentId]].
     * @param formDataId Key property. See [[FormObjCompSummarySection.formDataId]].
     * @returns A request builder for creating requests to retrieve one `FormObjCompSummarySection` entity based on its keys.
     */
    getByKey(formContentId: BigNumber, formDataId: BigNumber): GetByKeyRequestBuilder<FormObjCompSummarySection>;
    /**
     * Returns a request builder for querying all `FormObjCompSummarySection` entities.
     * @returns A request builder for creating requests to retrieve all `FormObjCompSummarySection` entities.
     */
    getAll(): GetAllRequestBuilder<FormObjCompSummarySection>;
}
//# sourceMappingURL=FormObjCompSummarySectionRequestBuilder.d.ts.map
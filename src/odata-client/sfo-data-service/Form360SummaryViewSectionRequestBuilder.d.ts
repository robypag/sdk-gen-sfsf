import { BigNumber } from 'bignumber.js';
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder } from '@sap-cloud-sdk/core';
import { Form360SummaryViewSection } from './Form360SummaryViewSection';
/**
 * Request builder class for operations supported on the [[Form360SummaryViewSection]] entity.
 */
export declare class Form360SummaryViewSectionRequestBuilder extends RequestBuilder<Form360SummaryViewSection> {
    /**
     * Returns a request builder for retrieving one `Form360SummaryViewSection` entity based on its keys.
     * @param formContentId Key property. See [[Form360SummaryViewSection.formContentId]].
     * @param formDataId Key property. See [[Form360SummaryViewSection.formDataId]].
     * @returns A request builder for creating requests to retrieve one `Form360SummaryViewSection` entity based on its keys.
     */
    getByKey(formContentId: BigNumber, formDataId: BigNumber): GetByKeyRequestBuilder<Form360SummaryViewSection>;
    /**
     * Returns a request builder for querying all `Form360SummaryViewSection` entities.
     * @returns A request builder for creating requests to retrieve all `Form360SummaryViewSection` entities.
     */
    getAll(): GetAllRequestBuilder<Form360SummaryViewSection>;
}
//# sourceMappingURL=Form360SummaryViewSectionRequestBuilder.d.ts.map
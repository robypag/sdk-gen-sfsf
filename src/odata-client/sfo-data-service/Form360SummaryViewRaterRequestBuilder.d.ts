import { BigNumber } from 'bignumber.js';
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder } from '@sap-cloud-sdk/core';
import { Form360SummaryViewRater } from './Form360SummaryViewRater';
/**
 * Request builder class for operations supported on the [[Form360SummaryViewRater]] entity.
 */
export declare class Form360SummaryViewRaterRequestBuilder extends RequestBuilder<Form360SummaryViewRater> {
    /**
     * Returns a request builder for retrieving one `Form360SummaryViewRater` entity based on its keys.
     * @param formContentId Key property. See [[Form360SummaryViewRater.formContentId]].
     * @param formDataId Key property. See [[Form360SummaryViewRater.formDataId]].
     * @returns A request builder for creating requests to retrieve one `Form360SummaryViewRater` entity based on its keys.
     */
    getByKey(formContentId: BigNumber, formDataId: BigNumber): GetByKeyRequestBuilder<Form360SummaryViewRater>;
    /**
     * Returns a request builder for querying all `Form360SummaryViewRater` entities.
     * @returns A request builder for creating requests to retrieve all `Form360SummaryViewRater` entities.
     */
    getAll(): GetAllRequestBuilder<Form360SummaryViewRater>;
}
//# sourceMappingURL=Form360SummaryViewRaterRequestBuilder.d.ts.map
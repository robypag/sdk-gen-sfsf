import { BigNumber } from 'bignumber.js';
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder } from '@sap-cloud-sdk/core';
import { FormContent } from './FormContent';
/**
 * Request builder class for operations supported on the [[FormContent]] entity.
 */
export declare class FormContentRequestBuilder extends RequestBuilder<FormContent> {
    /**
     * Returns a request builder for retrieving one `FormContent` entity based on its keys.
     * @param formContentId Key property. See [[FormContent.formContentId]].
     * @param formDataId Key property. See [[FormContent.formDataId]].
     * @returns A request builder for creating requests to retrieve one `FormContent` entity based on its keys.
     */
    getByKey(formContentId: BigNumber, formDataId: BigNumber): GetByKeyRequestBuilder<FormContent>;
    /**
     * Returns a request builder for querying all `FormContent` entities.
     * @returns A request builder for creating requests to retrieve all `FormContent` entities.
     */
    getAll(): GetAllRequestBuilder<FormContent>;
}
//# sourceMappingURL=FormContentRequestBuilder.d.ts.map
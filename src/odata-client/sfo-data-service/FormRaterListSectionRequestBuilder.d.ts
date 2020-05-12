import { BigNumber } from 'bignumber.js';
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder } from '@sap-cloud-sdk/core';
import { FormRaterListSection } from './FormRaterListSection';
/**
 * Request builder class for operations supported on the [[FormRaterListSection]] entity.
 */
export declare class FormRaterListSectionRequestBuilder extends RequestBuilder<FormRaterListSection> {
    /**
     * Returns a request builder for retrieving one `FormRaterListSection` entity based on its keys.
     * @param formContentId Key property. See [[FormRaterListSection.formContentId]].
     * @param formDataId Key property. See [[FormRaterListSection.formDataId]].
     * @returns A request builder for creating requests to retrieve one `FormRaterListSection` entity based on its keys.
     */
    getByKey(formContentId: BigNumber, formDataId: BigNumber): GetByKeyRequestBuilder<FormRaterListSection>;
    /**
     * Returns a request builder for querying all `FormRaterListSection` entities.
     * @returns A request builder for creating requests to retrieve all `FormRaterListSection` entities.
     */
    getAll(): GetAllRequestBuilder<FormRaterListSection>;
}
//# sourceMappingURL=FormRaterListSectionRequestBuilder.d.ts.map
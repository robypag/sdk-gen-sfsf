import { BigNumber } from 'bignumber.js';
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder } from '@sap-cloud-sdk/core';
import { FormJobDescSection } from './FormJobDescSection';
/**
 * Request builder class for operations supported on the [[FormJobDescSection]] entity.
 */
export declare class FormJobDescSectionRequestBuilder extends RequestBuilder<FormJobDescSection> {
    /**
     * Returns a request builder for retrieving one `FormJobDescSection` entity based on its keys.
     * @param formContentId Key property. See [[FormJobDescSection.formContentId]].
     * @param formDataId Key property. See [[FormJobDescSection.formDataId]].
     * @param sectionIndex Key property. See [[FormJobDescSection.sectionIndex]].
     * @returns A request builder for creating requests to retrieve one `FormJobDescSection` entity based on its keys.
     */
    getByKey(formContentId: BigNumber, formDataId: BigNumber, sectionIndex: number): GetByKeyRequestBuilder<FormJobDescSection>;
    /**
     * Returns a request builder for querying all `FormJobDescSection` entities.
     * @returns A request builder for creating requests to retrieve all `FormJobDescSection` entities.
     */
    getAll(): GetAllRequestBuilder<FormJobDescSection>;
}
//# sourceMappingURL=FormJobDescSectionRequestBuilder.d.ts.map
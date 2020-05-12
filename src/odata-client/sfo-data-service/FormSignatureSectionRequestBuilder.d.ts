import { BigNumber } from 'bignumber.js';
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder } from '@sap-cloud-sdk/core';
import { FormSignatureSection } from './FormSignatureSection';
/**
 * Request builder class for operations supported on the [[FormSignatureSection]] entity.
 */
export declare class FormSignatureSectionRequestBuilder extends RequestBuilder<FormSignatureSection> {
    /**
     * Returns a request builder for retrieving one `FormSignatureSection` entity based on its keys.
     * @param formContentId Key property. See [[FormSignatureSection.formContentId]].
     * @param formDataId Key property. See [[FormSignatureSection.formDataId]].
     * @param sectionIndex Key property. See [[FormSignatureSection.sectionIndex]].
     * @returns A request builder for creating requests to retrieve one `FormSignatureSection` entity based on its keys.
     */
    getByKey(formContentId: BigNumber, formDataId: BigNumber, sectionIndex: number): GetByKeyRequestBuilder<FormSignatureSection>;
    /**
     * Returns a request builder for querying all `FormSignatureSection` entities.
     * @returns A request builder for creating requests to retrieve all `FormSignatureSection` entities.
     */
    getAll(): GetAllRequestBuilder<FormSignatureSection>;
}
//# sourceMappingURL=FormSignatureSectionRequestBuilder.d.ts.map
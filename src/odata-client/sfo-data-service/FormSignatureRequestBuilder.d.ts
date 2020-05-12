import { BigNumber } from 'bignumber.js';
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder } from '@sap-cloud-sdk/core';
import { FormSignature } from './FormSignature';
/**
 * Request builder class for operations supported on the [[FormSignature]] entity.
 */
export declare class FormSignatureRequestBuilder extends RequestBuilder<FormSignature> {
    /**
     * Returns a request builder for retrieving one `FormSignature` entity based on its keys.
     * @param formContentId Key property. See [[FormSignature.formContentId]].
     * @param formDataId Key property. See [[FormSignature.formDataId]].
     * @param sectionIndex Key property. See [[FormSignature.sectionIndex]].
     * @param stepId Key property. See [[FormSignature.stepId]].
     * @returns A request builder for creating requests to retrieve one `FormSignature` entity based on its keys.
     */
    getByKey(formContentId: BigNumber, formDataId: BigNumber, sectionIndex: number, stepId: string): GetByKeyRequestBuilder<FormSignature>;
    /**
     * Returns a request builder for querying all `FormSignature` entities.
     * @returns A request builder for creating requests to retrieve all `FormSignature` entities.
     */
    getAll(): GetAllRequestBuilder<FormSignature>;
}
//# sourceMappingURL=FormSignatureRequestBuilder.d.ts.map
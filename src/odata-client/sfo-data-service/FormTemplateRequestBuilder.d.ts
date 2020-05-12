import { BigNumber } from 'bignumber.js';
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder } from '@sap-cloud-sdk/core';
import { FormTemplate } from './FormTemplate';
/**
 * Request builder class for operations supported on the [[FormTemplate]] entity.
 */
export declare class FormTemplateRequestBuilder extends RequestBuilder<FormTemplate> {
    /**
     * Returns a request builder for retrieving one `FormTemplate` entity based on its keys.
     * @param formTemplateId Key property. See [[FormTemplate.formTemplateId]].
     * @returns A request builder for creating requests to retrieve one `FormTemplate` entity based on its keys.
     */
    getByKey(formTemplateId: BigNumber): GetByKeyRequestBuilder<FormTemplate>;
    /**
     * Returns a request builder for querying all `FormTemplate` entities.
     * @returns A request builder for creating requests to retrieve all `FormTemplate` entities.
     */
    getAll(): GetAllRequestBuilder<FormTemplate>;
}
//# sourceMappingURL=FormTemplateRequestBuilder.d.ts.map
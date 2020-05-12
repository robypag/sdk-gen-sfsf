import { BigNumber } from 'bignumber.js';
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder } from '@sap-cloud-sdk/core';
import { FormUserInformationSection } from './FormUserInformationSection';
/**
 * Request builder class for operations supported on the [[FormUserInformationSection]] entity.
 */
export declare class FormUserInformationSectionRequestBuilder extends RequestBuilder<FormUserInformationSection> {
    /**
     * Returns a request builder for retrieving one `FormUserInformationSection` entity based on its keys.
     * @param formContentId Key property. See [[FormUserInformationSection.formContentId]].
     * @param formDataId Key property. See [[FormUserInformationSection.formDataId]].
     * @returns A request builder for creating requests to retrieve one `FormUserInformationSection` entity based on its keys.
     */
    getByKey(formContentId: BigNumber, formDataId: BigNumber): GetByKeyRequestBuilder<FormUserInformationSection>;
    /**
     * Returns a request builder for querying all `FormUserInformationSection` entities.
     * @returns A request builder for creating requests to retrieve all `FormUserInformationSection` entities.
     */
    getAll(): GetAllRequestBuilder<FormUserInformationSection>;
}
//# sourceMappingURL=FormUserInformationSectionRequestBuilder.d.ts.map
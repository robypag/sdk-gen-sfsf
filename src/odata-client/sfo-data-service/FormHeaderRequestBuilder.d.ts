import { BigNumber } from 'bignumber.js';
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder } from '@sap-cloud-sdk/core';
import { FormHeader } from './FormHeader';
/**
 * Request builder class for operations supported on the [[FormHeader]] entity.
 */
export declare class FormHeaderRequestBuilder extends RequestBuilder<FormHeader> {
    /**
     * Returns a request builder for retrieving one `FormHeader` entity based on its keys.
     * @param formDataId Key property. See [[FormHeader.formDataId]].
     * @returns A request builder for creating requests to retrieve one `FormHeader` entity based on its keys.
     */
    getByKey(formDataId: BigNumber): GetByKeyRequestBuilder<FormHeader>;
    /**
     * Returns a request builder for querying all `FormHeader` entities.
     * @returns A request builder for creating requests to retrieve all `FormHeader` entities.
     */
    getAll(): GetAllRequestBuilder<FormHeader>;
}
//# sourceMappingURL=FormHeaderRequestBuilder.d.ts.map
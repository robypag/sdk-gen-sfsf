import { BigNumber } from 'bignumber.js';
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder } from '@sap-cloud-sdk/core';
import { Form360ReviewContentDetail } from './Form360ReviewContentDetail';
/**
 * Request builder class for operations supported on the [[Form360ReviewContentDetail]] entity.
 */
export declare class Form360ReviewContentDetailRequestBuilder extends RequestBuilder<Form360ReviewContentDetail> {
    /**
     * Returns a request builder for retrieving one `Form360ReviewContentDetail` entity based on its keys.
     * @param formContentId Key property. See [[Form360ReviewContentDetail.formContentId]].
     * @param formDataId Key property. See [[Form360ReviewContentDetail.formDataId]].
     * @returns A request builder for creating requests to retrieve one `Form360ReviewContentDetail` entity based on its keys.
     */
    getByKey(formContentId: BigNumber, formDataId: BigNumber): GetByKeyRequestBuilder<Form360ReviewContentDetail>;
    /**
     * Returns a request builder for querying all `Form360ReviewContentDetail` entities.
     * @returns A request builder for creating requests to retrieve all `Form360ReviewContentDetail` entities.
     */
    getAll(): GetAllRequestBuilder<Form360ReviewContentDetail>;
}
//# sourceMappingURL=Form360ReviewContentDetailRequestBuilder.d.ts.map
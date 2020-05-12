import { BigNumber } from 'bignumber.js';
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder } from '@sap-cloud-sdk/core';
import { FormCustomElementListValue } from './FormCustomElementListValue';
/**
 * Request builder class for operations supported on the [[FormCustomElementListValue]] entity.
 */
export declare class FormCustomElementListValueRequestBuilder extends RequestBuilder<FormCustomElementListValue> {
    /**
     * Returns a request builder for retrieving one `FormCustomElementListValue` entity based on its keys.
     * @param elementKey Key property. See [[FormCustomElementListValue.elementKey]].
     * @param formContentId Key property. See [[FormCustomElementListValue.formContentId]].
     * @param formDataId Key property. See [[FormCustomElementListValue.formDataId]].
     * @param itemId Key property. See [[FormCustomElementListValue.itemId]].
     * @param name Key property. See [[FormCustomElementListValue.name]].
     * @param sectionIndex Key property. See [[FormCustomElementListValue.sectionIndex]].
     * @returns A request builder for creating requests to retrieve one `FormCustomElementListValue` entity based on its keys.
     */
    getByKey(elementKey: string, formContentId: BigNumber, formDataId: BigNumber, itemId: BigNumber, name: string, sectionIndex: number): GetByKeyRequestBuilder<FormCustomElementListValue>;
    /**
     * Returns a request builder for querying all `FormCustomElementListValue` entities.
     * @returns A request builder for creating requests to retrieve all `FormCustomElementListValue` entities.
     */
    getAll(): GetAllRequestBuilder<FormCustomElementListValue>;
}
//# sourceMappingURL=FormCustomElementListValueRequestBuilder.d.ts.map
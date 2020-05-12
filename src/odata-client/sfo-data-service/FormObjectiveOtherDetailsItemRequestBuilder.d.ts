import { BigNumber } from 'bignumber.js';
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder } from '@sap-cloud-sdk/core';
import { FormObjectiveOtherDetailsItem } from './FormObjectiveOtherDetailsItem';
/**
 * Request builder class for operations supported on the [[FormObjectiveOtherDetailsItem]] entity.
 */
export declare class FormObjectiveOtherDetailsItemRequestBuilder extends RequestBuilder<FormObjectiveOtherDetailsItem> {
    /**
     * Returns a request builder for retrieving one `FormObjectiveOtherDetailsItem` entity based on its keys.
     * @param formContentId Key property. See [[FormObjectiveOtherDetailsItem.formContentId]].
     * @param formDataId Key property. See [[FormObjectiveOtherDetailsItem.formDataId]].
     * @param itemId Key property. See [[FormObjectiveOtherDetailsItem.itemId]].
     * @param sectionIndex Key property. See [[FormObjectiveOtherDetailsItem.sectionIndex]].
     * @param type Key property. See [[FormObjectiveOtherDetailsItem.type]].
     * @returns A request builder for creating requests to retrieve one `FormObjectiveOtherDetailsItem` entity based on its keys.
     */
    getByKey(formContentId: BigNumber, formDataId: BigNumber, itemId: BigNumber, sectionIndex: number, type: number): GetByKeyRequestBuilder<FormObjectiveOtherDetailsItem>;
    /**
     * Returns a request builder for querying all `FormObjectiveOtherDetailsItem` entities.
     * @returns A request builder for creating requests to retrieve all `FormObjectiveOtherDetailsItem` entities.
     */
    getAll(): GetAllRequestBuilder<FormObjectiveOtherDetailsItem>;
}
//# sourceMappingURL=FormObjectiveOtherDetailsItemRequestBuilder.d.ts.map
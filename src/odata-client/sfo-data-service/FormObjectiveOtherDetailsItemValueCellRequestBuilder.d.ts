import { BigNumber } from 'bignumber.js';
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder } from '@sap-cloud-sdk/core';
import { FormObjectiveOtherDetailsItemValueCell } from './FormObjectiveOtherDetailsItemValueCell';
/**
 * Request builder class for operations supported on the [[FormObjectiveOtherDetailsItemValueCell]] entity.
 */
export declare class FormObjectiveOtherDetailsItemValueCellRequestBuilder extends RequestBuilder<FormObjectiveOtherDetailsItemValueCell> {
    /**
     * Returns a request builder for retrieving one `FormObjectiveOtherDetailsItemValueCell` entity based on its keys.
     * @param formContentId Key property. See [[FormObjectiveOtherDetailsItemValueCell.formContentId]].
     * @param formDataId Key property. See [[FormObjectiveOtherDetailsItemValueCell.formDataId]].
     * @param itemId Key property. See [[FormObjectiveOtherDetailsItemValueCell.itemId]].
     * @param sectionIndex Key property. See [[FormObjectiveOtherDetailsItemValueCell.sectionIndex]].
     * @param type Key property. See [[FormObjectiveOtherDetailsItemValueCell.type]].
     * @returns A request builder for creating requests to retrieve one `FormObjectiveOtherDetailsItemValueCell` entity based on its keys.
     */
    getByKey(formContentId: BigNumber, formDataId: BigNumber, itemId: BigNumber, sectionIndex: number, type: number): GetByKeyRequestBuilder<FormObjectiveOtherDetailsItemValueCell>;
    /**
     * Returns a request builder for querying all `FormObjectiveOtherDetailsItemValueCell` entities.
     * @returns A request builder for creating requests to retrieve all `FormObjectiveOtherDetailsItemValueCell` entities.
     */
    getAll(): GetAllRequestBuilder<FormObjectiveOtherDetailsItemValueCell>;
}
//# sourceMappingURL=FormObjectiveOtherDetailsItemValueCellRequestBuilder.d.ts.map
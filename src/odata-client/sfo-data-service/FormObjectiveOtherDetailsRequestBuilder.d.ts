import { BigNumber } from 'bignumber.js';
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder } from '@sap-cloud-sdk/core';
import { FormObjectiveOtherDetails } from './FormObjectiveOtherDetails';
/**
 * Request builder class for operations supported on the [[FormObjectiveOtherDetails]] entity.
 */
export declare class FormObjectiveOtherDetailsRequestBuilder extends RequestBuilder<FormObjectiveOtherDetails> {
    /**
     * Returns a request builder for retrieving one `FormObjectiveOtherDetails` entity based on its keys.
     * @param formContentId Key property. See [[FormObjectiveOtherDetails.formContentId]].
     * @param formDataId Key property. See [[FormObjectiveOtherDetails.formDataId]].
     * @param itemId Key property. See [[FormObjectiveOtherDetails.itemId]].
     * @param sectionIndex Key property. See [[FormObjectiveOtherDetails.sectionIndex]].
     * @returns A request builder for creating requests to retrieve one `FormObjectiveOtherDetails` entity based on its keys.
     */
    getByKey(formContentId: BigNumber, formDataId: BigNumber, itemId: BigNumber, sectionIndex: number): GetByKeyRequestBuilder<FormObjectiveOtherDetails>;
    /**
     * Returns a request builder for querying all `FormObjectiveOtherDetails` entities.
     * @returns A request builder for creating requests to retrieve all `FormObjectiveOtherDetails` entities.
     */
    getAll(): GetAllRequestBuilder<FormObjectiveOtherDetails>;
}
//# sourceMappingURL=FormObjectiveOtherDetailsRequestBuilder.d.ts.map
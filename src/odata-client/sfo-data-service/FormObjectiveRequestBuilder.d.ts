import { BigNumber } from 'bignumber.js';
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, DeleteRequestBuilder } from '@sap-cloud-sdk/core';
import { FormObjective } from './FormObjective';
/**
 * Request builder class for operations supported on the [[FormObjective]] entity.
 */
export declare class FormObjectiveRequestBuilder extends RequestBuilder<FormObjective> {
    /**
     * Returns a request builder for retrieving one `FormObjective` entity based on its keys.
     * @param formContentId Key property. See [[FormObjective.formContentId]].
     * @param formDataId Key property. See [[FormObjective.formDataId]].
     * @param itemId Key property. See [[FormObjective.itemId]].
     * @param sectionIndex Key property. See [[FormObjective.sectionIndex]].
     * @returns A request builder for creating requests to retrieve one `FormObjective` entity based on its keys.
     */
    getByKey(formContentId: BigNumber, formDataId: BigNumber, itemId: BigNumber, sectionIndex: number): GetByKeyRequestBuilder<FormObjective>;
    /**
     * Returns a request builder for querying all `FormObjective` entities.
     * @returns A request builder for creating requests to retrieve all `FormObjective` entities.
     */
    getAll(): GetAllRequestBuilder<FormObjective>;
    /**
     * Returns a request builder for deleting an entity of type `FormObjective`.
     * @param formContentId Key property. See [[FormObjective.formContentId]].
     * @param formDataId Key property. See [[FormObjective.formDataId]].
     * @param itemId Key property. See [[FormObjective.itemId]].
     * @param sectionIndex Key property. See [[FormObjective.sectionIndex]].
     * @returns A request builder for creating requests that delete an entity of type `FormObjective`.
     */
    delete(formContentId: BigNumber, formDataId: BigNumber, itemId: BigNumber, sectionIndex: number): DeleteRequestBuilder<FormObjective>;
    /**
     * Returns a request builder for deleting an entity of type `FormObjective`.
     * @param entity Pass the entity to be deleted.
     * @returns A request builder for creating requests that delete an entity of type `FormObjective` by taking the entity as a parameter.
     */
    delete(entity: FormObjective): DeleteRequestBuilder<FormObjective>;
}
//# sourceMappingURL=FormObjectiveRequestBuilder.d.ts.map
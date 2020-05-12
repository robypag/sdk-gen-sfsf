import { BigNumber } from 'bignumber.js';
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder } from '@sap-cloud-sdk/core';
import { FormCompetencyBehavior } from './FormCompetencyBehavior';
/**
 * Request builder class for operations supported on the [[FormCompetencyBehavior]] entity.
 */
export declare class FormCompetencyBehaviorRequestBuilder extends RequestBuilder<FormCompetencyBehavior> {
    /**
     * Returns a request builder for retrieving one `FormCompetencyBehavior` entity based on its keys.
     * @param behaviorId Key property. See [[FormCompetencyBehavior.behaviorId]].
     * @param formContentId Key property. See [[FormCompetencyBehavior.formContentId]].
     * @param formDataId Key property. See [[FormCompetencyBehavior.formDataId]].
     * @param itemId Key property. See [[FormCompetencyBehavior.itemId]].
     * @param sectionIndex Key property. See [[FormCompetencyBehavior.sectionIndex]].
     * @returns A request builder for creating requests to retrieve one `FormCompetencyBehavior` entity based on its keys.
     */
    getByKey(behaviorId: BigNumber, formContentId: BigNumber, formDataId: BigNumber, itemId: BigNumber, sectionIndex: number): GetByKeyRequestBuilder<FormCompetencyBehavior>;
    /**
     * Returns a request builder for querying all `FormCompetencyBehavior` entities.
     * @returns A request builder for creating requests to retrieve all `FormCompetencyBehavior` entities.
     */
    getAll(): GetAllRequestBuilder<FormCompetencyBehavior>;
    /**
     * Returns a request builder for creating a `FormCompetencyBehavior` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `FormCompetencyBehavior`.
     */
    create(entity: FormCompetencyBehavior): CreateRequestBuilder<FormCompetencyBehavior>;
    /**
     * Returns a request builder for updating an entity of type `FormCompetencyBehavior`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `FormCompetencyBehavior`.
     */
    update(entity: FormCompetencyBehavior): UpdateRequestBuilder<FormCompetencyBehavior>;
    /**
     * Returns a request builder for deleting an entity of type `FormCompetencyBehavior`.
     * @param behaviorId Key property. See [[FormCompetencyBehavior.behaviorId]].
     * @param formContentId Key property. See [[FormCompetencyBehavior.formContentId]].
     * @param formDataId Key property. See [[FormCompetencyBehavior.formDataId]].
     * @param itemId Key property. See [[FormCompetencyBehavior.itemId]].
     * @param sectionIndex Key property. See [[FormCompetencyBehavior.sectionIndex]].
     * @returns A request builder for creating requests that delete an entity of type `FormCompetencyBehavior`.
     */
    delete(behaviorId: BigNumber, formContentId: BigNumber, formDataId: BigNumber, itemId: BigNumber, sectionIndex: number): DeleteRequestBuilder<FormCompetencyBehavior>;
    /**
     * Returns a request builder for deleting an entity of type `FormCompetencyBehavior`.
     * @param entity Pass the entity to be deleted.
     * @returns A request builder for creating requests that delete an entity of type `FormCompetencyBehavior` by taking the entity as a parameter.
     */
    delete(entity: FormCompetencyBehavior): DeleteRequestBuilder<FormCompetencyBehavior>;
}
//# sourceMappingURL=FormCompetencyBehaviorRequestBuilder.d.ts.map
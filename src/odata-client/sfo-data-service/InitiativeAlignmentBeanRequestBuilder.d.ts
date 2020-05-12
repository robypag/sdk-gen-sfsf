import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder } from '@sap-cloud-sdk/core';
import { InitiativeAlignmentBean } from './InitiativeAlignmentBean';
/**
 * Request builder class for operations supported on the [[InitiativeAlignmentBean]] entity.
 */
export declare class InitiativeAlignmentBeanRequestBuilder extends RequestBuilder<InitiativeAlignmentBean> {
    /**
     * Returns a request builder for retrieving one `InitiativeAlignmentBean` entity based on its keys.
     * @param externalCode Key property. See [[InitiativeAlignmentBean.externalCode]].
     * @returns A request builder for creating requests to retrieve one `InitiativeAlignmentBean` entity based on its keys.
     */
    getByKey(externalCode: string): GetByKeyRequestBuilder<InitiativeAlignmentBean>;
    /**
     * Returns a request builder for querying all `InitiativeAlignmentBean` entities.
     * @returns A request builder for creating requests to retrieve all `InitiativeAlignmentBean` entities.
     */
    getAll(): GetAllRequestBuilder<InitiativeAlignmentBean>;
    /**
     * Returns a request builder for creating a `InitiativeAlignmentBean` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `InitiativeAlignmentBean`.
     */
    create(entity: InitiativeAlignmentBean): CreateRequestBuilder<InitiativeAlignmentBean>;
    /**
     * Returns a request builder for updating an entity of type `InitiativeAlignmentBean`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `InitiativeAlignmentBean`.
     */
    update(entity: InitiativeAlignmentBean): UpdateRequestBuilder<InitiativeAlignmentBean>;
    /**
     * Returns a request builder for deleting an entity of type `InitiativeAlignmentBean`.
     * @param externalCode Key property. See [[InitiativeAlignmentBean.externalCode]].
     * @returns A request builder for creating requests that delete an entity of type `InitiativeAlignmentBean`.
     */
    delete(externalCode: string): DeleteRequestBuilder<InitiativeAlignmentBean>;
    /**
     * Returns a request builder for deleting an entity of type `InitiativeAlignmentBean`.
     * @param entity Pass the entity to be deleted.
     * @returns A request builder for creating requests that delete an entity of type `InitiativeAlignmentBean` by taking the entity as a parameter.
     */
    delete(entity: InitiativeAlignmentBean): DeleteRequestBuilder<InitiativeAlignmentBean>;
}
//# sourceMappingURL=InitiativeAlignmentBeanRequestBuilder.d.ts.map
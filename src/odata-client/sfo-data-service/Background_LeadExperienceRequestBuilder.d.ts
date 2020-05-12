import { BigNumber } from 'bignumber.js';
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder } from '@sap-cloud-sdk/core';
import { Background_LeadExperience } from './Background_LeadExperience';
/**
 * Request builder class for operations supported on the [[Background_LeadExperience]] entity.
 */
export declare class Background_LeadExperienceRequestBuilder extends RequestBuilder<Background_LeadExperience> {
    /**
     * Returns a request builder for retrieving one `Background_LeadExperience` entity based on its keys.
     * @param backgroundElementId Key property. See [[Background_LeadExperience.backgroundElementId]].
     * @param userId Key property. See [[Background_LeadExperience.userId]].
     * @returns A request builder for creating requests to retrieve one `Background_LeadExperience` entity based on its keys.
     */
    getByKey(backgroundElementId: BigNumber, userId: string): GetByKeyRequestBuilder<Background_LeadExperience>;
    /**
     * Returns a request builder for querying all `Background_LeadExperience` entities.
     * @returns A request builder for creating requests to retrieve all `Background_LeadExperience` entities.
     */
    getAll(): GetAllRequestBuilder<Background_LeadExperience>;
    /**
     * Returns a request builder for creating a `Background_LeadExperience` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `Background_LeadExperience`.
     */
    create(entity: Background_LeadExperience): CreateRequestBuilder<Background_LeadExperience>;
    /**
     * Returns a request builder for updating an entity of type `Background_LeadExperience`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `Background_LeadExperience`.
     */
    update(entity: Background_LeadExperience): UpdateRequestBuilder<Background_LeadExperience>;
    /**
     * Returns a request builder for deleting an entity of type `Background_LeadExperience`.
     * @param backgroundElementId Key property. See [[Background_LeadExperience.backgroundElementId]].
     * @param userId Key property. See [[Background_LeadExperience.userId]].
     * @returns A request builder for creating requests that delete an entity of type `Background_LeadExperience`.
     */
    delete(backgroundElementId: BigNumber, userId: string): DeleteRequestBuilder<Background_LeadExperience>;
    /**
     * Returns a request builder for deleting an entity of type `Background_LeadExperience`.
     * @param entity Pass the entity to be deleted.
     * @returns A request builder for creating requests that delete an entity of type `Background_LeadExperience` by taking the entity as a parameter.
     */
    delete(entity: Background_LeadExperience): DeleteRequestBuilder<Background_LeadExperience>;
}
//# sourceMappingURL=Background_LeadExperienceRequestBuilder.d.ts.map
import { BigNumber } from 'bignumber.js';
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder } from '@sap-cloud-sdk/core';
import { Background_InsideWorkExperience } from './Background_InsideWorkExperience';
/**
 * Request builder class for operations supported on the [[Background_InsideWorkExperience]] entity.
 */
export declare class Background_InsideWorkExperienceRequestBuilder extends RequestBuilder<Background_InsideWorkExperience> {
    /**
     * Returns a request builder for retrieving one `Background_InsideWorkExperience` entity based on its keys.
     * @param backgroundElementId Key property. See [[Background_InsideWorkExperience.backgroundElementId]].
     * @param userId Key property. See [[Background_InsideWorkExperience.userId]].
     * @returns A request builder for creating requests to retrieve one `Background_InsideWorkExperience` entity based on its keys.
     */
    getByKey(backgroundElementId: BigNumber, userId: string): GetByKeyRequestBuilder<Background_InsideWorkExperience>;
    /**
     * Returns a request builder for querying all `Background_InsideWorkExperience` entities.
     * @returns A request builder for creating requests to retrieve all `Background_InsideWorkExperience` entities.
     */
    getAll(): GetAllRequestBuilder<Background_InsideWorkExperience>;
    /**
     * Returns a request builder for creating a `Background_InsideWorkExperience` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `Background_InsideWorkExperience`.
     */
    create(entity: Background_InsideWorkExperience): CreateRequestBuilder<Background_InsideWorkExperience>;
    /**
     * Returns a request builder for updating an entity of type `Background_InsideWorkExperience`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `Background_InsideWorkExperience`.
     */
    update(entity: Background_InsideWorkExperience): UpdateRequestBuilder<Background_InsideWorkExperience>;
    /**
     * Returns a request builder for deleting an entity of type `Background_InsideWorkExperience`.
     * @param backgroundElementId Key property. See [[Background_InsideWorkExperience.backgroundElementId]].
     * @param userId Key property. See [[Background_InsideWorkExperience.userId]].
     * @returns A request builder for creating requests that delete an entity of type `Background_InsideWorkExperience`.
     */
    delete(backgroundElementId: BigNumber, userId: string): DeleteRequestBuilder<Background_InsideWorkExperience>;
    /**
     * Returns a request builder for deleting an entity of type `Background_InsideWorkExperience`.
     * @param entity Pass the entity to be deleted.
     * @returns A request builder for creating requests that delete an entity of type `Background_InsideWorkExperience` by taking the entity as a parameter.
     */
    delete(entity: Background_InsideWorkExperience): DeleteRequestBuilder<Background_InsideWorkExperience>;
}
//# sourceMappingURL=Background_InsideWorkExperienceRequestBuilder.d.ts.map
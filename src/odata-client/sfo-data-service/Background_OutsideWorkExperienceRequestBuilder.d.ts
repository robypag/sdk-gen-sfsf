import { BigNumber } from 'bignumber.js';
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder } from '@sap-cloud-sdk/core';
import { Background_OutsideWorkExperience } from './Background_OutsideWorkExperience';
/**
 * Request builder class for operations supported on the [[Background_OutsideWorkExperience]] entity.
 */
export declare class Background_OutsideWorkExperienceRequestBuilder extends RequestBuilder<Background_OutsideWorkExperience> {
    /**
     * Returns a request builder for retrieving one `Background_OutsideWorkExperience` entity based on its keys.
     * @param backgroundElementId Key property. See [[Background_OutsideWorkExperience.backgroundElementId]].
     * @param userId Key property. See [[Background_OutsideWorkExperience.userId]].
     * @returns A request builder for creating requests to retrieve one `Background_OutsideWorkExperience` entity based on its keys.
     */
    getByKey(backgroundElementId: BigNumber, userId: string): GetByKeyRequestBuilder<Background_OutsideWorkExperience>;
    /**
     * Returns a request builder for querying all `Background_OutsideWorkExperience` entities.
     * @returns A request builder for creating requests to retrieve all `Background_OutsideWorkExperience` entities.
     */
    getAll(): GetAllRequestBuilder<Background_OutsideWorkExperience>;
    /**
     * Returns a request builder for creating a `Background_OutsideWorkExperience` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `Background_OutsideWorkExperience`.
     */
    create(entity: Background_OutsideWorkExperience): CreateRequestBuilder<Background_OutsideWorkExperience>;
    /**
     * Returns a request builder for updating an entity of type `Background_OutsideWorkExperience`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `Background_OutsideWorkExperience`.
     */
    update(entity: Background_OutsideWorkExperience): UpdateRequestBuilder<Background_OutsideWorkExperience>;
    /**
     * Returns a request builder for deleting an entity of type `Background_OutsideWorkExperience`.
     * @param backgroundElementId Key property. See [[Background_OutsideWorkExperience.backgroundElementId]].
     * @param userId Key property. See [[Background_OutsideWorkExperience.userId]].
     * @returns A request builder for creating requests that delete an entity of type `Background_OutsideWorkExperience`.
     */
    delete(backgroundElementId: BigNumber, userId: string): DeleteRequestBuilder<Background_OutsideWorkExperience>;
    /**
     * Returns a request builder for deleting an entity of type `Background_OutsideWorkExperience`.
     * @param entity Pass the entity to be deleted.
     * @returns A request builder for creating requests that delete an entity of type `Background_OutsideWorkExperience` by taking the entity as a parameter.
     */
    delete(entity: Background_OutsideWorkExperience): DeleteRequestBuilder<Background_OutsideWorkExperience>;
}
//# sourceMappingURL=Background_OutsideWorkExperienceRequestBuilder.d.ts.map
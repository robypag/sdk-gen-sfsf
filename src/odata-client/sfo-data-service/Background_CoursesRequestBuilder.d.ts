import { BigNumber } from 'bignumber.js';
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder } from '@sap-cloud-sdk/core';
import { Background_Courses } from './Background_Courses';
/**
 * Request builder class for operations supported on the [[Background_Courses]] entity.
 */
export declare class Background_CoursesRequestBuilder extends RequestBuilder<Background_Courses> {
    /**
     * Returns a request builder for retrieving one `Background_Courses` entity based on its keys.
     * @param backgroundElementId Key property. See [[Background_Courses.backgroundElementId]].
     * @param userId Key property. See [[Background_Courses.userId]].
     * @returns A request builder for creating requests to retrieve one `Background_Courses` entity based on its keys.
     */
    getByKey(backgroundElementId: BigNumber, userId: string): GetByKeyRequestBuilder<Background_Courses>;
    /**
     * Returns a request builder for querying all `Background_Courses` entities.
     * @returns A request builder for creating requests to retrieve all `Background_Courses` entities.
     */
    getAll(): GetAllRequestBuilder<Background_Courses>;
    /**
     * Returns a request builder for creating a `Background_Courses` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `Background_Courses`.
     */
    create(entity: Background_Courses): CreateRequestBuilder<Background_Courses>;
    /**
     * Returns a request builder for updating an entity of type `Background_Courses`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `Background_Courses`.
     */
    update(entity: Background_Courses): UpdateRequestBuilder<Background_Courses>;
    /**
     * Returns a request builder for deleting an entity of type `Background_Courses`.
     * @param backgroundElementId Key property. See [[Background_Courses.backgroundElementId]].
     * @param userId Key property. See [[Background_Courses.userId]].
     * @returns A request builder for creating requests that delete an entity of type `Background_Courses`.
     */
    delete(backgroundElementId: BigNumber, userId: string): DeleteRequestBuilder<Background_Courses>;
    /**
     * Returns a request builder for deleting an entity of type `Background_Courses`.
     * @param entity Pass the entity to be deleted.
     * @returns A request builder for creating requests that delete an entity of type `Background_Courses` by taking the entity as a parameter.
     */
    delete(entity: Background_Courses): DeleteRequestBuilder<Background_Courses>;
}
//# sourceMappingURL=Background_CoursesRequestBuilder.d.ts.map
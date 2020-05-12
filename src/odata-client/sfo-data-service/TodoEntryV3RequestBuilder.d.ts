import { BigNumber } from 'bignumber.js';
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder } from '@sap-cloud-sdk/core';
import { TodoEntryV3 } from './TodoEntryV3';
/**
 * Request builder class for operations supported on the [[TodoEntryV3]] entity.
 */
export declare class TodoEntryV3RequestBuilder extends RequestBuilder<TodoEntryV3> {
    /**
     * Returns a request builder for retrieving one `TodoEntryV3` entity based on its keys.
     * @param todoEntryId Key property. See [[TodoEntryV3.todoEntryId]].
     * @returns A request builder for creating requests to retrieve one `TodoEntryV3` entity based on its keys.
     */
    getByKey(todoEntryId: BigNumber): GetByKeyRequestBuilder<TodoEntryV3>;
    /**
     * Returns a request builder for querying all `TodoEntryV3` entities.
     * @returns A request builder for creating requests to retrieve all `TodoEntryV3` entities.
     */
    getAll(): GetAllRequestBuilder<TodoEntryV3>;
    /**
     * Returns a request builder for creating a `TodoEntryV3` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `TodoEntryV3`.
     */
    create(entity: TodoEntryV3): CreateRequestBuilder<TodoEntryV3>;
    /**
     * Returns a request builder for updating an entity of type `TodoEntryV3`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `TodoEntryV3`.
     */
    update(entity: TodoEntryV3): UpdateRequestBuilder<TodoEntryV3>;
    /**
     * Returns a request builder for deleting an entity of type `TodoEntryV3`.
     * @param todoEntryId Key property. See [[TodoEntryV3.todoEntryId]].
     * @returns A request builder for creating requests that delete an entity of type `TodoEntryV3`.
     */
    delete(todoEntryId: BigNumber): DeleteRequestBuilder<TodoEntryV3>;
    /**
     * Returns a request builder for deleting an entity of type `TodoEntryV3`.
     * @param entity Pass the entity to be deleted.
     * @returns A request builder for creating requests that delete an entity of type `TodoEntryV3` by taking the entity as a parameter.
     */
    delete(entity: TodoEntryV3): DeleteRequestBuilder<TodoEntryV3>;
}
//# sourceMappingURL=TodoEntryV3RequestBuilder.d.ts.map
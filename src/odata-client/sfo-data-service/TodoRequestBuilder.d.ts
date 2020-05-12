import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder } from '@sap-cloud-sdk/core';
import { Todo } from './Todo';
/**
 * Request builder class for operations supported on the [[Todo]] entity.
 */
export declare class TodoRequestBuilder extends RequestBuilder<Todo> {
    /**
     * Returns a request builder for retrieving one `Todo` entity based on its keys.
     * @param categoryId Key property. See [[Todo.categoryId]].
     * @returns A request builder for creating requests to retrieve one `Todo` entity based on its keys.
     */
    getByKey(categoryId: string): GetByKeyRequestBuilder<Todo>;
    /**
     * Returns a request builder for querying all `Todo` entities.
     * @returns A request builder for creating requests to retrieve all `Todo` entities.
     */
    getAll(): GetAllRequestBuilder<Todo>;
}
//# sourceMappingURL=TodoRequestBuilder.d.ts.map
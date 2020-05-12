import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder } from '@sap-cloud-sdk/core';
import { TodoCategory } from './TodoCategory';
/**
 * Request builder class for operations supported on the [[TodoCategory]] entity.
 */
export declare class TodoCategoryRequestBuilder extends RequestBuilder<TodoCategory> {
    /**
     * Returns a request builder for retrieving one `TodoCategory` entity based on its keys.
     * @param categoryId Key property. See [[TodoCategory.categoryId]].
     * @returns A request builder for creating requests to retrieve one `TodoCategory` entity based on its keys.
     */
    getByKey(categoryId: string): GetByKeyRequestBuilder<TodoCategory>;
    /**
     * Returns a request builder for querying all `TodoCategory` entities.
     * @returns A request builder for creating requests to retrieve all `TodoCategory` entities.
     */
    getAll(): GetAllRequestBuilder<TodoCategory>;
}
//# sourceMappingURL=TodoCategoryRequestBuilder.d.ts.map
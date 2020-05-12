import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder } from '@sap-cloud-sdk/core';
import { TodoAction } from './TodoAction';
/**
 * Request builder class for operations supported on the [[TodoAction]] entity.
 */
export declare class TodoActionRequestBuilder extends RequestBuilder<TodoAction> {
    /**
     * Returns a request builder for retrieving one `TodoAction` entity based on its keys.
     * @param actionId Key property. See [[TodoAction.actionId]].
     * @param categoryId Key property. See [[TodoAction.categoryId]].
     * @returns A request builder for creating requests to retrieve one `TodoAction` entity based on its keys.
     */
    getByKey(actionId: number, categoryId: string): GetByKeyRequestBuilder<TodoAction>;
    /**
     * Returns a request builder for querying all `TodoAction` entities.
     * @returns A request builder for creating requests to retrieve all `TodoAction` entities.
     */
    getAll(): GetAllRequestBuilder<TodoAction>;
}
//# sourceMappingURL=TodoActionRequestBuilder.d.ts.map
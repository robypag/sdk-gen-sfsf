import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder } from '@sap-cloud-sdk/core';
import { MessageDetail } from './MessageDetail';
/**
 * Request builder class for operations supported on the [[MessageDetail]] entity.
 */
export declare class MessageDetailRequestBuilder extends RequestBuilder<MessageDetail> {
    /**
     * Returns a request builder for retrieving one `MessageDetail` entity based on its keys.
     * @param code Key property. See [[MessageDetail.code]].
     * @returns A request builder for creating requests to retrieve one `MessageDetail` entity based on its keys.
     */
    getByKey(code: string): GetByKeyRequestBuilder<MessageDetail>;
    /**
     * Returns a request builder for querying all `MessageDetail` entities.
     * @returns A request builder for creating requests to retrieve all `MessageDetail` entities.
     */
    getAll(): GetAllRequestBuilder<MessageDetail>;
    /**
     * Returns a request builder for creating a `MessageDetail` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `MessageDetail`.
     */
    create(entity: MessageDetail): CreateRequestBuilder<MessageDetail>;
    /**
     * Returns a request builder for updating an entity of type `MessageDetail`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `MessageDetail`.
     */
    update(entity: MessageDetail): UpdateRequestBuilder<MessageDetail>;
    /**
     * Returns a request builder for deleting an entity of type `MessageDetail`.
     * @param code Key property. See [[MessageDetail.code]].
     * @returns A request builder for creating requests that delete an entity of type `MessageDetail`.
     */
    delete(code: string): DeleteRequestBuilder<MessageDetail>;
    /**
     * Returns a request builder for deleting an entity of type `MessageDetail`.
     * @param entity Pass the entity to be deleted.
     * @returns A request builder for creating requests that delete an entity of type `MessageDetail` by taking the entity as a parameter.
     */
    delete(entity: MessageDetail): DeleteRequestBuilder<MessageDetail>;
}
//# sourceMappingURL=MessageDetailRequestBuilder.d.ts.map
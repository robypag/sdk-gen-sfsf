import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder } from '@sap-cloud-sdk/core';
import { AlertMessage } from './AlertMessage';
/**
 * Request builder class for operations supported on the [[AlertMessage]] entity.
 */
export declare class AlertMessageRequestBuilder extends RequestBuilder<AlertMessage> {
    /**
     * Returns a request builder for retrieving one `AlertMessage` entity based on its keys.
     * @param externalCode Key property. See [[AlertMessage.externalCode]].
     * @returns A request builder for creating requests to retrieve one `AlertMessage` entity based on its keys.
     */
    getByKey(externalCode: string): GetByKeyRequestBuilder<AlertMessage>;
    /**
     * Returns a request builder for querying all `AlertMessage` entities.
     * @returns A request builder for creating requests to retrieve all `AlertMessage` entities.
     */
    getAll(): GetAllRequestBuilder<AlertMessage>;
    /**
     * Returns a request builder for creating a `AlertMessage` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `AlertMessage`.
     */
    create(entity: AlertMessage): CreateRequestBuilder<AlertMessage>;
    /**
     * Returns a request builder for updating an entity of type `AlertMessage`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `AlertMessage`.
     */
    update(entity: AlertMessage): UpdateRequestBuilder<AlertMessage>;
    /**
     * Returns a request builder for deleting an entity of type `AlertMessage`.
     * @param externalCode Key property. See [[AlertMessage.externalCode]].
     * @returns A request builder for creating requests that delete an entity of type `AlertMessage`.
     */
    delete(externalCode: string): DeleteRequestBuilder<AlertMessage>;
    /**
     * Returns a request builder for deleting an entity of type `AlertMessage`.
     * @param entity Pass the entity to be deleted.
     * @returns A request builder for creating requests that delete an entity of type `AlertMessage` by taking the entity as a parameter.
     */
    delete(entity: AlertMessage): DeleteRequestBuilder<AlertMessage>;
}
//# sourceMappingURL=AlertMessageRequestBuilder.d.ts.map
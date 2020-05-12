import { Moment } from 'moment';
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder } from '@sap-cloud-sdk/core';
import { SecondaryAssignmentsItem } from './SecondaryAssignmentsItem';
/**
 * Request builder class for operations supported on the [[SecondaryAssignmentsItem]] entity.
 */
export declare class SecondaryAssignmentsItemRequestBuilder extends RequestBuilder<SecondaryAssignmentsItem> {
    /**
     * Returns a request builder for retrieving one `SecondaryAssignmentsItem` entity based on its keys.
     * @param secondaryAssignmentsEffectiveStartDate Key property. See [[SecondaryAssignmentsItem.secondaryAssignmentsEffectiveStartDate]].
     * @param secondaryAssignmentsExternalCode Key property. See [[SecondaryAssignmentsItem.secondaryAssignmentsExternalCode]].
     * @param externalCode Key property. See [[SecondaryAssignmentsItem.externalCode]].
     * @returns A request builder for creating requests to retrieve one `SecondaryAssignmentsItem` entity based on its keys.
     */
    getByKey(secondaryAssignmentsEffectiveStartDate: Moment, secondaryAssignmentsExternalCode: string, externalCode: string): GetByKeyRequestBuilder<SecondaryAssignmentsItem>;
    /**
     * Returns a request builder for querying all `SecondaryAssignmentsItem` entities.
     * @returns A request builder for creating requests to retrieve all `SecondaryAssignmentsItem` entities.
     */
    getAll(): GetAllRequestBuilder<SecondaryAssignmentsItem>;
    /**
     * Returns a request builder for creating a `SecondaryAssignmentsItem` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `SecondaryAssignmentsItem`.
     */
    create(entity: SecondaryAssignmentsItem): CreateRequestBuilder<SecondaryAssignmentsItem>;
    /**
     * Returns a request builder for updating an entity of type `SecondaryAssignmentsItem`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `SecondaryAssignmentsItem`.
     */
    update(entity: SecondaryAssignmentsItem): UpdateRequestBuilder<SecondaryAssignmentsItem>;
    /**
     * Returns a request builder for deleting an entity of type `SecondaryAssignmentsItem`.
     * @param secondaryAssignmentsEffectiveStartDate Key property. See [[SecondaryAssignmentsItem.secondaryAssignmentsEffectiveStartDate]].
     * @param secondaryAssignmentsExternalCode Key property. See [[SecondaryAssignmentsItem.secondaryAssignmentsExternalCode]].
     * @param externalCode Key property. See [[SecondaryAssignmentsItem.externalCode]].
     * @returns A request builder for creating requests that delete an entity of type `SecondaryAssignmentsItem`.
     */
    delete(secondaryAssignmentsEffectiveStartDate: Moment, secondaryAssignmentsExternalCode: string, externalCode: string): DeleteRequestBuilder<SecondaryAssignmentsItem>;
    /**
     * Returns a request builder for deleting an entity of type `SecondaryAssignmentsItem`.
     * @param entity Pass the entity to be deleted.
     * @returns A request builder for creating requests that delete an entity of type `SecondaryAssignmentsItem` by taking the entity as a parameter.
     */
    delete(entity: SecondaryAssignmentsItem): DeleteRequestBuilder<SecondaryAssignmentsItem>;
}
//# sourceMappingURL=SecondaryAssignmentsItemRequestBuilder.d.ts.map
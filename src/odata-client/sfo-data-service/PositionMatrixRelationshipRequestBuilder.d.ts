import { Moment } from 'moment';
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder } from '@sap-cloud-sdk/core';
import { PositionMatrixRelationship } from './PositionMatrixRelationship';
/**
 * Request builder class for operations supported on the [[PositionMatrixRelationship]] entity.
 */
export declare class PositionMatrixRelationshipRequestBuilder extends RequestBuilder<PositionMatrixRelationship> {
    /**
     * Returns a request builder for retrieving one `PositionMatrixRelationship` entity based on its keys.
     * @param positionCode Key property. See [[PositionMatrixRelationship.positionCode]].
     * @param positionEffectiveStartDate Key property. See [[PositionMatrixRelationship.positionEffectiveStartDate]].
     * @param matrixRelationshipType Key property. See [[PositionMatrixRelationship.matrixRelationshipType]].
     * @returns A request builder for creating requests to retrieve one `PositionMatrixRelationship` entity based on its keys.
     */
    getByKey(positionCode: string, positionEffectiveStartDate: Moment, matrixRelationshipType: string): GetByKeyRequestBuilder<PositionMatrixRelationship>;
    /**
     * Returns a request builder for querying all `PositionMatrixRelationship` entities.
     * @returns A request builder for creating requests to retrieve all `PositionMatrixRelationship` entities.
     */
    getAll(): GetAllRequestBuilder<PositionMatrixRelationship>;
    /**
     * Returns a request builder for creating a `PositionMatrixRelationship` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `PositionMatrixRelationship`.
     */
    create(entity: PositionMatrixRelationship): CreateRequestBuilder<PositionMatrixRelationship>;
    /**
     * Returns a request builder for updating an entity of type `PositionMatrixRelationship`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `PositionMatrixRelationship`.
     */
    update(entity: PositionMatrixRelationship): UpdateRequestBuilder<PositionMatrixRelationship>;
    /**
     * Returns a request builder for deleting an entity of type `PositionMatrixRelationship`.
     * @param positionCode Key property. See [[PositionMatrixRelationship.positionCode]].
     * @param positionEffectiveStartDate Key property. See [[PositionMatrixRelationship.positionEffectiveStartDate]].
     * @param matrixRelationshipType Key property. See [[PositionMatrixRelationship.matrixRelationshipType]].
     * @returns A request builder for creating requests that delete an entity of type `PositionMatrixRelationship`.
     */
    delete(positionCode: string, positionEffectiveStartDate: Moment, matrixRelationshipType: string): DeleteRequestBuilder<PositionMatrixRelationship>;
    /**
     * Returns a request builder for deleting an entity of type `PositionMatrixRelationship`.
     * @param entity Pass the entity to be deleted.
     * @returns A request builder for creating requests that delete an entity of type `PositionMatrixRelationship` by taking the entity as a parameter.
     */
    delete(entity: PositionMatrixRelationship): DeleteRequestBuilder<PositionMatrixRelationship>;
}
//# sourceMappingURL=PositionMatrixRelationshipRequestBuilder.d.ts.map
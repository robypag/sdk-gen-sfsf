import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder } from '@sap-cloud-sdk/core';
import { LegalEntityFra } from './LegalEntityFra';
/**
 * Request builder class for operations supported on the [[LegalEntityFra]] entity.
 */
export declare class LegalEntityFraRequestBuilder extends RequestBuilder<LegalEntityFra> {
    /**
     * Returns a request builder for retrieving one `LegalEntityFra` entity based on its keys.
     * @param legalEntityEffectiveStartDate Key property. See [[LegalEntityFra.legalEntityEffectiveStartDate]].
     * @param legalEntityExternalCode Key property. See [[LegalEntityFra.legalEntityExternalCode]].
     * @param externalCode Key property. See [[LegalEntityFra.externalCode]].
     * @returns A request builder for creating requests to retrieve one `LegalEntityFra` entity based on its keys.
     */
    getByKey(legalEntityEffectiveStartDate: Moment, legalEntityExternalCode: string, externalCode: BigNumber): GetByKeyRequestBuilder<LegalEntityFra>;
    /**
     * Returns a request builder for querying all `LegalEntityFra` entities.
     * @returns A request builder for creating requests to retrieve all `LegalEntityFra` entities.
     */
    getAll(): GetAllRequestBuilder<LegalEntityFra>;
    /**
     * Returns a request builder for creating a `LegalEntityFra` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `LegalEntityFra`.
     */
    create(entity: LegalEntityFra): CreateRequestBuilder<LegalEntityFra>;
    /**
     * Returns a request builder for updating an entity of type `LegalEntityFra`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `LegalEntityFra`.
     */
    update(entity: LegalEntityFra): UpdateRequestBuilder<LegalEntityFra>;
    /**
     * Returns a request builder for deleting an entity of type `LegalEntityFra`.
     * @param legalEntityEffectiveStartDate Key property. See [[LegalEntityFra.legalEntityEffectiveStartDate]].
     * @param legalEntityExternalCode Key property. See [[LegalEntityFra.legalEntityExternalCode]].
     * @param externalCode Key property. See [[LegalEntityFra.externalCode]].
     * @returns A request builder for creating requests that delete an entity of type `LegalEntityFra`.
     */
    delete(legalEntityEffectiveStartDate: Moment, legalEntityExternalCode: string, externalCode: BigNumber): DeleteRequestBuilder<LegalEntityFra>;
    /**
     * Returns a request builder for deleting an entity of type `LegalEntityFra`.
     * @param entity Pass the entity to be deleted.
     * @returns A request builder for creating requests that delete an entity of type `LegalEntityFra` by taking the entity as a parameter.
     */
    delete(entity: LegalEntityFra): DeleteRequestBuilder<LegalEntityFra>;
}
//# sourceMappingURL=LegalEntityFraRequestBuilder.d.ts.map
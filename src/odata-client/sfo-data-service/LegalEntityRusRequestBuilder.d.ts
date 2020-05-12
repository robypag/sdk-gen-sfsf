import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder } from '@sap-cloud-sdk/core';
import { LegalEntityRus } from './LegalEntityRus';
/**
 * Request builder class for operations supported on the [[LegalEntityRus]] entity.
 */
export declare class LegalEntityRusRequestBuilder extends RequestBuilder<LegalEntityRus> {
    /**
     * Returns a request builder for retrieving one `LegalEntityRus` entity based on its keys.
     * @param legalEntityEffectiveStartDate Key property. See [[LegalEntityRus.legalEntityEffectiveStartDate]].
     * @param legalEntityExternalCode Key property. See [[LegalEntityRus.legalEntityExternalCode]].
     * @param externalCode Key property. See [[LegalEntityRus.externalCode]].
     * @returns A request builder for creating requests to retrieve one `LegalEntityRus` entity based on its keys.
     */
    getByKey(legalEntityEffectiveStartDate: Moment, legalEntityExternalCode: string, externalCode: BigNumber): GetByKeyRequestBuilder<LegalEntityRus>;
    /**
     * Returns a request builder for querying all `LegalEntityRus` entities.
     * @returns A request builder for creating requests to retrieve all `LegalEntityRus` entities.
     */
    getAll(): GetAllRequestBuilder<LegalEntityRus>;
    /**
     * Returns a request builder for creating a `LegalEntityRus` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `LegalEntityRus`.
     */
    create(entity: LegalEntityRus): CreateRequestBuilder<LegalEntityRus>;
    /**
     * Returns a request builder for updating an entity of type `LegalEntityRus`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `LegalEntityRus`.
     */
    update(entity: LegalEntityRus): UpdateRequestBuilder<LegalEntityRus>;
    /**
     * Returns a request builder for deleting an entity of type `LegalEntityRus`.
     * @param legalEntityEffectiveStartDate Key property. See [[LegalEntityRus.legalEntityEffectiveStartDate]].
     * @param legalEntityExternalCode Key property. See [[LegalEntityRus.legalEntityExternalCode]].
     * @param externalCode Key property. See [[LegalEntityRus.externalCode]].
     * @returns A request builder for creating requests that delete an entity of type `LegalEntityRus`.
     */
    delete(legalEntityEffectiveStartDate: Moment, legalEntityExternalCode: string, externalCode: BigNumber): DeleteRequestBuilder<LegalEntityRus>;
    /**
     * Returns a request builder for deleting an entity of type `LegalEntityRus`.
     * @param entity Pass the entity to be deleted.
     * @returns A request builder for creating requests that delete an entity of type `LegalEntityRus` by taking the entity as a parameter.
     */
    delete(entity: LegalEntityRus): DeleteRequestBuilder<LegalEntityRus>;
}
//# sourceMappingURL=LegalEntityRusRequestBuilder.d.ts.map
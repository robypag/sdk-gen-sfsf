import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder } from '@sap-cloud-sdk/core';
import { LegalEntityDeu } from './LegalEntityDeu';
/**
 * Request builder class for operations supported on the [[LegalEntityDeu]] entity.
 */
export declare class LegalEntityDeuRequestBuilder extends RequestBuilder<LegalEntityDeu> {
    /**
     * Returns a request builder for retrieving one `LegalEntityDeu` entity based on its keys.
     * @param legalEntityEffectiveStartDate Key property. See [[LegalEntityDeu.legalEntityEffectiveStartDate]].
     * @param legalEntityExternalCode Key property. See [[LegalEntityDeu.legalEntityExternalCode]].
     * @param externalCode Key property. See [[LegalEntityDeu.externalCode]].
     * @returns A request builder for creating requests to retrieve one `LegalEntityDeu` entity based on its keys.
     */
    getByKey(legalEntityEffectiveStartDate: Moment, legalEntityExternalCode: string, externalCode: BigNumber): GetByKeyRequestBuilder<LegalEntityDeu>;
    /**
     * Returns a request builder for querying all `LegalEntityDeu` entities.
     * @returns A request builder for creating requests to retrieve all `LegalEntityDeu` entities.
     */
    getAll(): GetAllRequestBuilder<LegalEntityDeu>;
    /**
     * Returns a request builder for creating a `LegalEntityDeu` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `LegalEntityDeu`.
     */
    create(entity: LegalEntityDeu): CreateRequestBuilder<LegalEntityDeu>;
    /**
     * Returns a request builder for updating an entity of type `LegalEntityDeu`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `LegalEntityDeu`.
     */
    update(entity: LegalEntityDeu): UpdateRequestBuilder<LegalEntityDeu>;
    /**
     * Returns a request builder for deleting an entity of type `LegalEntityDeu`.
     * @param legalEntityEffectiveStartDate Key property. See [[LegalEntityDeu.legalEntityEffectiveStartDate]].
     * @param legalEntityExternalCode Key property. See [[LegalEntityDeu.legalEntityExternalCode]].
     * @param externalCode Key property. See [[LegalEntityDeu.externalCode]].
     * @returns A request builder for creating requests that delete an entity of type `LegalEntityDeu`.
     */
    delete(legalEntityEffectiveStartDate: Moment, legalEntityExternalCode: string, externalCode: BigNumber): DeleteRequestBuilder<LegalEntityDeu>;
    /**
     * Returns a request builder for deleting an entity of type `LegalEntityDeu`.
     * @param entity Pass the entity to be deleted.
     * @returns A request builder for creating requests that delete an entity of type `LegalEntityDeu` by taking the entity as a parameter.
     */
    delete(entity: LegalEntityDeu): DeleteRequestBuilder<LegalEntityDeu>;
}
//# sourceMappingURL=LegalEntityDeuRequestBuilder.d.ts.map
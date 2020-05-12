import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder } from '@sap-cloud-sdk/core';
import { LegalEntityEsp } from './LegalEntityEsp';
/**
 * Request builder class for operations supported on the [[LegalEntityEsp]] entity.
 */
export declare class LegalEntityEspRequestBuilder extends RequestBuilder<LegalEntityEsp> {
    /**
     * Returns a request builder for retrieving one `LegalEntityEsp` entity based on its keys.
     * @param legalEntityEffectiveStartDate Key property. See [[LegalEntityEsp.legalEntityEffectiveStartDate]].
     * @param legalEntityExternalCode Key property. See [[LegalEntityEsp.legalEntityExternalCode]].
     * @param externalCode Key property. See [[LegalEntityEsp.externalCode]].
     * @returns A request builder for creating requests to retrieve one `LegalEntityEsp` entity based on its keys.
     */
    getByKey(legalEntityEffectiveStartDate: Moment, legalEntityExternalCode: string, externalCode: BigNumber): GetByKeyRequestBuilder<LegalEntityEsp>;
    /**
     * Returns a request builder for querying all `LegalEntityEsp` entities.
     * @returns A request builder for creating requests to retrieve all `LegalEntityEsp` entities.
     */
    getAll(): GetAllRequestBuilder<LegalEntityEsp>;
    /**
     * Returns a request builder for creating a `LegalEntityEsp` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `LegalEntityEsp`.
     */
    create(entity: LegalEntityEsp): CreateRequestBuilder<LegalEntityEsp>;
    /**
     * Returns a request builder for updating an entity of type `LegalEntityEsp`.
     * @param entity The entity to be updated
     * @returns A request builder for creating requests that update an entity of type `LegalEntityEsp`.
     */
    update(entity: LegalEntityEsp): UpdateRequestBuilder<LegalEntityEsp>;
    /**
     * Returns a request builder for deleting an entity of type `LegalEntityEsp`.
     * @param legalEntityEffectiveStartDate Key property. See [[LegalEntityEsp.legalEntityEffectiveStartDate]].
     * @param legalEntityExternalCode Key property. See [[LegalEntityEsp.legalEntityExternalCode]].
     * @param externalCode Key property. See [[LegalEntityEsp.externalCode]].
     * @returns A request builder for creating requests that delete an entity of type `LegalEntityEsp`.
     */
    delete(legalEntityEffectiveStartDate: Moment, legalEntityExternalCode: string, externalCode: BigNumber): DeleteRequestBuilder<LegalEntityEsp>;
    /**
     * Returns a request builder for deleting an entity of type `LegalEntityEsp`.
     * @param entity Pass the entity to be deleted.
     * @returns A request builder for creating requests that delete an entity of type `LegalEntityEsp` by taking the entity as a parameter.
     */
    delete(entity: LegalEntityEsp): DeleteRequestBuilder<LegalEntityEsp>;
}
//# sourceMappingURL=LegalEntityEspRequestBuilder.d.ts.map
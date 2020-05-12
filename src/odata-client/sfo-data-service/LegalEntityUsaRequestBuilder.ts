/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder } from '@sap-cloud-sdk/core';
import { LegalEntityUsa } from './LegalEntityUsa';

/**
 * Request builder class for operations supported on the [[LegalEntityUsa]] entity.
 */
export class LegalEntityUsaRequestBuilder extends RequestBuilder<LegalEntityUsa> {
  /**
   * Returns a request builder for retrieving one `LegalEntityUsa` entity based on its keys.
   * @param legalEntityEffectiveStartDate Key property. See [[LegalEntityUsa.legalEntityEffectiveStartDate]].
   * @param legalEntityExternalCode Key property. See [[LegalEntityUsa.legalEntityExternalCode]].
   * @param externalCode Key property. See [[LegalEntityUsa.externalCode]].
   * @returns A request builder for creating requests to retrieve one `LegalEntityUsa` entity based on its keys.
   */
  getByKey(legalEntityEffectiveStartDate: Moment, legalEntityExternalCode: string, externalCode: BigNumber): GetByKeyRequestBuilder<LegalEntityUsa> {
    return new GetByKeyRequestBuilder(LegalEntityUsa, {
      LegalEntity_effectiveStartDate: legalEntityEffectiveStartDate,
      LegalEntity_externalCode: legalEntityExternalCode,
      externalCode: externalCode
    });
  }

  /**
   * Returns a request builder for querying all `LegalEntityUsa` entities.
   * @returns A request builder for creating requests to retrieve all `LegalEntityUsa` entities.
   */
  getAll(): GetAllRequestBuilder<LegalEntityUsa> {
    return new GetAllRequestBuilder(LegalEntityUsa);
  }

  /**
   * Returns a request builder for creating a `LegalEntityUsa` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `LegalEntityUsa`.
   */
  create(entity: LegalEntityUsa): CreateRequestBuilder<LegalEntityUsa> {
    return new CreateRequestBuilder(LegalEntityUsa, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `LegalEntityUsa`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `LegalEntityUsa`.
   */
  update(entity: LegalEntityUsa): UpdateRequestBuilder<LegalEntityUsa> {
    return new UpdateRequestBuilder(LegalEntityUsa, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `LegalEntityUsa`.
   * @param legalEntityEffectiveStartDate Key property. See [[LegalEntityUsa.legalEntityEffectiveStartDate]].
   * @param legalEntityExternalCode Key property. See [[LegalEntityUsa.legalEntityExternalCode]].
   * @param externalCode Key property. See [[LegalEntityUsa.externalCode]].
   * @returns A request builder for creating requests that delete an entity of type `LegalEntityUsa`.
   */
  delete(legalEntityEffectiveStartDate: Moment, legalEntityExternalCode: string, externalCode: BigNumber): DeleteRequestBuilder<LegalEntityUsa>;
  /**
   * Returns a request builder for deleting an entity of type `LegalEntityUsa`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `LegalEntityUsa` by taking the entity as a parameter.
   */
  delete(entity: LegalEntityUsa): DeleteRequestBuilder<LegalEntityUsa>;
  delete(legalEntityEffectiveStartDateOrEntity: any, legalEntityExternalCode?: string, externalCode?: BigNumber): DeleteRequestBuilder<LegalEntityUsa> {
    return new DeleteRequestBuilder(LegalEntityUsa, legalEntityEffectiveStartDateOrEntity instanceof LegalEntityUsa ? legalEntityEffectiveStartDateOrEntity : {
      LegalEntity_effectiveStartDate: legalEntityEffectiveStartDateOrEntity!,
      LegalEntity_externalCode: legalEntityExternalCode!,
      externalCode: externalCode!
    });
  }
}

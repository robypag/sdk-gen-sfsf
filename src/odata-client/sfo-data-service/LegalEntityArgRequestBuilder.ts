/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder } from '@sap-cloud-sdk/core';
import { LegalEntityArg } from './LegalEntityArg';

/**
 * Request builder class for operations supported on the [[LegalEntityArg]] entity.
 */
export class LegalEntityArgRequestBuilder extends RequestBuilder<LegalEntityArg> {
  /**
   * Returns a request builder for retrieving one `LegalEntityArg` entity based on its keys.
   * @param legalEntityEffectiveStartDate Key property. See [[LegalEntityArg.legalEntityEffectiveStartDate]].
   * @param legalEntityExternalCode Key property. See [[LegalEntityArg.legalEntityExternalCode]].
   * @param externalCode Key property. See [[LegalEntityArg.externalCode]].
   * @returns A request builder for creating requests to retrieve one `LegalEntityArg` entity based on its keys.
   */
  getByKey(legalEntityEffectiveStartDate: Moment, legalEntityExternalCode: string, externalCode: BigNumber): GetByKeyRequestBuilder<LegalEntityArg> {
    return new GetByKeyRequestBuilder(LegalEntityArg, {
      LegalEntity_effectiveStartDate: legalEntityEffectiveStartDate,
      LegalEntity_externalCode: legalEntityExternalCode,
      externalCode: externalCode
    });
  }

  /**
   * Returns a request builder for querying all `LegalEntityArg` entities.
   * @returns A request builder for creating requests to retrieve all `LegalEntityArg` entities.
   */
  getAll(): GetAllRequestBuilder<LegalEntityArg> {
    return new GetAllRequestBuilder(LegalEntityArg);
  }

  /**
   * Returns a request builder for creating a `LegalEntityArg` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `LegalEntityArg`.
   */
  create(entity: LegalEntityArg): CreateRequestBuilder<LegalEntityArg> {
    return new CreateRequestBuilder(LegalEntityArg, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `LegalEntityArg`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `LegalEntityArg`.
   */
  update(entity: LegalEntityArg): UpdateRequestBuilder<LegalEntityArg> {
    return new UpdateRequestBuilder(LegalEntityArg, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `LegalEntityArg`.
   * @param legalEntityEffectiveStartDate Key property. See [[LegalEntityArg.legalEntityEffectiveStartDate]].
   * @param legalEntityExternalCode Key property. See [[LegalEntityArg.legalEntityExternalCode]].
   * @param externalCode Key property. See [[LegalEntityArg.externalCode]].
   * @returns A request builder for creating requests that delete an entity of type `LegalEntityArg`.
   */
  delete(legalEntityEffectiveStartDate: Moment, legalEntityExternalCode: string, externalCode: BigNumber): DeleteRequestBuilder<LegalEntityArg>;
  /**
   * Returns a request builder for deleting an entity of type `LegalEntityArg`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `LegalEntityArg` by taking the entity as a parameter.
   */
  delete(entity: LegalEntityArg): DeleteRequestBuilder<LegalEntityArg>;
  delete(legalEntityEffectiveStartDateOrEntity: any, legalEntityExternalCode?: string, externalCode?: BigNumber): DeleteRequestBuilder<LegalEntityArg> {
    return new DeleteRequestBuilder(LegalEntityArg, legalEntityEffectiveStartDateOrEntity instanceof LegalEntityArg ? legalEntityEffectiveStartDateOrEntity : {
      LegalEntity_effectiveStartDate: legalEntityEffectiveStartDateOrEntity!,
      LegalEntity_externalCode: legalEntityExternalCode!,
      externalCode: externalCode!
    });
  }
}

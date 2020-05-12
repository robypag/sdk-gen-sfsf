/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder } from '@sap-cloud-sdk/core';
import { LegalEntityRus } from './LegalEntityRus';

/**
 * Request builder class for operations supported on the [[LegalEntityRus]] entity.
 */
export class LegalEntityRusRequestBuilder extends RequestBuilder<LegalEntityRus> {
  /**
   * Returns a request builder for retrieving one `LegalEntityRus` entity based on its keys.
   * @param legalEntityEffectiveStartDate Key property. See [[LegalEntityRus.legalEntityEffectiveStartDate]].
   * @param legalEntityExternalCode Key property. See [[LegalEntityRus.legalEntityExternalCode]].
   * @param externalCode Key property. See [[LegalEntityRus.externalCode]].
   * @returns A request builder for creating requests to retrieve one `LegalEntityRus` entity based on its keys.
   */
  getByKey(legalEntityEffectiveStartDate: Moment, legalEntityExternalCode: string, externalCode: BigNumber): GetByKeyRequestBuilder<LegalEntityRus> {
    return new GetByKeyRequestBuilder(LegalEntityRus, {
      LegalEntity_effectiveStartDate: legalEntityEffectiveStartDate,
      LegalEntity_externalCode: legalEntityExternalCode,
      externalCode: externalCode
    });
  }

  /**
   * Returns a request builder for querying all `LegalEntityRus` entities.
   * @returns A request builder for creating requests to retrieve all `LegalEntityRus` entities.
   */
  getAll(): GetAllRequestBuilder<LegalEntityRus> {
    return new GetAllRequestBuilder(LegalEntityRus);
  }

  /**
   * Returns a request builder for creating a `LegalEntityRus` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `LegalEntityRus`.
   */
  create(entity: LegalEntityRus): CreateRequestBuilder<LegalEntityRus> {
    return new CreateRequestBuilder(LegalEntityRus, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `LegalEntityRus`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `LegalEntityRus`.
   */
  update(entity: LegalEntityRus): UpdateRequestBuilder<LegalEntityRus> {
    return new UpdateRequestBuilder(LegalEntityRus, entity);
  }

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
  delete(legalEntityEffectiveStartDateOrEntity: any, legalEntityExternalCode?: string, externalCode?: BigNumber): DeleteRequestBuilder<LegalEntityRus> {
    return new DeleteRequestBuilder(LegalEntityRus, legalEntityEffectiveStartDateOrEntity instanceof LegalEntityRus ? legalEntityEffectiveStartDateOrEntity : {
      LegalEntity_effectiveStartDate: legalEntityEffectiveStartDateOrEntity!,
      LegalEntity_externalCode: legalEntityExternalCode!,
      externalCode: externalCode!
    });
  }
}

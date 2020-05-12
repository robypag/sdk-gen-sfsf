/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder } from '@sap-cloud-sdk/core';
import { LegalEntityEsp } from './LegalEntityEsp';

/**
 * Request builder class for operations supported on the [[LegalEntityEsp]] entity.
 */
export class LegalEntityEspRequestBuilder extends RequestBuilder<LegalEntityEsp> {
  /**
   * Returns a request builder for retrieving one `LegalEntityEsp` entity based on its keys.
   * @param legalEntityEffectiveStartDate Key property. See [[LegalEntityEsp.legalEntityEffectiveStartDate]].
   * @param legalEntityExternalCode Key property. See [[LegalEntityEsp.legalEntityExternalCode]].
   * @param externalCode Key property. See [[LegalEntityEsp.externalCode]].
   * @returns A request builder for creating requests to retrieve one `LegalEntityEsp` entity based on its keys.
   */
  getByKey(legalEntityEffectiveStartDate: Moment, legalEntityExternalCode: string, externalCode: BigNumber): GetByKeyRequestBuilder<LegalEntityEsp> {
    return new GetByKeyRequestBuilder(LegalEntityEsp, {
      LegalEntity_effectiveStartDate: legalEntityEffectiveStartDate,
      LegalEntity_externalCode: legalEntityExternalCode,
      externalCode: externalCode
    });
  }

  /**
   * Returns a request builder for querying all `LegalEntityEsp` entities.
   * @returns A request builder for creating requests to retrieve all `LegalEntityEsp` entities.
   */
  getAll(): GetAllRequestBuilder<LegalEntityEsp> {
    return new GetAllRequestBuilder(LegalEntityEsp);
  }

  /**
   * Returns a request builder for creating a `LegalEntityEsp` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `LegalEntityEsp`.
   */
  create(entity: LegalEntityEsp): CreateRequestBuilder<LegalEntityEsp> {
    return new CreateRequestBuilder(LegalEntityEsp, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `LegalEntityEsp`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `LegalEntityEsp`.
   */
  update(entity: LegalEntityEsp): UpdateRequestBuilder<LegalEntityEsp> {
    return new UpdateRequestBuilder(LegalEntityEsp, entity);
  }

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
  delete(legalEntityEffectiveStartDateOrEntity: any, legalEntityExternalCode?: string, externalCode?: BigNumber): DeleteRequestBuilder<LegalEntityEsp> {
    return new DeleteRequestBuilder(LegalEntityEsp, legalEntityEffectiveStartDateOrEntity instanceof LegalEntityEsp ? legalEntityEffectiveStartDateOrEntity : {
      LegalEntity_effectiveStartDate: legalEntityEffectiveStartDateOrEntity!,
      LegalEntity_externalCode: legalEntityExternalCode!,
      externalCode: externalCode!
    });
  }
}

/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Moment } from 'moment';
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder } from '@sap-cloud-sdk/core';
import { CurrencyConversion } from './CurrencyConversion';

/**
 * Request builder class for operations supported on the [[CurrencyConversion]] entity.
 */
export class CurrencyConversionRequestBuilder extends RequestBuilder<CurrencyConversion> {
  /**
   * Returns a request builder for retrieving one `CurrencyConversion` entity based on its keys.
   * @param code Key property. See [[CurrencyConversion.code]].
   * @param effectiveStartDate Key property. See [[CurrencyConversion.effectiveStartDate]].
   * @returns A request builder for creating requests to retrieve one `CurrencyConversion` entity based on its keys.
   */
  getByKey(code: string, effectiveStartDate: Moment): GetByKeyRequestBuilder<CurrencyConversion> {
    return new GetByKeyRequestBuilder(CurrencyConversion, {
      code: code,
      effectiveStartDate: effectiveStartDate
    });
  }

  /**
   * Returns a request builder for querying all `CurrencyConversion` entities.
   * @returns A request builder for creating requests to retrieve all `CurrencyConversion` entities.
   */
  getAll(): GetAllRequestBuilder<CurrencyConversion> {
    return new GetAllRequestBuilder(CurrencyConversion);
  }

  /**
   * Returns a request builder for creating a `CurrencyConversion` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `CurrencyConversion`.
   */
  create(entity: CurrencyConversion): CreateRequestBuilder<CurrencyConversion> {
    return new CreateRequestBuilder(CurrencyConversion, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `CurrencyConversion`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `CurrencyConversion`.
   */
  update(entity: CurrencyConversion): UpdateRequestBuilder<CurrencyConversion> {
    return new UpdateRequestBuilder(CurrencyConversion, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `CurrencyConversion`.
   * @param code Key property. See [[CurrencyConversion.code]].
   * @param effectiveStartDate Key property. See [[CurrencyConversion.effectiveStartDate]].
   * @returns A request builder for creating requests that delete an entity of type `CurrencyConversion`.
   */
  delete(code: string, effectiveStartDate: Moment): DeleteRequestBuilder<CurrencyConversion>;
  /**
   * Returns a request builder for deleting an entity of type `CurrencyConversion`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `CurrencyConversion` by taking the entity as a parameter.
   */
  delete(entity: CurrencyConversion): DeleteRequestBuilder<CurrencyConversion>;
  delete(codeOrEntity: any, effectiveStartDate?: Moment): DeleteRequestBuilder<CurrencyConversion> {
    return new DeleteRequestBuilder(CurrencyConversion, codeOrEntity instanceof CurrencyConversion ? codeOrEntity : {
      code: codeOrEntity!,
      effectiveStartDate: effectiveStartDate!
    });
  }
}

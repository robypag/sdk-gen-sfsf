/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Moment } from 'moment';
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder } from '@sap-cloud-sdk/core';
import { Country } from './Country';

/**
 * Request builder class for operations supported on the [[Country]] entity.
 */
export class CountryRequestBuilder extends RequestBuilder<Country> {
  /**
   * Returns a request builder for retrieving one `Country` entity based on its keys.
   * @param code Key property. See [[Country.code]].
   * @param effectiveStartDate Key property. See [[Country.effectiveStartDate]].
   * @returns A request builder for creating requests to retrieve one `Country` entity based on its keys.
   */
  getByKey(code: string, effectiveStartDate: Moment): GetByKeyRequestBuilder<Country> {
    return new GetByKeyRequestBuilder(Country, {
      code: code,
      effectiveStartDate: effectiveStartDate
    });
  }

  /**
   * Returns a request builder for querying all `Country` entities.
   * @returns A request builder for creating requests to retrieve all `Country` entities.
   */
  getAll(): GetAllRequestBuilder<Country> {
    return new GetAllRequestBuilder(Country);
  }

  /**
   * Returns a request builder for creating a `Country` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `Country`.
   */
  create(entity: Country): CreateRequestBuilder<Country> {
    return new CreateRequestBuilder(Country, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `Country`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `Country`.
   */
  update(entity: Country): UpdateRequestBuilder<Country> {
    return new UpdateRequestBuilder(Country, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `Country`.
   * @param code Key property. See [[Country.code]].
   * @param effectiveStartDate Key property. See [[Country.effectiveStartDate]].
   * @returns A request builder for creating requests that delete an entity of type `Country`.
   */
  delete(code: string, effectiveStartDate: Moment): DeleteRequestBuilder<Country>;
  /**
   * Returns a request builder for deleting an entity of type `Country`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `Country` by taking the entity as a parameter.
   */
  delete(entity: Country): DeleteRequestBuilder<Country>;
  delete(codeOrEntity: any, effectiveStartDate?: Moment): DeleteRequestBuilder<Country> {
    return new DeleteRequestBuilder(Country, codeOrEntity instanceof Country ? codeOrEntity : {
      code: codeOrEntity!,
      effectiveStartDate: effectiveStartDate!
    });
  }
}

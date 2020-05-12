/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Moment } from 'moment';
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder } from '@sap-cloud-sdk/core';
import { PerGlobalInfoFra } from './PerGlobalInfoFra';

/**
 * Request builder class for operations supported on the [[PerGlobalInfoFra]] entity.
 */
export class PerGlobalInfoFraRequestBuilder extends RequestBuilder<PerGlobalInfoFra> {
  /**
   * Returns a request builder for retrieving one `PerGlobalInfoFra` entity based on its keys.
   * @param country Key property. See [[PerGlobalInfoFra.country]].
   * @param personIdExternal Key property. See [[PerGlobalInfoFra.personIdExternal]].
   * @param startDate Key property. See [[PerGlobalInfoFra.startDate]].
   * @returns A request builder for creating requests to retrieve one `PerGlobalInfoFra` entity based on its keys.
   */
  getByKey(country: string, personIdExternal: string, startDate: Moment): GetByKeyRequestBuilder<PerGlobalInfoFra> {
    return new GetByKeyRequestBuilder(PerGlobalInfoFra, {
      country: country,
      personIdExternal: personIdExternal,
      startDate: startDate
    });
  }

  /**
   * Returns a request builder for querying all `PerGlobalInfoFra` entities.
   * @returns A request builder for creating requests to retrieve all `PerGlobalInfoFra` entities.
   */
  getAll(): GetAllRequestBuilder<PerGlobalInfoFra> {
    return new GetAllRequestBuilder(PerGlobalInfoFra);
  }
}

/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Moment } from 'moment';
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder } from '@sap-cloud-sdk/core';
import { PerGlobalInfoZaf } from './PerGlobalInfoZaf';

/**
 * Request builder class for operations supported on the [[PerGlobalInfoZaf]] entity.
 */
export class PerGlobalInfoZafRequestBuilder extends RequestBuilder<PerGlobalInfoZaf> {
  /**
   * Returns a request builder for retrieving one `PerGlobalInfoZaf` entity based on its keys.
   * @param country Key property. See [[PerGlobalInfoZaf.country]].
   * @param personIdExternal Key property. See [[PerGlobalInfoZaf.personIdExternal]].
   * @param startDate Key property. See [[PerGlobalInfoZaf.startDate]].
   * @returns A request builder for creating requests to retrieve one `PerGlobalInfoZaf` entity based on its keys.
   */
  getByKey(country: string, personIdExternal: string, startDate: Moment): GetByKeyRequestBuilder<PerGlobalInfoZaf> {
    return new GetByKeyRequestBuilder(PerGlobalInfoZaf, {
      country: country,
      personIdExternal: personIdExternal,
      startDate: startDate
    });
  }

  /**
   * Returns a request builder for querying all `PerGlobalInfoZaf` entities.
   * @returns A request builder for creating requests to retrieve all `PerGlobalInfoZaf` entities.
   */
  getAll(): GetAllRequestBuilder<PerGlobalInfoZaf> {
    return new GetAllRequestBuilder(PerGlobalInfoZaf);
  }
}

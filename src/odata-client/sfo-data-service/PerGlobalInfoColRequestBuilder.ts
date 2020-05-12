/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Moment } from 'moment';
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder } from '@sap-cloud-sdk/core';
import { PerGlobalInfoCol } from './PerGlobalInfoCol';

/**
 * Request builder class for operations supported on the [[PerGlobalInfoCol]] entity.
 */
export class PerGlobalInfoColRequestBuilder extends RequestBuilder<PerGlobalInfoCol> {
  /**
   * Returns a request builder for retrieving one `PerGlobalInfoCol` entity based on its keys.
   * @param country Key property. See [[PerGlobalInfoCol.country]].
   * @param personIdExternal Key property. See [[PerGlobalInfoCol.personIdExternal]].
   * @param startDate Key property. See [[PerGlobalInfoCol.startDate]].
   * @returns A request builder for creating requests to retrieve one `PerGlobalInfoCol` entity based on its keys.
   */
  getByKey(country: string, personIdExternal: string, startDate: Moment): GetByKeyRequestBuilder<PerGlobalInfoCol> {
    return new GetByKeyRequestBuilder(PerGlobalInfoCol, {
      country: country,
      personIdExternal: personIdExternal,
      startDate: startDate
    });
  }

  /**
   * Returns a request builder for querying all `PerGlobalInfoCol` entities.
   * @returns A request builder for creating requests to retrieve all `PerGlobalInfoCol` entities.
   */
  getAll(): GetAllRequestBuilder<PerGlobalInfoCol> {
    return new GetAllRequestBuilder(PerGlobalInfoCol);
  }
}

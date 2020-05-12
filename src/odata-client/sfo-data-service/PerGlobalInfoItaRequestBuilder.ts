/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Moment } from 'moment';
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder } from '@sap-cloud-sdk/core';
import { PerGlobalInfoIta } from './PerGlobalInfoIta';

/**
 * Request builder class for operations supported on the [[PerGlobalInfoIta]] entity.
 */
export class PerGlobalInfoItaRequestBuilder extends RequestBuilder<PerGlobalInfoIta> {
  /**
   * Returns a request builder for retrieving one `PerGlobalInfoIta` entity based on its keys.
   * @param country Key property. See [[PerGlobalInfoIta.country]].
   * @param personIdExternal Key property. See [[PerGlobalInfoIta.personIdExternal]].
   * @param startDate Key property. See [[PerGlobalInfoIta.startDate]].
   * @returns A request builder for creating requests to retrieve one `PerGlobalInfoIta` entity based on its keys.
   */
  getByKey(country: string, personIdExternal: string, startDate: Moment): GetByKeyRequestBuilder<PerGlobalInfoIta> {
    return new GetByKeyRequestBuilder(PerGlobalInfoIta, {
      country: country,
      personIdExternal: personIdExternal,
      startDate: startDate
    });
  }

  /**
   * Returns a request builder for querying all `PerGlobalInfoIta` entities.
   * @returns A request builder for creating requests to retrieve all `PerGlobalInfoIta` entities.
   */
  getAll(): GetAllRequestBuilder<PerGlobalInfoIta> {
    return new GetAllRequestBuilder(PerGlobalInfoIta);
  }
}

/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Moment } from 'moment';
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder } from '@sap-cloud-sdk/core';
import { PerGlobalInfoNld } from './PerGlobalInfoNld';

/**
 * Request builder class for operations supported on the [[PerGlobalInfoNld]] entity.
 */
export class PerGlobalInfoNldRequestBuilder extends RequestBuilder<PerGlobalInfoNld> {
  /**
   * Returns a request builder for retrieving one `PerGlobalInfoNld` entity based on its keys.
   * @param country Key property. See [[PerGlobalInfoNld.country]].
   * @param personIdExternal Key property. See [[PerGlobalInfoNld.personIdExternal]].
   * @param startDate Key property. See [[PerGlobalInfoNld.startDate]].
   * @returns A request builder for creating requests to retrieve one `PerGlobalInfoNld` entity based on its keys.
   */
  getByKey(country: string, personIdExternal: string, startDate: Moment): GetByKeyRequestBuilder<PerGlobalInfoNld> {
    return new GetByKeyRequestBuilder(PerGlobalInfoNld, {
      country: country,
      personIdExternal: personIdExternal,
      startDate: startDate
    });
  }

  /**
   * Returns a request builder for querying all `PerGlobalInfoNld` entities.
   * @returns A request builder for creating requests to retrieve all `PerGlobalInfoNld` entities.
   */
  getAll(): GetAllRequestBuilder<PerGlobalInfoNld> {
    return new GetAllRequestBuilder(PerGlobalInfoNld);
  }
}

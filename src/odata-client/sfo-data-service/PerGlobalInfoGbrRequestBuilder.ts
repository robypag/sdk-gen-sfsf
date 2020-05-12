/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Moment } from 'moment';
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder } from '@sap-cloud-sdk/core';
import { PerGlobalInfoGbr } from './PerGlobalInfoGbr';

/**
 * Request builder class for operations supported on the [[PerGlobalInfoGbr]] entity.
 */
export class PerGlobalInfoGbrRequestBuilder extends RequestBuilder<PerGlobalInfoGbr> {
  /**
   * Returns a request builder for retrieving one `PerGlobalInfoGbr` entity based on its keys.
   * @param country Key property. See [[PerGlobalInfoGbr.country]].
   * @param personIdExternal Key property. See [[PerGlobalInfoGbr.personIdExternal]].
   * @param startDate Key property. See [[PerGlobalInfoGbr.startDate]].
   * @returns A request builder for creating requests to retrieve one `PerGlobalInfoGbr` entity based on its keys.
   */
  getByKey(country: string, personIdExternal: string, startDate: Moment): GetByKeyRequestBuilder<PerGlobalInfoGbr> {
    return new GetByKeyRequestBuilder(PerGlobalInfoGbr, {
      country: country,
      personIdExternal: personIdExternal,
      startDate: startDate
    });
  }

  /**
   * Returns a request builder for querying all `PerGlobalInfoGbr` entities.
   * @returns A request builder for creating requests to retrieve all `PerGlobalInfoGbr` entities.
   */
  getAll(): GetAllRequestBuilder<PerGlobalInfoGbr> {
    return new GetAllRequestBuilder(PerGlobalInfoGbr);
  }
}

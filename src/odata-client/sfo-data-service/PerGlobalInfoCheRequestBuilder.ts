/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Moment } from 'moment';
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder } from '@sap-cloud-sdk/core';
import { PerGlobalInfoChe } from './PerGlobalInfoChe';

/**
 * Request builder class for operations supported on the [[PerGlobalInfoChe]] entity.
 */
export class PerGlobalInfoCheRequestBuilder extends RequestBuilder<PerGlobalInfoChe> {
  /**
   * Returns a request builder for retrieving one `PerGlobalInfoChe` entity based on its keys.
   * @param country Key property. See [[PerGlobalInfoChe.country]].
   * @param personIdExternal Key property. See [[PerGlobalInfoChe.personIdExternal]].
   * @param startDate Key property. See [[PerGlobalInfoChe.startDate]].
   * @returns A request builder for creating requests to retrieve one `PerGlobalInfoChe` entity based on its keys.
   */
  getByKey(country: string, personIdExternal: string, startDate: Moment): GetByKeyRequestBuilder<PerGlobalInfoChe> {
    return new GetByKeyRequestBuilder(PerGlobalInfoChe, {
      country: country,
      personIdExternal: personIdExternal,
      startDate: startDate
    });
  }

  /**
   * Returns a request builder for querying all `PerGlobalInfoChe` entities.
   * @returns A request builder for creating requests to retrieve all `PerGlobalInfoChe` entities.
   */
  getAll(): GetAllRequestBuilder<PerGlobalInfoChe> {
    return new GetAllRequestBuilder(PerGlobalInfoChe);
  }
}

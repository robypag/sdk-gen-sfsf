/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Moment } from 'moment';
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder } from '@sap-cloud-sdk/core';
import { PerGlobalInfoCan } from './PerGlobalInfoCan';

/**
 * Request builder class for operations supported on the [[PerGlobalInfoCan]] entity.
 */
export class PerGlobalInfoCanRequestBuilder extends RequestBuilder<PerGlobalInfoCan> {
  /**
   * Returns a request builder for retrieving one `PerGlobalInfoCan` entity based on its keys.
   * @param country Key property. See [[PerGlobalInfoCan.country]].
   * @param personIdExternal Key property. See [[PerGlobalInfoCan.personIdExternal]].
   * @param startDate Key property. See [[PerGlobalInfoCan.startDate]].
   * @returns A request builder for creating requests to retrieve one `PerGlobalInfoCan` entity based on its keys.
   */
  getByKey(country: string, personIdExternal: string, startDate: Moment): GetByKeyRequestBuilder<PerGlobalInfoCan> {
    return new GetByKeyRequestBuilder(PerGlobalInfoCan, {
      country: country,
      personIdExternal: personIdExternal,
      startDate: startDate
    });
  }

  /**
   * Returns a request builder for querying all `PerGlobalInfoCan` entities.
   * @returns A request builder for creating requests to retrieve all `PerGlobalInfoCan` entities.
   */
  getAll(): GetAllRequestBuilder<PerGlobalInfoCan> {
    return new GetAllRequestBuilder(PerGlobalInfoCan);
  }
}

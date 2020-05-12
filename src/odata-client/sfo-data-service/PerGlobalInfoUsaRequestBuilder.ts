/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Moment } from 'moment';
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder } from '@sap-cloud-sdk/core';
import { PerGlobalInfoUsa } from './PerGlobalInfoUsa';

/**
 * Request builder class for operations supported on the [[PerGlobalInfoUsa]] entity.
 */
export class PerGlobalInfoUsaRequestBuilder extends RequestBuilder<PerGlobalInfoUsa> {
  /**
   * Returns a request builder for retrieving one `PerGlobalInfoUsa` entity based on its keys.
   * @param country Key property. See [[PerGlobalInfoUsa.country]].
   * @param personIdExternal Key property. See [[PerGlobalInfoUsa.personIdExternal]].
   * @param startDate Key property. See [[PerGlobalInfoUsa.startDate]].
   * @returns A request builder for creating requests to retrieve one `PerGlobalInfoUsa` entity based on its keys.
   */
  getByKey(country: string, personIdExternal: string, startDate: Moment): GetByKeyRequestBuilder<PerGlobalInfoUsa> {
    return new GetByKeyRequestBuilder(PerGlobalInfoUsa, {
      country: country,
      personIdExternal: personIdExternal,
      startDate: startDate
    });
  }

  /**
   * Returns a request builder for querying all `PerGlobalInfoUsa` entities.
   * @returns A request builder for creating requests to retrieve all `PerGlobalInfoUsa` entities.
   */
  getAll(): GetAllRequestBuilder<PerGlobalInfoUsa> {
    return new GetAllRequestBuilder(PerGlobalInfoUsa);
  }
}

/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Moment } from 'moment';
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder } from '@sap-cloud-sdk/core';
import { PerGlobalInfoAre } from './PerGlobalInfoAre';

/**
 * Request builder class for operations supported on the [[PerGlobalInfoAre]] entity.
 */
export class PerGlobalInfoAreRequestBuilder extends RequestBuilder<PerGlobalInfoAre> {
  /**
   * Returns a request builder for retrieving one `PerGlobalInfoAre` entity based on its keys.
   * @param country Key property. See [[PerGlobalInfoAre.country]].
   * @param personIdExternal Key property. See [[PerGlobalInfoAre.personIdExternal]].
   * @param startDate Key property. See [[PerGlobalInfoAre.startDate]].
   * @returns A request builder for creating requests to retrieve one `PerGlobalInfoAre` entity based on its keys.
   */
  getByKey(country: string, personIdExternal: string, startDate: Moment): GetByKeyRequestBuilder<PerGlobalInfoAre> {
    return new GetByKeyRequestBuilder(PerGlobalInfoAre, {
      country: country,
      personIdExternal: personIdExternal,
      startDate: startDate
    });
  }

  /**
   * Returns a request builder for querying all `PerGlobalInfoAre` entities.
   * @returns A request builder for creating requests to retrieve all `PerGlobalInfoAre` entities.
   */
  getAll(): GetAllRequestBuilder<PerGlobalInfoAre> {
    return new GetAllRequestBuilder(PerGlobalInfoAre);
  }
}

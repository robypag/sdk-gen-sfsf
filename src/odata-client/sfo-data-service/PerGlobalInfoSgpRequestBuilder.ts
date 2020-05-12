/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Moment } from 'moment';
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder } from '@sap-cloud-sdk/core';
import { PerGlobalInfoSgp } from './PerGlobalInfoSgp';

/**
 * Request builder class for operations supported on the [[PerGlobalInfoSgp]] entity.
 */
export class PerGlobalInfoSgpRequestBuilder extends RequestBuilder<PerGlobalInfoSgp> {
  /**
   * Returns a request builder for retrieving one `PerGlobalInfoSgp` entity based on its keys.
   * @param country Key property. See [[PerGlobalInfoSgp.country]].
   * @param personIdExternal Key property. See [[PerGlobalInfoSgp.personIdExternal]].
   * @param startDate Key property. See [[PerGlobalInfoSgp.startDate]].
   * @returns A request builder for creating requests to retrieve one `PerGlobalInfoSgp` entity based on its keys.
   */
  getByKey(country: string, personIdExternal: string, startDate: Moment): GetByKeyRequestBuilder<PerGlobalInfoSgp> {
    return new GetByKeyRequestBuilder(PerGlobalInfoSgp, {
      country: country,
      personIdExternal: personIdExternal,
      startDate: startDate
    });
  }

  /**
   * Returns a request builder for querying all `PerGlobalInfoSgp` entities.
   * @returns A request builder for creating requests to retrieve all `PerGlobalInfoSgp` entities.
   */
  getAll(): GetAllRequestBuilder<PerGlobalInfoSgp> {
    return new GetAllRequestBuilder(PerGlobalInfoSgp);
  }
}

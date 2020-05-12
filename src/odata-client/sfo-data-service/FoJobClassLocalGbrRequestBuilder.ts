/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Moment } from 'moment';
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder } from '@sap-cloud-sdk/core';
import { FoJobClassLocalGbr } from './FoJobClassLocalGbr';

/**
 * Request builder class for operations supported on the [[FoJobClassLocalGbr]] entity.
 */
export class FoJobClassLocalGbrRequestBuilder extends RequestBuilder<FoJobClassLocalGbr> {
  /**
   * Returns a request builder for retrieving one `FoJobClassLocalGbr` entity based on its keys.
   * @param country Key property. See [[FoJobClassLocalGbr.country]].
   * @param externalCode Key property. See [[FoJobClassLocalGbr.externalCode]].
   * @param startDate Key property. See [[FoJobClassLocalGbr.startDate]].
   * @returns A request builder for creating requests to retrieve one `FoJobClassLocalGbr` entity based on its keys.
   */
  getByKey(country: string, externalCode: string, startDate: Moment): GetByKeyRequestBuilder<FoJobClassLocalGbr> {
    return new GetByKeyRequestBuilder(FoJobClassLocalGbr, {
      country: country,
      externalCode: externalCode,
      startDate: startDate
    });
  }

  /**
   * Returns a request builder for querying all `FoJobClassLocalGbr` entities.
   * @returns A request builder for creating requests to retrieve all `FoJobClassLocalGbr` entities.
   */
  getAll(): GetAllRequestBuilder<FoJobClassLocalGbr> {
    return new GetAllRequestBuilder(FoJobClassLocalGbr);
  }
}

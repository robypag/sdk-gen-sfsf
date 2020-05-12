/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Moment } from 'moment';
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder } from '@sap-cloud-sdk/core';
import { FoJobClassLocalDeflt } from './FoJobClassLocalDeflt';

/**
 * Request builder class for operations supported on the [[FoJobClassLocalDeflt]] entity.
 */
export class FoJobClassLocalDefltRequestBuilder extends RequestBuilder<FoJobClassLocalDeflt> {
  /**
   * Returns a request builder for retrieving one `FoJobClassLocalDeflt` entity based on its keys.
   * @param country Key property. See [[FoJobClassLocalDeflt.country]].
   * @param externalCode Key property. See [[FoJobClassLocalDeflt.externalCode]].
   * @param startDate Key property. See [[FoJobClassLocalDeflt.startDate]].
   * @returns A request builder for creating requests to retrieve one `FoJobClassLocalDeflt` entity based on its keys.
   */
  getByKey(country: string, externalCode: string, startDate: Moment): GetByKeyRequestBuilder<FoJobClassLocalDeflt> {
    return new GetByKeyRequestBuilder(FoJobClassLocalDeflt, {
      country: country,
      externalCode: externalCode,
      startDate: startDate
    });
  }

  /**
   * Returns a request builder for querying all `FoJobClassLocalDeflt` entities.
   * @returns A request builder for creating requests to retrieve all `FoJobClassLocalDeflt` entities.
   */
  getAll(): GetAllRequestBuilder<FoJobClassLocalDeflt> {
    return new GetAllRequestBuilder(FoJobClassLocalDeflt);
  }
}

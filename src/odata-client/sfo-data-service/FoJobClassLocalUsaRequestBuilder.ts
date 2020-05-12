/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Moment } from 'moment';
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder } from '@sap-cloud-sdk/core';
import { FoJobClassLocalUsa } from './FoJobClassLocalUsa';

/**
 * Request builder class for operations supported on the [[FoJobClassLocalUsa]] entity.
 */
export class FoJobClassLocalUsaRequestBuilder extends RequestBuilder<FoJobClassLocalUsa> {
  /**
   * Returns a request builder for retrieving one `FoJobClassLocalUsa` entity based on its keys.
   * @param country Key property. See [[FoJobClassLocalUsa.country]].
   * @param externalCode Key property. See [[FoJobClassLocalUsa.externalCode]].
   * @param startDate Key property. See [[FoJobClassLocalUsa.startDate]].
   * @returns A request builder for creating requests to retrieve one `FoJobClassLocalUsa` entity based on its keys.
   */
  getByKey(country: string, externalCode: string, startDate: Moment): GetByKeyRequestBuilder<FoJobClassLocalUsa> {
    return new GetByKeyRequestBuilder(FoJobClassLocalUsa, {
      country: country,
      externalCode: externalCode,
      startDate: startDate
    });
  }

  /**
   * Returns a request builder for querying all `FoJobClassLocalUsa` entities.
   * @returns A request builder for creating requests to retrieve all `FoJobClassLocalUsa` entities.
   */
  getAll(): GetAllRequestBuilder<FoJobClassLocalUsa> {
    return new GetAllRequestBuilder(FoJobClassLocalUsa);
  }
}

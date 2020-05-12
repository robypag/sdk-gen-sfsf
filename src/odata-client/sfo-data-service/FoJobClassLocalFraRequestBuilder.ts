/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Moment } from 'moment';
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder } from '@sap-cloud-sdk/core';
import { FoJobClassLocalFra } from './FoJobClassLocalFra';

/**
 * Request builder class for operations supported on the [[FoJobClassLocalFra]] entity.
 */
export class FoJobClassLocalFraRequestBuilder extends RequestBuilder<FoJobClassLocalFra> {
  /**
   * Returns a request builder for retrieving one `FoJobClassLocalFra` entity based on its keys.
   * @param country Key property. See [[FoJobClassLocalFra.country]].
   * @param externalCode Key property. See [[FoJobClassLocalFra.externalCode]].
   * @param startDate Key property. See [[FoJobClassLocalFra.startDate]].
   * @returns A request builder for creating requests to retrieve one `FoJobClassLocalFra` entity based on its keys.
   */
  getByKey(country: string, externalCode: string, startDate: Moment): GetByKeyRequestBuilder<FoJobClassLocalFra> {
    return new GetByKeyRequestBuilder(FoJobClassLocalFra, {
      country: country,
      externalCode: externalCode,
      startDate: startDate
    });
  }

  /**
   * Returns a request builder for querying all `FoJobClassLocalFra` entities.
   * @returns A request builder for creating requests to retrieve all `FoJobClassLocalFra` entities.
   */
  getAll(): GetAllRequestBuilder<FoJobClassLocalFra> {
    return new GetAllRequestBuilder(FoJobClassLocalFra);
  }
}

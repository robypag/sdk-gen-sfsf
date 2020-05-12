/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Moment } from 'moment';
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder } from '@sap-cloud-sdk/core';
import { FoLocation } from './FoLocation';

/**
 * Request builder class for operations supported on the [[FoLocation]] entity.
 */
export class FoLocationRequestBuilder extends RequestBuilder<FoLocation> {
  /**
   * Returns a request builder for retrieving one `FoLocation` entity based on its keys.
   * @param externalCode Key property. See [[FoLocation.externalCode]].
   * @param startDate Key property. See [[FoLocation.startDate]].
   * @returns A request builder for creating requests to retrieve one `FoLocation` entity based on its keys.
   */
  getByKey(externalCode: string, startDate: Moment): GetByKeyRequestBuilder<FoLocation> {
    return new GetByKeyRequestBuilder(FoLocation, {
      externalCode: externalCode,
      startDate: startDate
    });
  }

  /**
   * Returns a request builder for querying all `FoLocation` entities.
   * @returns A request builder for creating requests to retrieve all `FoLocation` entities.
   */
  getAll(): GetAllRequestBuilder<FoLocation> {
    return new GetAllRequestBuilder(FoLocation);
  }
}

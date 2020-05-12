/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Moment } from 'moment';
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder } from '@sap-cloud-sdk/core';
import { FoGeozone } from './FoGeozone';

/**
 * Request builder class for operations supported on the [[FoGeozone]] entity.
 */
export class FoGeozoneRequestBuilder extends RequestBuilder<FoGeozone> {
  /**
   * Returns a request builder for retrieving one `FoGeozone` entity based on its keys.
   * @param externalCode Key property. See [[FoGeozone.externalCode]].
   * @param startDate Key property. See [[FoGeozone.startDate]].
   * @returns A request builder for creating requests to retrieve one `FoGeozone` entity based on its keys.
   */
  getByKey(externalCode: string, startDate: Moment): GetByKeyRequestBuilder<FoGeozone> {
    return new GetByKeyRequestBuilder(FoGeozone, {
      externalCode: externalCode,
      startDate: startDate
    });
  }

  /**
   * Returns a request builder for querying all `FoGeozone` entities.
   * @returns A request builder for creating requests to retrieve all `FoGeozone` entities.
   */
  getAll(): GetAllRequestBuilder<FoGeozone> {
    return new GetAllRequestBuilder(FoGeozone);
  }
}

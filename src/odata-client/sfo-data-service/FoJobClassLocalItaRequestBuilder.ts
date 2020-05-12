/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Moment } from 'moment';
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder } from '@sap-cloud-sdk/core';
import { FoJobClassLocalIta } from './FoJobClassLocalIta';

/**
 * Request builder class for operations supported on the [[FoJobClassLocalIta]] entity.
 */
export class FoJobClassLocalItaRequestBuilder extends RequestBuilder<FoJobClassLocalIta> {
  /**
   * Returns a request builder for retrieving one `FoJobClassLocalIta` entity based on its keys.
   * @param country Key property. See [[FoJobClassLocalIta.country]].
   * @param externalCode Key property. See [[FoJobClassLocalIta.externalCode]].
   * @param startDate Key property. See [[FoJobClassLocalIta.startDate]].
   * @returns A request builder for creating requests to retrieve one `FoJobClassLocalIta` entity based on its keys.
   */
  getByKey(country: string, externalCode: string, startDate: Moment): GetByKeyRequestBuilder<FoJobClassLocalIta> {
    return new GetByKeyRequestBuilder(FoJobClassLocalIta, {
      country: country,
      externalCode: externalCode,
      startDate: startDate
    });
  }

  /**
   * Returns a request builder for querying all `FoJobClassLocalIta` entities.
   * @returns A request builder for creating requests to retrieve all `FoJobClassLocalIta` entities.
   */
  getAll(): GetAllRequestBuilder<FoJobClassLocalIta> {
    return new GetAllRequestBuilder(FoJobClassLocalIta);
  }
}

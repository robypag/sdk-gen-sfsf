/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Moment } from 'moment';
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder } from '@sap-cloud-sdk/core';
import { FoJobClassLocalCan } from './FoJobClassLocalCan';

/**
 * Request builder class for operations supported on the [[FoJobClassLocalCan]] entity.
 */
export class FoJobClassLocalCanRequestBuilder extends RequestBuilder<FoJobClassLocalCan> {
  /**
   * Returns a request builder for retrieving one `FoJobClassLocalCan` entity based on its keys.
   * @param country Key property. See [[FoJobClassLocalCan.country]].
   * @param externalCode Key property. See [[FoJobClassLocalCan.externalCode]].
   * @param startDate Key property. See [[FoJobClassLocalCan.startDate]].
   * @returns A request builder for creating requests to retrieve one `FoJobClassLocalCan` entity based on its keys.
   */
  getByKey(country: string, externalCode: string, startDate: Moment): GetByKeyRequestBuilder<FoJobClassLocalCan> {
    return new GetByKeyRequestBuilder(FoJobClassLocalCan, {
      country: country,
      externalCode: externalCode,
      startDate: startDate
    });
  }

  /**
   * Returns a request builder for querying all `FoJobClassLocalCan` entities.
   * @returns A request builder for creating requests to retrieve all `FoJobClassLocalCan` entities.
   */
  getAll(): GetAllRequestBuilder<FoJobClassLocalCan> {
    return new GetAllRequestBuilder(FoJobClassLocalCan);
  }
}

/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Moment } from 'moment';
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder } from '@sap-cloud-sdk/core';
import { FoPayRange } from './FoPayRange';

/**
 * Request builder class for operations supported on the [[FoPayRange]] entity.
 */
export class FoPayRangeRequestBuilder extends RequestBuilder<FoPayRange> {
  /**
   * Returns a request builder for retrieving one `FoPayRange` entity based on its keys.
   * @param externalCode Key property. See [[FoPayRange.externalCode]].
   * @param startDate Key property. See [[FoPayRange.startDate]].
   * @returns A request builder for creating requests to retrieve one `FoPayRange` entity based on its keys.
   */
  getByKey(externalCode: string, startDate: Moment): GetByKeyRequestBuilder<FoPayRange> {
    return new GetByKeyRequestBuilder(FoPayRange, {
      externalCode: externalCode,
      startDate: startDate
    });
  }

  /**
   * Returns a request builder for querying all `FoPayRange` entities.
   * @returns A request builder for creating requests to retrieve all `FoPayRange` entities.
   */
  getAll(): GetAllRequestBuilder<FoPayRange> {
    return new GetAllRequestBuilder(FoPayRange);
  }
}

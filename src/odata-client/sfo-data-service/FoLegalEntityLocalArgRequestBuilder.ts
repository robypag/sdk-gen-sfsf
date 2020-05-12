/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Moment } from 'moment';
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder } from '@sap-cloud-sdk/core';
import { FoLegalEntityLocalArg } from './FoLegalEntityLocalArg';

/**
 * Request builder class for operations supported on the [[FoLegalEntityLocalArg]] entity.
 */
export class FoLegalEntityLocalArgRequestBuilder extends RequestBuilder<FoLegalEntityLocalArg> {
  /**
   * Returns a request builder for retrieving one `FoLegalEntityLocalArg` entity based on its keys.
   * @param country Key property. See [[FoLegalEntityLocalArg.country]].
   * @param externalCode Key property. See [[FoLegalEntityLocalArg.externalCode]].
   * @param startDate Key property. See [[FoLegalEntityLocalArg.startDate]].
   * @returns A request builder for creating requests to retrieve one `FoLegalEntityLocalArg` entity based on its keys.
   */
  getByKey(country: string, externalCode: string, startDate: Moment): GetByKeyRequestBuilder<FoLegalEntityLocalArg> {
    return new GetByKeyRequestBuilder(FoLegalEntityLocalArg, {
      country: country,
      externalCode: externalCode,
      startDate: startDate
    });
  }

  /**
   * Returns a request builder for querying all `FoLegalEntityLocalArg` entities.
   * @returns A request builder for creating requests to retrieve all `FoLegalEntityLocalArg` entities.
   */
  getAll(): GetAllRequestBuilder<FoLegalEntityLocalArg> {
    return new GetAllRequestBuilder(FoLegalEntityLocalArg);
  }
}

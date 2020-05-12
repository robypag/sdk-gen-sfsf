/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Moment } from 'moment';
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder } from '@sap-cloud-sdk/core';
import { FoLegalEntityLocalUsa } from './FoLegalEntityLocalUsa';

/**
 * Request builder class for operations supported on the [[FoLegalEntityLocalUsa]] entity.
 */
export class FoLegalEntityLocalUsaRequestBuilder extends RequestBuilder<FoLegalEntityLocalUsa> {
  /**
   * Returns a request builder for retrieving one `FoLegalEntityLocalUsa` entity based on its keys.
   * @param country Key property. See [[FoLegalEntityLocalUsa.country]].
   * @param externalCode Key property. See [[FoLegalEntityLocalUsa.externalCode]].
   * @param startDate Key property. See [[FoLegalEntityLocalUsa.startDate]].
   * @returns A request builder for creating requests to retrieve one `FoLegalEntityLocalUsa` entity based on its keys.
   */
  getByKey(country: string, externalCode: string, startDate: Moment): GetByKeyRequestBuilder<FoLegalEntityLocalUsa> {
    return new GetByKeyRequestBuilder(FoLegalEntityLocalUsa, {
      country: country,
      externalCode: externalCode,
      startDate: startDate
    });
  }

  /**
   * Returns a request builder for querying all `FoLegalEntityLocalUsa` entities.
   * @returns A request builder for creating requests to retrieve all `FoLegalEntityLocalUsa` entities.
   */
  getAll(): GetAllRequestBuilder<FoLegalEntityLocalUsa> {
    return new GetAllRequestBuilder(FoLegalEntityLocalUsa);
  }
}

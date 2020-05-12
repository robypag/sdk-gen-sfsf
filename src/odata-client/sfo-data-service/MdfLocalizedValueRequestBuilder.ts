/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder } from '@sap-cloud-sdk/core';
import { MdfLocalizedValue } from './MdfLocalizedValue';

/**
 * Request builder class for operations supported on the [[MdfLocalizedValue]] entity.
 */
export class MdfLocalizedValueRequestBuilder extends RequestBuilder<MdfLocalizedValue> {
  /**
   * Returns a request builder for retrieving one `MdfLocalizedValue` entity based on its keys.
   * @param locale Key property. See [[MdfLocalizedValue.locale]].
   * @returns A request builder for creating requests to retrieve one `MdfLocalizedValue` entity based on its keys.
   */
  getByKey(locale: string): GetByKeyRequestBuilder<MdfLocalizedValue> {
    return new GetByKeyRequestBuilder(MdfLocalizedValue, { locale: locale });
  }

  /**
   * Returns a request builder for querying all `MdfLocalizedValue` entities.
   * @returns A request builder for creating requests to retrieve all `MdfLocalizedValue` entities.
   */
  getAll(): GetAllRequestBuilder<MdfLocalizedValue> {
    return new GetAllRequestBuilder(MdfLocalizedValue);
  }
}

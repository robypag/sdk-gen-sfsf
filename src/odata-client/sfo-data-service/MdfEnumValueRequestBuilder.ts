/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder } from '@sap-cloud-sdk/core';
import { MdfEnumValue } from './MdfEnumValue';

/**
 * Request builder class for operations supported on the [[MdfEnumValue]] entity.
 */
export class MdfEnumValueRequestBuilder extends RequestBuilder<MdfEnumValue> {
  /**
   * Returns a request builder for retrieving one `MdfEnumValue` entity based on its keys.
   * @param key Key property. See [[MdfEnumValue.key]].
   * @param value Key property. See [[MdfEnumValue.value]].
   * @returns A request builder for creating requests to retrieve one `MdfEnumValue` entity based on its keys.
   */
  getByKey(key: string, value: string): GetByKeyRequestBuilder<MdfEnumValue> {
    return new GetByKeyRequestBuilder(MdfEnumValue, {
      key: key,
      value: value
    });
  }

  /**
   * Returns a request builder for querying all `MdfEnumValue` entities.
   * @returns A request builder for creating requests to retrieve all `MdfEnumValue` entities.
   */
  getAll(): GetAllRequestBuilder<MdfEnumValue> {
    return new GetAllRequestBuilder(MdfEnumValue);
  }
}

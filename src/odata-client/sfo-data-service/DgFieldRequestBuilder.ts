/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder } from '@sap-cloud-sdk/core';
import { DgField } from './DgField';

/**
 * Request builder class for operations supported on the [[DgField]] entity.
 */
export class DgFieldRequestBuilder extends RequestBuilder<DgField> {
  /**
   * Returns a request builder for retrieving one `DgField` entity based on its keys.
   * @param name Key property. See [[DgField.name]].
   * @returns A request builder for creating requests to retrieve one `DgField` entity based on its keys.
   */
  getByKey(name: string): GetByKeyRequestBuilder<DgField> {
    return new GetByKeyRequestBuilder(DgField, { name: name });
  }

  /**
   * Returns a request builder for querying all `DgField` entities.
   * @returns A request builder for creating requests to retrieve all `DgField` entities.
   */
  getAll(): GetAllRequestBuilder<DgField> {
    return new GetAllRequestBuilder(DgField);
  }
}

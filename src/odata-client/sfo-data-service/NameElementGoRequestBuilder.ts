/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder } from '@sap-cloud-sdk/core';
import { NameElementGo } from './NameElementGo';

/**
 * Request builder class for operations supported on the [[NameElementGo]] entity.
 */
export class NameElementGoRequestBuilder extends RequestBuilder<NameElementGo> {
  /**
   * Returns a request builder for retrieving one `NameElementGo` entity based on its keys.
   * @param nameFormatGoExternalCode Key property. See [[NameElementGo.nameFormatGoExternalCode]].
   * @param externalCode Key property. See [[NameElementGo.externalCode]].
   * @returns A request builder for creating requests to retrieve one `NameElementGo` entity based on its keys.
   */
  getByKey(nameFormatGoExternalCode: string, externalCode: string): GetByKeyRequestBuilder<NameElementGo> {
    return new GetByKeyRequestBuilder(NameElementGo, {
      NameFormatGO_externalCode: nameFormatGoExternalCode,
      externalCode: externalCode
    });
  }

  /**
   * Returns a request builder for querying all `NameElementGo` entities.
   * @returns A request builder for creating requests to retrieve all `NameElementGo` entities.
   */
  getAll(): GetAllRequestBuilder<NameElementGo> {
    return new GetAllRequestBuilder(NameElementGo);
  }
}

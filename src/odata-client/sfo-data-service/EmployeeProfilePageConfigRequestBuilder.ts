/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder } from '@sap-cloud-sdk/core';
import { EmployeeProfilePageConfig } from './EmployeeProfilePageConfig';

/**
 * Request builder class for operations supported on the [[EmployeeProfilePageConfig]] entity.
 */
export class EmployeeProfilePageConfigRequestBuilder extends RequestBuilder<EmployeeProfilePageConfig> {
  /**
   * Returns a request builder for retrieving one `EmployeeProfilePageConfig` entity based on its keys.
   * @param code Key property. See [[EmployeeProfilePageConfig.code]].
   * @returns A request builder for creating requests to retrieve one `EmployeeProfilePageConfig` entity based on its keys.
   */
  getByKey(code: string): GetByKeyRequestBuilder<EmployeeProfilePageConfig> {
    return new GetByKeyRequestBuilder(EmployeeProfilePageConfig, { code: code });
  }

  /**
   * Returns a request builder for querying all `EmployeeProfilePageConfig` entities.
   * @returns A request builder for creating requests to retrieve all `EmployeeProfilePageConfig` entities.
   */
  getAll(): GetAllRequestBuilder<EmployeeProfilePageConfig> {
    return new GetAllRequestBuilder(EmployeeProfilePageConfig);
  }
}

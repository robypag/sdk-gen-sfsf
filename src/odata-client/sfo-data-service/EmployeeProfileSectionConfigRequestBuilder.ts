/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder } from '@sap-cloud-sdk/core';
import { EmployeeProfileSectionConfig } from './EmployeeProfileSectionConfig';

/**
 * Request builder class for operations supported on the [[EmployeeProfileSectionConfig]] entity.
 */
export class EmployeeProfileSectionConfigRequestBuilder extends RequestBuilder<EmployeeProfileSectionConfig> {
  /**
   * Returns a request builder for retrieving one `EmployeeProfileSectionConfig` entity based on its keys.
   * @param employeeProfilePageConfigCode Key property. See [[EmployeeProfileSectionConfig.employeeProfilePageConfigCode]].
   * @param code Key property. See [[EmployeeProfileSectionConfig.code]].
   * @returns A request builder for creating requests to retrieve one `EmployeeProfileSectionConfig` entity based on its keys.
   */
  getByKey(employeeProfilePageConfigCode: string, code: string): GetByKeyRequestBuilder<EmployeeProfileSectionConfig> {
    return new GetByKeyRequestBuilder(EmployeeProfileSectionConfig, {
      EmployeeProfilePageConfig_code: employeeProfilePageConfigCode,
      code: code
    });
  }

  /**
   * Returns a request builder for querying all `EmployeeProfileSectionConfig` entities.
   * @returns A request builder for creating requests to retrieve all `EmployeeProfileSectionConfig` entities.
   */
  getAll(): GetAllRequestBuilder<EmployeeProfileSectionConfig> {
    return new GetAllRequestBuilder(EmployeeProfileSectionConfig);
  }
}

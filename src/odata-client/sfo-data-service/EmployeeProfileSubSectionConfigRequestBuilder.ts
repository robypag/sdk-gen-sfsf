/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder } from '@sap-cloud-sdk/core';
import { EmployeeProfileSubSectionConfig } from './EmployeeProfileSubSectionConfig';

/**
 * Request builder class for operations supported on the [[EmployeeProfileSubSectionConfig]] entity.
 */
export class EmployeeProfileSubSectionConfigRequestBuilder extends RequestBuilder<EmployeeProfileSubSectionConfig> {
  /**
   * Returns a request builder for retrieving one `EmployeeProfileSubSectionConfig` entity based on its keys.
   * @param employeeProfilePageConfigCode Key property. See [[EmployeeProfileSubSectionConfig.employeeProfilePageConfigCode]].
   * @param employeeProfileSectionConfigCode Key property. See [[EmployeeProfileSubSectionConfig.employeeProfileSectionConfigCode]].
   * @param code Key property. See [[EmployeeProfileSubSectionConfig.code]].
   * @returns A request builder for creating requests to retrieve one `EmployeeProfileSubSectionConfig` entity based on its keys.
   */
  getByKey(employeeProfilePageConfigCode: string, employeeProfileSectionConfigCode: string, code: string): GetByKeyRequestBuilder<EmployeeProfileSubSectionConfig> {
    return new GetByKeyRequestBuilder(EmployeeProfileSubSectionConfig, {
      EmployeeProfilePageConfig_code: employeeProfilePageConfigCode,
      EmployeeProfileSectionConfig_code: employeeProfileSectionConfigCode,
      code: code
    });
  }

  /**
   * Returns a request builder for querying all `EmployeeProfileSubSectionConfig` entities.
   * @returns A request builder for creating requests to retrieve all `EmployeeProfileSubSectionConfig` entities.
   */
  getAll(): GetAllRequestBuilder<EmployeeProfileSubSectionConfig> {
    return new GetAllRequestBuilder(EmployeeProfileSubSectionConfig);
  }
}

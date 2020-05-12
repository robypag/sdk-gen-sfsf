/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder } from '@sap-cloud-sdk/core';
import { EmployeeProfileFieldConfig } from './EmployeeProfileFieldConfig';

/**
 * Request builder class for operations supported on the [[EmployeeProfileFieldConfig]] entity.
 */
export class EmployeeProfileFieldConfigRequestBuilder extends RequestBuilder<EmployeeProfileFieldConfig> {
  /**
   * Returns a request builder for retrieving one `EmployeeProfileFieldConfig` entity based on its keys.
   * @param employeeProfileBlockContentCode Key property. See [[EmployeeProfileFieldConfig.employeeProfileBlockContentCode]].
   * @param employeeProfilePageConfigCode Key property. See [[EmployeeProfileFieldConfig.employeeProfilePageConfigCode]].
   * @param employeeProfileSectionConfigCode Key property. See [[EmployeeProfileFieldConfig.employeeProfileSectionConfigCode]].
   * @param employeeProfileSubSectionConfigCode Key property. See [[EmployeeProfileFieldConfig.employeeProfileSubSectionConfigCode]].
   * @param code Key property. See [[EmployeeProfileFieldConfig.code]].
   * @returns A request builder for creating requests to retrieve one `EmployeeProfileFieldConfig` entity based on its keys.
   */
  getByKey(employeeProfileBlockContentCode: string, employeeProfilePageConfigCode: string, employeeProfileSectionConfigCode: string, employeeProfileSubSectionConfigCode: string, code: string): GetByKeyRequestBuilder<EmployeeProfileFieldConfig> {
    return new GetByKeyRequestBuilder(EmployeeProfileFieldConfig, {
      EmployeeProfileBlockContent_code: employeeProfileBlockContentCode,
      EmployeeProfilePageConfig_code: employeeProfilePageConfigCode,
      EmployeeProfileSectionConfig_code: employeeProfileSectionConfigCode,
      EmployeeProfileSubSectionConfig_code: employeeProfileSubSectionConfigCode,
      code: code
    });
  }

  /**
   * Returns a request builder for querying all `EmployeeProfileFieldConfig` entities.
   * @returns A request builder for creating requests to retrieve all `EmployeeProfileFieldConfig` entities.
   */
  getAll(): GetAllRequestBuilder<EmployeeProfileFieldConfig> {
    return new GetAllRequestBuilder(EmployeeProfileFieldConfig);
  }
}

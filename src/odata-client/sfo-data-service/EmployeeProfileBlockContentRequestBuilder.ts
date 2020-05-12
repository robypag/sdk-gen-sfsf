/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder } from '@sap-cloud-sdk/core';
import { EmployeeProfileBlockContent } from './EmployeeProfileBlockContent';

/**
 * Request builder class for operations supported on the [[EmployeeProfileBlockContent]] entity.
 */
export class EmployeeProfileBlockContentRequestBuilder extends RequestBuilder<EmployeeProfileBlockContent> {
  /**
   * Returns a request builder for retrieving one `EmployeeProfileBlockContent` entity based on its keys.
   * @param employeeProfilePageConfigCode Key property. See [[EmployeeProfileBlockContent.employeeProfilePageConfigCode]].
   * @param employeeProfileSectionConfigCode Key property. See [[EmployeeProfileBlockContent.employeeProfileSectionConfigCode]].
   * @param employeeProfileSubSectionConfigCode Key property. See [[EmployeeProfileBlockContent.employeeProfileSubSectionConfigCode]].
   * @param code Key property. See [[EmployeeProfileBlockContent.code]].
   * @returns A request builder for creating requests to retrieve one `EmployeeProfileBlockContent` entity based on its keys.
   */
  getByKey(employeeProfilePageConfigCode: string, employeeProfileSectionConfigCode: string, employeeProfileSubSectionConfigCode: string, code: string): GetByKeyRequestBuilder<EmployeeProfileBlockContent> {
    return new GetByKeyRequestBuilder(EmployeeProfileBlockContent, {
      EmployeeProfilePageConfig_code: employeeProfilePageConfigCode,
      EmployeeProfileSectionConfig_code: employeeProfileSectionConfigCode,
      EmployeeProfileSubSectionConfig_code: employeeProfileSubSectionConfigCode,
      code: code
    });
  }

  /**
   * Returns a request builder for querying all `EmployeeProfileBlockContent` entities.
   * @returns A request builder for creating requests to retrieve all `EmployeeProfileBlockContent` entities.
   */
  getAll(): GetAllRequestBuilder<EmployeeProfileBlockContent> {
    return new GetAllRequestBuilder(EmployeeProfileBlockContent);
  }
}

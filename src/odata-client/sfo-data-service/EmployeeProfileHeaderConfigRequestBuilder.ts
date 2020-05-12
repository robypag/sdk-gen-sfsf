/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder } from '@sap-cloud-sdk/core';
import { EmployeeProfileHeaderConfig } from './EmployeeProfileHeaderConfig';

/**
 * Request builder class for operations supported on the [[EmployeeProfileHeaderConfig]] entity.
 */
export class EmployeeProfileHeaderConfigRequestBuilder extends RequestBuilder<EmployeeProfileHeaderConfig> {
  /**
   * Returns a request builder for retrieving one `EmployeeProfileHeaderConfig` entity based on its keys.
   * @param employeeProfilePageConfigCode Key property. See [[EmployeeProfileHeaderConfig.employeeProfilePageConfigCode]].
   * @param code Key property. See [[EmployeeProfileHeaderConfig.code]].
   * @returns A request builder for creating requests to retrieve one `EmployeeProfileHeaderConfig` entity based on its keys.
   */
  getByKey(employeeProfilePageConfigCode: string, code: string): GetByKeyRequestBuilder<EmployeeProfileHeaderConfig> {
    return new GetByKeyRequestBuilder(EmployeeProfileHeaderConfig, {
      EmployeeProfilePageConfig_code: employeeProfilePageConfigCode,
      code: code
    });
  }

  /**
   * Returns a request builder for querying all `EmployeeProfileHeaderConfig` entities.
   * @returns A request builder for creating requests to retrieve all `EmployeeProfileHeaderConfig` entities.
   */
  getAll(): GetAllRequestBuilder<EmployeeProfileHeaderConfig> {
    return new GetAllRequestBuilder(EmployeeProfileHeaderConfig);
  }
}

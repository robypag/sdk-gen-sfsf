/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder } from '@sap-cloud-sdk/core';
import { EmployeeTimeValuationResult } from './EmployeeTimeValuationResult';

/**
 * Request builder class for operations supported on the [[EmployeeTimeValuationResult]] entity.
 */
export class EmployeeTimeValuationResultRequestBuilder extends RequestBuilder<EmployeeTimeValuationResult> {
  /**
   * Returns a request builder for retrieving one `EmployeeTimeValuationResult` entity based on its keys.
   * @param employeeTimeSheetExternalCode Key property. See [[EmployeeTimeValuationResult.employeeTimeSheetExternalCode]].
   * @param externalCode Key property. See [[EmployeeTimeValuationResult.externalCode]].
   * @returns A request builder for creating requests to retrieve one `EmployeeTimeValuationResult` entity based on its keys.
   */
  getByKey(employeeTimeSheetExternalCode: string, externalCode: string): GetByKeyRequestBuilder<EmployeeTimeValuationResult> {
    return new GetByKeyRequestBuilder(EmployeeTimeValuationResult, {
      EmployeeTimeSheet_externalCode: employeeTimeSheetExternalCode,
      externalCode: externalCode
    });
  }

  /**
   * Returns a request builder for querying all `EmployeeTimeValuationResult` entities.
   * @returns A request builder for creating requests to retrieve all `EmployeeTimeValuationResult` entities.
   */
  getAll(): GetAllRequestBuilder<EmployeeTimeValuationResult> {
    return new GetAllRequestBuilder(EmployeeTimeValuationResult);
  }
}

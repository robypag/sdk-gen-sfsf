/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder } from '@sap-cloud-sdk/core';
import { EmployeeTimeSheetEntry } from './EmployeeTimeSheetEntry';

/**
 * Request builder class for operations supported on the [[EmployeeTimeSheetEntry]] entity.
 */
export class EmployeeTimeSheetEntryRequestBuilder extends RequestBuilder<EmployeeTimeSheetEntry> {
  /**
   * Returns a request builder for retrieving one `EmployeeTimeSheetEntry` entity based on its keys.
   * @param employeeTimeSheetExternalCode Key property. See [[EmployeeTimeSheetEntry.employeeTimeSheetExternalCode]].
   * @param externalCode Key property. See [[EmployeeTimeSheetEntry.externalCode]].
   * @returns A request builder for creating requests to retrieve one `EmployeeTimeSheetEntry` entity based on its keys.
   */
  getByKey(employeeTimeSheetExternalCode: string, externalCode: string): GetByKeyRequestBuilder<EmployeeTimeSheetEntry> {
    return new GetByKeyRequestBuilder(EmployeeTimeSheetEntry, {
      EmployeeTimeSheet_externalCode: employeeTimeSheetExternalCode,
      externalCode: externalCode
    });
  }

  /**
   * Returns a request builder for querying all `EmployeeTimeSheetEntry` entities.
   * @returns A request builder for creating requests to retrieve all `EmployeeTimeSheetEntry` entities.
   */
  getAll(): GetAllRequestBuilder<EmployeeTimeSheetEntry> {
    return new GetAllRequestBuilder(EmployeeTimeSheetEntry);
  }
}

/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder } from '@sap-cloud-sdk/core';
import { EmployeeTimeSheet } from './EmployeeTimeSheet';

/**
 * Request builder class for operations supported on the [[EmployeeTimeSheet]] entity.
 */
export class EmployeeTimeSheetRequestBuilder extends RequestBuilder<EmployeeTimeSheet> {
  /**
   * Returns a request builder for retrieving one `EmployeeTimeSheet` entity based on its keys.
   * @param externalCode Key property. See [[EmployeeTimeSheet.externalCode]].
   * @returns A request builder for creating requests to retrieve one `EmployeeTimeSheet` entity based on its keys.
   */
  getByKey(externalCode: string): GetByKeyRequestBuilder<EmployeeTimeSheet> {
    return new GetByKeyRequestBuilder(EmployeeTimeSheet, { externalCode: externalCode });
  }

  /**
   * Returns a request builder for querying all `EmployeeTimeSheet` entities.
   * @returns A request builder for creating requests to retrieve all `EmployeeTimeSheet` entities.
   */
  getAll(): GetAllRequestBuilder<EmployeeTimeSheet> {
    return new GetAllRequestBuilder(EmployeeTimeSheet);
  }
}

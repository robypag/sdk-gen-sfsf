/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder } from '@sap-cloud-sdk/core';
import { EmployeeDataReplicationConfirmationErrorMessage } from './EmployeeDataReplicationConfirmationErrorMessage';

/**
 * Request builder class for operations supported on the [[EmployeeDataReplicationConfirmationErrorMessage]] entity.
 */
export class EmployeeDataReplicationConfirmationErrorMessageRequestBuilder extends RequestBuilder<EmployeeDataReplicationConfirmationErrorMessage> {
  /**
   * Returns a request builder for retrieving one `EmployeeDataReplicationConfirmationErrorMessage` entity based on its keys.
   * @param employeeDataReplicationConfirmationExternalCode Key property. See [[EmployeeDataReplicationConfirmationErrorMessage.employeeDataReplicationConfirmationExternalCode]].
   * @param externalCode Key property. See [[EmployeeDataReplicationConfirmationErrorMessage.externalCode]].
   * @returns A request builder for creating requests to retrieve one `EmployeeDataReplicationConfirmationErrorMessage` entity based on its keys.
   */
  getByKey(employeeDataReplicationConfirmationExternalCode: string, externalCode: string): GetByKeyRequestBuilder<EmployeeDataReplicationConfirmationErrorMessage> {
    return new GetByKeyRequestBuilder(EmployeeDataReplicationConfirmationErrorMessage, {
      EmployeeDataReplicationConfirmation_externalCode: employeeDataReplicationConfirmationExternalCode,
      externalCode: externalCode
    });
  }

  /**
   * Returns a request builder for querying all `EmployeeDataReplicationConfirmationErrorMessage` entities.
   * @returns A request builder for creating requests to retrieve all `EmployeeDataReplicationConfirmationErrorMessage` entities.
   */
  getAll(): GetAllRequestBuilder<EmployeeDataReplicationConfirmationErrorMessage> {
    return new GetAllRequestBuilder(EmployeeDataReplicationConfirmationErrorMessage);
  }

  /**
   * Returns a request builder for creating a `EmployeeDataReplicationConfirmationErrorMessage` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `EmployeeDataReplicationConfirmationErrorMessage`.
   */
  create(entity: EmployeeDataReplicationConfirmationErrorMessage): CreateRequestBuilder<EmployeeDataReplicationConfirmationErrorMessage> {
    return new CreateRequestBuilder(EmployeeDataReplicationConfirmationErrorMessage, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `EmployeeDataReplicationConfirmationErrorMessage`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `EmployeeDataReplicationConfirmationErrorMessage`.
   */
  update(entity: EmployeeDataReplicationConfirmationErrorMessage): UpdateRequestBuilder<EmployeeDataReplicationConfirmationErrorMessage> {
    return new UpdateRequestBuilder(EmployeeDataReplicationConfirmationErrorMessage, entity);
  }
}

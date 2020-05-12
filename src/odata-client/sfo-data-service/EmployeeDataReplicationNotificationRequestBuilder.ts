/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder } from '@sap-cloud-sdk/core';
import { EmployeeDataReplicationNotification } from './EmployeeDataReplicationNotification';

/**
 * Request builder class for operations supported on the [[EmployeeDataReplicationNotification]] entity.
 */
export class EmployeeDataReplicationNotificationRequestBuilder extends RequestBuilder<EmployeeDataReplicationNotification> {
  /**
   * Returns a request builder for retrieving one `EmployeeDataReplicationNotification` entity based on its keys.
   * @param externalCode Key property. See [[EmployeeDataReplicationNotification.externalCode]].
   * @returns A request builder for creating requests to retrieve one `EmployeeDataReplicationNotification` entity based on its keys.
   */
  getByKey(externalCode: string): GetByKeyRequestBuilder<EmployeeDataReplicationNotification> {
    return new GetByKeyRequestBuilder(EmployeeDataReplicationNotification, { externalCode: externalCode });
  }

  /**
   * Returns a request builder for querying all `EmployeeDataReplicationNotification` entities.
   * @returns A request builder for creating requests to retrieve all `EmployeeDataReplicationNotification` entities.
   */
  getAll(): GetAllRequestBuilder<EmployeeDataReplicationNotification> {
    return new GetAllRequestBuilder(EmployeeDataReplicationNotification);
  }

  /**
   * Returns a request builder for creating a `EmployeeDataReplicationNotification` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `EmployeeDataReplicationNotification`.
   */
  create(entity: EmployeeDataReplicationNotification): CreateRequestBuilder<EmployeeDataReplicationNotification> {
    return new CreateRequestBuilder(EmployeeDataReplicationNotification, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `EmployeeDataReplicationNotification`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `EmployeeDataReplicationNotification`.
   */
  update(entity: EmployeeDataReplicationNotification): UpdateRequestBuilder<EmployeeDataReplicationNotification> {
    return new UpdateRequestBuilder(EmployeeDataReplicationNotification, entity);
  }
}

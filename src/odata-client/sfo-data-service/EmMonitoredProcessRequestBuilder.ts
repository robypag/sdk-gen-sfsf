/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder } from '@sap-cloud-sdk/core';
import { EmMonitoredProcess } from './EmMonitoredProcess';

/**
 * Request builder class for operations supported on the [[EmMonitoredProcess]] entity.
 */
export class EmMonitoredProcessRequestBuilder extends RequestBuilder<EmMonitoredProcess> {
  /**
   * Returns a request builder for retrieving one `EmMonitoredProcess` entity based on its keys.
   * @param processDefinitionId Key property. See [[EmMonitoredProcess.processDefinitionId]].
   * @param processInstanceId Key property. See [[EmMonitoredProcess.processInstanceId]].
   * @param processType Key property. See [[EmMonitoredProcess.processType]].
   * @returns A request builder for creating requests to retrieve one `EmMonitoredProcess` entity based on its keys.
   */
  getByKey(processDefinitionId: string, processInstanceId: string, processType: string): GetByKeyRequestBuilder<EmMonitoredProcess> {
    return new GetByKeyRequestBuilder(EmMonitoredProcess, {
      processDefinitionId: processDefinitionId,
      processInstanceId: processInstanceId,
      processType: processType
    });
  }

  /**
   * Returns a request builder for querying all `EmMonitoredProcess` entities.
   * @returns A request builder for creating requests to retrieve all `EmMonitoredProcess` entities.
   */
  getAll(): GetAllRequestBuilder<EmMonitoredProcess> {
    return new GetAllRequestBuilder(EmMonitoredProcess);
  }

  /**
   * Returns a request builder for creating a `EmMonitoredProcess` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `EmMonitoredProcess`.
   */
  create(entity: EmMonitoredProcess): CreateRequestBuilder<EmMonitoredProcess> {
    return new CreateRequestBuilder(EmMonitoredProcess, entity);
  }
}

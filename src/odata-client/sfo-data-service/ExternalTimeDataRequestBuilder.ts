/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder } from '@sap-cloud-sdk/core';
import { ExternalTimeData } from './ExternalTimeData';

/**
 * Request builder class for operations supported on the [[ExternalTimeData]] entity.
 */
export class ExternalTimeDataRequestBuilder extends RequestBuilder<ExternalTimeData> {
  /**
   * Returns a request builder for retrieving one `ExternalTimeData` entity based on its keys.
   * @param externalCode Key property. See [[ExternalTimeData.externalCode]].
   * @returns A request builder for creating requests to retrieve one `ExternalTimeData` entity based on its keys.
   */
  getByKey(externalCode: string): GetByKeyRequestBuilder<ExternalTimeData> {
    return new GetByKeyRequestBuilder(ExternalTimeData, { externalCode: externalCode });
  }

  /**
   * Returns a request builder for querying all `ExternalTimeData` entities.
   * @returns A request builder for creating requests to retrieve all `ExternalTimeData` entities.
   */
  getAll(): GetAllRequestBuilder<ExternalTimeData> {
    return new GetAllRequestBuilder(ExternalTimeData);
  }

  /**
   * Returns a request builder for creating a `ExternalTimeData` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ExternalTimeData`.
   */
  create(entity: ExternalTimeData): CreateRequestBuilder<ExternalTimeData> {
    return new CreateRequestBuilder(ExternalTimeData, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `ExternalTimeData`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ExternalTimeData`.
   */
  update(entity: ExternalTimeData): UpdateRequestBuilder<ExternalTimeData> {
    return new UpdateRequestBuilder(ExternalTimeData, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `ExternalTimeData`.
   * @param externalCode Key property. See [[ExternalTimeData.externalCode]].
   * @returns A request builder for creating requests that delete an entity of type `ExternalTimeData`.
   */
  delete(externalCode: string): DeleteRequestBuilder<ExternalTimeData>;
  /**
   * Returns a request builder for deleting an entity of type `ExternalTimeData`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ExternalTimeData` by taking the entity as a parameter.
   */
  delete(entity: ExternalTimeData): DeleteRequestBuilder<ExternalTimeData>;
  delete(externalCodeOrEntity: any): DeleteRequestBuilder<ExternalTimeData> {
    return new DeleteRequestBuilder(ExternalTimeData, externalCodeOrEntity instanceof ExternalTimeData ? externalCodeOrEntity : { externalCode: externalCodeOrEntity! });
  }
}

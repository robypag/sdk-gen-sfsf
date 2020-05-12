/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder } from '@sap-cloud-sdk/core';
import { SapSystemConfiguration } from './SapSystemConfiguration';

/**
 * Request builder class for operations supported on the [[SapSystemConfiguration]] entity.
 */
export class SapSystemConfigurationRequestBuilder extends RequestBuilder<SapSystemConfiguration> {
  /**
   * Returns a request builder for retrieving one `SapSystemConfiguration` entity based on its keys.
   * @param externalCode Key property. See [[SapSystemConfiguration.externalCode]].
   * @returns A request builder for creating requests to retrieve one `SapSystemConfiguration` entity based on its keys.
   */
  getByKey(externalCode: string): GetByKeyRequestBuilder<SapSystemConfiguration> {
    return new GetByKeyRequestBuilder(SapSystemConfiguration, { externalCode: externalCode });
  }

  /**
   * Returns a request builder for querying all `SapSystemConfiguration` entities.
   * @returns A request builder for creating requests to retrieve all `SapSystemConfiguration` entities.
   */
  getAll(): GetAllRequestBuilder<SapSystemConfiguration> {
    return new GetAllRequestBuilder(SapSystemConfiguration);
  }

  /**
   * Returns a request builder for creating a `SapSystemConfiguration` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `SapSystemConfiguration`.
   */
  create(entity: SapSystemConfiguration): CreateRequestBuilder<SapSystemConfiguration> {
    return new CreateRequestBuilder(SapSystemConfiguration, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `SapSystemConfiguration`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `SapSystemConfiguration`.
   */
  update(entity: SapSystemConfiguration): UpdateRequestBuilder<SapSystemConfiguration> {
    return new UpdateRequestBuilder(SapSystemConfiguration, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `SapSystemConfiguration`.
   * @param externalCode Key property. See [[SapSystemConfiguration.externalCode]].
   * @returns A request builder for creating requests that delete an entity of type `SapSystemConfiguration`.
   */
  delete(externalCode: string): DeleteRequestBuilder<SapSystemConfiguration>;
  /**
   * Returns a request builder for deleting an entity of type `SapSystemConfiguration`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `SapSystemConfiguration` by taking the entity as a parameter.
   */
  delete(entity: SapSystemConfiguration): DeleteRequestBuilder<SapSystemConfiguration>;
  delete(externalCodeOrEntity: any): DeleteRequestBuilder<SapSystemConfiguration> {
    return new DeleteRequestBuilder(SapSystemConfiguration, externalCodeOrEntity instanceof SapSystemConfiguration ? externalCodeOrEntity : { externalCode: externalCodeOrEntity! });
  }
}

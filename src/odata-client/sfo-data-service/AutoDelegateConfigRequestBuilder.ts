/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder } from '@sap-cloud-sdk/core';
import { AutoDelegateConfig } from './AutoDelegateConfig';

/**
 * Request builder class for operations supported on the [[AutoDelegateConfig]] entity.
 */
export class AutoDelegateConfigRequestBuilder extends RequestBuilder<AutoDelegateConfig> {
  /**
   * Returns a request builder for retrieving one `AutoDelegateConfig` entity based on its keys.
   * @param delegator Key property. See [[AutoDelegateConfig.delegator]].
   * @returns A request builder for creating requests to retrieve one `AutoDelegateConfig` entity based on its keys.
   */
  getByKey(delegator: string): GetByKeyRequestBuilder<AutoDelegateConfig> {
    return new GetByKeyRequestBuilder(AutoDelegateConfig, { delegator: delegator });
  }

  /**
   * Returns a request builder for querying all `AutoDelegateConfig` entities.
   * @returns A request builder for creating requests to retrieve all `AutoDelegateConfig` entities.
   */
  getAll(): GetAllRequestBuilder<AutoDelegateConfig> {
    return new GetAllRequestBuilder(AutoDelegateConfig);
  }

  /**
   * Returns a request builder for creating a `AutoDelegateConfig` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `AutoDelegateConfig`.
   */
  create(entity: AutoDelegateConfig): CreateRequestBuilder<AutoDelegateConfig> {
    return new CreateRequestBuilder(AutoDelegateConfig, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `AutoDelegateConfig`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `AutoDelegateConfig`.
   */
  update(entity: AutoDelegateConfig): UpdateRequestBuilder<AutoDelegateConfig> {
    return new UpdateRequestBuilder(AutoDelegateConfig, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `AutoDelegateConfig`.
   * @param delegator Key property. See [[AutoDelegateConfig.delegator]].
   * @returns A request builder for creating requests that delete an entity of type `AutoDelegateConfig`.
   */
  delete(delegator: string): DeleteRequestBuilder<AutoDelegateConfig>;
  /**
   * Returns a request builder for deleting an entity of type `AutoDelegateConfig`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `AutoDelegateConfig` by taking the entity as a parameter.
   */
  delete(entity: AutoDelegateConfig): DeleteRequestBuilder<AutoDelegateConfig>;
  delete(delegatorOrEntity: any): DeleteRequestBuilder<AutoDelegateConfig> {
    return new DeleteRequestBuilder(AutoDelegateConfig, delegatorOrEntity instanceof AutoDelegateConfig ? delegatorOrEntity : { delegator: delegatorOrEntity! });
  }
}

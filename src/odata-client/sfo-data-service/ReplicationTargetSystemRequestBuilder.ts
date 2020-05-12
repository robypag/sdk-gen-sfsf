/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder } from '@sap-cloud-sdk/core';
import { ReplicationTargetSystem } from './ReplicationTargetSystem';

/**
 * Request builder class for operations supported on the [[ReplicationTargetSystem]] entity.
 */
export class ReplicationTargetSystemRequestBuilder extends RequestBuilder<ReplicationTargetSystem> {
  /**
   * Returns a request builder for retrieving one `ReplicationTargetSystem` entity based on its keys.
   * @param externalCode Key property. See [[ReplicationTargetSystem.externalCode]].
   * @returns A request builder for creating requests to retrieve one `ReplicationTargetSystem` entity based on its keys.
   */
  getByKey(externalCode: string): GetByKeyRequestBuilder<ReplicationTargetSystem> {
    return new GetByKeyRequestBuilder(ReplicationTargetSystem, { externalCode: externalCode });
  }

  /**
   * Returns a request builder for querying all `ReplicationTargetSystem` entities.
   * @returns A request builder for creating requests to retrieve all `ReplicationTargetSystem` entities.
   */
  getAll(): GetAllRequestBuilder<ReplicationTargetSystem> {
    return new GetAllRequestBuilder(ReplicationTargetSystem);
  }

  /**
   * Returns a request builder for creating a `ReplicationTargetSystem` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ReplicationTargetSystem`.
   */
  create(entity: ReplicationTargetSystem): CreateRequestBuilder<ReplicationTargetSystem> {
    return new CreateRequestBuilder(ReplicationTargetSystem, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `ReplicationTargetSystem`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `ReplicationTargetSystem`.
   */
  update(entity: ReplicationTargetSystem): UpdateRequestBuilder<ReplicationTargetSystem> {
    return new UpdateRequestBuilder(ReplicationTargetSystem, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `ReplicationTargetSystem`.
   * @param externalCode Key property. See [[ReplicationTargetSystem.externalCode]].
   * @returns A request builder for creating requests that delete an entity of type `ReplicationTargetSystem`.
   */
  delete(externalCode: string): DeleteRequestBuilder<ReplicationTargetSystem>;
  /**
   * Returns a request builder for deleting an entity of type `ReplicationTargetSystem`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `ReplicationTargetSystem` by taking the entity as a parameter.
   */
  delete(entity: ReplicationTargetSystem): DeleteRequestBuilder<ReplicationTargetSystem>;
  delete(externalCodeOrEntity: any): DeleteRequestBuilder<ReplicationTargetSystem> {
    return new DeleteRequestBuilder(ReplicationTargetSystem, externalCodeOrEntity instanceof ReplicationTargetSystem ? externalCodeOrEntity : { externalCode: externalCodeOrEntity! });
  }
}

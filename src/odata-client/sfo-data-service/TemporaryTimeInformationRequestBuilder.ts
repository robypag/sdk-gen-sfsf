/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder } from '@sap-cloud-sdk/core';
import { TemporaryTimeInformation } from './TemporaryTimeInformation';

/**
 * Request builder class for operations supported on the [[TemporaryTimeInformation]] entity.
 */
export class TemporaryTimeInformationRequestBuilder extends RequestBuilder<TemporaryTimeInformation> {
  /**
   * Returns a request builder for retrieving one `TemporaryTimeInformation` entity based on its keys.
   * @param externalCode Key property. See [[TemporaryTimeInformation.externalCode]].
   * @returns A request builder for creating requests to retrieve one `TemporaryTimeInformation` entity based on its keys.
   */
  getByKey(externalCode: string): GetByKeyRequestBuilder<TemporaryTimeInformation> {
    return new GetByKeyRequestBuilder(TemporaryTimeInformation, { externalCode: externalCode });
  }

  /**
   * Returns a request builder for querying all `TemporaryTimeInformation` entities.
   * @returns A request builder for creating requests to retrieve all `TemporaryTimeInformation` entities.
   */
  getAll(): GetAllRequestBuilder<TemporaryTimeInformation> {
    return new GetAllRequestBuilder(TemporaryTimeInformation);
  }

  /**
   * Returns a request builder for creating a `TemporaryTimeInformation` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `TemporaryTimeInformation`.
   */
  create(entity: TemporaryTimeInformation): CreateRequestBuilder<TemporaryTimeInformation> {
    return new CreateRequestBuilder(TemporaryTimeInformation, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `TemporaryTimeInformation`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `TemporaryTimeInformation`.
   */
  update(entity: TemporaryTimeInformation): UpdateRequestBuilder<TemporaryTimeInformation> {
    return new UpdateRequestBuilder(TemporaryTimeInformation, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `TemporaryTimeInformation`.
   * @param externalCode Key property. See [[TemporaryTimeInformation.externalCode]].
   * @returns A request builder for creating requests that delete an entity of type `TemporaryTimeInformation`.
   */
  delete(externalCode: string): DeleteRequestBuilder<TemporaryTimeInformation>;
  /**
   * Returns a request builder for deleting an entity of type `TemporaryTimeInformation`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `TemporaryTimeInformation` by taking the entity as a parameter.
   */
  delete(entity: TemporaryTimeInformation): DeleteRequestBuilder<TemporaryTimeInformation>;
  delete(externalCodeOrEntity: any): DeleteRequestBuilder<TemporaryTimeInformation> {
    return new DeleteRequestBuilder(TemporaryTimeInformation, externalCodeOrEntity instanceof TemporaryTimeInformation ? externalCodeOrEntity : { externalCode: externalCodeOrEntity! });
  }
}

/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder } from '@sap-cloud-sdk/core';
import { SpotAwardProgram } from './SpotAwardProgram';

/**
 * Request builder class for operations supported on the [[SpotAwardProgram]] entity.
 */
export class SpotAwardProgramRequestBuilder extends RequestBuilder<SpotAwardProgram> {
  /**
   * Returns a request builder for retrieving one `SpotAwardProgram` entity based on its keys.
   * @param externalCode Key property. See [[SpotAwardProgram.externalCode]].
   * @returns A request builder for creating requests to retrieve one `SpotAwardProgram` entity based on its keys.
   */
  getByKey(externalCode: string): GetByKeyRequestBuilder<SpotAwardProgram> {
    return new GetByKeyRequestBuilder(SpotAwardProgram, { externalCode: externalCode });
  }

  /**
   * Returns a request builder for querying all `SpotAwardProgram` entities.
   * @returns A request builder for creating requests to retrieve all `SpotAwardProgram` entities.
   */
  getAll(): GetAllRequestBuilder<SpotAwardProgram> {
    return new GetAllRequestBuilder(SpotAwardProgram);
  }

  /**
   * Returns a request builder for creating a `SpotAwardProgram` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `SpotAwardProgram`.
   */
  create(entity: SpotAwardProgram): CreateRequestBuilder<SpotAwardProgram> {
    return new CreateRequestBuilder(SpotAwardProgram, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `SpotAwardProgram`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `SpotAwardProgram`.
   */
  update(entity: SpotAwardProgram): UpdateRequestBuilder<SpotAwardProgram> {
    return new UpdateRequestBuilder(SpotAwardProgram, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `SpotAwardProgram`.
   * @param externalCode Key property. See [[SpotAwardProgram.externalCode]].
   * @returns A request builder for creating requests that delete an entity of type `SpotAwardProgram`.
   */
  delete(externalCode: string): DeleteRequestBuilder<SpotAwardProgram>;
  /**
   * Returns a request builder for deleting an entity of type `SpotAwardProgram`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `SpotAwardProgram` by taking the entity as a parameter.
   */
  delete(entity: SpotAwardProgram): DeleteRequestBuilder<SpotAwardProgram>;
  delete(externalCodeOrEntity: any): DeleteRequestBuilder<SpotAwardProgram> {
    return new DeleteRequestBuilder(SpotAwardProgram, externalCodeOrEntity instanceof SpotAwardProgram ? externalCodeOrEntity : { externalCode: externalCodeOrEntity! });
  }
}

/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BigNumber } from 'bignumber.js';
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder } from '@sap-cloud-sdk/core';
import { CompetencyType } from './CompetencyType';

/**
 * Request builder class for operations supported on the [[CompetencyType]] entity.
 */
export class CompetencyTypeRequestBuilder extends RequestBuilder<CompetencyType> {
  /**
   * Returns a request builder for retrieving one `CompetencyType` entity based on its keys.
   * @param guid Key property. See [[CompetencyType.guid]].
   * @returns A request builder for creating requests to retrieve one `CompetencyType` entity based on its keys.
   */
  getByKey(guid: BigNumber): GetByKeyRequestBuilder<CompetencyType> {
    return new GetByKeyRequestBuilder(CompetencyType, { GUID: guid });
  }

  /**
   * Returns a request builder for querying all `CompetencyType` entities.
   * @returns A request builder for creating requests to retrieve all `CompetencyType` entities.
   */
  getAll(): GetAllRequestBuilder<CompetencyType> {
    return new GetAllRequestBuilder(CompetencyType);
  }

  /**
   * Returns a request builder for creating a `CompetencyType` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `CompetencyType`.
   */
  create(entity: CompetencyType): CreateRequestBuilder<CompetencyType> {
    return new CreateRequestBuilder(CompetencyType, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `CompetencyType`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `CompetencyType`.
   */
  update(entity: CompetencyType): UpdateRequestBuilder<CompetencyType> {
    return new UpdateRequestBuilder(CompetencyType, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `CompetencyType`.
   * @param guid Key property. See [[CompetencyType.guid]].
   * @returns A request builder for creating requests that delete an entity of type `CompetencyType`.
   */
  delete(guid: BigNumber): DeleteRequestBuilder<CompetencyType>;
  /**
   * Returns a request builder for deleting an entity of type `CompetencyType`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `CompetencyType` by taking the entity as a parameter.
   */
  delete(entity: CompetencyType): DeleteRequestBuilder<CompetencyType>;
  delete(guidOrEntity: any): DeleteRequestBuilder<CompetencyType> {
    return new DeleteRequestBuilder(CompetencyType, guidOrEntity instanceof CompetencyType ? guidOrEntity : { GUID: guidOrEntity! });
  }
}

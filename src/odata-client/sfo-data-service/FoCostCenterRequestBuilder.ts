/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Moment } from 'moment';
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder } from '@sap-cloud-sdk/core';
import { FoCostCenter } from './FoCostCenter';

/**
 * Request builder class for operations supported on the [[FoCostCenter]] entity.
 */
export class FoCostCenterRequestBuilder extends RequestBuilder<FoCostCenter> {
  /**
   * Returns a request builder for retrieving one `FoCostCenter` entity based on its keys.
   * @param externalCode Key property. See [[FoCostCenter.externalCode]].
   * @param startDate Key property. See [[FoCostCenter.startDate]].
   * @returns A request builder for creating requests to retrieve one `FoCostCenter` entity based on its keys.
   */
  getByKey(externalCode: string, startDate: Moment): GetByKeyRequestBuilder<FoCostCenter> {
    return new GetByKeyRequestBuilder(FoCostCenter, {
      externalCode: externalCode,
      startDate: startDate
    });
  }

  /**
   * Returns a request builder for querying all `FoCostCenter` entities.
   * @returns A request builder for creating requests to retrieve all `FoCostCenter` entities.
   */
  getAll(): GetAllRequestBuilder<FoCostCenter> {
    return new GetAllRequestBuilder(FoCostCenter);
  }

  /**
   * Returns a request builder for creating a `FoCostCenter` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `FoCostCenter`.
   */
  create(entity: FoCostCenter): CreateRequestBuilder<FoCostCenter> {
    return new CreateRequestBuilder(FoCostCenter, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `FoCostCenter`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `FoCostCenter`.
   */
  update(entity: FoCostCenter): UpdateRequestBuilder<FoCostCenter> {
    return new UpdateRequestBuilder(FoCostCenter, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `FoCostCenter`.
   * @param externalCode Key property. See [[FoCostCenter.externalCode]].
   * @param startDate Key property. See [[FoCostCenter.startDate]].
   * @returns A request builder for creating requests that delete an entity of type `FoCostCenter`.
   */
  delete(externalCode: string, startDate: Moment): DeleteRequestBuilder<FoCostCenter>;
  /**
   * Returns a request builder for deleting an entity of type `FoCostCenter`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `FoCostCenter` by taking the entity as a parameter.
   */
  delete(entity: FoCostCenter): DeleteRequestBuilder<FoCostCenter>;
  delete(externalCodeOrEntity: any, startDate?: Moment): DeleteRequestBuilder<FoCostCenter> {
    return new DeleteRequestBuilder(FoCostCenter, externalCodeOrEntity instanceof FoCostCenter ? externalCodeOrEntity : {
      externalCode: externalCodeOrEntity!,
      startDate: startDate!
    });
  }
}

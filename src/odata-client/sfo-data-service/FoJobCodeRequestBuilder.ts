/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Moment } from 'moment';
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder } from '@sap-cloud-sdk/core';
import { FoJobCode } from './FoJobCode';

/**
 * Request builder class for operations supported on the [[FoJobCode]] entity.
 */
export class FoJobCodeRequestBuilder extends RequestBuilder<FoJobCode> {
  /**
   * Returns a request builder for retrieving one `FoJobCode` entity based on its keys.
   * @param externalCode Key property. See [[FoJobCode.externalCode]].
   * @param startDate Key property. See [[FoJobCode.startDate]].
   * @returns A request builder for creating requests to retrieve one `FoJobCode` entity based on its keys.
   */
  getByKey(externalCode: string, startDate: Moment): GetByKeyRequestBuilder<FoJobCode> {
    return new GetByKeyRequestBuilder(FoJobCode, {
      externalCode: externalCode,
      startDate: startDate
    });
  }

  /**
   * Returns a request builder for querying all `FoJobCode` entities.
   * @returns A request builder for creating requests to retrieve all `FoJobCode` entities.
   */
  getAll(): GetAllRequestBuilder<FoJobCode> {
    return new GetAllRequestBuilder(FoJobCode);
  }

  /**
   * Returns a request builder for creating a `FoJobCode` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `FoJobCode`.
   */
  create(entity: FoJobCode): CreateRequestBuilder<FoJobCode> {
    return new CreateRequestBuilder(FoJobCode, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `FoJobCode`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `FoJobCode`.
   */
  update(entity: FoJobCode): UpdateRequestBuilder<FoJobCode> {
    return new UpdateRequestBuilder(FoJobCode, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `FoJobCode`.
   * @param externalCode Key property. See [[FoJobCode.externalCode]].
   * @param startDate Key property. See [[FoJobCode.startDate]].
   * @returns A request builder for creating requests that delete an entity of type `FoJobCode`.
   */
  delete(externalCode: string, startDate: Moment): DeleteRequestBuilder<FoJobCode>;
  /**
   * Returns a request builder for deleting an entity of type `FoJobCode`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `FoJobCode` by taking the entity as a parameter.
   */
  delete(entity: FoJobCode): DeleteRequestBuilder<FoJobCode>;
  delete(externalCodeOrEntity: any, startDate?: Moment): DeleteRequestBuilder<FoJobCode> {
    return new DeleteRequestBuilder(FoJobCode, externalCodeOrEntity instanceof FoJobCode ? externalCodeOrEntity : {
      externalCode: externalCodeOrEntity!,
      startDate: startDate!
    });
  }
}

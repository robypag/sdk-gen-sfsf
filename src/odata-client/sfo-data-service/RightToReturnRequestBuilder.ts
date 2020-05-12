/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Moment } from 'moment';
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder } from '@sap-cloud-sdk/core';
import { RightToReturn } from './RightToReturn';

/**
 * Request builder class for operations supported on the [[RightToReturn]] entity.
 */
export class RightToReturnRequestBuilder extends RequestBuilder<RightToReturn> {
  /**
   * Returns a request builder for retrieving one `RightToReturn` entity based on its keys.
   * @param positionCode Key property. See [[RightToReturn.positionCode]].
   * @param positionEffectiveStartDate Key property. See [[RightToReturn.positionEffectiveStartDate]].
   * @param code Key property. See [[RightToReturn.code]].
   * @returns A request builder for creating requests to retrieve one `RightToReturn` entity based on its keys.
   */
  getByKey(positionCode: string, positionEffectiveStartDate: Moment, code: string): GetByKeyRequestBuilder<RightToReturn> {
    return new GetByKeyRequestBuilder(RightToReturn, {
      Position_code: positionCode,
      Position_effectiveStartDate: positionEffectiveStartDate,
      code: code
    });
  }

  /**
   * Returns a request builder for querying all `RightToReturn` entities.
   * @returns A request builder for creating requests to retrieve all `RightToReturn` entities.
   */
  getAll(): GetAllRequestBuilder<RightToReturn> {
    return new GetAllRequestBuilder(RightToReturn);
  }

  /**
   * Returns a request builder for creating a `RightToReturn` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `RightToReturn`.
   */
  create(entity: RightToReturn): CreateRequestBuilder<RightToReturn> {
    return new CreateRequestBuilder(RightToReturn, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `RightToReturn`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `RightToReturn`.
   */
  update(entity: RightToReturn): UpdateRequestBuilder<RightToReturn> {
    return new UpdateRequestBuilder(RightToReturn, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `RightToReturn`.
   * @param positionCode Key property. See [[RightToReturn.positionCode]].
   * @param positionEffectiveStartDate Key property. See [[RightToReturn.positionEffectiveStartDate]].
   * @param code Key property. See [[RightToReturn.code]].
   * @returns A request builder for creating requests that delete an entity of type `RightToReturn`.
   */
  delete(positionCode: string, positionEffectiveStartDate: Moment, code: string): DeleteRequestBuilder<RightToReturn>;
  /**
   * Returns a request builder for deleting an entity of type `RightToReturn`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `RightToReturn` by taking the entity as a parameter.
   */
  delete(entity: RightToReturn): DeleteRequestBuilder<RightToReturn>;
  delete(positionCodeOrEntity: any, positionEffectiveStartDate?: Moment, code?: string): DeleteRequestBuilder<RightToReturn> {
    return new DeleteRequestBuilder(RightToReturn, positionCodeOrEntity instanceof RightToReturn ? positionCodeOrEntity : {
      Position_code: positionCodeOrEntity!,
      Position_effectiveStartDate: positionEffectiveStartDate!,
      code: code!
    });
  }
}

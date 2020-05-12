/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Moment } from 'moment';
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder } from '@sap-cloud-sdk/core';
import { Position } from './Position';

/**
 * Request builder class for operations supported on the [[Position]] entity.
 */
export class PositionRequestBuilder extends RequestBuilder<Position> {
  /**
   * Returns a request builder for retrieving one `Position` entity based on its keys.
   * @param code Key property. See [[Position.code]].
   * @param effectiveStartDate Key property. See [[Position.effectiveStartDate]].
   * @returns A request builder for creating requests to retrieve one `Position` entity based on its keys.
   */
  getByKey(code: string, effectiveStartDate: Moment): GetByKeyRequestBuilder<Position> {
    return new GetByKeyRequestBuilder(Position, {
      code: code,
      effectiveStartDate: effectiveStartDate
    });
  }

  /**
   * Returns a request builder for querying all `Position` entities.
   * @returns A request builder for creating requests to retrieve all `Position` entities.
   */
  getAll(): GetAllRequestBuilder<Position> {
    return new GetAllRequestBuilder(Position);
  }

  /**
   * Returns a request builder for creating a `Position` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `Position`.
   */
  create(entity: Position): CreateRequestBuilder<Position> {
    return new CreateRequestBuilder(Position, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `Position`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `Position`.
   */
  update(entity: Position): UpdateRequestBuilder<Position> {
    return new UpdateRequestBuilder(Position, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `Position`.
   * @param code Key property. See [[Position.code]].
   * @param effectiveStartDate Key property. See [[Position.effectiveStartDate]].
   * @returns A request builder for creating requests that delete an entity of type `Position`.
   */
  delete(code: string, effectiveStartDate: Moment): DeleteRequestBuilder<Position>;
  /**
   * Returns a request builder for deleting an entity of type `Position`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `Position` by taking the entity as a parameter.
   */
  delete(entity: Position): DeleteRequestBuilder<Position>;
  delete(codeOrEntity: any, effectiveStartDate?: Moment): DeleteRequestBuilder<Position> {
    return new DeleteRequestBuilder(Position, codeOrEntity instanceof Position ? codeOrEntity : {
      code: codeOrEntity!,
      effectiveStartDate: effectiveStartDate!
    });
  }
}

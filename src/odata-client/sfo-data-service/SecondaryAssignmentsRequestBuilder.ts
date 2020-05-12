/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Moment } from 'moment';
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder } from '@sap-cloud-sdk/core';
import { SecondaryAssignments } from './SecondaryAssignments';

/**
 * Request builder class for operations supported on the [[SecondaryAssignments]] entity.
 */
export class SecondaryAssignmentsRequestBuilder extends RequestBuilder<SecondaryAssignments> {
  /**
   * Returns a request builder for retrieving one `SecondaryAssignments` entity based on its keys.
   * @param effectiveStartDate Key property. See [[SecondaryAssignments.effectiveStartDate]].
   * @param externalCode Key property. See [[SecondaryAssignments.externalCode]].
   * @returns A request builder for creating requests to retrieve one `SecondaryAssignments` entity based on its keys.
   */
  getByKey(effectiveStartDate: Moment, externalCode: string): GetByKeyRequestBuilder<SecondaryAssignments> {
    return new GetByKeyRequestBuilder(SecondaryAssignments, {
      effectiveStartDate: effectiveStartDate,
      externalCode: externalCode
    });
  }

  /**
   * Returns a request builder for querying all `SecondaryAssignments` entities.
   * @returns A request builder for creating requests to retrieve all `SecondaryAssignments` entities.
   */
  getAll(): GetAllRequestBuilder<SecondaryAssignments> {
    return new GetAllRequestBuilder(SecondaryAssignments);
  }

  /**
   * Returns a request builder for creating a `SecondaryAssignments` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `SecondaryAssignments`.
   */
  create(entity: SecondaryAssignments): CreateRequestBuilder<SecondaryAssignments> {
    return new CreateRequestBuilder(SecondaryAssignments, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `SecondaryAssignments`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `SecondaryAssignments`.
   */
  update(entity: SecondaryAssignments): UpdateRequestBuilder<SecondaryAssignments> {
    return new UpdateRequestBuilder(SecondaryAssignments, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `SecondaryAssignments`.
   * @param effectiveStartDate Key property. See [[SecondaryAssignments.effectiveStartDate]].
   * @param externalCode Key property. See [[SecondaryAssignments.externalCode]].
   * @returns A request builder for creating requests that delete an entity of type `SecondaryAssignments`.
   */
  delete(effectiveStartDate: Moment, externalCode: string): DeleteRequestBuilder<SecondaryAssignments>;
  /**
   * Returns a request builder for deleting an entity of type `SecondaryAssignments`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `SecondaryAssignments` by taking the entity as a parameter.
   */
  delete(entity: SecondaryAssignments): DeleteRequestBuilder<SecondaryAssignments>;
  delete(effectiveStartDateOrEntity: any, externalCode?: string): DeleteRequestBuilder<SecondaryAssignments> {
    return new DeleteRequestBuilder(SecondaryAssignments, effectiveStartDateOrEntity instanceof SecondaryAssignments ? effectiveStartDateOrEntity : {
      effectiveStartDate: effectiveStartDateOrEntity!,
      externalCode: externalCode!
    });
  }
}

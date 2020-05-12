/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder } from '@sap-cloud-sdk/core';
import { CustomPayType } from './CustomPayType';

/**
 * Request builder class for operations supported on the [[CustomPayType]] entity.
 */
export class CustomPayTypeRequestBuilder extends RequestBuilder<CustomPayType> {
  /**
   * Returns a request builder for retrieving one `CustomPayType` entity based on its keys.
   * @param externalCode Key property. See [[CustomPayType.externalCode]].
   * @returns A request builder for creating requests to retrieve one `CustomPayType` entity based on its keys.
   */
  getByKey(externalCode: string): GetByKeyRequestBuilder<CustomPayType> {
    return new GetByKeyRequestBuilder(CustomPayType, { externalCode: externalCode });
  }

  /**
   * Returns a request builder for querying all `CustomPayType` entities.
   * @returns A request builder for creating requests to retrieve all `CustomPayType` entities.
   */
  getAll(): GetAllRequestBuilder<CustomPayType> {
    return new GetAllRequestBuilder(CustomPayType);
  }

  /**
   * Returns a request builder for creating a `CustomPayType` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `CustomPayType`.
   */
  create(entity: CustomPayType): CreateRequestBuilder<CustomPayType> {
    return new CreateRequestBuilder(CustomPayType, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `CustomPayType`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `CustomPayType`.
   */
  update(entity: CustomPayType): UpdateRequestBuilder<CustomPayType> {
    return new UpdateRequestBuilder(CustomPayType, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `CustomPayType`.
   * @param externalCode Key property. See [[CustomPayType.externalCode]].
   * @returns A request builder for creating requests that delete an entity of type `CustomPayType`.
   */
  delete(externalCode: string): DeleteRequestBuilder<CustomPayType>;
  /**
   * Returns a request builder for deleting an entity of type `CustomPayType`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `CustomPayType` by taking the entity as a parameter.
   */
  delete(entity: CustomPayType): DeleteRequestBuilder<CustomPayType>;
  delete(externalCodeOrEntity: any): DeleteRequestBuilder<CustomPayType> {
    return new DeleteRequestBuilder(CustomPayType, externalCodeOrEntity instanceof CustomPayType ? externalCodeOrEntity : { externalCode: externalCodeOrEntity! });
  }
}

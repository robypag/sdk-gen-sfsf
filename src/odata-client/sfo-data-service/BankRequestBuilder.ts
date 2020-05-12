/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder } from '@sap-cloud-sdk/core';
import { Bank } from './Bank';

/**
 * Request builder class for operations supported on the [[Bank]] entity.
 */
export class BankRequestBuilder extends RequestBuilder<Bank> {
  /**
   * Returns a request builder for retrieving one `Bank` entity based on its keys.
   * @param externalCode Key property. See [[Bank.externalCode]].
   * @returns A request builder for creating requests to retrieve one `Bank` entity based on its keys.
   */
  getByKey(externalCode: string): GetByKeyRequestBuilder<Bank> {
    return new GetByKeyRequestBuilder(Bank, { externalCode: externalCode });
  }

  /**
   * Returns a request builder for querying all `Bank` entities.
   * @returns A request builder for creating requests to retrieve all `Bank` entities.
   */
  getAll(): GetAllRequestBuilder<Bank> {
    return new GetAllRequestBuilder(Bank);
  }

  /**
   * Returns a request builder for creating a `Bank` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `Bank`.
   */
  create(entity: Bank): CreateRequestBuilder<Bank> {
    return new CreateRequestBuilder(Bank, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `Bank`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `Bank`.
   */
  update(entity: Bank): UpdateRequestBuilder<Bank> {
    return new UpdateRequestBuilder(Bank, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `Bank`.
   * @param externalCode Key property. See [[Bank.externalCode]].
   * @returns A request builder for creating requests that delete an entity of type `Bank`.
   */
  delete(externalCode: string): DeleteRequestBuilder<Bank>;
  /**
   * Returns a request builder for deleting an entity of type `Bank`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `Bank` by taking the entity as a parameter.
   */
  delete(entity: Bank): DeleteRequestBuilder<Bank>;
  delete(externalCodeOrEntity: any): DeleteRequestBuilder<Bank> {
    return new DeleteRequestBuilder(Bank, externalCodeOrEntity instanceof Bank ? externalCodeOrEntity : { externalCode: externalCodeOrEntity! });
  }
}

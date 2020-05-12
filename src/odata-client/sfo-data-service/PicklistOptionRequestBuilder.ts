/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BigNumber } from 'bignumber.js';
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder } from '@sap-cloud-sdk/core';
import { PicklistOption } from './PicklistOption';

/**
 * Request builder class for operations supported on the [[PicklistOption]] entity.
 */
export class PicklistOptionRequestBuilder extends RequestBuilder<PicklistOption> {
  /**
   * Returns a request builder for retrieving one `PicklistOption` entity based on its keys.
   * @param id Key property. See [[PicklistOption.id]].
   * @returns A request builder for creating requests to retrieve one `PicklistOption` entity based on its keys.
   */
  getByKey(id: BigNumber): GetByKeyRequestBuilder<PicklistOption> {
    return new GetByKeyRequestBuilder(PicklistOption, { id: id });
  }

  /**
   * Returns a request builder for querying all `PicklistOption` entities.
   * @returns A request builder for creating requests to retrieve all `PicklistOption` entities.
   */
  getAll(): GetAllRequestBuilder<PicklistOption> {
    return new GetAllRequestBuilder(PicklistOption);
  }

  /**
   * Returns a request builder for creating a `PicklistOption` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `PicklistOption`.
   */
  create(entity: PicklistOption): CreateRequestBuilder<PicklistOption> {
    return new CreateRequestBuilder(PicklistOption, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `PicklistOption`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `PicklistOption`.
   */
  update(entity: PicklistOption): UpdateRequestBuilder<PicklistOption> {
    return new UpdateRequestBuilder(PicklistOption, entity);
  }
}

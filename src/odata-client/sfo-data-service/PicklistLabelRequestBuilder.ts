/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BigNumber } from 'bignumber.js';
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder } from '@sap-cloud-sdk/core';
import { PicklistLabel } from './PicklistLabel';

/**
 * Request builder class for operations supported on the [[PicklistLabel]] entity.
 */
export class PicklistLabelRequestBuilder extends RequestBuilder<PicklistLabel> {
  /**
   * Returns a request builder for retrieving one `PicklistLabel` entity based on its keys.
   * @param locale Key property. See [[PicklistLabel.locale]].
   * @param optionId Key property. See [[PicklistLabel.optionId]].
   * @returns A request builder for creating requests to retrieve one `PicklistLabel` entity based on its keys.
   */
  getByKey(locale: string, optionId: BigNumber): GetByKeyRequestBuilder<PicklistLabel> {
    return new GetByKeyRequestBuilder(PicklistLabel, {
      locale: locale,
      optionId: optionId
    });
  }

  /**
   * Returns a request builder for querying all `PicklistLabel` entities.
   * @returns A request builder for creating requests to retrieve all `PicklistLabel` entities.
   */
  getAll(): GetAllRequestBuilder<PicklistLabel> {
    return new GetAllRequestBuilder(PicklistLabel);
  }

  /**
   * Returns a request builder for creating a `PicklistLabel` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `PicklistLabel`.
   */
  create(entity: PicklistLabel): CreateRequestBuilder<PicklistLabel> {
    return new CreateRequestBuilder(PicklistLabel, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `PicklistLabel`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `PicklistLabel`.
   */
  update(entity: PicklistLabel): UpdateRequestBuilder<PicklistLabel> {
    return new UpdateRequestBuilder(PicklistLabel, entity);
  }
}

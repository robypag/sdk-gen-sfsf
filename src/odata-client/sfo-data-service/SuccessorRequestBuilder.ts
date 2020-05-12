/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BigNumber } from 'bignumber.js';
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder } from '@sap-cloud-sdk/core';
import { Successor } from './Successor';

/**
 * Request builder class for operations supported on the [[Successor]] entity.
 */
export class SuccessorRequestBuilder extends RequestBuilder<Successor> {
  /**
   * Returns a request builder for retrieving one `Successor` entity based on its keys.
   * @param id Key property. See [[Successor.id]].
   * @returns A request builder for creating requests to retrieve one `Successor` entity based on its keys.
   */
  getByKey(id: BigNumber): GetByKeyRequestBuilder<Successor> {
    return new GetByKeyRequestBuilder(Successor, { id: id });
  }

  /**
   * Returns a request builder for querying all `Successor` entities.
   * @returns A request builder for creating requests to retrieve all `Successor` entities.
   */
  getAll(): GetAllRequestBuilder<Successor> {
    return new GetAllRequestBuilder(Successor);
  }
}

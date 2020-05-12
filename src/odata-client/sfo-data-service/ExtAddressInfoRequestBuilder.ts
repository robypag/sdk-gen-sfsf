/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BigNumber } from 'bignumber.js';
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder } from '@sap-cloud-sdk/core';
import { ExtAddressInfo } from './ExtAddressInfo';

/**
 * Request builder class for operations supported on the [[ExtAddressInfo]] entity.
 */
export class ExtAddressInfoRequestBuilder extends RequestBuilder<ExtAddressInfo> {
  /**
   * Returns a request builder for retrieving one `ExtAddressInfo` entity based on its keys.
   * @param addressId Key property. See [[ExtAddressInfo.addressId]].
   * @returns A request builder for creating requests to retrieve one `ExtAddressInfo` entity based on its keys.
   */
  getByKey(addressId: BigNumber): GetByKeyRequestBuilder<ExtAddressInfo> {
    return new GetByKeyRequestBuilder(ExtAddressInfo, { addressId: addressId });
  }

  /**
   * Returns a request builder for querying all `ExtAddressInfo` entities.
   * @returns A request builder for creating requests to retrieve all `ExtAddressInfo` entities.
   */
  getAll(): GetAllRequestBuilder<ExtAddressInfo> {
    return new GetAllRequestBuilder(ExtAddressInfo);
  }

  /**
   * Returns a request builder for creating a `ExtAddressInfo` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ExtAddressInfo`.
   */
  create(entity: ExtAddressInfo): CreateRequestBuilder<ExtAddressInfo> {
    return new CreateRequestBuilder(ExtAddressInfo, entity);
  }
}

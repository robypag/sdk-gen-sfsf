/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BigNumber } from 'bignumber.js';
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder } from '@sap-cloud-sdk/core';
import { ExtPersonalInfo } from './ExtPersonalInfo';

/**
 * Request builder class for operations supported on the [[ExtPersonalInfo]] entity.
 */
export class ExtPersonalInfoRequestBuilder extends RequestBuilder<ExtPersonalInfo> {
  /**
   * Returns a request builder for retrieving one `ExtPersonalInfo` entity based on its keys.
   * @param personalInfoId Key property. See [[ExtPersonalInfo.personalInfoId]].
   * @returns A request builder for creating requests to retrieve one `ExtPersonalInfo` entity based on its keys.
   */
  getByKey(personalInfoId: BigNumber): GetByKeyRequestBuilder<ExtPersonalInfo> {
    return new GetByKeyRequestBuilder(ExtPersonalInfo, { personalInfoId: personalInfoId });
  }

  /**
   * Returns a request builder for querying all `ExtPersonalInfo` entities.
   * @returns A request builder for creating requests to retrieve all `ExtPersonalInfo` entities.
   */
  getAll(): GetAllRequestBuilder<ExtPersonalInfo> {
    return new GetAllRequestBuilder(ExtPersonalInfo);
  }

  /**
   * Returns a request builder for creating a `ExtPersonalInfo` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `ExtPersonalInfo`.
   */
  create(entity: ExtPersonalInfo): CreateRequestBuilder<ExtPersonalInfo> {
    return new CreateRequestBuilder(ExtPersonalInfo, entity);
  }
}

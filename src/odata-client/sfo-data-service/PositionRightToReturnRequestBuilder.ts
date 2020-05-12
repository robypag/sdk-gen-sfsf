/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BigNumber } from 'bignumber.js';
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder } from '@sap-cloud-sdk/core';
import { PositionRightToReturn } from './PositionRightToReturn';

/**
 * Request builder class for operations supported on the [[PositionRightToReturn]] entity.
 */
export class PositionRightToReturnRequestBuilder extends RequestBuilder<PositionRightToReturn> {
  /**
   * Returns a request builder for retrieving one `PositionRightToReturn` entity based on its keys.
   * @param externalCode Key property. See [[PositionRightToReturn.externalCode]].
   * @returns A request builder for creating requests to retrieve one `PositionRightToReturn` entity based on its keys.
   */
  getByKey(externalCode: BigNumber): GetByKeyRequestBuilder<PositionRightToReturn> {
    return new GetByKeyRequestBuilder(PositionRightToReturn, { externalCode: externalCode });
  }

  /**
   * Returns a request builder for querying all `PositionRightToReturn` entities.
   * @returns A request builder for creating requests to retrieve all `PositionRightToReturn` entities.
   */
  getAll(): GetAllRequestBuilder<PositionRightToReturn> {
    return new GetAllRequestBuilder(PositionRightToReturn);
  }
}

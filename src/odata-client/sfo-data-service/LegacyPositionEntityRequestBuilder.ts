/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BigNumber } from 'bignumber.js';
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder } from '@sap-cloud-sdk/core';
import { LegacyPositionEntity } from './LegacyPositionEntity';

/**
 * Request builder class for operations supported on the [[LegacyPositionEntity]] entity.
 */
export class LegacyPositionEntityRequestBuilder extends RequestBuilder<LegacyPositionEntity> {
  /**
   * Returns a request builder for retrieving one `LegacyPositionEntity` entity based on its keys.
   * @param positionId Key property. See [[LegacyPositionEntity.positionId]].
   * @returns A request builder for creating requests to retrieve one `LegacyPositionEntity` entity based on its keys.
   */
  getByKey(positionId: BigNumber): GetByKeyRequestBuilder<LegacyPositionEntity> {
    return new GetByKeyRequestBuilder(LegacyPositionEntity, { positionId: positionId });
  }

  /**
   * Returns a request builder for querying all `LegacyPositionEntity` entities.
   * @returns A request builder for creating requests to retrieve all `LegacyPositionEntity` entities.
   */
  getAll(): GetAllRequestBuilder<LegacyPositionEntity> {
    return new GetAllRequestBuilder(LegacyPositionEntity);
  }
}

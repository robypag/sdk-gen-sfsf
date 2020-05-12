/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BigNumber } from 'bignumber.js';
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder } from '@sap-cloud-sdk/core';
import { WfRequestParticipator } from './WfRequestParticipator';

/**
 * Request builder class for operations supported on the [[WfRequestParticipator]] entity.
 */
export class WfRequestParticipatorRequestBuilder extends RequestBuilder<WfRequestParticipator> {
  /**
   * Returns a request builder for retrieving one `WfRequestParticipator` entity based on its keys.
   * @param wfRequestParticipatorId Key property. See [[WfRequestParticipator.wfRequestParticipatorId]].
   * @returns A request builder for creating requests to retrieve one `WfRequestParticipator` entity based on its keys.
   */
  getByKey(wfRequestParticipatorId: BigNumber): GetByKeyRequestBuilder<WfRequestParticipator> {
    return new GetByKeyRequestBuilder(WfRequestParticipator, { wfRequestParticipatorId: wfRequestParticipatorId });
  }

  /**
   * Returns a request builder for querying all `WfRequestParticipator` entities.
   * @returns A request builder for creating requests to retrieve all `WfRequestParticipator` entities.
   */
  getAll(): GetAllRequestBuilder<WfRequestParticipator> {
    return new GetAllRequestBuilder(WfRequestParticipator);
  }
}

/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BigNumber } from 'bignumber.js';
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder } from '@sap-cloud-sdk/core';
import { WfRequestComments } from './WfRequestComments';

/**
 * Request builder class for operations supported on the [[WfRequestComments]] entity.
 */
export class WfRequestCommentsRequestBuilder extends RequestBuilder<WfRequestComments> {
  /**
   * Returns a request builder for retrieving one `WfRequestComments` entity based on its keys.
   * @param wfRequestCommentId Key property. See [[WfRequestComments.wfRequestCommentId]].
   * @returns A request builder for creating requests to retrieve one `WfRequestComments` entity based on its keys.
   */
  getByKey(wfRequestCommentId: BigNumber): GetByKeyRequestBuilder<WfRequestComments> {
    return new GetByKeyRequestBuilder(WfRequestComments, { wfRequestCommentId: wfRequestCommentId });
  }

  /**
   * Returns a request builder for querying all `WfRequestComments` entities.
   * @returns A request builder for creating requests to retrieve all `WfRequestComments` entities.
   */
  getAll(): GetAllRequestBuilder<WfRequestComments> {
    return new GetAllRequestBuilder(WfRequestComments);
  }
}

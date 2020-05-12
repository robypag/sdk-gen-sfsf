/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BigNumber } from 'bignumber.js';
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder } from '@sap-cloud-sdk/core';
import { RcmCompetency } from './RcmCompetency';

/**
 * Request builder class for operations supported on the [[RcmCompetency]] entity.
 */
export class RcmCompetencyRequestBuilder extends RequestBuilder<RcmCompetency> {
  /**
   * Returns a request builder for retrieving one `RcmCompetency` entity based on its keys.
   * @param rcmCompetencyId Key property. See [[RcmCompetency.rcmCompetencyId]].
   * @returns A request builder for creating requests to retrieve one `RcmCompetency` entity based on its keys.
   */
  getByKey(rcmCompetencyId: BigNumber): GetByKeyRequestBuilder<RcmCompetency> {
    return new GetByKeyRequestBuilder(RcmCompetency, { rcmCompetencyId: rcmCompetencyId });
  }

  /**
   * Returns a request builder for querying all `RcmCompetency` entities.
   * @returns A request builder for creating requests to retrieve all `RcmCompetency` entities.
   */
  getAll(): GetAllRequestBuilder<RcmCompetency> {
    return new GetAllRequestBuilder(RcmCompetency);
  }
}

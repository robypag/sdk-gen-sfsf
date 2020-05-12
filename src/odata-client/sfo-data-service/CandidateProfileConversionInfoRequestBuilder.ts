/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BigNumber } from 'bignumber.js';
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder } from '@sap-cloud-sdk/core';
import { CandidateProfileConversionInfo } from './CandidateProfileConversionInfo';

/**
 * Request builder class for operations supported on the [[CandidateProfileConversionInfo]] entity.
 */
export class CandidateProfileConversionInfoRequestBuilder extends RequestBuilder<CandidateProfileConversionInfo> {
  /**
   * Returns a request builder for retrieving one `CandidateProfileConversionInfo` entity based on its keys.
   * @param candidateId Key property. See [[CandidateProfileConversionInfo.candidateId]].
   * @returns A request builder for creating requests to retrieve one `CandidateProfileConversionInfo` entity based on its keys.
   */
  getByKey(candidateId: BigNumber): GetByKeyRequestBuilder<CandidateProfileConversionInfo> {
    return new GetByKeyRequestBuilder(CandidateProfileConversionInfo, { candidateId: candidateId });
  }

  /**
   * Returns a request builder for querying all `CandidateProfileConversionInfo` entities.
   * @returns A request builder for creating requests to retrieve all `CandidateProfileConversionInfo` entities.
   */
  getAll(): GetAllRequestBuilder<CandidateProfileConversionInfo> {
    return new GetAllRequestBuilder(CandidateProfileConversionInfo);
  }
}

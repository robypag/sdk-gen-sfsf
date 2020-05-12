/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BigNumber } from 'bignumber.js';
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder } from '@sap-cloud-sdk/core';
import { JobAppTemplate_Candidate_Detail_Global } from './JobAppTemplate_Candidate_Detail_Global';

/**
 * Request builder class for operations supported on the [[JobAppTemplate_Candidate_Detail_Global]] entity.
 */
export class JobAppTemplate_Candidate_Detail_GlobalRequestBuilder extends RequestBuilder<JobAppTemplate_Candidate_Detail_Global> {
  /**
   * Returns a request builder for retrieving one `JobAppTemplate_Candidate_Detail_Global` entity based on its keys.
   * @param templateId Key property. See [[JobAppTemplate_Candidate_Detail_Global.templateId]].
   * @returns A request builder for creating requests to retrieve one `JobAppTemplate_Candidate_Detail_Global` entity based on its keys.
   */
  getByKey(templateId: BigNumber): GetByKeyRequestBuilder<JobAppTemplate_Candidate_Detail_Global> {
    return new GetByKeyRequestBuilder(JobAppTemplate_Candidate_Detail_Global, { templateId: templateId });
  }

  /**
   * Returns a request builder for querying all `JobAppTemplate_Candidate_Detail_Global` entities.
   * @returns A request builder for creating requests to retrieve all `JobAppTemplate_Candidate_Detail_Global` entities.
   */
  getAll(): GetAllRequestBuilder<JobAppTemplate_Candidate_Detail_Global> {
    return new GetAllRequestBuilder(JobAppTemplate_Candidate_Detail_Global);
  }
}

/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BigNumber } from 'bignumber.js';
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder } from '@sap-cloud-sdk/core';
import { JobRequisition } from './JobRequisition';

/**
 * Request builder class for operations supported on the [[JobRequisition]] entity.
 */
export class JobRequisitionRequestBuilder extends RequestBuilder<JobRequisition> {
  /**
   * Returns a request builder for retrieving one `JobRequisition` entity based on its keys.
   * @param jobReqId Key property. See [[JobRequisition.jobReqId]].
   * @returns A request builder for creating requests to retrieve one `JobRequisition` entity based on its keys.
   */
  getByKey(jobReqId: BigNumber): GetByKeyRequestBuilder<JobRequisition> {
    return new GetByKeyRequestBuilder(JobRequisition, { jobReqId: jobReqId });
  }

  /**
   * Returns a request builder for querying all `JobRequisition` entities.
   * @returns A request builder for creating requests to retrieve all `JobRequisition` entities.
   */
  getAll(): GetAllRequestBuilder<JobRequisition> {
    return new GetAllRequestBuilder(JobRequisition);
  }

  /**
   * Returns a request builder for creating a `JobRequisition` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `JobRequisition`.
   */
  create(entity: JobRequisition): CreateRequestBuilder<JobRequisition> {
    return new CreateRequestBuilder(JobRequisition, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `JobRequisition`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `JobRequisition`.
   */
  update(entity: JobRequisition): UpdateRequestBuilder<JobRequisition> {
    return new UpdateRequestBuilder(JobRequisition, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `JobRequisition`.
   * @param jobReqId Key property. See [[JobRequisition.jobReqId]].
   * @returns A request builder for creating requests that delete an entity of type `JobRequisition`.
   */
  delete(jobReqId: BigNumber): DeleteRequestBuilder<JobRequisition>;
  /**
   * Returns a request builder for deleting an entity of type `JobRequisition`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `JobRequisition` by taking the entity as a parameter.
   */
  delete(entity: JobRequisition): DeleteRequestBuilder<JobRequisition>;
  delete(jobReqIdOrEntity: any): DeleteRequestBuilder<JobRequisition> {
    return new DeleteRequestBuilder(JobRequisition, jobReqIdOrEntity instanceof JobRequisition ? jobReqIdOrEntity : { jobReqId: jobReqIdOrEntity! });
  }
}

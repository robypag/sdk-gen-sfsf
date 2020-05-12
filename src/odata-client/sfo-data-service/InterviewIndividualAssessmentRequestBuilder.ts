/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BigNumber } from 'bignumber.js';
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder } from '@sap-cloud-sdk/core';
import { InterviewIndividualAssessment } from './InterviewIndividualAssessment';

/**
 * Request builder class for operations supported on the [[InterviewIndividualAssessment]] entity.
 */
export class InterviewIndividualAssessmentRequestBuilder extends RequestBuilder<InterviewIndividualAssessment> {
  /**
   * Returns a request builder for retrieving one `InterviewIndividualAssessment` entity based on its keys.
   * @param interviewIndividualAssessmentId Key property. See [[InterviewIndividualAssessment.interviewIndividualAssessmentId]].
   * @returns A request builder for creating requests to retrieve one `InterviewIndividualAssessment` entity based on its keys.
   */
  getByKey(interviewIndividualAssessmentId: BigNumber): GetByKeyRequestBuilder<InterviewIndividualAssessment> {
    return new GetByKeyRequestBuilder(InterviewIndividualAssessment, { interviewIndividualAssessmentId: interviewIndividualAssessmentId });
  }

  /**
   * Returns a request builder for querying all `InterviewIndividualAssessment` entities.
   * @returns A request builder for creating requests to retrieve all `InterviewIndividualAssessment` entities.
   */
  getAll(): GetAllRequestBuilder<InterviewIndividualAssessment> {
    return new GetAllRequestBuilder(InterviewIndividualAssessment);
  }

  /**
   * Returns a request builder for creating a `InterviewIndividualAssessment` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `InterviewIndividualAssessment`.
   */
  create(entity: InterviewIndividualAssessment): CreateRequestBuilder<InterviewIndividualAssessment> {
    return new CreateRequestBuilder(InterviewIndividualAssessment, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `InterviewIndividualAssessment`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `InterviewIndividualAssessment`.
   */
  update(entity: InterviewIndividualAssessment): UpdateRequestBuilder<InterviewIndividualAssessment> {
    return new UpdateRequestBuilder(InterviewIndividualAssessment, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `InterviewIndividualAssessment`.
   * @param interviewIndividualAssessmentId Key property. See [[InterviewIndividualAssessment.interviewIndividualAssessmentId]].
   * @returns A request builder for creating requests that delete an entity of type `InterviewIndividualAssessment`.
   */
  delete(interviewIndividualAssessmentId: BigNumber): DeleteRequestBuilder<InterviewIndividualAssessment>;
  /**
   * Returns a request builder for deleting an entity of type `InterviewIndividualAssessment`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `InterviewIndividualAssessment` by taking the entity as a parameter.
   */
  delete(entity: InterviewIndividualAssessment): DeleteRequestBuilder<InterviewIndividualAssessment>;
  delete(interviewIndividualAssessmentIdOrEntity: any): DeleteRequestBuilder<InterviewIndividualAssessment> {
    return new DeleteRequestBuilder(InterviewIndividualAssessment, interviewIndividualAssessmentIdOrEntity instanceof InterviewIndividualAssessment ? interviewIndividualAssessmentIdOrEntity : { interviewIndividualAssessmentId: interviewIndividualAssessmentIdOrEntity! });
  }
}

/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BigNumber } from 'bignumber.js';
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder } from '@sap-cloud-sdk/core';
import { FormCompetencySection } from './FormCompetencySection';

/**
 * Request builder class for operations supported on the [[FormCompetencySection]] entity.
 */
export class FormCompetencySectionRequestBuilder extends RequestBuilder<FormCompetencySection> {
  /**
   * Returns a request builder for retrieving one `FormCompetencySection` entity based on its keys.
   * @param formContentId Key property. See [[FormCompetencySection.formContentId]].
   * @param formDataId Key property. See [[FormCompetencySection.formDataId]].
   * @param sectionIndex Key property. See [[FormCompetencySection.sectionIndex]].
   * @returns A request builder for creating requests to retrieve one `FormCompetencySection` entity based on its keys.
   */
  getByKey(formContentId: BigNumber, formDataId: BigNumber, sectionIndex: number): GetByKeyRequestBuilder<FormCompetencySection> {
    return new GetByKeyRequestBuilder(FormCompetencySection, {
      formContentId: formContentId,
      formDataId: formDataId,
      sectionIndex: sectionIndex
    });
  }

  /**
   * Returns a request builder for querying all `FormCompetencySection` entities.
   * @returns A request builder for creating requests to retrieve all `FormCompetencySection` entities.
   */
  getAll(): GetAllRequestBuilder<FormCompetencySection> {
    return new GetAllRequestBuilder(FormCompetencySection);
  }

  /**
   * Returns a request builder for creating a `FormCompetencySection` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `FormCompetencySection`.
   */
  create(entity: FormCompetencySection): CreateRequestBuilder<FormCompetencySection> {
    return new CreateRequestBuilder(FormCompetencySection, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `FormCompetencySection`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `FormCompetencySection`.
   */
  update(entity: FormCompetencySection): UpdateRequestBuilder<FormCompetencySection> {
    return new UpdateRequestBuilder(FormCompetencySection, entity);
  }
}

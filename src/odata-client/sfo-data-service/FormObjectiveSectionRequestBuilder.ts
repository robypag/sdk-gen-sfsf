/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BigNumber } from 'bignumber.js';
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder } from '@sap-cloud-sdk/core';
import { FormObjectiveSection } from './FormObjectiveSection';

/**
 * Request builder class for operations supported on the [[FormObjectiveSection]] entity.
 */
export class FormObjectiveSectionRequestBuilder extends RequestBuilder<FormObjectiveSection> {
  /**
   * Returns a request builder for retrieving one `FormObjectiveSection` entity based on its keys.
   * @param formContentId Key property. See [[FormObjectiveSection.formContentId]].
   * @param formDataId Key property. See [[FormObjectiveSection.formDataId]].
   * @param sectionIndex Key property. See [[FormObjectiveSection.sectionIndex]].
   * @returns A request builder for creating requests to retrieve one `FormObjectiveSection` entity based on its keys.
   */
  getByKey(formContentId: BigNumber, formDataId: BigNumber, sectionIndex: number): GetByKeyRequestBuilder<FormObjectiveSection> {
    return new GetByKeyRequestBuilder(FormObjectiveSection, {
      formContentId: formContentId,
      formDataId: formDataId,
      sectionIndex: sectionIndex
    });
  }

  /**
   * Returns a request builder for querying all `FormObjectiveSection` entities.
   * @returns A request builder for creating requests to retrieve all `FormObjectiveSection` entities.
   */
  getAll(): GetAllRequestBuilder<FormObjectiveSection> {
    return new GetAllRequestBuilder(FormObjectiveSection);
  }
}

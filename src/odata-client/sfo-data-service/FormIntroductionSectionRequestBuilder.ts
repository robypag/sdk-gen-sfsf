/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BigNumber } from 'bignumber.js';
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder } from '@sap-cloud-sdk/core';
import { FormIntroductionSection } from './FormIntroductionSection';

/**
 * Request builder class for operations supported on the [[FormIntroductionSection]] entity.
 */
export class FormIntroductionSectionRequestBuilder extends RequestBuilder<FormIntroductionSection> {
  /**
   * Returns a request builder for retrieving one `FormIntroductionSection` entity based on its keys.
   * @param formContentId Key property. See [[FormIntroductionSection.formContentId]].
   * @param formDataId Key property. See [[FormIntroductionSection.formDataId]].
   * @returns A request builder for creating requests to retrieve one `FormIntroductionSection` entity based on its keys.
   */
  getByKey(formContentId: BigNumber, formDataId: BigNumber): GetByKeyRequestBuilder<FormIntroductionSection> {
    return new GetByKeyRequestBuilder(FormIntroductionSection, {
      formContentId: formContentId,
      formDataId: formDataId
    });
  }

  /**
   * Returns a request builder for querying all `FormIntroductionSection` entities.
   * @returns A request builder for creating requests to retrieve all `FormIntroductionSection` entities.
   */
  getAll(): GetAllRequestBuilder<FormIntroductionSection> {
    return new GetAllRequestBuilder(FormIntroductionSection);
  }
}

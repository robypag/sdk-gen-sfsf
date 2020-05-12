/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BigNumber } from 'bignumber.js';
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder } from '@sap-cloud-sdk/core';
import { FormSectionConfiguration } from './FormSectionConfiguration';

/**
 * Request builder class for operations supported on the [[FormSectionConfiguration]] entity.
 */
export class FormSectionConfigurationRequestBuilder extends RequestBuilder<FormSectionConfiguration> {
  /**
   * Returns a request builder for retrieving one `FormSectionConfiguration` entity based on its keys.
   * @param formContentId Key property. See [[FormSectionConfiguration.formContentId]].
   * @param formDataId Key property. See [[FormSectionConfiguration.formDataId]].
   * @param sectionIndex Key property. See [[FormSectionConfiguration.sectionIndex]].
   * @returns A request builder for creating requests to retrieve one `FormSectionConfiguration` entity based on its keys.
   */
  getByKey(formContentId: BigNumber, formDataId: BigNumber, sectionIndex: number): GetByKeyRequestBuilder<FormSectionConfiguration> {
    return new GetByKeyRequestBuilder(FormSectionConfiguration, {
      formContentId: formContentId,
      formDataId: formDataId,
      sectionIndex: sectionIndex
    });
  }

  /**
   * Returns a request builder for querying all `FormSectionConfiguration` entities.
   * @returns A request builder for creating requests to retrieve all `FormSectionConfiguration` entities.
   */
  getAll(): GetAllRequestBuilder<FormSectionConfiguration> {
    return new GetAllRequestBuilder(FormSectionConfiguration);
  }
}

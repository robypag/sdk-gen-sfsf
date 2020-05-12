/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BigNumber } from 'bignumber.js';
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder } from '@sap-cloud-sdk/core';
import { FormItemConfiguration } from './FormItemConfiguration';

/**
 * Request builder class for operations supported on the [[FormItemConfiguration]] entity.
 */
export class FormItemConfigurationRequestBuilder extends RequestBuilder<FormItemConfiguration> {
  /**
   * Returns a request builder for retrieving one `FormItemConfiguration` entity based on its keys.
   * @param formContentId Key property. See [[FormItemConfiguration.formContentId]].
   * @param formDataId Key property. See [[FormItemConfiguration.formDataId]].
   * @param itemId Key property. See [[FormItemConfiguration.itemId]].
   * @param sectionIndex Key property. See [[FormItemConfiguration.sectionIndex]].
   * @returns A request builder for creating requests to retrieve one `FormItemConfiguration` entity based on its keys.
   */
  getByKey(formContentId: BigNumber, formDataId: BigNumber, itemId: BigNumber, sectionIndex: number): GetByKeyRequestBuilder<FormItemConfiguration> {
    return new GetByKeyRequestBuilder(FormItemConfiguration, {
      formContentId: formContentId,
      formDataId: formDataId,
      itemId: itemId,
      sectionIndex: sectionIndex
    });
  }

  /**
   * Returns a request builder for querying all `FormItemConfiguration` entities.
   * @returns A request builder for creating requests to retrieve all `FormItemConfiguration` entities.
   */
  getAll(): GetAllRequestBuilder<FormItemConfiguration> {
    return new GetAllRequestBuilder(FormItemConfiguration);
  }
}

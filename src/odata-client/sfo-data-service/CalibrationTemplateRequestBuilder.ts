/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BigNumber } from 'bignumber.js';
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder } from '@sap-cloud-sdk/core';
import { CalibrationTemplate } from './CalibrationTemplate';

/**
 * Request builder class for operations supported on the [[CalibrationTemplate]] entity.
 */
export class CalibrationTemplateRequestBuilder extends RequestBuilder<CalibrationTemplate> {
  /**
   * Returns a request builder for retrieving one `CalibrationTemplate` entity based on its keys.
   * @param templateId Key property. See [[CalibrationTemplate.templateId]].
   * @returns A request builder for creating requests to retrieve one `CalibrationTemplate` entity based on its keys.
   */
  getByKey(templateId: BigNumber): GetByKeyRequestBuilder<CalibrationTemplate> {
    return new GetByKeyRequestBuilder(CalibrationTemplate, { templateId: templateId });
  }

  /**
   * Returns a request builder for querying all `CalibrationTemplate` entities.
   * @returns A request builder for creating requests to retrieve all `CalibrationTemplate` entities.
   */
  getAll(): GetAllRequestBuilder<CalibrationTemplate> {
    return new GetAllRequestBuilder(CalibrationTemplate);
  }
}

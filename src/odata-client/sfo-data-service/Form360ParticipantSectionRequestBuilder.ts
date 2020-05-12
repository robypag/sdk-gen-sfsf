/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BigNumber } from 'bignumber.js';
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder } from '@sap-cloud-sdk/core';
import { Form360ParticipantSection } from './Form360ParticipantSection';

/**
 * Request builder class for operations supported on the [[Form360ParticipantSection]] entity.
 */
export class Form360ParticipantSectionRequestBuilder extends RequestBuilder<Form360ParticipantSection> {
  /**
   * Returns a request builder for retrieving one `Form360ParticipantSection` entity based on its keys.
   * @param formContentId Key property. See [[Form360ParticipantSection.formContentId]].
   * @param formDataId Key property. See [[Form360ParticipantSection.formDataId]].
   * @returns A request builder for creating requests to retrieve one `Form360ParticipantSection` entity based on its keys.
   */
  getByKey(formContentId: BigNumber, formDataId: BigNumber): GetByKeyRequestBuilder<Form360ParticipantSection> {
    return new GetByKeyRequestBuilder(Form360ParticipantSection, {
      formContentId: formContentId,
      formDataId: formDataId
    });
  }

  /**
   * Returns a request builder for querying all `Form360ParticipantSection` entities.
   * @returns A request builder for creating requests to retrieve all `Form360ParticipantSection` entities.
   */
  getAll(): GetAllRequestBuilder<Form360ParticipantSection> {
    return new GetAllRequestBuilder(Form360ParticipantSection);
  }
}

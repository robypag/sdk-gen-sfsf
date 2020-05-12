/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BigNumber } from 'bignumber.js';
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder } from '@sap-cloud-sdk/core';
import { Form360ParticipantDetail } from './Form360ParticipantDetail';

/**
 * Request builder class for operations supported on the [[Form360ParticipantDetail]] entity.
 */
export class Form360ParticipantDetailRequestBuilder extends RequestBuilder<Form360ParticipantDetail> {
  /**
   * Returns a request builder for retrieving one `Form360ParticipantDetail` entity based on its keys.
   * @param columnKey Key property. See [[Form360ParticipantDetail.columnKey]].
   * @param formContentId Key property. See [[Form360ParticipantDetail.formContentId]].
   * @param formDataId Key property. See [[Form360ParticipantDetail.formDataId]].
   * @param participantId Key property. See [[Form360ParticipantDetail.participantId]].
   * @returns A request builder for creating requests to retrieve one `Form360ParticipantDetail` entity based on its keys.
   */
  getByKey(columnKey: string, formContentId: BigNumber, formDataId: BigNumber, participantId: string): GetByKeyRequestBuilder<Form360ParticipantDetail> {
    return new GetByKeyRequestBuilder(Form360ParticipantDetail, {
      columnKey: columnKey,
      formContentId: formContentId,
      formDataId: formDataId,
      participantId: participantId
    });
  }

  /**
   * Returns a request builder for querying all `Form360ParticipantDetail` entities.
   * @returns A request builder for creating requests to retrieve all `Form360ParticipantDetail` entities.
   */
  getAll(): GetAllRequestBuilder<Form360ParticipantDetail> {
    return new GetAllRequestBuilder(Form360ParticipantDetail);
  }
}

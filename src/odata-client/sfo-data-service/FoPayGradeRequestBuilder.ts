/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Moment } from 'moment';
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder } from '@sap-cloud-sdk/core';
import { FoPayGrade } from './FoPayGrade';

/**
 * Request builder class for operations supported on the [[FoPayGrade]] entity.
 */
export class FoPayGradeRequestBuilder extends RequestBuilder<FoPayGrade> {
  /**
   * Returns a request builder for retrieving one `FoPayGrade` entity based on its keys.
   * @param externalCode Key property. See [[FoPayGrade.externalCode]].
   * @param startDate Key property. See [[FoPayGrade.startDate]].
   * @returns A request builder for creating requests to retrieve one `FoPayGrade` entity based on its keys.
   */
  getByKey(externalCode: string, startDate: Moment): GetByKeyRequestBuilder<FoPayGrade> {
    return new GetByKeyRequestBuilder(FoPayGrade, {
      externalCode: externalCode,
      startDate: startDate
    });
  }

  /**
   * Returns a request builder for querying all `FoPayGrade` entities.
   * @returns A request builder for creating requests to retrieve all `FoPayGrade` entities.
   */
  getAll(): GetAllRequestBuilder<FoPayGrade> {
    return new GetAllRequestBuilder(FoPayGrade);
  }
}

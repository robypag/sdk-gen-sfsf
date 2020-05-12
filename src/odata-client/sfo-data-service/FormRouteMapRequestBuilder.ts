/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BigNumber } from 'bignumber.js';
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder } from '@sap-cloud-sdk/core';
import { FormRouteMap } from './FormRouteMap';

/**
 * Request builder class for operations supported on the [[FormRouteMap]] entity.
 */
export class FormRouteMapRequestBuilder extends RequestBuilder<FormRouteMap> {
  /**
   * Returns a request builder for retrieving one `FormRouteMap` entity based on its keys.
   * @param formDataId Key property. See [[FormRouteMap.formDataId]].
   * @returns A request builder for creating requests to retrieve one `FormRouteMap` entity based on its keys.
   */
  getByKey(formDataId: BigNumber): GetByKeyRequestBuilder<FormRouteMap> {
    return new GetByKeyRequestBuilder(FormRouteMap, { formDataId: formDataId });
  }

  /**
   * Returns a request builder for querying all `FormRouteMap` entities.
   * @returns A request builder for creating requests to retrieve all `FormRouteMap` entities.
   */
  getAll(): GetAllRequestBuilder<FormRouteMap> {
    return new GetAllRequestBuilder(FormRouteMap);
  }
}

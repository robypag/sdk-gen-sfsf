/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder } from '@sap-cloud-sdk/core';
import { DeductionScreenId } from './DeductionScreenId';

/**
 * Request builder class for operations supported on the [[DeductionScreenId]] entity.
 */
export class DeductionScreenIdRequestBuilder extends RequestBuilder<DeductionScreenId> {
  /**
   * Returns a request builder for retrieving one `DeductionScreenId` entity based on its keys.
   * @param externalCode Key property. See [[DeductionScreenId.externalCode]].
   * @returns A request builder for creating requests to retrieve one `DeductionScreenId` entity based on its keys.
   */
  getByKey(externalCode: string): GetByKeyRequestBuilder<DeductionScreenId> {
    return new GetByKeyRequestBuilder(DeductionScreenId, { externalCode: externalCode });
  }

  /**
   * Returns a request builder for querying all `DeductionScreenId` entities.
   * @returns A request builder for creating requests to retrieve all `DeductionScreenId` entities.
   */
  getAll(): GetAllRequestBuilder<DeductionScreenId> {
    return new GetAllRequestBuilder(DeductionScreenId);
  }
}

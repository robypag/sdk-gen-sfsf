/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BigNumber } from 'bignumber.js';
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder } from '@sap-cloud-sdk/core';
import { PersonTypeUsage } from './PersonTypeUsage';

/**
 * Request builder class for operations supported on the [[PersonTypeUsage]] entity.
 */
export class PersonTypeUsageRequestBuilder extends RequestBuilder<PersonTypeUsage> {
  /**
   * Returns a request builder for retrieving one `PersonTypeUsage` entity based on its keys.
   * @param externalCode Key property. See [[PersonTypeUsage.externalCode]].
   * @returns A request builder for creating requests to retrieve one `PersonTypeUsage` entity based on its keys.
   */
  getByKey(externalCode: BigNumber): GetByKeyRequestBuilder<PersonTypeUsage> {
    return new GetByKeyRequestBuilder(PersonTypeUsage, { externalCode: externalCode });
  }

  /**
   * Returns a request builder for querying all `PersonTypeUsage` entities.
   * @returns A request builder for creating requests to retrieve all `PersonTypeUsage` entities.
   */
  getAll(): GetAllRequestBuilder<PersonTypeUsage> {
    return new GetAllRequestBuilder(PersonTypeUsage);
  }
}

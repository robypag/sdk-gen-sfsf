/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder } from '@sap-cloud-sdk/core';
import { PersonType } from './PersonType';

/**
 * Request builder class for operations supported on the [[PersonType]] entity.
 */
export class PersonTypeRequestBuilder extends RequestBuilder<PersonType> {
  /**
   * Returns a request builder for retrieving one `PersonType` entity based on its keys.
   * @param externalCode Key property. See [[PersonType.externalCode]].
   * @returns A request builder for creating requests to retrieve one `PersonType` entity based on its keys.
   */
  getByKey(externalCode: string): GetByKeyRequestBuilder<PersonType> {
    return new GetByKeyRequestBuilder(PersonType, { externalCode: externalCode });
  }

  /**
   * Returns a request builder for querying all `PersonType` entities.
   * @returns A request builder for creating requests to retrieve all `PersonType` entities.
   */
  getAll(): GetAllRequestBuilder<PersonType> {
    return new GetAllRequestBuilder(PersonType);
  }
}

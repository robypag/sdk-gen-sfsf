/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BigNumber } from 'bignumber.js';
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder } from '@sap-cloud-sdk/core';
import { FormCustomSection } from './FormCustomSection';

/**
 * Request builder class for operations supported on the [[FormCustomSection]] entity.
 */
export class FormCustomSectionRequestBuilder extends RequestBuilder<FormCustomSection> {
  /**
   * Returns a request builder for retrieving one `FormCustomSection` entity based on its keys.
   * @param formContentId Key property. See [[FormCustomSection.formContentId]].
   * @param formDataId Key property. See [[FormCustomSection.formDataId]].
   * @param sectionIndex Key property. See [[FormCustomSection.sectionIndex]].
   * @returns A request builder for creating requests to retrieve one `FormCustomSection` entity based on its keys.
   */
  getByKey(formContentId: BigNumber, formDataId: BigNumber, sectionIndex: number): GetByKeyRequestBuilder<FormCustomSection> {
    return new GetByKeyRequestBuilder(FormCustomSection, {
      formContentId: formContentId,
      formDataId: formDataId,
      sectionIndex: sectionIndex
    });
  }

  /**
   * Returns a request builder for querying all `FormCustomSection` entities.
   * @returns A request builder for creating requests to retrieve all `FormCustomSection` entities.
   */
  getAll(): GetAllRequestBuilder<FormCustomSection> {
    return new GetAllRequestBuilder(FormCustomSection);
  }

  /**
   * Returns a request builder for creating a `FormCustomSection` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `FormCustomSection`.
   */
  create(entity: FormCustomSection): CreateRequestBuilder<FormCustomSection> {
    return new CreateRequestBuilder(FormCustomSection, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `FormCustomSection`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `FormCustomSection`.
   */
  update(entity: FormCustomSection): UpdateRequestBuilder<FormCustomSection> {
    return new UpdateRequestBuilder(FormCustomSection, entity);
  }
}

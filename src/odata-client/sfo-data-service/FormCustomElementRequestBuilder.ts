/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BigNumber } from 'bignumber.js';
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder } from '@sap-cloud-sdk/core';
import { FormCustomElement } from './FormCustomElement';

/**
 * Request builder class for operations supported on the [[FormCustomElement]] entity.
 */
export class FormCustomElementRequestBuilder extends RequestBuilder<FormCustomElement> {
  /**
   * Returns a request builder for retrieving one `FormCustomElement` entity based on its keys.
   * @param elementKey Key property. See [[FormCustomElement.elementKey]].
   * @param formContentId Key property. See [[FormCustomElement.formContentId]].
   * @param formDataId Key property. See [[FormCustomElement.formDataId]].
   * @param itemId Key property. See [[FormCustomElement.itemId]].
   * @param sectionIndex Key property. See [[FormCustomElement.sectionIndex]].
   * @returns A request builder for creating requests to retrieve one `FormCustomElement` entity based on its keys.
   */
  getByKey(elementKey: string, formContentId: BigNumber, formDataId: BigNumber, itemId: BigNumber, sectionIndex: number): GetByKeyRequestBuilder<FormCustomElement> {
    return new GetByKeyRequestBuilder(FormCustomElement, {
      elementKey: elementKey,
      formContentId: formContentId,
      formDataId: formDataId,
      itemId: itemId,
      sectionIndex: sectionIndex
    });
  }

  /**
   * Returns a request builder for querying all `FormCustomElement` entities.
   * @returns A request builder for creating requests to retrieve all `FormCustomElement` entities.
   */
  getAll(): GetAllRequestBuilder<FormCustomElement> {
    return new GetAllRequestBuilder(FormCustomElement);
  }

  /**
   * Returns a request builder for creating a `FormCustomElement` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `FormCustomElement`.
   */
  create(entity: FormCustomElement): CreateRequestBuilder<FormCustomElement> {
    return new CreateRequestBuilder(FormCustomElement, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `FormCustomElement`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `FormCustomElement`.
   */
  update(entity: FormCustomElement): UpdateRequestBuilder<FormCustomElement> {
    return new UpdateRequestBuilder(FormCustomElement, entity);
  }
}

/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BigNumber } from 'bignumber.js';
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder } from '@sap-cloud-sdk/core';
import { FormCompetency } from './FormCompetency';

/**
 * Request builder class for operations supported on the [[FormCompetency]] entity.
 */
export class FormCompetencyRequestBuilder extends RequestBuilder<FormCompetency> {
  /**
   * Returns a request builder for retrieving one `FormCompetency` entity based on its keys.
   * @param formContentId Key property. See [[FormCompetency.formContentId]].
   * @param formDataId Key property. See [[FormCompetency.formDataId]].
   * @param itemId Key property. See [[FormCompetency.itemId]].
   * @param sectionIndex Key property. See [[FormCompetency.sectionIndex]].
   * @returns A request builder for creating requests to retrieve one `FormCompetency` entity based on its keys.
   */
  getByKey(formContentId: BigNumber, formDataId: BigNumber, itemId: BigNumber, sectionIndex: number): GetByKeyRequestBuilder<FormCompetency> {
    return new GetByKeyRequestBuilder(FormCompetency, {
      formContentId: formContentId,
      formDataId: formDataId,
      itemId: itemId,
      sectionIndex: sectionIndex
    });
  }

  /**
   * Returns a request builder for querying all `FormCompetency` entities.
   * @returns A request builder for creating requests to retrieve all `FormCompetency` entities.
   */
  getAll(): GetAllRequestBuilder<FormCompetency> {
    return new GetAllRequestBuilder(FormCompetency);
  }

  /**
   * Returns a request builder for creating a `FormCompetency` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `FormCompetency`.
   */
  create(entity: FormCompetency): CreateRequestBuilder<FormCompetency> {
    return new CreateRequestBuilder(FormCompetency, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `FormCompetency`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `FormCompetency`.
   */
  update(entity: FormCompetency): UpdateRequestBuilder<FormCompetency> {
    return new UpdateRequestBuilder(FormCompetency, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `FormCompetency`.
   * @param formContentId Key property. See [[FormCompetency.formContentId]].
   * @param formDataId Key property. See [[FormCompetency.formDataId]].
   * @param itemId Key property. See [[FormCompetency.itemId]].
   * @param sectionIndex Key property. See [[FormCompetency.sectionIndex]].
   * @returns A request builder for creating requests that delete an entity of type `FormCompetency`.
   */
  delete(formContentId: BigNumber, formDataId: BigNumber, itemId: BigNumber, sectionIndex: number): DeleteRequestBuilder<FormCompetency>;
  /**
   * Returns a request builder for deleting an entity of type `FormCompetency`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `FormCompetency` by taking the entity as a parameter.
   */
  delete(entity: FormCompetency): DeleteRequestBuilder<FormCompetency>;
  delete(formContentIdOrEntity: any, formDataId?: BigNumber, itemId?: BigNumber, sectionIndex?: number): DeleteRequestBuilder<FormCompetency> {
    return new DeleteRequestBuilder(FormCompetency, formContentIdOrEntity instanceof FormCompetency ? formContentIdOrEntity : {
      formContentId: formContentIdOrEntity!,
      formDataId: formDataId!,
      itemId: itemId!,
      sectionIndex: sectionIndex!
    });
  }
}

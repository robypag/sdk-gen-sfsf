/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder } from '@sap-cloud-sdk/core';
import { InitiativeAlignmentBean } from './InitiativeAlignmentBean';

/**
 * Request builder class for operations supported on the [[InitiativeAlignmentBean]] entity.
 */
export class InitiativeAlignmentBeanRequestBuilder extends RequestBuilder<InitiativeAlignmentBean> {
  /**
   * Returns a request builder for retrieving one `InitiativeAlignmentBean` entity based on its keys.
   * @param externalCode Key property. See [[InitiativeAlignmentBean.externalCode]].
   * @returns A request builder for creating requests to retrieve one `InitiativeAlignmentBean` entity based on its keys.
   */
  getByKey(externalCode: string): GetByKeyRequestBuilder<InitiativeAlignmentBean> {
    return new GetByKeyRequestBuilder(InitiativeAlignmentBean, { externalCode: externalCode });
  }

  /**
   * Returns a request builder for querying all `InitiativeAlignmentBean` entities.
   * @returns A request builder for creating requests to retrieve all `InitiativeAlignmentBean` entities.
   */
  getAll(): GetAllRequestBuilder<InitiativeAlignmentBean> {
    return new GetAllRequestBuilder(InitiativeAlignmentBean);
  }

  /**
   * Returns a request builder for creating a `InitiativeAlignmentBean` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `InitiativeAlignmentBean`.
   */
  create(entity: InitiativeAlignmentBean): CreateRequestBuilder<InitiativeAlignmentBean> {
    return new CreateRequestBuilder(InitiativeAlignmentBean, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `InitiativeAlignmentBean`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `InitiativeAlignmentBean`.
   */
  update(entity: InitiativeAlignmentBean): UpdateRequestBuilder<InitiativeAlignmentBean> {
    return new UpdateRequestBuilder(InitiativeAlignmentBean, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `InitiativeAlignmentBean`.
   * @param externalCode Key property. See [[InitiativeAlignmentBean.externalCode]].
   * @returns A request builder for creating requests that delete an entity of type `InitiativeAlignmentBean`.
   */
  delete(externalCode: string): DeleteRequestBuilder<InitiativeAlignmentBean>;
  /**
   * Returns a request builder for deleting an entity of type `InitiativeAlignmentBean`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `InitiativeAlignmentBean` by taking the entity as a parameter.
   */
  delete(entity: InitiativeAlignmentBean): DeleteRequestBuilder<InitiativeAlignmentBean>;
  delete(externalCodeOrEntity: any): DeleteRequestBuilder<InitiativeAlignmentBean> {
    return new DeleteRequestBuilder(InitiativeAlignmentBean, externalCodeOrEntity instanceof InitiativeAlignmentBean ? externalCodeOrEntity : { externalCode: externalCodeOrEntity! });
  }
}

/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder } from '@sap-cloud-sdk/core';
import { AutoDelegateDetail } from './AutoDelegateDetail';

/**
 * Request builder class for operations supported on the [[AutoDelegateDetail]] entity.
 */
export class AutoDelegateDetailRequestBuilder extends RequestBuilder<AutoDelegateDetail> {
  /**
   * Returns a request builder for retrieving one `AutoDelegateDetail` entity based on its keys.
   * @param autoDelegateConfigDelegator Key property. See [[AutoDelegateDetail.autoDelegateConfigDelegator]].
   * @param externalCode Key property. See [[AutoDelegateDetail.externalCode]].
   * @returns A request builder for creating requests to retrieve one `AutoDelegateDetail` entity based on its keys.
   */
  getByKey(autoDelegateConfigDelegator: string, externalCode: string): GetByKeyRequestBuilder<AutoDelegateDetail> {
    return new GetByKeyRequestBuilder(AutoDelegateDetail, {
      AutoDelegateConfig_delegator: autoDelegateConfigDelegator,
      externalCode: externalCode
    });
  }

  /**
   * Returns a request builder for querying all `AutoDelegateDetail` entities.
   * @returns A request builder for creating requests to retrieve all `AutoDelegateDetail` entities.
   */
  getAll(): GetAllRequestBuilder<AutoDelegateDetail> {
    return new GetAllRequestBuilder(AutoDelegateDetail);
  }

  /**
   * Returns a request builder for creating a `AutoDelegateDetail` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `AutoDelegateDetail`.
   */
  create(entity: AutoDelegateDetail): CreateRequestBuilder<AutoDelegateDetail> {
    return new CreateRequestBuilder(AutoDelegateDetail, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `AutoDelegateDetail`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `AutoDelegateDetail`.
   */
  update(entity: AutoDelegateDetail): UpdateRequestBuilder<AutoDelegateDetail> {
    return new UpdateRequestBuilder(AutoDelegateDetail, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `AutoDelegateDetail`.
   * @param autoDelegateConfigDelegator Key property. See [[AutoDelegateDetail.autoDelegateConfigDelegator]].
   * @param externalCode Key property. See [[AutoDelegateDetail.externalCode]].
   * @returns A request builder for creating requests that delete an entity of type `AutoDelegateDetail`.
   */
  delete(autoDelegateConfigDelegator: string, externalCode: string): DeleteRequestBuilder<AutoDelegateDetail>;
  /**
   * Returns a request builder for deleting an entity of type `AutoDelegateDetail`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `AutoDelegateDetail` by taking the entity as a parameter.
   */
  delete(entity: AutoDelegateDetail): DeleteRequestBuilder<AutoDelegateDetail>;
  delete(autoDelegateConfigDelegatorOrEntity: any, externalCode?: string): DeleteRequestBuilder<AutoDelegateDetail> {
    return new DeleteRequestBuilder(AutoDelegateDetail, autoDelegateConfigDelegatorOrEntity instanceof AutoDelegateDetail ? autoDelegateConfigDelegatorOrEntity : {
      AutoDelegateConfig_delegator: autoDelegateConfigDelegatorOrEntity!,
      externalCode: externalCode!
    });
  }
}

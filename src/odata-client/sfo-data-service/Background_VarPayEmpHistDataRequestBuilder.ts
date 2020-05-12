/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BigNumber } from 'bignumber.js';
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder } from '@sap-cloud-sdk/core';
import { Background_VarPayEmpHistData } from './Background_VarPayEmpHistData';

/**
 * Request builder class for operations supported on the [[Background_VarPayEmpHistData]] entity.
 */
export class Background_VarPayEmpHistDataRequestBuilder extends RequestBuilder<Background_VarPayEmpHistData> {
  /**
   * Returns a request builder for retrieving one `Background_VarPayEmpHistData` entity based on its keys.
   * @param backgroundElementId Key property. See [[Background_VarPayEmpHistData.backgroundElementId]].
   * @returns A request builder for creating requests to retrieve one `Background_VarPayEmpHistData` entity based on its keys.
   */
  getByKey(backgroundElementId: BigNumber): GetByKeyRequestBuilder<Background_VarPayEmpHistData> {
    return new GetByKeyRequestBuilder(Background_VarPayEmpHistData, { backgroundElementId: backgroundElementId });
  }

  /**
   * Returns a request builder for querying all `Background_VarPayEmpHistData` entities.
   * @returns A request builder for creating requests to retrieve all `Background_VarPayEmpHistData` entities.
   */
  getAll(): GetAllRequestBuilder<Background_VarPayEmpHistData> {
    return new GetAllRequestBuilder(Background_VarPayEmpHistData);
  }

  /**
   * Returns a request builder for creating a `Background_VarPayEmpHistData` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `Background_VarPayEmpHistData`.
   */
  create(entity: Background_VarPayEmpHistData): CreateRequestBuilder<Background_VarPayEmpHistData> {
    return new CreateRequestBuilder(Background_VarPayEmpHistData, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `Background_VarPayEmpHistData`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `Background_VarPayEmpHistData`.
   */
  update(entity: Background_VarPayEmpHistData): UpdateRequestBuilder<Background_VarPayEmpHistData> {
    return new UpdateRequestBuilder(Background_VarPayEmpHistData, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `Background_VarPayEmpHistData`.
   * @param backgroundElementId Key property. See [[Background_VarPayEmpHistData.backgroundElementId]].
   * @returns A request builder for creating requests that delete an entity of type `Background_VarPayEmpHistData`.
   */
  delete(backgroundElementId: BigNumber): DeleteRequestBuilder<Background_VarPayEmpHistData>;
  /**
   * Returns a request builder for deleting an entity of type `Background_VarPayEmpHistData`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `Background_VarPayEmpHistData` by taking the entity as a parameter.
   */
  delete(entity: Background_VarPayEmpHistData): DeleteRequestBuilder<Background_VarPayEmpHistData>;
  delete(backgroundElementIdOrEntity: any): DeleteRequestBuilder<Background_VarPayEmpHistData> {
    return new DeleteRequestBuilder(Background_VarPayEmpHistData, backgroundElementIdOrEntity instanceof Background_VarPayEmpHistData ? backgroundElementIdOrEntity : { backgroundElementId: backgroundElementIdOrEntity! });
  }
}

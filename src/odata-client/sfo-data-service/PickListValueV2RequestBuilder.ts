/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Moment } from 'moment';
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder } from '@sap-cloud-sdk/core';
import { PickListValueV2 } from './PickListValueV2';

/**
 * Request builder class for operations supported on the [[PickListValueV2]] entity.
 */
export class PickListValueV2RequestBuilder extends RequestBuilder<PickListValueV2> {
  /**
   * Returns a request builder for retrieving one `PickListValueV2` entity based on its keys.
   * @param pickListV2EffectiveStartDate Key property. See [[PickListValueV2.pickListV2EffectiveStartDate]].
   * @param pickListV2Id Key property. See [[PickListValueV2.pickListV2Id]].
   * @param externalCode Key property. See [[PickListValueV2.externalCode]].
   * @returns A request builder for creating requests to retrieve one `PickListValueV2` entity based on its keys.
   */
  getByKey(pickListV2EffectiveStartDate: Moment, pickListV2Id: string, externalCode: string): GetByKeyRequestBuilder<PickListValueV2> {
    return new GetByKeyRequestBuilder(PickListValueV2, {
      PickListV2_effectiveStartDate: pickListV2EffectiveStartDate,
      PickListV2_id: pickListV2Id,
      externalCode: externalCode
    });
  }

  /**
   * Returns a request builder for querying all `PickListValueV2` entities.
   * @returns A request builder for creating requests to retrieve all `PickListValueV2` entities.
   */
  getAll(): GetAllRequestBuilder<PickListValueV2> {
    return new GetAllRequestBuilder(PickListValueV2);
  }

  /**
   * Returns a request builder for creating a `PickListValueV2` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `PickListValueV2`.
   */
  create(entity: PickListValueV2): CreateRequestBuilder<PickListValueV2> {
    return new CreateRequestBuilder(PickListValueV2, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `PickListValueV2`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `PickListValueV2`.
   */
  update(entity: PickListValueV2): UpdateRequestBuilder<PickListValueV2> {
    return new UpdateRequestBuilder(PickListValueV2, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `PickListValueV2`.
   * @param pickListV2EffectiveStartDate Key property. See [[PickListValueV2.pickListV2EffectiveStartDate]].
   * @param pickListV2Id Key property. See [[PickListValueV2.pickListV2Id]].
   * @param externalCode Key property. See [[PickListValueV2.externalCode]].
   * @returns A request builder for creating requests that delete an entity of type `PickListValueV2`.
   */
  delete(pickListV2EffectiveStartDate: Moment, pickListV2Id: string, externalCode: string): DeleteRequestBuilder<PickListValueV2>;
  /**
   * Returns a request builder for deleting an entity of type `PickListValueV2`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `PickListValueV2` by taking the entity as a parameter.
   */
  delete(entity: PickListValueV2): DeleteRequestBuilder<PickListValueV2>;
  delete(pickListV2EffectiveStartDateOrEntity: any, pickListV2Id?: string, externalCode?: string): DeleteRequestBuilder<PickListValueV2> {
    return new DeleteRequestBuilder(PickListValueV2, pickListV2EffectiveStartDateOrEntity instanceof PickListValueV2 ? pickListV2EffectiveStartDateOrEntity : {
      PickListV2_effectiveStartDate: pickListV2EffectiveStartDateOrEntity!,
      PickListV2_id: pickListV2Id!,
      externalCode: externalCode!
    });
  }
}

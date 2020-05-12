/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Moment } from 'moment';
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder } from '@sap-cloud-sdk/core';
import { PayScalePayComponent } from './PayScalePayComponent';

/**
 * Request builder class for operations supported on the [[PayScalePayComponent]] entity.
 */
export class PayScalePayComponentRequestBuilder extends RequestBuilder<PayScalePayComponent> {
  /**
   * Returns a request builder for retrieving one `PayScalePayComponent` entity based on its keys.
   * @param payScaleLevelCode Key property. See [[PayScalePayComponent.payScaleLevelCode]].
   * @param payScaleLevelEffectiveStartDate Key property. See [[PayScalePayComponent.payScaleLevelEffectiveStartDate]].
   * @param code Key property. See [[PayScalePayComponent.code]].
   * @returns A request builder for creating requests to retrieve one `PayScalePayComponent` entity based on its keys.
   */
  getByKey(payScaleLevelCode: string, payScaleLevelEffectiveStartDate: Moment, code: string): GetByKeyRequestBuilder<PayScalePayComponent> {
    return new GetByKeyRequestBuilder(PayScalePayComponent, {
      PayScaleLevel_code: payScaleLevelCode,
      PayScaleLevel_effectiveStartDate: payScaleLevelEffectiveStartDate,
      code: code
    });
  }

  /**
   * Returns a request builder for querying all `PayScalePayComponent` entities.
   * @returns A request builder for creating requests to retrieve all `PayScalePayComponent` entities.
   */
  getAll(): GetAllRequestBuilder<PayScalePayComponent> {
    return new GetAllRequestBuilder(PayScalePayComponent);
  }

  /**
   * Returns a request builder for creating a `PayScalePayComponent` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `PayScalePayComponent`.
   */
  create(entity: PayScalePayComponent): CreateRequestBuilder<PayScalePayComponent> {
    return new CreateRequestBuilder(PayScalePayComponent, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `PayScalePayComponent`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `PayScalePayComponent`.
   */
  update(entity: PayScalePayComponent): UpdateRequestBuilder<PayScalePayComponent> {
    return new UpdateRequestBuilder(PayScalePayComponent, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `PayScalePayComponent`.
   * @param payScaleLevelCode Key property. See [[PayScalePayComponent.payScaleLevelCode]].
   * @param payScaleLevelEffectiveStartDate Key property. See [[PayScalePayComponent.payScaleLevelEffectiveStartDate]].
   * @param code Key property. See [[PayScalePayComponent.code]].
   * @returns A request builder for creating requests that delete an entity of type `PayScalePayComponent`.
   */
  delete(payScaleLevelCode: string, payScaleLevelEffectiveStartDate: Moment, code: string): DeleteRequestBuilder<PayScalePayComponent>;
  /**
   * Returns a request builder for deleting an entity of type `PayScalePayComponent`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `PayScalePayComponent` by taking the entity as a parameter.
   */
  delete(entity: PayScalePayComponent): DeleteRequestBuilder<PayScalePayComponent>;
  delete(payScaleLevelCodeOrEntity: any, payScaleLevelEffectiveStartDate?: Moment, code?: string): DeleteRequestBuilder<PayScalePayComponent> {
    return new DeleteRequestBuilder(PayScalePayComponent, payScaleLevelCodeOrEntity instanceof PayScalePayComponent ? payScaleLevelCodeOrEntity : {
      PayScaleLevel_code: payScaleLevelCodeOrEntity!,
      PayScaleLevel_effectiveStartDate: payScaleLevelEffectiveStartDate!,
      code: code!
    });
  }
}

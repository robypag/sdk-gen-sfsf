/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder } from '@sap-cloud-sdk/core';
import { EmpCostDistributionItem } from './EmpCostDistributionItem';

/**
 * Request builder class for operations supported on the [[EmpCostDistributionItem]] entity.
 */
export class EmpCostDistributionItemRequestBuilder extends RequestBuilder<EmpCostDistributionItem> {
  /**
   * Returns a request builder for retrieving one `EmpCostDistributionItem` entity based on its keys.
   * @param empCostDistributionEffectiveStartDate Key property. See [[EmpCostDistributionItem.empCostDistributionEffectiveStartDate]].
   * @param empCostDistributionUsersSysId Key property. See [[EmpCostDistributionItem.empCostDistributionUsersSysId]].
   * @param externalCode Key property. See [[EmpCostDistributionItem.externalCode]].
   * @returns A request builder for creating requests to retrieve one `EmpCostDistributionItem` entity based on its keys.
   */
  getByKey(empCostDistributionEffectiveStartDate: Moment, empCostDistributionUsersSysId: string, externalCode: BigNumber): GetByKeyRequestBuilder<EmpCostDistributionItem> {
    return new GetByKeyRequestBuilder(EmpCostDistributionItem, {
      EmpCostDistribution_effectiveStartDate: empCostDistributionEffectiveStartDate,
      EmpCostDistribution_usersSysId: empCostDistributionUsersSysId,
      externalCode: externalCode
    });
  }

  /**
   * Returns a request builder for querying all `EmpCostDistributionItem` entities.
   * @returns A request builder for creating requests to retrieve all `EmpCostDistributionItem` entities.
   */
  getAll(): GetAllRequestBuilder<EmpCostDistributionItem> {
    return new GetAllRequestBuilder(EmpCostDistributionItem);
  }

  /**
   * Returns a request builder for creating a `EmpCostDistributionItem` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `EmpCostDistributionItem`.
   */
  create(entity: EmpCostDistributionItem): CreateRequestBuilder<EmpCostDistributionItem> {
    return new CreateRequestBuilder(EmpCostDistributionItem, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `EmpCostDistributionItem`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `EmpCostDistributionItem`.
   */
  update(entity: EmpCostDistributionItem): UpdateRequestBuilder<EmpCostDistributionItem> {
    return new UpdateRequestBuilder(EmpCostDistributionItem, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `EmpCostDistributionItem`.
   * @param empCostDistributionEffectiveStartDate Key property. See [[EmpCostDistributionItem.empCostDistributionEffectiveStartDate]].
   * @param empCostDistributionUsersSysId Key property. See [[EmpCostDistributionItem.empCostDistributionUsersSysId]].
   * @param externalCode Key property. See [[EmpCostDistributionItem.externalCode]].
   * @returns A request builder for creating requests that delete an entity of type `EmpCostDistributionItem`.
   */
  delete(empCostDistributionEffectiveStartDate: Moment, empCostDistributionUsersSysId: string, externalCode: BigNumber): DeleteRequestBuilder<EmpCostDistributionItem>;
  /**
   * Returns a request builder for deleting an entity of type `EmpCostDistributionItem`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `EmpCostDistributionItem` by taking the entity as a parameter.
   */
  delete(entity: EmpCostDistributionItem): DeleteRequestBuilder<EmpCostDistributionItem>;
  delete(empCostDistributionEffectiveStartDateOrEntity: any, empCostDistributionUsersSysId?: string, externalCode?: BigNumber): DeleteRequestBuilder<EmpCostDistributionItem> {
    return new DeleteRequestBuilder(EmpCostDistributionItem, empCostDistributionEffectiveStartDateOrEntity instanceof EmpCostDistributionItem ? empCostDistributionEffectiveStartDateOrEntity : {
      EmpCostDistribution_effectiveStartDate: empCostDistributionEffectiveStartDateOrEntity!,
      EmpCostDistribution_usersSysId: empCostDistributionUsersSysId!,
      externalCode: externalCode!
    });
  }
}

/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Moment } from 'moment';
import { RequestBuilder, GetAllRequestBuilder, GetByKeyRequestBuilder, CreateRequestBuilder, UpdateRequestBuilder, DeleteRequestBuilder } from '@sap-cloud-sdk/core';
import { Cust_Rcm_Operator_Lookup } from './Cust_Rcm_Operator_Lookup';

/**
 * Request builder class for operations supported on the [[Cust_Rcm_Operator_Lookup]] entity.
 */
export class Cust_Rcm_Operator_LookupRequestBuilder extends RequestBuilder<Cust_Rcm_Operator_Lookup> {
  /**
   * Returns a request builder for retrieving one `Cust_Rcm_Operator_Lookup` entity based on its keys.
   * @param effectiveStartDate Key property. See [[Cust_Rcm_Operator_Lookup.effectiveStartDate]].
   * @param externalCode Key property. See [[Cust_Rcm_Operator_Lookup.externalCode]].
   * @returns A request builder for creating requests to retrieve one `Cust_Rcm_Operator_Lookup` entity based on its keys.
   */
  getByKey(effectiveStartDate: Moment, externalCode: string): GetByKeyRequestBuilder<Cust_Rcm_Operator_Lookup> {
    return new GetByKeyRequestBuilder(Cust_Rcm_Operator_Lookup, {
      effectiveStartDate: effectiveStartDate,
      externalCode: externalCode
    });
  }

  /**
   * Returns a request builder for querying all `Cust_Rcm_Operator_Lookup` entities.
   * @returns A request builder for creating requests to retrieve all `Cust_Rcm_Operator_Lookup` entities.
   */
  getAll(): GetAllRequestBuilder<Cust_Rcm_Operator_Lookup> {
    return new GetAllRequestBuilder(Cust_Rcm_Operator_Lookup);
  }

  /**
   * Returns a request builder for creating a `Cust_Rcm_Operator_Lookup` entity.
   * @param entity The entity to be created
   * @returns A request builder for creating requests that create an entity of type `Cust_Rcm_Operator_Lookup`.
   */
  create(entity: Cust_Rcm_Operator_Lookup): CreateRequestBuilder<Cust_Rcm_Operator_Lookup> {
    return new CreateRequestBuilder(Cust_Rcm_Operator_Lookup, entity);
  }

  /**
   * Returns a request builder for updating an entity of type `Cust_Rcm_Operator_Lookup`.
   * @param entity The entity to be updated
   * @returns A request builder for creating requests that update an entity of type `Cust_Rcm_Operator_Lookup`.
   */
  update(entity: Cust_Rcm_Operator_Lookup): UpdateRequestBuilder<Cust_Rcm_Operator_Lookup> {
    return new UpdateRequestBuilder(Cust_Rcm_Operator_Lookup, entity);
  }

  /**
   * Returns a request builder for deleting an entity of type `Cust_Rcm_Operator_Lookup`.
   * @param effectiveStartDate Key property. See [[Cust_Rcm_Operator_Lookup.effectiveStartDate]].
   * @param externalCode Key property. See [[Cust_Rcm_Operator_Lookup.externalCode]].
   * @returns A request builder for creating requests that delete an entity of type `Cust_Rcm_Operator_Lookup`.
   */
  delete(effectiveStartDate: Moment, externalCode: string): DeleteRequestBuilder<Cust_Rcm_Operator_Lookup>;
  /**
   * Returns a request builder for deleting an entity of type `Cust_Rcm_Operator_Lookup`.
   * @param entity Pass the entity to be deleted.
   * @returns A request builder for creating requests that delete an entity of type `Cust_Rcm_Operator_Lookup` by taking the entity as a parameter.
   */
  delete(entity: Cust_Rcm_Operator_Lookup): DeleteRequestBuilder<Cust_Rcm_Operator_Lookup>;
  delete(effectiveStartDateOrEntity: any, externalCode?: string): DeleteRequestBuilder<Cust_Rcm_Operator_Lookup> {
    return new DeleteRequestBuilder(Cust_Rcm_Operator_Lookup, effectiveStartDateOrEntity instanceof Cust_Rcm_Operator_Lookup ? effectiveStartDateOrEntity : {
      effectiveStartDate: effectiveStartDateOrEntity!,
      externalCode: externalCode!
    });
  }
}

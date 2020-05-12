/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeStringPropertyField, Entity, FieldType, createComplexType, edmToTs } from '@sap-cloud-sdk/core';

/**
 * CoRouteFormStatusBean
 */
export interface CoRouteFormStatusBean {
  /**
   * redirectUrl.
   * @nullable
   */
  redirectUrl?: string;
  /**
   * status.
   * @nullable
   */
  status?: string;
}

/**
 * @deprecated since v1.6.0. Use [[CoRouteFormStatusBean.build]] instead.
 */
export function createCoRouteFormStatusBean(json: any): CoRouteFormStatusBean {
  return CoRouteFormStatusBean.build(json);
}

/**
 * CoRouteFormStatusBeanField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class CoRouteFormStatusBeanField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
  /**
   * Representation of the [[CoRouteFormStatusBean.redirectUrl]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  redirectUrl: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('redirectUrl', this, 'Edm.String');
  /**
   * Representation of the [[CoRouteFormStatusBean.status]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  status: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('status', this, 'Edm.String');
}

export namespace CoRouteFormStatusBean {
  export function build(json: { [keys: string]: FieldType }): CoRouteFormStatusBean {
    return createComplexType(json, {
      redirectUrl: (redirectUrl: string) => ({ redirectUrl: edmToTs(redirectUrl, 'Edm.String') }),
      status: (status: string) => ({ status: edmToTs(status, 'Edm.String') })
    });
  }
}

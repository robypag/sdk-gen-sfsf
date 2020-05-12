/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { ComplexTypeField, ComplexTypeStringPropertyField, Entity, FieldType, createComplexType, edmToTs } from '@sap-cloud-sdk/core';

/**
 * CoSocialAccountBean
 */
export interface CoSocialAccountBean {
  /**
   * domain.
   * @nullable
   */
  domain?: string;
  /**
   * instantMessagingId.
   * @nullable
   */
  instantMessagingId?: string;
  /**
   * url.
   * @nullable
   */
  url?: string;
}

/**
 * @deprecated since v1.6.0. Use [[CoSocialAccountBean.build]] instead.
 */
export function createCoSocialAccountBean(json: any): CoSocialAccountBean {
  return CoSocialAccountBean.build(json);
}

/**
 * CoSocialAccountBeanField
 * @typeparam EntityT - Type of the entity the complex type field belongs to.
 */
export class CoSocialAccountBeanField<EntityT extends Entity> extends ComplexTypeField<EntityT> {
  /**
   * Representation of the [[CoSocialAccountBean.domain]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  domain: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('domain', this, 'Edm.String');
  /**
   * Representation of the [[CoSocialAccountBean.instantMessagingId]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  instantMessagingId: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('instantMessagingId', this, 'Edm.String');
  /**
   * Representation of the [[CoSocialAccountBean.url]] property for query construction.
   * Use to reference this property in query operations such as 'filter' in the fluent request API.
   */
  url: ComplexTypeStringPropertyField<EntityT> = new ComplexTypeStringPropertyField('url', this, 'Edm.String');
}

export namespace CoSocialAccountBean {
  export function build(json: { [keys: string]: FieldType }): CoSocialAccountBean {
    return createComplexType(json, {
      domain: (domain: string) => ({ domain: edmToTs(domain, 'Edm.String') }),
      instantMessagingId: (instantMessagingId: string) => ({ instantMessagingId: edmToTs(instantMessagingId, 'Edm.String') }),
      url: (url: string) => ({ url: edmToTs(url, 'Edm.String') })
    });
  }
}

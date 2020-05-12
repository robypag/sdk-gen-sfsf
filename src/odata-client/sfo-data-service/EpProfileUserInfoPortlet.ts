/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { EpProfileUserInfoPortletRequestBuilder } from './EpProfileUserInfoPortletRequestBuilder';
import { AllFields, BooleanField, CustomField, Entity, EntityBuilderType, Selectable, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "EPProfileUserInfoPortlet" of service "SFOData".
 */
export class EpProfileUserInfoPortlet extends Entity implements EpProfileUserInfoPortletType {
  /**
   * Technical entity name for EpProfileUserInfoPortlet.
   */
  static _entityName = 'EPProfileUserInfoPortlet';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for EpProfileUserInfoPortlet.
   */
  static _serviceName = 'SFOData';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = 'VALUE_IS_UNDEFINED';
  /**
   * dashboard Id.
   */
  dashboardId!: string;
  /**
   * is PII.
   * @nullable
   */
  isPii?: boolean;
  /**
   * is Writable.
   * @nullable
   */
  isWritable?: boolean;
  /**
   * portlet Id.
   */
  portletId!: string;
  /**
   * standard Or UserInfo ElementId.
   * @nullable
   */
  standardOrUserInfoElementId?: string;
  /**
   * user Id.
   */
  userId!: string;

  /**
   * Returns an entity builder to construct instances `EpProfileUserInfoPortlet`.
   * @returns A builder that constructs instances of entity type `EpProfileUserInfoPortlet`.
   */
  static builder(): EntityBuilderType<EpProfileUserInfoPortlet, EpProfileUserInfoPortletTypeForceMandatory> {
    return Entity.entityBuilder(EpProfileUserInfoPortlet);
  }

  /**
   * Returns a request builder to construct requests for operations on the `EpProfileUserInfoPortlet` entity type.
   * @returns A `EpProfileUserInfoPortlet` request builder.
   */
  static requestBuilder(): EpProfileUserInfoPortletRequestBuilder {
    return new EpProfileUserInfoPortletRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `EpProfileUserInfoPortlet`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `EpProfileUserInfoPortlet`.
   */
  static customField(fieldName: string): CustomField<EpProfileUserInfoPortlet> {
    return Entity.customFieldSelector(fieldName, EpProfileUserInfoPortlet);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
}

export interface EpProfileUserInfoPortletType {
  dashboardId: string;
  isPii?: boolean;
  isWritable?: boolean;
  portletId: string;
  standardOrUserInfoElementId?: string;
  userId: string;
}

export interface EpProfileUserInfoPortletTypeForceMandatory {
  dashboardId: string;
  isPii: boolean;
  isWritable: boolean;
  portletId: string;
  standardOrUserInfoElementId: string;
  userId: string;
}

export namespace EpProfileUserInfoPortlet {
  /**
   * Static representation of the [[dashboardId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DASHBOARD_ID: StringField<EpProfileUserInfoPortlet> = new StringField('dashboardId', EpProfileUserInfoPortlet, 'Edm.String');
  /**
   * Static representation of the [[isPii]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const IS_PII: BooleanField<EpProfileUserInfoPortlet> = new BooleanField('isPII', EpProfileUserInfoPortlet, 'Edm.Boolean');
  /**
   * Static representation of the [[isWritable]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const IS_WRITABLE: BooleanField<EpProfileUserInfoPortlet> = new BooleanField('isWritable', EpProfileUserInfoPortlet, 'Edm.Boolean');
  /**
   * Static representation of the [[portletId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PORTLET_ID: StringField<EpProfileUserInfoPortlet> = new StringField('portletId', EpProfileUserInfoPortlet, 'Edm.String');
  /**
   * Static representation of the [[standardOrUserInfoElementId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const STANDARD_OR_USER_INFO_ELEMENT_ID: StringField<EpProfileUserInfoPortlet> = new StringField('standardOrUserInfoElementId', EpProfileUserInfoPortlet, 'Edm.String');
  /**
   * Static representation of the [[userId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const USER_ID: StringField<EpProfileUserInfoPortlet> = new StringField('userId', EpProfileUserInfoPortlet, 'Edm.String');
  /**
   * All fields of the EpProfileUserInfoPortlet entity.
   */
  export const _allFields: Array<StringField<EpProfileUserInfoPortlet> | BooleanField<EpProfileUserInfoPortlet>> = [
    EpProfileUserInfoPortlet.DASHBOARD_ID,
    EpProfileUserInfoPortlet.IS_PII,
    EpProfileUserInfoPortlet.IS_WRITABLE,
    EpProfileUserInfoPortlet.PORTLET_ID,
    EpProfileUserInfoPortlet.STANDARD_OR_USER_INFO_ELEMENT_ID,
    EpProfileUserInfoPortlet.USER_ID
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<EpProfileUserInfoPortlet> = new AllFields('*', EpProfileUserInfoPortlet);
  /**
   * All key fields of the EpProfileUserInfoPortlet entity.
   */
  export const _keyFields: Array<Selectable<EpProfileUserInfoPortlet>> = [EpProfileUserInfoPortlet.DASHBOARD_ID, EpProfileUserInfoPortlet.PORTLET_ID, EpProfileUserInfoPortlet.USER_ID];
  /**
   * Mapping of all key field names to the respective static field property EpProfileUserInfoPortlet.
   */
  export const _keys: { [keys: string]: Selectable<EpProfileUserInfoPortlet> } = EpProfileUserInfoPortlet._keyFields.reduce((acc: { [keys: string]: Selectable<EpProfileUserInfoPortlet> }, field: Selectable<EpProfileUserInfoPortlet>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}

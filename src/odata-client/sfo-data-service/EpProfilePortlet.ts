/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { EpProfilePortletRequestBuilder } from './EpProfilePortletRequestBuilder';
import { AllFields, BooleanField, CustomField, Entity, EntityBuilderType, NumberField, Selectable, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "EPProfilePortlet" of service "SFOData".
 */
export class EpProfilePortlet extends Entity implements EpProfilePortletType {
  /**
   * Technical entity name for EpProfilePortlet.
   */
  static _entityName = 'EPProfilePortlet';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for EpProfilePortlet.
   */
  static _serviceName = 'SFOData';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = 'VALUE_IS_UNDEFINED';
  /**
   * backgruond Element Id.
   * @nullable
   */
  backgroundElementId?: string;
  /**
   * dashboard Id.
   */
  dashboardId!: string;
  /**
   * entity Name.
   * @nullable
   */
  entityName?: string;
  /**
   * instructional Text.
   * @nullable
   */
  instructionalText?: string;
  /**
   * is Editable.
   * @nullable
   */
  isEditable?: boolean;
  /**
   * is Feedback Portlet.
   * @nullable
   */
  isFeedbackPortlet?: boolean;
  /**
   * portlet Id.
   */
  portletId!: string;
  /**
   * portlet Label.
   * @nullable
   */
  portletLabel?: string;
  /**
   * portlet Type.
   * @nullable
   */
  portletType?: number;
  /**
   * user Id.
   */
  userId!: string;

  /**
   * Returns an entity builder to construct instances `EpProfilePortlet`.
   * @returns A builder that constructs instances of entity type `EpProfilePortlet`.
   */
  static builder(): EntityBuilderType<EpProfilePortlet, EpProfilePortletTypeForceMandatory> {
    return Entity.entityBuilder(EpProfilePortlet);
  }

  /**
   * Returns a request builder to construct requests for operations on the `EpProfilePortlet` entity type.
   * @returns A `EpProfilePortlet` request builder.
   */
  static requestBuilder(): EpProfilePortletRequestBuilder {
    return new EpProfilePortletRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `EpProfilePortlet`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `EpProfilePortlet`.
   */
  static customField(fieldName: string): CustomField<EpProfilePortlet> {
    return Entity.customFieldSelector(fieldName, EpProfilePortlet);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
}

export interface EpProfilePortletType {
  backgroundElementId?: string;
  dashboardId: string;
  entityName?: string;
  instructionalText?: string;
  isEditable?: boolean;
  isFeedbackPortlet?: boolean;
  portletId: string;
  portletLabel?: string;
  portletType?: number;
  userId: string;
}

export interface EpProfilePortletTypeForceMandatory {
  backgroundElementId: string;
  dashboardId: string;
  entityName: string;
  instructionalText: string;
  isEditable: boolean;
  isFeedbackPortlet: boolean;
  portletId: string;
  portletLabel: string;
  portletType: number;
  userId: string;
}

export namespace EpProfilePortlet {
  /**
   * Static representation of the [[backgroundElementId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BACKGROUND_ELEMENT_ID: StringField<EpProfilePortlet> = new StringField('backgroundElementId', EpProfilePortlet, 'Edm.String');
  /**
   * Static representation of the [[dashboardId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DASHBOARD_ID: StringField<EpProfilePortlet> = new StringField('dashboardId', EpProfilePortlet, 'Edm.String');
  /**
   * Static representation of the [[entityName]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ENTITY_NAME: StringField<EpProfilePortlet> = new StringField('entityName', EpProfilePortlet, 'Edm.String');
  /**
   * Static representation of the [[instructionalText]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const INSTRUCTIONAL_TEXT: StringField<EpProfilePortlet> = new StringField('instructionalText', EpProfilePortlet, 'Edm.String');
  /**
   * Static representation of the [[isEditable]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const IS_EDITABLE: BooleanField<EpProfilePortlet> = new BooleanField('isEditable', EpProfilePortlet, 'Edm.Boolean');
  /**
   * Static representation of the [[isFeedbackPortlet]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const IS_FEEDBACK_PORTLET: BooleanField<EpProfilePortlet> = new BooleanField('isFeedbackPortlet', EpProfilePortlet, 'Edm.Boolean');
  /**
   * Static representation of the [[portletId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PORTLET_ID: StringField<EpProfilePortlet> = new StringField('portletId', EpProfilePortlet, 'Edm.String');
  /**
   * Static representation of the [[portletLabel]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PORTLET_LABEL: StringField<EpProfilePortlet> = new StringField('portletLabel', EpProfilePortlet, 'Edm.String');
  /**
   * Static representation of the [[portletType]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PORTLET_TYPE: NumberField<EpProfilePortlet> = new NumberField('portletType', EpProfilePortlet, 'Edm.Int32');
  /**
   * Static representation of the [[userId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const USER_ID: StringField<EpProfilePortlet> = new StringField('userId', EpProfilePortlet, 'Edm.String');
  /**
   * All fields of the EpProfilePortlet entity.
   */
  export const _allFields: Array<StringField<EpProfilePortlet> | BooleanField<EpProfilePortlet> | NumberField<EpProfilePortlet>> = [
    EpProfilePortlet.BACKGROUND_ELEMENT_ID,
    EpProfilePortlet.DASHBOARD_ID,
    EpProfilePortlet.ENTITY_NAME,
    EpProfilePortlet.INSTRUCTIONAL_TEXT,
    EpProfilePortlet.IS_EDITABLE,
    EpProfilePortlet.IS_FEEDBACK_PORTLET,
    EpProfilePortlet.PORTLET_ID,
    EpProfilePortlet.PORTLET_LABEL,
    EpProfilePortlet.PORTLET_TYPE,
    EpProfilePortlet.USER_ID
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<EpProfilePortlet> = new AllFields('*', EpProfilePortlet);
  /**
   * All key fields of the EpProfilePortlet entity.
   */
  export const _keyFields: Array<Selectable<EpProfilePortlet>> = [EpProfilePortlet.DASHBOARD_ID, EpProfilePortlet.PORTLET_ID, EpProfilePortlet.USER_ID];
  /**
   * Mapping of all key field names to the respective static field property EpProfilePortlet.
   */
  export const _keys: { [keys: string]: Selectable<EpProfilePortlet> } = EpProfilePortlet._keyFields.reduce((acc: { [keys: string]: Selectable<EpProfilePortlet> }, field: Selectable<EpProfilePortlet>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}

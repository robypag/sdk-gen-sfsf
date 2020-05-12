/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { EpCustomBackgroundPortletRequestBuilder } from './EpCustomBackgroundPortletRequestBuilder';
import { EpCustomBackgroundPortletProperty, EpCustomBackgroundPortletPropertyField } from './EpCustomBackgroundPortletProperty';
import { AllFields, BooleanField, CustomField, Entity, EntityBuilderType, Selectable, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "EPCustomBackgroundPortlet" of service "SFOData".
 */
export class EpCustomBackgroundPortlet extends Entity implements EpCustomBackgroundPortletType {
  /**
   * Technical entity name for EpCustomBackgroundPortlet.
   */
  static _entityName = 'EPCustomBackgroundPortlet';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for EpCustomBackgroundPortlet.
   */
  static _serviceName = 'SFOData';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = 'VALUE_IS_UNDEFINED';
  /**
   * backgroundElementId.
   */
  backgroundElementId!: string;
  /**
   * backgroundPropertyLists.
   * @nullable
   */
  backgroundPropertyLists?: EpCustomBackgroundPortletProperty;
  /**
   * editable.
   * @nullable
   */
  editable?: boolean;
  /**
   * userId.
   * @nullable
   */
  userId?: string;
  /**
   * viewable.
   * @nullable
   */
  viewable?: boolean;

  /**
   * Returns an entity builder to construct instances `EpCustomBackgroundPortlet`.
   * @returns A builder that constructs instances of entity type `EpCustomBackgroundPortlet`.
   */
  static builder(): EntityBuilderType<EpCustomBackgroundPortlet, EpCustomBackgroundPortletTypeForceMandatory> {
    return Entity.entityBuilder(EpCustomBackgroundPortlet);
  }

  /**
   * Returns a request builder to construct requests for operations on the `EpCustomBackgroundPortlet` entity type.
   * @returns A `EpCustomBackgroundPortlet` request builder.
   */
  static requestBuilder(): EpCustomBackgroundPortletRequestBuilder {
    return new EpCustomBackgroundPortletRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `EpCustomBackgroundPortlet`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `EpCustomBackgroundPortlet`.
   */
  static customField(fieldName: string): CustomField<EpCustomBackgroundPortlet> {
    return Entity.customFieldSelector(fieldName, EpCustomBackgroundPortlet);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
}

export interface EpCustomBackgroundPortletType {
  backgroundElementId: string;
  backgroundPropertyLists?: EpCustomBackgroundPortletProperty;
  editable?: boolean;
  userId?: string;
  viewable?: boolean;
}

export interface EpCustomBackgroundPortletTypeForceMandatory {
  backgroundElementId: string;
  backgroundPropertyLists: EpCustomBackgroundPortletProperty;
  editable: boolean;
  userId: string;
  viewable: boolean;
}

export namespace EpCustomBackgroundPortlet {
  /**
   * Static representation of the [[backgroundElementId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BACKGROUND_ELEMENT_ID: StringField<EpCustomBackgroundPortlet> = new StringField('backgroundElementId', EpCustomBackgroundPortlet, 'Edm.String');
  /**
   * Static representation of the [[backgroundPropertyLists]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BACKGROUND_PROPERTY_LISTS: EpCustomBackgroundPortletPropertyField<EpCustomBackgroundPortlet> = new EpCustomBackgroundPortletPropertyField('backgroundPropertyLists', EpCustomBackgroundPortlet);
  /**
   * Static representation of the [[editable]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EDITABLE: BooleanField<EpCustomBackgroundPortlet> = new BooleanField('editable', EpCustomBackgroundPortlet, 'Edm.Boolean');
  /**
   * Static representation of the [[userId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const USER_ID: StringField<EpCustomBackgroundPortlet> = new StringField('userId', EpCustomBackgroundPortlet, 'Edm.String');
  /**
   * Static representation of the [[viewable]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const VIEWABLE: BooleanField<EpCustomBackgroundPortlet> = new BooleanField('viewable', EpCustomBackgroundPortlet, 'Edm.Boolean');
  /**
   * All fields of the EpCustomBackgroundPortlet entity.
   */
  export const _allFields: Array<StringField<EpCustomBackgroundPortlet> | EpCustomBackgroundPortletPropertyField<EpCustomBackgroundPortlet> | BooleanField<EpCustomBackgroundPortlet>> = [
    EpCustomBackgroundPortlet.BACKGROUND_ELEMENT_ID,
    EpCustomBackgroundPortlet.BACKGROUND_PROPERTY_LISTS,
    EpCustomBackgroundPortlet.EDITABLE,
    EpCustomBackgroundPortlet.USER_ID,
    EpCustomBackgroundPortlet.VIEWABLE
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<EpCustomBackgroundPortlet> = new AllFields('*', EpCustomBackgroundPortlet);
  /**
   * All key fields of the EpCustomBackgroundPortlet entity.
   */
  export const _keyFields: Array<Selectable<EpCustomBackgroundPortlet>> = [EpCustomBackgroundPortlet.BACKGROUND_ELEMENT_ID];
  /**
   * Mapping of all key field names to the respective static field property EpCustomBackgroundPortlet.
   */
  export const _keys: { [keys: string]: Selectable<EpCustomBackgroundPortlet> } = EpCustomBackgroundPortlet._keyFields.reduce((acc: { [keys: string]: Selectable<EpCustomBackgroundPortlet> }, field: Selectable<EpCustomBackgroundPortlet>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}

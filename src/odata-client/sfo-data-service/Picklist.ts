/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { PicklistRequestBuilder } from './PicklistRequestBuilder';
import { AllFields, CustomField, Entity, EntityBuilderType, Link, Selectable, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "Picklist" of service "SFOData".
 */
export class Picklist extends Entity implements PicklistType {
  /**
   * Technical entity name for Picklist.
   */
  static _entityName = 'Picklist';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for Picklist.
   */
  static _serviceName = 'SFOData';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = 'VALUE_IS_UNDEFINED';
  /**
   * picklistId.
   * Maximum length: 64.
   */
  picklistId!: string;
  /**
   * One-to-many navigation property to the [[PicklistOption]] entity.
   */
  picklistOptions!: PicklistOption[];

  /**
   * Returns an entity builder to construct instances `Picklist`.
   * @returns A builder that constructs instances of entity type `Picklist`.
   */
  static builder(): EntityBuilderType<Picklist, PicklistTypeForceMandatory> {
    return Entity.entityBuilder(Picklist);
  }

  /**
   * Returns a request builder to construct requests for operations on the `Picklist` entity type.
   * @returns A `Picklist` request builder.
   */
  static requestBuilder(): PicklistRequestBuilder {
    return new PicklistRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `Picklist`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `Picklist`.
   */
  static customField(fieldName: string): CustomField<Picklist> {
    return Entity.customFieldSelector(fieldName, Picklist);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
}

import { PicklistOption, PicklistOptionType } from './PicklistOption';

export interface PicklistType {
  picklistId: string;
  picklistOptions: PicklistOptionType[];
}

export interface PicklistTypeForceMandatory {
  picklistId: string;
  picklistOptions: PicklistOptionType[];
}

export namespace Picklist {
  /**
   * Static representation of the [[picklistId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PICKLIST_ID: StringField<Picklist> = new StringField('picklistId', Picklist, 'Edm.String');
  /**
   * Static representation of the one-to-many navigation property [[picklistOptions]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PICKLIST_OPTIONS: Link<Picklist, PicklistOption> = new Link('picklistOptions', Picklist, PicklistOption);
  /**
   * All fields of the Picklist entity.
   */
  export const _allFields: Array<StringField<Picklist> | Link<Picklist, PicklistOption>> = [
    Picklist.PICKLIST_ID,
    Picklist.PICKLIST_OPTIONS
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<Picklist> = new AllFields('*', Picklist);
  /**
   * All key fields of the Picklist entity.
   */
  export const _keyFields: Array<Selectable<Picklist>> = [Picklist.PICKLIST_ID];
  /**
   * Mapping of all key field names to the respective static field property Picklist.
   */
  export const _keys: { [keys: string]: Selectable<Picklist> } = Picklist._keyFields.reduce((acc: { [keys: string]: Selectable<Picklist> }, field: Selectable<Picklist>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}

/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { TerritoryRequestBuilder } from './TerritoryRequestBuilder';
import { AllFields, CustomField, Entity, EntityBuilderType, Selectable, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "Territory" of service "SFOData".
 */
export class Territory extends Entity implements TerritoryType {
  /**
   * Technical entity name for Territory.
   */
  static _entityName = 'Territory';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for Territory.
   */
  static _serviceName = 'SFOData';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = 'VALUE_IS_UNDEFINED';
  /**
   * territory Code.
   * Maximum length: 32.
   */
  territoryCode!: string;
  /**
   * territory Name.
   * Maximum length: 512.
   * @nullable
   */
  territoryName?: string;

  /**
   * Returns an entity builder to construct instances `Territory`.
   * @returns A builder that constructs instances of entity type `Territory`.
   */
  static builder(): EntityBuilderType<Territory, TerritoryTypeForceMandatory> {
    return Entity.entityBuilder(Territory);
  }

  /**
   * Returns a request builder to construct requests for operations on the `Territory` entity type.
   * @returns A `Territory` request builder.
   */
  static requestBuilder(): TerritoryRequestBuilder {
    return new TerritoryRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `Territory`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `Territory`.
   */
  static customField(fieldName: string): CustomField<Territory> {
    return Entity.customFieldSelector(fieldName, Territory);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
}

export interface TerritoryType {
  territoryCode: string;
  territoryName?: string;
}

export interface TerritoryTypeForceMandatory {
  territoryCode: string;
  territoryName: string;
}

export namespace Territory {
  /**
   * Static representation of the [[territoryCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TERRITORY_CODE: StringField<Territory> = new StringField('territoryCode', Territory, 'Edm.String');
  /**
   * Static representation of the [[territoryName]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TERRITORY_NAME: StringField<Territory> = new StringField('territoryName', Territory, 'Edm.String');
  /**
   * All fields of the Territory entity.
   */
  export const _allFields: Array<StringField<Territory>> = [
    Territory.TERRITORY_CODE,
    Territory.TERRITORY_NAME
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<Territory> = new AllFields('*', Territory);
  /**
   * All key fields of the Territory entity.
   */
  export const _keyFields: Array<Selectable<Territory>> = [Territory.TERRITORY_CODE];
  /**
   * Mapping of all key field names to the respective static field property Territory.
   */
  export const _keys: { [keys: string]: Selectable<Territory> } = Territory._keyFields.reduce((acc: { [keys: string]: Selectable<Territory> }, field: Selectable<Territory>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}

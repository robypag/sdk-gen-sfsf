/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { Entity_1RequestBuilder } from './Entity_1RequestBuilder';
import { Property, PropertyField } from './Property';
import { Localstring, LocalstringField } from './Localstring';
import { Navigation, NavigationField } from './Navigation';
import { AllFields, BooleanField, CustomField, Entity, EntityBuilderType, Selectable, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "Entity" of service "SFOData".
 */
export class Entity_1 extends Entity implements Entity_1Type {
  /**
   * Technical entity name for Entity_1.
   */
  static _entityName = 'Entity';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for Entity_1.
   */
  static _serviceName = 'SFOData';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = 'VALUE_IS_UNDEFINED';
  /**
   * deletable.
   * @nullable
   */
  deletable?: boolean;
  /**
   * deletablePath.
   * @nullable
   */
  deletablePath?: string;
  /**
   * effectiveDated.
   * @nullable
   */
  effectiveDated?: boolean;
  /**
   * insertable.
   * @nullable
   */
  insertable?: boolean;
  /**
   * keyProperties.
   * @nullable
   */
  keyProperties?: Property;
  /**
   * label.
   * @nullable
   */
  label?: Localstring;
  /**
   * name.
   * @nullable
   */
  name?: string;
  /**
   * navigationProperties.
   * @nullable
   */
  navigationProperties?: Navigation;
  /**
   * nonNavigationProperties.
   * @nullable
   */
  nonNavigationProperties?: Property;
  /**
   * path.
   */
  path!: string;
  /**
   * properties.
   * @nullable
   */
  properties?: Property;
  /**
   * searchable.
   * @nullable
   */
  searchable?: boolean;
  /**
   * supportElm.
   */
  supportElm!: boolean;
  /**
   * updatable.
   * @nullable
   */
  updatable?: boolean;
  /**
   * updatablePath.
   * @nullable
   */
  updatablePath?: string;
  /**
   * upsertable.
   * @nullable
   */
  upsertable?: boolean;

  /**
   * Returns an entity builder to construct instances `Entity_1`.
   * @returns A builder that constructs instances of entity type `Entity_1`.
   */
  static builder(): EntityBuilderType<Entity_1, Entity_1TypeForceMandatory> {
    return Entity.entityBuilder(Entity_1);
  }

  /**
   * Returns a request builder to construct requests for operations on the `Entity_1` entity type.
   * @returns A `Entity_1` request builder.
   */
  static requestBuilder(): Entity_1RequestBuilder {
    return new Entity_1RequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `Entity_1`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `Entity_1`.
   */
  static customField(fieldName: string): CustomField<Entity_1> {
    return Entity.customFieldSelector(fieldName, Entity_1);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
}

export interface Entity_1Type {
  deletable?: boolean;
  deletablePath?: string;
  effectiveDated?: boolean;
  insertable?: boolean;
  keyProperties?: Property;
  label?: Localstring;
  name?: string;
  navigationProperties?: Navigation;
  nonNavigationProperties?: Property;
  path: string;
  properties?: Property;
  searchable?: boolean;
  supportElm: boolean;
  updatable?: boolean;
  updatablePath?: string;
  upsertable?: boolean;
}

export interface Entity_1TypeForceMandatory {
  deletable: boolean;
  deletablePath: string;
  effectiveDated: boolean;
  insertable: boolean;
  keyProperties: Property;
  label: Localstring;
  name: string;
  navigationProperties: Navigation;
  nonNavigationProperties: Property;
  path: string;
  properties: Property;
  searchable: boolean;
  supportElm: boolean;
  updatable: boolean;
  updatablePath: string;
  upsertable: boolean;
}

export namespace Entity_1 {
  /**
   * Static representation of the [[deletable]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DELETABLE: BooleanField<Entity_1> = new BooleanField('deletable', Entity_1, 'Edm.Boolean');
  /**
   * Static representation of the [[deletablePath]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DELETABLE_PATH: StringField<Entity_1> = new StringField('deletablePath', Entity_1, 'Edm.String');
  /**
   * Static representation of the [[effectiveDated]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EFFECTIVE_DATED: BooleanField<Entity_1> = new BooleanField('effectiveDated', Entity_1, 'Edm.Boolean');
  /**
   * Static representation of the [[insertable]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const INSERTABLE: BooleanField<Entity_1> = new BooleanField('insertable', Entity_1, 'Edm.Boolean');
  /**
   * Static representation of the [[keyProperties]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const KEY_PROPERTIES: PropertyField<Entity_1> = new PropertyField('keyProperties', Entity_1);
  /**
   * Static representation of the [[label]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LABEL: LocalstringField<Entity_1> = new LocalstringField('label', Entity_1);
  /**
   * Static representation of the [[name]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NAME: StringField<Entity_1> = new StringField('name', Entity_1, 'Edm.String');
  /**
   * Static representation of the [[navigationProperties]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NAVIGATION_PROPERTIES: NavigationField<Entity_1> = new NavigationField('navigationProperties', Entity_1);
  /**
   * Static representation of the [[nonNavigationProperties]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NON_NAVIGATION_PROPERTIES: PropertyField<Entity_1> = new PropertyField('nonNavigationProperties', Entity_1);
  /**
   * Static representation of the [[path]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PATH: StringField<Entity_1> = new StringField('path', Entity_1, 'Edm.String');
  /**
   * Static representation of the [[properties]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PROPERTIES: PropertyField<Entity_1> = new PropertyField('properties', Entity_1);
  /**
   * Static representation of the [[searchable]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SEARCHABLE: BooleanField<Entity_1> = new BooleanField('searchable', Entity_1, 'Edm.Boolean');
  /**
   * Static representation of the [[supportElm]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SUPPORT_ELM: BooleanField<Entity_1> = new BooleanField('supportElm', Entity_1, 'Edm.Boolean');
  /**
   * Static representation of the [[updatable]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const UPDATABLE: BooleanField<Entity_1> = new BooleanField('updatable', Entity_1, 'Edm.Boolean');
  /**
   * Static representation of the [[updatablePath]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const UPDATABLE_PATH: StringField<Entity_1> = new StringField('updatablePath', Entity_1, 'Edm.String');
  /**
   * Static representation of the [[upsertable]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const UPSERTABLE: BooleanField<Entity_1> = new BooleanField('upsertable', Entity_1, 'Edm.Boolean');
  /**
   * All fields of the Entity_1 entity.
   */
  export const _allFields: Array<BooleanField<Entity_1> | StringField<Entity_1> | PropertyField<Entity_1> | LocalstringField<Entity_1> | NavigationField<Entity_1>> = [
    Entity_1.DELETABLE,
    Entity_1.DELETABLE_PATH,
    Entity_1.EFFECTIVE_DATED,
    Entity_1.INSERTABLE,
    Entity_1.KEY_PROPERTIES,
    Entity_1.LABEL,
    Entity_1.NAME,
    Entity_1.NAVIGATION_PROPERTIES,
    Entity_1.NON_NAVIGATION_PROPERTIES,
    Entity_1.PATH,
    Entity_1.PROPERTIES,
    Entity_1.SEARCHABLE,
    Entity_1.SUPPORT_ELM,
    Entity_1.UPDATABLE,
    Entity_1.UPDATABLE_PATH,
    Entity_1.UPSERTABLE
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<Entity_1> = new AllFields('*', Entity_1);
  /**
   * All key fields of the Entity_1 entity.
   */
  export const _keyFields: Array<Selectable<Entity_1>> = [Entity_1.PATH];
  /**
   * Mapping of all key field names to the respective static field property Entity_1.
   */
  export const _keys: { [keys: string]: Selectable<Entity_1> } = Entity_1._keyFields.reduce((acc: { [keys: string]: Selectable<Entity_1> }, field: Selectable<Entity_1>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}

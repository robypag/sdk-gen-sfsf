/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { BadgeTemplatesRequestBuilder } from './BadgeTemplatesRequestBuilder';
import { AllFields, BinaryField, BooleanField, CustomField, Entity, EntityBuilderType, NumberField, Selectable, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "BadgeTemplates" of service "SFOData".
 */
export class BadgeTemplates extends Entity implements BadgeTemplatesType {
  /**
   * Technical entity name for BadgeTemplates.
   */
  static _entityName = 'BadgeTemplates';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for BadgeTemplates.
   */
  static _serviceName = 'SFOData';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = 'VALUE_IS_UNDEFINED';
  /**
   * badgeId.
   */
  badgeId!: number;
  /**
   * badgeTitle.
   * @nullable
   */
  badgeTitle?: string;
  /**
   * customBadge.
   * @nullable
   */
  customBadge?: boolean;
  /**
   * photo.
   * @nullable
   */
  photo?: string;

  /**
   * Returns an entity builder to construct instances `BadgeTemplates`.
   * @returns A builder that constructs instances of entity type `BadgeTemplates`.
   */
  static builder(): EntityBuilderType<BadgeTemplates, BadgeTemplatesTypeForceMandatory> {
    return Entity.entityBuilder(BadgeTemplates);
  }

  /**
   * Returns a request builder to construct requests for operations on the `BadgeTemplates` entity type.
   * @returns A `BadgeTemplates` request builder.
   */
  static requestBuilder(): BadgeTemplatesRequestBuilder {
    return new BadgeTemplatesRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `BadgeTemplates`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `BadgeTemplates`.
   */
  static customField(fieldName: string): CustomField<BadgeTemplates> {
    return Entity.customFieldSelector(fieldName, BadgeTemplates);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
}

export interface BadgeTemplatesType {
  badgeId: number;
  badgeTitle?: string;
  customBadge?: boolean;
  photo?: string;
}

export interface BadgeTemplatesTypeForceMandatory {
  badgeId: number;
  badgeTitle: string;
  customBadge: boolean;
  photo: string;
}

export namespace BadgeTemplates {
  /**
   * Static representation of the [[badgeId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BADGE_ID: NumberField<BadgeTemplates> = new NumberField('badgeId', BadgeTemplates, 'Edm.Int32');
  /**
   * Static representation of the [[badgeTitle]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BADGE_TITLE: StringField<BadgeTemplates> = new StringField('badgeTitle', BadgeTemplates, 'Edm.String');
  /**
   * Static representation of the [[customBadge]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CUSTOM_BADGE: BooleanField<BadgeTemplates> = new BooleanField('customBadge', BadgeTemplates, 'Edm.Boolean');
  /**
   * Static representation of the [[photo]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PHOTO: BinaryField<BadgeTemplates> = new BinaryField('photo', BadgeTemplates, 'Edm.Binary');
  /**
   * All fields of the BadgeTemplates entity.
   */
  export const _allFields: Array<NumberField<BadgeTemplates> | StringField<BadgeTemplates> | BooleanField<BadgeTemplates> | BinaryField<BadgeTemplates>> = [
    BadgeTemplates.BADGE_ID,
    BadgeTemplates.BADGE_TITLE,
    BadgeTemplates.CUSTOM_BADGE,
    BadgeTemplates.PHOTO
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<BadgeTemplates> = new AllFields('*', BadgeTemplates);
  /**
   * All key fields of the BadgeTemplates entity.
   */
  export const _keyFields: Array<Selectable<BadgeTemplates>> = [BadgeTemplates.BADGE_ID];
  /**
   * Mapping of all key field names to the respective static field property BadgeTemplates.
   */
  export const _keys: { [keys: string]: Selectable<BadgeTemplates> } = BadgeTemplates._keyFields.reduce((acc: { [keys: string]: Selectable<BadgeTemplates> }, field: Selectable<BadgeTemplates>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}

/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { LegacyPositionEntityRequestBuilder } from './LegacyPositionEntityRequestBuilder';
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, CustomField, DateField, Entity, EntityBuilderType, Link, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "LegacyPositionEntity" of service "SFOData".
 */
export class LegacyPositionEntity extends Entity implements LegacyPositionEntityType {
  /**
   * Technical entity name for LegacyPositionEntity.
   */
  static _entityName = 'LegacyPositionEntity';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for LegacyPositionEntity.
   */
  static _serviceName = 'SFOData';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = 'VALUE_IS_UNDEFINED';
  /**
   * Create Date.
   * @nullable
   */
  createDate?: Moment;
  /**
   * incumbent.
   * Maximum length: 100.
   * @nullable
   */
  incumbent?: string;
  /**
   * Position Code.
   * Maximum length: 4000.
   * @nullable
   */
  positionCode?: string;
  /**
   * Position Id.
   */
  positionId!: BigNumber;
  /**
   * Title.
   * Maximum length: 256.
   * @nullable
   */
  title?: string;
  /**
   * One-to-one navigation property to the [[User]] entity.
   */
  incumbentNav!: User;
  /**
   * One-to-one navigation property to the [[LegacyPositionEntity]] entity.
   */
  parentNav!: LegacyPositionEntity;
  /**
   * One-to-many navigation property to the [[Successor]] entity.
   */
  successorNav!: Successor[];

  /**
   * Returns an entity builder to construct instances `LegacyPositionEntity`.
   * @returns A builder that constructs instances of entity type `LegacyPositionEntity`.
   */
  static builder(): EntityBuilderType<LegacyPositionEntity, LegacyPositionEntityTypeForceMandatory> {
    return Entity.entityBuilder(LegacyPositionEntity);
  }

  /**
   * Returns a request builder to construct requests for operations on the `LegacyPositionEntity` entity type.
   * @returns A `LegacyPositionEntity` request builder.
   */
  static requestBuilder(): LegacyPositionEntityRequestBuilder {
    return new LegacyPositionEntityRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `LegacyPositionEntity`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `LegacyPositionEntity`.
   */
  static customField(fieldName: string): CustomField<LegacyPositionEntity> {
    return Entity.customFieldSelector(fieldName, LegacyPositionEntity);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
}

import { User, UserType } from './User';
import { Successor, SuccessorType } from './Successor';

export interface LegacyPositionEntityType {
  createDate?: Moment;
  incumbent?: string;
  positionCode?: string;
  positionId: BigNumber;
  title?: string;
  incumbentNav: UserType;
  parentNav: LegacyPositionEntityType;
  successorNav: SuccessorType[];
}

export interface LegacyPositionEntityTypeForceMandatory {
  createDate: Moment;
  incumbent: string;
  positionCode: string;
  positionId: BigNumber;
  title: string;
  incumbentNav: UserType;
  parentNav: LegacyPositionEntityType;
  successorNav: SuccessorType[];
}

export namespace LegacyPositionEntity {
  /**
   * Static representation of the [[createDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATE_DATE: DateField<LegacyPositionEntity> = new DateField('createDate', LegacyPositionEntity, 'Edm.DateTime');
  /**
   * Static representation of the [[incumbent]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const INCUMBENT: StringField<LegacyPositionEntity> = new StringField('incumbent', LegacyPositionEntity, 'Edm.String');
  /**
   * Static representation of the [[positionCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const POSITION_CODE: StringField<LegacyPositionEntity> = new StringField('positionCode', LegacyPositionEntity, 'Edm.String');
  /**
   * Static representation of the [[positionId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const POSITION_ID: BigNumberField<LegacyPositionEntity> = new BigNumberField('positionId', LegacyPositionEntity, 'Edm.Int64');
  /**
   * Static representation of the [[title]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TITLE: StringField<LegacyPositionEntity> = new StringField('title', LegacyPositionEntity, 'Edm.String');
  /**
   * Static representation of the one-to-one navigation property [[incumbentNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const INCUMBENT_NAV: OneToOneLink<LegacyPositionEntity, User> = new OneToOneLink('incumbentNav', LegacyPositionEntity, User);
  /**
   * Static representation of the one-to-one navigation property [[parentNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PARENT_NAV: OneToOneLink<LegacyPositionEntity, LegacyPositionEntity> = new OneToOneLink('parentNav', LegacyPositionEntity, LegacyPositionEntity);
  /**
   * Static representation of the one-to-many navigation property [[successorNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SUCCESSOR_NAV: Link<LegacyPositionEntity, Successor> = new Link('successorNav', LegacyPositionEntity, Successor);
  /**
   * All fields of the LegacyPositionEntity entity.
   */
  export const _allFields: Array<DateField<LegacyPositionEntity> | StringField<LegacyPositionEntity> | BigNumberField<LegacyPositionEntity> | OneToOneLink<LegacyPositionEntity, User> | OneToOneLink<LegacyPositionEntity, LegacyPositionEntity> | Link<LegacyPositionEntity, Successor>> = [
    LegacyPositionEntity.CREATE_DATE,
    LegacyPositionEntity.INCUMBENT,
    LegacyPositionEntity.POSITION_CODE,
    LegacyPositionEntity.POSITION_ID,
    LegacyPositionEntity.TITLE,
    LegacyPositionEntity.INCUMBENT_NAV,
    LegacyPositionEntity.PARENT_NAV,
    LegacyPositionEntity.SUCCESSOR_NAV
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<LegacyPositionEntity> = new AllFields('*', LegacyPositionEntity);
  /**
   * All key fields of the LegacyPositionEntity entity.
   */
  export const _keyFields: Array<Selectable<LegacyPositionEntity>> = [LegacyPositionEntity.POSITION_ID];
  /**
   * Mapping of all key field names to the respective static field property LegacyPositionEntity.
   */
  export const _keys: { [keys: string]: Selectable<LegacyPositionEntity> } = LegacyPositionEntity._keyFields.reduce((acc: { [keys: string]: Selectable<LegacyPositionEntity> }, field: Selectable<LegacyPositionEntity>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}

/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { PositionMatrixRelationshipRequestBuilder } from './PositionMatrixRelationshipRequestBuilder';
import { Moment } from 'moment';
import { AllFields, CustomField, DateField, Entity, EntityBuilderType, Link, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "PositionMatrixRelationship" of service "SFOData".
 */
export class PositionMatrixRelationship extends Entity implements PositionMatrixRelationshipType {
  /**
   * Technical entity name for PositionMatrixRelationship.
   */
  static _entityName = 'PositionMatrixRelationship';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for PositionMatrixRelationship.
   */
  static _serviceName = 'SFOData';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = 'VALUE_IS_UNDEFINED';
  /**
   * Position_Code.
   * Maximum length: 128.
   */
  positionCode!: string;
  /**
   * Position_Position Start Date.
   */
  positionEffectiveStartDate!: Moment;
  /**
   * Created By.
   * Maximum length: 100.
   * @nullable
   */
  createdBy?: string;
  /**
   * Created On.
   * @nullable
   */
  createdDateTime?: Moment;
  /**
   * Last Modified By.
   * Maximum length: 100.
   * @nullable
   */
  lastModifiedBy?: string;
  /**
   * Last Modified Date.
   * @nullable
   */
  lastModifiedDateTime?: Moment;
  /**
   * Type.
   * Maximum length: 128.
   */
  matrixRelationshipType!: string;
  /**
   * Record Status.
   * Maximum length: 255.
   * @nullable
   */
  mdfSystemRecordStatus?: string;
  /**
   * Related Position.
   * Maximum length: 128.
   * @nullable
   */
  relatedPosition?: string;
  /**
   * One-to-one navigation property to the [[User]] entity.
   */
  createdByNav!: User;
  /**
   * One-to-one navigation property to the [[User]] entity.
   */
  lastModifiedByNav!: User;
  /**
   * One-to-many navigation property to the [[PickListValueV2]] entity.
   */
  matrixRelationshipTypeNav!: PickListValueV2[];
  /**
   * One-to-one navigation property to the [[MdfEnumValue]] entity.
   */
  mdfSystemRecordStatusNav!: MdfEnumValue;
  /**
   * One-to-many navigation property to the [[Position]] entity.
   */
  relatedPositionNav!: Position[];

  /**
   * Returns an entity builder to construct instances `PositionMatrixRelationship`.
   * @returns A builder that constructs instances of entity type `PositionMatrixRelationship`.
   */
  static builder(): EntityBuilderType<PositionMatrixRelationship, PositionMatrixRelationshipTypeForceMandatory> {
    return Entity.entityBuilder(PositionMatrixRelationship);
  }

  /**
   * Returns a request builder to construct requests for operations on the `PositionMatrixRelationship` entity type.
   * @returns A `PositionMatrixRelationship` request builder.
   */
  static requestBuilder(): PositionMatrixRelationshipRequestBuilder {
    return new PositionMatrixRelationshipRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `PositionMatrixRelationship`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `PositionMatrixRelationship`.
   */
  static customField(fieldName: string): CustomField<PositionMatrixRelationship> {
    return Entity.customFieldSelector(fieldName, PositionMatrixRelationship);
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
import { PickListValueV2, PickListValueV2Type } from './PickListValueV2';
import { MdfEnumValue, MdfEnumValueType } from './MdfEnumValue';
import { Position, PositionType } from './Position';

export interface PositionMatrixRelationshipType {
  positionCode: string;
  positionEffectiveStartDate: Moment;
  createdBy?: string;
  createdDateTime?: Moment;
  lastModifiedBy?: string;
  lastModifiedDateTime?: Moment;
  matrixRelationshipType: string;
  mdfSystemRecordStatus?: string;
  relatedPosition?: string;
  createdByNav: UserType;
  lastModifiedByNav: UserType;
  matrixRelationshipTypeNav: PickListValueV2Type[];
  mdfSystemRecordStatusNav: MdfEnumValueType;
  relatedPositionNav: PositionType[];
}

export interface PositionMatrixRelationshipTypeForceMandatory {
  positionCode: string;
  positionEffectiveStartDate: Moment;
  createdBy: string;
  createdDateTime: Moment;
  lastModifiedBy: string;
  lastModifiedDateTime: Moment;
  matrixRelationshipType: string;
  mdfSystemRecordStatus: string;
  relatedPosition: string;
  createdByNav: UserType;
  lastModifiedByNav: UserType;
  matrixRelationshipTypeNav: PickListValueV2Type[];
  mdfSystemRecordStatusNav: MdfEnumValueType;
  relatedPositionNav: PositionType[];
}

export namespace PositionMatrixRelationship {
  /**
   * Static representation of the [[positionCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const POSITION_CODE: StringField<PositionMatrixRelationship> = new StringField('Position_code', PositionMatrixRelationship, 'Edm.String');
  /**
   * Static representation of the [[positionEffectiveStartDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const POSITION_EFFECTIVE_START_DATE: DateField<PositionMatrixRelationship> = new DateField('Position_effectiveStartDate', PositionMatrixRelationship, 'Edm.DateTime');
  /**
   * Static representation of the [[createdBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_BY: StringField<PositionMatrixRelationship> = new StringField('createdBy', PositionMatrixRelationship, 'Edm.String');
  /**
   * Static representation of the [[createdDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_DATE_TIME: DateField<PositionMatrixRelationship> = new DateField('createdDateTime', PositionMatrixRelationship, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[lastModifiedBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_BY: StringField<PositionMatrixRelationship> = new StringField('lastModifiedBy', PositionMatrixRelationship, 'Edm.String');
  /**
   * Static representation of the [[lastModifiedDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_DATE_TIME: DateField<PositionMatrixRelationship> = new DateField('lastModifiedDateTime', PositionMatrixRelationship, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[matrixRelationshipType]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MATRIX_RELATIONSHIP_TYPE: StringField<PositionMatrixRelationship> = new StringField('matrixRelationshipType', PositionMatrixRelationship, 'Edm.String');
  /**
   * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_RECORD_STATUS: StringField<PositionMatrixRelationship> = new StringField('mdfSystemRecordStatus', PositionMatrixRelationship, 'Edm.String');
  /**
   * Static representation of the [[relatedPosition]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const RELATED_POSITION: StringField<PositionMatrixRelationship> = new StringField('relatedPosition', PositionMatrixRelationship, 'Edm.String');
  /**
   * Static representation of the one-to-one navigation property [[createdByNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_BY_NAV: OneToOneLink<PositionMatrixRelationship, User> = new OneToOneLink('createdByNav', PositionMatrixRelationship, User);
  /**
   * Static representation of the one-to-one navigation property [[lastModifiedByNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_BY_NAV: OneToOneLink<PositionMatrixRelationship, User> = new OneToOneLink('lastModifiedByNav', PositionMatrixRelationship, User);
  /**
   * Static representation of the one-to-many navigation property [[matrixRelationshipTypeNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MATRIX_RELATIONSHIP_TYPE_NAV: Link<PositionMatrixRelationship, PickListValueV2> = new Link('matrixRelationshipTypeNav', PositionMatrixRelationship, PickListValueV2);
  /**
   * Static representation of the one-to-one navigation property [[mdfSystemRecordStatusNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_RECORD_STATUS_NAV: OneToOneLink<PositionMatrixRelationship, MdfEnumValue> = new OneToOneLink('mdfSystemRecordStatusNav', PositionMatrixRelationship, MdfEnumValue);
  /**
   * Static representation of the one-to-many navigation property [[relatedPositionNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const RELATED_POSITION_NAV: Link<PositionMatrixRelationship, Position> = new Link('relatedPositionNav', PositionMatrixRelationship, Position);
  /**
   * All fields of the PositionMatrixRelationship entity.
   */
  export const _allFields: Array<StringField<PositionMatrixRelationship> | DateField<PositionMatrixRelationship> | OneToOneLink<PositionMatrixRelationship, User> | Link<PositionMatrixRelationship, PickListValueV2> | OneToOneLink<PositionMatrixRelationship, MdfEnumValue> | Link<PositionMatrixRelationship, Position>> = [
    PositionMatrixRelationship.POSITION_CODE,
    PositionMatrixRelationship.POSITION_EFFECTIVE_START_DATE,
    PositionMatrixRelationship.CREATED_BY,
    PositionMatrixRelationship.CREATED_DATE_TIME,
    PositionMatrixRelationship.LAST_MODIFIED_BY,
    PositionMatrixRelationship.LAST_MODIFIED_DATE_TIME,
    PositionMatrixRelationship.MATRIX_RELATIONSHIP_TYPE,
    PositionMatrixRelationship.MDF_SYSTEM_RECORD_STATUS,
    PositionMatrixRelationship.RELATED_POSITION,
    PositionMatrixRelationship.CREATED_BY_NAV,
    PositionMatrixRelationship.LAST_MODIFIED_BY_NAV,
    PositionMatrixRelationship.MATRIX_RELATIONSHIP_TYPE_NAV,
    PositionMatrixRelationship.MDF_SYSTEM_RECORD_STATUS_NAV,
    PositionMatrixRelationship.RELATED_POSITION_NAV
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<PositionMatrixRelationship> = new AllFields('*', PositionMatrixRelationship);
  /**
   * All key fields of the PositionMatrixRelationship entity.
   */
  export const _keyFields: Array<Selectable<PositionMatrixRelationship>> = [PositionMatrixRelationship.POSITION_CODE, PositionMatrixRelationship.POSITION_EFFECTIVE_START_DATE, PositionMatrixRelationship.MATRIX_RELATIONSHIP_TYPE];
  /**
   * Mapping of all key field names to the respective static field property PositionMatrixRelationship.
   */
  export const _keys: { [keys: string]: Selectable<PositionMatrixRelationship> } = PositionMatrixRelationship._keyFields.reduce((acc: { [keys: string]: Selectable<PositionMatrixRelationship> }, field: Selectable<PositionMatrixRelationship>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}

/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { FamilyCompetencyMappingEntityRequestBuilder } from './FamilyCompetencyMappingEntityRequestBuilder';
import { Moment } from 'moment';
import { AllFields, CustomField, DateField, Entity, EntityBuilderType, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "FamilyCompetencyMappingEntity" of service "SFOData".
 */
export class FamilyCompetencyMappingEntity extends Entity implements FamilyCompetencyMappingEntityType {
  /**
   * Technical entity name for FamilyCompetencyMappingEntity.
   */
  static _entityName = 'FamilyCompetencyMappingEntity';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for FamilyCompetencyMappingEntity.
   */
  static _serviceName = 'SFOData';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = 'VALUE_IS_UNDEFINED';
  /**
   * Family_GUID.
   * Maximum length: 128.
   */
  familyEntityExternalCode!: string;
  /**
   * Competency.
   * Maximum length: 128.
   * @nullable
   */
  competency?: string;
  /**
   * createdBy.
   * Maximum length: 255.
   * @nullable
   */
  createdBy?: string;
  /**
   * Added.
   * @nullable
   */
  createdDateTime?: Moment;
  /**
   * GUID.
   * Maximum length: 128.
   */
  externalCode!: string;
  /**
   * lastModifiedBy.
   * Maximum length: 255.
   * @nullable
   */
  lastModifiedBy?: string;
  /**
   * Last Modified.
   * @nullable
   */
  lastModifiedDateTime?: Moment;
  /**
   * Record Status.
   * Maximum length: 255.
   * @nullable
   */
  mdfSystemRecordStatus?: string;
  /**
   * Status.
   * Maximum length: 255.
   * @nullable
   */
  status?: string;
  /**
   * subModule.
   * Maximum length: 255.
   * @nullable
   */
  subModule?: string;
  /**
   * One-to-one navigation property to the [[CompetencyEntity]] entity.
   */
  competencyNav!: CompetencyEntity;
  /**
   * One-to-one navigation property to the [[User]] entity.
   */
  createdByNav!: User;
  /**
   * One-to-one navigation property to the [[User]] entity.
   */
  lastModifiedByNav!: User;
  /**
   * One-to-one navigation property to the [[MdfEnumValue]] entity.
   */
  mdfSystemRecordStatusNav!: MdfEnumValue;
  /**
   * One-to-one navigation property to the [[MdfEnumValue]] entity.
   */
  statusNav!: MdfEnumValue;

  /**
   * Returns an entity builder to construct instances `FamilyCompetencyMappingEntity`.
   * @returns A builder that constructs instances of entity type `FamilyCompetencyMappingEntity`.
   */
  static builder(): EntityBuilderType<FamilyCompetencyMappingEntity, FamilyCompetencyMappingEntityTypeForceMandatory> {
    return Entity.entityBuilder(FamilyCompetencyMappingEntity);
  }

  /**
   * Returns a request builder to construct requests for operations on the `FamilyCompetencyMappingEntity` entity type.
   * @returns A `FamilyCompetencyMappingEntity` request builder.
   */
  static requestBuilder(): FamilyCompetencyMappingEntityRequestBuilder {
    return new FamilyCompetencyMappingEntityRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `FamilyCompetencyMappingEntity`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `FamilyCompetencyMappingEntity`.
   */
  static customField(fieldName: string): CustomField<FamilyCompetencyMappingEntity> {
    return Entity.customFieldSelector(fieldName, FamilyCompetencyMappingEntity);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
}

import { CompetencyEntity, CompetencyEntityType } from './CompetencyEntity';
import { User, UserType } from './User';
import { MdfEnumValue, MdfEnumValueType } from './MdfEnumValue';

export interface FamilyCompetencyMappingEntityType {
  familyEntityExternalCode: string;
  competency?: string;
  createdBy?: string;
  createdDateTime?: Moment;
  externalCode: string;
  lastModifiedBy?: string;
  lastModifiedDateTime?: Moment;
  mdfSystemRecordStatus?: string;
  status?: string;
  subModule?: string;
  competencyNav: CompetencyEntityType;
  createdByNav: UserType;
  lastModifiedByNav: UserType;
  mdfSystemRecordStatusNav: MdfEnumValueType;
  statusNav: MdfEnumValueType;
}

export interface FamilyCompetencyMappingEntityTypeForceMandatory {
  familyEntityExternalCode: string;
  competency: string;
  createdBy: string;
  createdDateTime: Moment;
  externalCode: string;
  lastModifiedBy: string;
  lastModifiedDateTime: Moment;
  mdfSystemRecordStatus: string;
  status: string;
  subModule: string;
  competencyNav: CompetencyEntityType;
  createdByNav: UserType;
  lastModifiedByNav: UserType;
  mdfSystemRecordStatusNav: MdfEnumValueType;
  statusNav: MdfEnumValueType;
}

export namespace FamilyCompetencyMappingEntity {
  /**
   * Static representation of the [[familyEntityExternalCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FAMILY_ENTITY_EXTERNAL_CODE: StringField<FamilyCompetencyMappingEntity> = new StringField('FamilyEntity_externalCode', FamilyCompetencyMappingEntity, 'Edm.String');
  /**
   * Static representation of the [[competency]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const COMPETENCY: StringField<FamilyCompetencyMappingEntity> = new StringField('competency', FamilyCompetencyMappingEntity, 'Edm.String');
  /**
   * Static representation of the [[createdBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_BY: StringField<FamilyCompetencyMappingEntity> = new StringField('createdBy', FamilyCompetencyMappingEntity, 'Edm.String');
  /**
   * Static representation of the [[createdDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_DATE_TIME: DateField<FamilyCompetencyMappingEntity> = new DateField('createdDateTime', FamilyCompetencyMappingEntity, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[externalCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_CODE: StringField<FamilyCompetencyMappingEntity> = new StringField('externalCode', FamilyCompetencyMappingEntity, 'Edm.String');
  /**
   * Static representation of the [[lastModifiedBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_BY: StringField<FamilyCompetencyMappingEntity> = new StringField('lastModifiedBy', FamilyCompetencyMappingEntity, 'Edm.String');
  /**
   * Static representation of the [[lastModifiedDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_DATE_TIME: DateField<FamilyCompetencyMappingEntity> = new DateField('lastModifiedDateTime', FamilyCompetencyMappingEntity, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_RECORD_STATUS: StringField<FamilyCompetencyMappingEntity> = new StringField('mdfSystemRecordStatus', FamilyCompetencyMappingEntity, 'Edm.String');
  /**
   * Static representation of the [[status]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const STATUS: StringField<FamilyCompetencyMappingEntity> = new StringField('status', FamilyCompetencyMappingEntity, 'Edm.String');
  /**
   * Static representation of the [[subModule]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SUB_MODULE: StringField<FamilyCompetencyMappingEntity> = new StringField('subModule', FamilyCompetencyMappingEntity, 'Edm.String');
  /**
   * Static representation of the one-to-one navigation property [[competencyNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const COMPETENCY_NAV: OneToOneLink<FamilyCompetencyMappingEntity, CompetencyEntity> = new OneToOneLink('competencyNav', FamilyCompetencyMappingEntity, CompetencyEntity);
  /**
   * Static representation of the one-to-one navigation property [[createdByNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_BY_NAV: OneToOneLink<FamilyCompetencyMappingEntity, User> = new OneToOneLink('createdByNav', FamilyCompetencyMappingEntity, User);
  /**
   * Static representation of the one-to-one navigation property [[lastModifiedByNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_BY_NAV: OneToOneLink<FamilyCompetencyMappingEntity, User> = new OneToOneLink('lastModifiedByNav', FamilyCompetencyMappingEntity, User);
  /**
   * Static representation of the one-to-one navigation property [[mdfSystemRecordStatusNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_RECORD_STATUS_NAV: OneToOneLink<FamilyCompetencyMappingEntity, MdfEnumValue> = new OneToOneLink('mdfSystemRecordStatusNav', FamilyCompetencyMappingEntity, MdfEnumValue);
  /**
   * Static representation of the one-to-one navigation property [[statusNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const STATUS_NAV: OneToOneLink<FamilyCompetencyMappingEntity, MdfEnumValue> = new OneToOneLink('statusNav', FamilyCompetencyMappingEntity, MdfEnumValue);
  /**
   * All fields of the FamilyCompetencyMappingEntity entity.
   */
  export const _allFields: Array<StringField<FamilyCompetencyMappingEntity> | DateField<FamilyCompetencyMappingEntity> | OneToOneLink<FamilyCompetencyMappingEntity, CompetencyEntity> | OneToOneLink<FamilyCompetencyMappingEntity, User> | OneToOneLink<FamilyCompetencyMappingEntity, MdfEnumValue>> = [
    FamilyCompetencyMappingEntity.FAMILY_ENTITY_EXTERNAL_CODE,
    FamilyCompetencyMappingEntity.COMPETENCY,
    FamilyCompetencyMappingEntity.CREATED_BY,
    FamilyCompetencyMappingEntity.CREATED_DATE_TIME,
    FamilyCompetencyMappingEntity.EXTERNAL_CODE,
    FamilyCompetencyMappingEntity.LAST_MODIFIED_BY,
    FamilyCompetencyMappingEntity.LAST_MODIFIED_DATE_TIME,
    FamilyCompetencyMappingEntity.MDF_SYSTEM_RECORD_STATUS,
    FamilyCompetencyMappingEntity.STATUS,
    FamilyCompetencyMappingEntity.SUB_MODULE,
    FamilyCompetencyMappingEntity.COMPETENCY_NAV,
    FamilyCompetencyMappingEntity.CREATED_BY_NAV,
    FamilyCompetencyMappingEntity.LAST_MODIFIED_BY_NAV,
    FamilyCompetencyMappingEntity.MDF_SYSTEM_RECORD_STATUS_NAV,
    FamilyCompetencyMappingEntity.STATUS_NAV
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<FamilyCompetencyMappingEntity> = new AllFields('*', FamilyCompetencyMappingEntity);
  /**
   * All key fields of the FamilyCompetencyMappingEntity entity.
   */
  export const _keyFields: Array<Selectable<FamilyCompetencyMappingEntity>> = [FamilyCompetencyMappingEntity.FAMILY_ENTITY_EXTERNAL_CODE, FamilyCompetencyMappingEntity.EXTERNAL_CODE];
  /**
   * Mapping of all key field names to the respective static field property FamilyCompetencyMappingEntity.
   */
  export const _keys: { [keys: string]: Selectable<FamilyCompetencyMappingEntity> } = FamilyCompetencyMappingEntity._keyFields.reduce((acc: { [keys: string]: Selectable<FamilyCompetencyMappingEntity> }, field: Selectable<FamilyCompetencyMappingEntity>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}

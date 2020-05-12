/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { RoleTalentPoolMappingEntityRequestBuilder } from './RoleTalentPoolMappingEntityRequestBuilder';
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, CustomField, DateField, Entity, EntityBuilderType, Link, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "RoleTalentPoolMappingEntity" of service "SFOData".
 */
export class RoleTalentPoolMappingEntity extends Entity implements RoleTalentPoolMappingEntityType {
  /**
   * Technical entity name for RoleTalentPoolMappingEntity.
   */
  static _entityName = 'RoleTalentPoolMappingEntity';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for RoleTalentPoolMappingEntity.
   */
  static _serviceName = 'SFOData';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = 'VALUE_IS_UNDEFINED';
  /**
   * Role_GUID.
   * Maximum length: 128.
   */
  roleEntityExternalCode!: string;
  /**
   * createdBy.
   * Maximum length: 255.
   * @nullable
   */
  createdBy?: string;
  /**
   * createdDate.
   * @nullable
   */
  createdDateTime?: Moment;
  /**
   * Talent Pool Description.
   * Maximum length: 4000.
   * @nullable
   */
  description?: string;
  /**
   * externalCode.
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
   * lastModifiedDate.
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
   * mdfTalentPool.
   * Maximum length: 128.
   * @nullable
   */
  mdfTalentPool?: string;
  /**
   * Talent Pool Name.
   * Maximum length: 128.
   * @nullable
   */
  name?: string;
  /**
   * status.
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
   * Talent Pool Id.
   * @nullable
   */
  talentPoolId?: BigNumber;
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
   * One-to-many navigation property to the [[TalentPool]] entity.
   */
  mdfTalentPoolNav!: TalentPool[];
  /**
   * One-to-one navigation property to the [[MdfEnumValue]] entity.
   */
  statusNav!: MdfEnumValue;

  /**
   * Returns an entity builder to construct instances `RoleTalentPoolMappingEntity`.
   * @returns A builder that constructs instances of entity type `RoleTalentPoolMappingEntity`.
   */
  static builder(): EntityBuilderType<RoleTalentPoolMappingEntity, RoleTalentPoolMappingEntityTypeForceMandatory> {
    return Entity.entityBuilder(RoleTalentPoolMappingEntity);
  }

  /**
   * Returns a request builder to construct requests for operations on the `RoleTalentPoolMappingEntity` entity type.
   * @returns A `RoleTalentPoolMappingEntity` request builder.
   */
  static requestBuilder(): RoleTalentPoolMappingEntityRequestBuilder {
    return new RoleTalentPoolMappingEntityRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `RoleTalentPoolMappingEntity`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `RoleTalentPoolMappingEntity`.
   */
  static customField(fieldName: string): CustomField<RoleTalentPoolMappingEntity> {
    return Entity.customFieldSelector(fieldName, RoleTalentPoolMappingEntity);
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
import { MdfEnumValue, MdfEnumValueType } from './MdfEnumValue';
import { TalentPool, TalentPoolType } from './TalentPool';

export interface RoleTalentPoolMappingEntityType {
  roleEntityExternalCode: string;
  createdBy?: string;
  createdDateTime?: Moment;
  description?: string;
  externalCode: string;
  lastModifiedBy?: string;
  lastModifiedDateTime?: Moment;
  mdfSystemRecordStatus?: string;
  mdfTalentPool?: string;
  name?: string;
  status?: string;
  subModule?: string;
  talentPoolId?: BigNumber;
  createdByNav: UserType;
  lastModifiedByNav: UserType;
  mdfSystemRecordStatusNav: MdfEnumValueType;
  mdfTalentPoolNav: TalentPoolType[];
  statusNav: MdfEnumValueType;
}

export interface RoleTalentPoolMappingEntityTypeForceMandatory {
  roleEntityExternalCode: string;
  createdBy: string;
  createdDateTime: Moment;
  description: string;
  externalCode: string;
  lastModifiedBy: string;
  lastModifiedDateTime: Moment;
  mdfSystemRecordStatus: string;
  mdfTalentPool: string;
  name: string;
  status: string;
  subModule: string;
  talentPoolId: BigNumber;
  createdByNav: UserType;
  lastModifiedByNav: UserType;
  mdfSystemRecordStatusNav: MdfEnumValueType;
  mdfTalentPoolNav: TalentPoolType[];
  statusNav: MdfEnumValueType;
}

export namespace RoleTalentPoolMappingEntity {
  /**
   * Static representation of the [[roleEntityExternalCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ROLE_ENTITY_EXTERNAL_CODE: StringField<RoleTalentPoolMappingEntity> = new StringField('RoleEntity_externalCode', RoleTalentPoolMappingEntity, 'Edm.String');
  /**
   * Static representation of the [[createdBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_BY: StringField<RoleTalentPoolMappingEntity> = new StringField('createdBy', RoleTalentPoolMappingEntity, 'Edm.String');
  /**
   * Static representation of the [[createdDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_DATE_TIME: DateField<RoleTalentPoolMappingEntity> = new DateField('createdDateTime', RoleTalentPoolMappingEntity, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[description]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DESCRIPTION: StringField<RoleTalentPoolMappingEntity> = new StringField('description', RoleTalentPoolMappingEntity, 'Edm.String');
  /**
   * Static representation of the [[externalCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_CODE: StringField<RoleTalentPoolMappingEntity> = new StringField('externalCode', RoleTalentPoolMappingEntity, 'Edm.String');
  /**
   * Static representation of the [[lastModifiedBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_BY: StringField<RoleTalentPoolMappingEntity> = new StringField('lastModifiedBy', RoleTalentPoolMappingEntity, 'Edm.String');
  /**
   * Static representation of the [[lastModifiedDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_DATE_TIME: DateField<RoleTalentPoolMappingEntity> = new DateField('lastModifiedDateTime', RoleTalentPoolMappingEntity, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_RECORD_STATUS: StringField<RoleTalentPoolMappingEntity> = new StringField('mdfSystemRecordStatus', RoleTalentPoolMappingEntity, 'Edm.String');
  /**
   * Static representation of the [[mdfTalentPool]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_TALENT_POOL: StringField<RoleTalentPoolMappingEntity> = new StringField('mdfTalentPool', RoleTalentPoolMappingEntity, 'Edm.String');
  /**
   * Static representation of the [[name]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NAME: StringField<RoleTalentPoolMappingEntity> = new StringField('name', RoleTalentPoolMappingEntity, 'Edm.String');
  /**
   * Static representation of the [[status]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const STATUS: StringField<RoleTalentPoolMappingEntity> = new StringField('status', RoleTalentPoolMappingEntity, 'Edm.String');
  /**
   * Static representation of the [[subModule]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SUB_MODULE: StringField<RoleTalentPoolMappingEntity> = new StringField('subModule', RoleTalentPoolMappingEntity, 'Edm.String');
  /**
   * Static representation of the [[talentPoolId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TALENT_POOL_ID: BigNumberField<RoleTalentPoolMappingEntity> = new BigNumberField('talentPoolId', RoleTalentPoolMappingEntity, 'Edm.Int64');
  /**
   * Static representation of the one-to-one navigation property [[createdByNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_BY_NAV: OneToOneLink<RoleTalentPoolMappingEntity, User> = new OneToOneLink('createdByNav', RoleTalentPoolMappingEntity, User);
  /**
   * Static representation of the one-to-one navigation property [[lastModifiedByNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_BY_NAV: OneToOneLink<RoleTalentPoolMappingEntity, User> = new OneToOneLink('lastModifiedByNav', RoleTalentPoolMappingEntity, User);
  /**
   * Static representation of the one-to-one navigation property [[mdfSystemRecordStatusNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_RECORD_STATUS_NAV: OneToOneLink<RoleTalentPoolMappingEntity, MdfEnumValue> = new OneToOneLink('mdfSystemRecordStatusNav', RoleTalentPoolMappingEntity, MdfEnumValue);
  /**
   * Static representation of the one-to-many navigation property [[mdfTalentPoolNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_TALENT_POOL_NAV: Link<RoleTalentPoolMappingEntity, TalentPool> = new Link('mdfTalentPoolNav', RoleTalentPoolMappingEntity, TalentPool);
  /**
   * Static representation of the one-to-one navigation property [[statusNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const STATUS_NAV: OneToOneLink<RoleTalentPoolMappingEntity, MdfEnumValue> = new OneToOneLink('statusNav', RoleTalentPoolMappingEntity, MdfEnumValue);
  /**
   * All fields of the RoleTalentPoolMappingEntity entity.
   */
  export const _allFields: Array<StringField<RoleTalentPoolMappingEntity> | DateField<RoleTalentPoolMappingEntity> | BigNumberField<RoleTalentPoolMappingEntity> | OneToOneLink<RoleTalentPoolMappingEntity, User> | OneToOneLink<RoleTalentPoolMappingEntity, MdfEnumValue> | Link<RoleTalentPoolMappingEntity, TalentPool>> = [
    RoleTalentPoolMappingEntity.ROLE_ENTITY_EXTERNAL_CODE,
    RoleTalentPoolMappingEntity.CREATED_BY,
    RoleTalentPoolMappingEntity.CREATED_DATE_TIME,
    RoleTalentPoolMappingEntity.DESCRIPTION,
    RoleTalentPoolMappingEntity.EXTERNAL_CODE,
    RoleTalentPoolMappingEntity.LAST_MODIFIED_BY,
    RoleTalentPoolMappingEntity.LAST_MODIFIED_DATE_TIME,
    RoleTalentPoolMappingEntity.MDF_SYSTEM_RECORD_STATUS,
    RoleTalentPoolMappingEntity.MDF_TALENT_POOL,
    RoleTalentPoolMappingEntity.NAME,
    RoleTalentPoolMappingEntity.STATUS,
    RoleTalentPoolMappingEntity.SUB_MODULE,
    RoleTalentPoolMappingEntity.TALENT_POOL_ID,
    RoleTalentPoolMappingEntity.CREATED_BY_NAV,
    RoleTalentPoolMappingEntity.LAST_MODIFIED_BY_NAV,
    RoleTalentPoolMappingEntity.MDF_SYSTEM_RECORD_STATUS_NAV,
    RoleTalentPoolMappingEntity.MDF_TALENT_POOL_NAV,
    RoleTalentPoolMappingEntity.STATUS_NAV
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<RoleTalentPoolMappingEntity> = new AllFields('*', RoleTalentPoolMappingEntity);
  /**
   * All key fields of the RoleTalentPoolMappingEntity entity.
   */
  export const _keyFields: Array<Selectable<RoleTalentPoolMappingEntity>> = [RoleTalentPoolMappingEntity.ROLE_ENTITY_EXTERNAL_CODE, RoleTalentPoolMappingEntity.EXTERNAL_CODE];
  /**
   * Mapping of all key field names to the respective static field property RoleTalentPoolMappingEntity.
   */
  export const _keys: { [keys: string]: Selectable<RoleTalentPoolMappingEntity> } = RoleTalentPoolMappingEntity._keyFields.reduce((acc: { [keys: string]: Selectable<RoleTalentPoolMappingEntity> }, field: Selectable<RoleTalentPoolMappingEntity>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}

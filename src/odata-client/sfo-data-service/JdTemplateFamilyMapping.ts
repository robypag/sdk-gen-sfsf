/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { JdTemplateFamilyMappingRequestBuilder } from './JdTemplateFamilyMappingRequestBuilder';
import { Moment } from 'moment';
import { AllFields, CustomField, DateField, Entity, EntityBuilderType, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "JDTemplateFamilyMapping" of service "SFOData".
 */
export class JdTemplateFamilyMapping extends Entity implements JdTemplateFamilyMappingType {
  /**
   * Technical entity name for JdTemplateFamilyMapping.
   */
  static _entityName = 'JDTemplateFamilyMapping';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for JdTemplateFamilyMapping.
   */
  static _serviceName = 'SFOData';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = 'VALUE_IS_UNDEFINED';
  /**
   * Job Template_GUID.
   * Maximum length: 128.
   */
  jobDescTemplateExternalCode!: string;
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
   * Assigned families.
   * Maximum length: 128.
   * @nullable
   */
  family?: string;
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
   * One-to-one navigation property to the [[User]] entity.
   */
  createdByNav!: User;
  /**
   * One-to-one navigation property to the [[FamilyEntity]] entity.
   */
  familyNav!: FamilyEntity;
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
   * Returns an entity builder to construct instances `JdTemplateFamilyMapping`.
   * @returns A builder that constructs instances of entity type `JdTemplateFamilyMapping`.
   */
  static builder(): EntityBuilderType<JdTemplateFamilyMapping, JdTemplateFamilyMappingTypeForceMandatory> {
    return Entity.entityBuilder(JdTemplateFamilyMapping);
  }

  /**
   * Returns a request builder to construct requests for operations on the `JdTemplateFamilyMapping` entity type.
   * @returns A `JdTemplateFamilyMapping` request builder.
   */
  static requestBuilder(): JdTemplateFamilyMappingRequestBuilder {
    return new JdTemplateFamilyMappingRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `JdTemplateFamilyMapping`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `JdTemplateFamilyMapping`.
   */
  static customField(fieldName: string): CustomField<JdTemplateFamilyMapping> {
    return Entity.customFieldSelector(fieldName, JdTemplateFamilyMapping);
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
import { FamilyEntity, FamilyEntityType } from './FamilyEntity';
import { MdfEnumValue, MdfEnumValueType } from './MdfEnumValue';

export interface JdTemplateFamilyMappingType {
  jobDescTemplateExternalCode: string;
  createdBy?: string;
  createdDateTime?: Moment;
  externalCode: string;
  family?: string;
  lastModifiedBy?: string;
  lastModifiedDateTime?: Moment;
  mdfSystemRecordStatus?: string;
  status?: string;
  subModule?: string;
  createdByNav: UserType;
  familyNav: FamilyEntityType;
  lastModifiedByNav: UserType;
  mdfSystemRecordStatusNav: MdfEnumValueType;
  statusNav: MdfEnumValueType;
}

export interface JdTemplateFamilyMappingTypeForceMandatory {
  jobDescTemplateExternalCode: string;
  createdBy: string;
  createdDateTime: Moment;
  externalCode: string;
  family: string;
  lastModifiedBy: string;
  lastModifiedDateTime: Moment;
  mdfSystemRecordStatus: string;
  status: string;
  subModule: string;
  createdByNav: UserType;
  familyNav: FamilyEntityType;
  lastModifiedByNav: UserType;
  mdfSystemRecordStatusNav: MdfEnumValueType;
  statusNav: MdfEnumValueType;
}

export namespace JdTemplateFamilyMapping {
  /**
   * Static representation of the [[jobDescTemplateExternalCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const JOB_DESC_TEMPLATE_EXTERNAL_CODE: StringField<JdTemplateFamilyMapping> = new StringField('JobDescTemplate_externalCode', JdTemplateFamilyMapping, 'Edm.String');
  /**
   * Static representation of the [[createdBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_BY: StringField<JdTemplateFamilyMapping> = new StringField('createdBy', JdTemplateFamilyMapping, 'Edm.String');
  /**
   * Static representation of the [[createdDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_DATE_TIME: DateField<JdTemplateFamilyMapping> = new DateField('createdDateTime', JdTemplateFamilyMapping, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[externalCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_CODE: StringField<JdTemplateFamilyMapping> = new StringField('externalCode', JdTemplateFamilyMapping, 'Edm.String');
  /**
   * Static representation of the [[family]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FAMILY: StringField<JdTemplateFamilyMapping> = new StringField('family', JdTemplateFamilyMapping, 'Edm.String');
  /**
   * Static representation of the [[lastModifiedBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_BY: StringField<JdTemplateFamilyMapping> = new StringField('lastModifiedBy', JdTemplateFamilyMapping, 'Edm.String');
  /**
   * Static representation of the [[lastModifiedDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_DATE_TIME: DateField<JdTemplateFamilyMapping> = new DateField('lastModifiedDateTime', JdTemplateFamilyMapping, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_RECORD_STATUS: StringField<JdTemplateFamilyMapping> = new StringField('mdfSystemRecordStatus', JdTemplateFamilyMapping, 'Edm.String');
  /**
   * Static representation of the [[status]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const STATUS: StringField<JdTemplateFamilyMapping> = new StringField('status', JdTemplateFamilyMapping, 'Edm.String');
  /**
   * Static representation of the [[subModule]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SUB_MODULE: StringField<JdTemplateFamilyMapping> = new StringField('subModule', JdTemplateFamilyMapping, 'Edm.String');
  /**
   * Static representation of the one-to-one navigation property [[createdByNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_BY_NAV: OneToOneLink<JdTemplateFamilyMapping, User> = new OneToOneLink('createdByNav', JdTemplateFamilyMapping, User);
  /**
   * Static representation of the one-to-one navigation property [[familyNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FAMILY_NAV: OneToOneLink<JdTemplateFamilyMapping, FamilyEntity> = new OneToOneLink('familyNav', JdTemplateFamilyMapping, FamilyEntity);
  /**
   * Static representation of the one-to-one navigation property [[lastModifiedByNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_BY_NAV: OneToOneLink<JdTemplateFamilyMapping, User> = new OneToOneLink('lastModifiedByNav', JdTemplateFamilyMapping, User);
  /**
   * Static representation of the one-to-one navigation property [[mdfSystemRecordStatusNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_RECORD_STATUS_NAV: OneToOneLink<JdTemplateFamilyMapping, MdfEnumValue> = new OneToOneLink('mdfSystemRecordStatusNav', JdTemplateFamilyMapping, MdfEnumValue);
  /**
   * Static representation of the one-to-one navigation property [[statusNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const STATUS_NAV: OneToOneLink<JdTemplateFamilyMapping, MdfEnumValue> = new OneToOneLink('statusNav', JdTemplateFamilyMapping, MdfEnumValue);
  /**
   * All fields of the JdTemplateFamilyMapping entity.
   */
  export const _allFields: Array<StringField<JdTemplateFamilyMapping> | DateField<JdTemplateFamilyMapping> | OneToOneLink<JdTemplateFamilyMapping, User> | OneToOneLink<JdTemplateFamilyMapping, FamilyEntity> | OneToOneLink<JdTemplateFamilyMapping, MdfEnumValue>> = [
    JdTemplateFamilyMapping.JOB_DESC_TEMPLATE_EXTERNAL_CODE,
    JdTemplateFamilyMapping.CREATED_BY,
    JdTemplateFamilyMapping.CREATED_DATE_TIME,
    JdTemplateFamilyMapping.EXTERNAL_CODE,
    JdTemplateFamilyMapping.FAMILY,
    JdTemplateFamilyMapping.LAST_MODIFIED_BY,
    JdTemplateFamilyMapping.LAST_MODIFIED_DATE_TIME,
    JdTemplateFamilyMapping.MDF_SYSTEM_RECORD_STATUS,
    JdTemplateFamilyMapping.STATUS,
    JdTemplateFamilyMapping.SUB_MODULE,
    JdTemplateFamilyMapping.CREATED_BY_NAV,
    JdTemplateFamilyMapping.FAMILY_NAV,
    JdTemplateFamilyMapping.LAST_MODIFIED_BY_NAV,
    JdTemplateFamilyMapping.MDF_SYSTEM_RECORD_STATUS_NAV,
    JdTemplateFamilyMapping.STATUS_NAV
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<JdTemplateFamilyMapping> = new AllFields('*', JdTemplateFamilyMapping);
  /**
   * All key fields of the JdTemplateFamilyMapping entity.
   */
  export const _keyFields: Array<Selectable<JdTemplateFamilyMapping>> = [JdTemplateFamilyMapping.JOB_DESC_TEMPLATE_EXTERNAL_CODE, JdTemplateFamilyMapping.EXTERNAL_CODE];
  /**
   * Mapping of all key field names to the respective static field property JdTemplateFamilyMapping.
   */
  export const _keys: { [keys: string]: Selectable<JdTemplateFamilyMapping> } = JdTemplateFamilyMapping._keyFields.reduce((acc: { [keys: string]: Selectable<JdTemplateFamilyMapping> }, field: Selectable<JdTemplateFamilyMapping>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}

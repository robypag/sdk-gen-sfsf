/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { FoDepartmentRequestBuilder } from './FoDepartmentRequestBuilder';
import { Moment } from 'moment';
import { AllFields, CustomField, DateField, Entity, EntityBuilderType, Link, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "FODepartment" of service "SFOData".
 */
export class FoDepartment extends Entity implements FoDepartmentType {
  /**
   * Technical entity name for FoDepartment.
   */
  static _entityName = 'FODepartment';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for FoDepartment.
   */
  static _serviceName = 'SFOData';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = 'VALUE_IS_UNDEFINED';
  /**
   * Cost Center.
   * Maximum length: 128.
   * @nullable
   */
  costCenter?: string;
  /**
   * createdBy.
   * Maximum length: 100.
   * @nullable
   */
  createdBy?: string;
  /**
   * createdDate.
   * @nullable
   */
  createdDateTime?: Moment;
  /**
   * createdDate.
   * @nullable
   */
  createdOn?: Moment;
  /**
   * toDivision.
   * @nullable
   */
  custToDivisionProp?: string;
  /**
   * Description.
   * Maximum length: 128.
   * @nullable
   */
  description?: string;
  /**
   * Description.
   * Maximum length: 128.
   * @nullable
   */
  descriptionDeDe?: string;
  /**
   * Description.
   * Maximum length: 128.
   * @nullable
   */
  descriptionDefaultValue?: string;
  /**
   * Description.
   * Maximum length: 128.
   * @nullable
   */
  descriptionEnDebug?: string;
  /**
   * Description.
   * Maximum length: 128.
   * @nullable
   */
  descriptionEnGb?: string;
  /**
   * Description.
   * Maximum length: 128.
   * @nullable
   */
  descriptionEnUs?: string;
  /**
   * Description.
   * Maximum length: 128.
   * @nullable
   */
  descriptionEsEs?: string;
  /**
   * Description.
   * Maximum length: 128.
   * @nullable
   */
  descriptionEsMx?: string;
  /**
   * Description.
   * Maximum length: 128.
   * @nullable
   */
  descriptionFrCa?: string;
  /**
   * Description.
   * Maximum length: 128.
   * @nullable
   */
  descriptionFrFr?: string;
  /**
   * Description.
   * Maximum length: 128.
   * @nullable
   */
  descriptionItIt?: string;
  /**
   * Description.
   * Maximum length: 128.
   * @nullable
   */
  descriptionLocalized?: string;
  /**
   * Description.
   * Maximum length: 128.
   * @nullable
   */
  descriptionNlNl?: string;
  /**
   * Description.
   * Maximum length: 128.
   * @nullable
   */
  descriptionPtBr?: string;
  /**
   * Description.
   * Maximum length: 128.
   * @nullable
   */
  descriptionZhCn?: string;
  /**
   * effectiveEndDate.
   * @nullable
   */
  endDate?: Moment;
  /**
   * Code.
   * Maximum length: 32.
   */
  externalCode!: string;
  /**
   * Head of Department.
   * Maximum length: 100.
   * @nullable
   */
  headOfUnit?: string;
  /**
   * lastModifiedBy.
   * Maximum length: 100.
   * @nullable
   */
  lastModifiedBy?: string;
  /**
   * lastModifiedDate.
   * @nullable
   */
  lastModifiedDateTime?: Moment;
  /**
   * lastModifiedDate.
   * @nullable
   */
  lastModifiedOn?: Moment;
  /**
   * Name.
   * Maximum length: 90.
   * @nullable
   */
  name?: string;
  /**
   * Name.
   * Maximum length: 90.
   * @nullable
   */
  nameDeDe?: string;
  /**
   * Name.
   * Maximum length: 90.
   * @nullable
   */
  nameDefaultValue?: string;
  /**
   * Name.
   * Maximum length: 90.
   * @nullable
   */
  nameEnDebug?: string;
  /**
   * Name.
   * Maximum length: 90.
   * @nullable
   */
  nameEnGb?: string;
  /**
   * Name.
   * Maximum length: 90.
   * @nullable
   */
  nameEnUs?: string;
  /**
   * Name.
   * Maximum length: 90.
   * @nullable
   */
  nameEsEs?: string;
  /**
   * Name.
   * Maximum length: 90.
   * @nullable
   */
  nameEsMx?: string;
  /**
   * Name.
   * Maximum length: 90.
   * @nullable
   */
  nameFrCa?: string;
  /**
   * Name.
   * Maximum length: 90.
   * @nullable
   */
  nameFrFr?: string;
  /**
   * Name.
   * Maximum length: 90.
   * @nullable
   */
  nameItIt?: string;
  /**
   * Name.
   * Maximum length: 90.
   * @nullable
   */
  nameLocalized?: string;
  /**
   * Name.
   * Maximum length: 90.
   * @nullable
   */
  nameNlNl?: string;
  /**
   * Name.
   * Maximum length: 90.
   * @nullable
   */
  namePtBr?: string;
  /**
   * Name.
   * Maximum length: 90.
   * @nullable
   */
  nameZhCn?: string;
  /**
   * Parent Department.
   * Maximum length: 128.
   * @nullable
   */
  parent?: string;
  /**
   * Effective as of.
   */
  startDate!: Moment;
  /**
   * Status.
   * Maximum length: 255.
   * @nullable
   */
  status?: string;
  /**
   * One-to-one navigation property to the [[FoCostCenter]] entity.
   */
  costCenterNav!: FoCostCenter;
  /**
   * One-to-many navigation property to the [[FoDivision]] entity.
   */
  custToDivision!: FoDivision[];
  /**
   * One-to-one navigation property to the [[FoTranslation]] entity.
   */
  descriptionTranslationNav!: FoTranslation;
  /**
   * One-to-many navigation property to the [[MdfLocalizedValue]] entity.
   */
  descriptionTranslationTextNav!: MdfLocalizedValue[];
  /**
   * One-to-one navigation property to the [[User]] entity.
   */
  headOfUnitNav!: User;
  /**
   * One-to-one navigation property to the [[FoTranslation]] entity.
   */
  nameTranslationNav!: FoTranslation;
  /**
   * One-to-many navigation property to the [[MdfLocalizedValue]] entity.
   */
  nameTranslationTextNav!: MdfLocalizedValue[];
  /**
   * One-to-one navigation property to the [[FoDepartment]] entity.
   */
  parentNav!: FoDepartment;
  /**
   * One-to-one navigation property to the [[MdfEnumValue]] entity.
   */
  statusNav!: MdfEnumValue;

  /**
   * Returns an entity builder to construct instances `FoDepartment`.
   * @returns A builder that constructs instances of entity type `FoDepartment`.
   */
  static builder(): EntityBuilderType<FoDepartment, FoDepartmentTypeForceMandatory> {
    return Entity.entityBuilder(FoDepartment);
  }

  /**
   * Returns a request builder to construct requests for operations on the `FoDepartment` entity type.
   * @returns A `FoDepartment` request builder.
   */
  static requestBuilder(): FoDepartmentRequestBuilder {
    return new FoDepartmentRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `FoDepartment`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `FoDepartment`.
   */
  static customField(fieldName: string): CustomField<FoDepartment> {
    return Entity.customFieldSelector(fieldName, FoDepartment);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
}

import { FoCostCenter, FoCostCenterType } from './FoCostCenter';
import { FoDivision, FoDivisionType } from './FoDivision';
import { FoTranslation, FoTranslationType } from './FoTranslation';
import { MdfLocalizedValue, MdfLocalizedValueType } from './MdfLocalizedValue';
import { User, UserType } from './User';
import { MdfEnumValue, MdfEnumValueType } from './MdfEnumValue';

export interface FoDepartmentType {
  costCenter?: string;
  createdBy?: string;
  createdDateTime?: Moment;
  createdOn?: Moment;
  custToDivisionProp?: string;
  description?: string;
  descriptionDeDe?: string;
  descriptionDefaultValue?: string;
  descriptionEnDebug?: string;
  descriptionEnGb?: string;
  descriptionEnUs?: string;
  descriptionEsEs?: string;
  descriptionEsMx?: string;
  descriptionFrCa?: string;
  descriptionFrFr?: string;
  descriptionItIt?: string;
  descriptionLocalized?: string;
  descriptionNlNl?: string;
  descriptionPtBr?: string;
  descriptionZhCn?: string;
  endDate?: Moment;
  externalCode: string;
  headOfUnit?: string;
  lastModifiedBy?: string;
  lastModifiedDateTime?: Moment;
  lastModifiedOn?: Moment;
  name?: string;
  nameDeDe?: string;
  nameDefaultValue?: string;
  nameEnDebug?: string;
  nameEnGb?: string;
  nameEnUs?: string;
  nameEsEs?: string;
  nameEsMx?: string;
  nameFrCa?: string;
  nameFrFr?: string;
  nameItIt?: string;
  nameLocalized?: string;
  nameNlNl?: string;
  namePtBr?: string;
  nameZhCn?: string;
  parent?: string;
  startDate: Moment;
  status?: string;
  costCenterNav: FoCostCenterType;
  custToDivision: FoDivisionType[];
  descriptionTranslationNav: FoTranslationType;
  descriptionTranslationTextNav: MdfLocalizedValueType[];
  headOfUnitNav: UserType;
  nameTranslationNav: FoTranslationType;
  nameTranslationTextNav: MdfLocalizedValueType[];
  parentNav: FoDepartmentType;
  statusNav: MdfEnumValueType;
}

export interface FoDepartmentTypeForceMandatory {
  costCenter: string;
  createdBy: string;
  createdDateTime: Moment;
  createdOn: Moment;
  custToDivisionProp: string;
  description: string;
  descriptionDeDe: string;
  descriptionDefaultValue: string;
  descriptionEnDebug: string;
  descriptionEnGb: string;
  descriptionEnUs: string;
  descriptionEsEs: string;
  descriptionEsMx: string;
  descriptionFrCa: string;
  descriptionFrFr: string;
  descriptionItIt: string;
  descriptionLocalized: string;
  descriptionNlNl: string;
  descriptionPtBr: string;
  descriptionZhCn: string;
  endDate: Moment;
  externalCode: string;
  headOfUnit: string;
  lastModifiedBy: string;
  lastModifiedDateTime: Moment;
  lastModifiedOn: Moment;
  name: string;
  nameDeDe: string;
  nameDefaultValue: string;
  nameEnDebug: string;
  nameEnGb: string;
  nameEnUs: string;
  nameEsEs: string;
  nameEsMx: string;
  nameFrCa: string;
  nameFrFr: string;
  nameItIt: string;
  nameLocalized: string;
  nameNlNl: string;
  namePtBr: string;
  nameZhCn: string;
  parent: string;
  startDate: Moment;
  status: string;
  costCenterNav: FoCostCenterType;
  custToDivision: FoDivisionType[];
  descriptionTranslationNav: FoTranslationType;
  descriptionTranslationTextNav: MdfLocalizedValueType[];
  headOfUnitNav: UserType;
  nameTranslationNav: FoTranslationType;
  nameTranslationTextNav: MdfLocalizedValueType[];
  parentNav: FoDepartmentType;
  statusNav: MdfEnumValueType;
}

export namespace FoDepartment {
  /**
   * Static representation of the [[costCenter]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const COST_CENTER: StringField<FoDepartment> = new StringField('costCenter', FoDepartment, 'Edm.String');
  /**
   * Static representation of the [[createdBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_BY: StringField<FoDepartment> = new StringField('createdBy', FoDepartment, 'Edm.String');
  /**
   * Static representation of the [[createdDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_DATE_TIME: DateField<FoDepartment> = new DateField('createdDateTime', FoDepartment, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[createdOn]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_ON: DateField<FoDepartment> = new DateField('createdOn', FoDepartment, 'Edm.DateTime');
  /**
   * Static representation of the [[custToDivisionProp]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CUST_TO_DIVISION_PROP: StringField<FoDepartment> = new StringField('cust_toDivisionProp', FoDepartment, 'Edm.String');
  /**
   * Static representation of the [[description]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DESCRIPTION: StringField<FoDepartment> = new StringField('description', FoDepartment, 'Edm.String');
  /**
   * Static representation of the [[descriptionDeDe]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DESCRIPTION_DE_DE: StringField<FoDepartment> = new StringField('description_de_DE', FoDepartment, 'Edm.String');
  /**
   * Static representation of the [[descriptionDefaultValue]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DESCRIPTION_DEFAULT_VALUE: StringField<FoDepartment> = new StringField('description_defaultValue', FoDepartment, 'Edm.String');
  /**
   * Static representation of the [[descriptionEnDebug]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DESCRIPTION_EN_DEBUG: StringField<FoDepartment> = new StringField('description_en_DEBUG', FoDepartment, 'Edm.String');
  /**
   * Static representation of the [[descriptionEnGb]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DESCRIPTION_EN_GB: StringField<FoDepartment> = new StringField('description_en_GB', FoDepartment, 'Edm.String');
  /**
   * Static representation of the [[descriptionEnUs]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DESCRIPTION_EN_US: StringField<FoDepartment> = new StringField('description_en_US', FoDepartment, 'Edm.String');
  /**
   * Static representation of the [[descriptionEsEs]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DESCRIPTION_ES_ES: StringField<FoDepartment> = new StringField('description_es_ES', FoDepartment, 'Edm.String');
  /**
   * Static representation of the [[descriptionEsMx]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DESCRIPTION_ES_MX: StringField<FoDepartment> = new StringField('description_es_MX', FoDepartment, 'Edm.String');
  /**
   * Static representation of the [[descriptionFrCa]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DESCRIPTION_FR_CA: StringField<FoDepartment> = new StringField('description_fr_CA', FoDepartment, 'Edm.String');
  /**
   * Static representation of the [[descriptionFrFr]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DESCRIPTION_FR_FR: StringField<FoDepartment> = new StringField('description_fr_FR', FoDepartment, 'Edm.String');
  /**
   * Static representation of the [[descriptionItIt]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DESCRIPTION_IT_IT: StringField<FoDepartment> = new StringField('description_it_IT', FoDepartment, 'Edm.String');
  /**
   * Static representation of the [[descriptionLocalized]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DESCRIPTION_LOCALIZED: StringField<FoDepartment> = new StringField('description_localized', FoDepartment, 'Edm.String');
  /**
   * Static representation of the [[descriptionNlNl]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DESCRIPTION_NL_NL: StringField<FoDepartment> = new StringField('description_nl_NL', FoDepartment, 'Edm.String');
  /**
   * Static representation of the [[descriptionPtBr]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DESCRIPTION_PT_BR: StringField<FoDepartment> = new StringField('description_pt_BR', FoDepartment, 'Edm.String');
  /**
   * Static representation of the [[descriptionZhCn]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DESCRIPTION_ZH_CN: StringField<FoDepartment> = new StringField('description_zh_CN', FoDepartment, 'Edm.String');
  /**
   * Static representation of the [[endDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const END_DATE: DateField<FoDepartment> = new DateField('endDate', FoDepartment, 'Edm.DateTime');
  /**
   * Static representation of the [[externalCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_CODE: StringField<FoDepartment> = new StringField('externalCode', FoDepartment, 'Edm.String');
  /**
   * Static representation of the [[headOfUnit]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const HEAD_OF_UNIT: StringField<FoDepartment> = new StringField('headOfUnit', FoDepartment, 'Edm.String');
  /**
   * Static representation of the [[lastModifiedBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_BY: StringField<FoDepartment> = new StringField('lastModifiedBy', FoDepartment, 'Edm.String');
  /**
   * Static representation of the [[lastModifiedDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_DATE_TIME: DateField<FoDepartment> = new DateField('lastModifiedDateTime', FoDepartment, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[lastModifiedOn]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_ON: DateField<FoDepartment> = new DateField('lastModifiedOn', FoDepartment, 'Edm.DateTime');
  /**
   * Static representation of the [[name]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NAME: StringField<FoDepartment> = new StringField('name', FoDepartment, 'Edm.String');
  /**
   * Static representation of the [[nameDeDe]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NAME_DE_DE: StringField<FoDepartment> = new StringField('name_de_DE', FoDepartment, 'Edm.String');
  /**
   * Static representation of the [[nameDefaultValue]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NAME_DEFAULT_VALUE: StringField<FoDepartment> = new StringField('name_defaultValue', FoDepartment, 'Edm.String');
  /**
   * Static representation of the [[nameEnDebug]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NAME_EN_DEBUG: StringField<FoDepartment> = new StringField('name_en_DEBUG', FoDepartment, 'Edm.String');
  /**
   * Static representation of the [[nameEnGb]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NAME_EN_GB: StringField<FoDepartment> = new StringField('name_en_GB', FoDepartment, 'Edm.String');
  /**
   * Static representation of the [[nameEnUs]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NAME_EN_US: StringField<FoDepartment> = new StringField('name_en_US', FoDepartment, 'Edm.String');
  /**
   * Static representation of the [[nameEsEs]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NAME_ES_ES: StringField<FoDepartment> = new StringField('name_es_ES', FoDepartment, 'Edm.String');
  /**
   * Static representation of the [[nameEsMx]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NAME_ES_MX: StringField<FoDepartment> = new StringField('name_es_MX', FoDepartment, 'Edm.String');
  /**
   * Static representation of the [[nameFrCa]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NAME_FR_CA: StringField<FoDepartment> = new StringField('name_fr_CA', FoDepartment, 'Edm.String');
  /**
   * Static representation of the [[nameFrFr]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NAME_FR_FR: StringField<FoDepartment> = new StringField('name_fr_FR', FoDepartment, 'Edm.String');
  /**
   * Static representation of the [[nameItIt]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NAME_IT_IT: StringField<FoDepartment> = new StringField('name_it_IT', FoDepartment, 'Edm.String');
  /**
   * Static representation of the [[nameLocalized]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NAME_LOCALIZED: StringField<FoDepartment> = new StringField('name_localized', FoDepartment, 'Edm.String');
  /**
   * Static representation of the [[nameNlNl]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NAME_NL_NL: StringField<FoDepartment> = new StringField('name_nl_NL', FoDepartment, 'Edm.String');
  /**
   * Static representation of the [[namePtBr]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NAME_PT_BR: StringField<FoDepartment> = new StringField('name_pt_BR', FoDepartment, 'Edm.String');
  /**
   * Static representation of the [[nameZhCn]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NAME_ZH_CN: StringField<FoDepartment> = new StringField('name_zh_CN', FoDepartment, 'Edm.String');
  /**
   * Static representation of the [[parent]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PARENT: StringField<FoDepartment> = new StringField('parent', FoDepartment, 'Edm.String');
  /**
   * Static representation of the [[startDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const START_DATE: DateField<FoDepartment> = new DateField('startDate', FoDepartment, 'Edm.DateTime');
  /**
   * Static representation of the [[status]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const STATUS: StringField<FoDepartment> = new StringField('status', FoDepartment, 'Edm.String');
  /**
   * Static representation of the one-to-one navigation property [[costCenterNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const COST_CENTER_NAV: OneToOneLink<FoDepartment, FoCostCenter> = new OneToOneLink('costCenterNav', FoDepartment, FoCostCenter);
  /**
   * Static representation of the one-to-many navigation property [[custToDivision]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CUST_TO_DIVISION: Link<FoDepartment, FoDivision> = new Link('cust_toDivision', FoDepartment, FoDivision);
  /**
   * Static representation of the one-to-one navigation property [[descriptionTranslationNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DESCRIPTION_TRANSLATION_NAV: OneToOneLink<FoDepartment, FoTranslation> = new OneToOneLink('descriptionTranslationNav', FoDepartment, FoTranslation);
  /**
   * Static representation of the one-to-many navigation property [[descriptionTranslationTextNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DESCRIPTION_TRANSLATION_TEXT_NAV: Link<FoDepartment, MdfLocalizedValue> = new Link('descriptionTranslationTextNav', FoDepartment, MdfLocalizedValue);
  /**
   * Static representation of the one-to-one navigation property [[headOfUnitNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const HEAD_OF_UNIT_NAV: OneToOneLink<FoDepartment, User> = new OneToOneLink('headOfUnitNav', FoDepartment, User);
  /**
   * Static representation of the one-to-one navigation property [[nameTranslationNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NAME_TRANSLATION_NAV: OneToOneLink<FoDepartment, FoTranslation> = new OneToOneLink('nameTranslationNav', FoDepartment, FoTranslation);
  /**
   * Static representation of the one-to-many navigation property [[nameTranslationTextNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NAME_TRANSLATION_TEXT_NAV: Link<FoDepartment, MdfLocalizedValue> = new Link('nameTranslationTextNav', FoDepartment, MdfLocalizedValue);
  /**
   * Static representation of the one-to-one navigation property [[parentNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PARENT_NAV: OneToOneLink<FoDepartment, FoDepartment> = new OneToOneLink('parentNav', FoDepartment, FoDepartment);
  /**
   * Static representation of the one-to-one navigation property [[statusNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const STATUS_NAV: OneToOneLink<FoDepartment, MdfEnumValue> = new OneToOneLink('statusNav', FoDepartment, MdfEnumValue);
  /**
   * All fields of the FoDepartment entity.
   */
  export const _allFields: Array<StringField<FoDepartment> | DateField<FoDepartment> | OneToOneLink<FoDepartment, FoCostCenter> | Link<FoDepartment, FoDivision> | OneToOneLink<FoDepartment, FoTranslation> | Link<FoDepartment, MdfLocalizedValue> | OneToOneLink<FoDepartment, User> | OneToOneLink<FoDepartment, FoDepartment> | OneToOneLink<FoDepartment, MdfEnumValue>> = [
    FoDepartment.COST_CENTER,
    FoDepartment.CREATED_BY,
    FoDepartment.CREATED_DATE_TIME,
    FoDepartment.CREATED_ON,
    FoDepartment.CUST_TO_DIVISION_PROP,
    FoDepartment.DESCRIPTION,
    FoDepartment.DESCRIPTION_DE_DE,
    FoDepartment.DESCRIPTION_DEFAULT_VALUE,
    FoDepartment.DESCRIPTION_EN_DEBUG,
    FoDepartment.DESCRIPTION_EN_GB,
    FoDepartment.DESCRIPTION_EN_US,
    FoDepartment.DESCRIPTION_ES_ES,
    FoDepartment.DESCRIPTION_ES_MX,
    FoDepartment.DESCRIPTION_FR_CA,
    FoDepartment.DESCRIPTION_FR_FR,
    FoDepartment.DESCRIPTION_IT_IT,
    FoDepartment.DESCRIPTION_LOCALIZED,
    FoDepartment.DESCRIPTION_NL_NL,
    FoDepartment.DESCRIPTION_PT_BR,
    FoDepartment.DESCRIPTION_ZH_CN,
    FoDepartment.END_DATE,
    FoDepartment.EXTERNAL_CODE,
    FoDepartment.HEAD_OF_UNIT,
    FoDepartment.LAST_MODIFIED_BY,
    FoDepartment.LAST_MODIFIED_DATE_TIME,
    FoDepartment.LAST_MODIFIED_ON,
    FoDepartment.NAME,
    FoDepartment.NAME_DE_DE,
    FoDepartment.NAME_DEFAULT_VALUE,
    FoDepartment.NAME_EN_DEBUG,
    FoDepartment.NAME_EN_GB,
    FoDepartment.NAME_EN_US,
    FoDepartment.NAME_ES_ES,
    FoDepartment.NAME_ES_MX,
    FoDepartment.NAME_FR_CA,
    FoDepartment.NAME_FR_FR,
    FoDepartment.NAME_IT_IT,
    FoDepartment.NAME_LOCALIZED,
    FoDepartment.NAME_NL_NL,
    FoDepartment.NAME_PT_BR,
    FoDepartment.NAME_ZH_CN,
    FoDepartment.PARENT,
    FoDepartment.START_DATE,
    FoDepartment.STATUS,
    FoDepartment.COST_CENTER_NAV,
    FoDepartment.CUST_TO_DIVISION,
    FoDepartment.DESCRIPTION_TRANSLATION_NAV,
    FoDepartment.DESCRIPTION_TRANSLATION_TEXT_NAV,
    FoDepartment.HEAD_OF_UNIT_NAV,
    FoDepartment.NAME_TRANSLATION_NAV,
    FoDepartment.NAME_TRANSLATION_TEXT_NAV,
    FoDepartment.PARENT_NAV,
    FoDepartment.STATUS_NAV
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<FoDepartment> = new AllFields('*', FoDepartment);
  /**
   * All key fields of the FoDepartment entity.
   */
  export const _keyFields: Array<Selectable<FoDepartment>> = [FoDepartment.EXTERNAL_CODE, FoDepartment.START_DATE];
  /**
   * Mapping of all key field names to the respective static field property FoDepartment.
   */
  export const _keys: { [keys: string]: Selectable<FoDepartment> } = FoDepartment._keyFields.reduce((acc: { [keys: string]: Selectable<FoDepartment> }, field: Selectable<FoDepartment>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}

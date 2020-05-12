/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { FoCostCenterRequestBuilder } from './FoCostCenterRequestBuilder';
import { Moment } from 'moment';
import { AllFields, CustomField, DateField, Entity, EntityBuilderType, Link, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "FOCostCenter" of service "SFOData".
 */
export class FoCostCenter extends Entity implements FoCostCenterType {
  /**
   * Technical entity name for FoCostCenter.
   */
  static _entityName = 'FOCostCenter';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for FoCostCenter.
   */
  static _serviceName = 'SFOData';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = 'VALUE_IS_UNDEFINED';
  /**
   * costCenterExternalObjectId.
   * Maximum length: 40.
   * @nullable
   */
  costcenterExternalObjectId?: string;
  /**
   * Cost Center Manager.
   * Maximum length: 100.
   * @nullable
   */
  costcenterManager?: string;
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
   * Legal Entity.
   * @nullable
   */
  custToLegalEntityProp?: string;
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
   * mdfSystemEntityId.
   * Maximum length: 255.
   */
  entityUuid!: string;
  /**
   * Code.
   * Maximum length: 32.
   */
  externalCode!: string;
  /**
   * GL Statement Code.
   * Maximum length: 32.
   * @nullable
   */
  glStatementCode?: string;
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
   * Parent Cost Center.
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
   * One-to-one navigation property to the [[User]] entity.
   */
  costcenterManagerNav!: User;
  /**
   * One-to-many navigation property to the [[FoCompany]] entity.
   */
  custToLegalEntity!: FoCompany[];
  /**
   * One-to-one navigation property to the [[FoTranslation]] entity.
   */
  descriptionTranslationNav!: FoTranslation;
  /**
   * One-to-many navigation property to the [[MdfLocalizedValue]] entity.
   */
  descriptionTranslationTextNav!: MdfLocalizedValue[];
  /**
   * One-to-one navigation property to the [[FoTranslation]] entity.
   */
  nameTranslationNav!: FoTranslation;
  /**
   * One-to-many navigation property to the [[MdfLocalizedValue]] entity.
   */
  nameTranslationTextNav!: MdfLocalizedValue[];
  /**
   * One-to-one navigation property to the [[FoCostCenter]] entity.
   */
  parentNav!: FoCostCenter;
  /**
   * One-to-one navigation property to the [[MdfEnumValue]] entity.
   */
  statusNav!: MdfEnumValue;

  /**
   * Returns an entity builder to construct instances `FoCostCenter`.
   * @returns A builder that constructs instances of entity type `FoCostCenter`.
   */
  static builder(): EntityBuilderType<FoCostCenter, FoCostCenterTypeForceMandatory> {
    return Entity.entityBuilder(FoCostCenter);
  }

  /**
   * Returns a request builder to construct requests for operations on the `FoCostCenter` entity type.
   * @returns A `FoCostCenter` request builder.
   */
  static requestBuilder(): FoCostCenterRequestBuilder {
    return new FoCostCenterRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `FoCostCenter`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `FoCostCenter`.
   */
  static customField(fieldName: string): CustomField<FoCostCenter> {
    return Entity.customFieldSelector(fieldName, FoCostCenter);
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
import { FoCompany, FoCompanyType } from './FoCompany';
import { FoTranslation, FoTranslationType } from './FoTranslation';
import { MdfLocalizedValue, MdfLocalizedValueType } from './MdfLocalizedValue';
import { MdfEnumValue, MdfEnumValueType } from './MdfEnumValue';

export interface FoCostCenterType {
  costcenterExternalObjectId?: string;
  costcenterManager?: string;
  createdBy?: string;
  createdDateTime?: Moment;
  createdOn?: Moment;
  custToLegalEntityProp?: string;
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
  entityUuid: string;
  externalCode: string;
  glStatementCode?: string;
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
  costcenterManagerNav: UserType;
  custToLegalEntity: FoCompanyType[];
  descriptionTranslationNav: FoTranslationType;
  descriptionTranslationTextNav: MdfLocalizedValueType[];
  nameTranslationNav: FoTranslationType;
  nameTranslationTextNav: MdfLocalizedValueType[];
  parentNav: FoCostCenterType;
  statusNav: MdfEnumValueType;
}

export interface FoCostCenterTypeForceMandatory {
  costcenterExternalObjectId: string;
  costcenterManager: string;
  createdBy: string;
  createdDateTime: Moment;
  createdOn: Moment;
  custToLegalEntityProp: string;
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
  entityUuid: string;
  externalCode: string;
  glStatementCode: string;
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
  costcenterManagerNav: UserType;
  custToLegalEntity: FoCompanyType[];
  descriptionTranslationNav: FoTranslationType;
  descriptionTranslationTextNav: MdfLocalizedValueType[];
  nameTranslationNav: FoTranslationType;
  nameTranslationTextNav: MdfLocalizedValueType[];
  parentNav: FoCostCenterType;
  statusNav: MdfEnumValueType;
}

export namespace FoCostCenter {
  /**
   * Static representation of the [[costcenterExternalObjectId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const COSTCENTER_EXTERNAL_OBJECT_ID: StringField<FoCostCenter> = new StringField('costcenterExternalObjectID', FoCostCenter, 'Edm.String');
  /**
   * Static representation of the [[costcenterManager]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const COSTCENTER_MANAGER: StringField<FoCostCenter> = new StringField('costcenterManager', FoCostCenter, 'Edm.String');
  /**
   * Static representation of the [[createdBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_BY: StringField<FoCostCenter> = new StringField('createdBy', FoCostCenter, 'Edm.String');
  /**
   * Static representation of the [[createdDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_DATE_TIME: DateField<FoCostCenter> = new DateField('createdDateTime', FoCostCenter, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[createdOn]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_ON: DateField<FoCostCenter> = new DateField('createdOn', FoCostCenter, 'Edm.DateTime');
  /**
   * Static representation of the [[custToLegalEntityProp]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CUST_TO_LEGAL_ENTITY_PROP: StringField<FoCostCenter> = new StringField('cust_toLegalEntityProp', FoCostCenter, 'Edm.String');
  /**
   * Static representation of the [[description]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DESCRIPTION: StringField<FoCostCenter> = new StringField('description', FoCostCenter, 'Edm.String');
  /**
   * Static representation of the [[descriptionDeDe]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DESCRIPTION_DE_DE: StringField<FoCostCenter> = new StringField('description_de_DE', FoCostCenter, 'Edm.String');
  /**
   * Static representation of the [[descriptionDefaultValue]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DESCRIPTION_DEFAULT_VALUE: StringField<FoCostCenter> = new StringField('description_defaultValue', FoCostCenter, 'Edm.String');
  /**
   * Static representation of the [[descriptionEnDebug]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DESCRIPTION_EN_DEBUG: StringField<FoCostCenter> = new StringField('description_en_DEBUG', FoCostCenter, 'Edm.String');
  /**
   * Static representation of the [[descriptionEnGb]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DESCRIPTION_EN_GB: StringField<FoCostCenter> = new StringField('description_en_GB', FoCostCenter, 'Edm.String');
  /**
   * Static representation of the [[descriptionEnUs]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DESCRIPTION_EN_US: StringField<FoCostCenter> = new StringField('description_en_US', FoCostCenter, 'Edm.String');
  /**
   * Static representation of the [[descriptionEsEs]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DESCRIPTION_ES_ES: StringField<FoCostCenter> = new StringField('description_es_ES', FoCostCenter, 'Edm.String');
  /**
   * Static representation of the [[descriptionEsMx]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DESCRIPTION_ES_MX: StringField<FoCostCenter> = new StringField('description_es_MX', FoCostCenter, 'Edm.String');
  /**
   * Static representation of the [[descriptionFrCa]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DESCRIPTION_FR_CA: StringField<FoCostCenter> = new StringField('description_fr_CA', FoCostCenter, 'Edm.String');
  /**
   * Static representation of the [[descriptionFrFr]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DESCRIPTION_FR_FR: StringField<FoCostCenter> = new StringField('description_fr_FR', FoCostCenter, 'Edm.String');
  /**
   * Static representation of the [[descriptionItIt]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DESCRIPTION_IT_IT: StringField<FoCostCenter> = new StringField('description_it_IT', FoCostCenter, 'Edm.String');
  /**
   * Static representation of the [[descriptionLocalized]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DESCRIPTION_LOCALIZED: StringField<FoCostCenter> = new StringField('description_localized', FoCostCenter, 'Edm.String');
  /**
   * Static representation of the [[descriptionNlNl]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DESCRIPTION_NL_NL: StringField<FoCostCenter> = new StringField('description_nl_NL', FoCostCenter, 'Edm.String');
  /**
   * Static representation of the [[descriptionPtBr]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DESCRIPTION_PT_BR: StringField<FoCostCenter> = new StringField('description_pt_BR', FoCostCenter, 'Edm.String');
  /**
   * Static representation of the [[descriptionZhCn]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DESCRIPTION_ZH_CN: StringField<FoCostCenter> = new StringField('description_zh_CN', FoCostCenter, 'Edm.String');
  /**
   * Static representation of the [[endDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const END_DATE: DateField<FoCostCenter> = new DateField('endDate', FoCostCenter, 'Edm.DateTime');
  /**
   * Static representation of the [[entityUuid]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ENTITY_UUID: StringField<FoCostCenter> = new StringField('entityUUID', FoCostCenter, 'Edm.String');
  /**
   * Static representation of the [[externalCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_CODE: StringField<FoCostCenter> = new StringField('externalCode', FoCostCenter, 'Edm.String');
  /**
   * Static representation of the [[glStatementCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GL_STATEMENT_CODE: StringField<FoCostCenter> = new StringField('glStatementCode', FoCostCenter, 'Edm.String');
  /**
   * Static representation of the [[lastModifiedBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_BY: StringField<FoCostCenter> = new StringField('lastModifiedBy', FoCostCenter, 'Edm.String');
  /**
   * Static representation of the [[lastModifiedDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_DATE_TIME: DateField<FoCostCenter> = new DateField('lastModifiedDateTime', FoCostCenter, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[lastModifiedOn]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_ON: DateField<FoCostCenter> = new DateField('lastModifiedOn', FoCostCenter, 'Edm.DateTime');
  /**
   * Static representation of the [[name]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NAME: StringField<FoCostCenter> = new StringField('name', FoCostCenter, 'Edm.String');
  /**
   * Static representation of the [[nameDeDe]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NAME_DE_DE: StringField<FoCostCenter> = new StringField('name_de_DE', FoCostCenter, 'Edm.String');
  /**
   * Static representation of the [[nameDefaultValue]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NAME_DEFAULT_VALUE: StringField<FoCostCenter> = new StringField('name_defaultValue', FoCostCenter, 'Edm.String');
  /**
   * Static representation of the [[nameEnDebug]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NAME_EN_DEBUG: StringField<FoCostCenter> = new StringField('name_en_DEBUG', FoCostCenter, 'Edm.String');
  /**
   * Static representation of the [[nameEnGb]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NAME_EN_GB: StringField<FoCostCenter> = new StringField('name_en_GB', FoCostCenter, 'Edm.String');
  /**
   * Static representation of the [[nameEnUs]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NAME_EN_US: StringField<FoCostCenter> = new StringField('name_en_US', FoCostCenter, 'Edm.String');
  /**
   * Static representation of the [[nameEsEs]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NAME_ES_ES: StringField<FoCostCenter> = new StringField('name_es_ES', FoCostCenter, 'Edm.String');
  /**
   * Static representation of the [[nameEsMx]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NAME_ES_MX: StringField<FoCostCenter> = new StringField('name_es_MX', FoCostCenter, 'Edm.String');
  /**
   * Static representation of the [[nameFrCa]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NAME_FR_CA: StringField<FoCostCenter> = new StringField('name_fr_CA', FoCostCenter, 'Edm.String');
  /**
   * Static representation of the [[nameFrFr]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NAME_FR_FR: StringField<FoCostCenter> = new StringField('name_fr_FR', FoCostCenter, 'Edm.String');
  /**
   * Static representation of the [[nameItIt]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NAME_IT_IT: StringField<FoCostCenter> = new StringField('name_it_IT', FoCostCenter, 'Edm.String');
  /**
   * Static representation of the [[nameLocalized]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NAME_LOCALIZED: StringField<FoCostCenter> = new StringField('name_localized', FoCostCenter, 'Edm.String');
  /**
   * Static representation of the [[nameNlNl]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NAME_NL_NL: StringField<FoCostCenter> = new StringField('name_nl_NL', FoCostCenter, 'Edm.String');
  /**
   * Static representation of the [[namePtBr]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NAME_PT_BR: StringField<FoCostCenter> = new StringField('name_pt_BR', FoCostCenter, 'Edm.String');
  /**
   * Static representation of the [[nameZhCn]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NAME_ZH_CN: StringField<FoCostCenter> = new StringField('name_zh_CN', FoCostCenter, 'Edm.String');
  /**
   * Static representation of the [[parent]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PARENT: StringField<FoCostCenter> = new StringField('parent', FoCostCenter, 'Edm.String');
  /**
   * Static representation of the [[startDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const START_DATE: DateField<FoCostCenter> = new DateField('startDate', FoCostCenter, 'Edm.DateTime');
  /**
   * Static representation of the [[status]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const STATUS: StringField<FoCostCenter> = new StringField('status', FoCostCenter, 'Edm.String');
  /**
   * Static representation of the one-to-one navigation property [[costcenterManagerNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const COSTCENTER_MANAGER_NAV: OneToOneLink<FoCostCenter, User> = new OneToOneLink('costcenterManagerNav', FoCostCenter, User);
  /**
   * Static representation of the one-to-many navigation property [[custToLegalEntity]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CUST_TO_LEGAL_ENTITY: Link<FoCostCenter, FoCompany> = new Link('cust_toLegalEntity', FoCostCenter, FoCompany);
  /**
   * Static representation of the one-to-one navigation property [[descriptionTranslationNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DESCRIPTION_TRANSLATION_NAV: OneToOneLink<FoCostCenter, FoTranslation> = new OneToOneLink('descriptionTranslationNav', FoCostCenter, FoTranslation);
  /**
   * Static representation of the one-to-many navigation property [[descriptionTranslationTextNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DESCRIPTION_TRANSLATION_TEXT_NAV: Link<FoCostCenter, MdfLocalizedValue> = new Link('descriptionTranslationTextNav', FoCostCenter, MdfLocalizedValue);
  /**
   * Static representation of the one-to-one navigation property [[nameTranslationNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NAME_TRANSLATION_NAV: OneToOneLink<FoCostCenter, FoTranslation> = new OneToOneLink('nameTranslationNav', FoCostCenter, FoTranslation);
  /**
   * Static representation of the one-to-many navigation property [[nameTranslationTextNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NAME_TRANSLATION_TEXT_NAV: Link<FoCostCenter, MdfLocalizedValue> = new Link('nameTranslationTextNav', FoCostCenter, MdfLocalizedValue);
  /**
   * Static representation of the one-to-one navigation property [[parentNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PARENT_NAV: OneToOneLink<FoCostCenter, FoCostCenter> = new OneToOneLink('parentNav', FoCostCenter, FoCostCenter);
  /**
   * Static representation of the one-to-one navigation property [[statusNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const STATUS_NAV: OneToOneLink<FoCostCenter, MdfEnumValue> = new OneToOneLink('statusNav', FoCostCenter, MdfEnumValue);
  /**
   * All fields of the FoCostCenter entity.
   */
  export const _allFields: Array<StringField<FoCostCenter> | DateField<FoCostCenter> | OneToOneLink<FoCostCenter, User> | Link<FoCostCenter, FoCompany> | OneToOneLink<FoCostCenter, FoTranslation> | Link<FoCostCenter, MdfLocalizedValue> | OneToOneLink<FoCostCenter, FoCostCenter> | OneToOneLink<FoCostCenter, MdfEnumValue>> = [
    FoCostCenter.COSTCENTER_EXTERNAL_OBJECT_ID,
    FoCostCenter.COSTCENTER_MANAGER,
    FoCostCenter.CREATED_BY,
    FoCostCenter.CREATED_DATE_TIME,
    FoCostCenter.CREATED_ON,
    FoCostCenter.CUST_TO_LEGAL_ENTITY_PROP,
    FoCostCenter.DESCRIPTION,
    FoCostCenter.DESCRIPTION_DE_DE,
    FoCostCenter.DESCRIPTION_DEFAULT_VALUE,
    FoCostCenter.DESCRIPTION_EN_DEBUG,
    FoCostCenter.DESCRIPTION_EN_GB,
    FoCostCenter.DESCRIPTION_EN_US,
    FoCostCenter.DESCRIPTION_ES_ES,
    FoCostCenter.DESCRIPTION_ES_MX,
    FoCostCenter.DESCRIPTION_FR_CA,
    FoCostCenter.DESCRIPTION_FR_FR,
    FoCostCenter.DESCRIPTION_IT_IT,
    FoCostCenter.DESCRIPTION_LOCALIZED,
    FoCostCenter.DESCRIPTION_NL_NL,
    FoCostCenter.DESCRIPTION_PT_BR,
    FoCostCenter.DESCRIPTION_ZH_CN,
    FoCostCenter.END_DATE,
    FoCostCenter.ENTITY_UUID,
    FoCostCenter.EXTERNAL_CODE,
    FoCostCenter.GL_STATEMENT_CODE,
    FoCostCenter.LAST_MODIFIED_BY,
    FoCostCenter.LAST_MODIFIED_DATE_TIME,
    FoCostCenter.LAST_MODIFIED_ON,
    FoCostCenter.NAME,
    FoCostCenter.NAME_DE_DE,
    FoCostCenter.NAME_DEFAULT_VALUE,
    FoCostCenter.NAME_EN_DEBUG,
    FoCostCenter.NAME_EN_GB,
    FoCostCenter.NAME_EN_US,
    FoCostCenter.NAME_ES_ES,
    FoCostCenter.NAME_ES_MX,
    FoCostCenter.NAME_FR_CA,
    FoCostCenter.NAME_FR_FR,
    FoCostCenter.NAME_IT_IT,
    FoCostCenter.NAME_LOCALIZED,
    FoCostCenter.NAME_NL_NL,
    FoCostCenter.NAME_PT_BR,
    FoCostCenter.NAME_ZH_CN,
    FoCostCenter.PARENT,
    FoCostCenter.START_DATE,
    FoCostCenter.STATUS,
    FoCostCenter.COSTCENTER_MANAGER_NAV,
    FoCostCenter.CUST_TO_LEGAL_ENTITY,
    FoCostCenter.DESCRIPTION_TRANSLATION_NAV,
    FoCostCenter.DESCRIPTION_TRANSLATION_TEXT_NAV,
    FoCostCenter.NAME_TRANSLATION_NAV,
    FoCostCenter.NAME_TRANSLATION_TEXT_NAV,
    FoCostCenter.PARENT_NAV,
    FoCostCenter.STATUS_NAV
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<FoCostCenter> = new AllFields('*', FoCostCenter);
  /**
   * All key fields of the FoCostCenter entity.
   */
  export const _keyFields: Array<Selectable<FoCostCenter>> = [FoCostCenter.EXTERNAL_CODE, FoCostCenter.START_DATE];
  /**
   * Mapping of all key field names to the respective static field property FoCostCenter.
   */
  export const _keys: { [keys: string]: Selectable<FoCostCenter> } = FoCostCenter._keyFields.reduce((acc: { [keys: string]: Selectable<FoCostCenter> }, field: Selectable<FoCostCenter>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}

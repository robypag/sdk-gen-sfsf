/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { TalentPoolRequestBuilder } from './TalentPoolRequestBuilder';
import { Moment } from 'moment';
import { AllFields, BooleanField, CustomField, DateField, Entity, EntityBuilderType, Link, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "TalentPool" of service "SFOData".
 */
export class TalentPool extends Entity implements TalentPoolType {
  /**
   * Technical entity name for TalentPool.
   */
  static _entityName = 'TalentPool';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for TalentPool.
   */
  static _serviceName = 'SFOData';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = 'VALUE_IS_UNDEFINED';
  /**
   * Code.
   * Maximum length: 128.
   */
  code!: string;
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
   * Description.
   * Maximum length: 255.
   * @nullable
   */
  descriptionDeDe?: string;
  /**
   * Description.
   * Maximum length: 255.
   * @nullable
   */
  descriptionDefaultValue?: string;
  /**
   * Description.
   * Maximum length: 255.
   * @nullable
   */
  descriptionEnDebug?: string;
  /**
   * Description.
   * Maximum length: 255.
   * @nullable
   */
  descriptionEnGb?: string;
  /**
   * Description.
   * Maximum length: 255.
   * @nullable
   */
  descriptionEnUs?: string;
  /**
   * Description.
   * Maximum length: 255.
   * @nullable
   */
  descriptionEsEs?: string;
  /**
   * Description.
   * Maximum length: 255.
   * @nullable
   */
  descriptionEsMx?: string;
  /**
   * Description.
   * Maximum length: 255.
   * @nullable
   */
  descriptionFrCa?: string;
  /**
   * Description.
   * Maximum length: 255.
   * @nullable
   */
  descriptionFrFr?: string;
  /**
   * Description.
   * Maximum length: 255.
   * @nullable
   */
  descriptionItIt?: string;
  /**
   * Description.
   * Maximum length: 255.
   * @nullable
   */
  descriptionLocalized?: string;
  /**
   * Description.
   * Maximum length: 255.
   * @nullable
   */
  descriptionNlNl?: string;
  /**
   * Description.
   * Maximum length: 255.
   * @nullable
   */
  descriptionPtBr?: string;
  /**
   * Description.
   * Maximum length: 255.
   * @nullable
   */
  descriptionZhCn?: string;
  /**
   * End Date.
   * @nullable
   */
  effectiveEndDate?: Moment;
  /**
   * Start Date.
   */
  effectiveStartDate!: Moment;
  /**
   * Status.
   * Maximum length: 255.
   * @nullable
   */
  effectiveStatus?: string;
  /**
   * Enable Readiness.
   * @nullable
   */
  enableReadiness?: boolean;
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
   * Record Status.
   * Maximum length: 255.
   * @nullable
   */
  mdfSystemRecordStatus?: string;
  /**
   * Name.
   * Maximum length: 255.
   * @nullable
   */
  nameDeDe?: string;
  /**
   * Name.
   * Maximum length: 255.
   * @nullable
   */
  nameDefaultValue?: string;
  /**
   * Name.
   * Maximum length: 255.
   * @nullable
   */
  nameEnDebug?: string;
  /**
   * Name.
   * Maximum length: 255.
   * @nullable
   */
  nameEnGb?: string;
  /**
   * Name.
   * Maximum length: 255.
   * @nullable
   */
  nameEnUs?: string;
  /**
   * Name.
   * Maximum length: 255.
   * @nullable
   */
  nameEsEs?: string;
  /**
   * Name.
   * Maximum length: 255.
   * @nullable
   */
  nameEsMx?: string;
  /**
   * Name.
   * Maximum length: 255.
   * @nullable
   */
  nameFrCa?: string;
  /**
   * Name.
   * Maximum length: 255.
   * @nullable
   */
  nameFrFr?: string;
  /**
   * Name.
   * Maximum length: 255.
   * @nullable
   */
  nameItIt?: string;
  /**
   * Name.
   * Maximum length: 255.
   * @nullable
   */
  nameLocalized?: string;
  /**
   * Name.
   * Maximum length: 255.
   * @nullable
   */
  nameNlNl?: string;
  /**
   * Name.
   * Maximum length: 255.
   * @nullable
   */
  namePtBr?: string;
  /**
   * Name.
   * Maximum length: 255.
   * @nullable
   */
  nameZhCn?: string;
  /**
   * Owner.
   * Maximum length: 100.
   * @nullable
   */
  owner?: string;
  /**
   * Type.
   * Maximum length: 128.
   * @nullable
   */
  type?: string;
  /**
   * One-to-one navigation property to the [[User]] entity.
   */
  createdByNav!: User;
  /**
   * One-to-many navigation property to the [[MdfLocalizedValue]] entity.
   */
  descriptionTranslationTextNav!: MdfLocalizedValue[];
  /**
   * One-to-one navigation property to the [[MdfEnumValue]] entity.
   */
  effectiveStatusNav!: MdfEnumValue;
  /**
   * One-to-one navigation property to the [[User]] entity.
   */
  lastModifiedByNav!: User;
  /**
   * One-to-one navigation property to the [[MdfEnumValue]] entity.
   */
  mdfSystemRecordStatusNav!: MdfEnumValue;
  /**
   * One-to-many navigation property to the [[MdfLocalizedValue]] entity.
   */
  nameTranslationTextNav!: MdfLocalizedValue[];
  /**
   * One-to-one navigation property to the [[User]] entity.
   */
  ownerNav!: User;
  /**
   * One-to-many navigation property to the [[Successor]] entity.
   */
  successorNav!: Successor[];
  /**
   * One-to-one navigation property to the [[PickListValueV2]] entity.
   */
  typeNav!: PickListValueV2;
  /**
   * One-to-many navigation property to the [[WfRequest]] entity.
   */
  wfRequestNav!: WfRequest[];

  /**
   * Returns an entity builder to construct instances `TalentPool`.
   * @returns A builder that constructs instances of entity type `TalentPool`.
   */
  static builder(): EntityBuilderType<TalentPool, TalentPoolTypeForceMandatory> {
    return Entity.entityBuilder(TalentPool);
  }

  /**
   * Returns a request builder to construct requests for operations on the `TalentPool` entity type.
   * @returns A `TalentPool` request builder.
   */
  static requestBuilder(): TalentPoolRequestBuilder {
    return new TalentPoolRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `TalentPool`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `TalentPool`.
   */
  static customField(fieldName: string): CustomField<TalentPool> {
    return Entity.customFieldSelector(fieldName, TalentPool);
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
import { MdfLocalizedValue, MdfLocalizedValueType } from './MdfLocalizedValue';
import { MdfEnumValue, MdfEnumValueType } from './MdfEnumValue';
import { Successor, SuccessorType } from './Successor';
import { PickListValueV2, PickListValueV2Type } from './PickListValueV2';
import { WfRequest, WfRequestType } from './WfRequest';

export interface TalentPoolType {
  code: string;
  createdBy?: string;
  createdDateTime?: Moment;
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
  effectiveEndDate?: Moment;
  effectiveStartDate: Moment;
  effectiveStatus?: string;
  enableReadiness?: boolean;
  lastModifiedBy?: string;
  lastModifiedDateTime?: Moment;
  mdfSystemRecordStatus?: string;
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
  owner?: string;
  type?: string;
  createdByNav: UserType;
  descriptionTranslationTextNav: MdfLocalizedValueType[];
  effectiveStatusNav: MdfEnumValueType;
  lastModifiedByNav: UserType;
  mdfSystemRecordStatusNav: MdfEnumValueType;
  nameTranslationTextNav: MdfLocalizedValueType[];
  ownerNav: UserType;
  successorNav: SuccessorType[];
  typeNav: PickListValueV2Type;
  wfRequestNav: WfRequestType[];
}

export interface TalentPoolTypeForceMandatory {
  code: string;
  createdBy: string;
  createdDateTime: Moment;
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
  effectiveEndDate: Moment;
  effectiveStartDate: Moment;
  effectiveStatus: string;
  enableReadiness: boolean;
  lastModifiedBy: string;
  lastModifiedDateTime: Moment;
  mdfSystemRecordStatus: string;
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
  owner: string;
  type: string;
  createdByNav: UserType;
  descriptionTranslationTextNav: MdfLocalizedValueType[];
  effectiveStatusNav: MdfEnumValueType;
  lastModifiedByNav: UserType;
  mdfSystemRecordStatusNav: MdfEnumValueType;
  nameTranslationTextNav: MdfLocalizedValueType[];
  ownerNav: UserType;
  successorNav: SuccessorType[];
  typeNav: PickListValueV2Type;
  wfRequestNav: WfRequestType[];
}

export namespace TalentPool {
  /**
   * Static representation of the [[code]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CODE: StringField<TalentPool> = new StringField('code', TalentPool, 'Edm.String');
  /**
   * Static representation of the [[createdBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_BY: StringField<TalentPool> = new StringField('createdBy', TalentPool, 'Edm.String');
  /**
   * Static representation of the [[createdDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_DATE_TIME: DateField<TalentPool> = new DateField('createdDateTime', TalentPool, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[descriptionDeDe]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DESCRIPTION_DE_DE: StringField<TalentPool> = new StringField('description_de_DE', TalentPool, 'Edm.String');
  /**
   * Static representation of the [[descriptionDefaultValue]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DESCRIPTION_DEFAULT_VALUE: StringField<TalentPool> = new StringField('description_defaultValue', TalentPool, 'Edm.String');
  /**
   * Static representation of the [[descriptionEnDebug]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DESCRIPTION_EN_DEBUG: StringField<TalentPool> = new StringField('description_en_DEBUG', TalentPool, 'Edm.String');
  /**
   * Static representation of the [[descriptionEnGb]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DESCRIPTION_EN_GB: StringField<TalentPool> = new StringField('description_en_GB', TalentPool, 'Edm.String');
  /**
   * Static representation of the [[descriptionEnUs]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DESCRIPTION_EN_US: StringField<TalentPool> = new StringField('description_en_US', TalentPool, 'Edm.String');
  /**
   * Static representation of the [[descriptionEsEs]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DESCRIPTION_ES_ES: StringField<TalentPool> = new StringField('description_es_ES', TalentPool, 'Edm.String');
  /**
   * Static representation of the [[descriptionEsMx]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DESCRIPTION_ES_MX: StringField<TalentPool> = new StringField('description_es_MX', TalentPool, 'Edm.String');
  /**
   * Static representation of the [[descriptionFrCa]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DESCRIPTION_FR_CA: StringField<TalentPool> = new StringField('description_fr_CA', TalentPool, 'Edm.String');
  /**
   * Static representation of the [[descriptionFrFr]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DESCRIPTION_FR_FR: StringField<TalentPool> = new StringField('description_fr_FR', TalentPool, 'Edm.String');
  /**
   * Static representation of the [[descriptionItIt]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DESCRIPTION_IT_IT: StringField<TalentPool> = new StringField('description_it_IT', TalentPool, 'Edm.String');
  /**
   * Static representation of the [[descriptionLocalized]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DESCRIPTION_LOCALIZED: StringField<TalentPool> = new StringField('description_localized', TalentPool, 'Edm.String');
  /**
   * Static representation of the [[descriptionNlNl]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DESCRIPTION_NL_NL: StringField<TalentPool> = new StringField('description_nl_NL', TalentPool, 'Edm.String');
  /**
   * Static representation of the [[descriptionPtBr]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DESCRIPTION_PT_BR: StringField<TalentPool> = new StringField('description_pt_BR', TalentPool, 'Edm.String');
  /**
   * Static representation of the [[descriptionZhCn]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DESCRIPTION_ZH_CN: StringField<TalentPool> = new StringField('description_zh_CN', TalentPool, 'Edm.String');
  /**
   * Static representation of the [[effectiveEndDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EFFECTIVE_END_DATE: DateField<TalentPool> = new DateField('effectiveEndDate', TalentPool, 'Edm.DateTime');
  /**
   * Static representation of the [[effectiveStartDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EFFECTIVE_START_DATE: DateField<TalentPool> = new DateField('effectiveStartDate', TalentPool, 'Edm.DateTime');
  /**
   * Static representation of the [[effectiveStatus]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EFFECTIVE_STATUS: StringField<TalentPool> = new StringField('effectiveStatus', TalentPool, 'Edm.String');
  /**
   * Static representation of the [[enableReadiness]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ENABLE_READINESS: BooleanField<TalentPool> = new BooleanField('enableReadiness', TalentPool, 'Edm.Boolean');
  /**
   * Static representation of the [[lastModifiedBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_BY: StringField<TalentPool> = new StringField('lastModifiedBy', TalentPool, 'Edm.String');
  /**
   * Static representation of the [[lastModifiedDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_DATE_TIME: DateField<TalentPool> = new DateField('lastModifiedDateTime', TalentPool, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_RECORD_STATUS: StringField<TalentPool> = new StringField('mdfSystemRecordStatus', TalentPool, 'Edm.String');
  /**
   * Static representation of the [[nameDeDe]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NAME_DE_DE: StringField<TalentPool> = new StringField('name_de_DE', TalentPool, 'Edm.String');
  /**
   * Static representation of the [[nameDefaultValue]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NAME_DEFAULT_VALUE: StringField<TalentPool> = new StringField('name_defaultValue', TalentPool, 'Edm.String');
  /**
   * Static representation of the [[nameEnDebug]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NAME_EN_DEBUG: StringField<TalentPool> = new StringField('name_en_DEBUG', TalentPool, 'Edm.String');
  /**
   * Static representation of the [[nameEnGb]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NAME_EN_GB: StringField<TalentPool> = new StringField('name_en_GB', TalentPool, 'Edm.String');
  /**
   * Static representation of the [[nameEnUs]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NAME_EN_US: StringField<TalentPool> = new StringField('name_en_US', TalentPool, 'Edm.String');
  /**
   * Static representation of the [[nameEsEs]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NAME_ES_ES: StringField<TalentPool> = new StringField('name_es_ES', TalentPool, 'Edm.String');
  /**
   * Static representation of the [[nameEsMx]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NAME_ES_MX: StringField<TalentPool> = new StringField('name_es_MX', TalentPool, 'Edm.String');
  /**
   * Static representation of the [[nameFrCa]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NAME_FR_CA: StringField<TalentPool> = new StringField('name_fr_CA', TalentPool, 'Edm.String');
  /**
   * Static representation of the [[nameFrFr]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NAME_FR_FR: StringField<TalentPool> = new StringField('name_fr_FR', TalentPool, 'Edm.String');
  /**
   * Static representation of the [[nameItIt]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NAME_IT_IT: StringField<TalentPool> = new StringField('name_it_IT', TalentPool, 'Edm.String');
  /**
   * Static representation of the [[nameLocalized]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NAME_LOCALIZED: StringField<TalentPool> = new StringField('name_localized', TalentPool, 'Edm.String');
  /**
   * Static representation of the [[nameNlNl]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NAME_NL_NL: StringField<TalentPool> = new StringField('name_nl_NL', TalentPool, 'Edm.String');
  /**
   * Static representation of the [[namePtBr]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NAME_PT_BR: StringField<TalentPool> = new StringField('name_pt_BR', TalentPool, 'Edm.String');
  /**
   * Static representation of the [[nameZhCn]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NAME_ZH_CN: StringField<TalentPool> = new StringField('name_zh_CN', TalentPool, 'Edm.String');
  /**
   * Static representation of the [[owner]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const OWNER: StringField<TalentPool> = new StringField('owner', TalentPool, 'Edm.String');
  /**
   * Static representation of the [[type]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TYPE: StringField<TalentPool> = new StringField('type', TalentPool, 'Edm.String');
  /**
   * Static representation of the one-to-one navigation property [[createdByNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_BY_NAV: OneToOneLink<TalentPool, User> = new OneToOneLink('createdByNav', TalentPool, User);
  /**
   * Static representation of the one-to-many navigation property [[descriptionTranslationTextNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DESCRIPTION_TRANSLATION_TEXT_NAV: Link<TalentPool, MdfLocalizedValue> = new Link('descriptionTranslationTextNav', TalentPool, MdfLocalizedValue);
  /**
   * Static representation of the one-to-one navigation property [[effectiveStatusNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EFFECTIVE_STATUS_NAV: OneToOneLink<TalentPool, MdfEnumValue> = new OneToOneLink('effectiveStatusNav', TalentPool, MdfEnumValue);
  /**
   * Static representation of the one-to-one navigation property [[lastModifiedByNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_BY_NAV: OneToOneLink<TalentPool, User> = new OneToOneLink('lastModifiedByNav', TalentPool, User);
  /**
   * Static representation of the one-to-one navigation property [[mdfSystemRecordStatusNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_RECORD_STATUS_NAV: OneToOneLink<TalentPool, MdfEnumValue> = new OneToOneLink('mdfSystemRecordStatusNav', TalentPool, MdfEnumValue);
  /**
   * Static representation of the one-to-many navigation property [[nameTranslationTextNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NAME_TRANSLATION_TEXT_NAV: Link<TalentPool, MdfLocalizedValue> = new Link('nameTranslationTextNav', TalentPool, MdfLocalizedValue);
  /**
   * Static representation of the one-to-one navigation property [[ownerNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const OWNER_NAV: OneToOneLink<TalentPool, User> = new OneToOneLink('ownerNav', TalentPool, User);
  /**
   * Static representation of the one-to-many navigation property [[successorNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SUCCESSOR_NAV: Link<TalentPool, Successor> = new Link('successorNav', TalentPool, Successor);
  /**
   * Static representation of the one-to-one navigation property [[typeNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TYPE_NAV: OneToOneLink<TalentPool, PickListValueV2> = new OneToOneLink('typeNav', TalentPool, PickListValueV2);
  /**
   * Static representation of the one-to-many navigation property [[wfRequestNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const WF_REQUEST_NAV: Link<TalentPool, WfRequest> = new Link('wfRequestNav', TalentPool, WfRequest);
  /**
   * All fields of the TalentPool entity.
   */
  export const _allFields: Array<StringField<TalentPool> | DateField<TalentPool> | BooleanField<TalentPool> | OneToOneLink<TalentPool, User> | Link<TalentPool, MdfLocalizedValue> | OneToOneLink<TalentPool, MdfEnumValue> | Link<TalentPool, Successor> | OneToOneLink<TalentPool, PickListValueV2> | Link<TalentPool, WfRequest>> = [
    TalentPool.CODE,
    TalentPool.CREATED_BY,
    TalentPool.CREATED_DATE_TIME,
    TalentPool.DESCRIPTION_DE_DE,
    TalentPool.DESCRIPTION_DEFAULT_VALUE,
    TalentPool.DESCRIPTION_EN_DEBUG,
    TalentPool.DESCRIPTION_EN_GB,
    TalentPool.DESCRIPTION_EN_US,
    TalentPool.DESCRIPTION_ES_ES,
    TalentPool.DESCRIPTION_ES_MX,
    TalentPool.DESCRIPTION_FR_CA,
    TalentPool.DESCRIPTION_FR_FR,
    TalentPool.DESCRIPTION_IT_IT,
    TalentPool.DESCRIPTION_LOCALIZED,
    TalentPool.DESCRIPTION_NL_NL,
    TalentPool.DESCRIPTION_PT_BR,
    TalentPool.DESCRIPTION_ZH_CN,
    TalentPool.EFFECTIVE_END_DATE,
    TalentPool.EFFECTIVE_START_DATE,
    TalentPool.EFFECTIVE_STATUS,
    TalentPool.ENABLE_READINESS,
    TalentPool.LAST_MODIFIED_BY,
    TalentPool.LAST_MODIFIED_DATE_TIME,
    TalentPool.MDF_SYSTEM_RECORD_STATUS,
    TalentPool.NAME_DE_DE,
    TalentPool.NAME_DEFAULT_VALUE,
    TalentPool.NAME_EN_DEBUG,
    TalentPool.NAME_EN_GB,
    TalentPool.NAME_EN_US,
    TalentPool.NAME_ES_ES,
    TalentPool.NAME_ES_MX,
    TalentPool.NAME_FR_CA,
    TalentPool.NAME_FR_FR,
    TalentPool.NAME_IT_IT,
    TalentPool.NAME_LOCALIZED,
    TalentPool.NAME_NL_NL,
    TalentPool.NAME_PT_BR,
    TalentPool.NAME_ZH_CN,
    TalentPool.OWNER,
    TalentPool.TYPE,
    TalentPool.CREATED_BY_NAV,
    TalentPool.DESCRIPTION_TRANSLATION_TEXT_NAV,
    TalentPool.EFFECTIVE_STATUS_NAV,
    TalentPool.LAST_MODIFIED_BY_NAV,
    TalentPool.MDF_SYSTEM_RECORD_STATUS_NAV,
    TalentPool.NAME_TRANSLATION_TEXT_NAV,
    TalentPool.OWNER_NAV,
    TalentPool.SUCCESSOR_NAV,
    TalentPool.TYPE_NAV,
    TalentPool.WF_REQUEST_NAV
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<TalentPool> = new AllFields('*', TalentPool);
  /**
   * All key fields of the TalentPool entity.
   */
  export const _keyFields: Array<Selectable<TalentPool>> = [TalentPool.CODE, TalentPool.EFFECTIVE_START_DATE];
  /**
   * Mapping of all key field names to the respective static field property TalentPool.
   */
  export const _keys: { [keys: string]: Selectable<TalentPool> } = TalentPool._keyFields.reduce((acc: { [keys: string]: Selectable<TalentPool> }, field: Selectable<TalentPool>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}

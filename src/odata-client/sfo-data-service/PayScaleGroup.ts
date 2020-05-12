/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { PayScaleGroupRequestBuilder } from './PayScaleGroupRequestBuilder';
import { Moment } from 'moment';
import { AllFields, CustomField, DateField, Entity, EntityBuilderType, Link, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "PayScaleGroup" of service "SFOData".
 */
export class PayScaleGroup extends Entity implements PayScaleGroupType {
  /**
   * Technical entity name for PayScaleGroup.
   */
  static _entityName = 'PayScaleGroup';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for PayScaleGroup.
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
   * Country/Region.
   * Maximum length: 128.
   * @nullable
   */
  country?: string;
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
   * External Name.
   * Maximum length: 255.
   * @nullable
   */
  externalNameDeDe?: string;
  /**
   * External Name.
   * Maximum length: 255.
   * @nullable
   */
  externalNameDefaultValue?: string;
  /**
   * External Name.
   * Maximum length: 255.
   * @nullable
   */
  externalNameEnDebug?: string;
  /**
   * External Name.
   * Maximum length: 255.
   * @nullable
   */
  externalNameEnGb?: string;
  /**
   * External Name.
   * Maximum length: 255.
   * @nullable
   */
  externalNameEnUs?: string;
  /**
   * External Name.
   * Maximum length: 255.
   * @nullable
   */
  externalNameEsEs?: string;
  /**
   * External Name.
   * Maximum length: 255.
   * @nullable
   */
  externalNameEsMx?: string;
  /**
   * External Name.
   * Maximum length: 255.
   * @nullable
   */
  externalNameFrCa?: string;
  /**
   * External Name.
   * Maximum length: 255.
   * @nullable
   */
  externalNameFrFr?: string;
  /**
   * External Name.
   * Maximum length: 255.
   * @nullable
   */
  externalNameItIt?: string;
  /**
   * External Name.
   * Maximum length: 255.
   * @nullable
   */
  externalNameLocalized?: string;
  /**
   * External Name.
   * Maximum length: 255.
   * @nullable
   */
  externalNameNlNl?: string;
  /**
   * External Name.
   * Maximum length: 255.
   * @nullable
   */
  externalNamePtBr?: string;
  /**
   * External Name.
   * Maximum length: 255.
   * @nullable
   */
  externalNameZhCn?: string;
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
   * Pay Scale Area.
   * Maximum length: 128.
   * @nullable
   */
  payScaleArea?: string;
  /**
   * Pay Scale Group.
   * Maximum length: 255.
   * @nullable
   */
  payScaleGroup?: string;
  /**
   * Pay Scale Type.
   * Maximum length: 128.
   * @nullable
   */
  payScaleType?: string;
  /**
   * One-to-many navigation property to the [[Country]] entity.
   */
  countryNav!: Country[];
  /**
   * One-to-one navigation property to the [[User]] entity.
   */
  createdByNav!: User;
  /**
   * One-to-many navigation property to the [[MdfLocalizedValue]] entity.
   */
  externalNameTranslationTextNav!: MdfLocalizedValue[];
  /**
   * One-to-one navigation property to the [[User]] entity.
   */
  lastModifiedByNav!: User;
  /**
   * One-to-one navigation property to the [[MdfEnumValue]] entity.
   */
  mdfSystemRecordStatusNav!: MdfEnumValue;
  /**
   * One-to-one navigation property to the [[PayScaleArea]] entity.
   */
  payScaleAreaNav!: PayScaleArea;
  /**
   * One-to-one navigation property to the [[PayScaleType]] entity.
   */
  payScaleTypeNav!: PayScaleType;
  /**
   * One-to-many navigation property to the [[WfRequest]] entity.
   */
  wfRequestNav!: WfRequest[];

  /**
   * Returns an entity builder to construct instances `PayScaleGroup`.
   * @returns A builder that constructs instances of entity type `PayScaleGroup`.
   */
  static builder(): EntityBuilderType<PayScaleGroup, PayScaleGroupTypeForceMandatory> {
    return Entity.entityBuilder(PayScaleGroup);
  }

  /**
   * Returns a request builder to construct requests for operations on the `PayScaleGroup` entity type.
   * @returns A `PayScaleGroup` request builder.
   */
  static requestBuilder(): PayScaleGroupRequestBuilder {
    return new PayScaleGroupRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `PayScaleGroup`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `PayScaleGroup`.
   */
  static customField(fieldName: string): CustomField<PayScaleGroup> {
    return Entity.customFieldSelector(fieldName, PayScaleGroup);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
}

import { Country, CountryType } from './Country';
import { User, UserType } from './User';
import { MdfLocalizedValue, MdfLocalizedValueType } from './MdfLocalizedValue';
import { MdfEnumValue, MdfEnumValueType } from './MdfEnumValue';
import { PayScaleArea, PayScaleAreaType } from './PayScaleArea';
import { PayScaleType, PayScaleTypeType } from './PayScaleType';
import { WfRequest, WfRequestType } from './WfRequest';

export interface PayScaleGroupType {
  code: string;
  country?: string;
  createdBy?: string;
  createdDateTime?: Moment;
  externalNameDeDe?: string;
  externalNameDefaultValue?: string;
  externalNameEnDebug?: string;
  externalNameEnGb?: string;
  externalNameEnUs?: string;
  externalNameEsEs?: string;
  externalNameEsMx?: string;
  externalNameFrCa?: string;
  externalNameFrFr?: string;
  externalNameItIt?: string;
  externalNameLocalized?: string;
  externalNameNlNl?: string;
  externalNamePtBr?: string;
  externalNameZhCn?: string;
  lastModifiedBy?: string;
  lastModifiedDateTime?: Moment;
  mdfSystemRecordStatus?: string;
  payScaleArea?: string;
  payScaleGroup?: string;
  payScaleType?: string;
  countryNav: CountryType[];
  createdByNav: UserType;
  externalNameTranslationTextNav: MdfLocalizedValueType[];
  lastModifiedByNav: UserType;
  mdfSystemRecordStatusNav: MdfEnumValueType;
  payScaleAreaNav: PayScaleAreaType;
  payScaleTypeNav: PayScaleTypeType;
  wfRequestNav: WfRequestType[];
}

export interface PayScaleGroupTypeForceMandatory {
  code: string;
  country: string;
  createdBy: string;
  createdDateTime: Moment;
  externalNameDeDe: string;
  externalNameDefaultValue: string;
  externalNameEnDebug: string;
  externalNameEnGb: string;
  externalNameEnUs: string;
  externalNameEsEs: string;
  externalNameEsMx: string;
  externalNameFrCa: string;
  externalNameFrFr: string;
  externalNameItIt: string;
  externalNameLocalized: string;
  externalNameNlNl: string;
  externalNamePtBr: string;
  externalNameZhCn: string;
  lastModifiedBy: string;
  lastModifiedDateTime: Moment;
  mdfSystemRecordStatus: string;
  payScaleArea: string;
  payScaleGroup: string;
  payScaleType: string;
  countryNav: CountryType[];
  createdByNav: UserType;
  externalNameTranslationTextNav: MdfLocalizedValueType[];
  lastModifiedByNav: UserType;
  mdfSystemRecordStatusNav: MdfEnumValueType;
  payScaleAreaNav: PayScaleAreaType;
  payScaleTypeNav: PayScaleTypeType;
  wfRequestNav: WfRequestType[];
}

export namespace PayScaleGroup {
  /**
   * Static representation of the [[code]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CODE: StringField<PayScaleGroup> = new StringField('code', PayScaleGroup, 'Edm.String');
  /**
   * Static representation of the [[country]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const COUNTRY: StringField<PayScaleGroup> = new StringField('country', PayScaleGroup, 'Edm.String');
  /**
   * Static representation of the [[createdBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_BY: StringField<PayScaleGroup> = new StringField('createdBy', PayScaleGroup, 'Edm.String');
  /**
   * Static representation of the [[createdDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_DATE_TIME: DateField<PayScaleGroup> = new DateField('createdDateTime', PayScaleGroup, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[externalNameDeDe]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_NAME_DE_DE: StringField<PayScaleGroup> = new StringField('externalName_de_DE', PayScaleGroup, 'Edm.String');
  /**
   * Static representation of the [[externalNameDefaultValue]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_NAME_DEFAULT_VALUE: StringField<PayScaleGroup> = new StringField('externalName_defaultValue', PayScaleGroup, 'Edm.String');
  /**
   * Static representation of the [[externalNameEnDebug]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_NAME_EN_DEBUG: StringField<PayScaleGroup> = new StringField('externalName_en_DEBUG', PayScaleGroup, 'Edm.String');
  /**
   * Static representation of the [[externalNameEnGb]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_NAME_EN_GB: StringField<PayScaleGroup> = new StringField('externalName_en_GB', PayScaleGroup, 'Edm.String');
  /**
   * Static representation of the [[externalNameEnUs]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_NAME_EN_US: StringField<PayScaleGroup> = new StringField('externalName_en_US', PayScaleGroup, 'Edm.String');
  /**
   * Static representation of the [[externalNameEsEs]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_NAME_ES_ES: StringField<PayScaleGroup> = new StringField('externalName_es_ES', PayScaleGroup, 'Edm.String');
  /**
   * Static representation of the [[externalNameEsMx]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_NAME_ES_MX: StringField<PayScaleGroup> = new StringField('externalName_es_MX', PayScaleGroup, 'Edm.String');
  /**
   * Static representation of the [[externalNameFrCa]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_NAME_FR_CA: StringField<PayScaleGroup> = new StringField('externalName_fr_CA', PayScaleGroup, 'Edm.String');
  /**
   * Static representation of the [[externalNameFrFr]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_NAME_FR_FR: StringField<PayScaleGroup> = new StringField('externalName_fr_FR', PayScaleGroup, 'Edm.String');
  /**
   * Static representation of the [[externalNameItIt]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_NAME_IT_IT: StringField<PayScaleGroup> = new StringField('externalName_it_IT', PayScaleGroup, 'Edm.String');
  /**
   * Static representation of the [[externalNameLocalized]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_NAME_LOCALIZED: StringField<PayScaleGroup> = new StringField('externalName_localized', PayScaleGroup, 'Edm.String');
  /**
   * Static representation of the [[externalNameNlNl]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_NAME_NL_NL: StringField<PayScaleGroup> = new StringField('externalName_nl_NL', PayScaleGroup, 'Edm.String');
  /**
   * Static representation of the [[externalNamePtBr]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_NAME_PT_BR: StringField<PayScaleGroup> = new StringField('externalName_pt_BR', PayScaleGroup, 'Edm.String');
  /**
   * Static representation of the [[externalNameZhCn]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_NAME_ZH_CN: StringField<PayScaleGroup> = new StringField('externalName_zh_CN', PayScaleGroup, 'Edm.String');
  /**
   * Static representation of the [[lastModifiedBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_BY: StringField<PayScaleGroup> = new StringField('lastModifiedBy', PayScaleGroup, 'Edm.String');
  /**
   * Static representation of the [[lastModifiedDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_DATE_TIME: DateField<PayScaleGroup> = new DateField('lastModifiedDateTime', PayScaleGroup, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_RECORD_STATUS: StringField<PayScaleGroup> = new StringField('mdfSystemRecordStatus', PayScaleGroup, 'Edm.String');
  /**
   * Static representation of the [[payScaleArea]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PAY_SCALE_AREA: StringField<PayScaleGroup> = new StringField('payScaleArea', PayScaleGroup, 'Edm.String');
  /**
   * Static representation of the [[payScaleGroup]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PAY_SCALE_GROUP: StringField<PayScaleGroup> = new StringField('payScaleGroup', PayScaleGroup, 'Edm.String');
  /**
   * Static representation of the [[payScaleType]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PAY_SCALE_TYPE: StringField<PayScaleGroup> = new StringField('payScaleType', PayScaleGroup, 'Edm.String');
  /**
   * Static representation of the one-to-many navigation property [[countryNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const COUNTRY_NAV: Link<PayScaleGroup, Country> = new Link('countryNav', PayScaleGroup, Country);
  /**
   * Static representation of the one-to-one navigation property [[createdByNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_BY_NAV: OneToOneLink<PayScaleGroup, User> = new OneToOneLink('createdByNav', PayScaleGroup, User);
  /**
   * Static representation of the one-to-many navigation property [[externalNameTranslationTextNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_NAME_TRANSLATION_TEXT_NAV: Link<PayScaleGroup, MdfLocalizedValue> = new Link('externalNameTranslationTextNav', PayScaleGroup, MdfLocalizedValue);
  /**
   * Static representation of the one-to-one navigation property [[lastModifiedByNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_BY_NAV: OneToOneLink<PayScaleGroup, User> = new OneToOneLink('lastModifiedByNav', PayScaleGroup, User);
  /**
   * Static representation of the one-to-one navigation property [[mdfSystemRecordStatusNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_RECORD_STATUS_NAV: OneToOneLink<PayScaleGroup, MdfEnumValue> = new OneToOneLink('mdfSystemRecordStatusNav', PayScaleGroup, MdfEnumValue);
  /**
   * Static representation of the one-to-one navigation property [[payScaleAreaNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PAY_SCALE_AREA_NAV: OneToOneLink<PayScaleGroup, PayScaleArea> = new OneToOneLink('payScaleAreaNav', PayScaleGroup, PayScaleArea);
  /**
   * Static representation of the one-to-one navigation property [[payScaleTypeNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PAY_SCALE_TYPE_NAV: OneToOneLink<PayScaleGroup, PayScaleType> = new OneToOneLink('payScaleTypeNav', PayScaleGroup, PayScaleType);
  /**
   * Static representation of the one-to-many navigation property [[wfRequestNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const WF_REQUEST_NAV: Link<PayScaleGroup, WfRequest> = new Link('wfRequestNav', PayScaleGroup, WfRequest);
  /**
   * All fields of the PayScaleGroup entity.
   */
  export const _allFields: Array<StringField<PayScaleGroup> | DateField<PayScaleGroup> | Link<PayScaleGroup, Country> | OneToOneLink<PayScaleGroup, User> | Link<PayScaleGroup, MdfLocalizedValue> | OneToOneLink<PayScaleGroup, MdfEnumValue> | OneToOneLink<PayScaleGroup, PayScaleArea> | OneToOneLink<PayScaleGroup, PayScaleType> | Link<PayScaleGroup, WfRequest>> = [
    PayScaleGroup.CODE,
    PayScaleGroup.COUNTRY,
    PayScaleGroup.CREATED_BY,
    PayScaleGroup.CREATED_DATE_TIME,
    PayScaleGroup.EXTERNAL_NAME_DE_DE,
    PayScaleGroup.EXTERNAL_NAME_DEFAULT_VALUE,
    PayScaleGroup.EXTERNAL_NAME_EN_DEBUG,
    PayScaleGroup.EXTERNAL_NAME_EN_GB,
    PayScaleGroup.EXTERNAL_NAME_EN_US,
    PayScaleGroup.EXTERNAL_NAME_ES_ES,
    PayScaleGroup.EXTERNAL_NAME_ES_MX,
    PayScaleGroup.EXTERNAL_NAME_FR_CA,
    PayScaleGroup.EXTERNAL_NAME_FR_FR,
    PayScaleGroup.EXTERNAL_NAME_IT_IT,
    PayScaleGroup.EXTERNAL_NAME_LOCALIZED,
    PayScaleGroup.EXTERNAL_NAME_NL_NL,
    PayScaleGroup.EXTERNAL_NAME_PT_BR,
    PayScaleGroup.EXTERNAL_NAME_ZH_CN,
    PayScaleGroup.LAST_MODIFIED_BY,
    PayScaleGroup.LAST_MODIFIED_DATE_TIME,
    PayScaleGroup.MDF_SYSTEM_RECORD_STATUS,
    PayScaleGroup.PAY_SCALE_AREA,
    PayScaleGroup.PAY_SCALE_GROUP,
    PayScaleGroup.PAY_SCALE_TYPE,
    PayScaleGroup.COUNTRY_NAV,
    PayScaleGroup.CREATED_BY_NAV,
    PayScaleGroup.EXTERNAL_NAME_TRANSLATION_TEXT_NAV,
    PayScaleGroup.LAST_MODIFIED_BY_NAV,
    PayScaleGroup.MDF_SYSTEM_RECORD_STATUS_NAV,
    PayScaleGroup.PAY_SCALE_AREA_NAV,
    PayScaleGroup.PAY_SCALE_TYPE_NAV,
    PayScaleGroup.WF_REQUEST_NAV
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<PayScaleGroup> = new AllFields('*', PayScaleGroup);
  /**
   * All key fields of the PayScaleGroup entity.
   */
  export const _keyFields: Array<Selectable<PayScaleGroup>> = [PayScaleGroup.CODE];
  /**
   * Mapping of all key field names to the respective static field property PayScaleGroup.
   */
  export const _keys: { [keys: string]: Selectable<PayScaleGroup> } = PayScaleGroup._keyFields.reduce((acc: { [keys: string]: Selectable<PayScaleGroup> }, field: Selectable<PayScaleGroup>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}

/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { VendorInfoRequestBuilder } from './VendorInfoRequestBuilder';
import { Moment } from 'moment';
import { AllFields, CustomField, DateField, Entity, EntityBuilderType, Link, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "VendorInfo" of service "SFOData".
 */
export class VendorInfo extends Entity implements VendorInfoType {
  /**
   * Technical entity name for VendorInfo.
   */
  static _entityName = 'VendorInfo';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for VendorInfo.
   */
  static _serviceName = 'SFOData';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = 'VALUE_IS_UNDEFINED';
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
   * description.
   * Maximum length: 128.
   * @nullable
   */
  descriptionDeDe?: string;
  /**
   * description.
   * Maximum length: 128.
   * @nullable
   */
  descriptionDefaultValue?: string;
  /**
   * description.
   * Maximum length: 128.
   * @nullable
   */
  descriptionEnDebug?: string;
  /**
   * description.
   * Maximum length: 128.
   * @nullable
   */
  descriptionEnGb?: string;
  /**
   * description.
   * Maximum length: 128.
   * @nullable
   */
  descriptionEnUs?: string;
  /**
   * description.
   * Maximum length: 128.
   * @nullable
   */
  descriptionEsEs?: string;
  /**
   * description.
   * Maximum length: 128.
   * @nullable
   */
  descriptionEsMx?: string;
  /**
   * description.
   * Maximum length: 128.
   * @nullable
   */
  descriptionFrCa?: string;
  /**
   * description.
   * Maximum length: 128.
   * @nullable
   */
  descriptionFrFr?: string;
  /**
   * description.
   * Maximum length: 128.
   * @nullable
   */
  descriptionItIt?: string;
  /**
   * description.
   * Maximum length: 128.
   * @nullable
   */
  descriptionLocalized?: string;
  /**
   * description.
   * Maximum length: 128.
   * @nullable
   */
  descriptionNlNl?: string;
  /**
   * description.
   * Maximum length: 128.
   * @nullable
   */
  descriptionPtBr?: string;
  /**
   * description.
   * Maximum length: 128.
   * @nullable
   */
  descriptionZhCn?: string;
  /**
   * effectiveStartDate.
   */
  effectiveStartDate!: Moment;
  /**
   * effectiveStatus.
   * Maximum length: 255.
   * @nullable
   */
  effectiveStatus?: string;
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
   * Effective End Date.
   * @nullable
   */
  mdfSystemEffectiveEndDate?: Moment;
  /**
   * Record Status.
   * Maximum length: 255.
   * @nullable
   */
  mdfSystemRecordStatus?: string;
  /**
   * vendorCode.
   * Maximum length: 128.
   */
  vendorCode!: string;
  /**
   * vendorName.
   * Maximum length: 128.
   * @nullable
   */
  vendorName?: string;
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
   * One-to-many navigation property to the [[WfRequest]] entity.
   */
  wfRequestNav!: WfRequest[];

  /**
   * Returns an entity builder to construct instances `VendorInfo`.
   * @returns A builder that constructs instances of entity type `VendorInfo`.
   */
  static builder(): EntityBuilderType<VendorInfo, VendorInfoTypeForceMandatory> {
    return Entity.entityBuilder(VendorInfo);
  }

  /**
   * Returns a request builder to construct requests for operations on the `VendorInfo` entity type.
   * @returns A `VendorInfo` request builder.
   */
  static requestBuilder(): VendorInfoRequestBuilder {
    return new VendorInfoRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `VendorInfo`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `VendorInfo`.
   */
  static customField(fieldName: string): CustomField<VendorInfo> {
    return Entity.customFieldSelector(fieldName, VendorInfo);
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
import { WfRequest, WfRequestType } from './WfRequest';

export interface VendorInfoType {
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
  effectiveStartDate: Moment;
  effectiveStatus?: string;
  lastModifiedBy?: string;
  lastModifiedDateTime?: Moment;
  mdfSystemEffectiveEndDate?: Moment;
  mdfSystemRecordStatus?: string;
  vendorCode: string;
  vendorName?: string;
  createdByNav: UserType;
  descriptionTranslationTextNav: MdfLocalizedValueType[];
  effectiveStatusNav: MdfEnumValueType;
  lastModifiedByNav: UserType;
  mdfSystemRecordStatusNav: MdfEnumValueType;
  wfRequestNav: WfRequestType[];
}

export interface VendorInfoTypeForceMandatory {
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
  effectiveStartDate: Moment;
  effectiveStatus: string;
  lastModifiedBy: string;
  lastModifiedDateTime: Moment;
  mdfSystemEffectiveEndDate: Moment;
  mdfSystemRecordStatus: string;
  vendorCode: string;
  vendorName: string;
  createdByNav: UserType;
  descriptionTranslationTextNav: MdfLocalizedValueType[];
  effectiveStatusNav: MdfEnumValueType;
  lastModifiedByNav: UserType;
  mdfSystemRecordStatusNav: MdfEnumValueType;
  wfRequestNav: WfRequestType[];
}

export namespace VendorInfo {
  /**
   * Static representation of the [[createdBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_BY: StringField<VendorInfo> = new StringField('createdBy', VendorInfo, 'Edm.String');
  /**
   * Static representation of the [[createdDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_DATE_TIME: DateField<VendorInfo> = new DateField('createdDateTime', VendorInfo, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[descriptionDeDe]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DESCRIPTION_DE_DE: StringField<VendorInfo> = new StringField('description_de_DE', VendorInfo, 'Edm.String');
  /**
   * Static representation of the [[descriptionDefaultValue]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DESCRIPTION_DEFAULT_VALUE: StringField<VendorInfo> = new StringField('description_defaultValue', VendorInfo, 'Edm.String');
  /**
   * Static representation of the [[descriptionEnDebug]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DESCRIPTION_EN_DEBUG: StringField<VendorInfo> = new StringField('description_en_DEBUG', VendorInfo, 'Edm.String');
  /**
   * Static representation of the [[descriptionEnGb]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DESCRIPTION_EN_GB: StringField<VendorInfo> = new StringField('description_en_GB', VendorInfo, 'Edm.String');
  /**
   * Static representation of the [[descriptionEnUs]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DESCRIPTION_EN_US: StringField<VendorInfo> = new StringField('description_en_US', VendorInfo, 'Edm.String');
  /**
   * Static representation of the [[descriptionEsEs]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DESCRIPTION_ES_ES: StringField<VendorInfo> = new StringField('description_es_ES', VendorInfo, 'Edm.String');
  /**
   * Static representation of the [[descriptionEsMx]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DESCRIPTION_ES_MX: StringField<VendorInfo> = new StringField('description_es_MX', VendorInfo, 'Edm.String');
  /**
   * Static representation of the [[descriptionFrCa]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DESCRIPTION_FR_CA: StringField<VendorInfo> = new StringField('description_fr_CA', VendorInfo, 'Edm.String');
  /**
   * Static representation of the [[descriptionFrFr]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DESCRIPTION_FR_FR: StringField<VendorInfo> = new StringField('description_fr_FR', VendorInfo, 'Edm.String');
  /**
   * Static representation of the [[descriptionItIt]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DESCRIPTION_IT_IT: StringField<VendorInfo> = new StringField('description_it_IT', VendorInfo, 'Edm.String');
  /**
   * Static representation of the [[descriptionLocalized]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DESCRIPTION_LOCALIZED: StringField<VendorInfo> = new StringField('description_localized', VendorInfo, 'Edm.String');
  /**
   * Static representation of the [[descriptionNlNl]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DESCRIPTION_NL_NL: StringField<VendorInfo> = new StringField('description_nl_NL', VendorInfo, 'Edm.String');
  /**
   * Static representation of the [[descriptionPtBr]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DESCRIPTION_PT_BR: StringField<VendorInfo> = new StringField('description_pt_BR', VendorInfo, 'Edm.String');
  /**
   * Static representation of the [[descriptionZhCn]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DESCRIPTION_ZH_CN: StringField<VendorInfo> = new StringField('description_zh_CN', VendorInfo, 'Edm.String');
  /**
   * Static representation of the [[effectiveStartDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EFFECTIVE_START_DATE: DateField<VendorInfo> = new DateField('effectiveStartDate', VendorInfo, 'Edm.DateTime');
  /**
   * Static representation of the [[effectiveStatus]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EFFECTIVE_STATUS: StringField<VendorInfo> = new StringField('effectiveStatus', VendorInfo, 'Edm.String');
  /**
   * Static representation of the [[lastModifiedBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_BY: StringField<VendorInfo> = new StringField('lastModifiedBy', VendorInfo, 'Edm.String');
  /**
   * Static representation of the [[lastModifiedDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_DATE_TIME: DateField<VendorInfo> = new DateField('lastModifiedDateTime', VendorInfo, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[mdfSystemEffectiveEndDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_EFFECTIVE_END_DATE: DateField<VendorInfo> = new DateField('mdfSystemEffectiveEndDate', VendorInfo, 'Edm.DateTime');
  /**
   * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_RECORD_STATUS: StringField<VendorInfo> = new StringField('mdfSystemRecordStatus', VendorInfo, 'Edm.String');
  /**
   * Static representation of the [[vendorCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const VENDOR_CODE: StringField<VendorInfo> = new StringField('vendorCode', VendorInfo, 'Edm.String');
  /**
   * Static representation of the [[vendorName]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const VENDOR_NAME: StringField<VendorInfo> = new StringField('vendorName', VendorInfo, 'Edm.String');
  /**
   * Static representation of the one-to-one navigation property [[createdByNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_BY_NAV: OneToOneLink<VendorInfo, User> = new OneToOneLink('createdByNav', VendorInfo, User);
  /**
   * Static representation of the one-to-many navigation property [[descriptionTranslationTextNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DESCRIPTION_TRANSLATION_TEXT_NAV: Link<VendorInfo, MdfLocalizedValue> = new Link('descriptionTranslationTextNav', VendorInfo, MdfLocalizedValue);
  /**
   * Static representation of the one-to-one navigation property [[effectiveStatusNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EFFECTIVE_STATUS_NAV: OneToOneLink<VendorInfo, MdfEnumValue> = new OneToOneLink('effectiveStatusNav', VendorInfo, MdfEnumValue);
  /**
   * Static representation of the one-to-one navigation property [[lastModifiedByNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_BY_NAV: OneToOneLink<VendorInfo, User> = new OneToOneLink('lastModifiedByNav', VendorInfo, User);
  /**
   * Static representation of the one-to-one navigation property [[mdfSystemRecordStatusNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_RECORD_STATUS_NAV: OneToOneLink<VendorInfo, MdfEnumValue> = new OneToOneLink('mdfSystemRecordStatusNav', VendorInfo, MdfEnumValue);
  /**
   * Static representation of the one-to-many navigation property [[wfRequestNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const WF_REQUEST_NAV: Link<VendorInfo, WfRequest> = new Link('wfRequestNav', VendorInfo, WfRequest);
  /**
   * All fields of the VendorInfo entity.
   */
  export const _allFields: Array<StringField<VendorInfo> | DateField<VendorInfo> | OneToOneLink<VendorInfo, User> | Link<VendorInfo, MdfLocalizedValue> | OneToOneLink<VendorInfo, MdfEnumValue> | Link<VendorInfo, WfRequest>> = [
    VendorInfo.CREATED_BY,
    VendorInfo.CREATED_DATE_TIME,
    VendorInfo.DESCRIPTION_DE_DE,
    VendorInfo.DESCRIPTION_DEFAULT_VALUE,
    VendorInfo.DESCRIPTION_EN_DEBUG,
    VendorInfo.DESCRIPTION_EN_GB,
    VendorInfo.DESCRIPTION_EN_US,
    VendorInfo.DESCRIPTION_ES_ES,
    VendorInfo.DESCRIPTION_ES_MX,
    VendorInfo.DESCRIPTION_FR_CA,
    VendorInfo.DESCRIPTION_FR_FR,
    VendorInfo.DESCRIPTION_IT_IT,
    VendorInfo.DESCRIPTION_LOCALIZED,
    VendorInfo.DESCRIPTION_NL_NL,
    VendorInfo.DESCRIPTION_PT_BR,
    VendorInfo.DESCRIPTION_ZH_CN,
    VendorInfo.EFFECTIVE_START_DATE,
    VendorInfo.EFFECTIVE_STATUS,
    VendorInfo.LAST_MODIFIED_BY,
    VendorInfo.LAST_MODIFIED_DATE_TIME,
    VendorInfo.MDF_SYSTEM_EFFECTIVE_END_DATE,
    VendorInfo.MDF_SYSTEM_RECORD_STATUS,
    VendorInfo.VENDOR_CODE,
    VendorInfo.VENDOR_NAME,
    VendorInfo.CREATED_BY_NAV,
    VendorInfo.DESCRIPTION_TRANSLATION_TEXT_NAV,
    VendorInfo.EFFECTIVE_STATUS_NAV,
    VendorInfo.LAST_MODIFIED_BY_NAV,
    VendorInfo.MDF_SYSTEM_RECORD_STATUS_NAV,
    VendorInfo.WF_REQUEST_NAV
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<VendorInfo> = new AllFields('*', VendorInfo);
  /**
   * All key fields of the VendorInfo entity.
   */
  export const _keyFields: Array<Selectable<VendorInfo>> = [VendorInfo.EFFECTIVE_START_DATE, VendorInfo.VENDOR_CODE];
  /**
   * Mapping of all key field names to the respective static field property VendorInfo.
   */
  export const _keys: { [keys: string]: Selectable<VendorInfo> } = VendorInfo._keyFields.reduce((acc: { [keys: string]: Selectable<VendorInfo> }, field: Selectable<VendorInfo>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}

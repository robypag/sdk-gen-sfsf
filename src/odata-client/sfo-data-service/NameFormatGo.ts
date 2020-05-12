/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { NameFormatGoRequestBuilder } from './NameFormatGoRequestBuilder';
import { Moment } from 'moment';
import { AllFields, CustomField, DateField, Entity, EntityBuilderType, Link, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "NameFormatGO" of service "SFOData".
 */
export class NameFormatGo extends Entity implements NameFormatGoType {
  /**
   * Technical entity name for NameFormatGo.
   */
  static _entityName = 'NameFormatGO';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for NameFormatGo.
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
   * Name Format Code.
   * Maximum length: 128.
   */
  externalCode!: string;
  /**
   * Name Format Description.
   * Maximum length: 128.
   * @nullable
   */
  externalNameDeDe?: string;
  /**
   * Name Format Description.
   * Maximum length: 128.
   * @nullable
   */
  externalNameDefaultValue?: string;
  /**
   * Name Format Description.
   * Maximum length: 128.
   * @nullable
   */
  externalNameEnDebug?: string;
  /**
   * Name Format Description.
   * Maximum length: 128.
   * @nullable
   */
  externalNameEnGb?: string;
  /**
   * Name Format Description.
   * Maximum length: 128.
   * @nullable
   */
  externalNameEnUs?: string;
  /**
   * Name Format Description.
   * Maximum length: 128.
   * @nullable
   */
  externalNameEsEs?: string;
  /**
   * Name Format Description.
   * Maximum length: 128.
   * @nullable
   */
  externalNameEsMx?: string;
  /**
   * Name Format Description.
   * Maximum length: 128.
   * @nullable
   */
  externalNameFrCa?: string;
  /**
   * Name Format Description.
   * Maximum length: 128.
   * @nullable
   */
  externalNameFrFr?: string;
  /**
   * Name Format Description.
   * Maximum length: 128.
   * @nullable
   */
  externalNameItIt?: string;
  /**
   * Name Format Description.
   * Maximum length: 128.
   * @nullable
   */
  externalNameLocalized?: string;
  /**
   * Name Format Description.
   * Maximum length: 128.
   * @nullable
   */
  externalNameNlNl?: string;
  /**
   * Name Format Description.
   * Maximum length: 128.
   * @nullable
   */
  externalNamePtBr?: string;
  /**
   * Name Format Description.
   * Maximum length: 128.
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
   * Preview.
   * Maximum length: 255.
   * @nullable
   */
  sample?: string;
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
   * One-to-many navigation property to the [[NameElementGo]] entity.
   */
  nameElements!: NameElementGo[];
  /**
   * One-to-many navigation property to the [[WfRequest]] entity.
   */
  wfRequestNav!: WfRequest[];

  /**
   * Returns an entity builder to construct instances `NameFormatGo`.
   * @returns A builder that constructs instances of entity type `NameFormatGo`.
   */
  static builder(): EntityBuilderType<NameFormatGo, NameFormatGoTypeForceMandatory> {
    return Entity.entityBuilder(NameFormatGo);
  }

  /**
   * Returns a request builder to construct requests for operations on the `NameFormatGo` entity type.
   * @returns A `NameFormatGo` request builder.
   */
  static requestBuilder(): NameFormatGoRequestBuilder {
    return new NameFormatGoRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `NameFormatGo`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `NameFormatGo`.
   */
  static customField(fieldName: string): CustomField<NameFormatGo> {
    return Entity.customFieldSelector(fieldName, NameFormatGo);
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
import { NameElementGo, NameElementGoType } from './NameElementGo';
import { WfRequest, WfRequestType } from './WfRequest';

export interface NameFormatGoType {
  createdBy?: string;
  createdDateTime?: Moment;
  externalCode: string;
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
  sample?: string;
  createdByNav: UserType;
  externalNameTranslationTextNav: MdfLocalizedValueType[];
  lastModifiedByNav: UserType;
  mdfSystemRecordStatusNav: MdfEnumValueType;
  nameElements: NameElementGoType[];
  wfRequestNav: WfRequestType[];
}

export interface NameFormatGoTypeForceMandatory {
  createdBy: string;
  createdDateTime: Moment;
  externalCode: string;
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
  sample: string;
  createdByNav: UserType;
  externalNameTranslationTextNav: MdfLocalizedValueType[];
  lastModifiedByNav: UserType;
  mdfSystemRecordStatusNav: MdfEnumValueType;
  nameElements: NameElementGoType[];
  wfRequestNav: WfRequestType[];
}

export namespace NameFormatGo {
  /**
   * Static representation of the [[createdBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_BY: StringField<NameFormatGo> = new StringField('createdBy', NameFormatGo, 'Edm.String');
  /**
   * Static representation of the [[createdDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_DATE_TIME: DateField<NameFormatGo> = new DateField('createdDateTime', NameFormatGo, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[externalCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_CODE: StringField<NameFormatGo> = new StringField('externalCode', NameFormatGo, 'Edm.String');
  /**
   * Static representation of the [[externalNameDeDe]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_NAME_DE_DE: StringField<NameFormatGo> = new StringField('externalName_de_DE', NameFormatGo, 'Edm.String');
  /**
   * Static representation of the [[externalNameDefaultValue]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_NAME_DEFAULT_VALUE: StringField<NameFormatGo> = new StringField('externalName_defaultValue', NameFormatGo, 'Edm.String');
  /**
   * Static representation of the [[externalNameEnDebug]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_NAME_EN_DEBUG: StringField<NameFormatGo> = new StringField('externalName_en_DEBUG', NameFormatGo, 'Edm.String');
  /**
   * Static representation of the [[externalNameEnGb]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_NAME_EN_GB: StringField<NameFormatGo> = new StringField('externalName_en_GB', NameFormatGo, 'Edm.String');
  /**
   * Static representation of the [[externalNameEnUs]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_NAME_EN_US: StringField<NameFormatGo> = new StringField('externalName_en_US', NameFormatGo, 'Edm.String');
  /**
   * Static representation of the [[externalNameEsEs]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_NAME_ES_ES: StringField<NameFormatGo> = new StringField('externalName_es_ES', NameFormatGo, 'Edm.String');
  /**
   * Static representation of the [[externalNameEsMx]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_NAME_ES_MX: StringField<NameFormatGo> = new StringField('externalName_es_MX', NameFormatGo, 'Edm.String');
  /**
   * Static representation of the [[externalNameFrCa]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_NAME_FR_CA: StringField<NameFormatGo> = new StringField('externalName_fr_CA', NameFormatGo, 'Edm.String');
  /**
   * Static representation of the [[externalNameFrFr]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_NAME_FR_FR: StringField<NameFormatGo> = new StringField('externalName_fr_FR', NameFormatGo, 'Edm.String');
  /**
   * Static representation of the [[externalNameItIt]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_NAME_IT_IT: StringField<NameFormatGo> = new StringField('externalName_it_IT', NameFormatGo, 'Edm.String');
  /**
   * Static representation of the [[externalNameLocalized]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_NAME_LOCALIZED: StringField<NameFormatGo> = new StringField('externalName_localized', NameFormatGo, 'Edm.String');
  /**
   * Static representation of the [[externalNameNlNl]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_NAME_NL_NL: StringField<NameFormatGo> = new StringField('externalName_nl_NL', NameFormatGo, 'Edm.String');
  /**
   * Static representation of the [[externalNamePtBr]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_NAME_PT_BR: StringField<NameFormatGo> = new StringField('externalName_pt_BR', NameFormatGo, 'Edm.String');
  /**
   * Static representation of the [[externalNameZhCn]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_NAME_ZH_CN: StringField<NameFormatGo> = new StringField('externalName_zh_CN', NameFormatGo, 'Edm.String');
  /**
   * Static representation of the [[lastModifiedBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_BY: StringField<NameFormatGo> = new StringField('lastModifiedBy', NameFormatGo, 'Edm.String');
  /**
   * Static representation of the [[lastModifiedDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_DATE_TIME: DateField<NameFormatGo> = new DateField('lastModifiedDateTime', NameFormatGo, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_RECORD_STATUS: StringField<NameFormatGo> = new StringField('mdfSystemRecordStatus', NameFormatGo, 'Edm.String');
  /**
   * Static representation of the [[sample]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SAMPLE: StringField<NameFormatGo> = new StringField('sample', NameFormatGo, 'Edm.String');
  /**
   * Static representation of the one-to-one navigation property [[createdByNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_BY_NAV: OneToOneLink<NameFormatGo, User> = new OneToOneLink('createdByNav', NameFormatGo, User);
  /**
   * Static representation of the one-to-many navigation property [[externalNameTranslationTextNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_NAME_TRANSLATION_TEXT_NAV: Link<NameFormatGo, MdfLocalizedValue> = new Link('externalNameTranslationTextNav', NameFormatGo, MdfLocalizedValue);
  /**
   * Static representation of the one-to-one navigation property [[lastModifiedByNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_BY_NAV: OneToOneLink<NameFormatGo, User> = new OneToOneLink('lastModifiedByNav', NameFormatGo, User);
  /**
   * Static representation of the one-to-one navigation property [[mdfSystemRecordStatusNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_RECORD_STATUS_NAV: OneToOneLink<NameFormatGo, MdfEnumValue> = new OneToOneLink('mdfSystemRecordStatusNav', NameFormatGo, MdfEnumValue);
  /**
   * Static representation of the one-to-many navigation property [[nameElements]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NAME_ELEMENTS: Link<NameFormatGo, NameElementGo> = new Link('nameElements', NameFormatGo, NameElementGo);
  /**
   * Static representation of the one-to-many navigation property [[wfRequestNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const WF_REQUEST_NAV: Link<NameFormatGo, WfRequest> = new Link('wfRequestNav', NameFormatGo, WfRequest);
  /**
   * All fields of the NameFormatGo entity.
   */
  export const _allFields: Array<StringField<NameFormatGo> | DateField<NameFormatGo> | OneToOneLink<NameFormatGo, User> | Link<NameFormatGo, MdfLocalizedValue> | OneToOneLink<NameFormatGo, MdfEnumValue> | Link<NameFormatGo, NameElementGo> | Link<NameFormatGo, WfRequest>> = [
    NameFormatGo.CREATED_BY,
    NameFormatGo.CREATED_DATE_TIME,
    NameFormatGo.EXTERNAL_CODE,
    NameFormatGo.EXTERNAL_NAME_DE_DE,
    NameFormatGo.EXTERNAL_NAME_DEFAULT_VALUE,
    NameFormatGo.EXTERNAL_NAME_EN_DEBUG,
    NameFormatGo.EXTERNAL_NAME_EN_GB,
    NameFormatGo.EXTERNAL_NAME_EN_US,
    NameFormatGo.EXTERNAL_NAME_ES_ES,
    NameFormatGo.EXTERNAL_NAME_ES_MX,
    NameFormatGo.EXTERNAL_NAME_FR_CA,
    NameFormatGo.EXTERNAL_NAME_FR_FR,
    NameFormatGo.EXTERNAL_NAME_IT_IT,
    NameFormatGo.EXTERNAL_NAME_LOCALIZED,
    NameFormatGo.EXTERNAL_NAME_NL_NL,
    NameFormatGo.EXTERNAL_NAME_PT_BR,
    NameFormatGo.EXTERNAL_NAME_ZH_CN,
    NameFormatGo.LAST_MODIFIED_BY,
    NameFormatGo.LAST_MODIFIED_DATE_TIME,
    NameFormatGo.MDF_SYSTEM_RECORD_STATUS,
    NameFormatGo.SAMPLE,
    NameFormatGo.CREATED_BY_NAV,
    NameFormatGo.EXTERNAL_NAME_TRANSLATION_TEXT_NAV,
    NameFormatGo.LAST_MODIFIED_BY_NAV,
    NameFormatGo.MDF_SYSTEM_RECORD_STATUS_NAV,
    NameFormatGo.NAME_ELEMENTS,
    NameFormatGo.WF_REQUEST_NAV
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<NameFormatGo> = new AllFields('*', NameFormatGo);
  /**
   * All key fields of the NameFormatGo entity.
   */
  export const _keyFields: Array<Selectable<NameFormatGo>> = [NameFormatGo.EXTERNAL_CODE];
  /**
   * Mapping of all key field names to the respective static field property NameFormatGo.
   */
  export const _keys: { [keys: string]: Selectable<NameFormatGo> } = NameFormatGo._keyFields.reduce((acc: { [keys: string]: Selectable<NameFormatGo> }, field: Selectable<NameFormatGo>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}

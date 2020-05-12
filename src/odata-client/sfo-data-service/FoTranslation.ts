/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { FoTranslationRequestBuilder } from './FoTranslationRequestBuilder';
import { Moment } from 'moment';
import { AllFields, CustomField, DateField, Entity, EntityBuilderType, Link, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "FoTranslation" of service "SFOData".
 */
export class FoTranslation extends Entity implements FoTranslationType {
  /**
   * Technical entity name for FoTranslation.
   */
  static _entityName = 'FoTranslation';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for FoTranslation.
   */
  static _serviceName = 'SFOData';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = 'VALUE_IS_UNDEFINED';
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
   * externalCode.
   * Maximum length: 128.
   */
  externalCode!: string;
  /**
   * foField.
   * Maximum length: 255.
   * @nullable
   */
  foField?: string;
  /**
   * foObjectID.
   * Maximum length: 128.
   * @nullable
   */
  foObjectId?: string;
  /**
   * foType.
   * Maximum length: 255.
   * @nullable
   */
  foType?: string;
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
   * value.
   * Maximum length: 255.
   * @nullable
   */
  valueDeDe?: string;
  /**
   * value.
   * Maximum length: 255.
   * @nullable
   */
  valueDefaultValue?: string;
  /**
   * value.
   * Maximum length: 255.
   * @nullable
   */
  valueEnDebug?: string;
  /**
   * value.
   * Maximum length: 255.
   * @nullable
   */
  valueEnGb?: string;
  /**
   * value.
   * Maximum length: 255.
   * @nullable
   */
  valueEnUs?: string;
  /**
   * value.
   * Maximum length: 255.
   * @nullable
   */
  valueEsEs?: string;
  /**
   * value.
   * Maximum length: 255.
   * @nullable
   */
  valueEsMx?: string;
  /**
   * value.
   * Maximum length: 255.
   * @nullable
   */
  valueFrCa?: string;
  /**
   * value.
   * Maximum length: 255.
   * @nullable
   */
  valueFrFr?: string;
  /**
   * value.
   * Maximum length: 255.
   * @nullable
   */
  valueItIt?: string;
  /**
   * value.
   * Maximum length: 255.
   * @nullable
   */
  valueLocalized?: string;
  /**
   * value.
   * Maximum length: 255.
   * @nullable
   */
  valueNlNl?: string;
  /**
   * value.
   * Maximum length: 255.
   * @nullable
   */
  valuePtBr?: string;
  /**
   * value.
   * Maximum length: 255.
   * @nullable
   */
  valueZhCn?: string;
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
   * One-to-many navigation property to the [[MdfLocalizedValue]] entity.
   */
  valueTranslationTextNav!: MdfLocalizedValue[];
  /**
   * One-to-many navigation property to the [[WfRequest]] entity.
   */
  wfRequestNav!: WfRequest[];

  /**
   * Returns an entity builder to construct instances `FoTranslation`.
   * @returns A builder that constructs instances of entity type `FoTranslation`.
   */
  static builder(): EntityBuilderType<FoTranslation, FoTranslationTypeForceMandatory> {
    return Entity.entityBuilder(FoTranslation);
  }

  /**
   * Returns a request builder to construct requests for operations on the `FoTranslation` entity type.
   * @returns A `FoTranslation` request builder.
   */
  static requestBuilder(): FoTranslationRequestBuilder {
    return new FoTranslationRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `FoTranslation`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `FoTranslation`.
   */
  static customField(fieldName: string): CustomField<FoTranslation> {
    return Entity.customFieldSelector(fieldName, FoTranslation);
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
import { MdfLocalizedValue, MdfLocalizedValueType } from './MdfLocalizedValue';
import { WfRequest, WfRequestType } from './WfRequest';

export interface FoTranslationType {
  createdBy?: string;
  createdDateTime?: Moment;
  externalCode: string;
  foField?: string;
  foObjectId?: string;
  foType?: string;
  lastModifiedBy?: string;
  lastModifiedDateTime?: Moment;
  mdfSystemRecordStatus?: string;
  valueDeDe?: string;
  valueDefaultValue?: string;
  valueEnDebug?: string;
  valueEnGb?: string;
  valueEnUs?: string;
  valueEsEs?: string;
  valueEsMx?: string;
  valueFrCa?: string;
  valueFrFr?: string;
  valueItIt?: string;
  valueLocalized?: string;
  valueNlNl?: string;
  valuePtBr?: string;
  valueZhCn?: string;
  createdByNav: UserType;
  lastModifiedByNav: UserType;
  mdfSystemRecordStatusNav: MdfEnumValueType;
  valueTranslationTextNav: MdfLocalizedValueType[];
  wfRequestNav: WfRequestType[];
}

export interface FoTranslationTypeForceMandatory {
  createdBy: string;
  createdDateTime: Moment;
  externalCode: string;
  foField: string;
  foObjectId: string;
  foType: string;
  lastModifiedBy: string;
  lastModifiedDateTime: Moment;
  mdfSystemRecordStatus: string;
  valueDeDe: string;
  valueDefaultValue: string;
  valueEnDebug: string;
  valueEnGb: string;
  valueEnUs: string;
  valueEsEs: string;
  valueEsMx: string;
  valueFrCa: string;
  valueFrFr: string;
  valueItIt: string;
  valueLocalized: string;
  valueNlNl: string;
  valuePtBr: string;
  valueZhCn: string;
  createdByNav: UserType;
  lastModifiedByNav: UserType;
  mdfSystemRecordStatusNav: MdfEnumValueType;
  valueTranslationTextNav: MdfLocalizedValueType[];
  wfRequestNav: WfRequestType[];
}

export namespace FoTranslation {
  /**
   * Static representation of the [[createdBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_BY: StringField<FoTranslation> = new StringField('createdBy', FoTranslation, 'Edm.String');
  /**
   * Static representation of the [[createdDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_DATE_TIME: DateField<FoTranslation> = new DateField('createdDateTime', FoTranslation, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[externalCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_CODE: StringField<FoTranslation> = new StringField('externalCode', FoTranslation, 'Edm.String');
  /**
   * Static representation of the [[foField]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FO_FIELD: StringField<FoTranslation> = new StringField('foField', FoTranslation, 'Edm.String');
  /**
   * Static representation of the [[foObjectId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FO_OBJECT_ID: StringField<FoTranslation> = new StringField('foObjectID', FoTranslation, 'Edm.String');
  /**
   * Static representation of the [[foType]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FO_TYPE: StringField<FoTranslation> = new StringField('foType', FoTranslation, 'Edm.String');
  /**
   * Static representation of the [[lastModifiedBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_BY: StringField<FoTranslation> = new StringField('lastModifiedBy', FoTranslation, 'Edm.String');
  /**
   * Static representation of the [[lastModifiedDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_DATE_TIME: DateField<FoTranslation> = new DateField('lastModifiedDateTime', FoTranslation, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_RECORD_STATUS: StringField<FoTranslation> = new StringField('mdfSystemRecordStatus', FoTranslation, 'Edm.String');
  /**
   * Static representation of the [[valueDeDe]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const VALUE_DE_DE: StringField<FoTranslation> = new StringField('value_de_DE', FoTranslation, 'Edm.String');
  /**
   * Static representation of the [[valueDefaultValue]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const VALUE_DEFAULT_VALUE: StringField<FoTranslation> = new StringField('value_defaultValue', FoTranslation, 'Edm.String');
  /**
   * Static representation of the [[valueEnDebug]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const VALUE_EN_DEBUG: StringField<FoTranslation> = new StringField('value_en_DEBUG', FoTranslation, 'Edm.String');
  /**
   * Static representation of the [[valueEnGb]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const VALUE_EN_GB: StringField<FoTranslation> = new StringField('value_en_GB', FoTranslation, 'Edm.String');
  /**
   * Static representation of the [[valueEnUs]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const VALUE_EN_US: StringField<FoTranslation> = new StringField('value_en_US', FoTranslation, 'Edm.String');
  /**
   * Static representation of the [[valueEsEs]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const VALUE_ES_ES: StringField<FoTranslation> = new StringField('value_es_ES', FoTranslation, 'Edm.String');
  /**
   * Static representation of the [[valueEsMx]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const VALUE_ES_MX: StringField<FoTranslation> = new StringField('value_es_MX', FoTranslation, 'Edm.String');
  /**
   * Static representation of the [[valueFrCa]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const VALUE_FR_CA: StringField<FoTranslation> = new StringField('value_fr_CA', FoTranslation, 'Edm.String');
  /**
   * Static representation of the [[valueFrFr]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const VALUE_FR_FR: StringField<FoTranslation> = new StringField('value_fr_FR', FoTranslation, 'Edm.String');
  /**
   * Static representation of the [[valueItIt]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const VALUE_IT_IT: StringField<FoTranslation> = new StringField('value_it_IT', FoTranslation, 'Edm.String');
  /**
   * Static representation of the [[valueLocalized]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const VALUE_LOCALIZED: StringField<FoTranslation> = new StringField('value_localized', FoTranslation, 'Edm.String');
  /**
   * Static representation of the [[valueNlNl]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const VALUE_NL_NL: StringField<FoTranslation> = new StringField('value_nl_NL', FoTranslation, 'Edm.String');
  /**
   * Static representation of the [[valuePtBr]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const VALUE_PT_BR: StringField<FoTranslation> = new StringField('value_pt_BR', FoTranslation, 'Edm.String');
  /**
   * Static representation of the [[valueZhCn]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const VALUE_ZH_CN: StringField<FoTranslation> = new StringField('value_zh_CN', FoTranslation, 'Edm.String');
  /**
   * Static representation of the one-to-one navigation property [[createdByNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_BY_NAV: OneToOneLink<FoTranslation, User> = new OneToOneLink('createdByNav', FoTranslation, User);
  /**
   * Static representation of the one-to-one navigation property [[lastModifiedByNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_BY_NAV: OneToOneLink<FoTranslation, User> = new OneToOneLink('lastModifiedByNav', FoTranslation, User);
  /**
   * Static representation of the one-to-one navigation property [[mdfSystemRecordStatusNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_RECORD_STATUS_NAV: OneToOneLink<FoTranslation, MdfEnumValue> = new OneToOneLink('mdfSystemRecordStatusNav', FoTranslation, MdfEnumValue);
  /**
   * Static representation of the one-to-many navigation property [[valueTranslationTextNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const VALUE_TRANSLATION_TEXT_NAV: Link<FoTranslation, MdfLocalizedValue> = new Link('valueTranslationTextNav', FoTranslation, MdfLocalizedValue);
  /**
   * Static representation of the one-to-many navigation property [[wfRequestNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const WF_REQUEST_NAV: Link<FoTranslation, WfRequest> = new Link('wfRequestNav', FoTranslation, WfRequest);
  /**
   * All fields of the FoTranslation entity.
   */
  export const _allFields: Array<StringField<FoTranslation> | DateField<FoTranslation> | OneToOneLink<FoTranslation, User> | OneToOneLink<FoTranslation, MdfEnumValue> | Link<FoTranslation, MdfLocalizedValue> | Link<FoTranslation, WfRequest>> = [
    FoTranslation.CREATED_BY,
    FoTranslation.CREATED_DATE_TIME,
    FoTranslation.EXTERNAL_CODE,
    FoTranslation.FO_FIELD,
    FoTranslation.FO_OBJECT_ID,
    FoTranslation.FO_TYPE,
    FoTranslation.LAST_MODIFIED_BY,
    FoTranslation.LAST_MODIFIED_DATE_TIME,
    FoTranslation.MDF_SYSTEM_RECORD_STATUS,
    FoTranslation.VALUE_DE_DE,
    FoTranslation.VALUE_DEFAULT_VALUE,
    FoTranslation.VALUE_EN_DEBUG,
    FoTranslation.VALUE_EN_GB,
    FoTranslation.VALUE_EN_US,
    FoTranslation.VALUE_ES_ES,
    FoTranslation.VALUE_ES_MX,
    FoTranslation.VALUE_FR_CA,
    FoTranslation.VALUE_FR_FR,
    FoTranslation.VALUE_IT_IT,
    FoTranslation.VALUE_LOCALIZED,
    FoTranslation.VALUE_NL_NL,
    FoTranslation.VALUE_PT_BR,
    FoTranslation.VALUE_ZH_CN,
    FoTranslation.CREATED_BY_NAV,
    FoTranslation.LAST_MODIFIED_BY_NAV,
    FoTranslation.MDF_SYSTEM_RECORD_STATUS_NAV,
    FoTranslation.VALUE_TRANSLATION_TEXT_NAV,
    FoTranslation.WF_REQUEST_NAV
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<FoTranslation> = new AllFields('*', FoTranslation);
  /**
   * All key fields of the FoTranslation entity.
   */
  export const _keyFields: Array<Selectable<FoTranslation>> = [FoTranslation.EXTERNAL_CODE];
  /**
   * Mapping of all key field names to the respective static field property FoTranslation.
   */
  export const _keys: { [keys: string]: Selectable<FoTranslation> } = FoTranslation._keyFields.reduce((acc: { [keys: string]: Selectable<FoTranslation> }, field: Selectable<FoTranslation>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}

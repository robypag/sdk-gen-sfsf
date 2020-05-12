/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { OnboardingEquipmentType_1RequestBuilder } from './OnboardingEquipmentType_1RequestBuilder';
import { Moment } from 'moment';
import { AllFields, CustomField, DateField, Entity, EntityBuilderType, Link, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "OnboardingEquipmentType" of service "SFOData".
 */
export class OnboardingEquipmentType_1 extends Entity implements OnboardingEquipmentType_1Type {
  /**
   * Technical entity name for OnboardingEquipmentType_1.
   */
  static _entityName = 'OnboardingEquipmentType';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for OnboardingEquipmentType_1.
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
   * Maximum length: 150.
   * @nullable
   */
  descriptionDeDe?: string;
  /**
   * Description.
   * Maximum length: 150.
   * @nullable
   */
  descriptionDefaultValue?: string;
  /**
   * Description.
   * Maximum length: 150.
   * @nullable
   */
  descriptionEnDebug?: string;
  /**
   * Description.
   * Maximum length: 150.
   * @nullable
   */
  descriptionEnGb?: string;
  /**
   * Description.
   * Maximum length: 150.
   * @nullable
   */
  descriptionEnUs?: string;
  /**
   * Description.
   * Maximum length: 150.
   * @nullable
   */
  descriptionEsEs?: string;
  /**
   * Description.
   * Maximum length: 150.
   * @nullable
   */
  descriptionEsMx?: string;
  /**
   * Description.
   * Maximum length: 150.
   * @nullable
   */
  descriptionFrCa?: string;
  /**
   * Description.
   * Maximum length: 150.
   * @nullable
   */
  descriptionFrFr?: string;
  /**
   * Description.
   * Maximum length: 150.
   * @nullable
   */
  descriptionItIt?: string;
  /**
   * Description.
   * Maximum length: 150.
   * @nullable
   */
  descriptionLocalized?: string;
  /**
   * Description.
   * Maximum length: 150.
   * @nullable
   */
  descriptionNlNl?: string;
  /**
   * Description.
   * Maximum length: 150.
   * @nullable
   */
  descriptionPtBr?: string;
  /**
   * Description.
   * Maximum length: 150.
   * @nullable
   */
  descriptionZhCn?: string;
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
   * One-to-one navigation property to the [[User]] entity.
   */
  createdByNav!: User;
  /**
   * One-to-many navigation property to the [[MdfLocalizedValue]] entity.
   */
  descriptionTranslationTextNav!: MdfLocalizedValue[];
  /**
   * One-to-one navigation property to the [[Attachment]] entity.
   */
  iconNav!: Attachment;
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
   * Returns an entity builder to construct instances `OnboardingEquipmentType_1`.
   * @returns A builder that constructs instances of entity type `OnboardingEquipmentType_1`.
   */
  static builder(): EntityBuilderType<OnboardingEquipmentType_1, OnboardingEquipmentType_1TypeForceMandatory> {
    return Entity.entityBuilder(OnboardingEquipmentType_1);
  }

  /**
   * Returns a request builder to construct requests for operations on the `OnboardingEquipmentType_1` entity type.
   * @returns A `OnboardingEquipmentType_1` request builder.
   */
  static requestBuilder(): OnboardingEquipmentType_1RequestBuilder {
    return new OnboardingEquipmentType_1RequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `OnboardingEquipmentType_1`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `OnboardingEquipmentType_1`.
   */
  static customField(fieldName: string): CustomField<OnboardingEquipmentType_1> {
    return Entity.customFieldSelector(fieldName, OnboardingEquipmentType_1);
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
import { Attachment, AttachmentType } from './Attachment';
import { MdfEnumValue, MdfEnumValueType } from './MdfEnumValue';
import { WfRequest, WfRequestType } from './WfRequest';

export interface OnboardingEquipmentType_1Type {
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
  lastModifiedBy?: string;
  lastModifiedDateTime?: Moment;
  mdfSystemRecordStatus?: string;
  createdByNav: UserType;
  descriptionTranslationTextNav: MdfLocalizedValueType[];
  iconNav: AttachmentType;
  lastModifiedByNav: UserType;
  mdfSystemRecordStatusNav: MdfEnumValueType;
  wfRequestNav: WfRequestType[];
}

export interface OnboardingEquipmentType_1TypeForceMandatory {
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
  lastModifiedBy: string;
  lastModifiedDateTime: Moment;
  mdfSystemRecordStatus: string;
  createdByNav: UserType;
  descriptionTranslationTextNav: MdfLocalizedValueType[];
  iconNav: AttachmentType;
  lastModifiedByNav: UserType;
  mdfSystemRecordStatusNav: MdfEnumValueType;
  wfRequestNav: WfRequestType[];
}

export namespace OnboardingEquipmentType_1 {
  /**
   * Static representation of the [[code]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CODE: StringField<OnboardingEquipmentType_1> = new StringField('code', OnboardingEquipmentType_1, 'Edm.String');
  /**
   * Static representation of the [[createdBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_BY: StringField<OnboardingEquipmentType_1> = new StringField('createdBy', OnboardingEquipmentType_1, 'Edm.String');
  /**
   * Static representation of the [[createdDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_DATE_TIME: DateField<OnboardingEquipmentType_1> = new DateField('createdDateTime', OnboardingEquipmentType_1, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[descriptionDeDe]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DESCRIPTION_DE_DE: StringField<OnboardingEquipmentType_1> = new StringField('description_de_DE', OnboardingEquipmentType_1, 'Edm.String');
  /**
   * Static representation of the [[descriptionDefaultValue]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DESCRIPTION_DEFAULT_VALUE: StringField<OnboardingEquipmentType_1> = new StringField('description_defaultValue', OnboardingEquipmentType_1, 'Edm.String');
  /**
   * Static representation of the [[descriptionEnDebug]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DESCRIPTION_EN_DEBUG: StringField<OnboardingEquipmentType_1> = new StringField('description_en_DEBUG', OnboardingEquipmentType_1, 'Edm.String');
  /**
   * Static representation of the [[descriptionEnGb]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DESCRIPTION_EN_GB: StringField<OnboardingEquipmentType_1> = new StringField('description_en_GB', OnboardingEquipmentType_1, 'Edm.String');
  /**
   * Static representation of the [[descriptionEnUs]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DESCRIPTION_EN_US: StringField<OnboardingEquipmentType_1> = new StringField('description_en_US', OnboardingEquipmentType_1, 'Edm.String');
  /**
   * Static representation of the [[descriptionEsEs]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DESCRIPTION_ES_ES: StringField<OnboardingEquipmentType_1> = new StringField('description_es_ES', OnboardingEquipmentType_1, 'Edm.String');
  /**
   * Static representation of the [[descriptionEsMx]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DESCRIPTION_ES_MX: StringField<OnboardingEquipmentType_1> = new StringField('description_es_MX', OnboardingEquipmentType_1, 'Edm.String');
  /**
   * Static representation of the [[descriptionFrCa]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DESCRIPTION_FR_CA: StringField<OnboardingEquipmentType_1> = new StringField('description_fr_CA', OnboardingEquipmentType_1, 'Edm.String');
  /**
   * Static representation of the [[descriptionFrFr]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DESCRIPTION_FR_FR: StringField<OnboardingEquipmentType_1> = new StringField('description_fr_FR', OnboardingEquipmentType_1, 'Edm.String');
  /**
   * Static representation of the [[descriptionItIt]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DESCRIPTION_IT_IT: StringField<OnboardingEquipmentType_1> = new StringField('description_it_IT', OnboardingEquipmentType_1, 'Edm.String');
  /**
   * Static representation of the [[descriptionLocalized]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DESCRIPTION_LOCALIZED: StringField<OnboardingEquipmentType_1> = new StringField('description_localized', OnboardingEquipmentType_1, 'Edm.String');
  /**
   * Static representation of the [[descriptionNlNl]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DESCRIPTION_NL_NL: StringField<OnboardingEquipmentType_1> = new StringField('description_nl_NL', OnboardingEquipmentType_1, 'Edm.String');
  /**
   * Static representation of the [[descriptionPtBr]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DESCRIPTION_PT_BR: StringField<OnboardingEquipmentType_1> = new StringField('description_pt_BR', OnboardingEquipmentType_1, 'Edm.String');
  /**
   * Static representation of the [[descriptionZhCn]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DESCRIPTION_ZH_CN: StringField<OnboardingEquipmentType_1> = new StringField('description_zh_CN', OnboardingEquipmentType_1, 'Edm.String');
  /**
   * Static representation of the [[lastModifiedBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_BY: StringField<OnboardingEquipmentType_1> = new StringField('lastModifiedBy', OnboardingEquipmentType_1, 'Edm.String');
  /**
   * Static representation of the [[lastModifiedDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_DATE_TIME: DateField<OnboardingEquipmentType_1> = new DateField('lastModifiedDateTime', OnboardingEquipmentType_1, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_RECORD_STATUS: StringField<OnboardingEquipmentType_1> = new StringField('mdfSystemRecordStatus', OnboardingEquipmentType_1, 'Edm.String');
  /**
   * Static representation of the one-to-one navigation property [[createdByNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_BY_NAV: OneToOneLink<OnboardingEquipmentType_1, User> = new OneToOneLink('createdByNav', OnboardingEquipmentType_1, User);
  /**
   * Static representation of the one-to-many navigation property [[descriptionTranslationTextNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DESCRIPTION_TRANSLATION_TEXT_NAV: Link<OnboardingEquipmentType_1, MdfLocalizedValue> = new Link('descriptionTranslationTextNav', OnboardingEquipmentType_1, MdfLocalizedValue);
  /**
   * Static representation of the one-to-one navigation property [[iconNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ICON_NAV: OneToOneLink<OnboardingEquipmentType_1, Attachment> = new OneToOneLink('iconNav', OnboardingEquipmentType_1, Attachment);
  /**
   * Static representation of the one-to-one navigation property [[lastModifiedByNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_BY_NAV: OneToOneLink<OnboardingEquipmentType_1, User> = new OneToOneLink('lastModifiedByNav', OnboardingEquipmentType_1, User);
  /**
   * Static representation of the one-to-one navigation property [[mdfSystemRecordStatusNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_RECORD_STATUS_NAV: OneToOneLink<OnboardingEquipmentType_1, MdfEnumValue> = new OneToOneLink('mdfSystemRecordStatusNav', OnboardingEquipmentType_1, MdfEnumValue);
  /**
   * Static representation of the one-to-many navigation property [[wfRequestNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const WF_REQUEST_NAV: Link<OnboardingEquipmentType_1, WfRequest> = new Link('wfRequestNav', OnboardingEquipmentType_1, WfRequest);
  /**
   * All fields of the OnboardingEquipmentType_1 entity.
   */
  export const _allFields: Array<StringField<OnboardingEquipmentType_1> | DateField<OnboardingEquipmentType_1> | OneToOneLink<OnboardingEquipmentType_1, User> | Link<OnboardingEquipmentType_1, MdfLocalizedValue> | OneToOneLink<OnboardingEquipmentType_1, Attachment> | OneToOneLink<OnboardingEquipmentType_1, MdfEnumValue> | Link<OnboardingEquipmentType_1, WfRequest>> = [
    OnboardingEquipmentType_1.CODE,
    OnboardingEquipmentType_1.CREATED_BY,
    OnboardingEquipmentType_1.CREATED_DATE_TIME,
    OnboardingEquipmentType_1.DESCRIPTION_DE_DE,
    OnboardingEquipmentType_1.DESCRIPTION_DEFAULT_VALUE,
    OnboardingEquipmentType_1.DESCRIPTION_EN_DEBUG,
    OnboardingEquipmentType_1.DESCRIPTION_EN_GB,
    OnboardingEquipmentType_1.DESCRIPTION_EN_US,
    OnboardingEquipmentType_1.DESCRIPTION_ES_ES,
    OnboardingEquipmentType_1.DESCRIPTION_ES_MX,
    OnboardingEquipmentType_1.DESCRIPTION_FR_CA,
    OnboardingEquipmentType_1.DESCRIPTION_FR_FR,
    OnboardingEquipmentType_1.DESCRIPTION_IT_IT,
    OnboardingEquipmentType_1.DESCRIPTION_LOCALIZED,
    OnboardingEquipmentType_1.DESCRIPTION_NL_NL,
    OnboardingEquipmentType_1.DESCRIPTION_PT_BR,
    OnboardingEquipmentType_1.DESCRIPTION_ZH_CN,
    OnboardingEquipmentType_1.LAST_MODIFIED_BY,
    OnboardingEquipmentType_1.LAST_MODIFIED_DATE_TIME,
    OnboardingEquipmentType_1.MDF_SYSTEM_RECORD_STATUS,
    OnboardingEquipmentType_1.CREATED_BY_NAV,
    OnboardingEquipmentType_1.DESCRIPTION_TRANSLATION_TEXT_NAV,
    OnboardingEquipmentType_1.ICON_NAV,
    OnboardingEquipmentType_1.LAST_MODIFIED_BY_NAV,
    OnboardingEquipmentType_1.MDF_SYSTEM_RECORD_STATUS_NAV,
    OnboardingEquipmentType_1.WF_REQUEST_NAV
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<OnboardingEquipmentType_1> = new AllFields('*', OnboardingEquipmentType_1);
  /**
   * All key fields of the OnboardingEquipmentType_1 entity.
   */
  export const _keyFields: Array<Selectable<OnboardingEquipmentType_1>> = [OnboardingEquipmentType_1.CODE];
  /**
   * Mapping of all key field names to the respective static field property OnboardingEquipmentType_1.
   */
  export const _keys: { [keys: string]: Selectable<OnboardingEquipmentType_1> } = OnboardingEquipmentType_1._keyFields.reduce((acc: { [keys: string]: Selectable<OnboardingEquipmentType_1> }, field: Selectable<OnboardingEquipmentType_1>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}

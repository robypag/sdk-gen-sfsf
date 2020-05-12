/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { EmployeeProfilePageConfigRequestBuilder } from './EmployeeProfilePageConfigRequestBuilder';
import { Moment } from 'moment';
import { AllFields, BooleanField, CustomField, DateField, Entity, EntityBuilderType, Link, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "EmployeeProfilePageConfig" of service "SFOData".
 */
export class EmployeeProfilePageConfig extends Entity implements EmployeeProfilePageConfigType {
  /**
   * Technical entity name for EmployeeProfilePageConfig.
   */
  static _entityName = 'EmployeeProfilePageConfig';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for EmployeeProfilePageConfig.
   */
  static _serviceName = 'SFOData';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = 'VALUE_IS_UNDEFINED';
  /**
   * aboutMeVideoUpdateBy.
   * Maximum length: 255.
   * @nullable
   */
  aboutMeVideoUpdateBy?: string;
  /**
   * aboutMeVideoUpdateDate.
   * @nullable
   */
  aboutMeVideoUpdateDate?: Moment;
  /**
   * code.
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
   * currentPeriodEndDate.
   * @nullable
   */
  currentPeriodEndDate?: Moment;
  /**
   * currentPeriodStartDate.
   * @nullable
   */
  currentPeriodStartDate?: Moment;
  /**
   * employmentDifferentiatorCode.
   * Maximum length: 255.
   * @nullable
   */
  employmentDifferentiatorCode?: string;
  /**
   * headerOverlayFontColor.
   * Maximum length: 255.
   * @nullable
   */
  headerOverlayFontColor?: string;
  /**
   * includeInProgressDocs.
   * @nullable
   */
  includeInProgressDocs?: boolean;
  /**
   * isAboutMeTextEnabled.
   * @nullable
   */
  isAboutMeTextEnabled?: boolean;
  /**
   * isAboutMeVideoEnabled.
   * @nullable
   */
  isAboutMeVideoEnabled?: boolean;
  /**
   * isAllowUploadBGPhoto.
   * @nullable
   */
  isAllowUploadBgPhoto?: boolean;
  /**
   * isHeaderOverlayDisabled.
   * @nullable
   */
  isHeaderOverlayDisabled?: boolean;
  /**
   * isMyNameEnabled.
   * @nullable
   */
  isMyNameEnabled?: boolean;
  /**
   * isPercentCompleteEnabled.
   * @nullable
   */
  isPercentCompleteEnabled?: boolean;
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
   * myNameUpdateBy.
   * Maximum length: 255.
   * @nullable
   */
  myNameUpdateBy?: string;
  /**
   * myNameUpdateDate.
   * @nullable
   */
  myNameUpdateDate?: Moment;
  /**
   * nameFormatCode.
   * Maximum length: 255.
   * @nullable
   */
  nameFormatCode?: string;
  /**
   * pptcSelectedSectionCode.
   * Maximum length: 255.
   * @nullable
   */
  pptcSelectedSectionCode?: string;
  /**
   * templateLabel.
   * Maximum length: 255.
   * @nullable
   */
  templateLabel?: string;
  /**
   * One-to-one navigation property to the [[User]] entity.
   */
  createdByNav!: User;
  /**
   * One-to-one navigation property to the [[EmployeeProfileHeaderConfig]] entity.
   */
  headerConfig!: EmployeeProfileHeaderConfig;
  /**
   * One-to-one navigation property to the [[User]] entity.
   */
  lastModifiedByNav!: User;
  /**
   * One-to-one navigation property to the [[MdfEnumValue]] entity.
   */
  mdfSystemRecordStatusNav!: MdfEnumValue;
  /**
   * One-to-many navigation property to the [[EmployeeProfileSectionConfig]] entity.
   */
  sections!: EmployeeProfileSectionConfig[];
  /**
   * One-to-many navigation property to the [[WfRequest]] entity.
   */
  wfRequestNav!: WfRequest[];

  /**
   * Returns an entity builder to construct instances `EmployeeProfilePageConfig`.
   * @returns A builder that constructs instances of entity type `EmployeeProfilePageConfig`.
   */
  static builder(): EntityBuilderType<EmployeeProfilePageConfig, EmployeeProfilePageConfigTypeForceMandatory> {
    return Entity.entityBuilder(EmployeeProfilePageConfig);
  }

  /**
   * Returns a request builder to construct requests for operations on the `EmployeeProfilePageConfig` entity type.
   * @returns A `EmployeeProfilePageConfig` request builder.
   */
  static requestBuilder(): EmployeeProfilePageConfigRequestBuilder {
    return new EmployeeProfilePageConfigRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `EmployeeProfilePageConfig`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `EmployeeProfilePageConfig`.
   */
  static customField(fieldName: string): CustomField<EmployeeProfilePageConfig> {
    return Entity.customFieldSelector(fieldName, EmployeeProfilePageConfig);
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
import { EmployeeProfileHeaderConfig, EmployeeProfileHeaderConfigType } from './EmployeeProfileHeaderConfig';
import { MdfEnumValue, MdfEnumValueType } from './MdfEnumValue';
import { EmployeeProfileSectionConfig, EmployeeProfileSectionConfigType } from './EmployeeProfileSectionConfig';
import { WfRequest, WfRequestType } from './WfRequest';

export interface EmployeeProfilePageConfigType {
  aboutMeVideoUpdateBy?: string;
  aboutMeVideoUpdateDate?: Moment;
  code: string;
  createdBy?: string;
  createdDateTime?: Moment;
  currentPeriodEndDate?: Moment;
  currentPeriodStartDate?: Moment;
  employmentDifferentiatorCode?: string;
  headerOverlayFontColor?: string;
  includeInProgressDocs?: boolean;
  isAboutMeTextEnabled?: boolean;
  isAboutMeVideoEnabled?: boolean;
  isAllowUploadBgPhoto?: boolean;
  isHeaderOverlayDisabled?: boolean;
  isMyNameEnabled?: boolean;
  isPercentCompleteEnabled?: boolean;
  lastModifiedBy?: string;
  lastModifiedDateTime?: Moment;
  mdfSystemRecordStatus?: string;
  myNameUpdateBy?: string;
  myNameUpdateDate?: Moment;
  nameFormatCode?: string;
  pptcSelectedSectionCode?: string;
  templateLabel?: string;
  createdByNav: UserType;
  headerConfig: EmployeeProfileHeaderConfigType;
  lastModifiedByNav: UserType;
  mdfSystemRecordStatusNav: MdfEnumValueType;
  sections: EmployeeProfileSectionConfigType[];
  wfRequestNav: WfRequestType[];
}

export interface EmployeeProfilePageConfigTypeForceMandatory {
  aboutMeVideoUpdateBy: string;
  aboutMeVideoUpdateDate: Moment;
  code: string;
  createdBy: string;
  createdDateTime: Moment;
  currentPeriodEndDate: Moment;
  currentPeriodStartDate: Moment;
  employmentDifferentiatorCode: string;
  headerOverlayFontColor: string;
  includeInProgressDocs: boolean;
  isAboutMeTextEnabled: boolean;
  isAboutMeVideoEnabled: boolean;
  isAllowUploadBgPhoto: boolean;
  isHeaderOverlayDisabled: boolean;
  isMyNameEnabled: boolean;
  isPercentCompleteEnabled: boolean;
  lastModifiedBy: string;
  lastModifiedDateTime: Moment;
  mdfSystemRecordStatus: string;
  myNameUpdateBy: string;
  myNameUpdateDate: Moment;
  nameFormatCode: string;
  pptcSelectedSectionCode: string;
  templateLabel: string;
  createdByNav: UserType;
  headerConfig: EmployeeProfileHeaderConfigType;
  lastModifiedByNav: UserType;
  mdfSystemRecordStatusNav: MdfEnumValueType;
  sections: EmployeeProfileSectionConfigType[];
  wfRequestNav: WfRequestType[];
}

export namespace EmployeeProfilePageConfig {
  /**
   * Static representation of the [[aboutMeVideoUpdateBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ABOUT_ME_VIDEO_UPDATE_BY: StringField<EmployeeProfilePageConfig> = new StringField('aboutMeVideoUpdateBy', EmployeeProfilePageConfig, 'Edm.String');
  /**
   * Static representation of the [[aboutMeVideoUpdateDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ABOUT_ME_VIDEO_UPDATE_DATE: DateField<EmployeeProfilePageConfig> = new DateField('aboutMeVideoUpdateDate', EmployeeProfilePageConfig, 'Edm.DateTime');
  /**
   * Static representation of the [[code]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CODE: StringField<EmployeeProfilePageConfig> = new StringField('code', EmployeeProfilePageConfig, 'Edm.String');
  /**
   * Static representation of the [[createdBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_BY: StringField<EmployeeProfilePageConfig> = new StringField('createdBy', EmployeeProfilePageConfig, 'Edm.String');
  /**
   * Static representation of the [[createdDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_DATE_TIME: DateField<EmployeeProfilePageConfig> = new DateField('createdDateTime', EmployeeProfilePageConfig, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[currentPeriodEndDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CURRENT_PERIOD_END_DATE: DateField<EmployeeProfilePageConfig> = new DateField('currentPeriodEndDate', EmployeeProfilePageConfig, 'Edm.DateTime');
  /**
   * Static representation of the [[currentPeriodStartDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CURRENT_PERIOD_START_DATE: DateField<EmployeeProfilePageConfig> = new DateField('currentPeriodStartDate', EmployeeProfilePageConfig, 'Edm.DateTime');
  /**
   * Static representation of the [[employmentDifferentiatorCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EMPLOYMENT_DIFFERENTIATOR_CODE: StringField<EmployeeProfilePageConfig> = new StringField('employmentDifferentiatorCode', EmployeeProfilePageConfig, 'Edm.String');
  /**
   * Static representation of the [[headerOverlayFontColor]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const HEADER_OVERLAY_FONT_COLOR: StringField<EmployeeProfilePageConfig> = new StringField('headerOverlayFontColor', EmployeeProfilePageConfig, 'Edm.String');
  /**
   * Static representation of the [[includeInProgressDocs]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const INCLUDE_IN_PROGRESS_DOCS: BooleanField<EmployeeProfilePageConfig> = new BooleanField('includeInProgressDocs', EmployeeProfilePageConfig, 'Edm.Boolean');
  /**
   * Static representation of the [[isAboutMeTextEnabled]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const IS_ABOUT_ME_TEXT_ENABLED: BooleanField<EmployeeProfilePageConfig> = new BooleanField('isAboutMeTextEnabled', EmployeeProfilePageConfig, 'Edm.Boolean');
  /**
   * Static representation of the [[isAboutMeVideoEnabled]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const IS_ABOUT_ME_VIDEO_ENABLED: BooleanField<EmployeeProfilePageConfig> = new BooleanField('isAboutMeVideoEnabled', EmployeeProfilePageConfig, 'Edm.Boolean');
  /**
   * Static representation of the [[isAllowUploadBgPhoto]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const IS_ALLOW_UPLOAD_BG_PHOTO: BooleanField<EmployeeProfilePageConfig> = new BooleanField('isAllowUploadBGPhoto', EmployeeProfilePageConfig, 'Edm.Boolean');
  /**
   * Static representation of the [[isHeaderOverlayDisabled]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const IS_HEADER_OVERLAY_DISABLED: BooleanField<EmployeeProfilePageConfig> = new BooleanField('isHeaderOverlayDisabled', EmployeeProfilePageConfig, 'Edm.Boolean');
  /**
   * Static representation of the [[isMyNameEnabled]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const IS_MY_NAME_ENABLED: BooleanField<EmployeeProfilePageConfig> = new BooleanField('isMyNameEnabled', EmployeeProfilePageConfig, 'Edm.Boolean');
  /**
   * Static representation of the [[isPercentCompleteEnabled]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const IS_PERCENT_COMPLETE_ENABLED: BooleanField<EmployeeProfilePageConfig> = new BooleanField('isPercentCompleteEnabled', EmployeeProfilePageConfig, 'Edm.Boolean');
  /**
   * Static representation of the [[lastModifiedBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_BY: StringField<EmployeeProfilePageConfig> = new StringField('lastModifiedBy', EmployeeProfilePageConfig, 'Edm.String');
  /**
   * Static representation of the [[lastModifiedDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_DATE_TIME: DateField<EmployeeProfilePageConfig> = new DateField('lastModifiedDateTime', EmployeeProfilePageConfig, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_RECORD_STATUS: StringField<EmployeeProfilePageConfig> = new StringField('mdfSystemRecordStatus', EmployeeProfilePageConfig, 'Edm.String');
  /**
   * Static representation of the [[myNameUpdateBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MY_NAME_UPDATE_BY: StringField<EmployeeProfilePageConfig> = new StringField('myNameUpdateBy', EmployeeProfilePageConfig, 'Edm.String');
  /**
   * Static representation of the [[myNameUpdateDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MY_NAME_UPDATE_DATE: DateField<EmployeeProfilePageConfig> = new DateField('myNameUpdateDate', EmployeeProfilePageConfig, 'Edm.DateTime');
  /**
   * Static representation of the [[nameFormatCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NAME_FORMAT_CODE: StringField<EmployeeProfilePageConfig> = new StringField('nameFormatCode', EmployeeProfilePageConfig, 'Edm.String');
  /**
   * Static representation of the [[pptcSelectedSectionCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PPTC_SELECTED_SECTION_CODE: StringField<EmployeeProfilePageConfig> = new StringField('pptcSelectedSectionCode', EmployeeProfilePageConfig, 'Edm.String');
  /**
   * Static representation of the [[templateLabel]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TEMPLATE_LABEL: StringField<EmployeeProfilePageConfig> = new StringField('templateLabel', EmployeeProfilePageConfig, 'Edm.String');
  /**
   * Static representation of the one-to-one navigation property [[createdByNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_BY_NAV: OneToOneLink<EmployeeProfilePageConfig, User> = new OneToOneLink('createdByNav', EmployeeProfilePageConfig, User);
  /**
   * Static representation of the one-to-one navigation property [[headerConfig]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const HEADER_CONFIG: OneToOneLink<EmployeeProfilePageConfig, EmployeeProfileHeaderConfig> = new OneToOneLink('headerConfig', EmployeeProfilePageConfig, EmployeeProfileHeaderConfig);
  /**
   * Static representation of the one-to-one navigation property [[lastModifiedByNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_BY_NAV: OneToOneLink<EmployeeProfilePageConfig, User> = new OneToOneLink('lastModifiedByNav', EmployeeProfilePageConfig, User);
  /**
   * Static representation of the one-to-one navigation property [[mdfSystemRecordStatusNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_RECORD_STATUS_NAV: OneToOneLink<EmployeeProfilePageConfig, MdfEnumValue> = new OneToOneLink('mdfSystemRecordStatusNav', EmployeeProfilePageConfig, MdfEnumValue);
  /**
   * Static representation of the one-to-many navigation property [[sections]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SECTIONS: Link<EmployeeProfilePageConfig, EmployeeProfileSectionConfig> = new Link('sections', EmployeeProfilePageConfig, EmployeeProfileSectionConfig);
  /**
   * Static representation of the one-to-many navigation property [[wfRequestNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const WF_REQUEST_NAV: Link<EmployeeProfilePageConfig, WfRequest> = new Link('wfRequestNav', EmployeeProfilePageConfig, WfRequest);
  /**
   * All fields of the EmployeeProfilePageConfig entity.
   */
  export const _allFields: Array<StringField<EmployeeProfilePageConfig> | DateField<EmployeeProfilePageConfig> | BooleanField<EmployeeProfilePageConfig> | OneToOneLink<EmployeeProfilePageConfig, User> | OneToOneLink<EmployeeProfilePageConfig, EmployeeProfileHeaderConfig> | OneToOneLink<EmployeeProfilePageConfig, MdfEnumValue> | Link<EmployeeProfilePageConfig, EmployeeProfileSectionConfig> | Link<EmployeeProfilePageConfig, WfRequest>> = [
    EmployeeProfilePageConfig.ABOUT_ME_VIDEO_UPDATE_BY,
    EmployeeProfilePageConfig.ABOUT_ME_VIDEO_UPDATE_DATE,
    EmployeeProfilePageConfig.CODE,
    EmployeeProfilePageConfig.CREATED_BY,
    EmployeeProfilePageConfig.CREATED_DATE_TIME,
    EmployeeProfilePageConfig.CURRENT_PERIOD_END_DATE,
    EmployeeProfilePageConfig.CURRENT_PERIOD_START_DATE,
    EmployeeProfilePageConfig.EMPLOYMENT_DIFFERENTIATOR_CODE,
    EmployeeProfilePageConfig.HEADER_OVERLAY_FONT_COLOR,
    EmployeeProfilePageConfig.INCLUDE_IN_PROGRESS_DOCS,
    EmployeeProfilePageConfig.IS_ABOUT_ME_TEXT_ENABLED,
    EmployeeProfilePageConfig.IS_ABOUT_ME_VIDEO_ENABLED,
    EmployeeProfilePageConfig.IS_ALLOW_UPLOAD_BG_PHOTO,
    EmployeeProfilePageConfig.IS_HEADER_OVERLAY_DISABLED,
    EmployeeProfilePageConfig.IS_MY_NAME_ENABLED,
    EmployeeProfilePageConfig.IS_PERCENT_COMPLETE_ENABLED,
    EmployeeProfilePageConfig.LAST_MODIFIED_BY,
    EmployeeProfilePageConfig.LAST_MODIFIED_DATE_TIME,
    EmployeeProfilePageConfig.MDF_SYSTEM_RECORD_STATUS,
    EmployeeProfilePageConfig.MY_NAME_UPDATE_BY,
    EmployeeProfilePageConfig.MY_NAME_UPDATE_DATE,
    EmployeeProfilePageConfig.NAME_FORMAT_CODE,
    EmployeeProfilePageConfig.PPTC_SELECTED_SECTION_CODE,
    EmployeeProfilePageConfig.TEMPLATE_LABEL,
    EmployeeProfilePageConfig.CREATED_BY_NAV,
    EmployeeProfilePageConfig.HEADER_CONFIG,
    EmployeeProfilePageConfig.LAST_MODIFIED_BY_NAV,
    EmployeeProfilePageConfig.MDF_SYSTEM_RECORD_STATUS_NAV,
    EmployeeProfilePageConfig.SECTIONS,
    EmployeeProfilePageConfig.WF_REQUEST_NAV
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<EmployeeProfilePageConfig> = new AllFields('*', EmployeeProfilePageConfig);
  /**
   * All key fields of the EmployeeProfilePageConfig entity.
   */
  export const _keyFields: Array<Selectable<EmployeeProfilePageConfig>> = [EmployeeProfilePageConfig.CODE];
  /**
   * Mapping of all key field names to the respective static field property EmployeeProfilePageConfig.
   */
  export const _keys: { [keys: string]: Selectable<EmployeeProfilePageConfig> } = EmployeeProfilePageConfig._keyFields.reduce((acc: { [keys: string]: Selectable<EmployeeProfilePageConfig> }, field: Selectable<EmployeeProfilePageConfig>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}

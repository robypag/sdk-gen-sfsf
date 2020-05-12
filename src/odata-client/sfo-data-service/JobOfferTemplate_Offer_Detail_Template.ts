/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { JobOfferTemplate_Offer_Detail_TemplateRequestBuilder } from './JobOfferTemplate_Offer_Detail_TemplateRequestBuilder';
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, CustomField, DateField, Entity, EntityBuilderType, Link, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "JobOfferTemplate_Offer_Detail_Template" of service "SFOData".
 */
export class JobOfferTemplate_Offer_Detail_Template extends Entity implements JobOfferTemplate_Offer_Detail_TemplateType {
  /**
   * Technical entity name for JobOfferTemplate_Offer_Detail_Template.
   */
  static _entityName = 'JobOfferTemplate_Offer_Detail_Template';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for JobOfferTemplate_Offer_Detail_Template.
   */
  static _serviceName = 'SFOData';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = 'VALUE_IS_UNDEFINED';
  /**
   * Email.
   */
  contactEmail!: string;
  /**
   * Currency.
   */
  currency!: string;
  /**
   * Base Pay.
   */
  customBaseSal!: BigNumber;
  /**
   * Car Allowance Amount.
   * @nullable
   */
  customCarAllowAmt?: BigNumber;
  /**
   * Sign On Bonus Amount.
   * @nullable
   */
  customFinalSignOn?: BigNumber;
  /**
   * RSU / LTI.
   * @nullable
   */
  customLti?: BigNumber;
  /**
   * Other Allowance Details.
   * @nullable
   */
  customOtherAllowanceDetails?: string;
  /**
   * Other Compensation Details.
   * @nullable
   */
  customOtherCompDetails?: string;
  /**
   * Relocation Amount.
   * @nullable
   */
  customRelocAmount?: BigNumber;
  /**
   * Target Bonus Amount.
   * @nullable
   */
  customTargetBonusAmount?: BigNumber;
  /**
   * End Contract Date.
   * @nullable
   */
  endDateContract?: Moment;
  /**
   * First Name.
   */
  firstName!: string;
  /**
   * Requisition Number.
   */
  id!: string;
  /**
   * Job Code.
   */
  jobCode!: string;
  /**
   * Last Name.
   */
  lastName!: string;
  /**
   * Location Code.
   * @nullable
   */
  locationObjCode?: string;
  /**
   * Position Number.
   */
  positionNumber!: string;
  /**
   * Actual Start Date.
   */
  startDate!: Moment;
  /**
   * Template Id.
   */
  templateId!: BigNumber;
  /**
   * Internal Title.
   */
  title!: string;
  /**
   * One-to-one navigation property to the [[FoCostCenter]] entity.
   */
  costCenterObj!: FoCostCenter;
  /**
   * One-to-one navigation property to the [[PicklistOption]] entity.
   */
  customBasePayFreq!: PicklistOption;
  /**
   * One-to-one navigation property to the [[PicklistOption]] entity.
   */
  customCarAllowRequired!: PicklistOption;
  /**
   * One-to-one navigation property to the [[PicklistOption]] entity.
   */
  customNoticeDuringProbPeriod!: PicklistOption;
  /**
   * One-to-one navigation property to the [[PicklistOption]] entity.
   */
  customNoticePeriod!: PicklistOption;
  /**
   * One-to-one navigation property to the [[PicklistOption]] entity.
   */
  customProbPeriod!: PicklistOption;
  /**
   * One-to-one navigation property to the [[PicklistOption]] entity.
   */
  customTypeHire!: PicklistOption;
  /**
   * One-to-one navigation property to the [[FoDepartment]] entity.
   */
  departmentObj!: FoDepartment;
  /**
   * One-to-one navigation property to the [[FoDivision]] entity.
   */
  divisionObj!: FoDivision;
  /**
   * One-to-many navigation property to the [[JobRequisitionOperator]] entity.
   */
  hiringManagerName!: JobRequisitionOperator[];
  /**
   * One-to-many navigation property to the [[FoLocation]] entity.
   */
  locationObj!: FoLocation[];
  /**
   * One-to-one navigation property to the [[Attachment]] entity.
   */
  resume!: Attachment;

  /**
   * Returns an entity builder to construct instances `JobOfferTemplate_Offer_Detail_Template`.
   * @returns A builder that constructs instances of entity type `JobOfferTemplate_Offer_Detail_Template`.
   */
  static builder(): EntityBuilderType<JobOfferTemplate_Offer_Detail_Template, JobOfferTemplate_Offer_Detail_TemplateTypeForceMandatory> {
    return Entity.entityBuilder(JobOfferTemplate_Offer_Detail_Template);
  }

  /**
   * Returns a request builder to construct requests for operations on the `JobOfferTemplate_Offer_Detail_Template` entity type.
   * @returns A `JobOfferTemplate_Offer_Detail_Template` request builder.
   */
  static requestBuilder(): JobOfferTemplate_Offer_Detail_TemplateRequestBuilder {
    return new JobOfferTemplate_Offer_Detail_TemplateRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `JobOfferTemplate_Offer_Detail_Template`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `JobOfferTemplate_Offer_Detail_Template`.
   */
  static customField(fieldName: string): CustomField<JobOfferTemplate_Offer_Detail_Template> {
    return Entity.customFieldSelector(fieldName, JobOfferTemplate_Offer_Detail_Template);
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
import { PicklistOption, PicklistOptionType } from './PicklistOption';
import { FoDepartment, FoDepartmentType } from './FoDepartment';
import { FoDivision, FoDivisionType } from './FoDivision';
import { JobRequisitionOperator, JobRequisitionOperatorType } from './JobRequisitionOperator';
import { FoLocation, FoLocationType } from './FoLocation';
import { Attachment, AttachmentType } from './Attachment';

export interface JobOfferTemplate_Offer_Detail_TemplateType {
  contactEmail: string;
  currency: string;
  customBaseSal: BigNumber;
  customCarAllowAmt?: BigNumber;
  customFinalSignOn?: BigNumber;
  customLti?: BigNumber;
  customOtherAllowanceDetails?: string;
  customOtherCompDetails?: string;
  customRelocAmount?: BigNumber;
  customTargetBonusAmount?: BigNumber;
  endDateContract?: Moment;
  firstName: string;
  id: string;
  jobCode: string;
  lastName: string;
  locationObjCode?: string;
  positionNumber: string;
  startDate: Moment;
  templateId: BigNumber;
  title: string;
  costCenterObj: FoCostCenterType;
  customBasePayFreq: PicklistOptionType;
  customCarAllowRequired: PicklistOptionType;
  customNoticeDuringProbPeriod: PicklistOptionType;
  customNoticePeriod: PicklistOptionType;
  customProbPeriod: PicklistOptionType;
  customTypeHire: PicklistOptionType;
  departmentObj: FoDepartmentType;
  divisionObj: FoDivisionType;
  hiringManagerName: JobRequisitionOperatorType[];
  locationObj: FoLocationType[];
  resume: AttachmentType;
}

export interface JobOfferTemplate_Offer_Detail_TemplateTypeForceMandatory {
  contactEmail: string;
  currency: string;
  customBaseSal: BigNumber;
  customCarAllowAmt: BigNumber;
  customFinalSignOn: BigNumber;
  customLti: BigNumber;
  customOtherAllowanceDetails: string;
  customOtherCompDetails: string;
  customRelocAmount: BigNumber;
  customTargetBonusAmount: BigNumber;
  endDateContract: Moment;
  firstName: string;
  id: string;
  jobCode: string;
  lastName: string;
  locationObjCode: string;
  positionNumber: string;
  startDate: Moment;
  templateId: BigNumber;
  title: string;
  costCenterObj: FoCostCenterType;
  customBasePayFreq: PicklistOptionType;
  customCarAllowRequired: PicklistOptionType;
  customNoticeDuringProbPeriod: PicklistOptionType;
  customNoticePeriod: PicklistOptionType;
  customProbPeriod: PicklistOptionType;
  customTypeHire: PicklistOptionType;
  departmentObj: FoDepartmentType;
  divisionObj: FoDivisionType;
  hiringManagerName: JobRequisitionOperatorType[];
  locationObj: FoLocationType[];
  resume: AttachmentType;
}

export namespace JobOfferTemplate_Offer_Detail_Template {
  /**
   * Static representation of the [[contactEmail]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CONTACT_EMAIL: StringField<JobOfferTemplate_Offer_Detail_Template> = new StringField('contactEmail', JobOfferTemplate_Offer_Detail_Template, 'Edm.String');
  /**
   * Static representation of the [[currency]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CURRENCY: StringField<JobOfferTemplate_Offer_Detail_Template> = new StringField('currency', JobOfferTemplate_Offer_Detail_Template, 'Edm.String');
  /**
   * Static representation of the [[customBaseSal]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CUSTOM_BASE_SAL: BigNumberField<JobOfferTemplate_Offer_Detail_Template> = new BigNumberField('customBaseSal', JobOfferTemplate_Offer_Detail_Template, 'Edm.Decimal');
  /**
   * Static representation of the [[customCarAllowAmt]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CUSTOM_CAR_ALLOW_AMT: BigNumberField<JobOfferTemplate_Offer_Detail_Template> = new BigNumberField('customCarAllowAmt', JobOfferTemplate_Offer_Detail_Template, 'Edm.Decimal');
  /**
   * Static representation of the [[customFinalSignOn]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CUSTOM_FINAL_SIGN_ON: BigNumberField<JobOfferTemplate_Offer_Detail_Template> = new BigNumberField('customFinalSignOn', JobOfferTemplate_Offer_Detail_Template, 'Edm.Decimal');
  /**
   * Static representation of the [[customLti]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CUSTOM_LTI: BigNumberField<JobOfferTemplate_Offer_Detail_Template> = new BigNumberField('customLTI', JobOfferTemplate_Offer_Detail_Template, 'Edm.Decimal');
  /**
   * Static representation of the [[customOtherAllowanceDetails]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CUSTOM_OTHER_ALLOWANCE_DETAILS: StringField<JobOfferTemplate_Offer_Detail_Template> = new StringField('customOtherAllowanceDetails', JobOfferTemplate_Offer_Detail_Template, 'Edm.String');
  /**
   * Static representation of the [[customOtherCompDetails]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CUSTOM_OTHER_COMP_DETAILS: StringField<JobOfferTemplate_Offer_Detail_Template> = new StringField('customOtherCompDetails', JobOfferTemplate_Offer_Detail_Template, 'Edm.String');
  /**
   * Static representation of the [[customRelocAmount]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CUSTOM_RELOC_AMOUNT: BigNumberField<JobOfferTemplate_Offer_Detail_Template> = new BigNumberField('customRelocAmount', JobOfferTemplate_Offer_Detail_Template, 'Edm.Decimal');
  /**
   * Static representation of the [[customTargetBonusAmount]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CUSTOM_TARGET_BONUS_AMOUNT: BigNumberField<JobOfferTemplate_Offer_Detail_Template> = new BigNumberField('customTargetBonusAmount', JobOfferTemplate_Offer_Detail_Template, 'Edm.Decimal');
  /**
   * Static representation of the [[endDateContract]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const END_DATE_CONTRACT: DateField<JobOfferTemplate_Offer_Detail_Template> = new DateField('endDateContract', JobOfferTemplate_Offer_Detail_Template, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[firstName]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FIRST_NAME: StringField<JobOfferTemplate_Offer_Detail_Template> = new StringField('firstName', JobOfferTemplate_Offer_Detail_Template, 'Edm.String');
  /**
   * Static representation of the [[id]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ID: StringField<JobOfferTemplate_Offer_Detail_Template> = new StringField('id', JobOfferTemplate_Offer_Detail_Template, 'Edm.String');
  /**
   * Static representation of the [[jobCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const JOB_CODE: StringField<JobOfferTemplate_Offer_Detail_Template> = new StringField('jobCode', JobOfferTemplate_Offer_Detail_Template, 'Edm.String');
  /**
   * Static representation of the [[lastName]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_NAME: StringField<JobOfferTemplate_Offer_Detail_Template> = new StringField('lastName', JobOfferTemplate_Offer_Detail_Template, 'Edm.String');
  /**
   * Static representation of the [[locationObjCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LOCATION_OBJ_CODE: StringField<JobOfferTemplate_Offer_Detail_Template> = new StringField('location_obj_code', JobOfferTemplate_Offer_Detail_Template, 'Edm.String');
  /**
   * Static representation of the [[positionNumber]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const POSITION_NUMBER: StringField<JobOfferTemplate_Offer_Detail_Template> = new StringField('positionNumber', JobOfferTemplate_Offer_Detail_Template, 'Edm.String');
  /**
   * Static representation of the [[startDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const START_DATE: DateField<JobOfferTemplate_Offer_Detail_Template> = new DateField('startDate', JobOfferTemplate_Offer_Detail_Template, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[templateId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TEMPLATE_ID: BigNumberField<JobOfferTemplate_Offer_Detail_Template> = new BigNumberField('templateId', JobOfferTemplate_Offer_Detail_Template, 'Edm.Int64');
  /**
   * Static representation of the [[title]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TITLE: StringField<JobOfferTemplate_Offer_Detail_Template> = new StringField('title', JobOfferTemplate_Offer_Detail_Template, 'Edm.String');
  /**
   * Static representation of the one-to-one navigation property [[costCenterObj]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const COST_CENTER_OBJ: OneToOneLink<JobOfferTemplate_Offer_Detail_Template, FoCostCenter> = new OneToOneLink('costCenter_obj', JobOfferTemplate_Offer_Detail_Template, FoCostCenter);
  /**
   * Static representation of the one-to-one navigation property [[customBasePayFreq]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CUSTOM_BASE_PAY_FREQ: OneToOneLink<JobOfferTemplate_Offer_Detail_Template, PicklistOption> = new OneToOneLink('customBasePayFreq', JobOfferTemplate_Offer_Detail_Template, PicklistOption);
  /**
   * Static representation of the one-to-one navigation property [[customCarAllowRequired]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CUSTOM_CAR_ALLOW_REQUIRED: OneToOneLink<JobOfferTemplate_Offer_Detail_Template, PicklistOption> = new OneToOneLink('customCarAllowRequired', JobOfferTemplate_Offer_Detail_Template, PicklistOption);
  /**
   * Static representation of the one-to-one navigation property [[customNoticeDuringProbPeriod]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CUSTOM_NOTICE_DURING_PROB_PERIOD: OneToOneLink<JobOfferTemplate_Offer_Detail_Template, PicklistOption> = new OneToOneLink('customNoticeDuringProbPeriod', JobOfferTemplate_Offer_Detail_Template, PicklistOption);
  /**
   * Static representation of the one-to-one navigation property [[customNoticePeriod]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CUSTOM_NOTICE_PERIOD: OneToOneLink<JobOfferTemplate_Offer_Detail_Template, PicklistOption> = new OneToOneLink('customNoticePeriod', JobOfferTemplate_Offer_Detail_Template, PicklistOption);
  /**
   * Static representation of the one-to-one navigation property [[customProbPeriod]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CUSTOM_PROB_PERIOD: OneToOneLink<JobOfferTemplate_Offer_Detail_Template, PicklistOption> = new OneToOneLink('customProbPeriod', JobOfferTemplate_Offer_Detail_Template, PicklistOption);
  /**
   * Static representation of the one-to-one navigation property [[customTypeHire]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CUSTOM_TYPE_HIRE: OneToOneLink<JobOfferTemplate_Offer_Detail_Template, PicklistOption> = new OneToOneLink('customTypeHire', JobOfferTemplate_Offer_Detail_Template, PicklistOption);
  /**
   * Static representation of the one-to-one navigation property [[departmentObj]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DEPARTMENT_OBJ: OneToOneLink<JobOfferTemplate_Offer_Detail_Template, FoDepartment> = new OneToOneLink('department_obj', JobOfferTemplate_Offer_Detail_Template, FoDepartment);
  /**
   * Static representation of the one-to-one navigation property [[divisionObj]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DIVISION_OBJ: OneToOneLink<JobOfferTemplate_Offer_Detail_Template, FoDivision> = new OneToOneLink('division_obj', JobOfferTemplate_Offer_Detail_Template, FoDivision);
  /**
   * Static representation of the one-to-many navigation property [[hiringManagerName]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const HIRING_MANAGER_NAME: Link<JobOfferTemplate_Offer_Detail_Template, JobRequisitionOperator> = new Link('hiringManagerName', JobOfferTemplate_Offer_Detail_Template, JobRequisitionOperator);
  /**
   * Static representation of the one-to-many navigation property [[locationObj]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LOCATION_OBJ: Link<JobOfferTemplate_Offer_Detail_Template, FoLocation> = new Link('location_obj', JobOfferTemplate_Offer_Detail_Template, FoLocation);
  /**
   * Static representation of the one-to-one navigation property [[resume]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const RESUME: OneToOneLink<JobOfferTemplate_Offer_Detail_Template, Attachment> = new OneToOneLink('resume', JobOfferTemplate_Offer_Detail_Template, Attachment);
  /**
   * All fields of the JobOfferTemplate_Offer_Detail_Template entity.
   */
  export const _allFields: Array<StringField<JobOfferTemplate_Offer_Detail_Template> | BigNumberField<JobOfferTemplate_Offer_Detail_Template> | DateField<JobOfferTemplate_Offer_Detail_Template> | OneToOneLink<JobOfferTemplate_Offer_Detail_Template, FoCostCenter> | OneToOneLink<JobOfferTemplate_Offer_Detail_Template, PicklistOption> | OneToOneLink<JobOfferTemplate_Offer_Detail_Template, FoDepartment> | OneToOneLink<JobOfferTemplate_Offer_Detail_Template, FoDivision> | Link<JobOfferTemplate_Offer_Detail_Template, JobRequisitionOperator> | Link<JobOfferTemplate_Offer_Detail_Template, FoLocation> | OneToOneLink<JobOfferTemplate_Offer_Detail_Template, Attachment>> = [
    JobOfferTemplate_Offer_Detail_Template.CONTACT_EMAIL,
    JobOfferTemplate_Offer_Detail_Template.CURRENCY,
    JobOfferTemplate_Offer_Detail_Template.CUSTOM_BASE_SAL,
    JobOfferTemplate_Offer_Detail_Template.CUSTOM_CAR_ALLOW_AMT,
    JobOfferTemplate_Offer_Detail_Template.CUSTOM_FINAL_SIGN_ON,
    JobOfferTemplate_Offer_Detail_Template.CUSTOM_LTI,
    JobOfferTemplate_Offer_Detail_Template.CUSTOM_OTHER_ALLOWANCE_DETAILS,
    JobOfferTemplate_Offer_Detail_Template.CUSTOM_OTHER_COMP_DETAILS,
    JobOfferTemplate_Offer_Detail_Template.CUSTOM_RELOC_AMOUNT,
    JobOfferTemplate_Offer_Detail_Template.CUSTOM_TARGET_BONUS_AMOUNT,
    JobOfferTemplate_Offer_Detail_Template.END_DATE_CONTRACT,
    JobOfferTemplate_Offer_Detail_Template.FIRST_NAME,
    JobOfferTemplate_Offer_Detail_Template.ID,
    JobOfferTemplate_Offer_Detail_Template.JOB_CODE,
    JobOfferTemplate_Offer_Detail_Template.LAST_NAME,
    JobOfferTemplate_Offer_Detail_Template.LOCATION_OBJ_CODE,
    JobOfferTemplate_Offer_Detail_Template.POSITION_NUMBER,
    JobOfferTemplate_Offer_Detail_Template.START_DATE,
    JobOfferTemplate_Offer_Detail_Template.TEMPLATE_ID,
    JobOfferTemplate_Offer_Detail_Template.TITLE,
    JobOfferTemplate_Offer_Detail_Template.COST_CENTER_OBJ,
    JobOfferTemplate_Offer_Detail_Template.CUSTOM_BASE_PAY_FREQ,
    JobOfferTemplate_Offer_Detail_Template.CUSTOM_CAR_ALLOW_REQUIRED,
    JobOfferTemplate_Offer_Detail_Template.CUSTOM_NOTICE_DURING_PROB_PERIOD,
    JobOfferTemplate_Offer_Detail_Template.CUSTOM_NOTICE_PERIOD,
    JobOfferTemplate_Offer_Detail_Template.CUSTOM_PROB_PERIOD,
    JobOfferTemplate_Offer_Detail_Template.CUSTOM_TYPE_HIRE,
    JobOfferTemplate_Offer_Detail_Template.DEPARTMENT_OBJ,
    JobOfferTemplate_Offer_Detail_Template.DIVISION_OBJ,
    JobOfferTemplate_Offer_Detail_Template.HIRING_MANAGER_NAME,
    JobOfferTemplate_Offer_Detail_Template.LOCATION_OBJ,
    JobOfferTemplate_Offer_Detail_Template.RESUME
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<JobOfferTemplate_Offer_Detail_Template> = new AllFields('*', JobOfferTemplate_Offer_Detail_Template);
  /**
   * All key fields of the JobOfferTemplate_Offer_Detail_Template entity.
   */
  export const _keyFields: Array<Selectable<JobOfferTemplate_Offer_Detail_Template>> = [JobOfferTemplate_Offer_Detail_Template.TEMPLATE_ID];
  /**
   * Mapping of all key field names to the respective static field property JobOfferTemplate_Offer_Detail_Template.
   */
  export const _keys: { [keys: string]: Selectable<JobOfferTemplate_Offer_Detail_Template> } = JobOfferTemplate_Offer_Detail_Template._keyFields.reduce((acc: { [keys: string]: Selectable<JobOfferTemplate_Offer_Detail_Template> }, field: Selectable<JobOfferTemplate_Offer_Detail_Template>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}

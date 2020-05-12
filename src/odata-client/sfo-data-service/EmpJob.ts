/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { EmpJobRequestBuilder } from './EmpJobRequestBuilder';
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, BinaryField, BooleanField, CustomField, DateField, Entity, EntityBuilderType, NumberField, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "EmpJob" of service "SFOData".
 */
export class EmpJob extends Entity implements EmpJobType {
  /**
   * Technical entity name for EmpJob.
   */
  static _entityName = 'EmpJob';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for EmpJob.
   */
  static _serviceName = 'SFOData';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = 'VALUE_IS_UNDEFINED';
  /**
   * Number of Initial Pôle Emploi Statement (Entertainment Worker).
   * @nullable
   */
  assedicCertInitialStateNum?: BigNumber;
  /**
   * Pôle Emploi Certificate Object Number (Entertainment Worker).
   * @nullable
   */
  assedicCertObjectNum?: BigNumber;
  /**
   * Attachment Content.
   * @nullable
   */
  attachment?: string;
  /**
   * Attachment File Name.
   * Maximum length: 256.
   * @nullable
   */
  attachmentFileName?: string;
  /**
   * Attachment File Size.
   * @nullable
   */
  attachmentFileSize?: BigNumber;
  /**
   * Attachment File Type.
   * Maximum length: 5.
   * @nullable
   */
  attachmentFileType?: string;
  /**
   * Attachment.
   * @nullable
   */
  attachmentId?: string;
  /**
   * Attachment Mime Type.
   * Maximum length: 256.
   * @nullable
   */
  attachmentMimeType?: string;
  /**
   * Attachment Status.
   * @nullable
   */
  attachmentStatus?: BigNumber;
  /**
   * Business Unit.
   * Maximum length: 32.
   * @nullable
   */
  businessUnit?: string;
  /**
   * Calculation Method Indicator.
   * @nullable
   */
  calcMethodIndicator?: boolean;
  /**
   * Commitment Indicator.
   * Maximum length: 256.
   * @nullable
   */
  commitmentIndicator?: string;
  /**
   * Company.
   * Maximum length: 32.
   * @nullable
   */
  company?: string;
  /**
   * Continued Sickness Pay Measure.
   * Maximum length: 256.
   * @nullable
   */
  continuedSicknessPayMeasure?: string;
  /**
   * Continued Sickness Pay Period.
   * @nullable
   */
  continuedSicknessPayPeriod?: BigNumber;
  /**
   * Contract End Date.
   * @nullable
   */
  contractEndDate?: Moment;
  /**
   * Employment Contract Reference.
   * Maximum length: 256.
   * @nullable
   */
  contractReferenceForAed?: string;
  /**
   * Contract Type.
   * Maximum length: 256.
   * @nullable
   */
  contractType?: string;
  /**
   * Corporation.
   * Maximum length: 256.
   * @nullable
   */
  corporation?: string;
  /**
   * Cost Center.
   * Maximum length: 32.
   * @nullable
   */
  costCenter?: string;
  /**
   * Country.
   * Maximum length: 256.
   * @nullable
   */
  countryOfCompany?: string;
  /**
   * Created By.
   * Maximum length: 100.
   * @nullable
   */
  createdBy?: string;
  /**
   * Created Date Time.
   * @nullable
   */
  createdDateTime?: Moment;
  /**
   * Created On.
   * @nullable
   */
  createdOn?: Moment;
  /**
   * Home/Host Designation.
   * Maximum length: 256.
   * @nullable
   */
  customString11?: string;
  /**
   * Mandatory Complementary Pension Category Code.
   * Maximum length: 256.
   * @nullable
   */
  customString3?: string;
  /**
   * Show / No Show.
   * Maximum length: 256.
   * @nullable
   */
  customString4?: string;
  /**
   * Position Title.
   * Maximum length: 256.
   * @nullable
   */
  customString5?: string;
  /**
   * Probation Status.
   * Maximum length: 255.
   * @nullable
   */
  customString6?: string;
  /**
   * Fix Term Contract Reason.
   * Maximum length: 256.
   * @nullable
   */
  customString7?: string;
  /**
   * Additional Fix Term Contract Reason.
   * Maximum length: 256.
   * @nullable
   */
  customString8?: string;
  /**
   * Incentive Plan.
   * Maximum length: 128.
   * @nullable
   */
  customString9?: string;
  /**
   * Department.
   * Maximum length: 32.
   * @nullable
   */
  department?: string;
  /**
   * Division.
   * Maximum length: 32.
   * @nullable
   */
  division?: string;
  /**
   * EEO Category 1.
   * Maximum length: 256.
   * @nullable
   */
  eeo1JobCategory?: string;
  /**
   * EEO Category 4.
   * Maximum length: 256.
   * @nullable
   */
  eeo4JobCategory?: string;
  /**
   * EEO Category 5.
   * Maximum length: 256.
   * @nullable
   */
  eeo5JobCategory?: string;
  /**
   * EEO Category 6.
   * Maximum length: 256.
   * @nullable
   */
  eeo6JobCategory?: string;
  /**
   * EEO Job Group.
   * Maximum length: 256.
   * @nullable
   */
  eeoClass?: string;
  /**
   * Electoral College for Labor Court.
   * Maximum length: 256.
   * @nullable
   */
  electoralCollegeForLaborCourt?: string;
  /**
   * Electoral College for Workers Representatives.
   * Maximum length: 256.
   * @nullable
   */
  electoralCollegeForWorkersRepresentatives?: string;
  /**
   * Electoral College for Works Council.
   * Maximum length: 256.
   * @nullable
   */
  electoralCollegeForWorksCouncil?: string;
  /**
   * Employment Relationship.
   * Maximum length: 256.
   * @nullable
   */
  empRelationship?: string;
  /**
   * Employee Status.
   * Maximum length: 32.
   * @nullable
   */
  emplStatus?: string;
  /**
   * Employee Class.
   * Maximum length: 256.
   * @nullable
   */
  employeeClass?: string;
  /**
   * Employment Type.
   * Maximum length: 32.
   * @nullable
   */
  employmentType?: string;
  /**
   * End Date.
   * @nullable
   */
  endDate?: Moment;
  /**
   * Entry into Group.
   * @nullable
   */
  entryIntoGroup?: Moment;
  /**
   * Event.
   * Maximum length: 32.
   * @nullable
   */
  event?: string;
  /**
   * Event Reason.
   * @nullable
   */
  eventReason?: string;
  /**
   * Excluded from Executive Section.
   * @nullable
   */
  exclExecutiveSector?: boolean;
  /**
   * expectedReturnDate.
   * @nullable
   */
  expectedReturnDate?: Moment;
  /**
   * Family Relationship with Employer.
   * Maximum length: 256.
   * @nullable
   */
  familyRelationshipWithEmployer?: string;
  /**
   * FGTS Date.
   * @nullable
   */
  fgtsDate?: Moment;
  /**
   * FGTS Recipient (Entitled to Receive Severance Pay).
   * @nullable
   */
  fgtsOptant?: boolean;
  /**
   * FGTS Percentage.
   * @nullable
   */
  fgtsPercent?: number;
  /**
   * FLSA Status.
   * Maximum length: 256.
   * @nullable
   */
  flsaStatus?: string;
  /**
   * FTE.
   * @nullable
   */
  fte?: number;
  /**
   * Harmful Agent Exposure Code.
   * Maximum length: 256.
   * @nullable
   */
  harmfulAgentExposure?: string;
  /**
   * Hazard.
   * @nullable
   */
  hazard?: boolean;
  /**
   * Health Risk.
   * @nullable
   */
  healthRisk?: boolean;
  /**
   * Holiday Calendar Code.
   * Maximum length: 128.
   * @nullable
   */
  holidayCalendarCode?: string;
  /**
   * Initial Entry.
   * @nullable
   */
  initialEntryDate?: Moment;
  /**
   * Competition Clause.
   * @nullable
   */
  isCompetitionClauseActive?: boolean;
  /**
   * Sideline Job Allowed.
   * @nullable
   */
  isSideLineJobAllowed?: boolean;
  /**
   * Job Classification.
   * Maximum length: 32.
   * @nullable
   */
  jobCode?: string;
  /**
   * Global Job Title.
   * Maximum length: 256.
   * @nullable
   */
  jobTitle?: string;
  /**
   * Labor Court Sector.
   * Maximum length: 256.
   * @nullable
   */
  laborCourtSector?: string;
  /**
   * Labor Protection.
   * @nullable
   */
  laborProtection?: boolean;
  /**
   * Last Modified By.
   * Maximum length: 100.
   * @nullable
   */
  lastModifiedBy?: string;
  /**
   * Last Modified Date Time.
   * @nullable
   */
  lastModifiedDateTime?: Moment;
  /**
   * Last Modified On.
   * @nullable
   */
  lastModifiedOn?: Moment;
  /**
   * Local Job Title.
   * Maximum length: 256.
   * @nullable
   */
  localJobTitle?: string;
  /**
   * Location.
   * Maximum length: 128.
   * @nullable
   */
  location?: string;
  /**
   * Supervisor.
   * Maximum length: 256.
   * @nullable
   */
  managerId?: string;
  /**
   * Mandatory Range.
   * @nullable
   */
  mandatoryRange?: boolean;
  /**
   * Notice Period.
   * Maximum length: 256.
   * @nullable
   */
  noticePeriod?: string;
  /**
   * Notice Period Start Date.
   * @nullable
   */
  noticePeriodStartDate?: Moment;
  /**
   * Occupational Levels.
   * Maximum length: 256.
   * @nullable
   */
  occupationalLevels?: string;
  /**
   * operation.
   * @nullable
   */
  operation?: string;
  /**
   * Pay Grade.
   * Maximum length: 256.
   * @nullable
   */
  payGrade?: string;
  /**
   * Pay Scale Area.
   * Maximum length: 128.
   * @nullable
   */
  payScaleArea?: string;
  /**
   * Pay Scale Group.
   * Maximum length: 128.
   * @nullable
   */
  payScaleGroup?: string;
  /**
   * Pay Scale Level.
   * Maximum length: 128.
   * @nullable
   */
  payScaleLevel?: string;
  /**
   * Pay Scale Type.
   * Maximum length: 128.
   * @nullable
   */
  payScaleType?: string;
  /**
   * Provisional Certificate in Financial Movements (PCFM).
   * @nullable
   */
  pcfm?: boolean;
  /**
   * Pension Protection (Fixed or Enhanced).
   * @nullable
   */
  pensionProtection?: boolean;
  /**
   * Period Indicator.
   * Maximum length: 256.
   * @nullable
   */
  periodIndicator?: string;
  /**
   * Underage Apprentice Permit.
   * @nullable
   */
  permitIndicator?: boolean;
  /**
   * Position.
   * Maximum length: 128.
   * @nullable
   */
  position?: string;
  /**
   * Position Entry Date.
   * @nullable
   */
  positionEntryDate?: Moment;
  /**
   * Probationary Period End Date.
   * @nullable
   */
  probationPeriodEndDate?: Moment;
  /**
   * Probationary Period.
   * @nullable
   */
  probationaryPeriod?: BigNumber;
  /**
   * Probationary Period Measure.
   * Maximum length: 256.
   * @nullable
   */
  probationaryPeriodMeasure?: string;
  /**
   * Retired.
   * @nullable
   */
  retired?: boolean;
  /**
   * Sequence Number.
   */
  seqNumber!: BigNumber;
  /**
   * Sick Pay Supplement.
   * Maximum length: 256.
   * @nullable
   */
  sickPaySupplement?: string;
  /**
   * Standard Weekly Hours.
   * @nullable
   */
  standardHours?: number;
  /**
   * Start Date.
   */
  startDate!: Moment;
  /**
   * Teachers Pensions.
   * @nullable
   */
  teachersPension?: boolean;
  /**
   * Time Profile.
   * Maximum length: 128.
   * @nullable
   */
  timeTypeProfileCode?: string;
  /**
   * Timezone.
   * Maximum length: 128.
   * @nullable
   */
  timezone?: string;
  /**
   * Travel Distance.
   * @nullable
   */
  travelDistance?: number;
  /**
   * TUPE Organization Number.
   * Maximum length: 256.
   * @nullable
   */
  tupeOrgNumber?: string;
  /**
   * User ID.
   * Maximum length: 100.
   */
  userId!: string;
  /**
   * Work Location.
   * Maximum length: 256.
   * @nullable
   */
  workLocation?: string;
  /**
   * Work Permit Expiry.
   * @nullable
   */
  workPermitExpiry?: Moment;
  /**
   * Worker Category.
   * Maximum length: 256.
   * @nullable
   */
  workerCategory?: string;
  /**
   * Working Time Directive.
   * @nullable
   */
  workingTimeDirective?: boolean;
  /**
   * Work Schedule.
   * Maximum length: 128.
   * @nullable
   */
  workscheduleCode?: string;
  /**
   * WTD Working Hours Limit.
   * Maximum length: 256.
   * @nullable
   */
  wtdHoursLimit?: string;
  /**
   * One-to-one navigation property to the [[FoBusinessUnit]] entity.
   */
  businessUnitNav!: FoBusinessUnit;
  /**
   * One-to-one navigation property to the [[PicklistOption]] entity.
   */
  commitmentIndicatorNav!: PicklistOption;
  /**
   * One-to-one navigation property to the [[FoCompany]] entity.
   */
  companyNav!: FoCompany;
  /**
   * One-to-one navigation property to the [[PicklistOption]] entity.
   */
  continuedSicknessPayMeasureNav!: PicklistOption;
  /**
   * One-to-one navigation property to the [[PicklistOption]] entity.
   */
  contractTypeNav!: PicklistOption;
  /**
   * One-to-one navigation property to the [[FoCostCenter]] entity.
   */
  costCenterNav!: FoCostCenter;
  /**
   * One-to-one navigation property to the [[PicklistOption]] entity.
   */
  countryOfCompanyNav!: PicklistOption;
  /**
   * One-to-one navigation property to the [[PicklistOption]] entity.
   */
  customString11Nav!: PicklistOption;
  /**
   * One-to-one navigation property to the [[PicklistOption]] entity.
   */
  customString4Nav!: PicklistOption;
  /**
   * One-to-one navigation property to the [[PicklistOption]] entity.
   */
  customString6Nav!: PicklistOption;
  /**
   * One-to-one navigation property to the [[FoDepartment]] entity.
   */
  departmentNav!: FoDepartment;
  /**
   * One-to-one navigation property to the [[FoDivision]] entity.
   */
  divisionNav!: FoDivision;
  /**
   * One-to-one navigation property to the [[PicklistOption]] entity.
   */
  eeo1JobCategoryNav!: PicklistOption;
  /**
   * One-to-one navigation property to the [[PicklistOption]] entity.
   */
  eeoClassNav!: PicklistOption;
  /**
   * One-to-one navigation property to the [[PicklistOption]] entity.
   */
  empRelationshipNav!: PicklistOption;
  /**
   * One-to-one navigation property to the [[PicklistOption]] entity.
   */
  emplStatusNav!: PicklistOption;
  /**
   * One-to-one navigation property to the [[PicklistOption]] entity.
   */
  employeeClassNav!: PicklistOption;
  /**
   * One-to-one navigation property to the [[EmpEmployment]] entity.
   */
  employmentNav!: EmpEmployment;
  /**
   * One-to-one navigation property to the [[PicklistOption]] entity.
   */
  employmentTypeNav!: PicklistOption;
  /**
   * One-to-one navigation property to the [[PicklistOption]] entity.
   */
  eventNav!: PicklistOption;
  /**
   * One-to-one navigation property to the [[FoEventReason]] entity.
   */
  eventReasonNav!: FoEventReason;
  /**
   * One-to-one navigation property to the [[PicklistOption]] entity.
   */
  flsaStatusNav!: PicklistOption;
  /**
   * One-to-one navigation property to the [[PicklistOption]] entity.
   */
  harmfulAgentExposureNav!: PicklistOption;
  /**
   * One-to-one navigation property to the [[HolidayCalendar]] entity.
   */
  holidayCalendarCodeNav!: HolidayCalendar;
  /**
   * One-to-one navigation property to the [[FoJobCode]] entity.
   */
  jobCodeNav!: FoJobCode;
  /**
   * One-to-one navigation property to the [[FoLocation]] entity.
   */
  locationNav!: FoLocation;
  /**
   * One-to-one navigation property to the [[EmpEmployment]] entity.
   */
  managerEmploymentNav!: EmpEmployment;
  /**
   * One-to-one navigation property to the [[User]] entity.
   */
  managerUserNav!: User;
  /**
   * One-to-one navigation property to the [[PicklistOption]] entity.
   */
  noticePeriodNav!: PicklistOption;
  /**
   * One-to-one navigation property to the [[PicklistOption]] entity.
   */
  occupationalLevelsNav!: PicklistOption;
  /**
   * One-to-one navigation property to the [[FoPayGrade]] entity.
   */
  payGradeNav!: FoPayGrade;
  /**
   * One-to-one navigation property to the [[PayScaleArea]] entity.
   */
  payScaleAreaNav!: PayScaleArea;
  /**
   * One-to-one navigation property to the [[PayScaleGroup]] entity.
   */
  payScaleGroupNav!: PayScaleGroup;
  /**
   * One-to-one navigation property to the [[PayScaleLevel]] entity.
   */
  payScaleLevelNav!: PayScaleLevel;
  /**
   * One-to-one navigation property to the [[PayScaleType]] entity.
   */
  payScaleTypeNav!: PayScaleType;
  /**
   * One-to-one navigation property to the [[PicklistOption]] entity.
   */
  periodIndicatorNav!: PicklistOption;
  /**
   * One-to-one navigation property to the [[Position]] entity.
   */
  positionNav!: Position;
  /**
   * One-to-one navigation property to the [[PicklistOption]] entity.
   */
  probationaryPeriodMeasureNav!: PicklistOption;
  /**
   * One-to-one navigation property to the [[TimeTypeProfile]] entity.
   */
  timeTypeProfileCodeNav!: TimeTypeProfile;
  /**
   * One-to-one navigation property to the [[User]] entity.
   */
  userNav!: User;
  /**
   * One-to-one navigation property to the [[WfRequest]] entity.
   */
  wfRequestNav!: WfRequest;
  /**
   * One-to-one navigation property to the [[PicklistOption]] entity.
   */
  workerCategoryNav!: PicklistOption;
  /**
   * One-to-one navigation property to the [[WorkSchedule]] entity.
   */
  workscheduleCodeNav!: WorkSchedule;

  /**
   * Returns an entity builder to construct instances `EmpJob`.
   * @returns A builder that constructs instances of entity type `EmpJob`.
   */
  static builder(): EntityBuilderType<EmpJob, EmpJobTypeForceMandatory> {
    return Entity.entityBuilder(EmpJob);
  }

  /**
   * Returns a request builder to construct requests for operations on the `EmpJob` entity type.
   * @returns A `EmpJob` request builder.
   */
  static requestBuilder(): EmpJobRequestBuilder {
    return new EmpJobRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `EmpJob`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `EmpJob`.
   */
  static customField(fieldName: string): CustomField<EmpJob> {
    return Entity.customFieldSelector(fieldName, EmpJob);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
}

import { FoBusinessUnit, FoBusinessUnitType } from './FoBusinessUnit';
import { PicklistOption, PicklistOptionType } from './PicklistOption';
import { FoCompany, FoCompanyType } from './FoCompany';
import { FoCostCenter, FoCostCenterType } from './FoCostCenter';
import { FoDepartment, FoDepartmentType } from './FoDepartment';
import { FoDivision, FoDivisionType } from './FoDivision';
import { EmpEmployment, EmpEmploymentType } from './EmpEmployment';
import { FoEventReason, FoEventReasonType } from './FoEventReason';
import { HolidayCalendar, HolidayCalendarType } from './HolidayCalendar';
import { FoJobCode, FoJobCodeType } from './FoJobCode';
import { FoLocation, FoLocationType } from './FoLocation';
import { User, UserType } from './User';
import { FoPayGrade, FoPayGradeType } from './FoPayGrade';
import { PayScaleArea, PayScaleAreaType } from './PayScaleArea';
import { PayScaleGroup, PayScaleGroupType } from './PayScaleGroup';
import { PayScaleLevel, PayScaleLevelType } from './PayScaleLevel';
import { PayScaleType, PayScaleTypeType } from './PayScaleType';
import { Position, PositionType } from './Position';
import { TimeTypeProfile, TimeTypeProfileType } from './TimeTypeProfile';
import { WfRequest, WfRequestType } from './WfRequest';
import { WorkSchedule, WorkScheduleType } from './WorkSchedule';

export interface EmpJobType {
  assedicCertInitialStateNum?: BigNumber;
  assedicCertObjectNum?: BigNumber;
  attachment?: string;
  attachmentFileName?: string;
  attachmentFileSize?: BigNumber;
  attachmentFileType?: string;
  attachmentId?: string;
  attachmentMimeType?: string;
  attachmentStatus?: BigNumber;
  businessUnit?: string;
  calcMethodIndicator?: boolean;
  commitmentIndicator?: string;
  company?: string;
  continuedSicknessPayMeasure?: string;
  continuedSicknessPayPeriod?: BigNumber;
  contractEndDate?: Moment;
  contractReferenceForAed?: string;
  contractType?: string;
  corporation?: string;
  costCenter?: string;
  countryOfCompany?: string;
  createdBy?: string;
  createdDateTime?: Moment;
  createdOn?: Moment;
  customString11?: string;
  customString3?: string;
  customString4?: string;
  customString5?: string;
  customString6?: string;
  customString7?: string;
  customString8?: string;
  customString9?: string;
  department?: string;
  division?: string;
  eeo1JobCategory?: string;
  eeo4JobCategory?: string;
  eeo5JobCategory?: string;
  eeo6JobCategory?: string;
  eeoClass?: string;
  electoralCollegeForLaborCourt?: string;
  electoralCollegeForWorkersRepresentatives?: string;
  electoralCollegeForWorksCouncil?: string;
  empRelationship?: string;
  emplStatus?: string;
  employeeClass?: string;
  employmentType?: string;
  endDate?: Moment;
  entryIntoGroup?: Moment;
  event?: string;
  eventReason?: string;
  exclExecutiveSector?: boolean;
  expectedReturnDate?: Moment;
  familyRelationshipWithEmployer?: string;
  fgtsDate?: Moment;
  fgtsOptant?: boolean;
  fgtsPercent?: number;
  flsaStatus?: string;
  fte?: number;
  harmfulAgentExposure?: string;
  hazard?: boolean;
  healthRisk?: boolean;
  holidayCalendarCode?: string;
  initialEntryDate?: Moment;
  isCompetitionClauseActive?: boolean;
  isSideLineJobAllowed?: boolean;
  jobCode?: string;
  jobTitle?: string;
  laborCourtSector?: string;
  laborProtection?: boolean;
  lastModifiedBy?: string;
  lastModifiedDateTime?: Moment;
  lastModifiedOn?: Moment;
  localJobTitle?: string;
  location?: string;
  managerId?: string;
  mandatoryRange?: boolean;
  noticePeriod?: string;
  noticePeriodStartDate?: Moment;
  occupationalLevels?: string;
  operation?: string;
  payGrade?: string;
  payScaleArea?: string;
  payScaleGroup?: string;
  payScaleLevel?: string;
  payScaleType?: string;
  pcfm?: boolean;
  pensionProtection?: boolean;
  periodIndicator?: string;
  permitIndicator?: boolean;
  position?: string;
  positionEntryDate?: Moment;
  probationPeriodEndDate?: Moment;
  probationaryPeriod?: BigNumber;
  probationaryPeriodMeasure?: string;
  retired?: boolean;
  seqNumber: BigNumber;
  sickPaySupplement?: string;
  standardHours?: number;
  startDate: Moment;
  teachersPension?: boolean;
  timeTypeProfileCode?: string;
  timezone?: string;
  travelDistance?: number;
  tupeOrgNumber?: string;
  userId: string;
  workLocation?: string;
  workPermitExpiry?: Moment;
  workerCategory?: string;
  workingTimeDirective?: boolean;
  workscheduleCode?: string;
  wtdHoursLimit?: string;
  businessUnitNav: FoBusinessUnitType;
  commitmentIndicatorNav: PicklistOptionType;
  companyNav: FoCompanyType;
  continuedSicknessPayMeasureNav: PicklistOptionType;
  contractTypeNav: PicklistOptionType;
  costCenterNav: FoCostCenterType;
  countryOfCompanyNav: PicklistOptionType;
  customString11Nav: PicklistOptionType;
  customString4Nav: PicklistOptionType;
  customString6Nav: PicklistOptionType;
  departmentNav: FoDepartmentType;
  divisionNav: FoDivisionType;
  eeo1JobCategoryNav: PicklistOptionType;
  eeoClassNav: PicklistOptionType;
  empRelationshipNav: PicklistOptionType;
  emplStatusNav: PicklistOptionType;
  employeeClassNav: PicklistOptionType;
  employmentNav: EmpEmploymentType;
  employmentTypeNav: PicklistOptionType;
  eventNav: PicklistOptionType;
  eventReasonNav: FoEventReasonType;
  flsaStatusNav: PicklistOptionType;
  harmfulAgentExposureNav: PicklistOptionType;
  holidayCalendarCodeNav: HolidayCalendarType;
  jobCodeNav: FoJobCodeType;
  locationNav: FoLocationType;
  managerEmploymentNav: EmpEmploymentType;
  managerUserNav: UserType;
  noticePeriodNav: PicklistOptionType;
  occupationalLevelsNav: PicklistOptionType;
  payGradeNav: FoPayGradeType;
  payScaleAreaNav: PayScaleAreaType;
  payScaleGroupNav: PayScaleGroupType;
  payScaleLevelNav: PayScaleLevelType;
  payScaleTypeNav: PayScaleTypeType;
  periodIndicatorNav: PicklistOptionType;
  positionNav: PositionType;
  probationaryPeriodMeasureNav: PicklistOptionType;
  timeTypeProfileCodeNav: TimeTypeProfileType;
  userNav: UserType;
  wfRequestNav: WfRequestType;
  workerCategoryNav: PicklistOptionType;
  workscheduleCodeNav: WorkScheduleType;
}

export interface EmpJobTypeForceMandatory {
  assedicCertInitialStateNum: BigNumber;
  assedicCertObjectNum: BigNumber;
  attachment: string;
  attachmentFileName: string;
  attachmentFileSize: BigNumber;
  attachmentFileType: string;
  attachmentId: string;
  attachmentMimeType: string;
  attachmentStatus: BigNumber;
  businessUnit: string;
  calcMethodIndicator: boolean;
  commitmentIndicator: string;
  company: string;
  continuedSicknessPayMeasure: string;
  continuedSicknessPayPeriod: BigNumber;
  contractEndDate: Moment;
  contractReferenceForAed: string;
  contractType: string;
  corporation: string;
  costCenter: string;
  countryOfCompany: string;
  createdBy: string;
  createdDateTime: Moment;
  createdOn: Moment;
  customString11: string;
  customString3: string;
  customString4: string;
  customString5: string;
  customString6: string;
  customString7: string;
  customString8: string;
  customString9: string;
  department: string;
  division: string;
  eeo1JobCategory: string;
  eeo4JobCategory: string;
  eeo5JobCategory: string;
  eeo6JobCategory: string;
  eeoClass: string;
  electoralCollegeForLaborCourt: string;
  electoralCollegeForWorkersRepresentatives: string;
  electoralCollegeForWorksCouncil: string;
  empRelationship: string;
  emplStatus: string;
  employeeClass: string;
  employmentType: string;
  endDate: Moment;
  entryIntoGroup: Moment;
  event: string;
  eventReason: string;
  exclExecutiveSector: boolean;
  expectedReturnDate: Moment;
  familyRelationshipWithEmployer: string;
  fgtsDate: Moment;
  fgtsOptant: boolean;
  fgtsPercent: number;
  flsaStatus: string;
  fte: number;
  harmfulAgentExposure: string;
  hazard: boolean;
  healthRisk: boolean;
  holidayCalendarCode: string;
  initialEntryDate: Moment;
  isCompetitionClauseActive: boolean;
  isSideLineJobAllowed: boolean;
  jobCode: string;
  jobTitle: string;
  laborCourtSector: string;
  laborProtection: boolean;
  lastModifiedBy: string;
  lastModifiedDateTime: Moment;
  lastModifiedOn: Moment;
  localJobTitle: string;
  location: string;
  managerId: string;
  mandatoryRange: boolean;
  noticePeriod: string;
  noticePeriodStartDate: Moment;
  occupationalLevels: string;
  operation: string;
  payGrade: string;
  payScaleArea: string;
  payScaleGroup: string;
  payScaleLevel: string;
  payScaleType: string;
  pcfm: boolean;
  pensionProtection: boolean;
  periodIndicator: string;
  permitIndicator: boolean;
  position: string;
  positionEntryDate: Moment;
  probationPeriodEndDate: Moment;
  probationaryPeriod: BigNumber;
  probationaryPeriodMeasure: string;
  retired: boolean;
  seqNumber: BigNumber;
  sickPaySupplement: string;
  standardHours: number;
  startDate: Moment;
  teachersPension: boolean;
  timeTypeProfileCode: string;
  timezone: string;
  travelDistance: number;
  tupeOrgNumber: string;
  userId: string;
  workLocation: string;
  workPermitExpiry: Moment;
  workerCategory: string;
  workingTimeDirective: boolean;
  workscheduleCode: string;
  wtdHoursLimit: string;
  businessUnitNav: FoBusinessUnitType;
  commitmentIndicatorNav: PicklistOptionType;
  companyNav: FoCompanyType;
  continuedSicknessPayMeasureNav: PicklistOptionType;
  contractTypeNav: PicklistOptionType;
  costCenterNav: FoCostCenterType;
  countryOfCompanyNav: PicklistOptionType;
  customString11Nav: PicklistOptionType;
  customString4Nav: PicklistOptionType;
  customString6Nav: PicklistOptionType;
  departmentNav: FoDepartmentType;
  divisionNav: FoDivisionType;
  eeo1JobCategoryNav: PicklistOptionType;
  eeoClassNav: PicklistOptionType;
  empRelationshipNav: PicklistOptionType;
  emplStatusNav: PicklistOptionType;
  employeeClassNav: PicklistOptionType;
  employmentNav: EmpEmploymentType;
  employmentTypeNav: PicklistOptionType;
  eventNav: PicklistOptionType;
  eventReasonNav: FoEventReasonType;
  flsaStatusNav: PicklistOptionType;
  harmfulAgentExposureNav: PicklistOptionType;
  holidayCalendarCodeNav: HolidayCalendarType;
  jobCodeNav: FoJobCodeType;
  locationNav: FoLocationType;
  managerEmploymentNav: EmpEmploymentType;
  managerUserNav: UserType;
  noticePeriodNav: PicklistOptionType;
  occupationalLevelsNav: PicklistOptionType;
  payGradeNav: FoPayGradeType;
  payScaleAreaNav: PayScaleAreaType;
  payScaleGroupNav: PayScaleGroupType;
  payScaleLevelNav: PayScaleLevelType;
  payScaleTypeNav: PayScaleTypeType;
  periodIndicatorNav: PicklistOptionType;
  positionNav: PositionType;
  probationaryPeriodMeasureNav: PicklistOptionType;
  timeTypeProfileCodeNav: TimeTypeProfileType;
  userNav: UserType;
  wfRequestNav: WfRequestType;
  workerCategoryNav: PicklistOptionType;
  workscheduleCodeNav: WorkScheduleType;
}

export namespace EmpJob {
  /**
   * Static representation of the [[assedicCertInitialStateNum]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ASSEDIC_CERT_INITIAL_STATE_NUM: BigNumberField<EmpJob> = new BigNumberField('assedicCertInitialStateNum', EmpJob, 'Edm.Int64');
  /**
   * Static representation of the [[assedicCertObjectNum]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ASSEDIC_CERT_OBJECT_NUM: BigNumberField<EmpJob> = new BigNumberField('assedicCertObjectNum', EmpJob, 'Edm.Int64');
  /**
   * Static representation of the [[attachment]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ATTACHMENT: BinaryField<EmpJob> = new BinaryField('attachment', EmpJob, 'Edm.Binary');
  /**
   * Static representation of the [[attachmentFileName]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ATTACHMENT_FILE_NAME: StringField<EmpJob> = new StringField('attachmentFileName', EmpJob, 'Edm.String');
  /**
   * Static representation of the [[attachmentFileSize]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ATTACHMENT_FILE_SIZE: BigNumberField<EmpJob> = new BigNumberField('attachmentFileSize', EmpJob, 'Edm.Decimal');
  /**
   * Static representation of the [[attachmentFileType]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ATTACHMENT_FILE_TYPE: StringField<EmpJob> = new StringField('attachmentFileType', EmpJob, 'Edm.String');
  /**
   * Static representation of the [[attachmentId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ATTACHMENT_ID: StringField<EmpJob> = new StringField('attachmentId', EmpJob, 'Edm.String');
  /**
   * Static representation of the [[attachmentMimeType]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ATTACHMENT_MIME_TYPE: StringField<EmpJob> = new StringField('attachmentMimeType', EmpJob, 'Edm.String');
  /**
   * Static representation of the [[attachmentStatus]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ATTACHMENT_STATUS: BigNumberField<EmpJob> = new BigNumberField('attachmentStatus', EmpJob, 'Edm.Decimal');
  /**
   * Static representation of the [[businessUnit]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BUSINESS_UNIT: StringField<EmpJob> = new StringField('businessUnit', EmpJob, 'Edm.String');
  /**
   * Static representation of the [[calcMethodIndicator]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CALC_METHOD_INDICATOR: BooleanField<EmpJob> = new BooleanField('calcMethodIndicator', EmpJob, 'Edm.Boolean');
  /**
   * Static representation of the [[commitmentIndicator]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const COMMITMENT_INDICATOR: StringField<EmpJob> = new StringField('commitmentIndicator', EmpJob, 'Edm.String');
  /**
   * Static representation of the [[company]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const COMPANY: StringField<EmpJob> = new StringField('company', EmpJob, 'Edm.String');
  /**
   * Static representation of the [[continuedSicknessPayMeasure]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CONTINUED_SICKNESS_PAY_MEASURE: StringField<EmpJob> = new StringField('continuedSicknessPayMeasure', EmpJob, 'Edm.String');
  /**
   * Static representation of the [[continuedSicknessPayPeriod]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CONTINUED_SICKNESS_PAY_PERIOD: BigNumberField<EmpJob> = new BigNumberField('continuedSicknessPayPeriod', EmpJob, 'Edm.Int64');
  /**
   * Static representation of the [[contractEndDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CONTRACT_END_DATE: DateField<EmpJob> = new DateField('contractEndDate', EmpJob, 'Edm.DateTime');
  /**
   * Static representation of the [[contractReferenceForAed]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CONTRACT_REFERENCE_FOR_AED: StringField<EmpJob> = new StringField('contractReferenceForAed', EmpJob, 'Edm.String');
  /**
   * Static representation of the [[contractType]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CONTRACT_TYPE: StringField<EmpJob> = new StringField('contractType', EmpJob, 'Edm.String');
  /**
   * Static representation of the [[corporation]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CORPORATION: StringField<EmpJob> = new StringField('corporation', EmpJob, 'Edm.String');
  /**
   * Static representation of the [[costCenter]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const COST_CENTER: StringField<EmpJob> = new StringField('costCenter', EmpJob, 'Edm.String');
  /**
   * Static representation of the [[countryOfCompany]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const COUNTRY_OF_COMPANY: StringField<EmpJob> = new StringField('countryOfCompany', EmpJob, 'Edm.String');
  /**
   * Static representation of the [[createdBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_BY: StringField<EmpJob> = new StringField('createdBy', EmpJob, 'Edm.String');
  /**
   * Static representation of the [[createdDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_DATE_TIME: DateField<EmpJob> = new DateField('createdDateTime', EmpJob, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[createdOn]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_ON: DateField<EmpJob> = new DateField('createdOn', EmpJob, 'Edm.DateTime');
  /**
   * Static representation of the [[customString11]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CUSTOM_STRING_11: StringField<EmpJob> = new StringField('customString11', EmpJob, 'Edm.String');
  /**
   * Static representation of the [[customString3]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CUSTOM_STRING_3: StringField<EmpJob> = new StringField('customString3', EmpJob, 'Edm.String');
  /**
   * Static representation of the [[customString4]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CUSTOM_STRING_4: StringField<EmpJob> = new StringField('customString4', EmpJob, 'Edm.String');
  /**
   * Static representation of the [[customString5]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CUSTOM_STRING_5: StringField<EmpJob> = new StringField('customString5', EmpJob, 'Edm.String');
  /**
   * Static representation of the [[customString6]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CUSTOM_STRING_6: StringField<EmpJob> = new StringField('customString6', EmpJob, 'Edm.String');
  /**
   * Static representation of the [[customString7]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CUSTOM_STRING_7: StringField<EmpJob> = new StringField('customString7', EmpJob, 'Edm.String');
  /**
   * Static representation of the [[customString8]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CUSTOM_STRING_8: StringField<EmpJob> = new StringField('customString8', EmpJob, 'Edm.String');
  /**
   * Static representation of the [[customString9]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CUSTOM_STRING_9: StringField<EmpJob> = new StringField('customString9', EmpJob, 'Edm.String');
  /**
   * Static representation of the [[department]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DEPARTMENT: StringField<EmpJob> = new StringField('department', EmpJob, 'Edm.String');
  /**
   * Static representation of the [[division]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DIVISION: StringField<EmpJob> = new StringField('division', EmpJob, 'Edm.String');
  /**
   * Static representation of the [[eeo1JobCategory]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EEO_1_JOB_CATEGORY: StringField<EmpJob> = new StringField('eeo1JobCategory', EmpJob, 'Edm.String');
  /**
   * Static representation of the [[eeo4JobCategory]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EEO_4_JOB_CATEGORY: StringField<EmpJob> = new StringField('eeo4JobCategory', EmpJob, 'Edm.String');
  /**
   * Static representation of the [[eeo5JobCategory]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EEO_5_JOB_CATEGORY: StringField<EmpJob> = new StringField('eeo5JobCategory', EmpJob, 'Edm.String');
  /**
   * Static representation of the [[eeo6JobCategory]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EEO_6_JOB_CATEGORY: StringField<EmpJob> = new StringField('eeo6JobCategory', EmpJob, 'Edm.String');
  /**
   * Static representation of the [[eeoClass]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EEO_CLASS: StringField<EmpJob> = new StringField('eeoClass', EmpJob, 'Edm.String');
  /**
   * Static representation of the [[electoralCollegeForLaborCourt]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ELECTORAL_COLLEGE_FOR_LABOR_COURT: StringField<EmpJob> = new StringField('electoralCollegeForLaborCourt', EmpJob, 'Edm.String');
  /**
   * Static representation of the [[electoralCollegeForWorkersRepresentatives]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ELECTORAL_COLLEGE_FOR_WORKERS_REPRESENTATIVES: StringField<EmpJob> = new StringField('electoralCollegeForWorkersRepresentatives', EmpJob, 'Edm.String');
  /**
   * Static representation of the [[electoralCollegeForWorksCouncil]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ELECTORAL_COLLEGE_FOR_WORKS_COUNCIL: StringField<EmpJob> = new StringField('electoralCollegeForWorksCouncil', EmpJob, 'Edm.String');
  /**
   * Static representation of the [[empRelationship]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EMP_RELATIONSHIP: StringField<EmpJob> = new StringField('empRelationship', EmpJob, 'Edm.String');
  /**
   * Static representation of the [[emplStatus]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EMPL_STATUS: StringField<EmpJob> = new StringField('emplStatus', EmpJob, 'Edm.String');
  /**
   * Static representation of the [[employeeClass]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EMPLOYEE_CLASS: StringField<EmpJob> = new StringField('employeeClass', EmpJob, 'Edm.String');
  /**
   * Static representation of the [[employmentType]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EMPLOYMENT_TYPE: StringField<EmpJob> = new StringField('employmentType', EmpJob, 'Edm.String');
  /**
   * Static representation of the [[endDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const END_DATE: DateField<EmpJob> = new DateField('endDate', EmpJob, 'Edm.DateTime');
  /**
   * Static representation of the [[entryIntoGroup]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ENTRY_INTO_GROUP: DateField<EmpJob> = new DateField('entryIntoGroup', EmpJob, 'Edm.DateTime');
  /**
   * Static representation of the [[event]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EVENT: StringField<EmpJob> = new StringField('event', EmpJob, 'Edm.String');
  /**
   * Static representation of the [[eventReason]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EVENT_REASON: StringField<EmpJob> = new StringField('eventReason', EmpJob, 'Edm.String');
  /**
   * Static representation of the [[exclExecutiveSector]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXCL_EXECUTIVE_SECTOR: BooleanField<EmpJob> = new BooleanField('exclExecutiveSector', EmpJob, 'Edm.Boolean');
  /**
   * Static representation of the [[expectedReturnDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXPECTED_RETURN_DATE: DateField<EmpJob> = new DateField('expectedReturnDate', EmpJob, 'Edm.DateTime');
  /**
   * Static representation of the [[familyRelationshipWithEmployer]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FAMILY_RELATIONSHIP_WITH_EMPLOYER: StringField<EmpJob> = new StringField('familyRelationshipWithEmployer', EmpJob, 'Edm.String');
  /**
   * Static representation of the [[fgtsDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FGTS_DATE: DateField<EmpJob> = new DateField('fgtsDate', EmpJob, 'Edm.DateTime');
  /**
   * Static representation of the [[fgtsOptant]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FGTS_OPTANT: BooleanField<EmpJob> = new BooleanField('fgtsOptant', EmpJob, 'Edm.Boolean');
  /**
   * Static representation of the [[fgtsPercent]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FGTS_PERCENT: NumberField<EmpJob> = new NumberField('fgtsPercent', EmpJob, 'Edm.Double');
  /**
   * Static representation of the [[flsaStatus]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FLSA_STATUS: StringField<EmpJob> = new StringField('flsaStatus', EmpJob, 'Edm.String');
  /**
   * Static representation of the [[fte]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FTE: NumberField<EmpJob> = new NumberField('fte', EmpJob, 'Edm.Double');
  /**
   * Static representation of the [[harmfulAgentExposure]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const HARMFUL_AGENT_EXPOSURE: StringField<EmpJob> = new StringField('harmfulAgentExposure', EmpJob, 'Edm.String');
  /**
   * Static representation of the [[hazard]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const HAZARD: BooleanField<EmpJob> = new BooleanField('hazard', EmpJob, 'Edm.Boolean');
  /**
   * Static representation of the [[healthRisk]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const HEALTH_RISK: BooleanField<EmpJob> = new BooleanField('healthRisk', EmpJob, 'Edm.Boolean');
  /**
   * Static representation of the [[holidayCalendarCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const HOLIDAY_CALENDAR_CODE: StringField<EmpJob> = new StringField('holidayCalendarCode', EmpJob, 'Edm.String');
  /**
   * Static representation of the [[initialEntryDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const INITIAL_ENTRY_DATE: DateField<EmpJob> = new DateField('initialEntryDate', EmpJob, 'Edm.DateTime');
  /**
   * Static representation of the [[isCompetitionClauseActive]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const IS_COMPETITION_CLAUSE_ACTIVE: BooleanField<EmpJob> = new BooleanField('isCompetitionClauseActive', EmpJob, 'Edm.Boolean');
  /**
   * Static representation of the [[isSideLineJobAllowed]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const IS_SIDE_LINE_JOB_ALLOWED: BooleanField<EmpJob> = new BooleanField('isSideLineJobAllowed', EmpJob, 'Edm.Boolean');
  /**
   * Static representation of the [[jobCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const JOB_CODE: StringField<EmpJob> = new StringField('jobCode', EmpJob, 'Edm.String');
  /**
   * Static representation of the [[jobTitle]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const JOB_TITLE: StringField<EmpJob> = new StringField('jobTitle', EmpJob, 'Edm.String');
  /**
   * Static representation of the [[laborCourtSector]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LABOR_COURT_SECTOR: StringField<EmpJob> = new StringField('laborCourtSector', EmpJob, 'Edm.String');
  /**
   * Static representation of the [[laborProtection]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LABOR_PROTECTION: BooleanField<EmpJob> = new BooleanField('laborProtection', EmpJob, 'Edm.Boolean');
  /**
   * Static representation of the [[lastModifiedBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_BY: StringField<EmpJob> = new StringField('lastModifiedBy', EmpJob, 'Edm.String');
  /**
   * Static representation of the [[lastModifiedDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_DATE_TIME: DateField<EmpJob> = new DateField('lastModifiedDateTime', EmpJob, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[lastModifiedOn]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_ON: DateField<EmpJob> = new DateField('lastModifiedOn', EmpJob, 'Edm.DateTime');
  /**
   * Static representation of the [[localJobTitle]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LOCAL_JOB_TITLE: StringField<EmpJob> = new StringField('localJobTitle', EmpJob, 'Edm.String');
  /**
   * Static representation of the [[location]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LOCATION: StringField<EmpJob> = new StringField('location', EmpJob, 'Edm.String');
  /**
   * Static representation of the [[managerId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MANAGER_ID: StringField<EmpJob> = new StringField('managerId', EmpJob, 'Edm.String');
  /**
   * Static representation of the [[mandatoryRange]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MANDATORY_RANGE: BooleanField<EmpJob> = new BooleanField('mandatoryRange', EmpJob, 'Edm.Boolean');
  /**
   * Static representation of the [[noticePeriod]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NOTICE_PERIOD: StringField<EmpJob> = new StringField('noticePeriod', EmpJob, 'Edm.String');
  /**
   * Static representation of the [[noticePeriodStartDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NOTICE_PERIOD_START_DATE: DateField<EmpJob> = new DateField('noticePeriodStartDate', EmpJob, 'Edm.DateTime');
  /**
   * Static representation of the [[occupationalLevels]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const OCCUPATIONAL_LEVELS: StringField<EmpJob> = new StringField('occupationalLevels', EmpJob, 'Edm.String');
  /**
   * Static representation of the [[operation]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const OPERATION: StringField<EmpJob> = new StringField('operation', EmpJob, 'Edm.String');
  /**
   * Static representation of the [[payGrade]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PAY_GRADE: StringField<EmpJob> = new StringField('payGrade', EmpJob, 'Edm.String');
  /**
   * Static representation of the [[payScaleArea]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PAY_SCALE_AREA: StringField<EmpJob> = new StringField('payScaleArea', EmpJob, 'Edm.String');
  /**
   * Static representation of the [[payScaleGroup]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PAY_SCALE_GROUP: StringField<EmpJob> = new StringField('payScaleGroup', EmpJob, 'Edm.String');
  /**
   * Static representation of the [[payScaleLevel]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PAY_SCALE_LEVEL: StringField<EmpJob> = new StringField('payScaleLevel', EmpJob, 'Edm.String');
  /**
   * Static representation of the [[payScaleType]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PAY_SCALE_TYPE: StringField<EmpJob> = new StringField('payScaleType', EmpJob, 'Edm.String');
  /**
   * Static representation of the [[pcfm]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PCFM: BooleanField<EmpJob> = new BooleanField('pcfm', EmpJob, 'Edm.Boolean');
  /**
   * Static representation of the [[pensionProtection]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PENSION_PROTECTION: BooleanField<EmpJob> = new BooleanField('pensionProtection', EmpJob, 'Edm.Boolean');
  /**
   * Static representation of the [[periodIndicator]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PERIOD_INDICATOR: StringField<EmpJob> = new StringField('periodIndicator', EmpJob, 'Edm.String');
  /**
   * Static representation of the [[permitIndicator]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PERMIT_INDICATOR: BooleanField<EmpJob> = new BooleanField('permitIndicator', EmpJob, 'Edm.Boolean');
  /**
   * Static representation of the [[position]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const POSITION: StringField<EmpJob> = new StringField('position', EmpJob, 'Edm.String');
  /**
   * Static representation of the [[positionEntryDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const POSITION_ENTRY_DATE: DateField<EmpJob> = new DateField('positionEntryDate', EmpJob, 'Edm.DateTime');
  /**
   * Static representation of the [[probationPeriodEndDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PROBATION_PERIOD_END_DATE: DateField<EmpJob> = new DateField('probationPeriodEndDate', EmpJob, 'Edm.DateTime');
  /**
   * Static representation of the [[probationaryPeriod]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PROBATIONARY_PERIOD: BigNumberField<EmpJob> = new BigNumberField('probationaryPeriod', EmpJob, 'Edm.Int64');
  /**
   * Static representation of the [[probationaryPeriodMeasure]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PROBATIONARY_PERIOD_MEASURE: StringField<EmpJob> = new StringField('probationaryPeriodMeasure', EmpJob, 'Edm.String');
  /**
   * Static representation of the [[retired]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const RETIRED: BooleanField<EmpJob> = new BooleanField('retired', EmpJob, 'Edm.Boolean');
  /**
   * Static representation of the [[seqNumber]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SEQ_NUMBER: BigNumberField<EmpJob> = new BigNumberField('seqNumber', EmpJob, 'Edm.Int64');
  /**
   * Static representation of the [[sickPaySupplement]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SICK_PAY_SUPPLEMENT: StringField<EmpJob> = new StringField('sickPaySupplement', EmpJob, 'Edm.String');
  /**
   * Static representation of the [[standardHours]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const STANDARD_HOURS: NumberField<EmpJob> = new NumberField('standardHours', EmpJob, 'Edm.Double');
  /**
   * Static representation of the [[startDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const START_DATE: DateField<EmpJob> = new DateField('startDate', EmpJob, 'Edm.DateTime');
  /**
   * Static representation of the [[teachersPension]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TEACHERS_PENSION: BooleanField<EmpJob> = new BooleanField('teachersPension', EmpJob, 'Edm.Boolean');
  /**
   * Static representation of the [[timeTypeProfileCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TIME_TYPE_PROFILE_CODE: StringField<EmpJob> = new StringField('timeTypeProfileCode', EmpJob, 'Edm.String');
  /**
   * Static representation of the [[timezone]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TIMEZONE: StringField<EmpJob> = new StringField('timezone', EmpJob, 'Edm.String');
  /**
   * Static representation of the [[travelDistance]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TRAVEL_DISTANCE: NumberField<EmpJob> = new NumberField('travelDistance', EmpJob, 'Edm.Double');
  /**
   * Static representation of the [[tupeOrgNumber]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TUPE_ORG_NUMBER: StringField<EmpJob> = new StringField('tupeOrgNumber', EmpJob, 'Edm.String');
  /**
   * Static representation of the [[userId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const USER_ID: StringField<EmpJob> = new StringField('userId', EmpJob, 'Edm.String');
  /**
   * Static representation of the [[workLocation]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const WORK_LOCATION: StringField<EmpJob> = new StringField('workLocation', EmpJob, 'Edm.String');
  /**
   * Static representation of the [[workPermitExpiry]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const WORK_PERMIT_EXPIRY: DateField<EmpJob> = new DateField('workPermitExpiry', EmpJob, 'Edm.DateTime');
  /**
   * Static representation of the [[workerCategory]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const WORKER_CATEGORY: StringField<EmpJob> = new StringField('workerCategory', EmpJob, 'Edm.String');
  /**
   * Static representation of the [[workingTimeDirective]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const WORKING_TIME_DIRECTIVE: BooleanField<EmpJob> = new BooleanField('workingTimeDirective', EmpJob, 'Edm.Boolean');
  /**
   * Static representation of the [[workscheduleCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const WORKSCHEDULE_CODE: StringField<EmpJob> = new StringField('workscheduleCode', EmpJob, 'Edm.String');
  /**
   * Static representation of the [[wtdHoursLimit]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const WTD_HOURS_LIMIT: StringField<EmpJob> = new StringField('wtdHoursLimit', EmpJob, 'Edm.String');
  /**
   * Static representation of the one-to-one navigation property [[businessUnitNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BUSINESS_UNIT_NAV: OneToOneLink<EmpJob, FoBusinessUnit> = new OneToOneLink('businessUnitNav', EmpJob, FoBusinessUnit);
  /**
   * Static representation of the one-to-one navigation property [[commitmentIndicatorNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const COMMITMENT_INDICATOR_NAV: OneToOneLink<EmpJob, PicklistOption> = new OneToOneLink('commitmentIndicatorNav', EmpJob, PicklistOption);
  /**
   * Static representation of the one-to-one navigation property [[companyNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const COMPANY_NAV: OneToOneLink<EmpJob, FoCompany> = new OneToOneLink('companyNav', EmpJob, FoCompany);
  /**
   * Static representation of the one-to-one navigation property [[continuedSicknessPayMeasureNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CONTINUED_SICKNESS_PAY_MEASURE_NAV: OneToOneLink<EmpJob, PicklistOption> = new OneToOneLink('continuedSicknessPayMeasureNav', EmpJob, PicklistOption);
  /**
   * Static representation of the one-to-one navigation property [[contractTypeNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CONTRACT_TYPE_NAV: OneToOneLink<EmpJob, PicklistOption> = new OneToOneLink('contractTypeNav', EmpJob, PicklistOption);
  /**
   * Static representation of the one-to-one navigation property [[costCenterNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const COST_CENTER_NAV: OneToOneLink<EmpJob, FoCostCenter> = new OneToOneLink('costCenterNav', EmpJob, FoCostCenter);
  /**
   * Static representation of the one-to-one navigation property [[countryOfCompanyNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const COUNTRY_OF_COMPANY_NAV: OneToOneLink<EmpJob, PicklistOption> = new OneToOneLink('countryOfCompanyNav', EmpJob, PicklistOption);
  /**
   * Static representation of the one-to-one navigation property [[customString11Nav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CUSTOM_STRING_11_NAV: OneToOneLink<EmpJob, PicklistOption> = new OneToOneLink('customString11Nav', EmpJob, PicklistOption);
  /**
   * Static representation of the one-to-one navigation property [[customString4Nav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CUSTOM_STRING_4_NAV: OneToOneLink<EmpJob, PicklistOption> = new OneToOneLink('customString4Nav', EmpJob, PicklistOption);
  /**
   * Static representation of the one-to-one navigation property [[customString6Nav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CUSTOM_STRING_6_NAV: OneToOneLink<EmpJob, PicklistOption> = new OneToOneLink('customString6Nav', EmpJob, PicklistOption);
  /**
   * Static representation of the one-to-one navigation property [[departmentNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DEPARTMENT_NAV: OneToOneLink<EmpJob, FoDepartment> = new OneToOneLink('departmentNav', EmpJob, FoDepartment);
  /**
   * Static representation of the one-to-one navigation property [[divisionNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DIVISION_NAV: OneToOneLink<EmpJob, FoDivision> = new OneToOneLink('divisionNav', EmpJob, FoDivision);
  /**
   * Static representation of the one-to-one navigation property [[eeo1JobCategoryNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EEO_1_JOB_CATEGORY_NAV: OneToOneLink<EmpJob, PicklistOption> = new OneToOneLink('eeo1JobCategoryNav', EmpJob, PicklistOption);
  /**
   * Static representation of the one-to-one navigation property [[eeoClassNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EEO_CLASS_NAV: OneToOneLink<EmpJob, PicklistOption> = new OneToOneLink('eeoClassNav', EmpJob, PicklistOption);
  /**
   * Static representation of the one-to-one navigation property [[empRelationshipNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EMP_RELATIONSHIP_NAV: OneToOneLink<EmpJob, PicklistOption> = new OneToOneLink('empRelationshipNav', EmpJob, PicklistOption);
  /**
   * Static representation of the one-to-one navigation property [[emplStatusNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EMPL_STATUS_NAV: OneToOneLink<EmpJob, PicklistOption> = new OneToOneLink('emplStatusNav', EmpJob, PicklistOption);
  /**
   * Static representation of the one-to-one navigation property [[employeeClassNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EMPLOYEE_CLASS_NAV: OneToOneLink<EmpJob, PicklistOption> = new OneToOneLink('employeeClassNav', EmpJob, PicklistOption);
  /**
   * Static representation of the one-to-one navigation property [[employmentNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EMPLOYMENT_NAV: OneToOneLink<EmpJob, EmpEmployment> = new OneToOneLink('employmentNav', EmpJob, EmpEmployment);
  /**
   * Static representation of the one-to-one navigation property [[employmentTypeNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EMPLOYMENT_TYPE_NAV: OneToOneLink<EmpJob, PicklistOption> = new OneToOneLink('employmentTypeNav', EmpJob, PicklistOption);
  /**
   * Static representation of the one-to-one navigation property [[eventNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EVENT_NAV: OneToOneLink<EmpJob, PicklistOption> = new OneToOneLink('eventNav', EmpJob, PicklistOption);
  /**
   * Static representation of the one-to-one navigation property [[eventReasonNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EVENT_REASON_NAV: OneToOneLink<EmpJob, FoEventReason> = new OneToOneLink('eventReasonNav', EmpJob, FoEventReason);
  /**
   * Static representation of the one-to-one navigation property [[flsaStatusNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FLSA_STATUS_NAV: OneToOneLink<EmpJob, PicklistOption> = new OneToOneLink('flsaStatusNav', EmpJob, PicklistOption);
  /**
   * Static representation of the one-to-one navigation property [[harmfulAgentExposureNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const HARMFUL_AGENT_EXPOSURE_NAV: OneToOneLink<EmpJob, PicklistOption> = new OneToOneLink('harmfulAgentExposureNav', EmpJob, PicklistOption);
  /**
   * Static representation of the one-to-one navigation property [[holidayCalendarCodeNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const HOLIDAY_CALENDAR_CODE_NAV: OneToOneLink<EmpJob, HolidayCalendar> = new OneToOneLink('holidayCalendarCodeNav', EmpJob, HolidayCalendar);
  /**
   * Static representation of the one-to-one navigation property [[jobCodeNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const JOB_CODE_NAV: OneToOneLink<EmpJob, FoJobCode> = new OneToOneLink('jobCodeNav', EmpJob, FoJobCode);
  /**
   * Static representation of the one-to-one navigation property [[locationNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LOCATION_NAV: OneToOneLink<EmpJob, FoLocation> = new OneToOneLink('locationNav', EmpJob, FoLocation);
  /**
   * Static representation of the one-to-one navigation property [[managerEmploymentNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MANAGER_EMPLOYMENT_NAV: OneToOneLink<EmpJob, EmpEmployment> = new OneToOneLink('managerEmploymentNav', EmpJob, EmpEmployment);
  /**
   * Static representation of the one-to-one navigation property [[managerUserNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MANAGER_USER_NAV: OneToOneLink<EmpJob, User> = new OneToOneLink('managerUserNav', EmpJob, User);
  /**
   * Static representation of the one-to-one navigation property [[noticePeriodNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NOTICE_PERIOD_NAV: OneToOneLink<EmpJob, PicklistOption> = new OneToOneLink('noticePeriodNav', EmpJob, PicklistOption);
  /**
   * Static representation of the one-to-one navigation property [[occupationalLevelsNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const OCCUPATIONAL_LEVELS_NAV: OneToOneLink<EmpJob, PicklistOption> = new OneToOneLink('occupationalLevelsNav', EmpJob, PicklistOption);
  /**
   * Static representation of the one-to-one navigation property [[payGradeNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PAY_GRADE_NAV: OneToOneLink<EmpJob, FoPayGrade> = new OneToOneLink('payGradeNav', EmpJob, FoPayGrade);
  /**
   * Static representation of the one-to-one navigation property [[payScaleAreaNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PAY_SCALE_AREA_NAV: OneToOneLink<EmpJob, PayScaleArea> = new OneToOneLink('payScaleAreaNav', EmpJob, PayScaleArea);
  /**
   * Static representation of the one-to-one navigation property [[payScaleGroupNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PAY_SCALE_GROUP_NAV: OneToOneLink<EmpJob, PayScaleGroup> = new OneToOneLink('payScaleGroupNav', EmpJob, PayScaleGroup);
  /**
   * Static representation of the one-to-one navigation property [[payScaleLevelNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PAY_SCALE_LEVEL_NAV: OneToOneLink<EmpJob, PayScaleLevel> = new OneToOneLink('payScaleLevelNav', EmpJob, PayScaleLevel);
  /**
   * Static representation of the one-to-one navigation property [[payScaleTypeNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PAY_SCALE_TYPE_NAV: OneToOneLink<EmpJob, PayScaleType> = new OneToOneLink('payScaleTypeNav', EmpJob, PayScaleType);
  /**
   * Static representation of the one-to-one navigation property [[periodIndicatorNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PERIOD_INDICATOR_NAV: OneToOneLink<EmpJob, PicklistOption> = new OneToOneLink('periodIndicatorNav', EmpJob, PicklistOption);
  /**
   * Static representation of the one-to-one navigation property [[positionNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const POSITION_NAV: OneToOneLink<EmpJob, Position> = new OneToOneLink('positionNav', EmpJob, Position);
  /**
   * Static representation of the one-to-one navigation property [[probationaryPeriodMeasureNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PROBATIONARY_PERIOD_MEASURE_NAV: OneToOneLink<EmpJob, PicklistOption> = new OneToOneLink('probationaryPeriodMeasureNav', EmpJob, PicklistOption);
  /**
   * Static representation of the one-to-one navigation property [[timeTypeProfileCodeNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TIME_TYPE_PROFILE_CODE_NAV: OneToOneLink<EmpJob, TimeTypeProfile> = new OneToOneLink('timeTypeProfileCodeNav', EmpJob, TimeTypeProfile);
  /**
   * Static representation of the one-to-one navigation property [[userNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const USER_NAV: OneToOneLink<EmpJob, User> = new OneToOneLink('userNav', EmpJob, User);
  /**
   * Static representation of the one-to-one navigation property [[wfRequestNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const WF_REQUEST_NAV: OneToOneLink<EmpJob, WfRequest> = new OneToOneLink('wfRequestNav', EmpJob, WfRequest);
  /**
   * Static representation of the one-to-one navigation property [[workerCategoryNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const WORKER_CATEGORY_NAV: OneToOneLink<EmpJob, PicklistOption> = new OneToOneLink('workerCategoryNav', EmpJob, PicklistOption);
  /**
   * Static representation of the one-to-one navigation property [[workscheduleCodeNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const WORKSCHEDULE_CODE_NAV: OneToOneLink<EmpJob, WorkSchedule> = new OneToOneLink('workscheduleCodeNav', EmpJob, WorkSchedule);
  /**
   * All fields of the EmpJob entity.
   */
  export const _allFields: Array<BigNumberField<EmpJob> | BinaryField<EmpJob> | StringField<EmpJob> | BooleanField<EmpJob> | DateField<EmpJob> | NumberField<EmpJob> | OneToOneLink<EmpJob, FoBusinessUnit> | OneToOneLink<EmpJob, PicklistOption> | OneToOneLink<EmpJob, FoCompany> | OneToOneLink<EmpJob, FoCostCenter> | OneToOneLink<EmpJob, FoDepartment> | OneToOneLink<EmpJob, FoDivision> | OneToOneLink<EmpJob, EmpEmployment> | OneToOneLink<EmpJob, FoEventReason> | OneToOneLink<EmpJob, HolidayCalendar> | OneToOneLink<EmpJob, FoJobCode> | OneToOneLink<EmpJob, FoLocation> | OneToOneLink<EmpJob, User> | OneToOneLink<EmpJob, FoPayGrade> | OneToOneLink<EmpJob, PayScaleArea> | OneToOneLink<EmpJob, PayScaleGroup> | OneToOneLink<EmpJob, PayScaleLevel> | OneToOneLink<EmpJob, PayScaleType> | OneToOneLink<EmpJob, Position> | OneToOneLink<EmpJob, TimeTypeProfile> | OneToOneLink<EmpJob, WfRequest> | OneToOneLink<EmpJob, WorkSchedule>> = [
    EmpJob.ASSEDIC_CERT_INITIAL_STATE_NUM,
    EmpJob.ASSEDIC_CERT_OBJECT_NUM,
    EmpJob.ATTACHMENT,
    EmpJob.ATTACHMENT_FILE_NAME,
    EmpJob.ATTACHMENT_FILE_SIZE,
    EmpJob.ATTACHMENT_FILE_TYPE,
    EmpJob.ATTACHMENT_ID,
    EmpJob.ATTACHMENT_MIME_TYPE,
    EmpJob.ATTACHMENT_STATUS,
    EmpJob.BUSINESS_UNIT,
    EmpJob.CALC_METHOD_INDICATOR,
    EmpJob.COMMITMENT_INDICATOR,
    EmpJob.COMPANY,
    EmpJob.CONTINUED_SICKNESS_PAY_MEASURE,
    EmpJob.CONTINUED_SICKNESS_PAY_PERIOD,
    EmpJob.CONTRACT_END_DATE,
    EmpJob.CONTRACT_REFERENCE_FOR_AED,
    EmpJob.CONTRACT_TYPE,
    EmpJob.CORPORATION,
    EmpJob.COST_CENTER,
    EmpJob.COUNTRY_OF_COMPANY,
    EmpJob.CREATED_BY,
    EmpJob.CREATED_DATE_TIME,
    EmpJob.CREATED_ON,
    EmpJob.CUSTOM_STRING_11,
    EmpJob.CUSTOM_STRING_3,
    EmpJob.CUSTOM_STRING_4,
    EmpJob.CUSTOM_STRING_5,
    EmpJob.CUSTOM_STRING_6,
    EmpJob.CUSTOM_STRING_7,
    EmpJob.CUSTOM_STRING_8,
    EmpJob.CUSTOM_STRING_9,
    EmpJob.DEPARTMENT,
    EmpJob.DIVISION,
    EmpJob.EEO_1_JOB_CATEGORY,
    EmpJob.EEO_4_JOB_CATEGORY,
    EmpJob.EEO_5_JOB_CATEGORY,
    EmpJob.EEO_6_JOB_CATEGORY,
    EmpJob.EEO_CLASS,
    EmpJob.ELECTORAL_COLLEGE_FOR_LABOR_COURT,
    EmpJob.ELECTORAL_COLLEGE_FOR_WORKERS_REPRESENTATIVES,
    EmpJob.ELECTORAL_COLLEGE_FOR_WORKS_COUNCIL,
    EmpJob.EMP_RELATIONSHIP,
    EmpJob.EMPL_STATUS,
    EmpJob.EMPLOYEE_CLASS,
    EmpJob.EMPLOYMENT_TYPE,
    EmpJob.END_DATE,
    EmpJob.ENTRY_INTO_GROUP,
    EmpJob.EVENT,
    EmpJob.EVENT_REASON,
    EmpJob.EXCL_EXECUTIVE_SECTOR,
    EmpJob.EXPECTED_RETURN_DATE,
    EmpJob.FAMILY_RELATIONSHIP_WITH_EMPLOYER,
    EmpJob.FGTS_DATE,
    EmpJob.FGTS_OPTANT,
    EmpJob.FGTS_PERCENT,
    EmpJob.FLSA_STATUS,
    EmpJob.FTE,
    EmpJob.HARMFUL_AGENT_EXPOSURE,
    EmpJob.HAZARD,
    EmpJob.HEALTH_RISK,
    EmpJob.HOLIDAY_CALENDAR_CODE,
    EmpJob.INITIAL_ENTRY_DATE,
    EmpJob.IS_COMPETITION_CLAUSE_ACTIVE,
    EmpJob.IS_SIDE_LINE_JOB_ALLOWED,
    EmpJob.JOB_CODE,
    EmpJob.JOB_TITLE,
    EmpJob.LABOR_COURT_SECTOR,
    EmpJob.LABOR_PROTECTION,
    EmpJob.LAST_MODIFIED_BY,
    EmpJob.LAST_MODIFIED_DATE_TIME,
    EmpJob.LAST_MODIFIED_ON,
    EmpJob.LOCAL_JOB_TITLE,
    EmpJob.LOCATION,
    EmpJob.MANAGER_ID,
    EmpJob.MANDATORY_RANGE,
    EmpJob.NOTICE_PERIOD,
    EmpJob.NOTICE_PERIOD_START_DATE,
    EmpJob.OCCUPATIONAL_LEVELS,
    EmpJob.OPERATION,
    EmpJob.PAY_GRADE,
    EmpJob.PAY_SCALE_AREA,
    EmpJob.PAY_SCALE_GROUP,
    EmpJob.PAY_SCALE_LEVEL,
    EmpJob.PAY_SCALE_TYPE,
    EmpJob.PCFM,
    EmpJob.PENSION_PROTECTION,
    EmpJob.PERIOD_INDICATOR,
    EmpJob.PERMIT_INDICATOR,
    EmpJob.POSITION,
    EmpJob.POSITION_ENTRY_DATE,
    EmpJob.PROBATION_PERIOD_END_DATE,
    EmpJob.PROBATIONARY_PERIOD,
    EmpJob.PROBATIONARY_PERIOD_MEASURE,
    EmpJob.RETIRED,
    EmpJob.SEQ_NUMBER,
    EmpJob.SICK_PAY_SUPPLEMENT,
    EmpJob.STANDARD_HOURS,
    EmpJob.START_DATE,
    EmpJob.TEACHERS_PENSION,
    EmpJob.TIME_TYPE_PROFILE_CODE,
    EmpJob.TIMEZONE,
    EmpJob.TRAVEL_DISTANCE,
    EmpJob.TUPE_ORG_NUMBER,
    EmpJob.USER_ID,
    EmpJob.WORK_LOCATION,
    EmpJob.WORK_PERMIT_EXPIRY,
    EmpJob.WORKER_CATEGORY,
    EmpJob.WORKING_TIME_DIRECTIVE,
    EmpJob.WORKSCHEDULE_CODE,
    EmpJob.WTD_HOURS_LIMIT,
    EmpJob.BUSINESS_UNIT_NAV,
    EmpJob.COMMITMENT_INDICATOR_NAV,
    EmpJob.COMPANY_NAV,
    EmpJob.CONTINUED_SICKNESS_PAY_MEASURE_NAV,
    EmpJob.CONTRACT_TYPE_NAV,
    EmpJob.COST_CENTER_NAV,
    EmpJob.COUNTRY_OF_COMPANY_NAV,
    EmpJob.CUSTOM_STRING_11_NAV,
    EmpJob.CUSTOM_STRING_4_NAV,
    EmpJob.CUSTOM_STRING_6_NAV,
    EmpJob.DEPARTMENT_NAV,
    EmpJob.DIVISION_NAV,
    EmpJob.EEO_1_JOB_CATEGORY_NAV,
    EmpJob.EEO_CLASS_NAV,
    EmpJob.EMP_RELATIONSHIP_NAV,
    EmpJob.EMPL_STATUS_NAV,
    EmpJob.EMPLOYEE_CLASS_NAV,
    EmpJob.EMPLOYMENT_NAV,
    EmpJob.EMPLOYMENT_TYPE_NAV,
    EmpJob.EVENT_NAV,
    EmpJob.EVENT_REASON_NAV,
    EmpJob.FLSA_STATUS_NAV,
    EmpJob.HARMFUL_AGENT_EXPOSURE_NAV,
    EmpJob.HOLIDAY_CALENDAR_CODE_NAV,
    EmpJob.JOB_CODE_NAV,
    EmpJob.LOCATION_NAV,
    EmpJob.MANAGER_EMPLOYMENT_NAV,
    EmpJob.MANAGER_USER_NAV,
    EmpJob.NOTICE_PERIOD_NAV,
    EmpJob.OCCUPATIONAL_LEVELS_NAV,
    EmpJob.PAY_GRADE_NAV,
    EmpJob.PAY_SCALE_AREA_NAV,
    EmpJob.PAY_SCALE_GROUP_NAV,
    EmpJob.PAY_SCALE_LEVEL_NAV,
    EmpJob.PAY_SCALE_TYPE_NAV,
    EmpJob.PERIOD_INDICATOR_NAV,
    EmpJob.POSITION_NAV,
    EmpJob.PROBATIONARY_PERIOD_MEASURE_NAV,
    EmpJob.TIME_TYPE_PROFILE_CODE_NAV,
    EmpJob.USER_NAV,
    EmpJob.WF_REQUEST_NAV,
    EmpJob.WORKER_CATEGORY_NAV,
    EmpJob.WORKSCHEDULE_CODE_NAV
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<EmpJob> = new AllFields('*', EmpJob);
  /**
   * All key fields of the EmpJob entity.
   */
  export const _keyFields: Array<Selectable<EmpJob>> = [EmpJob.SEQ_NUMBER, EmpJob.START_DATE, EmpJob.USER_ID];
  /**
   * Mapping of all key field names to the respective static field property EmpJob.
   */
  export const _keys: { [keys: string]: Selectable<EmpJob> } = EmpJob._keyFields.reduce((acc: { [keys: string]: Selectable<EmpJob> }, field: Selectable<EmpJob>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}

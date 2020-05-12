/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { PositionRequestBuilder } from './PositionRequestBuilder';
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, BooleanField, CustomField, DateField, Entity, EntityBuilderType, Link, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "Position" of service "SFOData".
 */
export class Position extends Entity implements PositionType {
  /**
   * Technical entity name for Position.
   */
  static _entityName = 'Position';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for Position.
   */
  static _serviceName = 'SFOData';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = 'VALUE_IS_UNDEFINED';
  /**
   * Business Unit.
   * Maximum length: 128.
   * @nullable
   */
  businessUnit?: string;
  /**
   * Change Reason.
   * Maximum length: 128.
   * @nullable
   */
  changeReason?: string;
  /**
   * Code.
   * Maximum length: 128.
   */
  code!: string;
  /**
   * Comment.
   * Maximum length: 255.
   * @nullable
   */
  comment?: string;
  /**
   * Company.
   * Maximum length: 128.
   * @nullable
   */
  company?: string;
  /**
   * Cost Center.
   * Maximum length: 128.
   * @nullable
   */
  costCenter?: string;
  /**
   * Created By.
   * Maximum length: 100.
   * @nullable
   */
  createdBy?: string;
  /**
   * Creation Date.
   * @nullable
   */
  createdDateTime?: Moment;
  /**
   * Source of Creation.
   * Maximum length: 255.
   * @nullable
   */
  creationSource?: string;
  /**
   * Criticality.
   * @nullable
   */
  criticality?: BigNumber;
  /**
   * Duration.
   * Maximum length: 128.
   * @nullable
   */
  custDuration?: string;
  /**
   * Employment Type.
   * Maximum length: 128.
   * @nullable
   */
  custEmploymentType?: string;
  /**
   * Incentive Plan.
   * Maximum length: 128.
   * @nullable
   */
  custIncentivePlan?: string;
  /**
   * Is Full Time Employee.
   * Maximum length: 128.
   * @nullable
   */
  custIsFullTimeEmp?: string;
  /**
   * Maximum Pay.
   * @nullable
   */
  custMax?: BigNumber;
  /**
   * Mid Point.
   * @nullable
   */
  custMid?: BigNumber;
  /**
   * Minimum Pay.
   * @nullable
   */
  custMin?: BigNumber;
  /**
   * Department.
   * Maximum length: 128.
   * @nullable
   */
  department?: string;
  /**
   * Description.
   * Maximum length: 255.
   * @nullable
   */
  description?: string;
  /**
   * Division.
   * Maximum length: 128.
   * @nullable
   */
  division?: string;
  /**
   * End Date.
   * @nullable
   */
  effectiveEndDate?: Moment;
  /**
   * Position Start Date.
   */
  effectiveStartDate!: Moment;
  /**
   * Status.
   * Maximum length: 255.
   * @nullable
   */
  effectiveStatus?: string;
  /**
   * Employee Class.
   * Maximum length: 128.
   * @nullable
   */
  employeeClass?: string;
  /**
   * Position Title.
   * Maximum length: 255.
   * @nullable
   */
  externalNameDeDe?: string;
  /**
   * Position Title.
   * Maximum length: 255.
   * @nullable
   */
  externalNameDefaultValue?: string;
  /**
   * Position Title.
   * Maximum length: 255.
   * @nullable
   */
  externalNameEnDebug?: string;
  /**
   * Position Title.
   * Maximum length: 255.
   * @nullable
   */
  externalNameEnGb?: string;
  /**
   * Position Title.
   * Maximum length: 255.
   * @nullable
   */
  externalNameEnUs?: string;
  /**
   * Position Title.
   * Maximum length: 255.
   * @nullable
   */
  externalNameEsEs?: string;
  /**
   * Position Title.
   * Maximum length: 255.
   * @nullable
   */
  externalNameEsMx?: string;
  /**
   * Position Title.
   * Maximum length: 255.
   * @nullable
   */
  externalNameFrCa?: string;
  /**
   * Position Title.
   * Maximum length: 255.
   * @nullable
   */
  externalNameFrFr?: string;
  /**
   * Position Title.
   * Maximum length: 255.
   * @nullable
   */
  externalNameItIt?: string;
  /**
   * Position Title.
   * Maximum length: 255.
   * @nullable
   */
  externalNameLocalized?: string;
  /**
   * Position Title.
   * Maximum length: 255.
   * @nullable
   */
  externalNameNlNl?: string;
  /**
   * Position Title.
   * Maximum length: 255.
   * @nullable
   */
  externalNamePtBr?: string;
  /**
   * Position Title.
   * Maximum length: 255.
   * @nullable
   */
  externalNameZhCn?: string;
  /**
   * Incumbent.
   * Maximum length: 100.
   * @nullable
   */
  incumbent?: string;
  /**
   * Job Code.
   * Maximum length: 128.
   * @nullable
   */
  jobCode?: string;
  /**
   * Job Level.
   * Maximum length: 128.
   * @nullable
   */
  jobLevel?: string;
  /**
   * Job Title.
   * Maximum length: 255.
   * @nullable
   */
  jobTitle?: string;
  /**
   * Changed By.
   * Maximum length: 100.
   * @nullable
   */
  lastModifiedBy?: string;
  /**
   * Change Date.
   * @nullable
   */
  lastModifiedDateTime?: Moment;
  /**
   * legacyPositionId.
   * @nullable
   */
  legacyPositionId?: BigNumber;
  /**
   * Location.
   * Maximum length: 32.
   * @nullable
   */
  location?: string;
  /**
   * Optimistic Lock UUID.
   * Maximum length: 255.
   * @nullable
   */
  mdfSystemOptimisticLockUuid?: string;
  /**
   * Record Status.
   * Maximum length: 255.
   * @nullable
   */
  mdfSystemRecordStatus?: string;
  /**
   * Mass Position.
   * @nullable
   */
  multipleIncumbentsAllowed?: boolean;
  /**
   * Pay Grade.
   * Maximum length: 32.
   * @nullable
   */
  payGrade?: string;
  /**
   * Pay Range.
   * Maximum length: 32.
   * @nullable
   */
  payRange?: string;
  /**
   * Subject to Position Control.
   * @nullable
   */
  positionControlled?: boolean;
  /**
   * Position Criticality.
   * Maximum length: 128.
   * @nullable
   */
  positionCriticality?: string;
  /**
   * Position Title.
   * Maximum length: 255.
   * @nullable
   */
  positionTitle?: string;
  /**
   * Regular/Temporary.
   * Maximum length: 128.
   * @nullable
   */
  regularTemporary?: string;
  /**
   * Standard Weekly Hours.
   * @nullable
   */
  standardHours?: BigNumber;
  /**
   * FTE.
   * @nullable
   */
  targetFte?: BigNumber;
  /**
   * technicalParameters.
   * Maximum length: 255.
   * @nullable
   */
  technicalParameters?: string;
  /**
   * Transaction Sequence Number.
   * @nullable
   */
  transactionSequence?: BigNumber;
  /**
   * Type.
   * Maximum length: 128.
   * @nullable
   */
  type?: string;
  /**
   * To Be Hired.
   * @nullable
   */
  vacant?: boolean;
  /**
   * One-to-one navigation property to the [[FoBusinessUnit]] entity.
   */
  businessUnitNav!: FoBusinessUnit;
  /**
   * One-to-one navigation property to the [[PickListValueV2]] entity.
   */
  changeReasonNav!: PickListValueV2;
  /**
   * One-to-one navigation property to the [[FoCompany]] entity.
   */
  companyNav!: FoCompany;
  /**
   * One-to-one navigation property to the [[FoCostCenter]] entity.
   */
  costCenterNav!: FoCostCenter;
  /**
   * One-to-one navigation property to the [[User]] entity.
   */
  createdByNav!: User;
  /**
   * One-to-one navigation property to the [[MdfEnumValue]] entity.
   */
  creationSourceNav!: MdfEnumValue;
  /**
   * One-to-one navigation property to the [[Attachment]] entity.
   */
  custAttachmentNav!: Attachment;
  /**
   * One-to-one navigation property to the [[PickListValueV2]] entity.
   */
  custDurationNav!: PickListValueV2;
  /**
   * One-to-one navigation property to the [[PickListValueV2]] entity.
   */
  custEmploymentTypeNav!: PickListValueV2;
  /**
   * One-to-one navigation property to the [[PickListValueV2]] entity.
   */
  custIsFullTimeEmpNav!: PickListValueV2;
  /**
   * One-to-one navigation property to the [[FoDepartment]] entity.
   */
  departmentNav!: FoDepartment;
  /**
   * One-to-one navigation property to the [[FoDivision]] entity.
   */
  divisionNav!: FoDivision;
  /**
   * One-to-one navigation property to the [[MdfEnumValue]] entity.
   */
  effectiveStatusNav!: MdfEnumValue;
  /**
   * One-to-one navigation property to the [[PickListValueV2]] entity.
   */
  employeeClassNav!: PickListValueV2;
  /**
   * One-to-many navigation property to the [[MdfLocalizedValue]] entity.
   */
  externalNameTranslationTextNav!: MdfLocalizedValue[];
  /**
   * One-to-one navigation property to the [[User]] entity.
   */
  incumbentNav!: User;
  /**
   * One-to-one navigation property to the [[FoJobCode]] entity.
   */
  jobCodeNav!: FoJobCode;
  /**
   * One-to-one navigation property to the [[PickListValueV2]] entity.
   */
  jobLevelNav!: PickListValueV2;
  /**
   * One-to-one navigation property to the [[User]] entity.
   */
  lastModifiedByNav!: User;
  /**
   * One-to-one navigation property to the [[FoLocation]] entity.
   */
  locationNav!: FoLocation;
  /**
   * One-to-one navigation property to the [[MdfEnumValue]] entity.
   */
  mdfSystemRecordStatusNav!: MdfEnumValue;
  /**
   * One-to-one navigation property to the [[Position]] entity.
   */
  parentPosition!: Position;
  /**
   * One-to-one navigation property to the [[FoPayGrade]] entity.
   */
  payGradeNav!: FoPayGrade;
  /**
   * One-to-one navigation property to the [[FoPayRange]] entity.
   */
  payRangeNav!: FoPayRange;
  /**
   * One-to-one navigation property to the [[PickListValueV2]] entity.
   */
  positionCriticalityNav!: PickListValueV2;
  /**
   * One-to-many navigation property to the [[PositionMatrixRelationship]] entity.
   */
  positionMatrixRelationship!: PositionMatrixRelationship[];
  /**
   * One-to-one navigation property to the [[PickListValueV2]] entity.
   */
  regularTemporaryNav!: PickListValueV2;
  /**
   * One-to-many navigation property to the [[RightToReturn]] entity.
   */
  rightToReturn!: RightToReturn[];
  /**
   * One-to-many navigation property to the [[Successor]] entity.
   */
  successorNav!: Successor[];
  /**
   * One-to-many navigation property to the [[WfRequest]] entity.
   */
  wfRequestNav!: WfRequest[];

  /**
   * Returns an entity builder to construct instances `Position`.
   * @returns A builder that constructs instances of entity type `Position`.
   */
  static builder(): EntityBuilderType<Position, PositionTypeForceMandatory> {
    return Entity.entityBuilder(Position);
  }

  /**
   * Returns a request builder to construct requests for operations on the `Position` entity type.
   * @returns A `Position` request builder.
   */
  static requestBuilder(): PositionRequestBuilder {
    return new PositionRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `Position`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `Position`.
   */
  static customField(fieldName: string): CustomField<Position> {
    return Entity.customFieldSelector(fieldName, Position);
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
import { PickListValueV2, PickListValueV2Type } from './PickListValueV2';
import { FoCompany, FoCompanyType } from './FoCompany';
import { FoCostCenter, FoCostCenterType } from './FoCostCenter';
import { User, UserType } from './User';
import { MdfEnumValue, MdfEnumValueType } from './MdfEnumValue';
import { Attachment, AttachmentType } from './Attachment';
import { FoDepartment, FoDepartmentType } from './FoDepartment';
import { FoDivision, FoDivisionType } from './FoDivision';
import { MdfLocalizedValue, MdfLocalizedValueType } from './MdfLocalizedValue';
import { FoJobCode, FoJobCodeType } from './FoJobCode';
import { FoLocation, FoLocationType } from './FoLocation';
import { FoPayGrade, FoPayGradeType } from './FoPayGrade';
import { FoPayRange, FoPayRangeType } from './FoPayRange';
import { PositionMatrixRelationship, PositionMatrixRelationshipType } from './PositionMatrixRelationship';
import { RightToReturn, RightToReturnType } from './RightToReturn';
import { Successor, SuccessorType } from './Successor';
import { WfRequest, WfRequestType } from './WfRequest';

export interface PositionType {
  businessUnit?: string;
  changeReason?: string;
  code: string;
  comment?: string;
  company?: string;
  costCenter?: string;
  createdBy?: string;
  createdDateTime?: Moment;
  creationSource?: string;
  criticality?: BigNumber;
  custDuration?: string;
  custEmploymentType?: string;
  custIncentivePlan?: string;
  custIsFullTimeEmp?: string;
  custMax?: BigNumber;
  custMid?: BigNumber;
  custMin?: BigNumber;
  department?: string;
  description?: string;
  division?: string;
  effectiveEndDate?: Moment;
  effectiveStartDate: Moment;
  effectiveStatus?: string;
  employeeClass?: string;
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
  incumbent?: string;
  jobCode?: string;
  jobLevel?: string;
  jobTitle?: string;
  lastModifiedBy?: string;
  lastModifiedDateTime?: Moment;
  legacyPositionId?: BigNumber;
  location?: string;
  mdfSystemOptimisticLockUuid?: string;
  mdfSystemRecordStatus?: string;
  multipleIncumbentsAllowed?: boolean;
  payGrade?: string;
  payRange?: string;
  positionControlled?: boolean;
  positionCriticality?: string;
  positionTitle?: string;
  regularTemporary?: string;
  standardHours?: BigNumber;
  targetFte?: BigNumber;
  technicalParameters?: string;
  transactionSequence?: BigNumber;
  type?: string;
  vacant?: boolean;
  businessUnitNav: FoBusinessUnitType;
  changeReasonNav: PickListValueV2Type;
  companyNav: FoCompanyType;
  costCenterNav: FoCostCenterType;
  createdByNav: UserType;
  creationSourceNav: MdfEnumValueType;
  custAttachmentNav: AttachmentType;
  custDurationNav: PickListValueV2Type;
  custEmploymentTypeNav: PickListValueV2Type;
  custIsFullTimeEmpNav: PickListValueV2Type;
  departmentNav: FoDepartmentType;
  divisionNav: FoDivisionType;
  effectiveStatusNav: MdfEnumValueType;
  employeeClassNav: PickListValueV2Type;
  externalNameTranslationTextNav: MdfLocalizedValueType[];
  incumbentNav: UserType;
  jobCodeNav: FoJobCodeType;
  jobLevelNav: PickListValueV2Type;
  lastModifiedByNav: UserType;
  locationNav: FoLocationType;
  mdfSystemRecordStatusNav: MdfEnumValueType;
  parentPosition: PositionType;
  payGradeNav: FoPayGradeType;
  payRangeNav: FoPayRangeType;
  positionCriticalityNav: PickListValueV2Type;
  positionMatrixRelationship: PositionMatrixRelationshipType[];
  regularTemporaryNav: PickListValueV2Type;
  rightToReturn: RightToReturnType[];
  successorNav: SuccessorType[];
  wfRequestNav: WfRequestType[];
}

export interface PositionTypeForceMandatory {
  businessUnit: string;
  changeReason: string;
  code: string;
  comment: string;
  company: string;
  costCenter: string;
  createdBy: string;
  createdDateTime: Moment;
  creationSource: string;
  criticality: BigNumber;
  custDuration: string;
  custEmploymentType: string;
  custIncentivePlan: string;
  custIsFullTimeEmp: string;
  custMax: BigNumber;
  custMid: BigNumber;
  custMin: BigNumber;
  department: string;
  description: string;
  division: string;
  effectiveEndDate: Moment;
  effectiveStartDate: Moment;
  effectiveStatus: string;
  employeeClass: string;
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
  incumbent: string;
  jobCode: string;
  jobLevel: string;
  jobTitle: string;
  lastModifiedBy: string;
  lastModifiedDateTime: Moment;
  legacyPositionId: BigNumber;
  location: string;
  mdfSystemOptimisticLockUuid: string;
  mdfSystemRecordStatus: string;
  multipleIncumbentsAllowed: boolean;
  payGrade: string;
  payRange: string;
  positionControlled: boolean;
  positionCriticality: string;
  positionTitle: string;
  regularTemporary: string;
  standardHours: BigNumber;
  targetFte: BigNumber;
  technicalParameters: string;
  transactionSequence: BigNumber;
  type: string;
  vacant: boolean;
  businessUnitNav: FoBusinessUnitType;
  changeReasonNav: PickListValueV2Type;
  companyNav: FoCompanyType;
  costCenterNav: FoCostCenterType;
  createdByNav: UserType;
  creationSourceNav: MdfEnumValueType;
  custAttachmentNav: AttachmentType;
  custDurationNav: PickListValueV2Type;
  custEmploymentTypeNav: PickListValueV2Type;
  custIsFullTimeEmpNav: PickListValueV2Type;
  departmentNav: FoDepartmentType;
  divisionNav: FoDivisionType;
  effectiveStatusNav: MdfEnumValueType;
  employeeClassNav: PickListValueV2Type;
  externalNameTranslationTextNav: MdfLocalizedValueType[];
  incumbentNav: UserType;
  jobCodeNav: FoJobCodeType;
  jobLevelNav: PickListValueV2Type;
  lastModifiedByNav: UserType;
  locationNav: FoLocationType;
  mdfSystemRecordStatusNav: MdfEnumValueType;
  parentPosition: PositionType;
  payGradeNav: FoPayGradeType;
  payRangeNav: FoPayRangeType;
  positionCriticalityNav: PickListValueV2Type;
  positionMatrixRelationship: PositionMatrixRelationshipType[];
  regularTemporaryNav: PickListValueV2Type;
  rightToReturn: RightToReturnType[];
  successorNav: SuccessorType[];
  wfRequestNav: WfRequestType[];
}

export namespace Position {
  /**
   * Static representation of the [[businessUnit]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BUSINESS_UNIT: StringField<Position> = new StringField('businessUnit', Position, 'Edm.String');
  /**
   * Static representation of the [[changeReason]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CHANGE_REASON: StringField<Position> = new StringField('changeReason', Position, 'Edm.String');
  /**
   * Static representation of the [[code]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CODE: StringField<Position> = new StringField('code', Position, 'Edm.String');
  /**
   * Static representation of the [[comment]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const COMMENT: StringField<Position> = new StringField('comment', Position, 'Edm.String');
  /**
   * Static representation of the [[company]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const COMPANY: StringField<Position> = new StringField('company', Position, 'Edm.String');
  /**
   * Static representation of the [[costCenter]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const COST_CENTER: StringField<Position> = new StringField('costCenter', Position, 'Edm.String');
  /**
   * Static representation of the [[createdBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_BY: StringField<Position> = new StringField('createdBy', Position, 'Edm.String');
  /**
   * Static representation of the [[createdDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_DATE_TIME: DateField<Position> = new DateField('createdDateTime', Position, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[creationSource]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATION_SOURCE: StringField<Position> = new StringField('creationSource', Position, 'Edm.String');
  /**
   * Static representation of the [[criticality]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CRITICALITY: BigNumberField<Position> = new BigNumberField('criticality', Position, 'Edm.Int64');
  /**
   * Static representation of the [[custDuration]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CUST_DURATION: StringField<Position> = new StringField('cust_duration', Position, 'Edm.String');
  /**
   * Static representation of the [[custEmploymentType]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CUST_EMPLOYMENT_TYPE: StringField<Position> = new StringField('cust_employmentType', Position, 'Edm.String');
  /**
   * Static representation of the [[custIncentivePlan]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CUST_INCENTIVE_PLAN: StringField<Position> = new StringField('cust_incentivePlan', Position, 'Edm.String');
  /**
   * Static representation of the [[custIsFullTimeEmp]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CUST_IS_FULL_TIME_EMP: StringField<Position> = new StringField('cust_isFullTimeEmp', Position, 'Edm.String');
  /**
   * Static representation of the [[custMax]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CUST_MAX: BigNumberField<Position> = new BigNumberField('cust_max', Position, 'Edm.Int64');
  /**
   * Static representation of the [[custMid]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CUST_MID: BigNumberField<Position> = new BigNumberField('cust_mid', Position, 'Edm.Int64');
  /**
   * Static representation of the [[custMin]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CUST_MIN: BigNumberField<Position> = new BigNumberField('cust_min', Position, 'Edm.Int64');
  /**
   * Static representation of the [[department]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DEPARTMENT: StringField<Position> = new StringField('department', Position, 'Edm.String');
  /**
   * Static representation of the [[description]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DESCRIPTION: StringField<Position> = new StringField('description', Position, 'Edm.String');
  /**
   * Static representation of the [[division]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DIVISION: StringField<Position> = new StringField('division', Position, 'Edm.String');
  /**
   * Static representation of the [[effectiveEndDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EFFECTIVE_END_DATE: DateField<Position> = new DateField('effectiveEndDate', Position, 'Edm.DateTime');
  /**
   * Static representation of the [[effectiveStartDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EFFECTIVE_START_DATE: DateField<Position> = new DateField('effectiveStartDate', Position, 'Edm.DateTime');
  /**
   * Static representation of the [[effectiveStatus]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EFFECTIVE_STATUS: StringField<Position> = new StringField('effectiveStatus', Position, 'Edm.String');
  /**
   * Static representation of the [[employeeClass]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EMPLOYEE_CLASS: StringField<Position> = new StringField('employeeClass', Position, 'Edm.String');
  /**
   * Static representation of the [[externalNameDeDe]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_NAME_DE_DE: StringField<Position> = new StringField('externalName_de_DE', Position, 'Edm.String');
  /**
   * Static representation of the [[externalNameDefaultValue]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_NAME_DEFAULT_VALUE: StringField<Position> = new StringField('externalName_defaultValue', Position, 'Edm.String');
  /**
   * Static representation of the [[externalNameEnDebug]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_NAME_EN_DEBUG: StringField<Position> = new StringField('externalName_en_DEBUG', Position, 'Edm.String');
  /**
   * Static representation of the [[externalNameEnGb]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_NAME_EN_GB: StringField<Position> = new StringField('externalName_en_GB', Position, 'Edm.String');
  /**
   * Static representation of the [[externalNameEnUs]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_NAME_EN_US: StringField<Position> = new StringField('externalName_en_US', Position, 'Edm.String');
  /**
   * Static representation of the [[externalNameEsEs]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_NAME_ES_ES: StringField<Position> = new StringField('externalName_es_ES', Position, 'Edm.String');
  /**
   * Static representation of the [[externalNameEsMx]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_NAME_ES_MX: StringField<Position> = new StringField('externalName_es_MX', Position, 'Edm.String');
  /**
   * Static representation of the [[externalNameFrCa]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_NAME_FR_CA: StringField<Position> = new StringField('externalName_fr_CA', Position, 'Edm.String');
  /**
   * Static representation of the [[externalNameFrFr]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_NAME_FR_FR: StringField<Position> = new StringField('externalName_fr_FR', Position, 'Edm.String');
  /**
   * Static representation of the [[externalNameItIt]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_NAME_IT_IT: StringField<Position> = new StringField('externalName_it_IT', Position, 'Edm.String');
  /**
   * Static representation of the [[externalNameLocalized]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_NAME_LOCALIZED: StringField<Position> = new StringField('externalName_localized', Position, 'Edm.String');
  /**
   * Static representation of the [[externalNameNlNl]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_NAME_NL_NL: StringField<Position> = new StringField('externalName_nl_NL', Position, 'Edm.String');
  /**
   * Static representation of the [[externalNamePtBr]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_NAME_PT_BR: StringField<Position> = new StringField('externalName_pt_BR', Position, 'Edm.String');
  /**
   * Static representation of the [[externalNameZhCn]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_NAME_ZH_CN: StringField<Position> = new StringField('externalName_zh_CN', Position, 'Edm.String');
  /**
   * Static representation of the [[incumbent]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const INCUMBENT: StringField<Position> = new StringField('incumbent', Position, 'Edm.String');
  /**
   * Static representation of the [[jobCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const JOB_CODE: StringField<Position> = new StringField('jobCode', Position, 'Edm.String');
  /**
   * Static representation of the [[jobLevel]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const JOB_LEVEL: StringField<Position> = new StringField('jobLevel', Position, 'Edm.String');
  /**
   * Static representation of the [[jobTitle]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const JOB_TITLE: StringField<Position> = new StringField('jobTitle', Position, 'Edm.String');
  /**
   * Static representation of the [[lastModifiedBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_BY: StringField<Position> = new StringField('lastModifiedBy', Position, 'Edm.String');
  /**
   * Static representation of the [[lastModifiedDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_DATE_TIME: DateField<Position> = new DateField('lastModifiedDateTime', Position, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[legacyPositionId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LEGACY_POSITION_ID: BigNumberField<Position> = new BigNumberField('legacyPositionId', Position, 'Edm.Int64');
  /**
   * Static representation of the [[location]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LOCATION: StringField<Position> = new StringField('location', Position, 'Edm.String');
  /**
   * Static representation of the [[mdfSystemOptimisticLockUuid]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_OPTIMISTIC_LOCK_UUID: StringField<Position> = new StringField('mdfSystemOptimisticLockUUID', Position, 'Edm.String');
  /**
   * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_RECORD_STATUS: StringField<Position> = new StringField('mdfSystemRecordStatus', Position, 'Edm.String');
  /**
   * Static representation of the [[multipleIncumbentsAllowed]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MULTIPLE_INCUMBENTS_ALLOWED: BooleanField<Position> = new BooleanField('multipleIncumbentsAllowed', Position, 'Edm.Boolean');
  /**
   * Static representation of the [[payGrade]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PAY_GRADE: StringField<Position> = new StringField('payGrade', Position, 'Edm.String');
  /**
   * Static representation of the [[payRange]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PAY_RANGE: StringField<Position> = new StringField('payRange', Position, 'Edm.String');
  /**
   * Static representation of the [[positionControlled]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const POSITION_CONTROLLED: BooleanField<Position> = new BooleanField('positionControlled', Position, 'Edm.Boolean');
  /**
   * Static representation of the [[positionCriticality]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const POSITION_CRITICALITY: StringField<Position> = new StringField('positionCriticality', Position, 'Edm.String');
  /**
   * Static representation of the [[positionTitle]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const POSITION_TITLE: StringField<Position> = new StringField('positionTitle', Position, 'Edm.String');
  /**
   * Static representation of the [[regularTemporary]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const REGULAR_TEMPORARY: StringField<Position> = new StringField('regularTemporary', Position, 'Edm.String');
  /**
   * Static representation of the [[standardHours]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const STANDARD_HOURS: BigNumberField<Position> = new BigNumberField('standardHours', Position, 'Edm.Decimal');
  /**
   * Static representation of the [[targetFte]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TARGET_FTE: BigNumberField<Position> = new BigNumberField('targetFTE', Position, 'Edm.Decimal');
  /**
   * Static representation of the [[technicalParameters]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TECHNICAL_PARAMETERS: StringField<Position> = new StringField('technicalParameters', Position, 'Edm.String');
  /**
   * Static representation of the [[transactionSequence]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TRANSACTION_SEQUENCE: BigNumberField<Position> = new BigNumberField('transactionSequence', Position, 'Edm.Int64');
  /**
   * Static representation of the [[type]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TYPE: StringField<Position> = new StringField('type', Position, 'Edm.String');
  /**
   * Static representation of the [[vacant]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const VACANT: BooleanField<Position> = new BooleanField('vacant', Position, 'Edm.Boolean');
  /**
   * Static representation of the one-to-one navigation property [[businessUnitNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BUSINESS_UNIT_NAV: OneToOneLink<Position, FoBusinessUnit> = new OneToOneLink('businessUnitNav', Position, FoBusinessUnit);
  /**
   * Static representation of the one-to-one navigation property [[changeReasonNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CHANGE_REASON_NAV: OneToOneLink<Position, PickListValueV2> = new OneToOneLink('changeReasonNav', Position, PickListValueV2);
  /**
   * Static representation of the one-to-one navigation property [[companyNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const COMPANY_NAV: OneToOneLink<Position, FoCompany> = new OneToOneLink('companyNav', Position, FoCompany);
  /**
   * Static representation of the one-to-one navigation property [[costCenterNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const COST_CENTER_NAV: OneToOneLink<Position, FoCostCenter> = new OneToOneLink('costCenterNav', Position, FoCostCenter);
  /**
   * Static representation of the one-to-one navigation property [[createdByNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_BY_NAV: OneToOneLink<Position, User> = new OneToOneLink('createdByNav', Position, User);
  /**
   * Static representation of the one-to-one navigation property [[creationSourceNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATION_SOURCE_NAV: OneToOneLink<Position, MdfEnumValue> = new OneToOneLink('creationSourceNav', Position, MdfEnumValue);
  /**
   * Static representation of the one-to-one navigation property [[custAttachmentNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CUST_ATTACHMENT_NAV: OneToOneLink<Position, Attachment> = new OneToOneLink('cust_attachmentNav', Position, Attachment);
  /**
   * Static representation of the one-to-one navigation property [[custDurationNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CUST_DURATION_NAV: OneToOneLink<Position, PickListValueV2> = new OneToOneLink('cust_durationNav', Position, PickListValueV2);
  /**
   * Static representation of the one-to-one navigation property [[custEmploymentTypeNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CUST_EMPLOYMENT_TYPE_NAV: OneToOneLink<Position, PickListValueV2> = new OneToOneLink('cust_employmentTypeNav', Position, PickListValueV2);
  /**
   * Static representation of the one-to-one navigation property [[custIsFullTimeEmpNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CUST_IS_FULL_TIME_EMP_NAV: OneToOneLink<Position, PickListValueV2> = new OneToOneLink('cust_isFullTimeEmpNav', Position, PickListValueV2);
  /**
   * Static representation of the one-to-one navigation property [[departmentNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DEPARTMENT_NAV: OneToOneLink<Position, FoDepartment> = new OneToOneLink('departmentNav', Position, FoDepartment);
  /**
   * Static representation of the one-to-one navigation property [[divisionNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DIVISION_NAV: OneToOneLink<Position, FoDivision> = new OneToOneLink('divisionNav', Position, FoDivision);
  /**
   * Static representation of the one-to-one navigation property [[effectiveStatusNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EFFECTIVE_STATUS_NAV: OneToOneLink<Position, MdfEnumValue> = new OneToOneLink('effectiveStatusNav', Position, MdfEnumValue);
  /**
   * Static representation of the one-to-one navigation property [[employeeClassNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EMPLOYEE_CLASS_NAV: OneToOneLink<Position, PickListValueV2> = new OneToOneLink('employeeClassNav', Position, PickListValueV2);
  /**
   * Static representation of the one-to-many navigation property [[externalNameTranslationTextNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_NAME_TRANSLATION_TEXT_NAV: Link<Position, MdfLocalizedValue> = new Link('externalNameTranslationTextNav', Position, MdfLocalizedValue);
  /**
   * Static representation of the one-to-one navigation property [[incumbentNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const INCUMBENT_NAV: OneToOneLink<Position, User> = new OneToOneLink('incumbentNav', Position, User);
  /**
   * Static representation of the one-to-one navigation property [[jobCodeNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const JOB_CODE_NAV: OneToOneLink<Position, FoJobCode> = new OneToOneLink('jobCodeNav', Position, FoJobCode);
  /**
   * Static representation of the one-to-one navigation property [[jobLevelNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const JOB_LEVEL_NAV: OneToOneLink<Position, PickListValueV2> = new OneToOneLink('jobLevelNav', Position, PickListValueV2);
  /**
   * Static representation of the one-to-one navigation property [[lastModifiedByNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_BY_NAV: OneToOneLink<Position, User> = new OneToOneLink('lastModifiedByNav', Position, User);
  /**
   * Static representation of the one-to-one navigation property [[locationNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LOCATION_NAV: OneToOneLink<Position, FoLocation> = new OneToOneLink('locationNav', Position, FoLocation);
  /**
   * Static representation of the one-to-one navigation property [[mdfSystemRecordStatusNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MDF_SYSTEM_RECORD_STATUS_NAV: OneToOneLink<Position, MdfEnumValue> = new OneToOneLink('mdfSystemRecordStatusNav', Position, MdfEnumValue);
  /**
   * Static representation of the one-to-one navigation property [[parentPosition]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PARENT_POSITION: OneToOneLink<Position, Position> = new OneToOneLink('parentPosition', Position, Position);
  /**
   * Static representation of the one-to-one navigation property [[payGradeNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PAY_GRADE_NAV: OneToOneLink<Position, FoPayGrade> = new OneToOneLink('payGradeNav', Position, FoPayGrade);
  /**
   * Static representation of the one-to-one navigation property [[payRangeNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PAY_RANGE_NAV: OneToOneLink<Position, FoPayRange> = new OneToOneLink('payRangeNav', Position, FoPayRange);
  /**
   * Static representation of the one-to-one navigation property [[positionCriticalityNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const POSITION_CRITICALITY_NAV: OneToOneLink<Position, PickListValueV2> = new OneToOneLink('positionCriticalityNav', Position, PickListValueV2);
  /**
   * Static representation of the one-to-many navigation property [[positionMatrixRelationship]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const POSITION_MATRIX_RELATIONSHIP: Link<Position, PositionMatrixRelationship> = new Link('positionMatrixRelationship', Position, PositionMatrixRelationship);
  /**
   * Static representation of the one-to-one navigation property [[regularTemporaryNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const REGULAR_TEMPORARY_NAV: OneToOneLink<Position, PickListValueV2> = new OneToOneLink('regularTemporaryNav', Position, PickListValueV2);
  /**
   * Static representation of the one-to-many navigation property [[rightToReturn]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const RIGHT_TO_RETURN: Link<Position, RightToReturn> = new Link('rightToReturn', Position, RightToReturn);
  /**
   * Static representation of the one-to-many navigation property [[successorNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SUCCESSOR_NAV: Link<Position, Successor> = new Link('successorNav', Position, Successor);
  /**
   * Static representation of the one-to-many navigation property [[wfRequestNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const WF_REQUEST_NAV: Link<Position, WfRequest> = new Link('wfRequestNav', Position, WfRequest);
  /**
   * All fields of the Position entity.
   */
  export const _allFields: Array<StringField<Position> | DateField<Position> | BigNumberField<Position> | BooleanField<Position> | OneToOneLink<Position, FoBusinessUnit> | OneToOneLink<Position, PickListValueV2> | OneToOneLink<Position, FoCompany> | OneToOneLink<Position, FoCostCenter> | OneToOneLink<Position, User> | OneToOneLink<Position, MdfEnumValue> | OneToOneLink<Position, Attachment> | OneToOneLink<Position, FoDepartment> | OneToOneLink<Position, FoDivision> | Link<Position, MdfLocalizedValue> | OneToOneLink<Position, FoJobCode> | OneToOneLink<Position, FoLocation> | OneToOneLink<Position, Position> | OneToOneLink<Position, FoPayGrade> | OneToOneLink<Position, FoPayRange> | Link<Position, PositionMatrixRelationship> | Link<Position, RightToReturn> | Link<Position, Successor> | Link<Position, WfRequest>> = [
    Position.BUSINESS_UNIT,
    Position.CHANGE_REASON,
    Position.CODE,
    Position.COMMENT,
    Position.COMPANY,
    Position.COST_CENTER,
    Position.CREATED_BY,
    Position.CREATED_DATE_TIME,
    Position.CREATION_SOURCE,
    Position.CRITICALITY,
    Position.CUST_DURATION,
    Position.CUST_EMPLOYMENT_TYPE,
    Position.CUST_INCENTIVE_PLAN,
    Position.CUST_IS_FULL_TIME_EMP,
    Position.CUST_MAX,
    Position.CUST_MID,
    Position.CUST_MIN,
    Position.DEPARTMENT,
    Position.DESCRIPTION,
    Position.DIVISION,
    Position.EFFECTIVE_END_DATE,
    Position.EFFECTIVE_START_DATE,
    Position.EFFECTIVE_STATUS,
    Position.EMPLOYEE_CLASS,
    Position.EXTERNAL_NAME_DE_DE,
    Position.EXTERNAL_NAME_DEFAULT_VALUE,
    Position.EXTERNAL_NAME_EN_DEBUG,
    Position.EXTERNAL_NAME_EN_GB,
    Position.EXTERNAL_NAME_EN_US,
    Position.EXTERNAL_NAME_ES_ES,
    Position.EXTERNAL_NAME_ES_MX,
    Position.EXTERNAL_NAME_FR_CA,
    Position.EXTERNAL_NAME_FR_FR,
    Position.EXTERNAL_NAME_IT_IT,
    Position.EXTERNAL_NAME_LOCALIZED,
    Position.EXTERNAL_NAME_NL_NL,
    Position.EXTERNAL_NAME_PT_BR,
    Position.EXTERNAL_NAME_ZH_CN,
    Position.INCUMBENT,
    Position.JOB_CODE,
    Position.JOB_LEVEL,
    Position.JOB_TITLE,
    Position.LAST_MODIFIED_BY,
    Position.LAST_MODIFIED_DATE_TIME,
    Position.LEGACY_POSITION_ID,
    Position.LOCATION,
    Position.MDF_SYSTEM_OPTIMISTIC_LOCK_UUID,
    Position.MDF_SYSTEM_RECORD_STATUS,
    Position.MULTIPLE_INCUMBENTS_ALLOWED,
    Position.PAY_GRADE,
    Position.PAY_RANGE,
    Position.POSITION_CONTROLLED,
    Position.POSITION_CRITICALITY,
    Position.POSITION_TITLE,
    Position.REGULAR_TEMPORARY,
    Position.STANDARD_HOURS,
    Position.TARGET_FTE,
    Position.TECHNICAL_PARAMETERS,
    Position.TRANSACTION_SEQUENCE,
    Position.TYPE,
    Position.VACANT,
    Position.BUSINESS_UNIT_NAV,
    Position.CHANGE_REASON_NAV,
    Position.COMPANY_NAV,
    Position.COST_CENTER_NAV,
    Position.CREATED_BY_NAV,
    Position.CREATION_SOURCE_NAV,
    Position.CUST_ATTACHMENT_NAV,
    Position.CUST_DURATION_NAV,
    Position.CUST_EMPLOYMENT_TYPE_NAV,
    Position.CUST_IS_FULL_TIME_EMP_NAV,
    Position.DEPARTMENT_NAV,
    Position.DIVISION_NAV,
    Position.EFFECTIVE_STATUS_NAV,
    Position.EMPLOYEE_CLASS_NAV,
    Position.EXTERNAL_NAME_TRANSLATION_TEXT_NAV,
    Position.INCUMBENT_NAV,
    Position.JOB_CODE_NAV,
    Position.JOB_LEVEL_NAV,
    Position.LAST_MODIFIED_BY_NAV,
    Position.LOCATION_NAV,
    Position.MDF_SYSTEM_RECORD_STATUS_NAV,
    Position.PARENT_POSITION,
    Position.PAY_GRADE_NAV,
    Position.PAY_RANGE_NAV,
    Position.POSITION_CRITICALITY_NAV,
    Position.POSITION_MATRIX_RELATIONSHIP,
    Position.REGULAR_TEMPORARY_NAV,
    Position.RIGHT_TO_RETURN,
    Position.SUCCESSOR_NAV,
    Position.WF_REQUEST_NAV
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<Position> = new AllFields('*', Position);
  /**
   * All key fields of the Position entity.
   */
  export const _keyFields: Array<Selectable<Position>> = [Position.CODE, Position.EFFECTIVE_START_DATE];
  /**
   * Mapping of all key field names to the respective static field property Position.
   */
  export const _keys: { [keys: string]: Selectable<Position> } = Position._keyFields.reduce((acc: { [keys: string]: Selectable<Position> }, field: Selectable<Position>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}

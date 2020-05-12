/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { UserRequestBuilder } from './UserRequestBuilder';
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, BooleanField, CustomField, DateField, Entity, EntityBuilderType, Link, NumberField, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "User" of service "SFOData".
 */
export class User extends Entity implements UserType {
  /**
   * Technical entity name for User.
   */
  static _entityName = 'User';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for User.
   */
  static _serviceName = 'SFOData';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = 'VALUE_IS_UNDEFINED';
  /**
   * Address Line 1.
   * Maximum length: 255.
   * @nullable
   */
  addressLine1?: string;
  /**
   * Address Line 2.
   * Maximum length: 255.
   * @nullable
   */
  addressLine2?: string;
  /**
   * Address Line 3.
   * @nullable
   */
  addressLine3?: string;
  /**
   * Bench Strength.
   * @nullable
   */
  benchStrength?: string;
  /**
   * Business Phone.
   * Maximum length: 20.
   * @nullable
   */
  businessPhone?: string;
  /**
   * Career Track.
   * @nullable
   */
  businessSegment?: string;
  /**
   * Cell Phone.
   * @nullable
   */
  cellPhone?: string;
  /**
   * Citizenship.
   * @nullable
   */
  citizenship?: string;
  /**
   * City.
   * Maximum length: 255.
   * @nullable
   */
  city?: string;
  /**
   * Competency.
   * @nullable
   */
  competency?: number;
  /**
   * Country.
   * Maximum length: 255.
   * @nullable
   */
  country?: string;
  /**
   * EC Employee Status.
   * Maximum length: 255.
   * @nullable
   */
  custom01?: string;
  /**
   * Company.
   * Maximum length: 255.
   * @nullable
   */
  custom02?: string;
  /**
   * Business Unit.
   * Maximum length: 255.
   * @nullable
   */
  custom03?: string;
  /**
   * Customizable Field 4.
   * Maximum length: 255.
   * @nullable
   */
  custom04?: string;
  /**
   * Home/Host Designation.
   * Maximum length: 255.
   * @nullable
   */
  custom05?: string;
  /**
   * Customizable Field 6.
   * Maximum length: 255.
   * @nullable
   */
  custom06?: string;
  /**
   * Customizable Field 7.
   * Maximum length: 255.
   * @nullable
   */
  custom07?: string;
  /**
   * Customizable Field 8.
   * Maximum length: 255.
   * @nullable
   */
  custom08?: string;
  /**
   * Customizable Field 9.
   * Maximum length: 255.
   * @nullable
   */
  custom09?: string;
  /**
   * Customizable Field 10.
   * Maximum length: 255.
   * @nullable
   */
  custom10?: string;
  /**
   * Customizable Field 11.
   * Maximum length: 255.
   * @nullable
   */
  custom11?: string;
  /**
   * Customizable Field 12.
   * Maximum length: 255.
   * @nullable
   */
  custom12?: string;
  /**
   * Customizable Field 13.
   * Maximum length: 255.
   * @nullable
   */
  custom13?: string;
  /**
   * Customizable Field 14.
   * Maximum length: 255.
   * @nullable
   */
  custom14?: string;
  /**
   * Customizable Field 15.
   * Maximum length: 255.
   * @nullable
   */
  custom15?: string;
  /**
   * Date Of Birth.
   * @nullable
   */
  dateOfBirth?: Moment;
  /**
   * Date of Position.
   * @nullable
   */
  dateOfPosition?: Moment;
  /**
   * defaultFullName.
   * @nullable
   */
  defaultFullName?: string;
  /**
   * Default Locale.
   * Maximum length: 32.
   * @nullable
   */
  defaultLocale?: string;
  /**
   * Department.
   * Maximum length: 128.
   * @nullable
   */
  department?: string;
  /**
   * Division.
   * Maximum length: 128.
   * @nullable
   */
  division?: string;
  /**
   * Email.
   * @nullable
   */
  email?: string;
  /**
   * Employee Id.
   * Maximum length: 255.
   * @nullable
   */
  empId?: string;
  /**
   * Ethnicity.
   * @nullable
   */
  ethnicity?: string;
  /**
   * Business Fax.
   * Maximum length: 20.
   * @nullable
   */
  fax?: string;
  /**
   * First Name.
   * Maximum length: 128.
   * @nullable
   */
  firstName?: string;
  /**
   * Future Leader.
   * @nullable
   */
  futureLeader?: boolean;
  /**
   * Gender.
   * Maximum length: 2.
   */
  gender!: string;
  /**
   * Hire Date.
   * @nullable
   */
  hireDate?: Moment;
  /**
   * Home Phone.
   * @nullable
   */
  homePhone?: string;
  /**
   * Impact of Loss.
   * @nullable
   */
  impactOfLoss?: string;
  /**
   * Job Code.
   * Maximum length: 128.
   * @nullable
   */
  jobCode?: string;
  /**
   * Key Position.
   * @nullable
   */
  keyPosition?: boolean;
  /**
   * lastModified.
   * @nullable
   */
  lastModified?: Moment;
  /**
   * lastModifiedDateTime.
   * @nullable
   */
  lastModifiedDateTime?: Moment;
  /**
   * lastModifiedWithTZ.
   * @nullable
   */
  lastModifiedWithTz?: Moment;
  /**
   * Last Name.
   * Maximum length: 128.
   * @nullable
   */
  lastName?: string;
  /**
   * Last Review Date.
   * @nullable
   */
  lastReviewDate?: string;
  /**
   * Level.
   * @nullable
   */
  level?: string;
  /**
   * Location.
   * Maximum length: 128.
   * @nullable
   */
  location?: string;
  /**
   * Married.
   * @nullable
   */
  married?: boolean;
  /**
   * Matrix1 Label.
   * @nullable
   */
  matrix1Label?: string;
  /**
   * Matrix2 Label.
   * @nullable
   */
  matrix2Label?: string;
  /**
   * Matrix Managed.
   * @nullable
   */
  matrixManaged?: boolean;
  /**
   * Middle Name.
   * Maximum length: 128.
   * @nullable
   */
  mi?: string;
  /**
   * Minority.
   * @nullable
   */
  minority?: boolean;
  /**
   * Nationality.
   * @nullable
   */
  nationality?: string;
  /**
   * New to Position.
   * @nullable
   */
  newToPosition?: boolean;
  /**
   * Preferred Name.
   * Maximum length: 128.
   * @nullable
   */
  nickname?: string;
  /**
   * Objective.
   * @nullable
   */
  objective?: number;
  /**
   * onboardingId.
   * @nullable
   */
  onboardingId?: string;
  /**
   * password.
   * Maximum length: 128.
   * @nullable
   */
  password?: string;
  /**
   * Performance.
   * @nullable
   */
  performance?: number;
  /**
   * Potential.
   * @nullable
   */
  potential?: number;
  /**
   * Reason for Leaving.
   * @nullable
   */
  reasonForLeaving?: string;
  /**
   * Review Frequency.
   * Maximum length: 255.
   * @nullable
   */
  reviewFreq?: string;
  /**
   * Risk of Loss.
   * @nullable
   */
  riskOfLoss?: string;
  /**
   * sciLastModified.
   * @nullable
   */
  sciLastModified?: Moment;
  /**
   * Service Date.
   * @nullable
   */
  serviceDate?: Moment;
  /**
   * Social Security Number.
   * Maximum length: 128.
   * @nullable
   */
  ssn?: string;
  /**
   * State.
   * Maximum length: 20.
   * @nullable
   */
  state?: string;
  /**
   * Status.
   * Maximum length: 17.
   */
  status!: string;
  /**
   * Suffix.
   * Maximum length: 128.
   * @nullable
   */
  suffix?: string;
  /**
   * Talent Pool.
   * @nullable
   */
  talentPool?: string;
  /**
   * teamMembersSize.
   * @nullable
   */
  teamMembersSize?: number;
  /**
   * Time Zone.
   * Maximum length: 16.
   * @nullable
   */
  timeZone?: string;
  /**
   * Position.
   * Maximum length: 255.
   * @nullable
   */
  title?: string;
  /**
   * totalTeamSize.
   * @nullable
   */
  totalTeamSize?: BigNumber;
  /**
   * User ID.
   * Maximum length: 100.
   */
  userId!: string;
  /**
   * Username.
   * Maximum length: 100.
   * @nullable
   */
  username?: string;
  /**
   * ZIP.
   * Maximum length: 10.
   * @nullable
   */
  zipCode?: string;
  /**
   * One-to-many navigation property to the [[Advance]] entity.
   */
  approverOfAdvanceNav!: Advance[];
  /**
   * One-to-many navigation property to the [[OneTimeDeduction]] entity.
   */
  auditUserSysIdOfOneTimeDeductionNav!: OneTimeDeduction[];
  /**
   * One-to-one navigation property to the [[PicklistOption]] entity.
   */
  benchStrengthNav!: PicklistOption;
  /**
   * One-to-many navigation property to the [[SpotAward]] entity.
   */
  budgetHolderIdOfSpotAwardNav!: SpotAward[];
  /**
   * One-to-one navigation property to the [[PicklistOption]] entity.
   */
  businessSegmentNav!: PicklistOption;
  /**
   * One-to-many navigation property to the [[RightToReturn]] entity.
   */
  codeOfRightToReturnNav!: RightToReturn[];
  /**
   * One-to-many navigation property to the [[CompetencyRating]] entity.
   */
  competencyRatingNav!: CompetencyRating[];
  /**
   * One-to-many navigation property to the [[OnboardingCandidateInfo]] entity.
   */
  concurrentUserOfOnboardingCandidateInfoNav!: OnboardingCandidateInfo[];
  /**
   * One-to-many navigation property to the [[FoCostCenter]] entity.
   */
  costCenterManagerOfFoCostCenterNav!: FoCostCenter[];
  /**
   * One-to-many navigation property to the [[Cust_Rcm_Operator_Lookup]] entity.
   */
  custRecruiterOfcustRcmOperatorLookupNav!: Cust_Rcm_Operator_Lookup[];
  /**
   * One-to-many navigation property to the [[Cust_Rcm_Operator_Lookup]] entity.
   */
  custRecruitingTeamLeadOfcustRcmOperatorLookupNav!: Cust_Rcm_Operator_Lookup[];
  /**
   * One-to-many navigation property to the [[Cust_Rcm_Operator_Lookup]] entity.
   */
  custSharedServicesOfcustRcmOperatorLookupNav!: Cust_Rcm_Operator_Lookup[];
  /**
   * One-to-one navigation property to the [[PicklistOption]] entity.
   */
  custom05Nav!: PicklistOption;
  /**
   * One-to-many navigation property to the [[User]] entity.
   */
  customManager!: User[];
  /**
   * One-to-many navigation property to the [[User]] entity.
   */
  customReports!: User[];
  /**
   * One-to-many navigation property to the [[AutoDelegateDetail]] entity.
   */
  delegateeOfAutoDelegateDetailNav!: AutoDelegateDetail[];
  /**
   * One-to-many navigation property to the [[AutoDelegateConfig]] entity.
   */
  delegatorOfAutoDelegateConfigNav!: AutoDelegateConfig[];
  /**
   * One-to-many navigation property to the [[User]] entity.
   */
  directReports!: User[];
  /**
   * One-to-one navigation property to the [[EmpEmployment]] entity.
   */
  empInfo!: EmpEmployment;
  /**
   * One-to-one navigation property to the [[PicklistOption]] entity.
   */
  ethnicityNav!: PicklistOption;
  /**
   * One-to-many navigation property to the [[SkillProfile]] entity.
   */
  externalCodeOfSkillProfileNav!: SkillProfile[];
  /**
   * One-to-many navigation property to the [[FoBusinessUnit]] entity.
   */
  headOfUnitOfFoBusinessUnitNav!: FoBusinessUnit[];
  /**
   * One-to-many navigation property to the [[FoDepartment]] entity.
   */
  headOfUnitOfFoDepartmentNav!: FoDepartment[];
  /**
   * One-to-many navigation property to the [[FoDivision]] entity.
   */
  headOfUnitOfFoDivisionNav!: FoDivision[];
  /**
   * One-to-one navigation property to the [[User]] entity.
   */
  hr!: User;
  /**
   * One-to-many navigation property to the [[OnboardingCandidateInfo]] entity.
   */
  hrManagerIdOfOnboardingCandidateInfoNav!: OnboardingCandidateInfo[];
  /**
   * One-to-many navigation property to the [[User]] entity.
   */
  hrReports!: User[];
  /**
   * One-to-one navigation property to the [[PicklistOption]] entity.
   */
  impactOfLossNav!: PicklistOption;
  /**
   * One-to-many navigation property to the [[Position]] entity.
   */
  incumbentOfPositionNav!: Position[];
  /**
   * One-to-one navigation property to the [[User]] entity.
   */
  manager!: User;
  /**
   * One-to-many navigation property to the [[OnboardingCandidateInfo]] entity.
   */
  managerIdOfOnboardingCandidateInfoNav!: OnboardingCandidateInfo[];
  /**
   * One-to-many navigation property to the [[User]] entity.
   */
  matrixManager!: User[];
  /**
   * One-to-many navigation property to the [[User]] entity.
   */
  matrixReports!: User[];
  /**
   * One-to-many navigation property to the [[NominationTarget]] entity.
   */
  nominationNav!: NominationTarget[];
  /**
   * One-to-many navigation property to the [[SpotAward]] entity.
   */
  nominatorIdOfSpotAwardNav!: SpotAward[];
  /**
   * One-to-many navigation property to the [[TalentPool]] entity.
   */
  ownerOfTalentPoolNav!: TalentPool[];
  /**
   * One-to-many navigation property to the [[OnboardingMeetingEvent]] entity.
   */
  participantUserId1OfOnboardingMeetingEventNav!: OnboardingMeetingEvent[];
  /**
   * One-to-many navigation property to the [[OnboardingMeetingEvent]] entity.
   */
  participantUserId2OfOnboardingMeetingEventNav!: OnboardingMeetingEvent[];
  /**
   * One-to-many navigation property to the [[OnboardingMeetingEvent]] entity.
   */
  participantUserId3OfOnboardingMeetingEventNav!: OnboardingMeetingEvent[];
  /**
   * One-to-many navigation property to the [[OnboardingMeetingEvent]] entity.
   */
  participantUserId4OfOnboardingMeetingEventNav!: OnboardingMeetingEvent[];
  /**
   * One-to-many navigation property to the [[OnboardingMeetingEvent]] entity.
   */
  participantUserId5OfOnboardingMeetingEventNav!: OnboardingMeetingEvent[];
  /**
   * One-to-one navigation property to the [[PersonKey]] entity.
   */
  personKeyNav!: PersonKey;
  /**
   * One-to-many navigation property to the [[OnboardingCandidateInfo]] entity.
   */
  processorIdOfOnboardingCandidateInfoNav!: OnboardingCandidateInfo[];
  /**
   * One-to-many navigation property to the [[User]] entity.
   */
  proxy!: User[];
  /**
   * One-to-one navigation property to the [[PicklistOption]] entity.
   */
  reasonForLeavingNav!: PicklistOption;
  /**
   * One-to-one navigation property to the [[PicklistOption]] entity.
   */
  riskOfLossNav!: PicklistOption;
  /**
   * One-to-one navigation property to the [[User]] entity.
   */
  secondManager!: User;
  /**
   * One-to-many navigation property to the [[User]] entity.
   */
  secondReports!: User[];
  /**
   * One-to-many navigation property to the [[Achievement]] entity.
   */
  subjectUserIdOfAchievementNav!: Achievement[];
  /**
   * One-to-many navigation property to the [[Activity]] entity.
   */
  subjectUserIdOfActivityNav!: Activity[];
  /**
   * One-to-one navigation property to the [[PicklistOption]] entity.
   */
  talentPoolNav!: PicklistOption;
  /**
   * One-to-many navigation property to the [[TimeManagementAlert]] entity.
   */
  targetIdOfTimeManagementAlertNav!: TimeManagementAlert[];
  /**
   * One-to-many navigation property to the [[AccrualCalculationBase]] entity.
   */
  userIdOfAccrualCalculationBaseNav!: AccrualCalculationBase[];
  /**
   * One-to-many navigation property to the [[BudgetGroup]] entity.
   */
  userIdOfBudgetGroupNav!: BudgetGroup[];
  /**
   * One-to-many navigation property to the [[DataReplicationProxy]] entity.
   */
  userIdOfDataReplicationProxyNav!: DataReplicationProxy[];
  /**
   * One-to-many navigation property to the [[EmployeePayrollRunResults]] entity.
   */
  userIdOfEmployeePayrollRunResultsNav!: EmployeePayrollRunResults[];
  /**
   * One-to-many navigation property to the [[EmployeeTimeGroup]] entity.
   */
  userIdOfEmployeeTimeGroupNav!: EmployeeTimeGroup[];
  /**
   * One-to-many navigation property to the [[EmployeeTime]] entity.
   */
  userIdOfEmployeeTimeNav!: EmployeeTime[];
  /**
   * One-to-many navigation property to the [[EmployeeTimeSheet]] entity.
   */
  userIdOfEmployeeTimeSheetNav!: EmployeeTimeSheet[];
  /**
   * One-to-many navigation property to the [[ExternalTimeData]] entity.
   */
  userIdOfExternalTimeDataNav!: ExternalTimeData[];
  /**
   * One-to-many navigation property to the [[ExternalTimeRecord]] entity.
   */
  userIdOfExternalTimeRecordNav!: ExternalTimeRecord[];
  /**
   * One-to-many navigation property to the [[HrisChangeLogDataReplication]] entity.
   */
  userIdOfHrisChangeLogDataReplicationNav!: HrisChangeLogDataReplication[];
  /**
   * One-to-many navigation property to the [[OnboardingCandidateInfo]] entity.
   */
  userIdOfOnboardingCandidateInfoNav!: OnboardingCandidateInfo[];
  /**
   * One-to-many navigation property to the [[PositionRightToReturn]] entity.
   */
  userIdOfPositionRightToReturnNav!: PositionRightToReturn[];
  /**
   * One-to-many navigation property to the [[SpotAwardBudget]] entity.
   */
  userIdOfSpotAwardBudgetNav!: SpotAwardBudget[];
  /**
   * One-to-many navigation property to the [[SpotAward]] entity.
   */
  userIdOfSpotAwardNav!: SpotAward[];
  /**
   * One-to-many navigation property to the [[SpotAwardRedemption]] entity.
   */
  userIdOfSpotAwardRedemptionNav!: SpotAwardRedemption[];
  /**
   * One-to-many navigation property to the [[TemporaryTimeInformation]] entity.
   */
  userIdOfTemporaryTimeInformationNav!: TemporaryTimeInformation[];
  /**
   * One-to-many navigation property to the [[TimeAccount]] entity.
   */
  userIdOfTimeAccountNav!: TimeAccount[];
  /**
   * One-to-many navigation property to the [[TimeAccountSnapshot]] entity.
   */
  userIdOfTimeAccountSnapshotNav!: TimeAccountSnapshot[];
  /**
   * One-to-many navigation property to the [[TimeCollector]] entity.
   */
  userIdOfTimeCollectorNav!: TimeCollector[];
  /**
   * One-to-many navigation property to the [[WorkSchedule]] entity.
   */
  userIdOfWorkScheduleNav!: WorkSchedule[];
  /**
   * One-to-one navigation property to the [[UserPermissions]] entity.
   */
  userPermissionsNav!: UserPermissions;
  /**
   * One-to-many navigation property to the [[AdvancesAccumulation]] entity.
   */
  userSysIdOfAdvancesAccumulationNav!: AdvancesAccumulation[];
  /**
   * One-to-many navigation property to the [[NonRecurringPayment]] entity.
   */
  userSysIdOfNonRecurringPaymentNav!: NonRecurringPayment[];
  /**
   * One-to-many navigation property to the [[OneTimeDeduction]] entity.
   */
  userSysIdOfOneTimeDeductionNav!: OneTimeDeduction[];
  /**
   * One-to-many navigation property to the [[RecurringDeduction]] entity.
   */
  userSysIdOfRecurringDeductionNav!: RecurringDeduction[];
  /**
   * One-to-many navigation property to the [[WorkOrder]] entity.
   */
  userSysIdOfWorkOrderNav!: WorkOrder[];
  /**
   * One-to-many navigation property to the [[EmpCostDistribution]] entity.
   */
  usersSysIdOfEmpCostDistributionNav!: EmpCostDistribution[];
  /**
   * One-to-many navigation property to the [[EmployeeDataReplicationConfirmation]] entity.
   */
  usersSysIdOfEmployeeDataReplicationConfirmationNav!: EmployeeDataReplicationConfirmation[];
  /**
   * One-to-many navigation property to the [[EmployeeDataReplicationElement]] entity.
   */
  usersSysIdOfEmployeeDataReplicationElementNav!: EmployeeDataReplicationElement[];
  /**
   * One-to-many navigation property to the [[EmployeeDataReplicationNotification]] entity.
   */
  usersSysIdOfEmployeeDataReplicationNotificationNav!: EmployeeDataReplicationNotification[];
  /**
   * One-to-many navigation property to the [[HireDateChange]] entity.
   */
  usersSysIdOfHireDateChangeNav!: HireDateChange[];
  /**
   * One-to-many navigation property to the [[SecondaryAssignmentsItem]] entity.
   */
  usersSysIdOfSecondaryAssignmentsItemNav!: SecondaryAssignmentsItem[];
  /**
   * One-to-many navigation property to the [[WorkOrder]] entity.
   */
  workOrderOwnerIdOfWorkOrderNav!: WorkOrder[];
  /**
   * One-to-many navigation property to the [[PaymentInformationV3]] entity.
   */
  workerOfPaymentInformationV3Nav!: PaymentInformationV3[];

  /**
   * Returns an entity builder to construct instances `User`.
   * @returns A builder that constructs instances of entity type `User`.
   */
  static builder(): EntityBuilderType<User, UserTypeForceMandatory> {
    return Entity.entityBuilder(User);
  }

  /**
   * Returns a request builder to construct requests for operations on the `User` entity type.
   * @returns A `User` request builder.
   */
  static requestBuilder(): UserRequestBuilder {
    return new UserRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `User`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `User`.
   */
  static customField(fieldName: string): CustomField<User> {
    return Entity.customFieldSelector(fieldName, User);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
}

import { Advance, AdvanceType } from './Advance';
import { OneTimeDeduction, OneTimeDeductionType } from './OneTimeDeduction';
import { PicklistOption, PicklistOptionType } from './PicklistOption';
import { SpotAward, SpotAwardType } from './SpotAward';
import { RightToReturn, RightToReturnType } from './RightToReturn';
import { CompetencyRating, CompetencyRatingType } from './CompetencyRating';
import { OnboardingCandidateInfo, OnboardingCandidateInfoType } from './OnboardingCandidateInfo';
import { FoCostCenter, FoCostCenterType } from './FoCostCenter';
import { Cust_Rcm_Operator_Lookup, Cust_Rcm_Operator_LookupType } from './Cust_Rcm_Operator_Lookup';
import { AutoDelegateDetail, AutoDelegateDetailType } from './AutoDelegateDetail';
import { AutoDelegateConfig, AutoDelegateConfigType } from './AutoDelegateConfig';
import { EmpEmployment, EmpEmploymentType } from './EmpEmployment';
import { SkillProfile, SkillProfileType } from './SkillProfile';
import { FoBusinessUnit, FoBusinessUnitType } from './FoBusinessUnit';
import { FoDepartment, FoDepartmentType } from './FoDepartment';
import { FoDivision, FoDivisionType } from './FoDivision';
import { Position, PositionType } from './Position';
import { NominationTarget, NominationTargetType } from './NominationTarget';
import { TalentPool, TalentPoolType } from './TalentPool';
import { OnboardingMeetingEvent, OnboardingMeetingEventType } from './OnboardingMeetingEvent';
import { PersonKey, PersonKeyType } from './PersonKey';
import { Achievement, AchievementType } from './Achievement';
import { Activity, ActivityType } from './Activity';
import { TimeManagementAlert, TimeManagementAlertType } from './TimeManagementAlert';
import { AccrualCalculationBase, AccrualCalculationBaseType } from './AccrualCalculationBase';
import { BudgetGroup, BudgetGroupType } from './BudgetGroup';
import { DataReplicationProxy, DataReplicationProxyType } from './DataReplicationProxy';
import { EmployeePayrollRunResults, EmployeePayrollRunResultsType } from './EmployeePayrollRunResults';
import { EmployeeTimeGroup, EmployeeTimeGroupType } from './EmployeeTimeGroup';
import { EmployeeTime, EmployeeTimeType } from './EmployeeTime';
import { EmployeeTimeSheet, EmployeeTimeSheetType } from './EmployeeTimeSheet';
import { ExternalTimeData, ExternalTimeDataType } from './ExternalTimeData';
import { ExternalTimeRecord, ExternalTimeRecordType } from './ExternalTimeRecord';
import { HrisChangeLogDataReplication, HrisChangeLogDataReplicationType } from './HrisChangeLogDataReplication';
import { PositionRightToReturn, PositionRightToReturnType } from './PositionRightToReturn';
import { SpotAwardBudget, SpotAwardBudgetType } from './SpotAwardBudget';
import { SpotAwardRedemption, SpotAwardRedemptionType } from './SpotAwardRedemption';
import { TemporaryTimeInformation, TemporaryTimeInformationType } from './TemporaryTimeInformation';
import { TimeAccount, TimeAccountType } from './TimeAccount';
import { TimeAccountSnapshot, TimeAccountSnapshotType } from './TimeAccountSnapshot';
import { TimeCollector, TimeCollectorType } from './TimeCollector';
import { WorkSchedule, WorkScheduleType } from './WorkSchedule';
import { UserPermissions, UserPermissionsType } from './UserPermissions';
import { AdvancesAccumulation, AdvancesAccumulationType } from './AdvancesAccumulation';
import { NonRecurringPayment, NonRecurringPaymentType } from './NonRecurringPayment';
import { RecurringDeduction, RecurringDeductionType } from './RecurringDeduction';
import { WorkOrder, WorkOrderType } from './WorkOrder';
import { EmpCostDistribution, EmpCostDistributionType } from './EmpCostDistribution';
import { EmployeeDataReplicationConfirmation, EmployeeDataReplicationConfirmationType } from './EmployeeDataReplicationConfirmation';
import { EmployeeDataReplicationElement, EmployeeDataReplicationElementType } from './EmployeeDataReplicationElement';
import { EmployeeDataReplicationNotification, EmployeeDataReplicationNotificationType } from './EmployeeDataReplicationNotification';
import { HireDateChange, HireDateChangeType } from './HireDateChange';
import { SecondaryAssignmentsItem, SecondaryAssignmentsItemType } from './SecondaryAssignmentsItem';
import { PaymentInformationV3, PaymentInformationV3Type } from './PaymentInformationV3';

export interface UserType {
  addressLine1?: string;
  addressLine2?: string;
  addressLine3?: string;
  benchStrength?: string;
  businessPhone?: string;
  businessSegment?: string;
  cellPhone?: string;
  citizenship?: string;
  city?: string;
  competency?: number;
  country?: string;
  custom01?: string;
  custom02?: string;
  custom03?: string;
  custom04?: string;
  custom05?: string;
  custom06?: string;
  custom07?: string;
  custom08?: string;
  custom09?: string;
  custom10?: string;
  custom11?: string;
  custom12?: string;
  custom13?: string;
  custom14?: string;
  custom15?: string;
  dateOfBirth?: Moment;
  dateOfPosition?: Moment;
  defaultFullName?: string;
  defaultLocale?: string;
  department?: string;
  division?: string;
  email?: string;
  empId?: string;
  ethnicity?: string;
  fax?: string;
  firstName?: string;
  futureLeader?: boolean;
  gender: string;
  hireDate?: Moment;
  homePhone?: string;
  impactOfLoss?: string;
  jobCode?: string;
  keyPosition?: boolean;
  lastModified?: Moment;
  lastModifiedDateTime?: Moment;
  lastModifiedWithTz?: Moment;
  lastName?: string;
  lastReviewDate?: string;
  level?: string;
  location?: string;
  married?: boolean;
  matrix1Label?: string;
  matrix2Label?: string;
  matrixManaged?: boolean;
  mi?: string;
  minority?: boolean;
  nationality?: string;
  newToPosition?: boolean;
  nickname?: string;
  objective?: number;
  onboardingId?: string;
  password?: string;
  performance?: number;
  potential?: number;
  reasonForLeaving?: string;
  reviewFreq?: string;
  riskOfLoss?: string;
  sciLastModified?: Moment;
  serviceDate?: Moment;
  ssn?: string;
  state?: string;
  status: string;
  suffix?: string;
  talentPool?: string;
  teamMembersSize?: number;
  timeZone?: string;
  title?: string;
  totalTeamSize?: BigNumber;
  userId: string;
  username?: string;
  zipCode?: string;
  approverOfAdvanceNav: AdvanceType[];
  auditUserSysIdOfOneTimeDeductionNav: OneTimeDeductionType[];
  benchStrengthNav: PicklistOptionType;
  budgetHolderIdOfSpotAwardNav: SpotAwardType[];
  businessSegmentNav: PicklistOptionType;
  codeOfRightToReturnNav: RightToReturnType[];
  competencyRatingNav: CompetencyRatingType[];
  concurrentUserOfOnboardingCandidateInfoNav: OnboardingCandidateInfoType[];
  costCenterManagerOfFoCostCenterNav: FoCostCenterType[];
  custRecruiterOfcustRcmOperatorLookupNav: Cust_Rcm_Operator_LookupType[];
  custRecruitingTeamLeadOfcustRcmOperatorLookupNav: Cust_Rcm_Operator_LookupType[];
  custSharedServicesOfcustRcmOperatorLookupNav: Cust_Rcm_Operator_LookupType[];
  custom05Nav: PicklistOptionType;
  customManager: UserType[];
  customReports: UserType[];
  delegateeOfAutoDelegateDetailNav: AutoDelegateDetailType[];
  delegatorOfAutoDelegateConfigNav: AutoDelegateConfigType[];
  directReports: UserType[];
  empInfo: EmpEmploymentType;
  ethnicityNav: PicklistOptionType;
  externalCodeOfSkillProfileNav: SkillProfileType[];
  headOfUnitOfFoBusinessUnitNav: FoBusinessUnitType[];
  headOfUnitOfFoDepartmentNav: FoDepartmentType[];
  headOfUnitOfFoDivisionNav: FoDivisionType[];
  hr: UserType;
  hrManagerIdOfOnboardingCandidateInfoNav: OnboardingCandidateInfoType[];
  hrReports: UserType[];
  impactOfLossNav: PicklistOptionType;
  incumbentOfPositionNav: PositionType[];
  manager: UserType;
  managerIdOfOnboardingCandidateInfoNav: OnboardingCandidateInfoType[];
  matrixManager: UserType[];
  matrixReports: UserType[];
  nominationNav: NominationTargetType[];
  nominatorIdOfSpotAwardNav: SpotAwardType[];
  ownerOfTalentPoolNav: TalentPoolType[];
  participantUserId1OfOnboardingMeetingEventNav: OnboardingMeetingEventType[];
  participantUserId2OfOnboardingMeetingEventNav: OnboardingMeetingEventType[];
  participantUserId3OfOnboardingMeetingEventNav: OnboardingMeetingEventType[];
  participantUserId4OfOnboardingMeetingEventNav: OnboardingMeetingEventType[];
  participantUserId5OfOnboardingMeetingEventNav: OnboardingMeetingEventType[];
  personKeyNav: PersonKeyType;
  processorIdOfOnboardingCandidateInfoNav: OnboardingCandidateInfoType[];
  proxy: UserType[];
  reasonForLeavingNav: PicklistOptionType;
  riskOfLossNav: PicklistOptionType;
  secondManager: UserType;
  secondReports: UserType[];
  subjectUserIdOfAchievementNav: AchievementType[];
  subjectUserIdOfActivityNav: ActivityType[];
  talentPoolNav: PicklistOptionType;
  targetIdOfTimeManagementAlertNav: TimeManagementAlertType[];
  userIdOfAccrualCalculationBaseNav: AccrualCalculationBaseType[];
  userIdOfBudgetGroupNav: BudgetGroupType[];
  userIdOfDataReplicationProxyNav: DataReplicationProxyType[];
  userIdOfEmployeePayrollRunResultsNav: EmployeePayrollRunResultsType[];
  userIdOfEmployeeTimeGroupNav: EmployeeTimeGroupType[];
  userIdOfEmployeeTimeNav: EmployeeTimeType[];
  userIdOfEmployeeTimeSheetNav: EmployeeTimeSheetType[];
  userIdOfExternalTimeDataNav: ExternalTimeDataType[];
  userIdOfExternalTimeRecordNav: ExternalTimeRecordType[];
  userIdOfHrisChangeLogDataReplicationNav: HrisChangeLogDataReplicationType[];
  userIdOfOnboardingCandidateInfoNav: OnboardingCandidateInfoType[];
  userIdOfPositionRightToReturnNav: PositionRightToReturnType[];
  userIdOfSpotAwardBudgetNav: SpotAwardBudgetType[];
  userIdOfSpotAwardNav: SpotAwardType[];
  userIdOfSpotAwardRedemptionNav: SpotAwardRedemptionType[];
  userIdOfTemporaryTimeInformationNav: TemporaryTimeInformationType[];
  userIdOfTimeAccountNav: TimeAccountType[];
  userIdOfTimeAccountSnapshotNav: TimeAccountSnapshotType[];
  userIdOfTimeCollectorNav: TimeCollectorType[];
  userIdOfWorkScheduleNav: WorkScheduleType[];
  userPermissionsNav: UserPermissionsType;
  userSysIdOfAdvancesAccumulationNav: AdvancesAccumulationType[];
  userSysIdOfNonRecurringPaymentNav: NonRecurringPaymentType[];
  userSysIdOfOneTimeDeductionNav: OneTimeDeductionType[];
  userSysIdOfRecurringDeductionNav: RecurringDeductionType[];
  userSysIdOfWorkOrderNav: WorkOrderType[];
  usersSysIdOfEmpCostDistributionNav: EmpCostDistributionType[];
  usersSysIdOfEmployeeDataReplicationConfirmationNav: EmployeeDataReplicationConfirmationType[];
  usersSysIdOfEmployeeDataReplicationElementNav: EmployeeDataReplicationElementType[];
  usersSysIdOfEmployeeDataReplicationNotificationNav: EmployeeDataReplicationNotificationType[];
  usersSysIdOfHireDateChangeNav: HireDateChangeType[];
  usersSysIdOfSecondaryAssignmentsItemNav: SecondaryAssignmentsItemType[];
  workOrderOwnerIdOfWorkOrderNav: WorkOrderType[];
  workerOfPaymentInformationV3Nav: PaymentInformationV3Type[];
}

export interface UserTypeForceMandatory {
  addressLine1: string;
  addressLine2: string;
  addressLine3: string;
  benchStrength: string;
  businessPhone: string;
  businessSegment: string;
  cellPhone: string;
  citizenship: string;
  city: string;
  competency: number;
  country: string;
  custom01: string;
  custom02: string;
  custom03: string;
  custom04: string;
  custom05: string;
  custom06: string;
  custom07: string;
  custom08: string;
  custom09: string;
  custom10: string;
  custom11: string;
  custom12: string;
  custom13: string;
  custom14: string;
  custom15: string;
  dateOfBirth: Moment;
  dateOfPosition: Moment;
  defaultFullName: string;
  defaultLocale: string;
  department: string;
  division: string;
  email: string;
  empId: string;
  ethnicity: string;
  fax: string;
  firstName: string;
  futureLeader: boolean;
  gender: string;
  hireDate: Moment;
  homePhone: string;
  impactOfLoss: string;
  jobCode: string;
  keyPosition: boolean;
  lastModified: Moment;
  lastModifiedDateTime: Moment;
  lastModifiedWithTz: Moment;
  lastName: string;
  lastReviewDate: string;
  level: string;
  location: string;
  married: boolean;
  matrix1Label: string;
  matrix2Label: string;
  matrixManaged: boolean;
  mi: string;
  minority: boolean;
  nationality: string;
  newToPosition: boolean;
  nickname: string;
  objective: number;
  onboardingId: string;
  password: string;
  performance: number;
  potential: number;
  reasonForLeaving: string;
  reviewFreq: string;
  riskOfLoss: string;
  sciLastModified: Moment;
  serviceDate: Moment;
  ssn: string;
  state: string;
  status: string;
  suffix: string;
  talentPool: string;
  teamMembersSize: number;
  timeZone: string;
  title: string;
  totalTeamSize: BigNumber;
  userId: string;
  username: string;
  zipCode: string;
  approverOfAdvanceNav: AdvanceType[];
  auditUserSysIdOfOneTimeDeductionNav: OneTimeDeductionType[];
  benchStrengthNav: PicklistOptionType;
  budgetHolderIdOfSpotAwardNav: SpotAwardType[];
  businessSegmentNav: PicklistOptionType;
  codeOfRightToReturnNav: RightToReturnType[];
  competencyRatingNav: CompetencyRatingType[];
  concurrentUserOfOnboardingCandidateInfoNav: OnboardingCandidateInfoType[];
  costCenterManagerOfFoCostCenterNav: FoCostCenterType[];
  custRecruiterOfcustRcmOperatorLookupNav: Cust_Rcm_Operator_LookupType[];
  custRecruitingTeamLeadOfcustRcmOperatorLookupNav: Cust_Rcm_Operator_LookupType[];
  custSharedServicesOfcustRcmOperatorLookupNav: Cust_Rcm_Operator_LookupType[];
  custom05Nav: PicklistOptionType;
  customManager: UserType[];
  customReports: UserType[];
  delegateeOfAutoDelegateDetailNav: AutoDelegateDetailType[];
  delegatorOfAutoDelegateConfigNav: AutoDelegateConfigType[];
  directReports: UserType[];
  empInfo: EmpEmploymentType;
  ethnicityNav: PicklistOptionType;
  externalCodeOfSkillProfileNav: SkillProfileType[];
  headOfUnitOfFoBusinessUnitNav: FoBusinessUnitType[];
  headOfUnitOfFoDepartmentNav: FoDepartmentType[];
  headOfUnitOfFoDivisionNav: FoDivisionType[];
  hr: UserType;
  hrManagerIdOfOnboardingCandidateInfoNav: OnboardingCandidateInfoType[];
  hrReports: UserType[];
  impactOfLossNav: PicklistOptionType;
  incumbentOfPositionNav: PositionType[];
  manager: UserType;
  managerIdOfOnboardingCandidateInfoNav: OnboardingCandidateInfoType[];
  matrixManager: UserType[];
  matrixReports: UserType[];
  nominationNav: NominationTargetType[];
  nominatorIdOfSpotAwardNav: SpotAwardType[];
  ownerOfTalentPoolNav: TalentPoolType[];
  participantUserId1OfOnboardingMeetingEventNav: OnboardingMeetingEventType[];
  participantUserId2OfOnboardingMeetingEventNav: OnboardingMeetingEventType[];
  participantUserId3OfOnboardingMeetingEventNav: OnboardingMeetingEventType[];
  participantUserId4OfOnboardingMeetingEventNav: OnboardingMeetingEventType[];
  participantUserId5OfOnboardingMeetingEventNav: OnboardingMeetingEventType[];
  personKeyNav: PersonKeyType;
  processorIdOfOnboardingCandidateInfoNav: OnboardingCandidateInfoType[];
  proxy: UserType[];
  reasonForLeavingNav: PicklistOptionType;
  riskOfLossNav: PicklistOptionType;
  secondManager: UserType;
  secondReports: UserType[];
  subjectUserIdOfAchievementNav: AchievementType[];
  subjectUserIdOfActivityNav: ActivityType[];
  talentPoolNav: PicklistOptionType;
  targetIdOfTimeManagementAlertNav: TimeManagementAlertType[];
  userIdOfAccrualCalculationBaseNav: AccrualCalculationBaseType[];
  userIdOfBudgetGroupNav: BudgetGroupType[];
  userIdOfDataReplicationProxyNav: DataReplicationProxyType[];
  userIdOfEmployeePayrollRunResultsNav: EmployeePayrollRunResultsType[];
  userIdOfEmployeeTimeGroupNav: EmployeeTimeGroupType[];
  userIdOfEmployeeTimeNav: EmployeeTimeType[];
  userIdOfEmployeeTimeSheetNav: EmployeeTimeSheetType[];
  userIdOfExternalTimeDataNav: ExternalTimeDataType[];
  userIdOfExternalTimeRecordNav: ExternalTimeRecordType[];
  userIdOfHrisChangeLogDataReplicationNav: HrisChangeLogDataReplicationType[];
  userIdOfOnboardingCandidateInfoNav: OnboardingCandidateInfoType[];
  userIdOfPositionRightToReturnNav: PositionRightToReturnType[];
  userIdOfSpotAwardBudgetNav: SpotAwardBudgetType[];
  userIdOfSpotAwardNav: SpotAwardType[];
  userIdOfSpotAwardRedemptionNav: SpotAwardRedemptionType[];
  userIdOfTemporaryTimeInformationNav: TemporaryTimeInformationType[];
  userIdOfTimeAccountNav: TimeAccountType[];
  userIdOfTimeAccountSnapshotNav: TimeAccountSnapshotType[];
  userIdOfTimeCollectorNav: TimeCollectorType[];
  userIdOfWorkScheduleNav: WorkScheduleType[];
  userPermissionsNav: UserPermissionsType;
  userSysIdOfAdvancesAccumulationNav: AdvancesAccumulationType[];
  userSysIdOfNonRecurringPaymentNav: NonRecurringPaymentType[];
  userSysIdOfOneTimeDeductionNav: OneTimeDeductionType[];
  userSysIdOfRecurringDeductionNav: RecurringDeductionType[];
  userSysIdOfWorkOrderNav: WorkOrderType[];
  usersSysIdOfEmpCostDistributionNav: EmpCostDistributionType[];
  usersSysIdOfEmployeeDataReplicationConfirmationNav: EmployeeDataReplicationConfirmationType[];
  usersSysIdOfEmployeeDataReplicationElementNav: EmployeeDataReplicationElementType[];
  usersSysIdOfEmployeeDataReplicationNotificationNav: EmployeeDataReplicationNotificationType[];
  usersSysIdOfHireDateChangeNav: HireDateChangeType[];
  usersSysIdOfSecondaryAssignmentsItemNav: SecondaryAssignmentsItemType[];
  workOrderOwnerIdOfWorkOrderNav: WorkOrderType[];
  workerOfPaymentInformationV3Nav: PaymentInformationV3Type[];
}

export namespace User {
  /**
   * Static representation of the [[addressLine1]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ADDRESS_LINE_1: StringField<User> = new StringField('addressLine1', User, 'Edm.String');
  /**
   * Static representation of the [[addressLine2]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ADDRESS_LINE_2: StringField<User> = new StringField('addressLine2', User, 'Edm.String');
  /**
   * Static representation of the [[addressLine3]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ADDRESS_LINE_3: StringField<User> = new StringField('addressLine3', User, 'Edm.String');
  /**
   * Static representation of the [[benchStrength]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BENCH_STRENGTH: StringField<User> = new StringField('benchStrength', User, 'Edm.String');
  /**
   * Static representation of the [[businessPhone]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BUSINESS_PHONE: StringField<User> = new StringField('businessPhone', User, 'Edm.String');
  /**
   * Static representation of the [[businessSegment]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BUSINESS_SEGMENT: StringField<User> = new StringField('businessSegment', User, 'Edm.String');
  /**
   * Static representation of the [[cellPhone]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CELL_PHONE: StringField<User> = new StringField('cellPhone', User, 'Edm.String');
  /**
   * Static representation of the [[citizenship]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CITIZENSHIP: StringField<User> = new StringField('citizenship', User, 'Edm.String');
  /**
   * Static representation of the [[city]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CITY: StringField<User> = new StringField('city', User, 'Edm.String');
  /**
   * Static representation of the [[competency]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const COMPETENCY: NumberField<User> = new NumberField('competency', User, 'Edm.Single');
  /**
   * Static representation of the [[country]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const COUNTRY: StringField<User> = new StringField('country', User, 'Edm.String');
  /**
   * Static representation of the [[custom01]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CUSTOM_01: StringField<User> = new StringField('custom01', User, 'Edm.String');
  /**
   * Static representation of the [[custom02]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CUSTOM_02: StringField<User> = new StringField('custom02', User, 'Edm.String');
  /**
   * Static representation of the [[custom03]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CUSTOM_03: StringField<User> = new StringField('custom03', User, 'Edm.String');
  /**
   * Static representation of the [[custom04]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CUSTOM_04: StringField<User> = new StringField('custom04', User, 'Edm.String');
  /**
   * Static representation of the [[custom05]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CUSTOM_05: StringField<User> = new StringField('custom05', User, 'Edm.String');
  /**
   * Static representation of the [[custom06]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CUSTOM_06: StringField<User> = new StringField('custom06', User, 'Edm.String');
  /**
   * Static representation of the [[custom07]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CUSTOM_07: StringField<User> = new StringField('custom07', User, 'Edm.String');
  /**
   * Static representation of the [[custom08]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CUSTOM_08: StringField<User> = new StringField('custom08', User, 'Edm.String');
  /**
   * Static representation of the [[custom09]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CUSTOM_09: StringField<User> = new StringField('custom09', User, 'Edm.String');
  /**
   * Static representation of the [[custom10]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CUSTOM_10: StringField<User> = new StringField('custom10', User, 'Edm.String');
  /**
   * Static representation of the [[custom11]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CUSTOM_11: StringField<User> = new StringField('custom11', User, 'Edm.String');
  /**
   * Static representation of the [[custom12]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CUSTOM_12: StringField<User> = new StringField('custom12', User, 'Edm.String');
  /**
   * Static representation of the [[custom13]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CUSTOM_13: StringField<User> = new StringField('custom13', User, 'Edm.String');
  /**
   * Static representation of the [[custom14]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CUSTOM_14: StringField<User> = new StringField('custom14', User, 'Edm.String');
  /**
   * Static representation of the [[custom15]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CUSTOM_15: StringField<User> = new StringField('custom15', User, 'Edm.String');
  /**
   * Static representation of the [[dateOfBirth]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DATE_OF_BIRTH: DateField<User> = new DateField('dateOfBirth', User, 'Edm.DateTime');
  /**
   * Static representation of the [[dateOfPosition]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DATE_OF_POSITION: DateField<User> = new DateField('dateOfPosition', User, 'Edm.DateTime');
  /**
   * Static representation of the [[defaultFullName]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DEFAULT_FULL_NAME: StringField<User> = new StringField('defaultFullName', User, 'Edm.String');
  /**
   * Static representation of the [[defaultLocale]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DEFAULT_LOCALE: StringField<User> = new StringField('defaultLocale', User, 'Edm.String');
  /**
   * Static representation of the [[department]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DEPARTMENT: StringField<User> = new StringField('department', User, 'Edm.String');
  /**
   * Static representation of the [[division]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DIVISION: StringField<User> = new StringField('division', User, 'Edm.String');
  /**
   * Static representation of the [[email]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EMAIL: StringField<User> = new StringField('email', User, 'Edm.String');
  /**
   * Static representation of the [[empId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EMP_ID: StringField<User> = new StringField('empId', User, 'Edm.String');
  /**
   * Static representation of the [[ethnicity]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ETHNICITY: StringField<User> = new StringField('ethnicity', User, 'Edm.String');
  /**
   * Static representation of the [[fax]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FAX: StringField<User> = new StringField('fax', User, 'Edm.String');
  /**
   * Static representation of the [[firstName]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FIRST_NAME: StringField<User> = new StringField('firstName', User, 'Edm.String');
  /**
   * Static representation of the [[futureLeader]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const FUTURE_LEADER: BooleanField<User> = new BooleanField('futureLeader', User, 'Edm.Boolean');
  /**
   * Static representation of the [[gender]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const GENDER: StringField<User> = new StringField('gender', User, 'Edm.String');
  /**
   * Static representation of the [[hireDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const HIRE_DATE: DateField<User> = new DateField('hireDate', User, 'Edm.DateTime');
  /**
   * Static representation of the [[homePhone]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const HOME_PHONE: StringField<User> = new StringField('homePhone', User, 'Edm.String');
  /**
   * Static representation of the [[impactOfLoss]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const IMPACT_OF_LOSS: StringField<User> = new StringField('impactOfLoss', User, 'Edm.String');
  /**
   * Static representation of the [[jobCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const JOB_CODE: StringField<User> = new StringField('jobCode', User, 'Edm.String');
  /**
   * Static representation of the [[keyPosition]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const KEY_POSITION: BooleanField<User> = new BooleanField('keyPosition', User, 'Edm.Boolean');
  /**
   * Static representation of the [[lastModified]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED: DateField<User> = new DateField('lastModified', User, 'Edm.DateTime');
  /**
   * Static representation of the [[lastModifiedDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_DATE_TIME: DateField<User> = new DateField('lastModifiedDateTime', User, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[lastModifiedWithTz]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_WITH_TZ: DateField<User> = new DateField('lastModifiedWithTZ', User, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[lastName]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_NAME: StringField<User> = new StringField('lastName', User, 'Edm.String');
  /**
   * Static representation of the [[lastReviewDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_REVIEW_DATE: StringField<User> = new StringField('lastReviewDate', User, 'Edm.String');
  /**
   * Static representation of the [[level]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LEVEL: StringField<User> = new StringField('level', User, 'Edm.String');
  /**
   * Static representation of the [[location]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LOCATION: StringField<User> = new StringField('location', User, 'Edm.String');
  /**
   * Static representation of the [[married]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MARRIED: BooleanField<User> = new BooleanField('married', User, 'Edm.Boolean');
  /**
   * Static representation of the [[matrix1Label]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MATRIX_1_LABEL: StringField<User> = new StringField('matrix1Label', User, 'Edm.String');
  /**
   * Static representation of the [[matrix2Label]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MATRIX_2_LABEL: StringField<User> = new StringField('matrix2Label', User, 'Edm.String');
  /**
   * Static representation of the [[matrixManaged]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MATRIX_MANAGED: BooleanField<User> = new BooleanField('matrixManaged', User, 'Edm.Boolean');
  /**
   * Static representation of the [[mi]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MI: StringField<User> = new StringField('mi', User, 'Edm.String');
  /**
   * Static representation of the [[minority]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MINORITY: BooleanField<User> = new BooleanField('minority', User, 'Edm.Boolean');
  /**
   * Static representation of the [[nationality]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NATIONALITY: StringField<User> = new StringField('nationality', User, 'Edm.String');
  /**
   * Static representation of the [[newToPosition]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NEW_TO_POSITION: BooleanField<User> = new BooleanField('newToPosition', User, 'Edm.Boolean');
  /**
   * Static representation of the [[nickname]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NICKNAME: StringField<User> = new StringField('nickname', User, 'Edm.String');
  /**
   * Static representation of the [[objective]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const OBJECTIVE: NumberField<User> = new NumberField('objective', User, 'Edm.Single');
  /**
   * Static representation of the [[onboardingId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ONBOARDING_ID: StringField<User> = new StringField('onboardingId', User, 'Edm.String');
  /**
   * Static representation of the [[password]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PASSWORD: StringField<User> = new StringField('password', User, 'Edm.String');
  /**
   * Static representation of the [[performance]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PERFORMANCE: NumberField<User> = new NumberField('performance', User, 'Edm.Single');
  /**
   * Static representation of the [[potential]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const POTENTIAL: NumberField<User> = new NumberField('potential', User, 'Edm.Single');
  /**
   * Static representation of the [[reasonForLeaving]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const REASON_FOR_LEAVING: StringField<User> = new StringField('reasonForLeaving', User, 'Edm.String');
  /**
   * Static representation of the [[reviewFreq]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const REVIEW_FREQ: StringField<User> = new StringField('reviewFreq', User, 'Edm.String');
  /**
   * Static representation of the [[riskOfLoss]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const RISK_OF_LOSS: StringField<User> = new StringField('riskOfLoss', User, 'Edm.String');
  /**
   * Static representation of the [[sciLastModified]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SCI_LAST_MODIFIED: DateField<User> = new DateField('sciLastModified', User, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[serviceDate]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SERVICE_DATE: DateField<User> = new DateField('serviceDate', User, 'Edm.DateTime');
  /**
   * Static representation of the [[ssn]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SSN: StringField<User> = new StringField('ssn', User, 'Edm.String');
  /**
   * Static representation of the [[state]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const STATE: StringField<User> = new StringField('state', User, 'Edm.String');
  /**
   * Static representation of the [[status]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const STATUS: StringField<User> = new StringField('status', User, 'Edm.String');
  /**
   * Static representation of the [[suffix]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SUFFIX: StringField<User> = new StringField('suffix', User, 'Edm.String');
  /**
   * Static representation of the [[talentPool]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TALENT_POOL: StringField<User> = new StringField('talentPool', User, 'Edm.String');
  /**
   * Static representation of the [[teamMembersSize]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TEAM_MEMBERS_SIZE: NumberField<User> = new NumberField('teamMembersSize', User, 'Edm.Int32');
  /**
   * Static representation of the [[timeZone]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TIME_ZONE: StringField<User> = new StringField('timeZone', User, 'Edm.String');
  /**
   * Static representation of the [[title]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TITLE: StringField<User> = new StringField('title', User, 'Edm.String');
  /**
   * Static representation of the [[totalTeamSize]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TOTAL_TEAM_SIZE: BigNumberField<User> = new BigNumberField('totalTeamSize', User, 'Edm.Int64');
  /**
   * Static representation of the [[userId]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const USER_ID: StringField<User> = new StringField('userId', User, 'Edm.String');
  /**
   * Static representation of the [[username]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const USERNAME: StringField<User> = new StringField('username', User, 'Edm.String');
  /**
   * Static representation of the [[zipCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ZIP_CODE: StringField<User> = new StringField('zipCode', User, 'Edm.String');
  /**
   * Static representation of the one-to-many navigation property [[approverOfAdvanceNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const APPROVER_OF_ADVANCE_NAV: Link<User, Advance> = new Link('approverOfAdvanceNav', User, Advance);
  /**
   * Static representation of the one-to-many navigation property [[auditUserSysIdOfOneTimeDeductionNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const AUDIT_USER_SYS_ID_OF_ONE_TIME_DEDUCTION_NAV: Link<User, OneTimeDeduction> = new Link('auditUserSysIdOfOneTimeDeductionNav', User, OneTimeDeduction);
  /**
   * Static representation of the one-to-one navigation property [[benchStrengthNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BENCH_STRENGTH_NAV: OneToOneLink<User, PicklistOption> = new OneToOneLink('benchStrengthNav', User, PicklistOption);
  /**
   * Static representation of the one-to-many navigation property [[budgetHolderIdOfSpotAwardNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BUDGET_HOLDER_ID_OF_SPOT_AWARD_NAV: Link<User, SpotAward> = new Link('budgetHolderIdOfSpotAwardNav', User, SpotAward);
  /**
   * Static representation of the one-to-one navigation property [[businessSegmentNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const BUSINESS_SEGMENT_NAV: OneToOneLink<User, PicklistOption> = new OneToOneLink('businessSegmentNav', User, PicklistOption);
  /**
   * Static representation of the one-to-many navigation property [[codeOfRightToReturnNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CODE_OF_RIGHT_TO_RETURN_NAV: Link<User, RightToReturn> = new Link('codeOfRightToReturnNav', User, RightToReturn);
  /**
   * Static representation of the one-to-many navigation property [[competencyRatingNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const COMPETENCY_RATING_NAV: Link<User, CompetencyRating> = new Link('competencyRatingNav', User, CompetencyRating);
  /**
   * Static representation of the one-to-many navigation property [[concurrentUserOfOnboardingCandidateInfoNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CONCURRENT_USER_OF_ONBOARDING_CANDIDATE_INFO_NAV: Link<User, OnboardingCandidateInfo> = new Link('concurrentUserOfOnboardingCandidateInfoNav', User, OnboardingCandidateInfo);
  /**
   * Static representation of the one-to-many navigation property [[costCenterManagerOfFoCostCenterNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const COST_CENTER_MANAGER_OF_FO_COST_CENTER_NAV: Link<User, FoCostCenter> = new Link('costCenterManagerOfFOCostCenterNav', User, FoCostCenter);
  /**
   * Static representation of the one-to-many navigation property [[custRecruiterOfcustRcmOperatorLookupNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CUST_RECRUITER_OFCUST_RCM_OPERATOR_LOOKUP_NAV: Link<User, Cust_Rcm_Operator_Lookup> = new Link('cust_RecruiterOfcust_RCM_Operator_LookupNav', User, Cust_Rcm_Operator_Lookup);
  /**
   * Static representation of the one-to-many navigation property [[custRecruitingTeamLeadOfcustRcmOperatorLookupNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CUST_RECRUITING_TEAM_LEAD_OFCUST_RCM_OPERATOR_LOOKUP_NAV: Link<User, Cust_Rcm_Operator_Lookup> = new Link('cust_RecruitingTeamLeadOfcust_RCM_Operator_LookupNav', User, Cust_Rcm_Operator_Lookup);
  /**
   * Static representation of the one-to-many navigation property [[custSharedServicesOfcustRcmOperatorLookupNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CUST_SHARED_SERVICES_OFCUST_RCM_OPERATOR_LOOKUP_NAV: Link<User, Cust_Rcm_Operator_Lookup> = new Link('cust_SharedServicesOfcust_RCM_Operator_LookupNav', User, Cust_Rcm_Operator_Lookup);
  /**
   * Static representation of the one-to-one navigation property [[custom05Nav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CUSTOM_05_NAV: OneToOneLink<User, PicklistOption> = new OneToOneLink('custom05Nav', User, PicklistOption);
  /**
   * Static representation of the one-to-many navigation property [[customManager]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CUSTOM_MANAGER: Link<User, User> = new Link('customManager', User, User);
  /**
   * Static representation of the one-to-many navigation property [[customReports]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CUSTOM_REPORTS: Link<User, User> = new Link('customReports', User, User);
  /**
   * Static representation of the one-to-many navigation property [[delegateeOfAutoDelegateDetailNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DELEGATEE_OF_AUTO_DELEGATE_DETAIL_NAV: Link<User, AutoDelegateDetail> = new Link('delegateeOfAutoDelegateDetailNav', User, AutoDelegateDetail);
  /**
   * Static representation of the one-to-many navigation property [[delegatorOfAutoDelegateConfigNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DELEGATOR_OF_AUTO_DELEGATE_CONFIG_NAV: Link<User, AutoDelegateConfig> = new Link('delegatorOfAutoDelegateConfigNav', User, AutoDelegateConfig);
  /**
   * Static representation of the one-to-many navigation property [[directReports]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const DIRECT_REPORTS: Link<User, User> = new Link('directReports', User, User);
  /**
   * Static representation of the one-to-one navigation property [[empInfo]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EMP_INFO: OneToOneLink<User, EmpEmployment> = new OneToOneLink('empInfo', User, EmpEmployment);
  /**
   * Static representation of the one-to-one navigation property [[ethnicityNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ETHNICITY_NAV: OneToOneLink<User, PicklistOption> = new OneToOneLink('ethnicityNav', User, PicklistOption);
  /**
   * Static representation of the one-to-many navigation property [[externalCodeOfSkillProfileNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EXTERNAL_CODE_OF_SKILL_PROFILE_NAV: Link<User, SkillProfile> = new Link('externalCodeOfSkillProfileNav', User, SkillProfile);
  /**
   * Static representation of the one-to-many navigation property [[headOfUnitOfFoBusinessUnitNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const HEAD_OF_UNIT_OF_FO_BUSINESS_UNIT_NAV: Link<User, FoBusinessUnit> = new Link('headOfUnitOfFOBusinessUnitNav', User, FoBusinessUnit);
  /**
   * Static representation of the one-to-many navigation property [[headOfUnitOfFoDepartmentNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const HEAD_OF_UNIT_OF_FO_DEPARTMENT_NAV: Link<User, FoDepartment> = new Link('headOfUnitOfFODepartmentNav', User, FoDepartment);
  /**
   * Static representation of the one-to-many navigation property [[headOfUnitOfFoDivisionNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const HEAD_OF_UNIT_OF_FO_DIVISION_NAV: Link<User, FoDivision> = new Link('headOfUnitOfFODivisionNav', User, FoDivision);
  /**
   * Static representation of the one-to-one navigation property [[hr]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const HR: OneToOneLink<User, User> = new OneToOneLink('hr', User, User);
  /**
   * Static representation of the one-to-many navigation property [[hrManagerIdOfOnboardingCandidateInfoNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const HR_MANAGER_ID_OF_ONBOARDING_CANDIDATE_INFO_NAV: Link<User, OnboardingCandidateInfo> = new Link('hrManagerIdOfOnboardingCandidateInfoNav', User, OnboardingCandidateInfo);
  /**
   * Static representation of the one-to-many navigation property [[hrReports]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const HR_REPORTS: Link<User, User> = new Link('hrReports', User, User);
  /**
   * Static representation of the one-to-one navigation property [[impactOfLossNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const IMPACT_OF_LOSS_NAV: OneToOneLink<User, PicklistOption> = new OneToOneLink('impactOfLossNav', User, PicklistOption);
  /**
   * Static representation of the one-to-many navigation property [[incumbentOfPositionNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const INCUMBENT_OF_POSITION_NAV: Link<User, Position> = new Link('incumbentOfPositionNav', User, Position);
  /**
   * Static representation of the one-to-one navigation property [[manager]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MANAGER: OneToOneLink<User, User> = new OneToOneLink('manager', User, User);
  /**
   * Static representation of the one-to-many navigation property [[managerIdOfOnboardingCandidateInfoNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MANAGER_ID_OF_ONBOARDING_CANDIDATE_INFO_NAV: Link<User, OnboardingCandidateInfo> = new Link('managerIdOfOnboardingCandidateInfoNav', User, OnboardingCandidateInfo);
  /**
   * Static representation of the one-to-many navigation property [[matrixManager]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MATRIX_MANAGER: Link<User, User> = new Link('matrixManager', User, User);
  /**
   * Static representation of the one-to-many navigation property [[matrixReports]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const MATRIX_REPORTS: Link<User, User> = new Link('matrixReports', User, User);
  /**
   * Static representation of the one-to-many navigation property [[nominationNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NOMINATION_NAV: Link<User, NominationTarget> = new Link('nominationNav', User, NominationTarget);
  /**
   * Static representation of the one-to-many navigation property [[nominatorIdOfSpotAwardNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NOMINATOR_ID_OF_SPOT_AWARD_NAV: Link<User, SpotAward> = new Link('nominatorIdOfSpotAwardNav', User, SpotAward);
  /**
   * Static representation of the one-to-many navigation property [[ownerOfTalentPoolNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const OWNER_OF_TALENT_POOL_NAV: Link<User, TalentPool> = new Link('ownerOfTalentPoolNav', User, TalentPool);
  /**
   * Static representation of the one-to-many navigation property [[participantUserId1OfOnboardingMeetingEventNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PARTICIPANT_USER_ID_1_OF_ONBOARDING_MEETING_EVENT_NAV: Link<User, OnboardingMeetingEvent> = new Link('participantUserId1OfOnboardingMeetingEventNav', User, OnboardingMeetingEvent);
  /**
   * Static representation of the one-to-many navigation property [[participantUserId2OfOnboardingMeetingEventNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PARTICIPANT_USER_ID_2_OF_ONBOARDING_MEETING_EVENT_NAV: Link<User, OnboardingMeetingEvent> = new Link('participantUserId2OfOnboardingMeetingEventNav', User, OnboardingMeetingEvent);
  /**
   * Static representation of the one-to-many navigation property [[participantUserId3OfOnboardingMeetingEventNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PARTICIPANT_USER_ID_3_OF_ONBOARDING_MEETING_EVENT_NAV: Link<User, OnboardingMeetingEvent> = new Link('participantUserId3OfOnboardingMeetingEventNav', User, OnboardingMeetingEvent);
  /**
   * Static representation of the one-to-many navigation property [[participantUserId4OfOnboardingMeetingEventNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PARTICIPANT_USER_ID_4_OF_ONBOARDING_MEETING_EVENT_NAV: Link<User, OnboardingMeetingEvent> = new Link('participantUserId4OfOnboardingMeetingEventNav', User, OnboardingMeetingEvent);
  /**
   * Static representation of the one-to-many navigation property [[participantUserId5OfOnboardingMeetingEventNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PARTICIPANT_USER_ID_5_OF_ONBOARDING_MEETING_EVENT_NAV: Link<User, OnboardingMeetingEvent> = new Link('participantUserId5OfOnboardingMeetingEventNav', User, OnboardingMeetingEvent);
  /**
   * Static representation of the one-to-one navigation property [[personKeyNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PERSON_KEY_NAV: OneToOneLink<User, PersonKey> = new OneToOneLink('personKeyNav', User, PersonKey);
  /**
   * Static representation of the one-to-many navigation property [[processorIdOfOnboardingCandidateInfoNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PROCESSOR_ID_OF_ONBOARDING_CANDIDATE_INFO_NAV: Link<User, OnboardingCandidateInfo> = new Link('processorIdOfOnboardingCandidateInfoNav', User, OnboardingCandidateInfo);
  /**
   * Static representation of the one-to-many navigation property [[proxy]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PROXY: Link<User, User> = new Link('proxy', User, User);
  /**
   * Static representation of the one-to-one navigation property [[reasonForLeavingNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const REASON_FOR_LEAVING_NAV: OneToOneLink<User, PicklistOption> = new OneToOneLink('reasonForLeavingNav', User, PicklistOption);
  /**
   * Static representation of the one-to-one navigation property [[riskOfLossNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const RISK_OF_LOSS_NAV: OneToOneLink<User, PicklistOption> = new OneToOneLink('riskOfLossNav', User, PicklistOption);
  /**
   * Static representation of the one-to-one navigation property [[secondManager]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SECOND_MANAGER: OneToOneLink<User, User> = new OneToOneLink('secondManager', User, User);
  /**
   * Static representation of the one-to-many navigation property [[secondReports]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SECOND_REPORTS: Link<User, User> = new Link('secondReports', User, User);
  /**
   * Static representation of the one-to-many navigation property [[subjectUserIdOfAchievementNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SUBJECT_USER_ID_OF_ACHIEVEMENT_NAV: Link<User, Achievement> = new Link('subjectUserIdOfAchievementNav', User, Achievement);
  /**
   * Static representation of the one-to-many navigation property [[subjectUserIdOfActivityNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const SUBJECT_USER_ID_OF_ACTIVITY_NAV: Link<User, Activity> = new Link('subjectUserIdOfActivityNav', User, Activity);
  /**
   * Static representation of the one-to-one navigation property [[talentPoolNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TALENT_POOL_NAV: OneToOneLink<User, PicklistOption> = new OneToOneLink('talentPoolNav', User, PicklistOption);
  /**
   * Static representation of the one-to-many navigation property [[targetIdOfTimeManagementAlertNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const TARGET_ID_OF_TIME_MANAGEMENT_ALERT_NAV: Link<User, TimeManagementAlert> = new Link('targetIdOfTimeManagementAlertNav', User, TimeManagementAlert);
  /**
   * Static representation of the one-to-many navigation property [[userIdOfAccrualCalculationBaseNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const USER_ID_OF_ACCRUAL_CALCULATION_BASE_NAV: Link<User, AccrualCalculationBase> = new Link('userIdOfAccrualCalculationBaseNav', User, AccrualCalculationBase);
  /**
   * Static representation of the one-to-many navigation property [[userIdOfBudgetGroupNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const USER_ID_OF_BUDGET_GROUP_NAV: Link<User, BudgetGroup> = new Link('userIdOfBudgetGroupNav', User, BudgetGroup);
  /**
   * Static representation of the one-to-many navigation property [[userIdOfDataReplicationProxyNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const USER_ID_OF_DATA_REPLICATION_PROXY_NAV: Link<User, DataReplicationProxy> = new Link('userIdOfDataReplicationProxyNav', User, DataReplicationProxy);
  /**
   * Static representation of the one-to-many navigation property [[userIdOfEmployeePayrollRunResultsNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const USER_ID_OF_EMPLOYEE_PAYROLL_RUN_RESULTS_NAV: Link<User, EmployeePayrollRunResults> = new Link('userIdOfEmployeePayrollRunResultsNav', User, EmployeePayrollRunResults);
  /**
   * Static representation of the one-to-many navigation property [[userIdOfEmployeeTimeGroupNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const USER_ID_OF_EMPLOYEE_TIME_GROUP_NAV: Link<User, EmployeeTimeGroup> = new Link('userIdOfEmployeeTimeGroupNav', User, EmployeeTimeGroup);
  /**
   * Static representation of the one-to-many navigation property [[userIdOfEmployeeTimeNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const USER_ID_OF_EMPLOYEE_TIME_NAV: Link<User, EmployeeTime> = new Link('userIdOfEmployeeTimeNav', User, EmployeeTime);
  /**
   * Static representation of the one-to-many navigation property [[userIdOfEmployeeTimeSheetNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const USER_ID_OF_EMPLOYEE_TIME_SHEET_NAV: Link<User, EmployeeTimeSheet> = new Link('userIdOfEmployeeTimeSheetNav', User, EmployeeTimeSheet);
  /**
   * Static representation of the one-to-many navigation property [[userIdOfExternalTimeDataNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const USER_ID_OF_EXTERNAL_TIME_DATA_NAV: Link<User, ExternalTimeData> = new Link('userIdOfExternalTimeDataNav', User, ExternalTimeData);
  /**
   * Static representation of the one-to-many navigation property [[userIdOfExternalTimeRecordNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const USER_ID_OF_EXTERNAL_TIME_RECORD_NAV: Link<User, ExternalTimeRecord> = new Link('userIdOfExternalTimeRecordNav', User, ExternalTimeRecord);
  /**
   * Static representation of the one-to-many navigation property [[userIdOfHrisChangeLogDataReplicationNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const USER_ID_OF_HRIS_CHANGE_LOG_DATA_REPLICATION_NAV: Link<User, HrisChangeLogDataReplication> = new Link('userIdOfHRISChangeLogDataReplicationNav', User, HrisChangeLogDataReplication);
  /**
   * Static representation of the one-to-many navigation property [[userIdOfOnboardingCandidateInfoNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const USER_ID_OF_ONBOARDING_CANDIDATE_INFO_NAV: Link<User, OnboardingCandidateInfo> = new Link('userIdOfOnboardingCandidateInfoNav', User, OnboardingCandidateInfo);
  /**
   * Static representation of the one-to-many navigation property [[userIdOfPositionRightToReturnNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const USER_ID_OF_POSITION_RIGHT_TO_RETURN_NAV: Link<User, PositionRightToReturn> = new Link('userIdOfPositionRightToReturnNav', User, PositionRightToReturn);
  /**
   * Static representation of the one-to-many navigation property [[userIdOfSpotAwardBudgetNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const USER_ID_OF_SPOT_AWARD_BUDGET_NAV: Link<User, SpotAwardBudget> = new Link('userIdOfSpotAwardBudgetNav', User, SpotAwardBudget);
  /**
   * Static representation of the one-to-many navigation property [[userIdOfSpotAwardNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const USER_ID_OF_SPOT_AWARD_NAV: Link<User, SpotAward> = new Link('userIdOfSpotAwardNav', User, SpotAward);
  /**
   * Static representation of the one-to-many navigation property [[userIdOfSpotAwardRedemptionNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const USER_ID_OF_SPOT_AWARD_REDEMPTION_NAV: Link<User, SpotAwardRedemption> = new Link('userIdOfSpotAwardRedemptionNav', User, SpotAwardRedemption);
  /**
   * Static representation of the one-to-many navigation property [[userIdOfTemporaryTimeInformationNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const USER_ID_OF_TEMPORARY_TIME_INFORMATION_NAV: Link<User, TemporaryTimeInformation> = new Link('userIdOfTemporaryTimeInformationNav', User, TemporaryTimeInformation);
  /**
   * Static representation of the one-to-many navigation property [[userIdOfTimeAccountNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const USER_ID_OF_TIME_ACCOUNT_NAV: Link<User, TimeAccount> = new Link('userIdOfTimeAccountNav', User, TimeAccount);
  /**
   * Static representation of the one-to-many navigation property [[userIdOfTimeAccountSnapshotNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const USER_ID_OF_TIME_ACCOUNT_SNAPSHOT_NAV: Link<User, TimeAccountSnapshot> = new Link('userIdOfTimeAccountSnapshotNav', User, TimeAccountSnapshot);
  /**
   * Static representation of the one-to-many navigation property [[userIdOfTimeCollectorNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const USER_ID_OF_TIME_COLLECTOR_NAV: Link<User, TimeCollector> = new Link('userIdOfTimeCollectorNav', User, TimeCollector);
  /**
   * Static representation of the one-to-many navigation property [[userIdOfWorkScheduleNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const USER_ID_OF_WORK_SCHEDULE_NAV: Link<User, WorkSchedule> = new Link('userIdOfWorkScheduleNav', User, WorkSchedule);
  /**
   * Static representation of the one-to-one navigation property [[userPermissionsNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const USER_PERMISSIONS_NAV: OneToOneLink<User, UserPermissions> = new OneToOneLink('userPermissionsNav', User, UserPermissions);
  /**
   * Static representation of the one-to-many navigation property [[userSysIdOfAdvancesAccumulationNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const USER_SYS_ID_OF_ADVANCES_ACCUMULATION_NAV: Link<User, AdvancesAccumulation> = new Link('userSysIdOfAdvancesAccumulationNav', User, AdvancesAccumulation);
  /**
   * Static representation of the one-to-many navigation property [[userSysIdOfNonRecurringPaymentNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const USER_SYS_ID_OF_NON_RECURRING_PAYMENT_NAV: Link<User, NonRecurringPayment> = new Link('userSysIdOfNonRecurringPaymentNav', User, NonRecurringPayment);
  /**
   * Static representation of the one-to-many navigation property [[userSysIdOfOneTimeDeductionNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const USER_SYS_ID_OF_ONE_TIME_DEDUCTION_NAV: Link<User, OneTimeDeduction> = new Link('userSysIdOfOneTimeDeductionNav', User, OneTimeDeduction);
  /**
   * Static representation of the one-to-many navigation property [[userSysIdOfRecurringDeductionNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const USER_SYS_ID_OF_RECURRING_DEDUCTION_NAV: Link<User, RecurringDeduction> = new Link('userSysIdOfRecurringDeductionNav', User, RecurringDeduction);
  /**
   * Static representation of the one-to-many navigation property [[userSysIdOfWorkOrderNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const USER_SYS_ID_OF_WORK_ORDER_NAV: Link<User, WorkOrder> = new Link('userSysIdOfWorkOrderNav', User, WorkOrder);
  /**
   * Static representation of the one-to-many navigation property [[usersSysIdOfEmpCostDistributionNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const USERS_SYS_ID_OF_EMP_COST_DISTRIBUTION_NAV: Link<User, EmpCostDistribution> = new Link('usersSysIdOfEmpCostDistributionNav', User, EmpCostDistribution);
  /**
   * Static representation of the one-to-many navigation property [[usersSysIdOfEmployeeDataReplicationConfirmationNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const USERS_SYS_ID_OF_EMPLOYEE_DATA_REPLICATION_CONFIRMATION_NAV: Link<User, EmployeeDataReplicationConfirmation> = new Link('usersSysIdOfEmployeeDataReplicationConfirmationNav', User, EmployeeDataReplicationConfirmation);
  /**
   * Static representation of the one-to-many navigation property [[usersSysIdOfEmployeeDataReplicationElementNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const USERS_SYS_ID_OF_EMPLOYEE_DATA_REPLICATION_ELEMENT_NAV: Link<User, EmployeeDataReplicationElement> = new Link('usersSysIdOfEmployeeDataReplicationElementNav', User, EmployeeDataReplicationElement);
  /**
   * Static representation of the one-to-many navigation property [[usersSysIdOfEmployeeDataReplicationNotificationNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const USERS_SYS_ID_OF_EMPLOYEE_DATA_REPLICATION_NOTIFICATION_NAV: Link<User, EmployeeDataReplicationNotification> = new Link('usersSysIdOfEmployeeDataReplicationNotificationNav', User, EmployeeDataReplicationNotification);
  /**
   * Static representation of the one-to-many navigation property [[usersSysIdOfHireDateChangeNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const USERS_SYS_ID_OF_HIRE_DATE_CHANGE_NAV: Link<User, HireDateChange> = new Link('usersSysIdOfHireDateChangeNav', User, HireDateChange);
  /**
   * Static representation of the one-to-many navigation property [[usersSysIdOfSecondaryAssignmentsItemNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const USERS_SYS_ID_OF_SECONDARY_ASSIGNMENTS_ITEM_NAV: Link<User, SecondaryAssignmentsItem> = new Link('usersSysIdOfSecondaryAssignmentsItemNav', User, SecondaryAssignmentsItem);
  /**
   * Static representation of the one-to-many navigation property [[workOrderOwnerIdOfWorkOrderNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const WORK_ORDER_OWNER_ID_OF_WORK_ORDER_NAV: Link<User, WorkOrder> = new Link('workOrderOwnerIdOfWorkOrderNav', User, WorkOrder);
  /**
   * Static representation of the one-to-many navigation property [[workerOfPaymentInformationV3Nav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const WORKER_OF_PAYMENT_INFORMATION_V_3_NAV: Link<User, PaymentInformationV3> = new Link('workerOfPaymentInformationV3Nav', User, PaymentInformationV3);
  /**
   * All fields of the User entity.
   */
  export const _allFields: Array<StringField<User> | NumberField<User> | DateField<User> | BooleanField<User> | BigNumberField<User> | Link<User, Advance> | Link<User, OneTimeDeduction> | OneToOneLink<User, PicklistOption> | Link<User, SpotAward> | Link<User, RightToReturn> | Link<User, CompetencyRating> | Link<User, OnboardingCandidateInfo> | Link<User, FoCostCenter> | Link<User, Cust_Rcm_Operator_Lookup> | Link<User, User> | Link<User, AutoDelegateDetail> | Link<User, AutoDelegateConfig> | OneToOneLink<User, EmpEmployment> | Link<User, SkillProfile> | Link<User, FoBusinessUnit> | Link<User, FoDepartment> | Link<User, FoDivision> | OneToOneLink<User, User> | Link<User, Position> | Link<User, NominationTarget> | Link<User, TalentPool> | Link<User, OnboardingMeetingEvent> | OneToOneLink<User, PersonKey> | Link<User, Achievement> | Link<User, Activity> | Link<User, TimeManagementAlert> | Link<User, AccrualCalculationBase> | Link<User, BudgetGroup> | Link<User, DataReplicationProxy> | Link<User, EmployeePayrollRunResults> | Link<User, EmployeeTimeGroup> | Link<User, EmployeeTime> | Link<User, EmployeeTimeSheet> | Link<User, ExternalTimeData> | Link<User, ExternalTimeRecord> | Link<User, HrisChangeLogDataReplication> | Link<User, PositionRightToReturn> | Link<User, SpotAwardBudget> | Link<User, SpotAwardRedemption> | Link<User, TemporaryTimeInformation> | Link<User, TimeAccount> | Link<User, TimeAccountSnapshot> | Link<User, TimeCollector> | Link<User, WorkSchedule> | OneToOneLink<User, UserPermissions> | Link<User, AdvancesAccumulation> | Link<User, NonRecurringPayment> | Link<User, RecurringDeduction> | Link<User, WorkOrder> | Link<User, EmpCostDistribution> | Link<User, EmployeeDataReplicationConfirmation> | Link<User, EmployeeDataReplicationElement> | Link<User, EmployeeDataReplicationNotification> | Link<User, HireDateChange> | Link<User, SecondaryAssignmentsItem> | Link<User, PaymentInformationV3>> = [
    User.ADDRESS_LINE_1,
    User.ADDRESS_LINE_2,
    User.ADDRESS_LINE_3,
    User.BENCH_STRENGTH,
    User.BUSINESS_PHONE,
    User.BUSINESS_SEGMENT,
    User.CELL_PHONE,
    User.CITIZENSHIP,
    User.CITY,
    User.COMPETENCY,
    User.COUNTRY,
    User.CUSTOM_01,
    User.CUSTOM_02,
    User.CUSTOM_03,
    User.CUSTOM_04,
    User.CUSTOM_05,
    User.CUSTOM_06,
    User.CUSTOM_07,
    User.CUSTOM_08,
    User.CUSTOM_09,
    User.CUSTOM_10,
    User.CUSTOM_11,
    User.CUSTOM_12,
    User.CUSTOM_13,
    User.CUSTOM_14,
    User.CUSTOM_15,
    User.DATE_OF_BIRTH,
    User.DATE_OF_POSITION,
    User.DEFAULT_FULL_NAME,
    User.DEFAULT_LOCALE,
    User.DEPARTMENT,
    User.DIVISION,
    User.EMAIL,
    User.EMP_ID,
    User.ETHNICITY,
    User.FAX,
    User.FIRST_NAME,
    User.FUTURE_LEADER,
    User.GENDER,
    User.HIRE_DATE,
    User.HOME_PHONE,
    User.IMPACT_OF_LOSS,
    User.JOB_CODE,
    User.KEY_POSITION,
    User.LAST_MODIFIED,
    User.LAST_MODIFIED_DATE_TIME,
    User.LAST_MODIFIED_WITH_TZ,
    User.LAST_NAME,
    User.LAST_REVIEW_DATE,
    User.LEVEL,
    User.LOCATION,
    User.MARRIED,
    User.MATRIX_1_LABEL,
    User.MATRIX_2_LABEL,
    User.MATRIX_MANAGED,
    User.MI,
    User.MINORITY,
    User.NATIONALITY,
    User.NEW_TO_POSITION,
    User.NICKNAME,
    User.OBJECTIVE,
    User.ONBOARDING_ID,
    User.PASSWORD,
    User.PERFORMANCE,
    User.POTENTIAL,
    User.REASON_FOR_LEAVING,
    User.REVIEW_FREQ,
    User.RISK_OF_LOSS,
    User.SCI_LAST_MODIFIED,
    User.SERVICE_DATE,
    User.SSN,
    User.STATE,
    User.STATUS,
    User.SUFFIX,
    User.TALENT_POOL,
    User.TEAM_MEMBERS_SIZE,
    User.TIME_ZONE,
    User.TITLE,
    User.TOTAL_TEAM_SIZE,
    User.USER_ID,
    User.USERNAME,
    User.ZIP_CODE,
    User.APPROVER_OF_ADVANCE_NAV,
    User.AUDIT_USER_SYS_ID_OF_ONE_TIME_DEDUCTION_NAV,
    User.BENCH_STRENGTH_NAV,
    User.BUDGET_HOLDER_ID_OF_SPOT_AWARD_NAV,
    User.BUSINESS_SEGMENT_NAV,
    User.CODE_OF_RIGHT_TO_RETURN_NAV,
    User.COMPETENCY_RATING_NAV,
    User.CONCURRENT_USER_OF_ONBOARDING_CANDIDATE_INFO_NAV,
    User.COST_CENTER_MANAGER_OF_FO_COST_CENTER_NAV,
    User.CUST_RECRUITER_OFCUST_RCM_OPERATOR_LOOKUP_NAV,
    User.CUST_RECRUITING_TEAM_LEAD_OFCUST_RCM_OPERATOR_LOOKUP_NAV,
    User.CUST_SHARED_SERVICES_OFCUST_RCM_OPERATOR_LOOKUP_NAV,
    User.CUSTOM_05_NAV,
    User.CUSTOM_MANAGER,
    User.CUSTOM_REPORTS,
    User.DELEGATEE_OF_AUTO_DELEGATE_DETAIL_NAV,
    User.DELEGATOR_OF_AUTO_DELEGATE_CONFIG_NAV,
    User.DIRECT_REPORTS,
    User.EMP_INFO,
    User.ETHNICITY_NAV,
    User.EXTERNAL_CODE_OF_SKILL_PROFILE_NAV,
    User.HEAD_OF_UNIT_OF_FO_BUSINESS_UNIT_NAV,
    User.HEAD_OF_UNIT_OF_FO_DEPARTMENT_NAV,
    User.HEAD_OF_UNIT_OF_FO_DIVISION_NAV,
    User.HR,
    User.HR_MANAGER_ID_OF_ONBOARDING_CANDIDATE_INFO_NAV,
    User.HR_REPORTS,
    User.IMPACT_OF_LOSS_NAV,
    User.INCUMBENT_OF_POSITION_NAV,
    User.MANAGER,
    User.MANAGER_ID_OF_ONBOARDING_CANDIDATE_INFO_NAV,
    User.MATRIX_MANAGER,
    User.MATRIX_REPORTS,
    User.NOMINATION_NAV,
    User.NOMINATOR_ID_OF_SPOT_AWARD_NAV,
    User.OWNER_OF_TALENT_POOL_NAV,
    User.PARTICIPANT_USER_ID_1_OF_ONBOARDING_MEETING_EVENT_NAV,
    User.PARTICIPANT_USER_ID_2_OF_ONBOARDING_MEETING_EVENT_NAV,
    User.PARTICIPANT_USER_ID_3_OF_ONBOARDING_MEETING_EVENT_NAV,
    User.PARTICIPANT_USER_ID_4_OF_ONBOARDING_MEETING_EVENT_NAV,
    User.PARTICIPANT_USER_ID_5_OF_ONBOARDING_MEETING_EVENT_NAV,
    User.PERSON_KEY_NAV,
    User.PROCESSOR_ID_OF_ONBOARDING_CANDIDATE_INFO_NAV,
    User.PROXY,
    User.REASON_FOR_LEAVING_NAV,
    User.RISK_OF_LOSS_NAV,
    User.SECOND_MANAGER,
    User.SECOND_REPORTS,
    User.SUBJECT_USER_ID_OF_ACHIEVEMENT_NAV,
    User.SUBJECT_USER_ID_OF_ACTIVITY_NAV,
    User.TALENT_POOL_NAV,
    User.TARGET_ID_OF_TIME_MANAGEMENT_ALERT_NAV,
    User.USER_ID_OF_ACCRUAL_CALCULATION_BASE_NAV,
    User.USER_ID_OF_BUDGET_GROUP_NAV,
    User.USER_ID_OF_DATA_REPLICATION_PROXY_NAV,
    User.USER_ID_OF_EMPLOYEE_PAYROLL_RUN_RESULTS_NAV,
    User.USER_ID_OF_EMPLOYEE_TIME_GROUP_NAV,
    User.USER_ID_OF_EMPLOYEE_TIME_NAV,
    User.USER_ID_OF_EMPLOYEE_TIME_SHEET_NAV,
    User.USER_ID_OF_EXTERNAL_TIME_DATA_NAV,
    User.USER_ID_OF_EXTERNAL_TIME_RECORD_NAV,
    User.USER_ID_OF_HRIS_CHANGE_LOG_DATA_REPLICATION_NAV,
    User.USER_ID_OF_ONBOARDING_CANDIDATE_INFO_NAV,
    User.USER_ID_OF_POSITION_RIGHT_TO_RETURN_NAV,
    User.USER_ID_OF_SPOT_AWARD_BUDGET_NAV,
    User.USER_ID_OF_SPOT_AWARD_NAV,
    User.USER_ID_OF_SPOT_AWARD_REDEMPTION_NAV,
    User.USER_ID_OF_TEMPORARY_TIME_INFORMATION_NAV,
    User.USER_ID_OF_TIME_ACCOUNT_NAV,
    User.USER_ID_OF_TIME_ACCOUNT_SNAPSHOT_NAV,
    User.USER_ID_OF_TIME_COLLECTOR_NAV,
    User.USER_ID_OF_WORK_SCHEDULE_NAV,
    User.USER_PERMISSIONS_NAV,
    User.USER_SYS_ID_OF_ADVANCES_ACCUMULATION_NAV,
    User.USER_SYS_ID_OF_NON_RECURRING_PAYMENT_NAV,
    User.USER_SYS_ID_OF_ONE_TIME_DEDUCTION_NAV,
    User.USER_SYS_ID_OF_RECURRING_DEDUCTION_NAV,
    User.USER_SYS_ID_OF_WORK_ORDER_NAV,
    User.USERS_SYS_ID_OF_EMP_COST_DISTRIBUTION_NAV,
    User.USERS_SYS_ID_OF_EMPLOYEE_DATA_REPLICATION_CONFIRMATION_NAV,
    User.USERS_SYS_ID_OF_EMPLOYEE_DATA_REPLICATION_ELEMENT_NAV,
    User.USERS_SYS_ID_OF_EMPLOYEE_DATA_REPLICATION_NOTIFICATION_NAV,
    User.USERS_SYS_ID_OF_HIRE_DATE_CHANGE_NAV,
    User.USERS_SYS_ID_OF_SECONDARY_ASSIGNMENTS_ITEM_NAV,
    User.WORK_ORDER_OWNER_ID_OF_WORK_ORDER_NAV,
    User.WORKER_OF_PAYMENT_INFORMATION_V_3_NAV
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<User> = new AllFields('*', User);
  /**
   * All key fields of the User entity.
   */
  export const _keyFields: Array<Selectable<User>> = [User.USER_ID];
  /**
   * Mapping of all key field names to the respective static field property User.
   */
  export const _keys: { [keys: string]: Selectable<User> } = User._keyFields.reduce((acc: { [keys: string]: Selectable<User> }, field: Selectable<User>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}

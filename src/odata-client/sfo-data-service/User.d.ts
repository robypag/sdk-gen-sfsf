import { UserRequestBuilder } from './UserRequestBuilder';
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, BooleanField, CustomField, DateField, Entity, EntityBuilderType, Link, NumberField, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "User" of service "SFOData".
 */
export declare class User extends Entity implements UserType {
    /**
     * Technical entity name for User.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for User.
     */
    static _serviceName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
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
    gender: string;
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
    status: string;
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
    userId: string;
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
    approverOfAdvanceNav: Advance[];
    /**
     * One-to-many navigation property to the [[OneTimeDeduction]] entity.
     */
    auditUserSysIdOfOneTimeDeductionNav: OneTimeDeduction[];
    /**
     * One-to-one navigation property to the [[PicklistOption]] entity.
     */
    benchStrengthNav: PicklistOption;
    /**
     * One-to-many navigation property to the [[SpotAward]] entity.
     */
    budgetHolderIdOfSpotAwardNav: SpotAward[];
    /**
     * One-to-one navigation property to the [[PicklistOption]] entity.
     */
    businessSegmentNav: PicklistOption;
    /**
     * One-to-many navigation property to the [[RightToReturn]] entity.
     */
    codeOfRightToReturnNav: RightToReturn[];
    /**
     * One-to-many navigation property to the [[CompetencyRating]] entity.
     */
    competencyRatingNav: CompetencyRating[];
    /**
     * One-to-many navigation property to the [[OnboardingCandidateInfo]] entity.
     */
    concurrentUserOfOnboardingCandidateInfoNav: OnboardingCandidateInfo[];
    /**
     * One-to-many navigation property to the [[FoCostCenter]] entity.
     */
    costCenterManagerOfFoCostCenterNav: FoCostCenter[];
    /**
     * One-to-many navigation property to the [[Cust_Rcm_Operator_Lookup]] entity.
     */
    custRecruiterOfcustRcmOperatorLookupNav: Cust_Rcm_Operator_Lookup[];
    /**
     * One-to-many navigation property to the [[Cust_Rcm_Operator_Lookup]] entity.
     */
    custRecruitingTeamLeadOfcustRcmOperatorLookupNav: Cust_Rcm_Operator_Lookup[];
    /**
     * One-to-many navigation property to the [[Cust_Rcm_Operator_Lookup]] entity.
     */
    custSharedServicesOfcustRcmOperatorLookupNav: Cust_Rcm_Operator_Lookup[];
    /**
     * One-to-one navigation property to the [[PicklistOption]] entity.
     */
    custom05Nav: PicklistOption;
    /**
     * One-to-many navigation property to the [[User]] entity.
     */
    customManager: User[];
    /**
     * One-to-many navigation property to the [[User]] entity.
     */
    customReports: User[];
    /**
     * One-to-many navigation property to the [[AutoDelegateDetail]] entity.
     */
    delegateeOfAutoDelegateDetailNav: AutoDelegateDetail[];
    /**
     * One-to-many navigation property to the [[AutoDelegateConfig]] entity.
     */
    delegatorOfAutoDelegateConfigNav: AutoDelegateConfig[];
    /**
     * One-to-many navigation property to the [[User]] entity.
     */
    directReports: User[];
    /**
     * One-to-one navigation property to the [[EmpEmployment]] entity.
     */
    empInfo: EmpEmployment;
    /**
     * One-to-one navigation property to the [[PicklistOption]] entity.
     */
    ethnicityNav: PicklistOption;
    /**
     * One-to-many navigation property to the [[SkillProfile]] entity.
     */
    externalCodeOfSkillProfileNav: SkillProfile[];
    /**
     * One-to-many navigation property to the [[FoBusinessUnit]] entity.
     */
    headOfUnitOfFoBusinessUnitNav: FoBusinessUnit[];
    /**
     * One-to-many navigation property to the [[FoDepartment]] entity.
     */
    headOfUnitOfFoDepartmentNav: FoDepartment[];
    /**
     * One-to-many navigation property to the [[FoDivision]] entity.
     */
    headOfUnitOfFoDivisionNav: FoDivision[];
    /**
     * One-to-one navigation property to the [[User]] entity.
     */
    hr: User;
    /**
     * One-to-many navigation property to the [[OnboardingCandidateInfo]] entity.
     */
    hrManagerIdOfOnboardingCandidateInfoNav: OnboardingCandidateInfo[];
    /**
     * One-to-many navigation property to the [[User]] entity.
     */
    hrReports: User[];
    /**
     * One-to-one navigation property to the [[PicklistOption]] entity.
     */
    impactOfLossNav: PicklistOption;
    /**
     * One-to-many navigation property to the [[Position]] entity.
     */
    incumbentOfPositionNav: Position[];
    /**
     * One-to-one navigation property to the [[User]] entity.
     */
    manager: User;
    /**
     * One-to-many navigation property to the [[OnboardingCandidateInfo]] entity.
     */
    managerIdOfOnboardingCandidateInfoNav: OnboardingCandidateInfo[];
    /**
     * One-to-many navigation property to the [[User]] entity.
     */
    matrixManager: User[];
    /**
     * One-to-many navigation property to the [[User]] entity.
     */
    matrixReports: User[];
    /**
     * One-to-many navigation property to the [[NominationTarget]] entity.
     */
    nominationNav: NominationTarget[];
    /**
     * One-to-many navigation property to the [[SpotAward]] entity.
     */
    nominatorIdOfSpotAwardNav: SpotAward[];
    /**
     * One-to-many navigation property to the [[TalentPool]] entity.
     */
    ownerOfTalentPoolNav: TalentPool[];
    /**
     * One-to-many navigation property to the [[OnboardingMeetingEvent]] entity.
     */
    participantUserId1OfOnboardingMeetingEventNav: OnboardingMeetingEvent[];
    /**
     * One-to-many navigation property to the [[OnboardingMeetingEvent]] entity.
     */
    participantUserId2OfOnboardingMeetingEventNav: OnboardingMeetingEvent[];
    /**
     * One-to-many navigation property to the [[OnboardingMeetingEvent]] entity.
     */
    participantUserId3OfOnboardingMeetingEventNav: OnboardingMeetingEvent[];
    /**
     * One-to-many navigation property to the [[OnboardingMeetingEvent]] entity.
     */
    participantUserId4OfOnboardingMeetingEventNav: OnboardingMeetingEvent[];
    /**
     * One-to-many navigation property to the [[OnboardingMeetingEvent]] entity.
     */
    participantUserId5OfOnboardingMeetingEventNav: OnboardingMeetingEvent[];
    /**
     * One-to-one navigation property to the [[PersonKey]] entity.
     */
    personKeyNav: PersonKey;
    /**
     * One-to-many navigation property to the [[OnboardingCandidateInfo]] entity.
     */
    processorIdOfOnboardingCandidateInfoNav: OnboardingCandidateInfo[];
    /**
     * One-to-many navigation property to the [[User]] entity.
     */
    proxy: User[];
    /**
     * One-to-one navigation property to the [[PicklistOption]] entity.
     */
    reasonForLeavingNav: PicklistOption;
    /**
     * One-to-one navigation property to the [[PicklistOption]] entity.
     */
    riskOfLossNav: PicklistOption;
    /**
     * One-to-one navigation property to the [[User]] entity.
     */
    secondManager: User;
    /**
     * One-to-many navigation property to the [[User]] entity.
     */
    secondReports: User[];
    /**
     * One-to-many navigation property to the [[Achievement]] entity.
     */
    subjectUserIdOfAchievementNav: Achievement[];
    /**
     * One-to-many navigation property to the [[Activity]] entity.
     */
    subjectUserIdOfActivityNav: Activity[];
    /**
     * One-to-one navigation property to the [[PicklistOption]] entity.
     */
    talentPoolNav: PicklistOption;
    /**
     * One-to-many navigation property to the [[TimeManagementAlert]] entity.
     */
    targetIdOfTimeManagementAlertNav: TimeManagementAlert[];
    /**
     * One-to-many navigation property to the [[AccrualCalculationBase]] entity.
     */
    userIdOfAccrualCalculationBaseNav: AccrualCalculationBase[];
    /**
     * One-to-many navigation property to the [[BudgetGroup]] entity.
     */
    userIdOfBudgetGroupNav: BudgetGroup[];
    /**
     * One-to-many navigation property to the [[DataReplicationProxy]] entity.
     */
    userIdOfDataReplicationProxyNav: DataReplicationProxy[];
    /**
     * One-to-many navigation property to the [[EmployeePayrollRunResults]] entity.
     */
    userIdOfEmployeePayrollRunResultsNav: EmployeePayrollRunResults[];
    /**
     * One-to-many navigation property to the [[EmployeeTimeGroup]] entity.
     */
    userIdOfEmployeeTimeGroupNav: EmployeeTimeGroup[];
    /**
     * One-to-many navigation property to the [[EmployeeTime]] entity.
     */
    userIdOfEmployeeTimeNav: EmployeeTime[];
    /**
     * One-to-many navigation property to the [[EmployeeTimeSheet]] entity.
     */
    userIdOfEmployeeTimeSheetNav: EmployeeTimeSheet[];
    /**
     * One-to-many navigation property to the [[ExternalTimeData]] entity.
     */
    userIdOfExternalTimeDataNav: ExternalTimeData[];
    /**
     * One-to-many navigation property to the [[ExternalTimeRecord]] entity.
     */
    userIdOfExternalTimeRecordNav: ExternalTimeRecord[];
    /**
     * One-to-many navigation property to the [[HrisChangeLogDataReplication]] entity.
     */
    userIdOfHrisChangeLogDataReplicationNav: HrisChangeLogDataReplication[];
    /**
     * One-to-many navigation property to the [[OnboardingCandidateInfo]] entity.
     */
    userIdOfOnboardingCandidateInfoNav: OnboardingCandidateInfo[];
    /**
     * One-to-many navigation property to the [[PositionRightToReturn]] entity.
     */
    userIdOfPositionRightToReturnNav: PositionRightToReturn[];
    /**
     * One-to-many navigation property to the [[SpotAwardBudget]] entity.
     */
    userIdOfSpotAwardBudgetNav: SpotAwardBudget[];
    /**
     * One-to-many navigation property to the [[SpotAward]] entity.
     */
    userIdOfSpotAwardNav: SpotAward[];
    /**
     * One-to-many navigation property to the [[SpotAwardRedemption]] entity.
     */
    userIdOfSpotAwardRedemptionNav: SpotAwardRedemption[];
    /**
     * One-to-many navigation property to the [[TemporaryTimeInformation]] entity.
     */
    userIdOfTemporaryTimeInformationNav: TemporaryTimeInformation[];
    /**
     * One-to-many navigation property to the [[TimeAccount]] entity.
     */
    userIdOfTimeAccountNav: TimeAccount[];
    /**
     * One-to-many navigation property to the [[TimeAccountSnapshot]] entity.
     */
    userIdOfTimeAccountSnapshotNav: TimeAccountSnapshot[];
    /**
     * One-to-many navigation property to the [[TimeCollector]] entity.
     */
    userIdOfTimeCollectorNav: TimeCollector[];
    /**
     * One-to-many navigation property to the [[WorkSchedule]] entity.
     */
    userIdOfWorkScheduleNav: WorkSchedule[];
    /**
     * One-to-one navigation property to the [[UserPermissions]] entity.
     */
    userPermissionsNav: UserPermissions;
    /**
     * One-to-many navigation property to the [[AdvancesAccumulation]] entity.
     */
    userSysIdOfAdvancesAccumulationNav: AdvancesAccumulation[];
    /**
     * One-to-many navigation property to the [[NonRecurringPayment]] entity.
     */
    userSysIdOfNonRecurringPaymentNav: NonRecurringPayment[];
    /**
     * One-to-many navigation property to the [[OneTimeDeduction]] entity.
     */
    userSysIdOfOneTimeDeductionNav: OneTimeDeduction[];
    /**
     * One-to-many navigation property to the [[RecurringDeduction]] entity.
     */
    userSysIdOfRecurringDeductionNav: RecurringDeduction[];
    /**
     * One-to-many navigation property to the [[WorkOrder]] entity.
     */
    userSysIdOfWorkOrderNav: WorkOrder[];
    /**
     * One-to-many navigation property to the [[EmpCostDistribution]] entity.
     */
    usersSysIdOfEmpCostDistributionNav: EmpCostDistribution[];
    /**
     * One-to-many navigation property to the [[EmployeeDataReplicationConfirmation]] entity.
     */
    usersSysIdOfEmployeeDataReplicationConfirmationNav: EmployeeDataReplicationConfirmation[];
    /**
     * One-to-many navigation property to the [[EmployeeDataReplicationElement]] entity.
     */
    usersSysIdOfEmployeeDataReplicationElementNav: EmployeeDataReplicationElement[];
    /**
     * One-to-many navigation property to the [[EmployeeDataReplicationNotification]] entity.
     */
    usersSysIdOfEmployeeDataReplicationNotificationNav: EmployeeDataReplicationNotification[];
    /**
     * One-to-many navigation property to the [[HireDateChange]] entity.
     */
    usersSysIdOfHireDateChangeNav: HireDateChange[];
    /**
     * One-to-many navigation property to the [[SecondaryAssignmentsItem]] entity.
     */
    usersSysIdOfSecondaryAssignmentsItemNav: SecondaryAssignmentsItem[];
    /**
     * One-to-many navigation property to the [[WorkOrder]] entity.
     */
    workOrderOwnerIdOfWorkOrderNav: WorkOrder[];
    /**
     * One-to-many navigation property to the [[PaymentInformationV3]] entity.
     */
    workerOfPaymentInformationV3Nav: PaymentInformationV3[];
    /**
     * Returns an entity builder to construct instances `User`.
     * @returns A builder that constructs instances of entity type `User`.
     */
    static builder(): EntityBuilderType<User, UserTypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `User` entity type.
     * @returns A `User` request builder.
     */
    static requestBuilder(): UserRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `User`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `User`.
     */
    static customField(fieldName: string): CustomField<User>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
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
export declare namespace User {
    /**
     * Static representation of the [[addressLine1]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ADDRESS_LINE_1: StringField<User>;
    /**
     * Static representation of the [[addressLine2]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ADDRESS_LINE_2: StringField<User>;
    /**
     * Static representation of the [[addressLine3]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ADDRESS_LINE_3: StringField<User>;
    /**
     * Static representation of the [[benchStrength]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BENCH_STRENGTH: StringField<User>;
    /**
     * Static representation of the [[businessPhone]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BUSINESS_PHONE: StringField<User>;
    /**
     * Static representation of the [[businessSegment]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BUSINESS_SEGMENT: StringField<User>;
    /**
     * Static representation of the [[cellPhone]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CELL_PHONE: StringField<User>;
    /**
     * Static representation of the [[citizenship]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CITIZENSHIP: StringField<User>;
    /**
     * Static representation of the [[city]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CITY: StringField<User>;
    /**
     * Static representation of the [[competency]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const COMPETENCY: NumberField<User>;
    /**
     * Static representation of the [[country]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const COUNTRY: StringField<User>;
    /**
     * Static representation of the [[custom01]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CUSTOM_01: StringField<User>;
    /**
     * Static representation of the [[custom02]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CUSTOM_02: StringField<User>;
    /**
     * Static representation of the [[custom03]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CUSTOM_03: StringField<User>;
    /**
     * Static representation of the [[custom04]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CUSTOM_04: StringField<User>;
    /**
     * Static representation of the [[custom05]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CUSTOM_05: StringField<User>;
    /**
     * Static representation of the [[custom06]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CUSTOM_06: StringField<User>;
    /**
     * Static representation of the [[custom07]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CUSTOM_07: StringField<User>;
    /**
     * Static representation of the [[custom08]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CUSTOM_08: StringField<User>;
    /**
     * Static representation of the [[custom09]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CUSTOM_09: StringField<User>;
    /**
     * Static representation of the [[custom10]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CUSTOM_10: StringField<User>;
    /**
     * Static representation of the [[custom11]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CUSTOM_11: StringField<User>;
    /**
     * Static representation of the [[custom12]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CUSTOM_12: StringField<User>;
    /**
     * Static representation of the [[custom13]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CUSTOM_13: StringField<User>;
    /**
     * Static representation of the [[custom14]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CUSTOM_14: StringField<User>;
    /**
     * Static representation of the [[custom15]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CUSTOM_15: StringField<User>;
    /**
     * Static representation of the [[dateOfBirth]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DATE_OF_BIRTH: DateField<User>;
    /**
     * Static representation of the [[dateOfPosition]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DATE_OF_POSITION: DateField<User>;
    /**
     * Static representation of the [[defaultFullName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DEFAULT_FULL_NAME: StringField<User>;
    /**
     * Static representation of the [[defaultLocale]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DEFAULT_LOCALE: StringField<User>;
    /**
     * Static representation of the [[department]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DEPARTMENT: StringField<User>;
    /**
     * Static representation of the [[division]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DIVISION: StringField<User>;
    /**
     * Static representation of the [[email]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EMAIL: StringField<User>;
    /**
     * Static representation of the [[empId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EMP_ID: StringField<User>;
    /**
     * Static representation of the [[ethnicity]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ETHNICITY: StringField<User>;
    /**
     * Static representation of the [[fax]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const FAX: StringField<User>;
    /**
     * Static representation of the [[firstName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const FIRST_NAME: StringField<User>;
    /**
     * Static representation of the [[futureLeader]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const FUTURE_LEADER: BooleanField<User>;
    /**
     * Static representation of the [[gender]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const GENDER: StringField<User>;
    /**
     * Static representation of the [[hireDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const HIRE_DATE: DateField<User>;
    /**
     * Static representation of the [[homePhone]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const HOME_PHONE: StringField<User>;
    /**
     * Static representation of the [[impactOfLoss]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const IMPACT_OF_LOSS: StringField<User>;
    /**
     * Static representation of the [[jobCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const JOB_CODE: StringField<User>;
    /**
     * Static representation of the [[keyPosition]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const KEY_POSITION: BooleanField<User>;
    /**
     * Static representation of the [[lastModified]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED: DateField<User>;
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_DATE_TIME: DateField<User>;
    /**
     * Static representation of the [[lastModifiedWithTz]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_WITH_TZ: DateField<User>;
    /**
     * Static representation of the [[lastName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_NAME: StringField<User>;
    /**
     * Static representation of the [[lastReviewDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_REVIEW_DATE: StringField<User>;
    /**
     * Static representation of the [[level]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LEVEL: StringField<User>;
    /**
     * Static representation of the [[location]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LOCATION: StringField<User>;
    /**
     * Static representation of the [[married]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MARRIED: BooleanField<User>;
    /**
     * Static representation of the [[matrix1Label]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MATRIX_1_LABEL: StringField<User>;
    /**
     * Static representation of the [[matrix2Label]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MATRIX_2_LABEL: StringField<User>;
    /**
     * Static representation of the [[matrixManaged]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MATRIX_MANAGED: BooleanField<User>;
    /**
     * Static representation of the [[mi]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MI: StringField<User>;
    /**
     * Static representation of the [[minority]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MINORITY: BooleanField<User>;
    /**
     * Static representation of the [[nationality]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const NATIONALITY: StringField<User>;
    /**
     * Static representation of the [[newToPosition]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const NEW_TO_POSITION: BooleanField<User>;
    /**
     * Static representation of the [[nickname]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const NICKNAME: StringField<User>;
    /**
     * Static representation of the [[objective]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const OBJECTIVE: NumberField<User>;
    /**
     * Static representation of the [[onboardingId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ONBOARDING_ID: StringField<User>;
    /**
     * Static representation of the [[password]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PASSWORD: StringField<User>;
    /**
     * Static representation of the [[performance]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PERFORMANCE: NumberField<User>;
    /**
     * Static representation of the [[potential]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const POTENTIAL: NumberField<User>;
    /**
     * Static representation of the [[reasonForLeaving]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const REASON_FOR_LEAVING: StringField<User>;
    /**
     * Static representation of the [[reviewFreq]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const REVIEW_FREQ: StringField<User>;
    /**
     * Static representation of the [[riskOfLoss]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const RISK_OF_LOSS: StringField<User>;
    /**
     * Static representation of the [[sciLastModified]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SCI_LAST_MODIFIED: DateField<User>;
    /**
     * Static representation of the [[serviceDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SERVICE_DATE: DateField<User>;
    /**
     * Static representation of the [[ssn]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SSN: StringField<User>;
    /**
     * Static representation of the [[state]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const STATE: StringField<User>;
    /**
     * Static representation of the [[status]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const STATUS: StringField<User>;
    /**
     * Static representation of the [[suffix]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SUFFIX: StringField<User>;
    /**
     * Static representation of the [[talentPool]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TALENT_POOL: StringField<User>;
    /**
     * Static representation of the [[teamMembersSize]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TEAM_MEMBERS_SIZE: NumberField<User>;
    /**
     * Static representation of the [[timeZone]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TIME_ZONE: StringField<User>;
    /**
     * Static representation of the [[title]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TITLE: StringField<User>;
    /**
     * Static representation of the [[totalTeamSize]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TOTAL_TEAM_SIZE: BigNumberField<User>;
    /**
     * Static representation of the [[userId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const USER_ID: StringField<User>;
    /**
     * Static representation of the [[username]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const USERNAME: StringField<User>;
    /**
     * Static representation of the [[zipCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ZIP_CODE: StringField<User>;
    /**
     * Static representation of the one-to-many navigation property [[approverOfAdvanceNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const APPROVER_OF_ADVANCE_NAV: Link<User, Advance>;
    /**
     * Static representation of the one-to-many navigation property [[auditUserSysIdOfOneTimeDeductionNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const AUDIT_USER_SYS_ID_OF_ONE_TIME_DEDUCTION_NAV: Link<User, OneTimeDeduction>;
    /**
     * Static representation of the one-to-one navigation property [[benchStrengthNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BENCH_STRENGTH_NAV: OneToOneLink<User, PicklistOption>;
    /**
     * Static representation of the one-to-many navigation property [[budgetHolderIdOfSpotAwardNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BUDGET_HOLDER_ID_OF_SPOT_AWARD_NAV: Link<User, SpotAward>;
    /**
     * Static representation of the one-to-one navigation property [[businessSegmentNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BUSINESS_SEGMENT_NAV: OneToOneLink<User, PicklistOption>;
    /**
     * Static representation of the one-to-many navigation property [[codeOfRightToReturnNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CODE_OF_RIGHT_TO_RETURN_NAV: Link<User, RightToReturn>;
    /**
     * Static representation of the one-to-many navigation property [[competencyRatingNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const COMPETENCY_RATING_NAV: Link<User, CompetencyRating>;
    /**
     * Static representation of the one-to-many navigation property [[concurrentUserOfOnboardingCandidateInfoNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CONCURRENT_USER_OF_ONBOARDING_CANDIDATE_INFO_NAV: Link<User, OnboardingCandidateInfo>;
    /**
     * Static representation of the one-to-many navigation property [[costCenterManagerOfFoCostCenterNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const COST_CENTER_MANAGER_OF_FO_COST_CENTER_NAV: Link<User, FoCostCenter>;
    /**
     * Static representation of the one-to-many navigation property [[custRecruiterOfcustRcmOperatorLookupNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CUST_RECRUITER_OFCUST_RCM_OPERATOR_LOOKUP_NAV: Link<User, Cust_Rcm_Operator_Lookup>;
    /**
     * Static representation of the one-to-many navigation property [[custRecruitingTeamLeadOfcustRcmOperatorLookupNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CUST_RECRUITING_TEAM_LEAD_OFCUST_RCM_OPERATOR_LOOKUP_NAV: Link<User, Cust_Rcm_Operator_Lookup>;
    /**
     * Static representation of the one-to-many navigation property [[custSharedServicesOfcustRcmOperatorLookupNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CUST_SHARED_SERVICES_OFCUST_RCM_OPERATOR_LOOKUP_NAV: Link<User, Cust_Rcm_Operator_Lookup>;
    /**
     * Static representation of the one-to-one navigation property [[custom05Nav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CUSTOM_05_NAV: OneToOneLink<User, PicklistOption>;
    /**
     * Static representation of the one-to-many navigation property [[customManager]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CUSTOM_MANAGER: Link<User, User>;
    /**
     * Static representation of the one-to-many navigation property [[customReports]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CUSTOM_REPORTS: Link<User, User>;
    /**
     * Static representation of the one-to-many navigation property [[delegateeOfAutoDelegateDetailNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DELEGATEE_OF_AUTO_DELEGATE_DETAIL_NAV: Link<User, AutoDelegateDetail>;
    /**
     * Static representation of the one-to-many navigation property [[delegatorOfAutoDelegateConfigNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DELEGATOR_OF_AUTO_DELEGATE_CONFIG_NAV: Link<User, AutoDelegateConfig>;
    /**
     * Static representation of the one-to-many navigation property [[directReports]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DIRECT_REPORTS: Link<User, User>;
    /**
     * Static representation of the one-to-one navigation property [[empInfo]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EMP_INFO: OneToOneLink<User, EmpEmployment>;
    /**
     * Static representation of the one-to-one navigation property [[ethnicityNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ETHNICITY_NAV: OneToOneLink<User, PicklistOption>;
    /**
     * Static representation of the one-to-many navigation property [[externalCodeOfSkillProfileNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXTERNAL_CODE_OF_SKILL_PROFILE_NAV: Link<User, SkillProfile>;
    /**
     * Static representation of the one-to-many navigation property [[headOfUnitOfFoBusinessUnitNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const HEAD_OF_UNIT_OF_FO_BUSINESS_UNIT_NAV: Link<User, FoBusinessUnit>;
    /**
     * Static representation of the one-to-many navigation property [[headOfUnitOfFoDepartmentNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const HEAD_OF_UNIT_OF_FO_DEPARTMENT_NAV: Link<User, FoDepartment>;
    /**
     * Static representation of the one-to-many navigation property [[headOfUnitOfFoDivisionNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const HEAD_OF_UNIT_OF_FO_DIVISION_NAV: Link<User, FoDivision>;
    /**
     * Static representation of the one-to-one navigation property [[hr]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const HR: OneToOneLink<User, User>;
    /**
     * Static representation of the one-to-many navigation property [[hrManagerIdOfOnboardingCandidateInfoNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const HR_MANAGER_ID_OF_ONBOARDING_CANDIDATE_INFO_NAV: Link<User, OnboardingCandidateInfo>;
    /**
     * Static representation of the one-to-many navigation property [[hrReports]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const HR_REPORTS: Link<User, User>;
    /**
     * Static representation of the one-to-one navigation property [[impactOfLossNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const IMPACT_OF_LOSS_NAV: OneToOneLink<User, PicklistOption>;
    /**
     * Static representation of the one-to-many navigation property [[incumbentOfPositionNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const INCUMBENT_OF_POSITION_NAV: Link<User, Position>;
    /**
     * Static representation of the one-to-one navigation property [[manager]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MANAGER: OneToOneLink<User, User>;
    /**
     * Static representation of the one-to-many navigation property [[managerIdOfOnboardingCandidateInfoNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MANAGER_ID_OF_ONBOARDING_CANDIDATE_INFO_NAV: Link<User, OnboardingCandidateInfo>;
    /**
     * Static representation of the one-to-many navigation property [[matrixManager]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MATRIX_MANAGER: Link<User, User>;
    /**
     * Static representation of the one-to-many navigation property [[matrixReports]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MATRIX_REPORTS: Link<User, User>;
    /**
     * Static representation of the one-to-many navigation property [[nominationNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const NOMINATION_NAV: Link<User, NominationTarget>;
    /**
     * Static representation of the one-to-many navigation property [[nominatorIdOfSpotAwardNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const NOMINATOR_ID_OF_SPOT_AWARD_NAV: Link<User, SpotAward>;
    /**
     * Static representation of the one-to-many navigation property [[ownerOfTalentPoolNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const OWNER_OF_TALENT_POOL_NAV: Link<User, TalentPool>;
    /**
     * Static representation of the one-to-many navigation property [[participantUserId1OfOnboardingMeetingEventNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PARTICIPANT_USER_ID_1_OF_ONBOARDING_MEETING_EVENT_NAV: Link<User, OnboardingMeetingEvent>;
    /**
     * Static representation of the one-to-many navigation property [[participantUserId2OfOnboardingMeetingEventNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PARTICIPANT_USER_ID_2_OF_ONBOARDING_MEETING_EVENT_NAV: Link<User, OnboardingMeetingEvent>;
    /**
     * Static representation of the one-to-many navigation property [[participantUserId3OfOnboardingMeetingEventNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PARTICIPANT_USER_ID_3_OF_ONBOARDING_MEETING_EVENT_NAV: Link<User, OnboardingMeetingEvent>;
    /**
     * Static representation of the one-to-many navigation property [[participantUserId4OfOnboardingMeetingEventNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PARTICIPANT_USER_ID_4_OF_ONBOARDING_MEETING_EVENT_NAV: Link<User, OnboardingMeetingEvent>;
    /**
     * Static representation of the one-to-many navigation property [[participantUserId5OfOnboardingMeetingEventNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PARTICIPANT_USER_ID_5_OF_ONBOARDING_MEETING_EVENT_NAV: Link<User, OnboardingMeetingEvent>;
    /**
     * Static representation of the one-to-one navigation property [[personKeyNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PERSON_KEY_NAV: OneToOneLink<User, PersonKey>;
    /**
     * Static representation of the one-to-many navigation property [[processorIdOfOnboardingCandidateInfoNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PROCESSOR_ID_OF_ONBOARDING_CANDIDATE_INFO_NAV: Link<User, OnboardingCandidateInfo>;
    /**
     * Static representation of the one-to-many navigation property [[proxy]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PROXY: Link<User, User>;
    /**
     * Static representation of the one-to-one navigation property [[reasonForLeavingNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const REASON_FOR_LEAVING_NAV: OneToOneLink<User, PicklistOption>;
    /**
     * Static representation of the one-to-one navigation property [[riskOfLossNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const RISK_OF_LOSS_NAV: OneToOneLink<User, PicklistOption>;
    /**
     * Static representation of the one-to-one navigation property [[secondManager]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SECOND_MANAGER: OneToOneLink<User, User>;
    /**
     * Static representation of the one-to-many navigation property [[secondReports]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SECOND_REPORTS: Link<User, User>;
    /**
     * Static representation of the one-to-many navigation property [[subjectUserIdOfAchievementNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SUBJECT_USER_ID_OF_ACHIEVEMENT_NAV: Link<User, Achievement>;
    /**
     * Static representation of the one-to-many navigation property [[subjectUserIdOfActivityNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SUBJECT_USER_ID_OF_ACTIVITY_NAV: Link<User, Activity>;
    /**
     * Static representation of the one-to-one navigation property [[talentPoolNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TALENT_POOL_NAV: OneToOneLink<User, PicklistOption>;
    /**
     * Static representation of the one-to-many navigation property [[targetIdOfTimeManagementAlertNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TARGET_ID_OF_TIME_MANAGEMENT_ALERT_NAV: Link<User, TimeManagementAlert>;
    /**
     * Static representation of the one-to-many navigation property [[userIdOfAccrualCalculationBaseNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const USER_ID_OF_ACCRUAL_CALCULATION_BASE_NAV: Link<User, AccrualCalculationBase>;
    /**
     * Static representation of the one-to-many navigation property [[userIdOfBudgetGroupNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const USER_ID_OF_BUDGET_GROUP_NAV: Link<User, BudgetGroup>;
    /**
     * Static representation of the one-to-many navigation property [[userIdOfDataReplicationProxyNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const USER_ID_OF_DATA_REPLICATION_PROXY_NAV: Link<User, DataReplicationProxy>;
    /**
     * Static representation of the one-to-many navigation property [[userIdOfEmployeePayrollRunResultsNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const USER_ID_OF_EMPLOYEE_PAYROLL_RUN_RESULTS_NAV: Link<User, EmployeePayrollRunResults>;
    /**
     * Static representation of the one-to-many navigation property [[userIdOfEmployeeTimeGroupNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const USER_ID_OF_EMPLOYEE_TIME_GROUP_NAV: Link<User, EmployeeTimeGroup>;
    /**
     * Static representation of the one-to-many navigation property [[userIdOfEmployeeTimeNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const USER_ID_OF_EMPLOYEE_TIME_NAV: Link<User, EmployeeTime>;
    /**
     * Static representation of the one-to-many navigation property [[userIdOfEmployeeTimeSheetNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const USER_ID_OF_EMPLOYEE_TIME_SHEET_NAV: Link<User, EmployeeTimeSheet>;
    /**
     * Static representation of the one-to-many navigation property [[userIdOfExternalTimeDataNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const USER_ID_OF_EXTERNAL_TIME_DATA_NAV: Link<User, ExternalTimeData>;
    /**
     * Static representation of the one-to-many navigation property [[userIdOfExternalTimeRecordNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const USER_ID_OF_EXTERNAL_TIME_RECORD_NAV: Link<User, ExternalTimeRecord>;
    /**
     * Static representation of the one-to-many navigation property [[userIdOfHrisChangeLogDataReplicationNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const USER_ID_OF_HRIS_CHANGE_LOG_DATA_REPLICATION_NAV: Link<User, HrisChangeLogDataReplication>;
    /**
     * Static representation of the one-to-many navigation property [[userIdOfOnboardingCandidateInfoNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const USER_ID_OF_ONBOARDING_CANDIDATE_INFO_NAV: Link<User, OnboardingCandidateInfo>;
    /**
     * Static representation of the one-to-many navigation property [[userIdOfPositionRightToReturnNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const USER_ID_OF_POSITION_RIGHT_TO_RETURN_NAV: Link<User, PositionRightToReturn>;
    /**
     * Static representation of the one-to-many navigation property [[userIdOfSpotAwardBudgetNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const USER_ID_OF_SPOT_AWARD_BUDGET_NAV: Link<User, SpotAwardBudget>;
    /**
     * Static representation of the one-to-many navigation property [[userIdOfSpotAwardNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const USER_ID_OF_SPOT_AWARD_NAV: Link<User, SpotAward>;
    /**
     * Static representation of the one-to-many navigation property [[userIdOfSpotAwardRedemptionNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const USER_ID_OF_SPOT_AWARD_REDEMPTION_NAV: Link<User, SpotAwardRedemption>;
    /**
     * Static representation of the one-to-many navigation property [[userIdOfTemporaryTimeInformationNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const USER_ID_OF_TEMPORARY_TIME_INFORMATION_NAV: Link<User, TemporaryTimeInformation>;
    /**
     * Static representation of the one-to-many navigation property [[userIdOfTimeAccountNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const USER_ID_OF_TIME_ACCOUNT_NAV: Link<User, TimeAccount>;
    /**
     * Static representation of the one-to-many navigation property [[userIdOfTimeAccountSnapshotNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const USER_ID_OF_TIME_ACCOUNT_SNAPSHOT_NAV: Link<User, TimeAccountSnapshot>;
    /**
     * Static representation of the one-to-many navigation property [[userIdOfTimeCollectorNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const USER_ID_OF_TIME_COLLECTOR_NAV: Link<User, TimeCollector>;
    /**
     * Static representation of the one-to-many navigation property [[userIdOfWorkScheduleNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const USER_ID_OF_WORK_SCHEDULE_NAV: Link<User, WorkSchedule>;
    /**
     * Static representation of the one-to-one navigation property [[userPermissionsNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const USER_PERMISSIONS_NAV: OneToOneLink<User, UserPermissions>;
    /**
     * Static representation of the one-to-many navigation property [[userSysIdOfAdvancesAccumulationNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const USER_SYS_ID_OF_ADVANCES_ACCUMULATION_NAV: Link<User, AdvancesAccumulation>;
    /**
     * Static representation of the one-to-many navigation property [[userSysIdOfNonRecurringPaymentNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const USER_SYS_ID_OF_NON_RECURRING_PAYMENT_NAV: Link<User, NonRecurringPayment>;
    /**
     * Static representation of the one-to-many navigation property [[userSysIdOfOneTimeDeductionNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const USER_SYS_ID_OF_ONE_TIME_DEDUCTION_NAV: Link<User, OneTimeDeduction>;
    /**
     * Static representation of the one-to-many navigation property [[userSysIdOfRecurringDeductionNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const USER_SYS_ID_OF_RECURRING_DEDUCTION_NAV: Link<User, RecurringDeduction>;
    /**
     * Static representation of the one-to-many navigation property [[userSysIdOfWorkOrderNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const USER_SYS_ID_OF_WORK_ORDER_NAV: Link<User, WorkOrder>;
    /**
     * Static representation of the one-to-many navigation property [[usersSysIdOfEmpCostDistributionNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const USERS_SYS_ID_OF_EMP_COST_DISTRIBUTION_NAV: Link<User, EmpCostDistribution>;
    /**
     * Static representation of the one-to-many navigation property [[usersSysIdOfEmployeeDataReplicationConfirmationNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const USERS_SYS_ID_OF_EMPLOYEE_DATA_REPLICATION_CONFIRMATION_NAV: Link<User, EmployeeDataReplicationConfirmation>;
    /**
     * Static representation of the one-to-many navigation property [[usersSysIdOfEmployeeDataReplicationElementNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const USERS_SYS_ID_OF_EMPLOYEE_DATA_REPLICATION_ELEMENT_NAV: Link<User, EmployeeDataReplicationElement>;
    /**
     * Static representation of the one-to-many navigation property [[usersSysIdOfEmployeeDataReplicationNotificationNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const USERS_SYS_ID_OF_EMPLOYEE_DATA_REPLICATION_NOTIFICATION_NAV: Link<User, EmployeeDataReplicationNotification>;
    /**
     * Static representation of the one-to-many navigation property [[usersSysIdOfHireDateChangeNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const USERS_SYS_ID_OF_HIRE_DATE_CHANGE_NAV: Link<User, HireDateChange>;
    /**
     * Static representation of the one-to-many navigation property [[usersSysIdOfSecondaryAssignmentsItemNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const USERS_SYS_ID_OF_SECONDARY_ASSIGNMENTS_ITEM_NAV: Link<User, SecondaryAssignmentsItem>;
    /**
     * Static representation of the one-to-many navigation property [[workOrderOwnerIdOfWorkOrderNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const WORK_ORDER_OWNER_ID_OF_WORK_ORDER_NAV: Link<User, WorkOrder>;
    /**
     * Static representation of the one-to-many navigation property [[workerOfPaymentInformationV3Nav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const WORKER_OF_PAYMENT_INFORMATION_V_3_NAV: Link<User, PaymentInformationV3>;
    /**
     * All fields of the User entity.
     */
    const _allFields: Array<StringField<User> | NumberField<User> | DateField<User> | BooleanField<User> | BigNumberField<User> | Link<User, Advance> | Link<User, OneTimeDeduction> | OneToOneLink<User, PicklistOption> | Link<User, SpotAward> | Link<User, RightToReturn> | Link<User, CompetencyRating> | Link<User, OnboardingCandidateInfo> | Link<User, FoCostCenter> | Link<User, Cust_Rcm_Operator_Lookup> | Link<User, User> | Link<User, AutoDelegateDetail> | Link<User, AutoDelegateConfig> | OneToOneLink<User, EmpEmployment> | Link<User, SkillProfile> | Link<User, FoBusinessUnit> | Link<User, FoDepartment> | Link<User, FoDivision> | OneToOneLink<User, User> | Link<User, Position> | Link<User, NominationTarget> | Link<User, TalentPool> | Link<User, OnboardingMeetingEvent> | OneToOneLink<User, PersonKey> | Link<User, Achievement> | Link<User, Activity> | Link<User, TimeManagementAlert> | Link<User, AccrualCalculationBase> | Link<User, BudgetGroup> | Link<User, DataReplicationProxy> | Link<User, EmployeePayrollRunResults> | Link<User, EmployeeTimeGroup> | Link<User, EmployeeTime> | Link<User, EmployeeTimeSheet> | Link<User, ExternalTimeData> | Link<User, ExternalTimeRecord> | Link<User, HrisChangeLogDataReplication> | Link<User, PositionRightToReturn> | Link<User, SpotAwardBudget> | Link<User, SpotAwardRedemption> | Link<User, TemporaryTimeInformation> | Link<User, TimeAccount> | Link<User, TimeAccountSnapshot> | Link<User, TimeCollector> | Link<User, WorkSchedule> | OneToOneLink<User, UserPermissions> | Link<User, AdvancesAccumulation> | Link<User, NonRecurringPayment> | Link<User, RecurringDeduction> | Link<User, WorkOrder> | Link<User, EmpCostDistribution> | Link<User, EmployeeDataReplicationConfirmation> | Link<User, EmployeeDataReplicationElement> | Link<User, EmployeeDataReplicationNotification> | Link<User, HireDateChange> | Link<User, SecondaryAssignmentsItem> | Link<User, PaymentInformationV3>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<User>;
    /**
     * All key fields of the User entity.
     */
    const _keyFields: Array<Selectable<User>>;
    /**
     * Mapping of all key field names to the respective static field property User.
     */
    const _keys: {
        [keys: string]: Selectable<User>;
    };
}
//# sourceMappingURL=User.d.ts.map
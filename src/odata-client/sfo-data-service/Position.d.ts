import { PositionRequestBuilder } from './PositionRequestBuilder';
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, BooleanField, CustomField, DateField, Entity, EntityBuilderType, Link, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "Position" of service "SFOData".
 */
export declare class Position extends Entity implements PositionType {
    /**
     * Technical entity name for Position.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for Position.
     */
    static _serviceName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
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
    code: string;
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
    effectiveStartDate: Moment;
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
    businessUnitNav: FoBusinessUnit;
    /**
     * One-to-one navigation property to the [[PickListValueV2]] entity.
     */
    changeReasonNav: PickListValueV2;
    /**
     * One-to-one navigation property to the [[FoCompany]] entity.
     */
    companyNav: FoCompany;
    /**
     * One-to-one navigation property to the [[FoCostCenter]] entity.
     */
    costCenterNav: FoCostCenter;
    /**
     * One-to-one navigation property to the [[User]] entity.
     */
    createdByNav: User;
    /**
     * One-to-one navigation property to the [[MdfEnumValue]] entity.
     */
    creationSourceNav: MdfEnumValue;
    /**
     * One-to-one navigation property to the [[Attachment]] entity.
     */
    custAttachmentNav: Attachment;
    /**
     * One-to-one navigation property to the [[PickListValueV2]] entity.
     */
    custDurationNav: PickListValueV2;
    /**
     * One-to-one navigation property to the [[PickListValueV2]] entity.
     */
    custEmploymentTypeNav: PickListValueV2;
    /**
     * One-to-one navigation property to the [[PickListValueV2]] entity.
     */
    custIsFullTimeEmpNav: PickListValueV2;
    /**
     * One-to-one navigation property to the [[FoDepartment]] entity.
     */
    departmentNav: FoDepartment;
    /**
     * One-to-one navigation property to the [[FoDivision]] entity.
     */
    divisionNav: FoDivision;
    /**
     * One-to-one navigation property to the [[MdfEnumValue]] entity.
     */
    effectiveStatusNav: MdfEnumValue;
    /**
     * One-to-one navigation property to the [[PickListValueV2]] entity.
     */
    employeeClassNav: PickListValueV2;
    /**
     * One-to-many navigation property to the [[MdfLocalizedValue]] entity.
     */
    externalNameTranslationTextNav: MdfLocalizedValue[];
    /**
     * One-to-one navigation property to the [[User]] entity.
     */
    incumbentNav: User;
    /**
     * One-to-one navigation property to the [[FoJobCode]] entity.
     */
    jobCodeNav: FoJobCode;
    /**
     * One-to-one navigation property to the [[PickListValueV2]] entity.
     */
    jobLevelNav: PickListValueV2;
    /**
     * One-to-one navigation property to the [[User]] entity.
     */
    lastModifiedByNav: User;
    /**
     * One-to-one navigation property to the [[FoLocation]] entity.
     */
    locationNav: FoLocation;
    /**
     * One-to-one navigation property to the [[MdfEnumValue]] entity.
     */
    mdfSystemRecordStatusNav: MdfEnumValue;
    /**
     * One-to-one navigation property to the [[Position]] entity.
     */
    parentPosition: Position;
    /**
     * One-to-one navigation property to the [[FoPayGrade]] entity.
     */
    payGradeNav: FoPayGrade;
    /**
     * One-to-one navigation property to the [[FoPayRange]] entity.
     */
    payRangeNav: FoPayRange;
    /**
     * One-to-one navigation property to the [[PickListValueV2]] entity.
     */
    positionCriticalityNav: PickListValueV2;
    /**
     * One-to-many navigation property to the [[PositionMatrixRelationship]] entity.
     */
    positionMatrixRelationship: PositionMatrixRelationship[];
    /**
     * One-to-one navigation property to the [[PickListValueV2]] entity.
     */
    regularTemporaryNav: PickListValueV2;
    /**
     * One-to-many navigation property to the [[RightToReturn]] entity.
     */
    rightToReturn: RightToReturn[];
    /**
     * One-to-many navigation property to the [[Successor]] entity.
     */
    successorNav: Successor[];
    /**
     * One-to-many navigation property to the [[WfRequest]] entity.
     */
    wfRequestNav: WfRequest[];
    /**
     * Returns an entity builder to construct instances `Position`.
     * @returns A builder that constructs instances of entity type `Position`.
     */
    static builder(): EntityBuilderType<Position, PositionTypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `Position` entity type.
     * @returns A `Position` request builder.
     */
    static requestBuilder(): PositionRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `Position`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `Position`.
     */
    static customField(fieldName: string): CustomField<Position>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
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
export declare namespace Position {
    /**
     * Static representation of the [[businessUnit]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BUSINESS_UNIT: StringField<Position>;
    /**
     * Static representation of the [[changeReason]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CHANGE_REASON: StringField<Position>;
    /**
     * Static representation of the [[code]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CODE: StringField<Position>;
    /**
     * Static representation of the [[comment]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const COMMENT: StringField<Position>;
    /**
     * Static representation of the [[company]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const COMPANY: StringField<Position>;
    /**
     * Static representation of the [[costCenter]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const COST_CENTER: StringField<Position>;
    /**
     * Static representation of the [[createdBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_BY: StringField<Position>;
    /**
     * Static representation of the [[createdDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_DATE_TIME: DateField<Position>;
    /**
     * Static representation of the [[creationSource]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATION_SOURCE: StringField<Position>;
    /**
     * Static representation of the [[criticality]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CRITICALITY: BigNumberField<Position>;
    /**
     * Static representation of the [[custDuration]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CUST_DURATION: StringField<Position>;
    /**
     * Static representation of the [[custEmploymentType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CUST_EMPLOYMENT_TYPE: StringField<Position>;
    /**
     * Static representation of the [[custIncentivePlan]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CUST_INCENTIVE_PLAN: StringField<Position>;
    /**
     * Static representation of the [[custIsFullTimeEmp]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CUST_IS_FULL_TIME_EMP: StringField<Position>;
    /**
     * Static representation of the [[custMax]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CUST_MAX: BigNumberField<Position>;
    /**
     * Static representation of the [[custMid]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CUST_MID: BigNumberField<Position>;
    /**
     * Static representation of the [[custMin]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CUST_MIN: BigNumberField<Position>;
    /**
     * Static representation of the [[department]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DEPARTMENT: StringField<Position>;
    /**
     * Static representation of the [[description]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DESCRIPTION: StringField<Position>;
    /**
     * Static representation of the [[division]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DIVISION: StringField<Position>;
    /**
     * Static representation of the [[effectiveEndDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EFFECTIVE_END_DATE: DateField<Position>;
    /**
     * Static representation of the [[effectiveStartDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EFFECTIVE_START_DATE: DateField<Position>;
    /**
     * Static representation of the [[effectiveStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EFFECTIVE_STATUS: StringField<Position>;
    /**
     * Static representation of the [[employeeClass]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EMPLOYEE_CLASS: StringField<Position>;
    /**
     * Static representation of the [[externalNameDeDe]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXTERNAL_NAME_DE_DE: StringField<Position>;
    /**
     * Static representation of the [[externalNameDefaultValue]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXTERNAL_NAME_DEFAULT_VALUE: StringField<Position>;
    /**
     * Static representation of the [[externalNameEnDebug]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXTERNAL_NAME_EN_DEBUG: StringField<Position>;
    /**
     * Static representation of the [[externalNameEnGb]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXTERNAL_NAME_EN_GB: StringField<Position>;
    /**
     * Static representation of the [[externalNameEnUs]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXTERNAL_NAME_EN_US: StringField<Position>;
    /**
     * Static representation of the [[externalNameEsEs]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXTERNAL_NAME_ES_ES: StringField<Position>;
    /**
     * Static representation of the [[externalNameEsMx]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXTERNAL_NAME_ES_MX: StringField<Position>;
    /**
     * Static representation of the [[externalNameFrCa]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXTERNAL_NAME_FR_CA: StringField<Position>;
    /**
     * Static representation of the [[externalNameFrFr]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXTERNAL_NAME_FR_FR: StringField<Position>;
    /**
     * Static representation of the [[externalNameItIt]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXTERNAL_NAME_IT_IT: StringField<Position>;
    /**
     * Static representation of the [[externalNameLocalized]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXTERNAL_NAME_LOCALIZED: StringField<Position>;
    /**
     * Static representation of the [[externalNameNlNl]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXTERNAL_NAME_NL_NL: StringField<Position>;
    /**
     * Static representation of the [[externalNamePtBr]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXTERNAL_NAME_PT_BR: StringField<Position>;
    /**
     * Static representation of the [[externalNameZhCn]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXTERNAL_NAME_ZH_CN: StringField<Position>;
    /**
     * Static representation of the [[incumbent]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const INCUMBENT: StringField<Position>;
    /**
     * Static representation of the [[jobCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const JOB_CODE: StringField<Position>;
    /**
     * Static representation of the [[jobLevel]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const JOB_LEVEL: StringField<Position>;
    /**
     * Static representation of the [[jobTitle]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const JOB_TITLE: StringField<Position>;
    /**
     * Static representation of the [[lastModifiedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_BY: StringField<Position>;
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_DATE_TIME: DateField<Position>;
    /**
     * Static representation of the [[legacyPositionId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LEGACY_POSITION_ID: BigNumberField<Position>;
    /**
     * Static representation of the [[location]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LOCATION: StringField<Position>;
    /**
     * Static representation of the [[mdfSystemOptimisticLockUuid]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MDF_SYSTEM_OPTIMISTIC_LOCK_UUID: StringField<Position>;
    /**
     * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MDF_SYSTEM_RECORD_STATUS: StringField<Position>;
    /**
     * Static representation of the [[multipleIncumbentsAllowed]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MULTIPLE_INCUMBENTS_ALLOWED: BooleanField<Position>;
    /**
     * Static representation of the [[payGrade]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PAY_GRADE: StringField<Position>;
    /**
     * Static representation of the [[payRange]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PAY_RANGE: StringField<Position>;
    /**
     * Static representation of the [[positionControlled]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const POSITION_CONTROLLED: BooleanField<Position>;
    /**
     * Static representation of the [[positionCriticality]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const POSITION_CRITICALITY: StringField<Position>;
    /**
     * Static representation of the [[positionTitle]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const POSITION_TITLE: StringField<Position>;
    /**
     * Static representation of the [[regularTemporary]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const REGULAR_TEMPORARY: StringField<Position>;
    /**
     * Static representation of the [[standardHours]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const STANDARD_HOURS: BigNumberField<Position>;
    /**
     * Static representation of the [[targetFte]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TARGET_FTE: BigNumberField<Position>;
    /**
     * Static representation of the [[technicalParameters]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TECHNICAL_PARAMETERS: StringField<Position>;
    /**
     * Static representation of the [[transactionSequence]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TRANSACTION_SEQUENCE: BigNumberField<Position>;
    /**
     * Static representation of the [[type]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TYPE: StringField<Position>;
    /**
     * Static representation of the [[vacant]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const VACANT: BooleanField<Position>;
    /**
     * Static representation of the one-to-one navigation property [[businessUnitNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BUSINESS_UNIT_NAV: OneToOneLink<Position, FoBusinessUnit>;
    /**
     * Static representation of the one-to-one navigation property [[changeReasonNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CHANGE_REASON_NAV: OneToOneLink<Position, PickListValueV2>;
    /**
     * Static representation of the one-to-one navigation property [[companyNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const COMPANY_NAV: OneToOneLink<Position, FoCompany>;
    /**
     * Static representation of the one-to-one navigation property [[costCenterNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const COST_CENTER_NAV: OneToOneLink<Position, FoCostCenter>;
    /**
     * Static representation of the one-to-one navigation property [[createdByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_BY_NAV: OneToOneLink<Position, User>;
    /**
     * Static representation of the one-to-one navigation property [[creationSourceNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATION_SOURCE_NAV: OneToOneLink<Position, MdfEnumValue>;
    /**
     * Static representation of the one-to-one navigation property [[custAttachmentNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CUST_ATTACHMENT_NAV: OneToOneLink<Position, Attachment>;
    /**
     * Static representation of the one-to-one navigation property [[custDurationNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CUST_DURATION_NAV: OneToOneLink<Position, PickListValueV2>;
    /**
     * Static representation of the one-to-one navigation property [[custEmploymentTypeNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CUST_EMPLOYMENT_TYPE_NAV: OneToOneLink<Position, PickListValueV2>;
    /**
     * Static representation of the one-to-one navigation property [[custIsFullTimeEmpNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CUST_IS_FULL_TIME_EMP_NAV: OneToOneLink<Position, PickListValueV2>;
    /**
     * Static representation of the one-to-one navigation property [[departmentNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DEPARTMENT_NAV: OneToOneLink<Position, FoDepartment>;
    /**
     * Static representation of the one-to-one navigation property [[divisionNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DIVISION_NAV: OneToOneLink<Position, FoDivision>;
    /**
     * Static representation of the one-to-one navigation property [[effectiveStatusNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EFFECTIVE_STATUS_NAV: OneToOneLink<Position, MdfEnumValue>;
    /**
     * Static representation of the one-to-one navigation property [[employeeClassNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EMPLOYEE_CLASS_NAV: OneToOneLink<Position, PickListValueV2>;
    /**
     * Static representation of the one-to-many navigation property [[externalNameTranslationTextNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXTERNAL_NAME_TRANSLATION_TEXT_NAV: Link<Position, MdfLocalizedValue>;
    /**
     * Static representation of the one-to-one navigation property [[incumbentNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const INCUMBENT_NAV: OneToOneLink<Position, User>;
    /**
     * Static representation of the one-to-one navigation property [[jobCodeNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const JOB_CODE_NAV: OneToOneLink<Position, FoJobCode>;
    /**
     * Static representation of the one-to-one navigation property [[jobLevelNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const JOB_LEVEL_NAV: OneToOneLink<Position, PickListValueV2>;
    /**
     * Static representation of the one-to-one navigation property [[lastModifiedByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_BY_NAV: OneToOneLink<Position, User>;
    /**
     * Static representation of the one-to-one navigation property [[locationNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LOCATION_NAV: OneToOneLink<Position, FoLocation>;
    /**
     * Static representation of the one-to-one navigation property [[mdfSystemRecordStatusNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MDF_SYSTEM_RECORD_STATUS_NAV: OneToOneLink<Position, MdfEnumValue>;
    /**
     * Static representation of the one-to-one navigation property [[parentPosition]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PARENT_POSITION: OneToOneLink<Position, Position>;
    /**
     * Static representation of the one-to-one navigation property [[payGradeNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PAY_GRADE_NAV: OneToOneLink<Position, FoPayGrade>;
    /**
     * Static representation of the one-to-one navigation property [[payRangeNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PAY_RANGE_NAV: OneToOneLink<Position, FoPayRange>;
    /**
     * Static representation of the one-to-one navigation property [[positionCriticalityNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const POSITION_CRITICALITY_NAV: OneToOneLink<Position, PickListValueV2>;
    /**
     * Static representation of the one-to-many navigation property [[positionMatrixRelationship]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const POSITION_MATRIX_RELATIONSHIP: Link<Position, PositionMatrixRelationship>;
    /**
     * Static representation of the one-to-one navigation property [[regularTemporaryNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const REGULAR_TEMPORARY_NAV: OneToOneLink<Position, PickListValueV2>;
    /**
     * Static representation of the one-to-many navigation property [[rightToReturn]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const RIGHT_TO_RETURN: Link<Position, RightToReturn>;
    /**
     * Static representation of the one-to-many navigation property [[successorNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SUCCESSOR_NAV: Link<Position, Successor>;
    /**
     * Static representation of the one-to-many navigation property [[wfRequestNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const WF_REQUEST_NAV: Link<Position, WfRequest>;
    /**
     * All fields of the Position entity.
     */
    const _allFields: Array<StringField<Position> | DateField<Position> | BigNumberField<Position> | BooleanField<Position> | OneToOneLink<Position, FoBusinessUnit> | OneToOneLink<Position, PickListValueV2> | OneToOneLink<Position, FoCompany> | OneToOneLink<Position, FoCostCenter> | OneToOneLink<Position, User> | OneToOneLink<Position, MdfEnumValue> | OneToOneLink<Position, Attachment> | OneToOneLink<Position, FoDepartment> | OneToOneLink<Position, FoDivision> | Link<Position, MdfLocalizedValue> | OneToOneLink<Position, FoJobCode> | OneToOneLink<Position, FoLocation> | OneToOneLink<Position, Position> | OneToOneLink<Position, FoPayGrade> | OneToOneLink<Position, FoPayRange> | Link<Position, PositionMatrixRelationship> | Link<Position, RightToReturn> | Link<Position, Successor> | Link<Position, WfRequest>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<Position>;
    /**
     * All key fields of the Position entity.
     */
    const _keyFields: Array<Selectable<Position>>;
    /**
     * Mapping of all key field names to the respective static field property Position.
     */
    const _keys: {
        [keys: string]: Selectable<Position>;
    };
}
//# sourceMappingURL=Position.d.ts.map
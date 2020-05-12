import { OnboardingCandidateInfoRequestBuilder } from './OnboardingCandidateInfoRequestBuilder';
import { Moment } from 'moment';
import { AllFields, BooleanField, CustomField, DateField, Entity, EntityBuilderType, Link, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "OnboardingCandidateInfo" of service "SFOData".
 */
export declare class OnboardingCandidateInfo extends Entity implements OnboardingCandidateInfoType {
    /**
     * Technical entity name for OnboardingCandidateInfo.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for OnboardingCandidateInfo.
     */
    static _serviceName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
    /**
     * applicantId.
     * Maximum length: 128.
     */
    applicantId: string;
    /**
     * candidateId.
     * Maximum length: 255.
     * @nullable
     */
    candidateId?: string;
    /**
     * company.
     * Maximum length: 255.
     * @nullable
     */
    company?: string;
    /**
     * concurrentEmployment.
     * @nullable
     */
    concurrentEmployment?: boolean;
    /**
     * concurrentUser.
     * Maximum length: 100.
     * @nullable
     */
    concurrentUser?: string;
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
     * crossboarded.
     * @nullable
     */
    crossboarded?: boolean;
    /**
     * department.
     * Maximum length: 255.
     * @nullable
     */
    department?: string;
    /**
     * division.
     * Maximum length: 255.
     * @nullable
     */
    division?: string;
    /**
     * email.
     * Maximum length: 255.
     * @nullable
     */
    email?: string;
    /**
     * externalName.
     * Maximum length: 255.
     * @nullable
     */
    externalNameDeDe?: string;
    /**
     * externalName.
     * Maximum length: 255.
     * @nullable
     */
    externalNameDefaultValue?: string;
    /**
     * externalName.
     * Maximum length: 255.
     * @nullable
     */
    externalNameEnDebug?: string;
    /**
     * externalName.
     * Maximum length: 255.
     * @nullable
     */
    externalNameEnGb?: string;
    /**
     * externalName.
     * Maximum length: 255.
     * @nullable
     */
    externalNameEnUs?: string;
    /**
     * externalName.
     * Maximum length: 255.
     * @nullable
     */
    externalNameEsEs?: string;
    /**
     * externalName.
     * Maximum length: 255.
     * @nullable
     */
    externalNameEsMx?: string;
    /**
     * externalName.
     * Maximum length: 255.
     * @nullable
     */
    externalNameFrCa?: string;
    /**
     * externalName.
     * Maximum length: 255.
     * @nullable
     */
    externalNameFrFr?: string;
    /**
     * externalName.
     * Maximum length: 255.
     * @nullable
     */
    externalNameItIt?: string;
    /**
     * externalName.
     * Maximum length: 255.
     * @nullable
     */
    externalNameLocalized?: string;
    /**
     * externalName.
     * Maximum length: 255.
     * @nullable
     */
    externalNameNlNl?: string;
    /**
     * externalName.
     * Maximum length: 255.
     * @nullable
     */
    externalNamePtBr?: string;
    /**
     * externalName.
     * Maximum length: 255.
     * @nullable
     */
    externalNameZhCn?: string;
    /**
     * fName.
     * Maximum length: 255.
     * @nullable
     */
    fName?: string;
    /**
     * failedSEBEventsOccured.
     * @nullable
     */
    failedSebEventsOccured?: boolean;
    /**
     * fromExternalATS.
     * @nullable
     */
    fromExternalAts?: boolean;
    /**
     * globalAssignment.
     * @nullable
     */
    globalAssignment?: boolean;
    /**
     * hireDate.
     * Maximum length: 255.
     * @nullable
     */
    hireDate?: string;
    /**
     * hired.
     * @nullable
     */
    hired?: boolean;
    /**
     * hrManagerId.
     * Maximum length: 100.
     * @nullable
     */
    hrManagerId?: string;
    /**
     * internalHire.
     * @nullable
     */
    internalHire?: boolean;
    /**
     * jobReqId.
     * Maximum length: 255.
     * @nullable
     */
    jobReqId?: string;
    /**
     * jobTitle.
     * Maximum length: 255.
     * @nullable
     */
    jobTitle?: string;
    /**
     * kmsUserId.
     * Maximum length: 255.
     * @nullable
     */
    kmsUserId?: string;
    /**
     * lName.
     * Maximum length: 255.
     * @nullable
     */
    lName?: string;
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
     * location.
     * Maximum length: 255.
     * @nullable
     */
    location?: string;
    /**
     * managerId.
     * Maximum length: 100.
     * @nullable
     */
    managerId?: string;
    /**
     * Record Status.
     * Maximum length: 255.
     * @nullable
     */
    mdfSystemRecordStatus?: string;
    /**
     * onboardingLocale.
     * Maximum length: 255.
     * @nullable
     */
    onboardingLocale?: string;
    /**
     * payGrade.
     * Maximum length: 255.
     * @nullable
     */
    payGrade?: string;
    /**
     * primaryEmployment.
     * @nullable
     */
    primaryEmployment?: boolean;
    /**
     * Processor ID.
     * Maximum length: 100.
     * @nullable
     */
    processorId?: string;
    /**
     * readyToHire.
     * @nullable
     */
    readyToHire?: boolean;
    /**
     * userId.
     * Maximum length: 100.
     * @nullable
     */
    userId?: string;
    /**
     * workCountry.
     * Maximum length: 255.
     * @nullable
     */
    workCountry?: string;
    /**
     * One-to-one navigation property to the [[User]] entity.
     */
    concurrentUserNav: User;
    /**
     * One-to-one navigation property to the [[User]] entity.
     */
    createdByNav: User;
    /**
     * One-to-many navigation property to the [[MdfLocalizedValue]] entity.
     */
    externalNameTranslationTextNav: MdfLocalizedValue[];
    /**
     * One-to-one navigation property to the [[User]] entity.
     */
    hrManagerIdNav: User;
    /**
     * One-to-one navigation property to the [[User]] entity.
     */
    lastModifiedByNav: User;
    /**
     * One-to-one navigation property to the [[User]] entity.
     */
    managerIdNav: User;
    /**
     * One-to-one navigation property to the [[MdfEnumValue]] entity.
     */
    mdfSystemRecordStatusNav: MdfEnumValue;
    /**
     * One-to-one navigation property to the [[User]] entity.
     */
    processorIdNav: User;
    /**
     * One-to-one navigation property to the [[User]] entity.
     */
    userIdNav: User;
    /**
     * One-to-many navigation property to the [[WfRequest]] entity.
     */
    wfRequestNav: WfRequest[];
    /**
     * Returns an entity builder to construct instances `OnboardingCandidateInfo`.
     * @returns A builder that constructs instances of entity type `OnboardingCandidateInfo`.
     */
    static builder(): EntityBuilderType<OnboardingCandidateInfo, OnboardingCandidateInfoTypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `OnboardingCandidateInfo` entity type.
     * @returns A `OnboardingCandidateInfo` request builder.
     */
    static requestBuilder(): OnboardingCandidateInfoRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `OnboardingCandidateInfo`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `OnboardingCandidateInfo`.
     */
    static customField(fieldName: string): CustomField<OnboardingCandidateInfo>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
import { User, UserType } from './User';
import { MdfLocalizedValue, MdfLocalizedValueType } from './MdfLocalizedValue';
import { MdfEnumValue, MdfEnumValueType } from './MdfEnumValue';
import { WfRequest, WfRequestType } from './WfRequest';
export interface OnboardingCandidateInfoType {
    applicantId: string;
    candidateId?: string;
    company?: string;
    concurrentEmployment?: boolean;
    concurrentUser?: string;
    createdBy?: string;
    createdDateTime?: Moment;
    crossboarded?: boolean;
    department?: string;
    division?: string;
    email?: string;
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
    fName?: string;
    failedSebEventsOccured?: boolean;
    fromExternalAts?: boolean;
    globalAssignment?: boolean;
    hireDate?: string;
    hired?: boolean;
    hrManagerId?: string;
    internalHire?: boolean;
    jobReqId?: string;
    jobTitle?: string;
    kmsUserId?: string;
    lName?: string;
    lastModifiedBy?: string;
    lastModifiedDateTime?: Moment;
    location?: string;
    managerId?: string;
    mdfSystemRecordStatus?: string;
    onboardingLocale?: string;
    payGrade?: string;
    primaryEmployment?: boolean;
    processorId?: string;
    readyToHire?: boolean;
    userId?: string;
    workCountry?: string;
    concurrentUserNav: UserType;
    createdByNav: UserType;
    externalNameTranslationTextNav: MdfLocalizedValueType[];
    hrManagerIdNav: UserType;
    lastModifiedByNav: UserType;
    managerIdNav: UserType;
    mdfSystemRecordStatusNav: MdfEnumValueType;
    processorIdNav: UserType;
    userIdNav: UserType;
    wfRequestNav: WfRequestType[];
}
export interface OnboardingCandidateInfoTypeForceMandatory {
    applicantId: string;
    candidateId: string;
    company: string;
    concurrentEmployment: boolean;
    concurrentUser: string;
    createdBy: string;
    createdDateTime: Moment;
    crossboarded: boolean;
    department: string;
    division: string;
    email: string;
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
    fName: string;
    failedSebEventsOccured: boolean;
    fromExternalAts: boolean;
    globalAssignment: boolean;
    hireDate: string;
    hired: boolean;
    hrManagerId: string;
    internalHire: boolean;
    jobReqId: string;
    jobTitle: string;
    kmsUserId: string;
    lName: string;
    lastModifiedBy: string;
    lastModifiedDateTime: Moment;
    location: string;
    managerId: string;
    mdfSystemRecordStatus: string;
    onboardingLocale: string;
    payGrade: string;
    primaryEmployment: boolean;
    processorId: string;
    readyToHire: boolean;
    userId: string;
    workCountry: string;
    concurrentUserNav: UserType;
    createdByNav: UserType;
    externalNameTranslationTextNav: MdfLocalizedValueType[];
    hrManagerIdNav: UserType;
    lastModifiedByNav: UserType;
    managerIdNav: UserType;
    mdfSystemRecordStatusNav: MdfEnumValueType;
    processorIdNav: UserType;
    userIdNav: UserType;
    wfRequestNav: WfRequestType[];
}
export declare namespace OnboardingCandidateInfo {
    /**
     * Static representation of the [[applicantId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const APPLICANT_ID: StringField<OnboardingCandidateInfo>;
    /**
     * Static representation of the [[candidateId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CANDIDATE_ID: StringField<OnboardingCandidateInfo>;
    /**
     * Static representation of the [[company]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const COMPANY: StringField<OnboardingCandidateInfo>;
    /**
     * Static representation of the [[concurrentEmployment]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CONCURRENT_EMPLOYMENT: BooleanField<OnboardingCandidateInfo>;
    /**
     * Static representation of the [[concurrentUser]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CONCURRENT_USER: StringField<OnboardingCandidateInfo>;
    /**
     * Static representation of the [[createdBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_BY: StringField<OnboardingCandidateInfo>;
    /**
     * Static representation of the [[createdDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_DATE_TIME: DateField<OnboardingCandidateInfo>;
    /**
     * Static representation of the [[crossboarded]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CROSSBOARDED: BooleanField<OnboardingCandidateInfo>;
    /**
     * Static representation of the [[department]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DEPARTMENT: StringField<OnboardingCandidateInfo>;
    /**
     * Static representation of the [[division]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DIVISION: StringField<OnboardingCandidateInfo>;
    /**
     * Static representation of the [[email]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EMAIL: StringField<OnboardingCandidateInfo>;
    /**
     * Static representation of the [[externalNameDeDe]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXTERNAL_NAME_DE_DE: StringField<OnboardingCandidateInfo>;
    /**
     * Static representation of the [[externalNameDefaultValue]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXTERNAL_NAME_DEFAULT_VALUE: StringField<OnboardingCandidateInfo>;
    /**
     * Static representation of the [[externalNameEnDebug]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXTERNAL_NAME_EN_DEBUG: StringField<OnboardingCandidateInfo>;
    /**
     * Static representation of the [[externalNameEnGb]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXTERNAL_NAME_EN_GB: StringField<OnboardingCandidateInfo>;
    /**
     * Static representation of the [[externalNameEnUs]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXTERNAL_NAME_EN_US: StringField<OnboardingCandidateInfo>;
    /**
     * Static representation of the [[externalNameEsEs]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXTERNAL_NAME_ES_ES: StringField<OnboardingCandidateInfo>;
    /**
     * Static representation of the [[externalNameEsMx]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXTERNAL_NAME_ES_MX: StringField<OnboardingCandidateInfo>;
    /**
     * Static representation of the [[externalNameFrCa]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXTERNAL_NAME_FR_CA: StringField<OnboardingCandidateInfo>;
    /**
     * Static representation of the [[externalNameFrFr]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXTERNAL_NAME_FR_FR: StringField<OnboardingCandidateInfo>;
    /**
     * Static representation of the [[externalNameItIt]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXTERNAL_NAME_IT_IT: StringField<OnboardingCandidateInfo>;
    /**
     * Static representation of the [[externalNameLocalized]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXTERNAL_NAME_LOCALIZED: StringField<OnboardingCandidateInfo>;
    /**
     * Static representation of the [[externalNameNlNl]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXTERNAL_NAME_NL_NL: StringField<OnboardingCandidateInfo>;
    /**
     * Static representation of the [[externalNamePtBr]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXTERNAL_NAME_PT_BR: StringField<OnboardingCandidateInfo>;
    /**
     * Static representation of the [[externalNameZhCn]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXTERNAL_NAME_ZH_CN: StringField<OnboardingCandidateInfo>;
    /**
     * Static representation of the [[fName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const F_NAME: StringField<OnboardingCandidateInfo>;
    /**
     * Static representation of the [[failedSebEventsOccured]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const FAILED_SEB_EVENTS_OCCURED: BooleanField<OnboardingCandidateInfo>;
    /**
     * Static representation of the [[fromExternalAts]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const FROM_EXTERNAL_ATS: BooleanField<OnboardingCandidateInfo>;
    /**
     * Static representation of the [[globalAssignment]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const GLOBAL_ASSIGNMENT: BooleanField<OnboardingCandidateInfo>;
    /**
     * Static representation of the [[hireDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const HIRE_DATE: StringField<OnboardingCandidateInfo>;
    /**
     * Static representation of the [[hired]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const HIRED: BooleanField<OnboardingCandidateInfo>;
    /**
     * Static representation of the [[hrManagerId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const HR_MANAGER_ID: StringField<OnboardingCandidateInfo>;
    /**
     * Static representation of the [[internalHire]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const INTERNAL_HIRE: BooleanField<OnboardingCandidateInfo>;
    /**
     * Static representation of the [[jobReqId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const JOB_REQ_ID: StringField<OnboardingCandidateInfo>;
    /**
     * Static representation of the [[jobTitle]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const JOB_TITLE: StringField<OnboardingCandidateInfo>;
    /**
     * Static representation of the [[kmsUserId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const KMS_USER_ID: StringField<OnboardingCandidateInfo>;
    /**
     * Static representation of the [[lName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const L_NAME: StringField<OnboardingCandidateInfo>;
    /**
     * Static representation of the [[lastModifiedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_BY: StringField<OnboardingCandidateInfo>;
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_DATE_TIME: DateField<OnboardingCandidateInfo>;
    /**
     * Static representation of the [[location]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LOCATION: StringField<OnboardingCandidateInfo>;
    /**
     * Static representation of the [[managerId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MANAGER_ID: StringField<OnboardingCandidateInfo>;
    /**
     * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MDF_SYSTEM_RECORD_STATUS: StringField<OnboardingCandidateInfo>;
    /**
     * Static representation of the [[onboardingLocale]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ONBOARDING_LOCALE: StringField<OnboardingCandidateInfo>;
    /**
     * Static representation of the [[payGrade]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PAY_GRADE: StringField<OnboardingCandidateInfo>;
    /**
     * Static representation of the [[primaryEmployment]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PRIMARY_EMPLOYMENT: BooleanField<OnboardingCandidateInfo>;
    /**
     * Static representation of the [[processorId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PROCESSOR_ID: StringField<OnboardingCandidateInfo>;
    /**
     * Static representation of the [[readyToHire]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const READY_TO_HIRE: BooleanField<OnboardingCandidateInfo>;
    /**
     * Static representation of the [[userId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const USER_ID: StringField<OnboardingCandidateInfo>;
    /**
     * Static representation of the [[workCountry]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const WORK_COUNTRY: StringField<OnboardingCandidateInfo>;
    /**
     * Static representation of the one-to-one navigation property [[concurrentUserNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CONCURRENT_USER_NAV: OneToOneLink<OnboardingCandidateInfo, User>;
    /**
     * Static representation of the one-to-one navigation property [[createdByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_BY_NAV: OneToOneLink<OnboardingCandidateInfo, User>;
    /**
     * Static representation of the one-to-many navigation property [[externalNameTranslationTextNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXTERNAL_NAME_TRANSLATION_TEXT_NAV: Link<OnboardingCandidateInfo, MdfLocalizedValue>;
    /**
     * Static representation of the one-to-one navigation property [[hrManagerIdNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const HR_MANAGER_ID_NAV: OneToOneLink<OnboardingCandidateInfo, User>;
    /**
     * Static representation of the one-to-one navigation property [[lastModifiedByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_BY_NAV: OneToOneLink<OnboardingCandidateInfo, User>;
    /**
     * Static representation of the one-to-one navigation property [[managerIdNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MANAGER_ID_NAV: OneToOneLink<OnboardingCandidateInfo, User>;
    /**
     * Static representation of the one-to-one navigation property [[mdfSystemRecordStatusNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MDF_SYSTEM_RECORD_STATUS_NAV: OneToOneLink<OnboardingCandidateInfo, MdfEnumValue>;
    /**
     * Static representation of the one-to-one navigation property [[processorIdNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PROCESSOR_ID_NAV: OneToOneLink<OnboardingCandidateInfo, User>;
    /**
     * Static representation of the one-to-one navigation property [[userIdNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const USER_ID_NAV: OneToOneLink<OnboardingCandidateInfo, User>;
    /**
     * Static representation of the one-to-many navigation property [[wfRequestNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const WF_REQUEST_NAV: Link<OnboardingCandidateInfo, WfRequest>;
    /**
     * All fields of the OnboardingCandidateInfo entity.
     */
    const _allFields: Array<StringField<OnboardingCandidateInfo> | BooleanField<OnboardingCandidateInfo> | DateField<OnboardingCandidateInfo> | OneToOneLink<OnboardingCandidateInfo, User> | Link<OnboardingCandidateInfo, MdfLocalizedValue> | OneToOneLink<OnboardingCandidateInfo, MdfEnumValue> | Link<OnboardingCandidateInfo, WfRequest>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<OnboardingCandidateInfo>;
    /**
     * All key fields of the OnboardingCandidateInfo entity.
     */
    const _keyFields: Array<Selectable<OnboardingCandidateInfo>>;
    /**
     * Mapping of all key field names to the respective static field property OnboardingCandidateInfo.
     */
    const _keys: {
        [keys: string]: Selectable<OnboardingCandidateInfo>;
    };
}
//# sourceMappingURL=OnboardingCandidateInfo.d.ts.map
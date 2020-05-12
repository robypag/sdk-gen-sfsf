import { JobProfileRequestBuilder } from './JobProfileRequestBuilder';
import { Moment } from 'moment';
import { AllFields, BooleanField, CustomField, DateField, Entity, EntityBuilderType, Link, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "JobProfile" of service "SFOData".
 */
export declare class JobProfile extends Entity implements JobProfileType {
    /**
     * Technical entity name for JobProfile.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for JobProfile.
     */
    static _serviceName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
    /**
     * Compensation Data.
     * Maximum length: 4000.
     * @nullable
     */
    compDataDeDe?: string;
    /**
     * Compensation Data.
     * Maximum length: 4000.
     * @nullable
     */
    compDataDefaultValue?: string;
    /**
     * Compensation Data.
     * Maximum length: 4000.
     * @nullable
     */
    compDataEnDebug?: string;
    /**
     * Compensation Data.
     * Maximum length: 4000.
     * @nullable
     */
    compDataEnGb?: string;
    /**
     * Compensation Data.
     * Maximum length: 4000.
     * @nullable
     */
    compDataEnUs?: string;
    /**
     * Compensation Data.
     * Maximum length: 4000.
     * @nullable
     */
    compDataEsEs?: string;
    /**
     * Compensation Data.
     * Maximum length: 4000.
     * @nullable
     */
    compDataEsMx?: string;
    /**
     * Compensation Data.
     * Maximum length: 4000.
     * @nullable
     */
    compDataFrCa?: string;
    /**
     * Compensation Data.
     * Maximum length: 4000.
     * @nullable
     */
    compDataFrFr?: string;
    /**
     * Compensation Data.
     * Maximum length: 4000.
     * @nullable
     */
    compDataItIt?: string;
    /**
     * Compensation Data.
     * Maximum length: 4000.
     * @nullable
     */
    compDataLocalized?: string;
    /**
     * Compensation Data.
     * Maximum length: 4000.
     * @nullable
     */
    compDataNlNl?: string;
    /**
     * Compensation Data.
     * Maximum length: 4000.
     * @nullable
     */
    compDataPtBr?: string;
    /**
     * Compensation Data.
     * Maximum length: 4000.
     * @nullable
     */
    compDataZhCn?: string;
    /**
     * createdBy.
     * Maximum length: 255.
     * @nullable
     */
    createdBy?: string;
    /**
     * Added.
     * @nullable
     */
    createdDateTime?: Moment;
    /**
     * Draft.
     * @nullable
     */
    draft?: boolean;
    /**
     * GUID.
     * Maximum length: 128.
     */
    externalCode: string;
    /**
     * Footer.
     * Maximum length: 4000.
     * @nullable
     */
    footerDeDe?: string;
    /**
     * Footer.
     * Maximum length: 4000.
     * @nullable
     */
    footerDefaultValue?: string;
    /**
     * Footer.
     * Maximum length: 4000.
     * @nullable
     */
    footerEnDebug?: string;
    /**
     * Footer.
     * Maximum length: 4000.
     * @nullable
     */
    footerEnGb?: string;
    /**
     * Footer.
     * Maximum length: 4000.
     * @nullable
     */
    footerEnUs?: string;
    /**
     * Footer.
     * Maximum length: 4000.
     * @nullable
     */
    footerEsEs?: string;
    /**
     * Footer.
     * Maximum length: 4000.
     * @nullable
     */
    footerEsMx?: string;
    /**
     * Footer.
     * Maximum length: 4000.
     * @nullable
     */
    footerFrCa?: string;
    /**
     * Footer.
     * Maximum length: 4000.
     * @nullable
     */
    footerFrFr?: string;
    /**
     * Footer.
     * Maximum length: 4000.
     * @nullable
     */
    footerItIt?: string;
    /**
     * Footer.
     * Maximum length: 4000.
     * @nullable
     */
    footerLocalized?: string;
    /**
     * Footer.
     * Maximum length: 4000.
     * @nullable
     */
    footerNlNl?: string;
    /**
     * Footer.
     * Maximum length: 4000.
     * @nullable
     */
    footerPtBr?: string;
    /**
     * Footer.
     * Maximum length: 4000.
     * @nullable
     */
    footerZhCn?: string;
    /**
     * Header.
     * Maximum length: 4000.
     * @nullable
     */
    headerDeDe?: string;
    /**
     * Header.
     * Maximum length: 4000.
     * @nullable
     */
    headerDefaultValue?: string;
    /**
     * Header.
     * Maximum length: 4000.
     * @nullable
     */
    headerEnDebug?: string;
    /**
     * Header.
     * Maximum length: 4000.
     * @nullable
     */
    headerEnGb?: string;
    /**
     * Header.
     * Maximum length: 4000.
     * @nullable
     */
    headerEnUs?: string;
    /**
     * Header.
     * Maximum length: 4000.
     * @nullable
     */
    headerEsEs?: string;
    /**
     * Header.
     * Maximum length: 4000.
     * @nullable
     */
    headerEsMx?: string;
    /**
     * Header.
     * Maximum length: 4000.
     * @nullable
     */
    headerFrCa?: string;
    /**
     * Header.
     * Maximum length: 4000.
     * @nullable
     */
    headerFrFr?: string;
    /**
     * Header.
     * Maximum length: 4000.
     * @nullable
     */
    headerItIt?: string;
    /**
     * Header.
     * Maximum length: 4000.
     * @nullable
     */
    headerLocalized?: string;
    /**
     * Header.
     * Maximum length: 4000.
     * @nullable
     */
    headerNlNl?: string;
    /**
     * Header.
     * Maximum length: 4000.
     * @nullable
     */
    headerPtBr?: string;
    /**
     * Header.
     * Maximum length: 4000.
     * @nullable
     */
    headerZhCn?: string;
    /**
     * lastModifiedBy.
     * Maximum length: 255.
     * @nullable
     */
    lastModifiedBy?: string;
    /**
     * Last Modified.
     * @nullable
     */
    lastModifiedDateTime?: Moment;
    /**
     * Last Modifier Name.
     * Maximum length: 255.
     * @nullable
     */
    lastModifierName?: string;
    /**
     * Long Description.
     * Maximum length: 4000.
     * @nullable
     */
    longDescDeDe?: string;
    /**
     * Long Description.
     * Maximum length: 4000.
     * @nullable
     */
    longDescDefaultValue?: string;
    /**
     * Long Description.
     * Maximum length: 4000.
     * @nullable
     */
    longDescEnDebug?: string;
    /**
     * Long Description.
     * Maximum length: 4000.
     * @nullable
     */
    longDescEnGb?: string;
    /**
     * Long Description.
     * Maximum length: 4000.
     * @nullable
     */
    longDescEnUs?: string;
    /**
     * Long Description.
     * Maximum length: 4000.
     * @nullable
     */
    longDescEsEs?: string;
    /**
     * Long Description.
     * Maximum length: 4000.
     * @nullable
     */
    longDescEsMx?: string;
    /**
     * Long Description.
     * Maximum length: 4000.
     * @nullable
     */
    longDescFrCa?: string;
    /**
     * Long Description.
     * Maximum length: 4000.
     * @nullable
     */
    longDescFrFr?: string;
    /**
     * Long Description.
     * Maximum length: 4000.
     * @nullable
     */
    longDescItIt?: string;
    /**
     * Long Description.
     * Maximum length: 4000.
     * @nullable
     */
    longDescLocalized?: string;
    /**
     * Long Description.
     * Maximum length: 4000.
     * @nullable
     */
    longDescNlNl?: string;
    /**
     * Long Description.
     * Maximum length: 4000.
     * @nullable
     */
    longDescPtBr?: string;
    /**
     * Long Description.
     * Maximum length: 4000.
     * @nullable
     */
    longDescZhCn?: string;
    /**
     * Record Status.
     * Maximum length: 255.
     * @nullable
     */
    mdfSystemRecordStatus?: string;
    /**
     * migrated.
     * @nullable
     */
    migrated?: boolean;
    /**
     * Name.
     * Maximum length: 100.
     * @nullable
     */
    nameDeDe?: string;
    /**
     * Name.
     * Maximum length: 100.
     * @nullable
     */
    nameDefaultValue?: string;
    /**
     * Name.
     * Maximum length: 100.
     * @nullable
     */
    nameEnDebug?: string;
    /**
     * Name.
     * Maximum length: 100.
     * @nullable
     */
    nameEnGb?: string;
    /**
     * Name.
     * Maximum length: 100.
     * @nullable
     */
    nameEnUs?: string;
    /**
     * Name.
     * Maximum length: 100.
     * @nullable
     */
    nameEsEs?: string;
    /**
     * Name.
     * Maximum length: 100.
     * @nullable
     */
    nameEsMx?: string;
    /**
     * Name.
     * Maximum length: 100.
     * @nullable
     */
    nameFrCa?: string;
    /**
     * Name.
     * Maximum length: 100.
     * @nullable
     */
    nameFrFr?: string;
    /**
     * Name.
     * Maximum length: 100.
     * @nullable
     */
    nameItIt?: string;
    /**
     * Name.
     * Maximum length: 100.
     * @nullable
     */
    nameLocalized?: string;
    /**
     * Name.
     * Maximum length: 100.
     * @nullable
     */
    nameNlNl?: string;
    /**
     * Name.
     * Maximum length: 100.
     * @nullable
     */
    namePtBr?: string;
    /**
     * Name.
     * Maximum length: 100.
     * @nullable
     */
    nameZhCn?: string;
    /**
     * position.
     * Maximum length: 128.
     * @nullable
     */
    position?: string;
    /**
     * role.
     * Maximum length: 128.
     * @nullable
     */
    role?: string;
    /**
     * Short Description.
     * Maximum length: 4000.
     * @nullable
     */
    shortDescDeDe?: string;
    /**
     * Short Description.
     * Maximum length: 4000.
     * @nullable
     */
    shortDescDefaultValue?: string;
    /**
     * Short Description.
     * Maximum length: 4000.
     * @nullable
     */
    shortDescEnDebug?: string;
    /**
     * Short Description.
     * Maximum length: 4000.
     * @nullable
     */
    shortDescEnGb?: string;
    /**
     * Short Description.
     * Maximum length: 4000.
     * @nullable
     */
    shortDescEnUs?: string;
    /**
     * Short Description.
     * Maximum length: 4000.
     * @nullable
     */
    shortDescEsEs?: string;
    /**
     * Short Description.
     * Maximum length: 4000.
     * @nullable
     */
    shortDescEsMx?: string;
    /**
     * Short Description.
     * Maximum length: 4000.
     * @nullable
     */
    shortDescFrCa?: string;
    /**
     * Short Description.
     * Maximum length: 4000.
     * @nullable
     */
    shortDescFrFr?: string;
    /**
     * Short Description.
     * Maximum length: 4000.
     * @nullable
     */
    shortDescItIt?: string;
    /**
     * Short Description.
     * Maximum length: 4000.
     * @nullable
     */
    shortDescLocalized?: string;
    /**
     * Short Description.
     * Maximum length: 4000.
     * @nullable
     */
    shortDescNlNl?: string;
    /**
     * Short Description.
     * Maximum length: 4000.
     * @nullable
     */
    shortDescPtBr?: string;
    /**
     * Short Description.
     * Maximum length: 4000.
     * @nullable
     */
    shortDescZhCn?: string;
    /**
     * Status.
     * Maximum length: 255.
     * @nullable
     */
    status?: string;
    /**
     * subModule.
     * Maximum length: 255.
     * @nullable
     */
    subModule?: string;
    /**
     * Template.
     * Maximum length: 128.
     * @nullable
     */
    template?: string;
    /**
     * One-to-many navigation property to the [[CertificationContent]] entity.
     */
    certificationContents: CertificationContent[];
    /**
     * One-to-many navigation property to the [[MdfLocalizedValue]] entity.
     */
    compDataTranslationTextNav: MdfLocalizedValue[];
    /**
     * One-to-many navigation property to the [[JobProfileLocalizedData]] entity.
     */
    compDatas: JobProfileLocalizedData[];
    /**
     * One-to-many navigation property to the [[CompetencyContent]] entity.
     */
    competencyContents: CompetencyContent[];
    /**
     * One-to-one navigation property to the [[User]] entity.
     */
    createdByNav: User;
    /**
     * One-to-many navigation property to the [[EducationDegreeContent]] entity.
     */
    educationDegreeContents: EducationDegreeContent[];
    /**
     * One-to-many navigation property to the [[EducationMajorContent]] entity.
     */
    educationMajorContents: EducationMajorContent[];
    /**
     * One-to-many navigation property to the [[EmploymentConditionContent]] entity.
     */
    employmentConditionContents: EmploymentConditionContent[];
    /**
     * One-to-many navigation property to the [[MdfLocalizedValue]] entity.
     */
    footerTranslationTextNav: MdfLocalizedValue[];
    /**
     * One-to-many navigation property to the [[JobProfileLocalizedData]] entity.
     */
    footers: JobProfileLocalizedData[];
    /**
     * One-to-many navigation property to the [[MdfLocalizedValue]] entity.
     */
    headerTranslationTextNav: MdfLocalizedValue[];
    /**
     * One-to-many navigation property to the [[JobProfileLocalizedData]] entity.
     */
    headers: JobProfileLocalizedData[];
    /**
     * One-to-many navigation property to the [[InterviewQuestionContent]] entity.
     */
    interviewQuestionContents: InterviewQuestionContent[];
    /**
     * One-to-many navigation property to the [[JobResponsibilityContent]] entity.
     */
    jobResponsibilityContents: JobResponsibilityContent[];
    /**
     * One-to-one navigation property to the [[User]] entity.
     */
    lastModifiedByNav: User;
    /**
     * One-to-many navigation property to the [[MdfLocalizedValue]] entity.
     */
    longDescTranslationTextNav: MdfLocalizedValue[];
    /**
     * One-to-many navigation property to the [[JobProfileLocalizedData]] entity.
     */
    longDesciptions: JobProfileLocalizedData[];
    /**
     * One-to-one navigation property to the [[MdfEnumValue]] entity.
     */
    mdfSystemRecordStatusNav: MdfEnumValue;
    /**
     * One-to-many navigation property to the [[MdfLocalizedValue]] entity.
     */
    nameTranslationTextNav: MdfLocalizedValue[];
    /**
     * One-to-many navigation property to the [[PhysicalReqContent]] entity.
     */
    physicalReqContents: PhysicalReqContent[];
    /**
     * One-to-one navigation property to the [[PositionEntity]] entity.
     */
    positionNav: PositionEntity;
    /**
     * One-to-many navigation property to the [[RelevantIndustryContent]] entity.
     */
    relevantIndustryContents: RelevantIndustryContent[];
    /**
     * One-to-one navigation property to the [[RoleEntity]] entity.
     */
    roleNav: RoleEntity;
    /**
     * One-to-many navigation property to the [[MdfLocalizedValue]] entity.
     */
    shortDescTranslationTextNav: MdfLocalizedValue[];
    /**
     * One-to-many navigation property to the [[JobProfileLocalizedData]] entity.
     */
    shortDesciptions: JobProfileLocalizedData[];
    /**
     * One-to-many navigation property to the [[SkillContent]] entity.
     */
    skillContents: SkillContent[];
    /**
     * One-to-one navigation property to the [[MdfEnumValue]] entity.
     */
    statusNav: MdfEnumValue;
    /**
     * One-to-one navigation property to the [[JobDescTemplate]] entity.
     */
    templateNav: JobDescTemplate;
    /**
     * One-to-many navigation property to the [[WfRequest]] entity.
     */
    wfRequestNav: WfRequest[];
    /**
     * Returns an entity builder to construct instances `JobProfile`.
     * @returns A builder that constructs instances of entity type `JobProfile`.
     */
    static builder(): EntityBuilderType<JobProfile, JobProfileTypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `JobProfile` entity type.
     * @returns A `JobProfile` request builder.
     */
    static requestBuilder(): JobProfileRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `JobProfile`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `JobProfile`.
     */
    static customField(fieldName: string): CustomField<JobProfile>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
import { CertificationContent, CertificationContentType } from './CertificationContent';
import { MdfLocalizedValue, MdfLocalizedValueType } from './MdfLocalizedValue';
import { JobProfileLocalizedData, JobProfileLocalizedDataType } from './JobProfileLocalizedData';
import { CompetencyContent, CompetencyContentType } from './CompetencyContent';
import { User, UserType } from './User';
import { EducationDegreeContent, EducationDegreeContentType } from './EducationDegreeContent';
import { EducationMajorContent, EducationMajorContentType } from './EducationMajorContent';
import { EmploymentConditionContent, EmploymentConditionContentType } from './EmploymentConditionContent';
import { InterviewQuestionContent, InterviewQuestionContentType } from './InterviewQuestionContent';
import { JobResponsibilityContent, JobResponsibilityContentType } from './JobResponsibilityContent';
import { MdfEnumValue, MdfEnumValueType } from './MdfEnumValue';
import { PhysicalReqContent, PhysicalReqContentType } from './PhysicalReqContent';
import { PositionEntity, PositionEntityType } from './PositionEntity';
import { RelevantIndustryContent, RelevantIndustryContentType } from './RelevantIndustryContent';
import { RoleEntity, RoleEntityType } from './RoleEntity';
import { SkillContent, SkillContentType } from './SkillContent';
import { JobDescTemplate, JobDescTemplateType } from './JobDescTemplate';
import { WfRequest, WfRequestType } from './WfRequest';
export interface JobProfileType {
    compDataDeDe?: string;
    compDataDefaultValue?: string;
    compDataEnDebug?: string;
    compDataEnGb?: string;
    compDataEnUs?: string;
    compDataEsEs?: string;
    compDataEsMx?: string;
    compDataFrCa?: string;
    compDataFrFr?: string;
    compDataItIt?: string;
    compDataLocalized?: string;
    compDataNlNl?: string;
    compDataPtBr?: string;
    compDataZhCn?: string;
    createdBy?: string;
    createdDateTime?: Moment;
    draft?: boolean;
    externalCode: string;
    footerDeDe?: string;
    footerDefaultValue?: string;
    footerEnDebug?: string;
    footerEnGb?: string;
    footerEnUs?: string;
    footerEsEs?: string;
    footerEsMx?: string;
    footerFrCa?: string;
    footerFrFr?: string;
    footerItIt?: string;
    footerLocalized?: string;
    footerNlNl?: string;
    footerPtBr?: string;
    footerZhCn?: string;
    headerDeDe?: string;
    headerDefaultValue?: string;
    headerEnDebug?: string;
    headerEnGb?: string;
    headerEnUs?: string;
    headerEsEs?: string;
    headerEsMx?: string;
    headerFrCa?: string;
    headerFrFr?: string;
    headerItIt?: string;
    headerLocalized?: string;
    headerNlNl?: string;
    headerPtBr?: string;
    headerZhCn?: string;
    lastModifiedBy?: string;
    lastModifiedDateTime?: Moment;
    lastModifierName?: string;
    longDescDeDe?: string;
    longDescDefaultValue?: string;
    longDescEnDebug?: string;
    longDescEnGb?: string;
    longDescEnUs?: string;
    longDescEsEs?: string;
    longDescEsMx?: string;
    longDescFrCa?: string;
    longDescFrFr?: string;
    longDescItIt?: string;
    longDescLocalized?: string;
    longDescNlNl?: string;
    longDescPtBr?: string;
    longDescZhCn?: string;
    mdfSystemRecordStatus?: string;
    migrated?: boolean;
    nameDeDe?: string;
    nameDefaultValue?: string;
    nameEnDebug?: string;
    nameEnGb?: string;
    nameEnUs?: string;
    nameEsEs?: string;
    nameEsMx?: string;
    nameFrCa?: string;
    nameFrFr?: string;
    nameItIt?: string;
    nameLocalized?: string;
    nameNlNl?: string;
    namePtBr?: string;
    nameZhCn?: string;
    position?: string;
    role?: string;
    shortDescDeDe?: string;
    shortDescDefaultValue?: string;
    shortDescEnDebug?: string;
    shortDescEnGb?: string;
    shortDescEnUs?: string;
    shortDescEsEs?: string;
    shortDescEsMx?: string;
    shortDescFrCa?: string;
    shortDescFrFr?: string;
    shortDescItIt?: string;
    shortDescLocalized?: string;
    shortDescNlNl?: string;
    shortDescPtBr?: string;
    shortDescZhCn?: string;
    status?: string;
    subModule?: string;
    template?: string;
    certificationContents: CertificationContentType[];
    compDataTranslationTextNav: MdfLocalizedValueType[];
    compDatas: JobProfileLocalizedDataType[];
    competencyContents: CompetencyContentType[];
    createdByNav: UserType;
    educationDegreeContents: EducationDegreeContentType[];
    educationMajorContents: EducationMajorContentType[];
    employmentConditionContents: EmploymentConditionContentType[];
    footerTranslationTextNav: MdfLocalizedValueType[];
    footers: JobProfileLocalizedDataType[];
    headerTranslationTextNav: MdfLocalizedValueType[];
    headers: JobProfileLocalizedDataType[];
    interviewQuestionContents: InterviewQuestionContentType[];
    jobResponsibilityContents: JobResponsibilityContentType[];
    lastModifiedByNav: UserType;
    longDescTranslationTextNav: MdfLocalizedValueType[];
    longDesciptions: JobProfileLocalizedDataType[];
    mdfSystemRecordStatusNav: MdfEnumValueType;
    nameTranslationTextNav: MdfLocalizedValueType[];
    physicalReqContents: PhysicalReqContentType[];
    positionNav: PositionEntityType;
    relevantIndustryContents: RelevantIndustryContentType[];
    roleNav: RoleEntityType;
    shortDescTranslationTextNav: MdfLocalizedValueType[];
    shortDesciptions: JobProfileLocalizedDataType[];
    skillContents: SkillContentType[];
    statusNav: MdfEnumValueType;
    templateNav: JobDescTemplateType;
    wfRequestNav: WfRequestType[];
}
export interface JobProfileTypeForceMandatory {
    compDataDeDe: string;
    compDataDefaultValue: string;
    compDataEnDebug: string;
    compDataEnGb: string;
    compDataEnUs: string;
    compDataEsEs: string;
    compDataEsMx: string;
    compDataFrCa: string;
    compDataFrFr: string;
    compDataItIt: string;
    compDataLocalized: string;
    compDataNlNl: string;
    compDataPtBr: string;
    compDataZhCn: string;
    createdBy: string;
    createdDateTime: Moment;
    draft: boolean;
    externalCode: string;
    footerDeDe: string;
    footerDefaultValue: string;
    footerEnDebug: string;
    footerEnGb: string;
    footerEnUs: string;
    footerEsEs: string;
    footerEsMx: string;
    footerFrCa: string;
    footerFrFr: string;
    footerItIt: string;
    footerLocalized: string;
    footerNlNl: string;
    footerPtBr: string;
    footerZhCn: string;
    headerDeDe: string;
    headerDefaultValue: string;
    headerEnDebug: string;
    headerEnGb: string;
    headerEnUs: string;
    headerEsEs: string;
    headerEsMx: string;
    headerFrCa: string;
    headerFrFr: string;
    headerItIt: string;
    headerLocalized: string;
    headerNlNl: string;
    headerPtBr: string;
    headerZhCn: string;
    lastModifiedBy: string;
    lastModifiedDateTime: Moment;
    lastModifierName: string;
    longDescDeDe: string;
    longDescDefaultValue: string;
    longDescEnDebug: string;
    longDescEnGb: string;
    longDescEnUs: string;
    longDescEsEs: string;
    longDescEsMx: string;
    longDescFrCa: string;
    longDescFrFr: string;
    longDescItIt: string;
    longDescLocalized: string;
    longDescNlNl: string;
    longDescPtBr: string;
    longDescZhCn: string;
    mdfSystemRecordStatus: string;
    migrated: boolean;
    nameDeDe: string;
    nameDefaultValue: string;
    nameEnDebug: string;
    nameEnGb: string;
    nameEnUs: string;
    nameEsEs: string;
    nameEsMx: string;
    nameFrCa: string;
    nameFrFr: string;
    nameItIt: string;
    nameLocalized: string;
    nameNlNl: string;
    namePtBr: string;
    nameZhCn: string;
    position: string;
    role: string;
    shortDescDeDe: string;
    shortDescDefaultValue: string;
    shortDescEnDebug: string;
    shortDescEnGb: string;
    shortDescEnUs: string;
    shortDescEsEs: string;
    shortDescEsMx: string;
    shortDescFrCa: string;
    shortDescFrFr: string;
    shortDescItIt: string;
    shortDescLocalized: string;
    shortDescNlNl: string;
    shortDescPtBr: string;
    shortDescZhCn: string;
    status: string;
    subModule: string;
    template: string;
    certificationContents: CertificationContentType[];
    compDataTranslationTextNav: MdfLocalizedValueType[];
    compDatas: JobProfileLocalizedDataType[];
    competencyContents: CompetencyContentType[];
    createdByNav: UserType;
    educationDegreeContents: EducationDegreeContentType[];
    educationMajorContents: EducationMajorContentType[];
    employmentConditionContents: EmploymentConditionContentType[];
    footerTranslationTextNav: MdfLocalizedValueType[];
    footers: JobProfileLocalizedDataType[];
    headerTranslationTextNav: MdfLocalizedValueType[];
    headers: JobProfileLocalizedDataType[];
    interviewQuestionContents: InterviewQuestionContentType[];
    jobResponsibilityContents: JobResponsibilityContentType[];
    lastModifiedByNav: UserType;
    longDescTranslationTextNav: MdfLocalizedValueType[];
    longDesciptions: JobProfileLocalizedDataType[];
    mdfSystemRecordStatusNav: MdfEnumValueType;
    nameTranslationTextNav: MdfLocalizedValueType[];
    physicalReqContents: PhysicalReqContentType[];
    positionNav: PositionEntityType;
    relevantIndustryContents: RelevantIndustryContentType[];
    roleNav: RoleEntityType;
    shortDescTranslationTextNav: MdfLocalizedValueType[];
    shortDesciptions: JobProfileLocalizedDataType[];
    skillContents: SkillContentType[];
    statusNav: MdfEnumValueType;
    templateNav: JobDescTemplateType;
    wfRequestNav: WfRequestType[];
}
export declare namespace JobProfile {
    /**
     * Static representation of the [[compDataDeDe]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const COMP_DATA_DE_DE: StringField<JobProfile>;
    /**
     * Static representation of the [[compDataDefaultValue]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const COMP_DATA_DEFAULT_VALUE: StringField<JobProfile>;
    /**
     * Static representation of the [[compDataEnDebug]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const COMP_DATA_EN_DEBUG: StringField<JobProfile>;
    /**
     * Static representation of the [[compDataEnGb]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const COMP_DATA_EN_GB: StringField<JobProfile>;
    /**
     * Static representation of the [[compDataEnUs]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const COMP_DATA_EN_US: StringField<JobProfile>;
    /**
     * Static representation of the [[compDataEsEs]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const COMP_DATA_ES_ES: StringField<JobProfile>;
    /**
     * Static representation of the [[compDataEsMx]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const COMP_DATA_ES_MX: StringField<JobProfile>;
    /**
     * Static representation of the [[compDataFrCa]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const COMP_DATA_FR_CA: StringField<JobProfile>;
    /**
     * Static representation of the [[compDataFrFr]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const COMP_DATA_FR_FR: StringField<JobProfile>;
    /**
     * Static representation of the [[compDataItIt]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const COMP_DATA_IT_IT: StringField<JobProfile>;
    /**
     * Static representation of the [[compDataLocalized]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const COMP_DATA_LOCALIZED: StringField<JobProfile>;
    /**
     * Static representation of the [[compDataNlNl]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const COMP_DATA_NL_NL: StringField<JobProfile>;
    /**
     * Static representation of the [[compDataPtBr]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const COMP_DATA_PT_BR: StringField<JobProfile>;
    /**
     * Static representation of the [[compDataZhCn]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const COMP_DATA_ZH_CN: StringField<JobProfile>;
    /**
     * Static representation of the [[createdBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_BY: StringField<JobProfile>;
    /**
     * Static representation of the [[createdDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_DATE_TIME: DateField<JobProfile>;
    /**
     * Static representation of the [[draft]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DRAFT: BooleanField<JobProfile>;
    /**
     * Static representation of the [[externalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXTERNAL_CODE: StringField<JobProfile>;
    /**
     * Static representation of the [[footerDeDe]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const FOOTER_DE_DE: StringField<JobProfile>;
    /**
     * Static representation of the [[footerDefaultValue]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const FOOTER_DEFAULT_VALUE: StringField<JobProfile>;
    /**
     * Static representation of the [[footerEnDebug]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const FOOTER_EN_DEBUG: StringField<JobProfile>;
    /**
     * Static representation of the [[footerEnGb]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const FOOTER_EN_GB: StringField<JobProfile>;
    /**
     * Static representation of the [[footerEnUs]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const FOOTER_EN_US: StringField<JobProfile>;
    /**
     * Static representation of the [[footerEsEs]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const FOOTER_ES_ES: StringField<JobProfile>;
    /**
     * Static representation of the [[footerEsMx]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const FOOTER_ES_MX: StringField<JobProfile>;
    /**
     * Static representation of the [[footerFrCa]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const FOOTER_FR_CA: StringField<JobProfile>;
    /**
     * Static representation of the [[footerFrFr]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const FOOTER_FR_FR: StringField<JobProfile>;
    /**
     * Static representation of the [[footerItIt]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const FOOTER_IT_IT: StringField<JobProfile>;
    /**
     * Static representation of the [[footerLocalized]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const FOOTER_LOCALIZED: StringField<JobProfile>;
    /**
     * Static representation of the [[footerNlNl]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const FOOTER_NL_NL: StringField<JobProfile>;
    /**
     * Static representation of the [[footerPtBr]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const FOOTER_PT_BR: StringField<JobProfile>;
    /**
     * Static representation of the [[footerZhCn]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const FOOTER_ZH_CN: StringField<JobProfile>;
    /**
     * Static representation of the [[headerDeDe]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const HEADER_DE_DE: StringField<JobProfile>;
    /**
     * Static representation of the [[headerDefaultValue]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const HEADER_DEFAULT_VALUE: StringField<JobProfile>;
    /**
     * Static representation of the [[headerEnDebug]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const HEADER_EN_DEBUG: StringField<JobProfile>;
    /**
     * Static representation of the [[headerEnGb]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const HEADER_EN_GB: StringField<JobProfile>;
    /**
     * Static representation of the [[headerEnUs]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const HEADER_EN_US: StringField<JobProfile>;
    /**
     * Static representation of the [[headerEsEs]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const HEADER_ES_ES: StringField<JobProfile>;
    /**
     * Static representation of the [[headerEsMx]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const HEADER_ES_MX: StringField<JobProfile>;
    /**
     * Static representation of the [[headerFrCa]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const HEADER_FR_CA: StringField<JobProfile>;
    /**
     * Static representation of the [[headerFrFr]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const HEADER_FR_FR: StringField<JobProfile>;
    /**
     * Static representation of the [[headerItIt]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const HEADER_IT_IT: StringField<JobProfile>;
    /**
     * Static representation of the [[headerLocalized]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const HEADER_LOCALIZED: StringField<JobProfile>;
    /**
     * Static representation of the [[headerNlNl]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const HEADER_NL_NL: StringField<JobProfile>;
    /**
     * Static representation of the [[headerPtBr]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const HEADER_PT_BR: StringField<JobProfile>;
    /**
     * Static representation of the [[headerZhCn]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const HEADER_ZH_CN: StringField<JobProfile>;
    /**
     * Static representation of the [[lastModifiedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_BY: StringField<JobProfile>;
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_DATE_TIME: DateField<JobProfile>;
    /**
     * Static representation of the [[lastModifierName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIER_NAME: StringField<JobProfile>;
    /**
     * Static representation of the [[longDescDeDe]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LONG_DESC_DE_DE: StringField<JobProfile>;
    /**
     * Static representation of the [[longDescDefaultValue]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LONG_DESC_DEFAULT_VALUE: StringField<JobProfile>;
    /**
     * Static representation of the [[longDescEnDebug]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LONG_DESC_EN_DEBUG: StringField<JobProfile>;
    /**
     * Static representation of the [[longDescEnGb]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LONG_DESC_EN_GB: StringField<JobProfile>;
    /**
     * Static representation of the [[longDescEnUs]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LONG_DESC_EN_US: StringField<JobProfile>;
    /**
     * Static representation of the [[longDescEsEs]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LONG_DESC_ES_ES: StringField<JobProfile>;
    /**
     * Static representation of the [[longDescEsMx]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LONG_DESC_ES_MX: StringField<JobProfile>;
    /**
     * Static representation of the [[longDescFrCa]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LONG_DESC_FR_CA: StringField<JobProfile>;
    /**
     * Static representation of the [[longDescFrFr]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LONG_DESC_FR_FR: StringField<JobProfile>;
    /**
     * Static representation of the [[longDescItIt]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LONG_DESC_IT_IT: StringField<JobProfile>;
    /**
     * Static representation of the [[longDescLocalized]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LONG_DESC_LOCALIZED: StringField<JobProfile>;
    /**
     * Static representation of the [[longDescNlNl]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LONG_DESC_NL_NL: StringField<JobProfile>;
    /**
     * Static representation of the [[longDescPtBr]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LONG_DESC_PT_BR: StringField<JobProfile>;
    /**
     * Static representation of the [[longDescZhCn]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LONG_DESC_ZH_CN: StringField<JobProfile>;
    /**
     * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MDF_SYSTEM_RECORD_STATUS: StringField<JobProfile>;
    /**
     * Static representation of the [[migrated]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MIGRATED: BooleanField<JobProfile>;
    /**
     * Static representation of the [[nameDeDe]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const NAME_DE_DE: StringField<JobProfile>;
    /**
     * Static representation of the [[nameDefaultValue]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const NAME_DEFAULT_VALUE: StringField<JobProfile>;
    /**
     * Static representation of the [[nameEnDebug]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const NAME_EN_DEBUG: StringField<JobProfile>;
    /**
     * Static representation of the [[nameEnGb]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const NAME_EN_GB: StringField<JobProfile>;
    /**
     * Static representation of the [[nameEnUs]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const NAME_EN_US: StringField<JobProfile>;
    /**
     * Static representation of the [[nameEsEs]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const NAME_ES_ES: StringField<JobProfile>;
    /**
     * Static representation of the [[nameEsMx]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const NAME_ES_MX: StringField<JobProfile>;
    /**
     * Static representation of the [[nameFrCa]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const NAME_FR_CA: StringField<JobProfile>;
    /**
     * Static representation of the [[nameFrFr]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const NAME_FR_FR: StringField<JobProfile>;
    /**
     * Static representation of the [[nameItIt]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const NAME_IT_IT: StringField<JobProfile>;
    /**
     * Static representation of the [[nameLocalized]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const NAME_LOCALIZED: StringField<JobProfile>;
    /**
     * Static representation of the [[nameNlNl]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const NAME_NL_NL: StringField<JobProfile>;
    /**
     * Static representation of the [[namePtBr]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const NAME_PT_BR: StringField<JobProfile>;
    /**
     * Static representation of the [[nameZhCn]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const NAME_ZH_CN: StringField<JobProfile>;
    /**
     * Static representation of the [[position]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const POSITION: StringField<JobProfile>;
    /**
     * Static representation of the [[role]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ROLE: StringField<JobProfile>;
    /**
     * Static representation of the [[shortDescDeDe]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SHORT_DESC_DE_DE: StringField<JobProfile>;
    /**
     * Static representation of the [[shortDescDefaultValue]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SHORT_DESC_DEFAULT_VALUE: StringField<JobProfile>;
    /**
     * Static representation of the [[shortDescEnDebug]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SHORT_DESC_EN_DEBUG: StringField<JobProfile>;
    /**
     * Static representation of the [[shortDescEnGb]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SHORT_DESC_EN_GB: StringField<JobProfile>;
    /**
     * Static representation of the [[shortDescEnUs]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SHORT_DESC_EN_US: StringField<JobProfile>;
    /**
     * Static representation of the [[shortDescEsEs]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SHORT_DESC_ES_ES: StringField<JobProfile>;
    /**
     * Static representation of the [[shortDescEsMx]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SHORT_DESC_ES_MX: StringField<JobProfile>;
    /**
     * Static representation of the [[shortDescFrCa]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SHORT_DESC_FR_CA: StringField<JobProfile>;
    /**
     * Static representation of the [[shortDescFrFr]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SHORT_DESC_FR_FR: StringField<JobProfile>;
    /**
     * Static representation of the [[shortDescItIt]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SHORT_DESC_IT_IT: StringField<JobProfile>;
    /**
     * Static representation of the [[shortDescLocalized]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SHORT_DESC_LOCALIZED: StringField<JobProfile>;
    /**
     * Static representation of the [[shortDescNlNl]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SHORT_DESC_NL_NL: StringField<JobProfile>;
    /**
     * Static representation of the [[shortDescPtBr]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SHORT_DESC_PT_BR: StringField<JobProfile>;
    /**
     * Static representation of the [[shortDescZhCn]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SHORT_DESC_ZH_CN: StringField<JobProfile>;
    /**
     * Static representation of the [[status]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const STATUS: StringField<JobProfile>;
    /**
     * Static representation of the [[subModule]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SUB_MODULE: StringField<JobProfile>;
    /**
     * Static representation of the [[template]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TEMPLATE: StringField<JobProfile>;
    /**
     * Static representation of the one-to-many navigation property [[certificationContents]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CERTIFICATION_CONTENTS: Link<JobProfile, CertificationContent>;
    /**
     * Static representation of the one-to-many navigation property [[compDataTranslationTextNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const COMP_DATA_TRANSLATION_TEXT_NAV: Link<JobProfile, MdfLocalizedValue>;
    /**
     * Static representation of the one-to-many navigation property [[compDatas]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const COMP_DATAS: Link<JobProfile, JobProfileLocalizedData>;
    /**
     * Static representation of the one-to-many navigation property [[competencyContents]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const COMPETENCY_CONTENTS: Link<JobProfile, CompetencyContent>;
    /**
     * Static representation of the one-to-one navigation property [[createdByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_BY_NAV: OneToOneLink<JobProfile, User>;
    /**
     * Static representation of the one-to-many navigation property [[educationDegreeContents]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EDUCATION_DEGREE_CONTENTS: Link<JobProfile, EducationDegreeContent>;
    /**
     * Static representation of the one-to-many navigation property [[educationMajorContents]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EDUCATION_MAJOR_CONTENTS: Link<JobProfile, EducationMajorContent>;
    /**
     * Static representation of the one-to-many navigation property [[employmentConditionContents]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EMPLOYMENT_CONDITION_CONTENTS: Link<JobProfile, EmploymentConditionContent>;
    /**
     * Static representation of the one-to-many navigation property [[footerTranslationTextNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const FOOTER_TRANSLATION_TEXT_NAV: Link<JobProfile, MdfLocalizedValue>;
    /**
     * Static representation of the one-to-many navigation property [[footers]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const FOOTERS: Link<JobProfile, JobProfileLocalizedData>;
    /**
     * Static representation of the one-to-many navigation property [[headerTranslationTextNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const HEADER_TRANSLATION_TEXT_NAV: Link<JobProfile, MdfLocalizedValue>;
    /**
     * Static representation of the one-to-many navigation property [[headers]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const HEADERS: Link<JobProfile, JobProfileLocalizedData>;
    /**
     * Static representation of the one-to-many navigation property [[interviewQuestionContents]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const INTERVIEW_QUESTION_CONTENTS: Link<JobProfile, InterviewQuestionContent>;
    /**
     * Static representation of the one-to-many navigation property [[jobResponsibilityContents]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const JOB_RESPONSIBILITY_CONTENTS: Link<JobProfile, JobResponsibilityContent>;
    /**
     * Static representation of the one-to-one navigation property [[lastModifiedByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_BY_NAV: OneToOneLink<JobProfile, User>;
    /**
     * Static representation of the one-to-many navigation property [[longDescTranslationTextNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LONG_DESC_TRANSLATION_TEXT_NAV: Link<JobProfile, MdfLocalizedValue>;
    /**
     * Static representation of the one-to-many navigation property [[longDesciptions]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LONG_DESCIPTIONS: Link<JobProfile, JobProfileLocalizedData>;
    /**
     * Static representation of the one-to-one navigation property [[mdfSystemRecordStatusNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MDF_SYSTEM_RECORD_STATUS_NAV: OneToOneLink<JobProfile, MdfEnumValue>;
    /**
     * Static representation of the one-to-many navigation property [[nameTranslationTextNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const NAME_TRANSLATION_TEXT_NAV: Link<JobProfile, MdfLocalizedValue>;
    /**
     * Static representation of the one-to-many navigation property [[physicalReqContents]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PHYSICAL_REQ_CONTENTS: Link<JobProfile, PhysicalReqContent>;
    /**
     * Static representation of the one-to-one navigation property [[positionNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const POSITION_NAV: OneToOneLink<JobProfile, PositionEntity>;
    /**
     * Static representation of the one-to-many navigation property [[relevantIndustryContents]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const RELEVANT_INDUSTRY_CONTENTS: Link<JobProfile, RelevantIndustryContent>;
    /**
     * Static representation of the one-to-one navigation property [[roleNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ROLE_NAV: OneToOneLink<JobProfile, RoleEntity>;
    /**
     * Static representation of the one-to-many navigation property [[shortDescTranslationTextNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SHORT_DESC_TRANSLATION_TEXT_NAV: Link<JobProfile, MdfLocalizedValue>;
    /**
     * Static representation of the one-to-many navigation property [[shortDesciptions]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SHORT_DESCIPTIONS: Link<JobProfile, JobProfileLocalizedData>;
    /**
     * Static representation of the one-to-many navigation property [[skillContents]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SKILL_CONTENTS: Link<JobProfile, SkillContent>;
    /**
     * Static representation of the one-to-one navigation property [[statusNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const STATUS_NAV: OneToOneLink<JobProfile, MdfEnumValue>;
    /**
     * Static representation of the one-to-one navigation property [[templateNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TEMPLATE_NAV: OneToOneLink<JobProfile, JobDescTemplate>;
    /**
     * Static representation of the one-to-many navigation property [[wfRequestNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const WF_REQUEST_NAV: Link<JobProfile, WfRequest>;
    /**
     * All fields of the JobProfile entity.
     */
    const _allFields: Array<StringField<JobProfile> | DateField<JobProfile> | BooleanField<JobProfile> | Link<JobProfile, CertificationContent> | Link<JobProfile, MdfLocalizedValue> | Link<JobProfile, JobProfileLocalizedData> | Link<JobProfile, CompetencyContent> | OneToOneLink<JobProfile, User> | Link<JobProfile, EducationDegreeContent> | Link<JobProfile, EducationMajorContent> | Link<JobProfile, EmploymentConditionContent> | Link<JobProfile, InterviewQuestionContent> | Link<JobProfile, JobResponsibilityContent> | OneToOneLink<JobProfile, MdfEnumValue> | Link<JobProfile, PhysicalReqContent> | OneToOneLink<JobProfile, PositionEntity> | Link<JobProfile, RelevantIndustryContent> | OneToOneLink<JobProfile, RoleEntity> | Link<JobProfile, SkillContent> | OneToOneLink<JobProfile, JobDescTemplate> | Link<JobProfile, WfRequest>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<JobProfile>;
    /**
     * All key fields of the JobProfile entity.
     */
    const _keyFields: Array<Selectable<JobProfile>>;
    /**
     * Mapping of all key field names to the respective static field property JobProfile.
     */
    const _keys: {
        [keys: string]: Selectable<JobProfile>;
    };
}
//# sourceMappingURL=JobProfile.d.ts.map
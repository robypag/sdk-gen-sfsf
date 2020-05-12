import { JobAnalyzerReportingDataRequestBuilder } from './JobAnalyzerReportingDataRequestBuilder';
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, CustomField, DateField, Entity, EntityBuilderType, Link, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "JobAnalyzerReportingData" of service "SFOData".
 */
export declare class JobAnalyzerReportingData extends Entity implements JobAnalyzerReportingDataType {
    /**
     * Technical entity name for JobAnalyzerReportingData.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for JobAnalyzerReportingData.
     */
    static _serviceName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
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
     * currency.
     * Maximum length: 128.
     * @nullable
     */
    currency?: string;
    /**
     * detectedSkills.
     * Maximum length: 4000.
     * @nullable
     */
    detectedSkills?: string;
    /**
     * externalCode.
     * Maximum length: 128.
     */
    externalCode: string;
    /**
     * femaleScore.
     * @nullable
     */
    femaleScore?: BigNumber;
    /**
     * feminineBiasedTerms.
     * Maximum length: 4000.
     * @nullable
     */
    feminineBiasedTerms?: string;
    /**
     * jobReqId.
     * @nullable
     */
    jobReqId?: BigNumber;
    /**
     * languageScore.
     * @nullable
     */
    languageScore?: BigNumber;
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
     * maleScore.
     * @nullable
     */
    maleScore?: BigNumber;
    /**
     * marketSkills.
     * Maximum length: 4000.
     * @nullable
     */
    marketSkills?: string;
    /**
     * masculineBiasedTerms.
     * Maximum length: 4000.
     * @nullable
     */
    masculineBiasedTerms?: string;
    /**
     * matchedJobFamilyCode.
     * Maximum length: 256.
     * @nullable
     */
    matchedJobFamilyCode?: string;
    /**
     * matchedJobFamilyLabel.
     * Maximum length: 256.
     * @nullable
     */
    matchedJobFamilyLabel?: string;
    /**
     * matchedJobFamilyType.
     * Maximum length: 256.
     * @nullable
     */
    matchedJobFamilyType?: string;
    /**
     * matchedJobLocationCode.
     * Maximum length: 256.
     * @nullable
     */
    matchedJobLocationCode?: string;
    /**
     * matchedJobLocationType.
     * Maximum length: 256.
     * @nullable
     */
    matchedJobLocationType?: string;
    /**
     * Record Status.
     * Maximum length: 128.
     * @nullable
     */
    mdfSystemRecordStatus?: string;
    /**
     * neutralScore.
     * @nullable
     */
    neutralScore?: BigNumber;
    /**
     * predictedSalary.
     * @nullable
     */
    predictedSalary?: BigNumber;
    /**
     * salaryRangeHigh.
     * @nullable
     */
    salaryRangeHigh?: BigNumber;
    /**
     * salaryRangeLow.
     * @nullable
     */
    salaryRangeLow?: BigNumber;
    /**
     * One-to-one navigation property to the [[User]] entity.
     */
    createdByNav: User;
    /**
     * One-to-many navigation property to the [[Currency]] entity.
     */
    currencyNav: Currency[];
    /**
     * One-to-one navigation property to the [[User]] entity.
     */
    lastModifiedByNav: User;
    /**
     * One-to-one navigation property to the [[MdfEnumValue]] entity.
     */
    mdfSystemRecordStatusNav: MdfEnumValue;
    /**
     * One-to-many navigation property to the [[WfRequest]] entity.
     */
    wfRequestNav: WfRequest[];
    /**
     * Returns an entity builder to construct instances `JobAnalyzerReportingData`.
     * @returns A builder that constructs instances of entity type `JobAnalyzerReportingData`.
     */
    static builder(): EntityBuilderType<JobAnalyzerReportingData, JobAnalyzerReportingDataTypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `JobAnalyzerReportingData` entity type.
     * @returns A `JobAnalyzerReportingData` request builder.
     */
    static requestBuilder(): JobAnalyzerReportingDataRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `JobAnalyzerReportingData`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `JobAnalyzerReportingData`.
     */
    static customField(fieldName: string): CustomField<JobAnalyzerReportingData>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
import { User, UserType } from './User';
import { Currency, CurrencyType } from './Currency';
import { MdfEnumValue, MdfEnumValueType } from './MdfEnumValue';
import { WfRequest, WfRequestType } from './WfRequest';
export interface JobAnalyzerReportingDataType {
    createdBy?: string;
    createdDateTime?: Moment;
    currency?: string;
    detectedSkills?: string;
    externalCode: string;
    femaleScore?: BigNumber;
    feminineBiasedTerms?: string;
    jobReqId?: BigNumber;
    languageScore?: BigNumber;
    lastModifiedBy?: string;
    lastModifiedDateTime?: Moment;
    maleScore?: BigNumber;
    marketSkills?: string;
    masculineBiasedTerms?: string;
    matchedJobFamilyCode?: string;
    matchedJobFamilyLabel?: string;
    matchedJobFamilyType?: string;
    matchedJobLocationCode?: string;
    matchedJobLocationType?: string;
    mdfSystemRecordStatus?: string;
    neutralScore?: BigNumber;
    predictedSalary?: BigNumber;
    salaryRangeHigh?: BigNumber;
    salaryRangeLow?: BigNumber;
    createdByNav: UserType;
    currencyNav: CurrencyType[];
    lastModifiedByNav: UserType;
    mdfSystemRecordStatusNav: MdfEnumValueType;
    wfRequestNav: WfRequestType[];
}
export interface JobAnalyzerReportingDataTypeForceMandatory {
    createdBy: string;
    createdDateTime: Moment;
    currency: string;
    detectedSkills: string;
    externalCode: string;
    femaleScore: BigNumber;
    feminineBiasedTerms: string;
    jobReqId: BigNumber;
    languageScore: BigNumber;
    lastModifiedBy: string;
    lastModifiedDateTime: Moment;
    maleScore: BigNumber;
    marketSkills: string;
    masculineBiasedTerms: string;
    matchedJobFamilyCode: string;
    matchedJobFamilyLabel: string;
    matchedJobFamilyType: string;
    matchedJobLocationCode: string;
    matchedJobLocationType: string;
    mdfSystemRecordStatus: string;
    neutralScore: BigNumber;
    predictedSalary: BigNumber;
    salaryRangeHigh: BigNumber;
    salaryRangeLow: BigNumber;
    createdByNav: UserType;
    currencyNav: CurrencyType[];
    lastModifiedByNav: UserType;
    mdfSystemRecordStatusNav: MdfEnumValueType;
    wfRequestNav: WfRequestType[];
}
export declare namespace JobAnalyzerReportingData {
    /**
     * Static representation of the [[createdBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_BY: StringField<JobAnalyzerReportingData>;
    /**
     * Static representation of the [[createdDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_DATE_TIME: DateField<JobAnalyzerReportingData>;
    /**
     * Static representation of the [[currency]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CURRENCY: StringField<JobAnalyzerReportingData>;
    /**
     * Static representation of the [[detectedSkills]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DETECTED_SKILLS: StringField<JobAnalyzerReportingData>;
    /**
     * Static representation of the [[externalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXTERNAL_CODE: StringField<JobAnalyzerReportingData>;
    /**
     * Static representation of the [[femaleScore]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const FEMALE_SCORE: BigNumberField<JobAnalyzerReportingData>;
    /**
     * Static representation of the [[feminineBiasedTerms]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const FEMININE_BIASED_TERMS: StringField<JobAnalyzerReportingData>;
    /**
     * Static representation of the [[jobReqId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const JOB_REQ_ID: BigNumberField<JobAnalyzerReportingData>;
    /**
     * Static representation of the [[languageScore]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LANGUAGE_SCORE: BigNumberField<JobAnalyzerReportingData>;
    /**
     * Static representation of the [[lastModifiedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_BY: StringField<JobAnalyzerReportingData>;
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_DATE_TIME: DateField<JobAnalyzerReportingData>;
    /**
     * Static representation of the [[maleScore]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MALE_SCORE: BigNumberField<JobAnalyzerReportingData>;
    /**
     * Static representation of the [[marketSkills]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MARKET_SKILLS: StringField<JobAnalyzerReportingData>;
    /**
     * Static representation of the [[masculineBiasedTerms]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MASCULINE_BIASED_TERMS: StringField<JobAnalyzerReportingData>;
    /**
     * Static representation of the [[matchedJobFamilyCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MATCHED_JOB_FAMILY_CODE: StringField<JobAnalyzerReportingData>;
    /**
     * Static representation of the [[matchedJobFamilyLabel]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MATCHED_JOB_FAMILY_LABEL: StringField<JobAnalyzerReportingData>;
    /**
     * Static representation of the [[matchedJobFamilyType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MATCHED_JOB_FAMILY_TYPE: StringField<JobAnalyzerReportingData>;
    /**
     * Static representation of the [[matchedJobLocationCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MATCHED_JOB_LOCATION_CODE: StringField<JobAnalyzerReportingData>;
    /**
     * Static representation of the [[matchedJobLocationType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MATCHED_JOB_LOCATION_TYPE: StringField<JobAnalyzerReportingData>;
    /**
     * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MDF_SYSTEM_RECORD_STATUS: StringField<JobAnalyzerReportingData>;
    /**
     * Static representation of the [[neutralScore]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const NEUTRAL_SCORE: BigNumberField<JobAnalyzerReportingData>;
    /**
     * Static representation of the [[predictedSalary]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PREDICTED_SALARY: BigNumberField<JobAnalyzerReportingData>;
    /**
     * Static representation of the [[salaryRangeHigh]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SALARY_RANGE_HIGH: BigNumberField<JobAnalyzerReportingData>;
    /**
     * Static representation of the [[salaryRangeLow]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SALARY_RANGE_LOW: BigNumberField<JobAnalyzerReportingData>;
    /**
     * Static representation of the one-to-one navigation property [[createdByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_BY_NAV: OneToOneLink<JobAnalyzerReportingData, User>;
    /**
     * Static representation of the one-to-many navigation property [[currencyNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CURRENCY_NAV: Link<JobAnalyzerReportingData, Currency>;
    /**
     * Static representation of the one-to-one navigation property [[lastModifiedByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_BY_NAV: OneToOneLink<JobAnalyzerReportingData, User>;
    /**
     * Static representation of the one-to-one navigation property [[mdfSystemRecordStatusNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MDF_SYSTEM_RECORD_STATUS_NAV: OneToOneLink<JobAnalyzerReportingData, MdfEnumValue>;
    /**
     * Static representation of the one-to-many navigation property [[wfRequestNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const WF_REQUEST_NAV: Link<JobAnalyzerReportingData, WfRequest>;
    /**
     * All fields of the JobAnalyzerReportingData entity.
     */
    const _allFields: Array<StringField<JobAnalyzerReportingData> | DateField<JobAnalyzerReportingData> | BigNumberField<JobAnalyzerReportingData> | OneToOneLink<JobAnalyzerReportingData, User> | Link<JobAnalyzerReportingData, Currency> | OneToOneLink<JobAnalyzerReportingData, MdfEnumValue> | Link<JobAnalyzerReportingData, WfRequest>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<JobAnalyzerReportingData>;
    /**
     * All key fields of the JobAnalyzerReportingData entity.
     */
    const _keyFields: Array<Selectable<JobAnalyzerReportingData>>;
    /**
     * Mapping of all key field names to the respective static field property JobAnalyzerReportingData.
     */
    const _keys: {
        [keys: string]: Selectable<JobAnalyzerReportingData>;
    };
}
//# sourceMappingURL=JobAnalyzerReportingData.d.ts.map
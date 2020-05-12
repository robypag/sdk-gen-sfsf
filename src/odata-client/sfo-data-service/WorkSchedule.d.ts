import { WorkScheduleRequestBuilder } from './WorkScheduleRequestBuilder';
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, BooleanField, CustomField, DateField, Entity, EntityBuilderType, Link, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "WorkSchedule" of service "SFOData".
 */
export declare class WorkSchedule extends Entity implements WorkScheduleType {
    /**
     * Technical entity name for WorkSchedule.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for WorkSchedule.
     */
    static _serviceName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
    /**
     * Average Hours Per Day.
     * @nullable
     */
    averageHoursPerDay?: BigNumber;
    /**
     * Average Hours Per Month.
     * @nullable
     */
    averageHoursPerMonth?: BigNumber;
    /**
     * Average Hours Per Week.
     * @nullable
     */
    averageHoursPerWeek?: BigNumber;
    /**
     * Average Hours Per Year.
     * @nullable
     */
    averageHoursPerYear?: BigNumber;
    /**
     * Average Working Days Per Week.
     * @nullable
     */
    averageWorkingDaysPerWeek?: BigNumber;
    /**
     * Country/Region.
     * Maximum length: 128.
     * @nullable
     */
    country?: string;
    /**
     * Created By.
     * Maximum length: 255.
     * @nullable
     */
    createdBy?: string;
    /**
     * Created On.
     * @nullable
     */
    createdDateTime?: Moment;
    /**
     * External Code.
     * Maximum length: 128.
     */
    externalCode: string;
    /**
     * External Name.
     * Maximum length: 255.
     * @nullable
     */
    externalNameDeDe?: string;
    /**
     * External Name.
     * Maximum length: 255.
     * @nullable
     */
    externalNameDefaultValue?: string;
    /**
     * External Name.
     * Maximum length: 255.
     * @nullable
     */
    externalNameEnDebug?: string;
    /**
     * External Name.
     * Maximum length: 255.
     * @nullable
     */
    externalNameEnGb?: string;
    /**
     * External Name.
     * Maximum length: 255.
     * @nullable
     */
    externalNameEnUs?: string;
    /**
     * External Name.
     * Maximum length: 255.
     * @nullable
     */
    externalNameEsEs?: string;
    /**
     * External Name.
     * Maximum length: 255.
     * @nullable
     */
    externalNameEsMx?: string;
    /**
     * External Name.
     * Maximum length: 255.
     * @nullable
     */
    externalNameFrCa?: string;
    /**
     * External Name.
     * Maximum length: 255.
     * @nullable
     */
    externalNameFrFr?: string;
    /**
     * External Name.
     * Maximum length: 255.
     * @nullable
     */
    externalNameItIt?: string;
    /**
     * External Name.
     * Maximum length: 255.
     * @nullable
     */
    externalNameLocalized?: string;
    /**
     * External Name.
     * Maximum length: 255.
     * @nullable
     */
    externalNameNlNl?: string;
    /**
     * External Name.
     * Maximum length: 255.
     * @nullable
     */
    externalNamePtBr?: string;
    /**
     * External Name.
     * Maximum length: 255.
     * @nullable
     */
    externalNameZhCn?: string;
    /**
     * Flexible Requesting Allowed.
     * @nullable
     */
    flexibleRequestingAllowed?: boolean;
    /**
     * Is Individual Work Schedule.
     * @nullable
     */
    individualWorkSchedule?: boolean;
    /**
     * Last Modified By.
     * Maximum length: 255.
     * @nullable
     */
    lastModifiedBy?: string;
    /**
     * Last Modified On.
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
     * Model.
     * Maximum length: 255.
     * @nullable
     */
    modelCategory?: string;
    /**
     * Period Model.
     * Maximum length: 128.
     * @nullable
     */
    periodModel?: string;
    /**
     * Search Field.
     * Maximum length: 255.
     * @nullable
     */
    searchString?: string;
    /**
     * Shift Classification.
     * Maximum length: 128.
     * @nullable
     */
    shiftClassification?: string;
    /**
     * Starting Date.
     * @nullable
     */
    startingDate?: Moment;
    /**
     * Time Recording Variant.
     * Maximum length: 255.
     * @nullable
     */
    timeRecordingVariant?: string;
    /**
     * User.
     * Maximum length: 100.
     * @nullable
     */
    userId?: string;
    /**
     * One-to-many navigation property to the [[Country]] entity.
     */
    countryNav: Country[];
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
    lastModifiedByNav: User;
    /**
     * One-to-one navigation property to the [[MdfEnumValue]] entity.
     */
    mdfSystemRecordStatusNav: MdfEnumValue;
    /**
     * One-to-one navigation property to the [[MdfEnumValue]] entity.
     */
    modelCategoryNav: MdfEnumValue;
    /**
     * One-to-one navigation property to the [[WorkSchedule]] entity.
     */
    periodModelNav: WorkSchedule;
    /**
     * One-to-one navigation property to the [[ShiftClassification]] entity.
     */
    shiftClassificationNav: ShiftClassification;
    /**
     * One-to-one navigation property to the [[MdfEnumValue]] entity.
     */
    timeRecordingVariantNav: MdfEnumValue;
    /**
     * One-to-one navigation property to the [[User]] entity.
     */
    userIdNav: User;
    /**
     * One-to-many navigation property to the [[WfRequest]] entity.
     */
    wfRequestNav: WfRequest[];
    /**
     * One-to-many navigation property to the [[WorkScheduleDayModelAssignment]] entity.
     */
    workScheduleDayModels: WorkScheduleDayModelAssignment[];
    /**
     * One-to-many navigation property to the [[WorkScheduleDay]] entity.
     */
    workScheduleDays: WorkScheduleDay[];
    /**
     * Returns an entity builder to construct instances `WorkSchedule`.
     * @returns A builder that constructs instances of entity type `WorkSchedule`.
     */
    static builder(): EntityBuilderType<WorkSchedule, WorkScheduleTypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `WorkSchedule` entity type.
     * @returns A `WorkSchedule` request builder.
     */
    static requestBuilder(): WorkScheduleRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `WorkSchedule`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `WorkSchedule`.
     */
    static customField(fieldName: string): CustomField<WorkSchedule>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
import { Country, CountryType } from './Country';
import { User, UserType } from './User';
import { MdfLocalizedValue, MdfLocalizedValueType } from './MdfLocalizedValue';
import { MdfEnumValue, MdfEnumValueType } from './MdfEnumValue';
import { ShiftClassification, ShiftClassificationType } from './ShiftClassification';
import { WfRequest, WfRequestType } from './WfRequest';
import { WorkScheduleDayModelAssignment, WorkScheduleDayModelAssignmentType } from './WorkScheduleDayModelAssignment';
import { WorkScheduleDay, WorkScheduleDayType } from './WorkScheduleDay';
export interface WorkScheduleType {
    averageHoursPerDay?: BigNumber;
    averageHoursPerMonth?: BigNumber;
    averageHoursPerWeek?: BigNumber;
    averageHoursPerYear?: BigNumber;
    averageWorkingDaysPerWeek?: BigNumber;
    country?: string;
    createdBy?: string;
    createdDateTime?: Moment;
    externalCode: string;
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
    flexibleRequestingAllowed?: boolean;
    individualWorkSchedule?: boolean;
    lastModifiedBy?: string;
    lastModifiedDateTime?: Moment;
    mdfSystemRecordStatus?: string;
    modelCategory?: string;
    periodModel?: string;
    searchString?: string;
    shiftClassification?: string;
    startingDate?: Moment;
    timeRecordingVariant?: string;
    userId?: string;
    countryNav: CountryType[];
    createdByNav: UserType;
    externalNameTranslationTextNav: MdfLocalizedValueType[];
    lastModifiedByNav: UserType;
    mdfSystemRecordStatusNav: MdfEnumValueType;
    modelCategoryNav: MdfEnumValueType;
    periodModelNav: WorkScheduleType;
    shiftClassificationNav: ShiftClassificationType;
    timeRecordingVariantNav: MdfEnumValueType;
    userIdNav: UserType;
    wfRequestNav: WfRequestType[];
    workScheduleDayModels: WorkScheduleDayModelAssignmentType[];
    workScheduleDays: WorkScheduleDayType[];
}
export interface WorkScheduleTypeForceMandatory {
    averageHoursPerDay: BigNumber;
    averageHoursPerMonth: BigNumber;
    averageHoursPerWeek: BigNumber;
    averageHoursPerYear: BigNumber;
    averageWorkingDaysPerWeek: BigNumber;
    country: string;
    createdBy: string;
    createdDateTime: Moment;
    externalCode: string;
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
    flexibleRequestingAllowed: boolean;
    individualWorkSchedule: boolean;
    lastModifiedBy: string;
    lastModifiedDateTime: Moment;
    mdfSystemRecordStatus: string;
    modelCategory: string;
    periodModel: string;
    searchString: string;
    shiftClassification: string;
    startingDate: Moment;
    timeRecordingVariant: string;
    userId: string;
    countryNav: CountryType[];
    createdByNav: UserType;
    externalNameTranslationTextNav: MdfLocalizedValueType[];
    lastModifiedByNav: UserType;
    mdfSystemRecordStatusNav: MdfEnumValueType;
    modelCategoryNav: MdfEnumValueType;
    periodModelNav: WorkScheduleType;
    shiftClassificationNav: ShiftClassificationType;
    timeRecordingVariantNav: MdfEnumValueType;
    userIdNav: UserType;
    wfRequestNav: WfRequestType[];
    workScheduleDayModels: WorkScheduleDayModelAssignmentType[];
    workScheduleDays: WorkScheduleDayType[];
}
export declare namespace WorkSchedule {
    /**
     * Static representation of the [[averageHoursPerDay]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const AVERAGE_HOURS_PER_DAY: BigNumberField<WorkSchedule>;
    /**
     * Static representation of the [[averageHoursPerMonth]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const AVERAGE_HOURS_PER_MONTH: BigNumberField<WorkSchedule>;
    /**
     * Static representation of the [[averageHoursPerWeek]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const AVERAGE_HOURS_PER_WEEK: BigNumberField<WorkSchedule>;
    /**
     * Static representation of the [[averageHoursPerYear]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const AVERAGE_HOURS_PER_YEAR: BigNumberField<WorkSchedule>;
    /**
     * Static representation of the [[averageWorkingDaysPerWeek]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const AVERAGE_WORKING_DAYS_PER_WEEK: BigNumberField<WorkSchedule>;
    /**
     * Static representation of the [[country]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const COUNTRY: StringField<WorkSchedule>;
    /**
     * Static representation of the [[createdBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_BY: StringField<WorkSchedule>;
    /**
     * Static representation of the [[createdDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_DATE_TIME: DateField<WorkSchedule>;
    /**
     * Static representation of the [[externalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXTERNAL_CODE: StringField<WorkSchedule>;
    /**
     * Static representation of the [[externalNameDeDe]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXTERNAL_NAME_DE_DE: StringField<WorkSchedule>;
    /**
     * Static representation of the [[externalNameDefaultValue]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXTERNAL_NAME_DEFAULT_VALUE: StringField<WorkSchedule>;
    /**
     * Static representation of the [[externalNameEnDebug]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXTERNAL_NAME_EN_DEBUG: StringField<WorkSchedule>;
    /**
     * Static representation of the [[externalNameEnGb]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXTERNAL_NAME_EN_GB: StringField<WorkSchedule>;
    /**
     * Static representation of the [[externalNameEnUs]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXTERNAL_NAME_EN_US: StringField<WorkSchedule>;
    /**
     * Static representation of the [[externalNameEsEs]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXTERNAL_NAME_ES_ES: StringField<WorkSchedule>;
    /**
     * Static representation of the [[externalNameEsMx]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXTERNAL_NAME_ES_MX: StringField<WorkSchedule>;
    /**
     * Static representation of the [[externalNameFrCa]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXTERNAL_NAME_FR_CA: StringField<WorkSchedule>;
    /**
     * Static representation of the [[externalNameFrFr]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXTERNAL_NAME_FR_FR: StringField<WorkSchedule>;
    /**
     * Static representation of the [[externalNameItIt]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXTERNAL_NAME_IT_IT: StringField<WorkSchedule>;
    /**
     * Static representation of the [[externalNameLocalized]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXTERNAL_NAME_LOCALIZED: StringField<WorkSchedule>;
    /**
     * Static representation of the [[externalNameNlNl]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXTERNAL_NAME_NL_NL: StringField<WorkSchedule>;
    /**
     * Static representation of the [[externalNamePtBr]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXTERNAL_NAME_PT_BR: StringField<WorkSchedule>;
    /**
     * Static representation of the [[externalNameZhCn]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXTERNAL_NAME_ZH_CN: StringField<WorkSchedule>;
    /**
     * Static representation of the [[flexibleRequestingAllowed]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const FLEXIBLE_REQUESTING_ALLOWED: BooleanField<WorkSchedule>;
    /**
     * Static representation of the [[individualWorkSchedule]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const INDIVIDUAL_WORK_SCHEDULE: BooleanField<WorkSchedule>;
    /**
     * Static representation of the [[lastModifiedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_BY: StringField<WorkSchedule>;
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_DATE_TIME: DateField<WorkSchedule>;
    /**
     * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MDF_SYSTEM_RECORD_STATUS: StringField<WorkSchedule>;
    /**
     * Static representation of the [[modelCategory]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MODEL_CATEGORY: StringField<WorkSchedule>;
    /**
     * Static representation of the [[periodModel]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PERIOD_MODEL: StringField<WorkSchedule>;
    /**
     * Static representation of the [[searchString]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SEARCH_STRING: StringField<WorkSchedule>;
    /**
     * Static representation of the [[shiftClassification]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SHIFT_CLASSIFICATION: StringField<WorkSchedule>;
    /**
     * Static representation of the [[startingDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const STARTING_DATE: DateField<WorkSchedule>;
    /**
     * Static representation of the [[timeRecordingVariant]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TIME_RECORDING_VARIANT: StringField<WorkSchedule>;
    /**
     * Static representation of the [[userId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const USER_ID: StringField<WorkSchedule>;
    /**
     * Static representation of the one-to-many navigation property [[countryNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const COUNTRY_NAV: Link<WorkSchedule, Country>;
    /**
     * Static representation of the one-to-one navigation property [[createdByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_BY_NAV: OneToOneLink<WorkSchedule, User>;
    /**
     * Static representation of the one-to-many navigation property [[externalNameTranslationTextNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXTERNAL_NAME_TRANSLATION_TEXT_NAV: Link<WorkSchedule, MdfLocalizedValue>;
    /**
     * Static representation of the one-to-one navigation property [[lastModifiedByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_BY_NAV: OneToOneLink<WorkSchedule, User>;
    /**
     * Static representation of the one-to-one navigation property [[mdfSystemRecordStatusNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MDF_SYSTEM_RECORD_STATUS_NAV: OneToOneLink<WorkSchedule, MdfEnumValue>;
    /**
     * Static representation of the one-to-one navigation property [[modelCategoryNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MODEL_CATEGORY_NAV: OneToOneLink<WorkSchedule, MdfEnumValue>;
    /**
     * Static representation of the one-to-one navigation property [[periodModelNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PERIOD_MODEL_NAV: OneToOneLink<WorkSchedule, WorkSchedule>;
    /**
     * Static representation of the one-to-one navigation property [[shiftClassificationNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SHIFT_CLASSIFICATION_NAV: OneToOneLink<WorkSchedule, ShiftClassification>;
    /**
     * Static representation of the one-to-one navigation property [[timeRecordingVariantNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TIME_RECORDING_VARIANT_NAV: OneToOneLink<WorkSchedule, MdfEnumValue>;
    /**
     * Static representation of the one-to-one navigation property [[userIdNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const USER_ID_NAV: OneToOneLink<WorkSchedule, User>;
    /**
     * Static representation of the one-to-many navigation property [[wfRequestNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const WF_REQUEST_NAV: Link<WorkSchedule, WfRequest>;
    /**
     * Static representation of the one-to-many navigation property [[workScheduleDayModels]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const WORK_SCHEDULE_DAY_MODELS: Link<WorkSchedule, WorkScheduleDayModelAssignment>;
    /**
     * Static representation of the one-to-many navigation property [[workScheduleDays]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const WORK_SCHEDULE_DAYS: Link<WorkSchedule, WorkScheduleDay>;
    /**
     * All fields of the WorkSchedule entity.
     */
    const _allFields: Array<BigNumberField<WorkSchedule> | StringField<WorkSchedule> | DateField<WorkSchedule> | BooleanField<WorkSchedule> | Link<WorkSchedule, Country> | OneToOneLink<WorkSchedule, User> | Link<WorkSchedule, MdfLocalizedValue> | OneToOneLink<WorkSchedule, MdfEnumValue> | OneToOneLink<WorkSchedule, WorkSchedule> | OneToOneLink<WorkSchedule, ShiftClassification> | Link<WorkSchedule, WfRequest> | Link<WorkSchedule, WorkScheduleDayModelAssignment> | Link<WorkSchedule, WorkScheduleDay>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<WorkSchedule>;
    /**
     * All key fields of the WorkSchedule entity.
     */
    const _keyFields: Array<Selectable<WorkSchedule>>;
    /**
     * Mapping of all key field names to the respective static field property WorkSchedule.
     */
    const _keys: {
        [keys: string]: Selectable<WorkSchedule>;
    };
}
//# sourceMappingURL=WorkSchedule.d.ts.map
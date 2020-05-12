import { FoJobCodeRequestBuilder } from './FoJobCodeRequestBuilder';
import { Moment } from 'moment';
import { AllFields, CustomField, DateField, Entity, EntityBuilderType, Link, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "FOJobCode" of service "SFOData".
 */
export declare class FoJobCode extends Entity implements FoJobCodeType {
    /**
     * Technical entity name for FoJobCode.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for FoJobCode.
     */
    static _serviceName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
    /**
     * createdBy.
     * Maximum length: 100.
     * @nullable
     */
    createdBy?: string;
    /**
     * createdDate.
     * @nullable
     */
    createdDateTime?: Moment;
    /**
     * createdDate.
     * @nullable
     */
    createdOn?: Moment;
    /**
     * Job Level.
     * Maximum length: 128.
     * @nullable
     */
    defaultJobLevel?: string;
    /**
     * Description.
     * Maximum length: 4000.
     * @nullable
     */
    description?: string;
    /**
     * Description.
     * Maximum length: 4000.
     * @nullable
     */
    descriptionDeDe?: string;
    /**
     * Description.
     * Maximum length: 4000.
     * @nullable
     */
    descriptionDefaultValue?: string;
    /**
     * Description.
     * Maximum length: 4000.
     * @nullable
     */
    descriptionEnDebug?: string;
    /**
     * Description.
     * Maximum length: 4000.
     * @nullable
     */
    descriptionEnGb?: string;
    /**
     * Description.
     * Maximum length: 4000.
     * @nullable
     */
    descriptionEnUs?: string;
    /**
     * Description.
     * Maximum length: 4000.
     * @nullable
     */
    descriptionEsEs?: string;
    /**
     * Description.
     * Maximum length: 4000.
     * @nullable
     */
    descriptionEsMx?: string;
    /**
     * Description.
     * Maximum length: 4000.
     * @nullable
     */
    descriptionFrCa?: string;
    /**
     * Description.
     * Maximum length: 4000.
     * @nullable
     */
    descriptionFrFr?: string;
    /**
     * Description.
     * Maximum length: 4000.
     * @nullable
     */
    descriptionItIt?: string;
    /**
     * Description.
     * Maximum length: 4000.
     * @nullable
     */
    descriptionLocalized?: string;
    /**
     * Description.
     * Maximum length: 4000.
     * @nullable
     */
    descriptionNlNl?: string;
    /**
     * Description.
     * Maximum length: 4000.
     * @nullable
     */
    descriptionPtBr?: string;
    /**
     * Description.
     * Maximum length: 4000.
     * @nullable
     */
    descriptionZhCn?: string;
    /**
     * effectiveEndDate.
     * @nullable
     */
    endDate?: Moment;
    /**
     * Job Code.
     * Maximum length: 32.
     */
    externalCode: string;
    /**
     * Pay Grade.
     * Maximum length: 32.
     * @nullable
     */
    grade?: string;
    /**
     * Job Family.
     * Maximum length: 128.
     * @nullable
     */
    jobFunction?: string;
    /**
     * Job Level.
     * Maximum length: 128.
     * @nullable
     */
    jobLevel?: string;
    /**
     * lastModifiedBy.
     * Maximum length: 100.
     * @nullable
     */
    lastModifiedBy?: string;
    /**
     * lastModifiedDate.
     * @nullable
     */
    lastModifiedDateTime?: Moment;
    /**
     * lastModifiedDate.
     * @nullable
     */
    lastModifiedOn?: Moment;
    /**
     * Job Title.
     * Maximum length: 90.
     * @nullable
     */
    name?: string;
    /**
     * Job Title.
     * Maximum length: 90.
     * @nullable
     */
    nameDeDe?: string;
    /**
     * Job Title.
     * Maximum length: 90.
     * @nullable
     */
    nameDefaultValue?: string;
    /**
     * Job Title.
     * Maximum length: 90.
     * @nullable
     */
    nameEnDebug?: string;
    /**
     * Job Title.
     * Maximum length: 90.
     * @nullable
     */
    nameEnGb?: string;
    /**
     * Job Title.
     * Maximum length: 90.
     * @nullable
     */
    nameEnUs?: string;
    /**
     * Job Title.
     * Maximum length: 90.
     * @nullable
     */
    nameEsEs?: string;
    /**
     * Job Title.
     * Maximum length: 90.
     * @nullable
     */
    nameEsMx?: string;
    /**
     * Job Title.
     * Maximum length: 90.
     * @nullable
     */
    nameFrCa?: string;
    /**
     * Job Title.
     * Maximum length: 90.
     * @nullable
     */
    nameFrFr?: string;
    /**
     * Job Title.
     * Maximum length: 90.
     * @nullable
     */
    nameItIt?: string;
    /**
     * Job Title.
     * Maximum length: 90.
     * @nullable
     */
    nameLocalized?: string;
    /**
     * Job Title.
     * Maximum length: 90.
     * @nullable
     */
    nameNlNl?: string;
    /**
     * Job Title.
     * Maximum length: 90.
     * @nullable
     */
    namePtBr?: string;
    /**
     * Job Title.
     * Maximum length: 90.
     * @nullable
     */
    nameZhCn?: string;
    /**
     * Parent Job Classification.
     * Maximum length: 128.
     * @nullable
     */
    parentJobCode?: string;
    /**
     * Effective as of.
     */
    startDate: Moment;
    /**
     * Status.
     * Maximum length: 255.
     * @nullable
     */
    status?: string;
    /**
     * One-to-one navigation property to the [[PickListValueV2]] entity.
     */
    defaultJobLevelNav: PickListValueV2;
    /**
     * One-to-many navigation property to the [[LocalizedData]] entity.
     */
    descriptionTranslationNav: LocalizedData[];
    /**
     * One-to-many navigation property to the [[MdfLocalizedValue]] entity.
     */
    descriptionTranslationTextNav: MdfLocalizedValue[];
    /**
     * One-to-one navigation property to the [[FoPayGrade]] entity.
     */
    gradeNav: FoPayGrade;
    /**
     * One-to-one navigation property to the [[FoJobFunction]] entity.
     */
    jobFunctionNav: FoJobFunction;
    /**
     * One-to-one navigation property to the [[PicklistOption]] entity.
     */
    jobLevelNav: PicklistOption;
    /**
     * One-to-one navigation property to the [[FoJobClassLocalAus]] entity.
     */
    localNavAus: FoJobClassLocalAus;
    /**
     * One-to-one navigation property to the [[FoJobClassLocalBra]] entity.
     */
    localNavBra: FoJobClassLocalBra;
    /**
     * One-to-one navigation property to the [[FoJobClassLocalCan]] entity.
     */
    localNavCan: FoJobClassLocalCan;
    /**
     * One-to-one navigation property to the [[FoJobClassLocalDeflt]] entity.
     */
    localNavDeflt: FoJobClassLocalDeflt;
    /**
     * One-to-one navigation property to the [[FoJobClassLocalFra]] entity.
     */
    localNavFra: FoJobClassLocalFra;
    /**
     * One-to-one navigation property to the [[FoJobClassLocalGbr]] entity.
     */
    localNavGbr: FoJobClassLocalGbr;
    /**
     * One-to-one navigation property to the [[FoJobClassLocalIta]] entity.
     */
    localNavIta: FoJobClassLocalIta;
    /**
     * One-to-one navigation property to the [[FoJobClassLocalUsa]] entity.
     */
    localNavUsa: FoJobClassLocalUsa;
    /**
     * One-to-many navigation property to the [[LocalizedData]] entity.
     */
    nameTranslationNav: LocalizedData[];
    /**
     * One-to-many navigation property to the [[MdfLocalizedValue]] entity.
     */
    nameTranslationTextNav: MdfLocalizedValue[];
    /**
     * One-to-one navigation property to the [[FoJobCode]] entity.
     */
    parentJobCodeNav: FoJobCode;
    /**
     * One-to-one navigation property to the [[MdfEnumValue]] entity.
     */
    statusNav: MdfEnumValue;
    /**
     * One-to-many navigation property to the [[JobClassificationCountry]] entity.
     */
    toJobClassificationCountry: JobClassificationCountry[];
    /**
     * Returns an entity builder to construct instances `FoJobCode`.
     * @returns A builder that constructs instances of entity type `FoJobCode`.
     */
    static builder(): EntityBuilderType<FoJobCode, FoJobCodeTypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `FoJobCode` entity type.
     * @returns A `FoJobCode` request builder.
     */
    static requestBuilder(): FoJobCodeRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `FoJobCode`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `FoJobCode`.
     */
    static customField(fieldName: string): CustomField<FoJobCode>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
import { PickListValueV2, PickListValueV2Type } from './PickListValueV2';
import { LocalizedData, LocalizedDataType } from './LocalizedData';
import { MdfLocalizedValue, MdfLocalizedValueType } from './MdfLocalizedValue';
import { FoPayGrade, FoPayGradeType } from './FoPayGrade';
import { FoJobFunction, FoJobFunctionType } from './FoJobFunction';
import { PicklistOption, PicklistOptionType } from './PicklistOption';
import { FoJobClassLocalAus, FoJobClassLocalAusType } from './FoJobClassLocalAus';
import { FoJobClassLocalBra, FoJobClassLocalBraType } from './FoJobClassLocalBra';
import { FoJobClassLocalCan, FoJobClassLocalCanType } from './FoJobClassLocalCan';
import { FoJobClassLocalDeflt, FoJobClassLocalDefltType } from './FoJobClassLocalDeflt';
import { FoJobClassLocalFra, FoJobClassLocalFraType } from './FoJobClassLocalFra';
import { FoJobClassLocalGbr, FoJobClassLocalGbrType } from './FoJobClassLocalGbr';
import { FoJobClassLocalIta, FoJobClassLocalItaType } from './FoJobClassLocalIta';
import { FoJobClassLocalUsa, FoJobClassLocalUsaType } from './FoJobClassLocalUsa';
import { MdfEnumValue, MdfEnumValueType } from './MdfEnumValue';
import { JobClassificationCountry, JobClassificationCountryType } from './JobClassificationCountry';
export interface FoJobCodeType {
    createdBy?: string;
    createdDateTime?: Moment;
    createdOn?: Moment;
    defaultJobLevel?: string;
    description?: string;
    descriptionDeDe?: string;
    descriptionDefaultValue?: string;
    descriptionEnDebug?: string;
    descriptionEnGb?: string;
    descriptionEnUs?: string;
    descriptionEsEs?: string;
    descriptionEsMx?: string;
    descriptionFrCa?: string;
    descriptionFrFr?: string;
    descriptionItIt?: string;
    descriptionLocalized?: string;
    descriptionNlNl?: string;
    descriptionPtBr?: string;
    descriptionZhCn?: string;
    endDate?: Moment;
    externalCode: string;
    grade?: string;
    jobFunction?: string;
    jobLevel?: string;
    lastModifiedBy?: string;
    lastModifiedDateTime?: Moment;
    lastModifiedOn?: Moment;
    name?: string;
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
    parentJobCode?: string;
    startDate: Moment;
    status?: string;
    defaultJobLevelNav: PickListValueV2Type;
    descriptionTranslationNav: LocalizedDataType[];
    descriptionTranslationTextNav: MdfLocalizedValueType[];
    gradeNav: FoPayGradeType;
    jobFunctionNav: FoJobFunctionType;
    jobLevelNav: PicklistOptionType;
    localNavAus: FoJobClassLocalAusType;
    localNavBra: FoJobClassLocalBraType;
    localNavCan: FoJobClassLocalCanType;
    localNavDeflt: FoJobClassLocalDefltType;
    localNavFra: FoJobClassLocalFraType;
    localNavGbr: FoJobClassLocalGbrType;
    localNavIta: FoJobClassLocalItaType;
    localNavUsa: FoJobClassLocalUsaType;
    nameTranslationNav: LocalizedDataType[];
    nameTranslationTextNav: MdfLocalizedValueType[];
    parentJobCodeNav: FoJobCodeType;
    statusNav: MdfEnumValueType;
    toJobClassificationCountry: JobClassificationCountryType[];
}
export interface FoJobCodeTypeForceMandatory {
    createdBy: string;
    createdDateTime: Moment;
    createdOn: Moment;
    defaultJobLevel: string;
    description: string;
    descriptionDeDe: string;
    descriptionDefaultValue: string;
    descriptionEnDebug: string;
    descriptionEnGb: string;
    descriptionEnUs: string;
    descriptionEsEs: string;
    descriptionEsMx: string;
    descriptionFrCa: string;
    descriptionFrFr: string;
    descriptionItIt: string;
    descriptionLocalized: string;
    descriptionNlNl: string;
    descriptionPtBr: string;
    descriptionZhCn: string;
    endDate: Moment;
    externalCode: string;
    grade: string;
    jobFunction: string;
    jobLevel: string;
    lastModifiedBy: string;
    lastModifiedDateTime: Moment;
    lastModifiedOn: Moment;
    name: string;
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
    parentJobCode: string;
    startDate: Moment;
    status: string;
    defaultJobLevelNav: PickListValueV2Type;
    descriptionTranslationNav: LocalizedDataType[];
    descriptionTranslationTextNav: MdfLocalizedValueType[];
    gradeNav: FoPayGradeType;
    jobFunctionNav: FoJobFunctionType;
    jobLevelNav: PicklistOptionType;
    localNavAus: FoJobClassLocalAusType;
    localNavBra: FoJobClassLocalBraType;
    localNavCan: FoJobClassLocalCanType;
    localNavDeflt: FoJobClassLocalDefltType;
    localNavFra: FoJobClassLocalFraType;
    localNavGbr: FoJobClassLocalGbrType;
    localNavIta: FoJobClassLocalItaType;
    localNavUsa: FoJobClassLocalUsaType;
    nameTranslationNav: LocalizedDataType[];
    nameTranslationTextNav: MdfLocalizedValueType[];
    parentJobCodeNav: FoJobCodeType;
    statusNav: MdfEnumValueType;
    toJobClassificationCountry: JobClassificationCountryType[];
}
export declare namespace FoJobCode {
    /**
     * Static representation of the [[createdBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_BY: StringField<FoJobCode>;
    /**
     * Static representation of the [[createdDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_DATE_TIME: DateField<FoJobCode>;
    /**
     * Static representation of the [[createdOn]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_ON: DateField<FoJobCode>;
    /**
     * Static representation of the [[defaultJobLevel]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DEFAULT_JOB_LEVEL: StringField<FoJobCode>;
    /**
     * Static representation of the [[description]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DESCRIPTION: StringField<FoJobCode>;
    /**
     * Static representation of the [[descriptionDeDe]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DESCRIPTION_DE_DE: StringField<FoJobCode>;
    /**
     * Static representation of the [[descriptionDefaultValue]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DESCRIPTION_DEFAULT_VALUE: StringField<FoJobCode>;
    /**
     * Static representation of the [[descriptionEnDebug]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DESCRIPTION_EN_DEBUG: StringField<FoJobCode>;
    /**
     * Static representation of the [[descriptionEnGb]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DESCRIPTION_EN_GB: StringField<FoJobCode>;
    /**
     * Static representation of the [[descriptionEnUs]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DESCRIPTION_EN_US: StringField<FoJobCode>;
    /**
     * Static representation of the [[descriptionEsEs]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DESCRIPTION_ES_ES: StringField<FoJobCode>;
    /**
     * Static representation of the [[descriptionEsMx]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DESCRIPTION_ES_MX: StringField<FoJobCode>;
    /**
     * Static representation of the [[descriptionFrCa]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DESCRIPTION_FR_CA: StringField<FoJobCode>;
    /**
     * Static representation of the [[descriptionFrFr]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DESCRIPTION_FR_FR: StringField<FoJobCode>;
    /**
     * Static representation of the [[descriptionItIt]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DESCRIPTION_IT_IT: StringField<FoJobCode>;
    /**
     * Static representation of the [[descriptionLocalized]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DESCRIPTION_LOCALIZED: StringField<FoJobCode>;
    /**
     * Static representation of the [[descriptionNlNl]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DESCRIPTION_NL_NL: StringField<FoJobCode>;
    /**
     * Static representation of the [[descriptionPtBr]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DESCRIPTION_PT_BR: StringField<FoJobCode>;
    /**
     * Static representation of the [[descriptionZhCn]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DESCRIPTION_ZH_CN: StringField<FoJobCode>;
    /**
     * Static representation of the [[endDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const END_DATE: DateField<FoJobCode>;
    /**
     * Static representation of the [[externalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXTERNAL_CODE: StringField<FoJobCode>;
    /**
     * Static representation of the [[grade]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const GRADE: StringField<FoJobCode>;
    /**
     * Static representation of the [[jobFunction]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const JOB_FUNCTION: StringField<FoJobCode>;
    /**
     * Static representation of the [[jobLevel]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const JOB_LEVEL: StringField<FoJobCode>;
    /**
     * Static representation of the [[lastModifiedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_BY: StringField<FoJobCode>;
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_DATE_TIME: DateField<FoJobCode>;
    /**
     * Static representation of the [[lastModifiedOn]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_ON: DateField<FoJobCode>;
    /**
     * Static representation of the [[name]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const NAME: StringField<FoJobCode>;
    /**
     * Static representation of the [[nameDeDe]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const NAME_DE_DE: StringField<FoJobCode>;
    /**
     * Static representation of the [[nameDefaultValue]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const NAME_DEFAULT_VALUE: StringField<FoJobCode>;
    /**
     * Static representation of the [[nameEnDebug]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const NAME_EN_DEBUG: StringField<FoJobCode>;
    /**
     * Static representation of the [[nameEnGb]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const NAME_EN_GB: StringField<FoJobCode>;
    /**
     * Static representation of the [[nameEnUs]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const NAME_EN_US: StringField<FoJobCode>;
    /**
     * Static representation of the [[nameEsEs]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const NAME_ES_ES: StringField<FoJobCode>;
    /**
     * Static representation of the [[nameEsMx]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const NAME_ES_MX: StringField<FoJobCode>;
    /**
     * Static representation of the [[nameFrCa]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const NAME_FR_CA: StringField<FoJobCode>;
    /**
     * Static representation of the [[nameFrFr]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const NAME_FR_FR: StringField<FoJobCode>;
    /**
     * Static representation of the [[nameItIt]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const NAME_IT_IT: StringField<FoJobCode>;
    /**
     * Static representation of the [[nameLocalized]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const NAME_LOCALIZED: StringField<FoJobCode>;
    /**
     * Static representation of the [[nameNlNl]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const NAME_NL_NL: StringField<FoJobCode>;
    /**
     * Static representation of the [[namePtBr]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const NAME_PT_BR: StringField<FoJobCode>;
    /**
     * Static representation of the [[nameZhCn]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const NAME_ZH_CN: StringField<FoJobCode>;
    /**
     * Static representation of the [[parentJobCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PARENT_JOB_CODE: StringField<FoJobCode>;
    /**
     * Static representation of the [[startDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const START_DATE: DateField<FoJobCode>;
    /**
     * Static representation of the [[status]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const STATUS: StringField<FoJobCode>;
    /**
     * Static representation of the one-to-one navigation property [[defaultJobLevelNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DEFAULT_JOB_LEVEL_NAV: OneToOneLink<FoJobCode, PickListValueV2>;
    /**
     * Static representation of the one-to-many navigation property [[descriptionTranslationNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DESCRIPTION_TRANSLATION_NAV: Link<FoJobCode, LocalizedData>;
    /**
     * Static representation of the one-to-many navigation property [[descriptionTranslationTextNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DESCRIPTION_TRANSLATION_TEXT_NAV: Link<FoJobCode, MdfLocalizedValue>;
    /**
     * Static representation of the one-to-one navigation property [[gradeNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const GRADE_NAV: OneToOneLink<FoJobCode, FoPayGrade>;
    /**
     * Static representation of the one-to-one navigation property [[jobFunctionNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const JOB_FUNCTION_NAV: OneToOneLink<FoJobCode, FoJobFunction>;
    /**
     * Static representation of the one-to-one navigation property [[jobLevelNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const JOB_LEVEL_NAV: OneToOneLink<FoJobCode, PicklistOption>;
    /**
     * Static representation of the one-to-one navigation property [[localNavAus]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LOCAL_NAV_AUS: OneToOneLink<FoJobCode, FoJobClassLocalAus>;
    /**
     * Static representation of the one-to-one navigation property [[localNavBra]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LOCAL_NAV_BRA: OneToOneLink<FoJobCode, FoJobClassLocalBra>;
    /**
     * Static representation of the one-to-one navigation property [[localNavCan]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LOCAL_NAV_CAN: OneToOneLink<FoJobCode, FoJobClassLocalCan>;
    /**
     * Static representation of the one-to-one navigation property [[localNavDeflt]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LOCAL_NAV_DEFLT: OneToOneLink<FoJobCode, FoJobClassLocalDeflt>;
    /**
     * Static representation of the one-to-one navigation property [[localNavFra]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LOCAL_NAV_FRA: OneToOneLink<FoJobCode, FoJobClassLocalFra>;
    /**
     * Static representation of the one-to-one navigation property [[localNavGbr]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LOCAL_NAV_GBR: OneToOneLink<FoJobCode, FoJobClassLocalGbr>;
    /**
     * Static representation of the one-to-one navigation property [[localNavIta]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LOCAL_NAV_ITA: OneToOneLink<FoJobCode, FoJobClassLocalIta>;
    /**
     * Static representation of the one-to-one navigation property [[localNavUsa]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LOCAL_NAV_USA: OneToOneLink<FoJobCode, FoJobClassLocalUsa>;
    /**
     * Static representation of the one-to-many navigation property [[nameTranslationNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const NAME_TRANSLATION_NAV: Link<FoJobCode, LocalizedData>;
    /**
     * Static representation of the one-to-many navigation property [[nameTranslationTextNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const NAME_TRANSLATION_TEXT_NAV: Link<FoJobCode, MdfLocalizedValue>;
    /**
     * Static representation of the one-to-one navigation property [[parentJobCodeNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PARENT_JOB_CODE_NAV: OneToOneLink<FoJobCode, FoJobCode>;
    /**
     * Static representation of the one-to-one navigation property [[statusNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const STATUS_NAV: OneToOneLink<FoJobCode, MdfEnumValue>;
    /**
     * Static representation of the one-to-many navigation property [[toJobClassificationCountry]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TO_JOB_CLASSIFICATION_COUNTRY: Link<FoJobCode, JobClassificationCountry>;
    /**
     * All fields of the FoJobCode entity.
     */
    const _allFields: Array<StringField<FoJobCode> | DateField<FoJobCode> | OneToOneLink<FoJobCode, PickListValueV2> | Link<FoJobCode, LocalizedData> | Link<FoJobCode, MdfLocalizedValue> | OneToOneLink<FoJobCode, FoPayGrade> | OneToOneLink<FoJobCode, FoJobFunction> | OneToOneLink<FoJobCode, PicklistOption> | OneToOneLink<FoJobCode, FoJobClassLocalAus> | OneToOneLink<FoJobCode, FoJobClassLocalBra> | OneToOneLink<FoJobCode, FoJobClassLocalCan> | OneToOneLink<FoJobCode, FoJobClassLocalDeflt> | OneToOneLink<FoJobCode, FoJobClassLocalFra> | OneToOneLink<FoJobCode, FoJobClassLocalGbr> | OneToOneLink<FoJobCode, FoJobClassLocalIta> | OneToOneLink<FoJobCode, FoJobClassLocalUsa> | OneToOneLink<FoJobCode, FoJobCode> | OneToOneLink<FoJobCode, MdfEnumValue> | Link<FoJobCode, JobClassificationCountry>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<FoJobCode>;
    /**
     * All key fields of the FoJobCode entity.
     */
    const _keyFields: Array<Selectable<FoJobCode>>;
    /**
     * Mapping of all key field names to the respective static field property FoJobCode.
     */
    const _keys: {
        [keys: string]: Selectable<FoJobCode>;
    };
}
//# sourceMappingURL=FoJobCode.d.ts.map
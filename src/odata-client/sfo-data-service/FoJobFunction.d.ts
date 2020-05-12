import { FoJobFunctionRequestBuilder } from './FoJobFunctionRequestBuilder';
import { Moment } from 'moment';
import { AllFields, CustomField, DateField, Entity, EntityBuilderType, Link, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "FOJobFunction" of service "SFOData".
 */
export declare class FoJobFunction extends Entity implements FoJobFunctionType {
    /**
     * Technical entity name for FoJobFunction.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for FoJobFunction.
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
     * Description.
     * Maximum length: 128.
     * @nullable
     */
    description?: string;
    /**
     * Description.
     * Maximum length: 128.
     * @nullable
     */
    descriptionDeDe?: string;
    /**
     * Description.
     * Maximum length: 128.
     * @nullable
     */
    descriptionDefaultValue?: string;
    /**
     * Description.
     * Maximum length: 128.
     * @nullable
     */
    descriptionEnDebug?: string;
    /**
     * Description.
     * Maximum length: 128.
     * @nullable
     */
    descriptionEnGb?: string;
    /**
     * Description.
     * Maximum length: 128.
     * @nullable
     */
    descriptionEnUs?: string;
    /**
     * Description.
     * Maximum length: 128.
     * @nullable
     */
    descriptionEsEs?: string;
    /**
     * Description.
     * Maximum length: 128.
     * @nullable
     */
    descriptionEsMx?: string;
    /**
     * Description.
     * Maximum length: 128.
     * @nullable
     */
    descriptionFrCa?: string;
    /**
     * Description.
     * Maximum length: 128.
     * @nullable
     */
    descriptionFrFr?: string;
    /**
     * Description.
     * Maximum length: 128.
     * @nullable
     */
    descriptionItIt?: string;
    /**
     * Description.
     * Maximum length: 128.
     * @nullable
     */
    descriptionLocalized?: string;
    /**
     * Description.
     * Maximum length: 128.
     * @nullable
     */
    descriptionNlNl?: string;
    /**
     * Description.
     * Maximum length: 128.
     * @nullable
     */
    descriptionPtBr?: string;
    /**
     * Description.
     * Maximum length: 128.
     * @nullable
     */
    descriptionZhCn?: string;
    /**
     * effectiveEndDate.
     * @nullable
     */
    endDate?: Moment;
    /**
     * Job Family ID.
     * Maximum length: 32.
     */
    externalCode: string;
    /**
     * Job Family Type.
     * Maximum length: 128.
     * @nullable
     */
    jobFunctionType?: string;
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
     * Name.
     * Maximum length: 90.
     * @nullable
     */
    name?: string;
    /**
     * Name.
     * Maximum length: 90.
     * @nullable
     */
    nameDeDe?: string;
    /**
     * Name.
     * Maximum length: 90.
     * @nullable
     */
    nameDefaultValue?: string;
    /**
     * Name.
     * Maximum length: 90.
     * @nullable
     */
    nameEnDebug?: string;
    /**
     * Name.
     * Maximum length: 90.
     * @nullable
     */
    nameEnGb?: string;
    /**
     * Name.
     * Maximum length: 90.
     * @nullable
     */
    nameEnUs?: string;
    /**
     * Name.
     * Maximum length: 90.
     * @nullable
     */
    nameEsEs?: string;
    /**
     * Name.
     * Maximum length: 90.
     * @nullable
     */
    nameEsMx?: string;
    /**
     * Name.
     * Maximum length: 90.
     * @nullable
     */
    nameFrCa?: string;
    /**
     * Name.
     * Maximum length: 90.
     * @nullable
     */
    nameFrFr?: string;
    /**
     * Name.
     * Maximum length: 90.
     * @nullable
     */
    nameItIt?: string;
    /**
     * Name.
     * Maximum length: 90.
     * @nullable
     */
    nameLocalized?: string;
    /**
     * Name.
     * Maximum length: 90.
     * @nullable
     */
    nameNlNl?: string;
    /**
     * Name.
     * Maximum length: 90.
     * @nullable
     */
    namePtBr?: string;
    /**
     * Name.
     * Maximum length: 90.
     * @nullable
     */
    nameZhCn?: string;
    /**
     * Parent Job Family.
     * Maximum length: 128.
     * @nullable
     */
    parentFunctionCode?: string;
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
     * Job Family Type.
     * Maximum length: 128.
     * @nullable
     */
    type?: string;
    /**
     * One-to-one navigation property to the [[FoTranslation]] entity.
     */
    descriptionTranslationNav: FoTranslation;
    /**
     * One-to-many navigation property to the [[MdfLocalizedValue]] entity.
     */
    descriptionTranslationTextNav: MdfLocalizedValue[];
    /**
     * One-to-one navigation property to the [[PickListValueV2]] entity.
     */
    jobFunctionTypeNav: PickListValueV2;
    /**
     * One-to-one navigation property to the [[FoTranslation]] entity.
     */
    nameTranslationNav: FoTranslation;
    /**
     * One-to-many navigation property to the [[MdfLocalizedValue]] entity.
     */
    nameTranslationTextNav: MdfLocalizedValue[];
    /**
     * One-to-one navigation property to the [[FoJobFunction]] entity.
     */
    parentFunctionCodeNav: FoJobFunction;
    /**
     * One-to-one navigation property to the [[MdfEnumValue]] entity.
     */
    statusNav: MdfEnumValue;
    /**
     * One-to-one navigation property to the [[PicklistOption]] entity.
     */
    typeNav: PicklistOption;
    /**
     * Returns an entity builder to construct instances `FoJobFunction`.
     * @returns A builder that constructs instances of entity type `FoJobFunction`.
     */
    static builder(): EntityBuilderType<FoJobFunction, FoJobFunctionTypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `FoJobFunction` entity type.
     * @returns A `FoJobFunction` request builder.
     */
    static requestBuilder(): FoJobFunctionRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `FoJobFunction`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `FoJobFunction`.
     */
    static customField(fieldName: string): CustomField<FoJobFunction>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
import { FoTranslation, FoTranslationType } from './FoTranslation';
import { MdfLocalizedValue, MdfLocalizedValueType } from './MdfLocalizedValue';
import { PickListValueV2, PickListValueV2Type } from './PickListValueV2';
import { MdfEnumValue, MdfEnumValueType } from './MdfEnumValue';
import { PicklistOption, PicklistOptionType } from './PicklistOption';
export interface FoJobFunctionType {
    createdBy?: string;
    createdDateTime?: Moment;
    createdOn?: Moment;
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
    jobFunctionType?: string;
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
    parentFunctionCode?: string;
    startDate: Moment;
    status?: string;
    type?: string;
    descriptionTranslationNav: FoTranslationType;
    descriptionTranslationTextNav: MdfLocalizedValueType[];
    jobFunctionTypeNav: PickListValueV2Type;
    nameTranslationNav: FoTranslationType;
    nameTranslationTextNav: MdfLocalizedValueType[];
    parentFunctionCodeNav: FoJobFunctionType;
    statusNav: MdfEnumValueType;
    typeNav: PicklistOptionType;
}
export interface FoJobFunctionTypeForceMandatory {
    createdBy: string;
    createdDateTime: Moment;
    createdOn: Moment;
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
    jobFunctionType: string;
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
    parentFunctionCode: string;
    startDate: Moment;
    status: string;
    type: string;
    descriptionTranslationNav: FoTranslationType;
    descriptionTranslationTextNav: MdfLocalizedValueType[];
    jobFunctionTypeNav: PickListValueV2Type;
    nameTranslationNav: FoTranslationType;
    nameTranslationTextNav: MdfLocalizedValueType[];
    parentFunctionCodeNav: FoJobFunctionType;
    statusNav: MdfEnumValueType;
    typeNav: PicklistOptionType;
}
export declare namespace FoJobFunction {
    /**
     * Static representation of the [[createdBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_BY: StringField<FoJobFunction>;
    /**
     * Static representation of the [[createdDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_DATE_TIME: DateField<FoJobFunction>;
    /**
     * Static representation of the [[createdOn]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_ON: DateField<FoJobFunction>;
    /**
     * Static representation of the [[description]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DESCRIPTION: StringField<FoJobFunction>;
    /**
     * Static representation of the [[descriptionDeDe]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DESCRIPTION_DE_DE: StringField<FoJobFunction>;
    /**
     * Static representation of the [[descriptionDefaultValue]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DESCRIPTION_DEFAULT_VALUE: StringField<FoJobFunction>;
    /**
     * Static representation of the [[descriptionEnDebug]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DESCRIPTION_EN_DEBUG: StringField<FoJobFunction>;
    /**
     * Static representation of the [[descriptionEnGb]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DESCRIPTION_EN_GB: StringField<FoJobFunction>;
    /**
     * Static representation of the [[descriptionEnUs]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DESCRIPTION_EN_US: StringField<FoJobFunction>;
    /**
     * Static representation of the [[descriptionEsEs]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DESCRIPTION_ES_ES: StringField<FoJobFunction>;
    /**
     * Static representation of the [[descriptionEsMx]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DESCRIPTION_ES_MX: StringField<FoJobFunction>;
    /**
     * Static representation of the [[descriptionFrCa]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DESCRIPTION_FR_CA: StringField<FoJobFunction>;
    /**
     * Static representation of the [[descriptionFrFr]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DESCRIPTION_FR_FR: StringField<FoJobFunction>;
    /**
     * Static representation of the [[descriptionItIt]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DESCRIPTION_IT_IT: StringField<FoJobFunction>;
    /**
     * Static representation of the [[descriptionLocalized]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DESCRIPTION_LOCALIZED: StringField<FoJobFunction>;
    /**
     * Static representation of the [[descriptionNlNl]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DESCRIPTION_NL_NL: StringField<FoJobFunction>;
    /**
     * Static representation of the [[descriptionPtBr]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DESCRIPTION_PT_BR: StringField<FoJobFunction>;
    /**
     * Static representation of the [[descriptionZhCn]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DESCRIPTION_ZH_CN: StringField<FoJobFunction>;
    /**
     * Static representation of the [[endDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const END_DATE: DateField<FoJobFunction>;
    /**
     * Static representation of the [[externalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXTERNAL_CODE: StringField<FoJobFunction>;
    /**
     * Static representation of the [[jobFunctionType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const JOB_FUNCTION_TYPE: StringField<FoJobFunction>;
    /**
     * Static representation of the [[lastModifiedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_BY: StringField<FoJobFunction>;
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_DATE_TIME: DateField<FoJobFunction>;
    /**
     * Static representation of the [[lastModifiedOn]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_ON: DateField<FoJobFunction>;
    /**
     * Static representation of the [[name]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const NAME: StringField<FoJobFunction>;
    /**
     * Static representation of the [[nameDeDe]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const NAME_DE_DE: StringField<FoJobFunction>;
    /**
     * Static representation of the [[nameDefaultValue]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const NAME_DEFAULT_VALUE: StringField<FoJobFunction>;
    /**
     * Static representation of the [[nameEnDebug]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const NAME_EN_DEBUG: StringField<FoJobFunction>;
    /**
     * Static representation of the [[nameEnGb]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const NAME_EN_GB: StringField<FoJobFunction>;
    /**
     * Static representation of the [[nameEnUs]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const NAME_EN_US: StringField<FoJobFunction>;
    /**
     * Static representation of the [[nameEsEs]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const NAME_ES_ES: StringField<FoJobFunction>;
    /**
     * Static representation of the [[nameEsMx]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const NAME_ES_MX: StringField<FoJobFunction>;
    /**
     * Static representation of the [[nameFrCa]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const NAME_FR_CA: StringField<FoJobFunction>;
    /**
     * Static representation of the [[nameFrFr]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const NAME_FR_FR: StringField<FoJobFunction>;
    /**
     * Static representation of the [[nameItIt]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const NAME_IT_IT: StringField<FoJobFunction>;
    /**
     * Static representation of the [[nameLocalized]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const NAME_LOCALIZED: StringField<FoJobFunction>;
    /**
     * Static representation of the [[nameNlNl]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const NAME_NL_NL: StringField<FoJobFunction>;
    /**
     * Static representation of the [[namePtBr]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const NAME_PT_BR: StringField<FoJobFunction>;
    /**
     * Static representation of the [[nameZhCn]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const NAME_ZH_CN: StringField<FoJobFunction>;
    /**
     * Static representation of the [[parentFunctionCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PARENT_FUNCTION_CODE: StringField<FoJobFunction>;
    /**
     * Static representation of the [[startDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const START_DATE: DateField<FoJobFunction>;
    /**
     * Static representation of the [[status]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const STATUS: StringField<FoJobFunction>;
    /**
     * Static representation of the [[type]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TYPE: StringField<FoJobFunction>;
    /**
     * Static representation of the one-to-one navigation property [[descriptionTranslationNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DESCRIPTION_TRANSLATION_NAV: OneToOneLink<FoJobFunction, FoTranslation>;
    /**
     * Static representation of the one-to-many navigation property [[descriptionTranslationTextNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DESCRIPTION_TRANSLATION_TEXT_NAV: Link<FoJobFunction, MdfLocalizedValue>;
    /**
     * Static representation of the one-to-one navigation property [[jobFunctionTypeNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const JOB_FUNCTION_TYPE_NAV: OneToOneLink<FoJobFunction, PickListValueV2>;
    /**
     * Static representation of the one-to-one navigation property [[nameTranslationNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const NAME_TRANSLATION_NAV: OneToOneLink<FoJobFunction, FoTranslation>;
    /**
     * Static representation of the one-to-many navigation property [[nameTranslationTextNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const NAME_TRANSLATION_TEXT_NAV: Link<FoJobFunction, MdfLocalizedValue>;
    /**
     * Static representation of the one-to-one navigation property [[parentFunctionCodeNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PARENT_FUNCTION_CODE_NAV: OneToOneLink<FoJobFunction, FoJobFunction>;
    /**
     * Static representation of the one-to-one navigation property [[statusNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const STATUS_NAV: OneToOneLink<FoJobFunction, MdfEnumValue>;
    /**
     * Static representation of the one-to-one navigation property [[typeNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TYPE_NAV: OneToOneLink<FoJobFunction, PicklistOption>;
    /**
     * All fields of the FoJobFunction entity.
     */
    const _allFields: Array<StringField<FoJobFunction> | DateField<FoJobFunction> | OneToOneLink<FoJobFunction, FoTranslation> | Link<FoJobFunction, MdfLocalizedValue> | OneToOneLink<FoJobFunction, PickListValueV2> | OneToOneLink<FoJobFunction, FoJobFunction> | OneToOneLink<FoJobFunction, MdfEnumValue> | OneToOneLink<FoJobFunction, PicklistOption>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<FoJobFunction>;
    /**
     * All key fields of the FoJobFunction entity.
     */
    const _keyFields: Array<Selectable<FoJobFunction>>;
    /**
     * Mapping of all key field names to the respective static field property FoJobFunction.
     */
    const _keys: {
        [keys: string]: Selectable<FoJobFunction>;
    };
}
//# sourceMappingURL=FoJobFunction.d.ts.map
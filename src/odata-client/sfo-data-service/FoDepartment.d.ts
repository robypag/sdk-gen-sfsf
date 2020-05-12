import { FoDepartmentRequestBuilder } from './FoDepartmentRequestBuilder';
import { Moment } from 'moment';
import { AllFields, CustomField, DateField, Entity, EntityBuilderType, Link, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "FODepartment" of service "SFOData".
 */
export declare class FoDepartment extends Entity implements FoDepartmentType {
    /**
     * Technical entity name for FoDepartment.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for FoDepartment.
     */
    static _serviceName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
    /**
     * Cost Center.
     * Maximum length: 128.
     * @nullable
     */
    costCenter?: string;
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
     * toDivision.
     * @nullable
     */
    custToDivisionProp?: string;
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
     * Code.
     * Maximum length: 32.
     */
    externalCode: string;
    /**
     * Head of Department.
     * Maximum length: 100.
     * @nullable
     */
    headOfUnit?: string;
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
     * Parent Department.
     * Maximum length: 128.
     * @nullable
     */
    parent?: string;
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
     * One-to-one navigation property to the [[FoCostCenter]] entity.
     */
    costCenterNav: FoCostCenter;
    /**
     * One-to-many navigation property to the [[FoDivision]] entity.
     */
    custToDivision: FoDivision[];
    /**
     * One-to-one navigation property to the [[FoTranslation]] entity.
     */
    descriptionTranslationNav: FoTranslation;
    /**
     * One-to-many navigation property to the [[MdfLocalizedValue]] entity.
     */
    descriptionTranslationTextNav: MdfLocalizedValue[];
    /**
     * One-to-one navigation property to the [[User]] entity.
     */
    headOfUnitNav: User;
    /**
     * One-to-one navigation property to the [[FoTranslation]] entity.
     */
    nameTranslationNav: FoTranslation;
    /**
     * One-to-many navigation property to the [[MdfLocalizedValue]] entity.
     */
    nameTranslationTextNav: MdfLocalizedValue[];
    /**
     * One-to-one navigation property to the [[FoDepartment]] entity.
     */
    parentNav: FoDepartment;
    /**
     * One-to-one navigation property to the [[MdfEnumValue]] entity.
     */
    statusNav: MdfEnumValue;
    /**
     * Returns an entity builder to construct instances `FoDepartment`.
     * @returns A builder that constructs instances of entity type `FoDepartment`.
     */
    static builder(): EntityBuilderType<FoDepartment, FoDepartmentTypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `FoDepartment` entity type.
     * @returns A `FoDepartment` request builder.
     */
    static requestBuilder(): FoDepartmentRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `FoDepartment`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `FoDepartment`.
     */
    static customField(fieldName: string): CustomField<FoDepartment>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
import { FoCostCenter, FoCostCenterType } from './FoCostCenter';
import { FoDivision, FoDivisionType } from './FoDivision';
import { FoTranslation, FoTranslationType } from './FoTranslation';
import { MdfLocalizedValue, MdfLocalizedValueType } from './MdfLocalizedValue';
import { User, UserType } from './User';
import { MdfEnumValue, MdfEnumValueType } from './MdfEnumValue';
export interface FoDepartmentType {
    costCenter?: string;
    createdBy?: string;
    createdDateTime?: Moment;
    createdOn?: Moment;
    custToDivisionProp?: string;
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
    headOfUnit?: string;
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
    parent?: string;
    startDate: Moment;
    status?: string;
    costCenterNav: FoCostCenterType;
    custToDivision: FoDivisionType[];
    descriptionTranslationNav: FoTranslationType;
    descriptionTranslationTextNav: MdfLocalizedValueType[];
    headOfUnitNav: UserType;
    nameTranslationNav: FoTranslationType;
    nameTranslationTextNav: MdfLocalizedValueType[];
    parentNav: FoDepartmentType;
    statusNav: MdfEnumValueType;
}
export interface FoDepartmentTypeForceMandatory {
    costCenter: string;
    createdBy: string;
    createdDateTime: Moment;
    createdOn: Moment;
    custToDivisionProp: string;
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
    headOfUnit: string;
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
    parent: string;
    startDate: Moment;
    status: string;
    costCenterNav: FoCostCenterType;
    custToDivision: FoDivisionType[];
    descriptionTranslationNav: FoTranslationType;
    descriptionTranslationTextNav: MdfLocalizedValueType[];
    headOfUnitNav: UserType;
    nameTranslationNav: FoTranslationType;
    nameTranslationTextNav: MdfLocalizedValueType[];
    parentNav: FoDepartmentType;
    statusNav: MdfEnumValueType;
}
export declare namespace FoDepartment {
    /**
     * Static representation of the [[costCenter]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const COST_CENTER: StringField<FoDepartment>;
    /**
     * Static representation of the [[createdBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_BY: StringField<FoDepartment>;
    /**
     * Static representation of the [[createdDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_DATE_TIME: DateField<FoDepartment>;
    /**
     * Static representation of the [[createdOn]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_ON: DateField<FoDepartment>;
    /**
     * Static representation of the [[custToDivisionProp]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CUST_TO_DIVISION_PROP: StringField<FoDepartment>;
    /**
     * Static representation of the [[description]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DESCRIPTION: StringField<FoDepartment>;
    /**
     * Static representation of the [[descriptionDeDe]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DESCRIPTION_DE_DE: StringField<FoDepartment>;
    /**
     * Static representation of the [[descriptionDefaultValue]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DESCRIPTION_DEFAULT_VALUE: StringField<FoDepartment>;
    /**
     * Static representation of the [[descriptionEnDebug]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DESCRIPTION_EN_DEBUG: StringField<FoDepartment>;
    /**
     * Static representation of the [[descriptionEnGb]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DESCRIPTION_EN_GB: StringField<FoDepartment>;
    /**
     * Static representation of the [[descriptionEnUs]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DESCRIPTION_EN_US: StringField<FoDepartment>;
    /**
     * Static representation of the [[descriptionEsEs]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DESCRIPTION_ES_ES: StringField<FoDepartment>;
    /**
     * Static representation of the [[descriptionEsMx]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DESCRIPTION_ES_MX: StringField<FoDepartment>;
    /**
     * Static representation of the [[descriptionFrCa]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DESCRIPTION_FR_CA: StringField<FoDepartment>;
    /**
     * Static representation of the [[descriptionFrFr]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DESCRIPTION_FR_FR: StringField<FoDepartment>;
    /**
     * Static representation of the [[descriptionItIt]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DESCRIPTION_IT_IT: StringField<FoDepartment>;
    /**
     * Static representation of the [[descriptionLocalized]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DESCRIPTION_LOCALIZED: StringField<FoDepartment>;
    /**
     * Static representation of the [[descriptionNlNl]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DESCRIPTION_NL_NL: StringField<FoDepartment>;
    /**
     * Static representation of the [[descriptionPtBr]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DESCRIPTION_PT_BR: StringField<FoDepartment>;
    /**
     * Static representation of the [[descriptionZhCn]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DESCRIPTION_ZH_CN: StringField<FoDepartment>;
    /**
     * Static representation of the [[endDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const END_DATE: DateField<FoDepartment>;
    /**
     * Static representation of the [[externalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXTERNAL_CODE: StringField<FoDepartment>;
    /**
     * Static representation of the [[headOfUnit]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const HEAD_OF_UNIT: StringField<FoDepartment>;
    /**
     * Static representation of the [[lastModifiedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_BY: StringField<FoDepartment>;
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_DATE_TIME: DateField<FoDepartment>;
    /**
     * Static representation of the [[lastModifiedOn]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_ON: DateField<FoDepartment>;
    /**
     * Static representation of the [[name]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const NAME: StringField<FoDepartment>;
    /**
     * Static representation of the [[nameDeDe]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const NAME_DE_DE: StringField<FoDepartment>;
    /**
     * Static representation of the [[nameDefaultValue]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const NAME_DEFAULT_VALUE: StringField<FoDepartment>;
    /**
     * Static representation of the [[nameEnDebug]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const NAME_EN_DEBUG: StringField<FoDepartment>;
    /**
     * Static representation of the [[nameEnGb]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const NAME_EN_GB: StringField<FoDepartment>;
    /**
     * Static representation of the [[nameEnUs]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const NAME_EN_US: StringField<FoDepartment>;
    /**
     * Static representation of the [[nameEsEs]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const NAME_ES_ES: StringField<FoDepartment>;
    /**
     * Static representation of the [[nameEsMx]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const NAME_ES_MX: StringField<FoDepartment>;
    /**
     * Static representation of the [[nameFrCa]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const NAME_FR_CA: StringField<FoDepartment>;
    /**
     * Static representation of the [[nameFrFr]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const NAME_FR_FR: StringField<FoDepartment>;
    /**
     * Static representation of the [[nameItIt]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const NAME_IT_IT: StringField<FoDepartment>;
    /**
     * Static representation of the [[nameLocalized]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const NAME_LOCALIZED: StringField<FoDepartment>;
    /**
     * Static representation of the [[nameNlNl]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const NAME_NL_NL: StringField<FoDepartment>;
    /**
     * Static representation of the [[namePtBr]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const NAME_PT_BR: StringField<FoDepartment>;
    /**
     * Static representation of the [[nameZhCn]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const NAME_ZH_CN: StringField<FoDepartment>;
    /**
     * Static representation of the [[parent]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PARENT: StringField<FoDepartment>;
    /**
     * Static representation of the [[startDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const START_DATE: DateField<FoDepartment>;
    /**
     * Static representation of the [[status]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const STATUS: StringField<FoDepartment>;
    /**
     * Static representation of the one-to-one navigation property [[costCenterNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const COST_CENTER_NAV: OneToOneLink<FoDepartment, FoCostCenter>;
    /**
     * Static representation of the one-to-many navigation property [[custToDivision]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CUST_TO_DIVISION: Link<FoDepartment, FoDivision>;
    /**
     * Static representation of the one-to-one navigation property [[descriptionTranslationNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DESCRIPTION_TRANSLATION_NAV: OneToOneLink<FoDepartment, FoTranslation>;
    /**
     * Static representation of the one-to-many navigation property [[descriptionTranslationTextNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DESCRIPTION_TRANSLATION_TEXT_NAV: Link<FoDepartment, MdfLocalizedValue>;
    /**
     * Static representation of the one-to-one navigation property [[headOfUnitNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const HEAD_OF_UNIT_NAV: OneToOneLink<FoDepartment, User>;
    /**
     * Static representation of the one-to-one navigation property [[nameTranslationNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const NAME_TRANSLATION_NAV: OneToOneLink<FoDepartment, FoTranslation>;
    /**
     * Static representation of the one-to-many navigation property [[nameTranslationTextNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const NAME_TRANSLATION_TEXT_NAV: Link<FoDepartment, MdfLocalizedValue>;
    /**
     * Static representation of the one-to-one navigation property [[parentNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PARENT_NAV: OneToOneLink<FoDepartment, FoDepartment>;
    /**
     * Static representation of the one-to-one navigation property [[statusNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const STATUS_NAV: OneToOneLink<FoDepartment, MdfEnumValue>;
    /**
     * All fields of the FoDepartment entity.
     */
    const _allFields: Array<StringField<FoDepartment> | DateField<FoDepartment> | OneToOneLink<FoDepartment, FoCostCenter> | Link<FoDepartment, FoDivision> | OneToOneLink<FoDepartment, FoTranslation> | Link<FoDepartment, MdfLocalizedValue> | OneToOneLink<FoDepartment, User> | OneToOneLink<FoDepartment, FoDepartment> | OneToOneLink<FoDepartment, MdfEnumValue>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<FoDepartment>;
    /**
     * All key fields of the FoDepartment entity.
     */
    const _keyFields: Array<Selectable<FoDepartment>>;
    /**
     * Mapping of all key field names to the respective static field property FoDepartment.
     */
    const _keys: {
        [keys: string]: Selectable<FoDepartment>;
    };
}
//# sourceMappingURL=FoDepartment.d.ts.map
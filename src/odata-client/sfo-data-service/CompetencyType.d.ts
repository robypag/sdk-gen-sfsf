import { CompetencyTypeRequestBuilder } from './CompetencyTypeRequestBuilder';
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, CustomField, DateField, Entity, EntityBuilderType, Link, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "CompetencyType" of service "SFOData".
 */
export declare class CompetencyType extends Entity implements CompetencyTypeType {
    /**
     * Technical entity name for CompetencyType.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for CompetencyType.
     */
    static _serviceName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
    /**
     * GUID.
     */
    guid: BigNumber;
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
     * Record Status.
     * Maximum length: 255.
     * @nullable
     */
    mdfSystemRecordStatus?: string;
    /**
     * Competency Type Name.
     * Maximum length: 255.
     * @nullable
     */
    nameDeDe?: string;
    /**
     * Competency Type Name.
     * Maximum length: 255.
     * @nullable
     */
    nameDefaultValue?: string;
    /**
     * Competency Type Name.
     * Maximum length: 255.
     * @nullable
     */
    nameEnDebug?: string;
    /**
     * Competency Type Name.
     * Maximum length: 255.
     * @nullable
     */
    nameEnGb?: string;
    /**
     * Competency Type Name.
     * Maximum length: 255.
     * @nullable
     */
    nameEnUs?: string;
    /**
     * Competency Type Name.
     * Maximum length: 255.
     * @nullable
     */
    nameEsEs?: string;
    /**
     * Competency Type Name.
     * Maximum length: 255.
     * @nullable
     */
    nameEsMx?: string;
    /**
     * Competency Type Name.
     * Maximum length: 255.
     * @nullable
     */
    nameFrCa?: string;
    /**
     * Competency Type Name.
     * Maximum length: 255.
     * @nullable
     */
    nameFrFr?: string;
    /**
     * Competency Type Name.
     * Maximum length: 255.
     * @nullable
     */
    nameItIt?: string;
    /**
     * Competency Type Name.
     * Maximum length: 255.
     * @nullable
     */
    nameLocalized?: string;
    /**
     * Competency Type Name.
     * Maximum length: 255.
     * @nullable
     */
    nameNlNl?: string;
    /**
     * Competency Type Name.
     * Maximum length: 255.
     * @nullable
     */
    namePtBr?: string;
    /**
     * Competency Type Name.
     * Maximum length: 255.
     * @nullable
     */
    nameZhCn?: string;
    /**
     * subModule.
     * Maximum length: 255.
     * @nullable
     */
    subModule?: string;
    /**
     * One-to-one navigation property to the [[User]] entity.
     */
    createdByNav: User;
    /**
     * One-to-one navigation property to the [[User]] entity.
     */
    lastModifiedByNav: User;
    /**
     * One-to-one navigation property to the [[MdfEnumValue]] entity.
     */
    mdfSystemRecordStatusNav: MdfEnumValue;
    /**
     * One-to-many navigation property to the [[MdfLocalizedValue]] entity.
     */
    nameTranslationTextNav: MdfLocalizedValue[];
    /**
     * One-to-many navigation property to the [[WfRequest]] entity.
     */
    wfRequestNav: WfRequest[];
    /**
     * Returns an entity builder to construct instances `CompetencyType`.
     * @returns A builder that constructs instances of entity type `CompetencyType`.
     */
    static builder(): EntityBuilderType<CompetencyType, CompetencyTypeTypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `CompetencyType` entity type.
     * @returns A `CompetencyType` request builder.
     */
    static requestBuilder(): CompetencyTypeRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `CompetencyType`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `CompetencyType`.
     */
    static customField(fieldName: string): CustomField<CompetencyType>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
import { User, UserType } from './User';
import { MdfEnumValue, MdfEnumValueType } from './MdfEnumValue';
import { MdfLocalizedValue, MdfLocalizedValueType } from './MdfLocalizedValue';
import { WfRequest, WfRequestType } from './WfRequest';
export interface CompetencyTypeType {
    guid: BigNumber;
    createdBy?: string;
    createdDateTime?: Moment;
    lastModifiedBy?: string;
    lastModifiedDateTime?: Moment;
    mdfSystemRecordStatus?: string;
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
    subModule?: string;
    createdByNav: UserType;
    lastModifiedByNav: UserType;
    mdfSystemRecordStatusNav: MdfEnumValueType;
    nameTranslationTextNav: MdfLocalizedValueType[];
    wfRequestNav: WfRequestType[];
}
export interface CompetencyTypeTypeForceMandatory {
    guid: BigNumber;
    createdBy: string;
    createdDateTime: Moment;
    lastModifiedBy: string;
    lastModifiedDateTime: Moment;
    mdfSystemRecordStatus: string;
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
    subModule: string;
    createdByNav: UserType;
    lastModifiedByNav: UserType;
    mdfSystemRecordStatusNav: MdfEnumValueType;
    nameTranslationTextNav: MdfLocalizedValueType[];
    wfRequestNav: WfRequestType[];
}
export declare namespace CompetencyType {
    /**
     * Static representation of the [[guid]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const GUID: BigNumberField<CompetencyType>;
    /**
     * Static representation of the [[createdBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_BY: StringField<CompetencyType>;
    /**
     * Static representation of the [[createdDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_DATE_TIME: DateField<CompetencyType>;
    /**
     * Static representation of the [[lastModifiedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_BY: StringField<CompetencyType>;
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_DATE_TIME: DateField<CompetencyType>;
    /**
     * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MDF_SYSTEM_RECORD_STATUS: StringField<CompetencyType>;
    /**
     * Static representation of the [[nameDeDe]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const NAME_DE_DE: StringField<CompetencyType>;
    /**
     * Static representation of the [[nameDefaultValue]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const NAME_DEFAULT_VALUE: StringField<CompetencyType>;
    /**
     * Static representation of the [[nameEnDebug]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const NAME_EN_DEBUG: StringField<CompetencyType>;
    /**
     * Static representation of the [[nameEnGb]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const NAME_EN_GB: StringField<CompetencyType>;
    /**
     * Static representation of the [[nameEnUs]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const NAME_EN_US: StringField<CompetencyType>;
    /**
     * Static representation of the [[nameEsEs]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const NAME_ES_ES: StringField<CompetencyType>;
    /**
     * Static representation of the [[nameEsMx]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const NAME_ES_MX: StringField<CompetencyType>;
    /**
     * Static representation of the [[nameFrCa]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const NAME_FR_CA: StringField<CompetencyType>;
    /**
     * Static representation of the [[nameFrFr]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const NAME_FR_FR: StringField<CompetencyType>;
    /**
     * Static representation of the [[nameItIt]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const NAME_IT_IT: StringField<CompetencyType>;
    /**
     * Static representation of the [[nameLocalized]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const NAME_LOCALIZED: StringField<CompetencyType>;
    /**
     * Static representation of the [[nameNlNl]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const NAME_NL_NL: StringField<CompetencyType>;
    /**
     * Static representation of the [[namePtBr]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const NAME_PT_BR: StringField<CompetencyType>;
    /**
     * Static representation of the [[nameZhCn]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const NAME_ZH_CN: StringField<CompetencyType>;
    /**
     * Static representation of the [[subModule]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SUB_MODULE: StringField<CompetencyType>;
    /**
     * Static representation of the one-to-one navigation property [[createdByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_BY_NAV: OneToOneLink<CompetencyType, User>;
    /**
     * Static representation of the one-to-one navigation property [[lastModifiedByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_BY_NAV: OneToOneLink<CompetencyType, User>;
    /**
     * Static representation of the one-to-one navigation property [[mdfSystemRecordStatusNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MDF_SYSTEM_RECORD_STATUS_NAV: OneToOneLink<CompetencyType, MdfEnumValue>;
    /**
     * Static representation of the one-to-many navigation property [[nameTranslationTextNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const NAME_TRANSLATION_TEXT_NAV: Link<CompetencyType, MdfLocalizedValue>;
    /**
     * Static representation of the one-to-many navigation property [[wfRequestNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const WF_REQUEST_NAV: Link<CompetencyType, WfRequest>;
    /**
     * All fields of the CompetencyType entity.
     */
    const _allFields: Array<BigNumberField<CompetencyType> | StringField<CompetencyType> | DateField<CompetencyType> | OneToOneLink<CompetencyType, User> | OneToOneLink<CompetencyType, MdfEnumValue> | Link<CompetencyType, MdfLocalizedValue> | Link<CompetencyType, WfRequest>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<CompetencyType>;
    /**
     * All key fields of the CompetencyType entity.
     */
    const _keyFields: Array<Selectable<CompetencyType>>;
    /**
     * Mapping of all key field names to the respective static field property CompetencyType.
     */
    const _keys: {
        [keys: string]: Selectable<CompetencyType>;
    };
}
//# sourceMappingURL=CompetencyType.d.ts.map
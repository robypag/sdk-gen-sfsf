import { PersonTypeRequestBuilder } from './PersonTypeRequestBuilder';
import { Moment } from 'moment';
import { AllFields, CustomField, DateField, Entity, EntityBuilderType, Link, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "PersonType" of service "SFOData".
 */
export declare class PersonType extends Entity implements PersonTypeType {
    /**
     * Technical entity name for PersonType.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for PersonType.
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
     * externalCode.
     * Maximum length: 128.
     */
    externalCode: string;
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
     * Record Status.
     * Maximum length: 255.
     * @nullable
     */
    mdfSystemRecordStatus?: string;
    /**
     * personType.
     * Maximum length: 255.
     * @nullable
     */
    personType?: string;
    /**
     * personTypeName.
     * Maximum length: 255.
     * @nullable
     */
    personTypeNameDeDe?: string;
    /**
     * personTypeName.
     * Maximum length: 255.
     * @nullable
     */
    personTypeNameDefaultValue?: string;
    /**
     * personTypeName.
     * Maximum length: 255.
     * @nullable
     */
    personTypeNameEnDebug?: string;
    /**
     * personTypeName.
     * Maximum length: 255.
     * @nullable
     */
    personTypeNameEnGb?: string;
    /**
     * personTypeName.
     * Maximum length: 255.
     * @nullable
     */
    personTypeNameEnUs?: string;
    /**
     * personTypeName.
     * Maximum length: 255.
     * @nullable
     */
    personTypeNameEsEs?: string;
    /**
     * personTypeName.
     * Maximum length: 255.
     * @nullable
     */
    personTypeNameEsMx?: string;
    /**
     * personTypeName.
     * Maximum length: 255.
     * @nullable
     */
    personTypeNameFrCa?: string;
    /**
     * personTypeName.
     * Maximum length: 255.
     * @nullable
     */
    personTypeNameFrFr?: string;
    /**
     * personTypeName.
     * Maximum length: 255.
     * @nullable
     */
    personTypeNameItIt?: string;
    /**
     * personTypeName.
     * Maximum length: 255.
     * @nullable
     */
    personTypeNameLocalized?: string;
    /**
     * personTypeName.
     * Maximum length: 255.
     * @nullable
     */
    personTypeNameNlNl?: string;
    /**
     * personTypeName.
     * Maximum length: 255.
     * @nullable
     */
    personTypeNamePtBr?: string;
    /**
     * personTypeName.
     * Maximum length: 255.
     * @nullable
     */
    personTypeNameZhCn?: string;
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
    personTypeNameTranslationTextNav: MdfLocalizedValue[];
    /**
     * One-to-one navigation property to the [[MdfEnumValue]] entity.
     */
    personTypeNav: MdfEnumValue;
    /**
     * One-to-many navigation property to the [[WfRequest]] entity.
     */
    wfRequestNav: WfRequest[];
    /**
     * Returns an entity builder to construct instances `PersonType`.
     * @returns A builder that constructs instances of entity type `PersonType`.
     */
    static builder(): EntityBuilderType<PersonType, PersonTypeTypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `PersonType` entity type.
     * @returns A `PersonType` request builder.
     */
    static requestBuilder(): PersonTypeRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `PersonType`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `PersonType`.
     */
    static customField(fieldName: string): CustomField<PersonType>;
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
export interface PersonTypeType {
    createdBy?: string;
    createdDateTime?: Moment;
    externalCode: string;
    lastModifiedBy?: string;
    lastModifiedDateTime?: Moment;
    mdfSystemRecordStatus?: string;
    personType?: string;
    personTypeNameDeDe?: string;
    personTypeNameDefaultValue?: string;
    personTypeNameEnDebug?: string;
    personTypeNameEnGb?: string;
    personTypeNameEnUs?: string;
    personTypeNameEsEs?: string;
    personTypeNameEsMx?: string;
    personTypeNameFrCa?: string;
    personTypeNameFrFr?: string;
    personTypeNameItIt?: string;
    personTypeNameLocalized?: string;
    personTypeNameNlNl?: string;
    personTypeNamePtBr?: string;
    personTypeNameZhCn?: string;
    createdByNav: UserType;
    lastModifiedByNav: UserType;
    mdfSystemRecordStatusNav: MdfEnumValueType;
    personTypeNameTranslationTextNav: MdfLocalizedValueType[];
    personTypeNav: MdfEnumValueType;
    wfRequestNav: WfRequestType[];
}
export interface PersonTypeTypeForceMandatory {
    createdBy: string;
    createdDateTime: Moment;
    externalCode: string;
    lastModifiedBy: string;
    lastModifiedDateTime: Moment;
    mdfSystemRecordStatus: string;
    personType: string;
    personTypeNameDeDe: string;
    personTypeNameDefaultValue: string;
    personTypeNameEnDebug: string;
    personTypeNameEnGb: string;
    personTypeNameEnUs: string;
    personTypeNameEsEs: string;
    personTypeNameEsMx: string;
    personTypeNameFrCa: string;
    personTypeNameFrFr: string;
    personTypeNameItIt: string;
    personTypeNameLocalized: string;
    personTypeNameNlNl: string;
    personTypeNamePtBr: string;
    personTypeNameZhCn: string;
    createdByNav: UserType;
    lastModifiedByNav: UserType;
    mdfSystemRecordStatusNav: MdfEnumValueType;
    personTypeNameTranslationTextNav: MdfLocalizedValueType[];
    personTypeNav: MdfEnumValueType;
    wfRequestNav: WfRequestType[];
}
export declare namespace PersonType {
    /**
     * Static representation of the [[createdBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_BY: StringField<PersonType>;
    /**
     * Static representation of the [[createdDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_DATE_TIME: DateField<PersonType>;
    /**
     * Static representation of the [[externalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXTERNAL_CODE: StringField<PersonType>;
    /**
     * Static representation of the [[lastModifiedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_BY: StringField<PersonType>;
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_DATE_TIME: DateField<PersonType>;
    /**
     * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MDF_SYSTEM_RECORD_STATUS: StringField<PersonType>;
    /**
     * Static representation of the [[personType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PERSON_TYPE: StringField<PersonType>;
    /**
     * Static representation of the [[personTypeNameDeDe]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PERSON_TYPE_NAME_DE_DE: StringField<PersonType>;
    /**
     * Static representation of the [[personTypeNameDefaultValue]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PERSON_TYPE_NAME_DEFAULT_VALUE: StringField<PersonType>;
    /**
     * Static representation of the [[personTypeNameEnDebug]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PERSON_TYPE_NAME_EN_DEBUG: StringField<PersonType>;
    /**
     * Static representation of the [[personTypeNameEnGb]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PERSON_TYPE_NAME_EN_GB: StringField<PersonType>;
    /**
     * Static representation of the [[personTypeNameEnUs]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PERSON_TYPE_NAME_EN_US: StringField<PersonType>;
    /**
     * Static representation of the [[personTypeNameEsEs]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PERSON_TYPE_NAME_ES_ES: StringField<PersonType>;
    /**
     * Static representation of the [[personTypeNameEsMx]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PERSON_TYPE_NAME_ES_MX: StringField<PersonType>;
    /**
     * Static representation of the [[personTypeNameFrCa]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PERSON_TYPE_NAME_FR_CA: StringField<PersonType>;
    /**
     * Static representation of the [[personTypeNameFrFr]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PERSON_TYPE_NAME_FR_FR: StringField<PersonType>;
    /**
     * Static representation of the [[personTypeNameItIt]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PERSON_TYPE_NAME_IT_IT: StringField<PersonType>;
    /**
     * Static representation of the [[personTypeNameLocalized]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PERSON_TYPE_NAME_LOCALIZED: StringField<PersonType>;
    /**
     * Static representation of the [[personTypeNameNlNl]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PERSON_TYPE_NAME_NL_NL: StringField<PersonType>;
    /**
     * Static representation of the [[personTypeNamePtBr]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PERSON_TYPE_NAME_PT_BR: StringField<PersonType>;
    /**
     * Static representation of the [[personTypeNameZhCn]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PERSON_TYPE_NAME_ZH_CN: StringField<PersonType>;
    /**
     * Static representation of the one-to-one navigation property [[createdByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_BY_NAV: OneToOneLink<PersonType, User>;
    /**
     * Static representation of the one-to-one navigation property [[lastModifiedByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_BY_NAV: OneToOneLink<PersonType, User>;
    /**
     * Static representation of the one-to-one navigation property [[mdfSystemRecordStatusNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MDF_SYSTEM_RECORD_STATUS_NAV: OneToOneLink<PersonType, MdfEnumValue>;
    /**
     * Static representation of the one-to-many navigation property [[personTypeNameTranslationTextNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PERSON_TYPE_NAME_TRANSLATION_TEXT_NAV: Link<PersonType, MdfLocalizedValue>;
    /**
     * Static representation of the one-to-one navigation property [[personTypeNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PERSON_TYPE_NAV: OneToOneLink<PersonType, MdfEnumValue>;
    /**
     * Static representation of the one-to-many navigation property [[wfRequestNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const WF_REQUEST_NAV: Link<PersonType, WfRequest>;
    /**
     * All fields of the PersonType entity.
     */
    const _allFields: Array<StringField<PersonType> | DateField<PersonType> | OneToOneLink<PersonType, User> | OneToOneLink<PersonType, MdfEnumValue> | Link<PersonType, MdfLocalizedValue> | Link<PersonType, WfRequest>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<PersonType>;
    /**
     * All key fields of the PersonType entity.
     */
    const _keyFields: Array<Selectable<PersonType>>;
    /**
     * Mapping of all key field names to the respective static field property PersonType.
     */
    const _keys: {
        [keys: string]: Selectable<PersonType>;
    };
}
//# sourceMappingURL=PersonType.d.ts.map
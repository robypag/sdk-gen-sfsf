import { FoTranslationRequestBuilder } from './FoTranslationRequestBuilder';
import { Moment } from 'moment';
import { AllFields, CustomField, DateField, Entity, EntityBuilderType, Link, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "FoTranslation" of service "SFOData".
 */
export declare class FoTranslation extends Entity implements FoTranslationType {
    /**
     * Technical entity name for FoTranslation.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for FoTranslation.
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
     * externalCode.
     * Maximum length: 128.
     */
    externalCode: string;
    /**
     * foField.
     * Maximum length: 255.
     * @nullable
     */
    foField?: string;
    /**
     * foObjectID.
     * Maximum length: 128.
     * @nullable
     */
    foObjectId?: string;
    /**
     * foType.
     * Maximum length: 255.
     * @nullable
     */
    foType?: string;
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
     * value.
     * Maximum length: 255.
     * @nullable
     */
    valueDeDe?: string;
    /**
     * value.
     * Maximum length: 255.
     * @nullable
     */
    valueDefaultValue?: string;
    /**
     * value.
     * Maximum length: 255.
     * @nullable
     */
    valueEnDebug?: string;
    /**
     * value.
     * Maximum length: 255.
     * @nullable
     */
    valueEnGb?: string;
    /**
     * value.
     * Maximum length: 255.
     * @nullable
     */
    valueEnUs?: string;
    /**
     * value.
     * Maximum length: 255.
     * @nullable
     */
    valueEsEs?: string;
    /**
     * value.
     * Maximum length: 255.
     * @nullable
     */
    valueEsMx?: string;
    /**
     * value.
     * Maximum length: 255.
     * @nullable
     */
    valueFrCa?: string;
    /**
     * value.
     * Maximum length: 255.
     * @nullable
     */
    valueFrFr?: string;
    /**
     * value.
     * Maximum length: 255.
     * @nullable
     */
    valueItIt?: string;
    /**
     * value.
     * Maximum length: 255.
     * @nullable
     */
    valueLocalized?: string;
    /**
     * value.
     * Maximum length: 255.
     * @nullable
     */
    valueNlNl?: string;
    /**
     * value.
     * Maximum length: 255.
     * @nullable
     */
    valuePtBr?: string;
    /**
     * value.
     * Maximum length: 255.
     * @nullable
     */
    valueZhCn?: string;
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
    valueTranslationTextNav: MdfLocalizedValue[];
    /**
     * One-to-many navigation property to the [[WfRequest]] entity.
     */
    wfRequestNav: WfRequest[];
    /**
     * Returns an entity builder to construct instances `FoTranslation`.
     * @returns A builder that constructs instances of entity type `FoTranslation`.
     */
    static builder(): EntityBuilderType<FoTranslation, FoTranslationTypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `FoTranslation` entity type.
     * @returns A `FoTranslation` request builder.
     */
    static requestBuilder(): FoTranslationRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `FoTranslation`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `FoTranslation`.
     */
    static customField(fieldName: string): CustomField<FoTranslation>;
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
export interface FoTranslationType {
    createdBy?: string;
    createdDateTime?: Moment;
    externalCode: string;
    foField?: string;
    foObjectId?: string;
    foType?: string;
    lastModifiedBy?: string;
    lastModifiedDateTime?: Moment;
    mdfSystemRecordStatus?: string;
    valueDeDe?: string;
    valueDefaultValue?: string;
    valueEnDebug?: string;
    valueEnGb?: string;
    valueEnUs?: string;
    valueEsEs?: string;
    valueEsMx?: string;
    valueFrCa?: string;
    valueFrFr?: string;
    valueItIt?: string;
    valueLocalized?: string;
    valueNlNl?: string;
    valuePtBr?: string;
    valueZhCn?: string;
    createdByNav: UserType;
    lastModifiedByNav: UserType;
    mdfSystemRecordStatusNav: MdfEnumValueType;
    valueTranslationTextNav: MdfLocalizedValueType[];
    wfRequestNav: WfRequestType[];
}
export interface FoTranslationTypeForceMandatory {
    createdBy: string;
    createdDateTime: Moment;
    externalCode: string;
    foField: string;
    foObjectId: string;
    foType: string;
    lastModifiedBy: string;
    lastModifiedDateTime: Moment;
    mdfSystemRecordStatus: string;
    valueDeDe: string;
    valueDefaultValue: string;
    valueEnDebug: string;
    valueEnGb: string;
    valueEnUs: string;
    valueEsEs: string;
    valueEsMx: string;
    valueFrCa: string;
    valueFrFr: string;
    valueItIt: string;
    valueLocalized: string;
    valueNlNl: string;
    valuePtBr: string;
    valueZhCn: string;
    createdByNav: UserType;
    lastModifiedByNav: UserType;
    mdfSystemRecordStatusNav: MdfEnumValueType;
    valueTranslationTextNav: MdfLocalizedValueType[];
    wfRequestNav: WfRequestType[];
}
export declare namespace FoTranslation {
    /**
     * Static representation of the [[createdBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_BY: StringField<FoTranslation>;
    /**
     * Static representation of the [[createdDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_DATE_TIME: DateField<FoTranslation>;
    /**
     * Static representation of the [[externalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXTERNAL_CODE: StringField<FoTranslation>;
    /**
     * Static representation of the [[foField]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const FO_FIELD: StringField<FoTranslation>;
    /**
     * Static representation of the [[foObjectId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const FO_OBJECT_ID: StringField<FoTranslation>;
    /**
     * Static representation of the [[foType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const FO_TYPE: StringField<FoTranslation>;
    /**
     * Static representation of the [[lastModifiedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_BY: StringField<FoTranslation>;
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_DATE_TIME: DateField<FoTranslation>;
    /**
     * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MDF_SYSTEM_RECORD_STATUS: StringField<FoTranslation>;
    /**
     * Static representation of the [[valueDeDe]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const VALUE_DE_DE: StringField<FoTranslation>;
    /**
     * Static representation of the [[valueDefaultValue]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const VALUE_DEFAULT_VALUE: StringField<FoTranslation>;
    /**
     * Static representation of the [[valueEnDebug]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const VALUE_EN_DEBUG: StringField<FoTranslation>;
    /**
     * Static representation of the [[valueEnGb]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const VALUE_EN_GB: StringField<FoTranslation>;
    /**
     * Static representation of the [[valueEnUs]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const VALUE_EN_US: StringField<FoTranslation>;
    /**
     * Static representation of the [[valueEsEs]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const VALUE_ES_ES: StringField<FoTranslation>;
    /**
     * Static representation of the [[valueEsMx]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const VALUE_ES_MX: StringField<FoTranslation>;
    /**
     * Static representation of the [[valueFrCa]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const VALUE_FR_CA: StringField<FoTranslation>;
    /**
     * Static representation of the [[valueFrFr]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const VALUE_FR_FR: StringField<FoTranslation>;
    /**
     * Static representation of the [[valueItIt]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const VALUE_IT_IT: StringField<FoTranslation>;
    /**
     * Static representation of the [[valueLocalized]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const VALUE_LOCALIZED: StringField<FoTranslation>;
    /**
     * Static representation of the [[valueNlNl]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const VALUE_NL_NL: StringField<FoTranslation>;
    /**
     * Static representation of the [[valuePtBr]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const VALUE_PT_BR: StringField<FoTranslation>;
    /**
     * Static representation of the [[valueZhCn]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const VALUE_ZH_CN: StringField<FoTranslation>;
    /**
     * Static representation of the one-to-one navigation property [[createdByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_BY_NAV: OneToOneLink<FoTranslation, User>;
    /**
     * Static representation of the one-to-one navigation property [[lastModifiedByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_BY_NAV: OneToOneLink<FoTranslation, User>;
    /**
     * Static representation of the one-to-one navigation property [[mdfSystemRecordStatusNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MDF_SYSTEM_RECORD_STATUS_NAV: OneToOneLink<FoTranslation, MdfEnumValue>;
    /**
     * Static representation of the one-to-many navigation property [[valueTranslationTextNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const VALUE_TRANSLATION_TEXT_NAV: Link<FoTranslation, MdfLocalizedValue>;
    /**
     * Static representation of the one-to-many navigation property [[wfRequestNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const WF_REQUEST_NAV: Link<FoTranslation, WfRequest>;
    /**
     * All fields of the FoTranslation entity.
     */
    const _allFields: Array<StringField<FoTranslation> | DateField<FoTranslation> | OneToOneLink<FoTranslation, User> | OneToOneLink<FoTranslation, MdfEnumValue> | Link<FoTranslation, MdfLocalizedValue> | Link<FoTranslation, WfRequest>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<FoTranslation>;
    /**
     * All key fields of the FoTranslation entity.
     */
    const _keyFields: Array<Selectable<FoTranslation>>;
    /**
     * Mapping of all key field names to the respective static field property FoTranslation.
     */
    const _keys: {
        [keys: string]: Selectable<FoTranslation>;
    };
}
//# sourceMappingURL=FoTranslation.d.ts.map
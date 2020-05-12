import { PayScaleAreaRequestBuilder } from './PayScaleAreaRequestBuilder';
import { Moment } from 'moment';
import { AllFields, CustomField, DateField, Entity, EntityBuilderType, Link, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "PayScaleArea" of service "SFOData".
 */
export declare class PayScaleArea extends Entity implements PayScaleAreaType {
    /**
     * Technical entity name for PayScaleArea.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for PayScaleArea.
     */
    static _serviceName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
    /**
     * Code.
     * Maximum length: 128.
     */
    code: string;
    /**
     * Country/Region.
     * Maximum length: 128.
     * @nullable
     */
    country?: string;
    /**
     * Created By.
     * Maximum length: 100.
     * @nullable
     */
    createdBy?: string;
    /**
     * Created On.
     * @nullable
     */
    createdDateTime?: Moment;
    /**
     * External Name.
     * Maximum length: 128.
     * @nullable
     */
    externalNameDeDe?: string;
    /**
     * External Name.
     * Maximum length: 128.
     * @nullable
     */
    externalNameDefaultValue?: string;
    /**
     * External Name.
     * Maximum length: 128.
     * @nullable
     */
    externalNameEnDebug?: string;
    /**
     * External Name.
     * Maximum length: 128.
     * @nullable
     */
    externalNameEnGb?: string;
    /**
     * External Name.
     * Maximum length: 128.
     * @nullable
     */
    externalNameEnUs?: string;
    /**
     * External Name.
     * Maximum length: 128.
     * @nullable
     */
    externalNameEsEs?: string;
    /**
     * External Name.
     * Maximum length: 128.
     * @nullable
     */
    externalNameEsMx?: string;
    /**
     * External Name.
     * Maximum length: 128.
     * @nullable
     */
    externalNameFrCa?: string;
    /**
     * External Name.
     * Maximum length: 128.
     * @nullable
     */
    externalNameFrFr?: string;
    /**
     * External Name.
     * Maximum length: 128.
     * @nullable
     */
    externalNameItIt?: string;
    /**
     * External Name.
     * Maximum length: 128.
     * @nullable
     */
    externalNameLocalized?: string;
    /**
     * External Name.
     * Maximum length: 128.
     * @nullable
     */
    externalNameNlNl?: string;
    /**
     * External Name.
     * Maximum length: 128.
     * @nullable
     */
    externalNamePtBr?: string;
    /**
     * External Name.
     * Maximum length: 128.
     * @nullable
     */
    externalNameZhCn?: string;
    /**
     * Last Modified By.
     * Maximum length: 100.
     * @nullable
     */
    lastModifiedBy?: string;
    /**
     * Last Modified Date.
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
     * Pay Scale Area.
     * Maximum length: 128.
     * @nullable
     */
    payScaleArea?: string;
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
     * One-to-many navigation property to the [[WfRequest]] entity.
     */
    wfRequestNav: WfRequest[];
    /**
     * Returns an entity builder to construct instances `PayScaleArea`.
     * @returns A builder that constructs instances of entity type `PayScaleArea`.
     */
    static builder(): EntityBuilderType<PayScaleArea, PayScaleAreaTypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `PayScaleArea` entity type.
     * @returns A `PayScaleArea` request builder.
     */
    static requestBuilder(): PayScaleAreaRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `PayScaleArea`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `PayScaleArea`.
     */
    static customField(fieldName: string): CustomField<PayScaleArea>;
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
import { WfRequest, WfRequestType } from './WfRequest';
export interface PayScaleAreaType {
    code: string;
    country?: string;
    createdBy?: string;
    createdDateTime?: Moment;
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
    lastModifiedBy?: string;
    lastModifiedDateTime?: Moment;
    mdfSystemRecordStatus?: string;
    payScaleArea?: string;
    countryNav: CountryType[];
    createdByNav: UserType;
    externalNameTranslationTextNav: MdfLocalizedValueType[];
    lastModifiedByNav: UserType;
    mdfSystemRecordStatusNav: MdfEnumValueType;
    wfRequestNav: WfRequestType[];
}
export interface PayScaleAreaTypeForceMandatory {
    code: string;
    country: string;
    createdBy: string;
    createdDateTime: Moment;
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
    lastModifiedBy: string;
    lastModifiedDateTime: Moment;
    mdfSystemRecordStatus: string;
    payScaleArea: string;
    countryNav: CountryType[];
    createdByNav: UserType;
    externalNameTranslationTextNav: MdfLocalizedValueType[];
    lastModifiedByNav: UserType;
    mdfSystemRecordStatusNav: MdfEnumValueType;
    wfRequestNav: WfRequestType[];
}
export declare namespace PayScaleArea {
    /**
     * Static representation of the [[code]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CODE: StringField<PayScaleArea>;
    /**
     * Static representation of the [[country]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const COUNTRY: StringField<PayScaleArea>;
    /**
     * Static representation of the [[createdBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_BY: StringField<PayScaleArea>;
    /**
     * Static representation of the [[createdDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_DATE_TIME: DateField<PayScaleArea>;
    /**
     * Static representation of the [[externalNameDeDe]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXTERNAL_NAME_DE_DE: StringField<PayScaleArea>;
    /**
     * Static representation of the [[externalNameDefaultValue]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXTERNAL_NAME_DEFAULT_VALUE: StringField<PayScaleArea>;
    /**
     * Static representation of the [[externalNameEnDebug]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXTERNAL_NAME_EN_DEBUG: StringField<PayScaleArea>;
    /**
     * Static representation of the [[externalNameEnGb]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXTERNAL_NAME_EN_GB: StringField<PayScaleArea>;
    /**
     * Static representation of the [[externalNameEnUs]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXTERNAL_NAME_EN_US: StringField<PayScaleArea>;
    /**
     * Static representation of the [[externalNameEsEs]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXTERNAL_NAME_ES_ES: StringField<PayScaleArea>;
    /**
     * Static representation of the [[externalNameEsMx]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXTERNAL_NAME_ES_MX: StringField<PayScaleArea>;
    /**
     * Static representation of the [[externalNameFrCa]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXTERNAL_NAME_FR_CA: StringField<PayScaleArea>;
    /**
     * Static representation of the [[externalNameFrFr]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXTERNAL_NAME_FR_FR: StringField<PayScaleArea>;
    /**
     * Static representation of the [[externalNameItIt]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXTERNAL_NAME_IT_IT: StringField<PayScaleArea>;
    /**
     * Static representation of the [[externalNameLocalized]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXTERNAL_NAME_LOCALIZED: StringField<PayScaleArea>;
    /**
     * Static representation of the [[externalNameNlNl]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXTERNAL_NAME_NL_NL: StringField<PayScaleArea>;
    /**
     * Static representation of the [[externalNamePtBr]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXTERNAL_NAME_PT_BR: StringField<PayScaleArea>;
    /**
     * Static representation of the [[externalNameZhCn]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXTERNAL_NAME_ZH_CN: StringField<PayScaleArea>;
    /**
     * Static representation of the [[lastModifiedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_BY: StringField<PayScaleArea>;
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_DATE_TIME: DateField<PayScaleArea>;
    /**
     * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MDF_SYSTEM_RECORD_STATUS: StringField<PayScaleArea>;
    /**
     * Static representation of the [[payScaleArea]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PAY_SCALE_AREA: StringField<PayScaleArea>;
    /**
     * Static representation of the one-to-many navigation property [[countryNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const COUNTRY_NAV: Link<PayScaleArea, Country>;
    /**
     * Static representation of the one-to-one navigation property [[createdByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_BY_NAV: OneToOneLink<PayScaleArea, User>;
    /**
     * Static representation of the one-to-many navigation property [[externalNameTranslationTextNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXTERNAL_NAME_TRANSLATION_TEXT_NAV: Link<PayScaleArea, MdfLocalizedValue>;
    /**
     * Static representation of the one-to-one navigation property [[lastModifiedByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_BY_NAV: OneToOneLink<PayScaleArea, User>;
    /**
     * Static representation of the one-to-one navigation property [[mdfSystemRecordStatusNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MDF_SYSTEM_RECORD_STATUS_NAV: OneToOneLink<PayScaleArea, MdfEnumValue>;
    /**
     * Static representation of the one-to-many navigation property [[wfRequestNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const WF_REQUEST_NAV: Link<PayScaleArea, WfRequest>;
    /**
     * All fields of the PayScaleArea entity.
     */
    const _allFields: Array<StringField<PayScaleArea> | DateField<PayScaleArea> | Link<PayScaleArea, Country> | OneToOneLink<PayScaleArea, User> | Link<PayScaleArea, MdfLocalizedValue> | OneToOneLink<PayScaleArea, MdfEnumValue> | Link<PayScaleArea, WfRequest>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<PayScaleArea>;
    /**
     * All key fields of the PayScaleArea entity.
     */
    const _keyFields: Array<Selectable<PayScaleArea>>;
    /**
     * Mapping of all key field names to the respective static field property PayScaleArea.
     */
    const _keys: {
        [keys: string]: Selectable<PayScaleArea>;
    };
}
//# sourceMappingURL=PayScaleArea.d.ts.map
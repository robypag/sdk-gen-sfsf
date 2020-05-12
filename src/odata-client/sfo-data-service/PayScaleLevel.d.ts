import { PayScaleLevelRequestBuilder } from './PayScaleLevelRequestBuilder';
import { Moment } from 'moment';
import { AllFields, CustomField, DateField, Entity, EntityBuilderType, Link, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "PayScaleLevel" of service "SFOData".
 */
export declare class PayScaleLevel extends Entity implements PayScaleLevelType {
    /**
     * Technical entity name for PayScaleLevel.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for PayScaleLevel.
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
     * effectiveEndDate.
     * @nullable
     */
    effectiveEndDate?: Moment;
    /**
     * Effective Start Date.
     */
    effectiveStartDate: Moment;
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
     * Next Pay Scale Level.
     * Maximum length: 128.
     * @nullable
     */
    nextPayScaleLevel?: string;
    /**
     * Pay Scale Level.
     * Maximum length: 128.
     * @nullable
     */
    payScaleLevel?: string;
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
     * One-to-one navigation property to the [[PayScaleLevel]] entity.
     */
    nextPayScaleLevelNav: PayScaleLevel;
    /**
     * One-to-one navigation property to the [[PayScaleGroup]] entity.
     */
    payScaleGroup: PayScaleGroup;
    /**
     * One-to-many navigation property to the [[PayScalePayComponent]] entity.
     */
    toPayScalePayComponents: PayScalePayComponent[];
    /**
     * One-to-many navigation property to the [[WfRequest]] entity.
     */
    wfRequestNav: WfRequest[];
    /**
     * Returns an entity builder to construct instances `PayScaleLevel`.
     * @returns A builder that constructs instances of entity type `PayScaleLevel`.
     */
    static builder(): EntityBuilderType<PayScaleLevel, PayScaleLevelTypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `PayScaleLevel` entity type.
     * @returns A `PayScaleLevel` request builder.
     */
    static requestBuilder(): PayScaleLevelRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `PayScaleLevel`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `PayScaleLevel`.
     */
    static customField(fieldName: string): CustomField<PayScaleLevel>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
import { User, UserType } from './User';
import { MdfLocalizedValue, MdfLocalizedValueType } from './MdfLocalizedValue';
import { MdfEnumValue, MdfEnumValueType } from './MdfEnumValue';
import { PayScaleGroup, PayScaleGroupType } from './PayScaleGroup';
import { PayScalePayComponent, PayScalePayComponentType } from './PayScalePayComponent';
import { WfRequest, WfRequestType } from './WfRequest';
export interface PayScaleLevelType {
    code: string;
    createdBy?: string;
    createdDateTime?: Moment;
    effectiveEndDate?: Moment;
    effectiveStartDate: Moment;
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
    nextPayScaleLevel?: string;
    payScaleLevel?: string;
    createdByNav: UserType;
    externalNameTranslationTextNav: MdfLocalizedValueType[];
    lastModifiedByNav: UserType;
    mdfSystemRecordStatusNav: MdfEnumValueType;
    nextPayScaleLevelNav: PayScaleLevelType;
    payScaleGroup: PayScaleGroupType;
    toPayScalePayComponents: PayScalePayComponentType[];
    wfRequestNav: WfRequestType[];
}
export interface PayScaleLevelTypeForceMandatory {
    code: string;
    createdBy: string;
    createdDateTime: Moment;
    effectiveEndDate: Moment;
    effectiveStartDate: Moment;
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
    nextPayScaleLevel: string;
    payScaleLevel: string;
    createdByNav: UserType;
    externalNameTranslationTextNav: MdfLocalizedValueType[];
    lastModifiedByNav: UserType;
    mdfSystemRecordStatusNav: MdfEnumValueType;
    nextPayScaleLevelNav: PayScaleLevelType;
    payScaleGroup: PayScaleGroupType;
    toPayScalePayComponents: PayScalePayComponentType[];
    wfRequestNav: WfRequestType[];
}
export declare namespace PayScaleLevel {
    /**
     * Static representation of the [[code]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CODE: StringField<PayScaleLevel>;
    /**
     * Static representation of the [[createdBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_BY: StringField<PayScaleLevel>;
    /**
     * Static representation of the [[createdDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_DATE_TIME: DateField<PayScaleLevel>;
    /**
     * Static representation of the [[effectiveEndDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EFFECTIVE_END_DATE: DateField<PayScaleLevel>;
    /**
     * Static representation of the [[effectiveStartDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EFFECTIVE_START_DATE: DateField<PayScaleLevel>;
    /**
     * Static representation of the [[externalNameDeDe]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXTERNAL_NAME_DE_DE: StringField<PayScaleLevel>;
    /**
     * Static representation of the [[externalNameDefaultValue]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXTERNAL_NAME_DEFAULT_VALUE: StringField<PayScaleLevel>;
    /**
     * Static representation of the [[externalNameEnDebug]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXTERNAL_NAME_EN_DEBUG: StringField<PayScaleLevel>;
    /**
     * Static representation of the [[externalNameEnGb]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXTERNAL_NAME_EN_GB: StringField<PayScaleLevel>;
    /**
     * Static representation of the [[externalNameEnUs]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXTERNAL_NAME_EN_US: StringField<PayScaleLevel>;
    /**
     * Static representation of the [[externalNameEsEs]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXTERNAL_NAME_ES_ES: StringField<PayScaleLevel>;
    /**
     * Static representation of the [[externalNameEsMx]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXTERNAL_NAME_ES_MX: StringField<PayScaleLevel>;
    /**
     * Static representation of the [[externalNameFrCa]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXTERNAL_NAME_FR_CA: StringField<PayScaleLevel>;
    /**
     * Static representation of the [[externalNameFrFr]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXTERNAL_NAME_FR_FR: StringField<PayScaleLevel>;
    /**
     * Static representation of the [[externalNameItIt]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXTERNAL_NAME_IT_IT: StringField<PayScaleLevel>;
    /**
     * Static representation of the [[externalNameLocalized]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXTERNAL_NAME_LOCALIZED: StringField<PayScaleLevel>;
    /**
     * Static representation of the [[externalNameNlNl]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXTERNAL_NAME_NL_NL: StringField<PayScaleLevel>;
    /**
     * Static representation of the [[externalNamePtBr]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXTERNAL_NAME_PT_BR: StringField<PayScaleLevel>;
    /**
     * Static representation of the [[externalNameZhCn]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXTERNAL_NAME_ZH_CN: StringField<PayScaleLevel>;
    /**
     * Static representation of the [[lastModifiedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_BY: StringField<PayScaleLevel>;
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_DATE_TIME: DateField<PayScaleLevel>;
    /**
     * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MDF_SYSTEM_RECORD_STATUS: StringField<PayScaleLevel>;
    /**
     * Static representation of the [[nextPayScaleLevel]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const NEXT_PAY_SCALE_LEVEL: StringField<PayScaleLevel>;
    /**
     * Static representation of the [[payScaleLevel]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PAY_SCALE_LEVEL: StringField<PayScaleLevel>;
    /**
     * Static representation of the one-to-one navigation property [[createdByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_BY_NAV: OneToOneLink<PayScaleLevel, User>;
    /**
     * Static representation of the one-to-many navigation property [[externalNameTranslationTextNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXTERNAL_NAME_TRANSLATION_TEXT_NAV: Link<PayScaleLevel, MdfLocalizedValue>;
    /**
     * Static representation of the one-to-one navigation property [[lastModifiedByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_BY_NAV: OneToOneLink<PayScaleLevel, User>;
    /**
     * Static representation of the one-to-one navigation property [[mdfSystemRecordStatusNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MDF_SYSTEM_RECORD_STATUS_NAV: OneToOneLink<PayScaleLevel, MdfEnumValue>;
    /**
     * Static representation of the one-to-one navigation property [[nextPayScaleLevelNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const NEXT_PAY_SCALE_LEVEL_NAV: OneToOneLink<PayScaleLevel, PayScaleLevel>;
    /**
     * Static representation of the one-to-one navigation property [[payScaleGroup]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PAY_SCALE_GROUP: OneToOneLink<PayScaleLevel, PayScaleGroup>;
    /**
     * Static representation of the one-to-many navigation property [[toPayScalePayComponents]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TO_PAY_SCALE_PAY_COMPONENTS: Link<PayScaleLevel, PayScalePayComponent>;
    /**
     * Static representation of the one-to-many navigation property [[wfRequestNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const WF_REQUEST_NAV: Link<PayScaleLevel, WfRequest>;
    /**
     * All fields of the PayScaleLevel entity.
     */
    const _allFields: Array<StringField<PayScaleLevel> | DateField<PayScaleLevel> | OneToOneLink<PayScaleLevel, User> | Link<PayScaleLevel, MdfLocalizedValue> | OneToOneLink<PayScaleLevel, MdfEnumValue> | OneToOneLink<PayScaleLevel, PayScaleLevel> | OneToOneLink<PayScaleLevel, PayScaleGroup> | Link<PayScaleLevel, PayScalePayComponent> | Link<PayScaleLevel, WfRequest>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<PayScaleLevel>;
    /**
     * All key fields of the PayScaleLevel entity.
     */
    const _keyFields: Array<Selectable<PayScaleLevel>>;
    /**
     * Mapping of all key field names to the respective static field property PayScaleLevel.
     */
    const _keys: {
        [keys: string]: Selectable<PayScaleLevel>;
    };
}
//# sourceMappingURL=PayScaleLevel.d.ts.map
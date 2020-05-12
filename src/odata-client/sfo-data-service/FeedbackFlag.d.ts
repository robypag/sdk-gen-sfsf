import { FeedbackFlagRequestBuilder } from './FeedbackFlagRequestBuilder';
import { Moment } from 'moment';
import { AllFields, CustomField, DateField, Entity, EntityBuilderType, Link, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "FeedbackFlag" of service "SFOData".
 */
export declare class FeedbackFlag extends Entity implements FeedbackFlagType {
    /**
     * Technical entity name for FeedbackFlag.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for FeedbackFlag.
     */
    static _serviceName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
    /**
     * Color.
     * Maximum length: 255.
     * @nullable
     */
    color?: string;
    /**
     * Created By.
     * Maximum length: 255.
     * @nullable
     */
    createdBy?: string;
    /**
     * Created Date.
     * @nullable
     */
    createdDateTime?: Moment;
    /**
     * Feedback Flag ID.
     * Maximum length: 128.
     */
    feedbackFlagId: string;
    /**
     * Flag Name.
     * Maximum length: 4000.
     * @nullable
     */
    flagNameDeDe?: string;
    /**
     * Flag Name.
     * Maximum length: 4000.
     * @nullable
     */
    flagNameDefaultValue?: string;
    /**
     * Flag Name.
     * Maximum length: 4000.
     * @nullable
     */
    flagNameEnDebug?: string;
    /**
     * Flag Name.
     * Maximum length: 4000.
     * @nullable
     */
    flagNameEnGb?: string;
    /**
     * Flag Name.
     * Maximum length: 4000.
     * @nullable
     */
    flagNameEnUs?: string;
    /**
     * Flag Name.
     * Maximum length: 4000.
     * @nullable
     */
    flagNameEsEs?: string;
    /**
     * Flag Name.
     * Maximum length: 4000.
     * @nullable
     */
    flagNameEsMx?: string;
    /**
     * Flag Name.
     * Maximum length: 4000.
     * @nullable
     */
    flagNameFrCa?: string;
    /**
     * Flag Name.
     * Maximum length: 4000.
     * @nullable
     */
    flagNameFrFr?: string;
    /**
     * Flag Name.
     * Maximum length: 4000.
     * @nullable
     */
    flagNameItIt?: string;
    /**
     * Flag Name.
     * Maximum length: 4000.
     * @nullable
     */
    flagNameLocalized?: string;
    /**
     * Flag Name.
     * Maximum length: 4000.
     * @nullable
     */
    flagNameNlNl?: string;
    /**
     * Flag Name.
     * Maximum length: 4000.
     * @nullable
     */
    flagNamePtBr?: string;
    /**
     * Flag Name.
     * Maximum length: 4000.
     * @nullable
     */
    flagNameZhCn?: string;
    /**
     * Icon.
     * Maximum length: 255.
     * @nullable
     */
    icon?: string;
    /**
     * Last Modified By.
     * Maximum length: 255.
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
     * Maximum length: 128.
     * @nullable
     */
    mdfSystemRecordStatus?: string;
    /**
     * mdfSystemRecordId.
     * Maximum length: 255.
     * @nullable
     */
    recordId?: string;
    /**
     * One-to-one navigation property to the [[User]] entity.
     */
    createdByNav: User;
    /**
     * One-to-many navigation property to the [[MdfLocalizedValue]] entity.
     */
    flagNameTranslationTextNav: MdfLocalizedValue[];
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
     * Returns an entity builder to construct instances `FeedbackFlag`.
     * @returns A builder that constructs instances of entity type `FeedbackFlag`.
     */
    static builder(): EntityBuilderType<FeedbackFlag, FeedbackFlagTypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `FeedbackFlag` entity type.
     * @returns A `FeedbackFlag` request builder.
     */
    static requestBuilder(): FeedbackFlagRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `FeedbackFlag`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `FeedbackFlag`.
     */
    static customField(fieldName: string): CustomField<FeedbackFlag>;
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
import { WfRequest, WfRequestType } from './WfRequest';
export interface FeedbackFlagType {
    color?: string;
    createdBy?: string;
    createdDateTime?: Moment;
    feedbackFlagId: string;
    flagNameDeDe?: string;
    flagNameDefaultValue?: string;
    flagNameEnDebug?: string;
    flagNameEnGb?: string;
    flagNameEnUs?: string;
    flagNameEsEs?: string;
    flagNameEsMx?: string;
    flagNameFrCa?: string;
    flagNameFrFr?: string;
    flagNameItIt?: string;
    flagNameLocalized?: string;
    flagNameNlNl?: string;
    flagNamePtBr?: string;
    flagNameZhCn?: string;
    icon?: string;
    lastModifiedBy?: string;
    lastModifiedDateTime?: Moment;
    mdfSystemRecordStatus?: string;
    recordId?: string;
    createdByNav: UserType;
    flagNameTranslationTextNav: MdfLocalizedValueType[];
    lastModifiedByNav: UserType;
    mdfSystemRecordStatusNav: MdfEnumValueType;
    wfRequestNav: WfRequestType[];
}
export interface FeedbackFlagTypeForceMandatory {
    color: string;
    createdBy: string;
    createdDateTime: Moment;
    feedbackFlagId: string;
    flagNameDeDe: string;
    flagNameDefaultValue: string;
    flagNameEnDebug: string;
    flagNameEnGb: string;
    flagNameEnUs: string;
    flagNameEsEs: string;
    flagNameEsMx: string;
    flagNameFrCa: string;
    flagNameFrFr: string;
    flagNameItIt: string;
    flagNameLocalized: string;
    flagNameNlNl: string;
    flagNamePtBr: string;
    flagNameZhCn: string;
    icon: string;
    lastModifiedBy: string;
    lastModifiedDateTime: Moment;
    mdfSystemRecordStatus: string;
    recordId: string;
    createdByNav: UserType;
    flagNameTranslationTextNav: MdfLocalizedValueType[];
    lastModifiedByNav: UserType;
    mdfSystemRecordStatusNav: MdfEnumValueType;
    wfRequestNav: WfRequestType[];
}
export declare namespace FeedbackFlag {
    /**
     * Static representation of the [[color]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const COLOR: StringField<FeedbackFlag>;
    /**
     * Static representation of the [[createdBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_BY: StringField<FeedbackFlag>;
    /**
     * Static representation of the [[createdDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_DATE_TIME: DateField<FeedbackFlag>;
    /**
     * Static representation of the [[feedbackFlagId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const FEEDBACK_FLAG_ID: StringField<FeedbackFlag>;
    /**
     * Static representation of the [[flagNameDeDe]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const FLAG_NAME_DE_DE: StringField<FeedbackFlag>;
    /**
     * Static representation of the [[flagNameDefaultValue]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const FLAG_NAME_DEFAULT_VALUE: StringField<FeedbackFlag>;
    /**
     * Static representation of the [[flagNameEnDebug]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const FLAG_NAME_EN_DEBUG: StringField<FeedbackFlag>;
    /**
     * Static representation of the [[flagNameEnGb]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const FLAG_NAME_EN_GB: StringField<FeedbackFlag>;
    /**
     * Static representation of the [[flagNameEnUs]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const FLAG_NAME_EN_US: StringField<FeedbackFlag>;
    /**
     * Static representation of the [[flagNameEsEs]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const FLAG_NAME_ES_ES: StringField<FeedbackFlag>;
    /**
     * Static representation of the [[flagNameEsMx]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const FLAG_NAME_ES_MX: StringField<FeedbackFlag>;
    /**
     * Static representation of the [[flagNameFrCa]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const FLAG_NAME_FR_CA: StringField<FeedbackFlag>;
    /**
     * Static representation of the [[flagNameFrFr]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const FLAG_NAME_FR_FR: StringField<FeedbackFlag>;
    /**
     * Static representation of the [[flagNameItIt]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const FLAG_NAME_IT_IT: StringField<FeedbackFlag>;
    /**
     * Static representation of the [[flagNameLocalized]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const FLAG_NAME_LOCALIZED: StringField<FeedbackFlag>;
    /**
     * Static representation of the [[flagNameNlNl]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const FLAG_NAME_NL_NL: StringField<FeedbackFlag>;
    /**
     * Static representation of the [[flagNamePtBr]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const FLAG_NAME_PT_BR: StringField<FeedbackFlag>;
    /**
     * Static representation of the [[flagNameZhCn]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const FLAG_NAME_ZH_CN: StringField<FeedbackFlag>;
    /**
     * Static representation of the [[icon]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ICON: StringField<FeedbackFlag>;
    /**
     * Static representation of the [[lastModifiedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_BY: StringField<FeedbackFlag>;
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_DATE_TIME: DateField<FeedbackFlag>;
    /**
     * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MDF_SYSTEM_RECORD_STATUS: StringField<FeedbackFlag>;
    /**
     * Static representation of the [[recordId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const RECORD_ID: StringField<FeedbackFlag>;
    /**
     * Static representation of the one-to-one navigation property [[createdByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_BY_NAV: OneToOneLink<FeedbackFlag, User>;
    /**
     * Static representation of the one-to-many navigation property [[flagNameTranslationTextNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const FLAG_NAME_TRANSLATION_TEXT_NAV: Link<FeedbackFlag, MdfLocalizedValue>;
    /**
     * Static representation of the one-to-one navigation property [[lastModifiedByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_BY_NAV: OneToOneLink<FeedbackFlag, User>;
    /**
     * Static representation of the one-to-one navigation property [[mdfSystemRecordStatusNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MDF_SYSTEM_RECORD_STATUS_NAV: OneToOneLink<FeedbackFlag, MdfEnumValue>;
    /**
     * Static representation of the one-to-many navigation property [[wfRequestNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const WF_REQUEST_NAV: Link<FeedbackFlag, WfRequest>;
    /**
     * All fields of the FeedbackFlag entity.
     */
    const _allFields: Array<StringField<FeedbackFlag> | DateField<FeedbackFlag> | OneToOneLink<FeedbackFlag, User> | Link<FeedbackFlag, MdfLocalizedValue> | OneToOneLink<FeedbackFlag, MdfEnumValue> | Link<FeedbackFlag, WfRequest>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<FeedbackFlag>;
    /**
     * All key fields of the FeedbackFlag entity.
     */
    const _keyFields: Array<Selectable<FeedbackFlag>>;
    /**
     * Mapping of all key field names to the respective static field property FeedbackFlag.
     */
    const _keys: {
        [keys: string]: Selectable<FeedbackFlag>;
    };
}
//# sourceMappingURL=FeedbackFlag.d.ts.map
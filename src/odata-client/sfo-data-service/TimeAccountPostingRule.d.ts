import { TimeAccountPostingRuleRequestBuilder } from './TimeAccountPostingRuleRequestBuilder';
import { Moment } from 'moment';
import { AllFields, CustomField, DateField, Entity, EntityBuilderType, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "TimeAccountPostingRule" of service "SFOData".
 */
export declare class TimeAccountPostingRule extends Entity implements TimeAccountPostingRuleType {
    /**
     * Technical entity name for TimeAccountPostingRule.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for TimeAccountPostingRule.
     */
    static _serviceName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
    /**
     * Time Type_External Code.
     * Maximum length: 128.
     */
    timeTypeExternalCode: string;
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
     * Time Account Type.
     * Maximum length: 128.
     * @nullable
     */
    timeAccountType?: string;
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
     * One-to-one navigation property to the [[TimeAccountType]] entity.
     */
    timeAccountTypeNav: TimeAccountType;
    /**
     * Returns an entity builder to construct instances `TimeAccountPostingRule`.
     * @returns A builder that constructs instances of entity type `TimeAccountPostingRule`.
     */
    static builder(): EntityBuilderType<TimeAccountPostingRule, TimeAccountPostingRuleTypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `TimeAccountPostingRule` entity type.
     * @returns A `TimeAccountPostingRule` request builder.
     */
    static requestBuilder(): TimeAccountPostingRuleRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `TimeAccountPostingRule`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `TimeAccountPostingRule`.
     */
    static customField(fieldName: string): CustomField<TimeAccountPostingRule>;
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
import { TimeAccountType, TimeAccountTypeType } from './TimeAccountType';
export interface TimeAccountPostingRuleType {
    timeTypeExternalCode: string;
    createdBy?: string;
    createdDateTime?: Moment;
    externalCode: string;
    lastModifiedBy?: string;
    lastModifiedDateTime?: Moment;
    mdfSystemRecordStatus?: string;
    timeAccountType?: string;
    createdByNav: UserType;
    lastModifiedByNav: UserType;
    mdfSystemRecordStatusNav: MdfEnumValueType;
    timeAccountTypeNav: TimeAccountTypeType;
}
export interface TimeAccountPostingRuleTypeForceMandatory {
    timeTypeExternalCode: string;
    createdBy: string;
    createdDateTime: Moment;
    externalCode: string;
    lastModifiedBy: string;
    lastModifiedDateTime: Moment;
    mdfSystemRecordStatus: string;
    timeAccountType: string;
    createdByNav: UserType;
    lastModifiedByNav: UserType;
    mdfSystemRecordStatusNav: MdfEnumValueType;
    timeAccountTypeNav: TimeAccountTypeType;
}
export declare namespace TimeAccountPostingRule {
    /**
     * Static representation of the [[timeTypeExternalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TIME_TYPE_EXTERNAL_CODE: StringField<TimeAccountPostingRule>;
    /**
     * Static representation of the [[createdBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_BY: StringField<TimeAccountPostingRule>;
    /**
     * Static representation of the [[createdDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_DATE_TIME: DateField<TimeAccountPostingRule>;
    /**
     * Static representation of the [[externalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXTERNAL_CODE: StringField<TimeAccountPostingRule>;
    /**
     * Static representation of the [[lastModifiedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_BY: StringField<TimeAccountPostingRule>;
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_DATE_TIME: DateField<TimeAccountPostingRule>;
    /**
     * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MDF_SYSTEM_RECORD_STATUS: StringField<TimeAccountPostingRule>;
    /**
     * Static representation of the [[timeAccountType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TIME_ACCOUNT_TYPE: StringField<TimeAccountPostingRule>;
    /**
     * Static representation of the one-to-one navigation property [[createdByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_BY_NAV: OneToOneLink<TimeAccountPostingRule, User>;
    /**
     * Static representation of the one-to-one navigation property [[lastModifiedByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_BY_NAV: OneToOneLink<TimeAccountPostingRule, User>;
    /**
     * Static representation of the one-to-one navigation property [[mdfSystemRecordStatusNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MDF_SYSTEM_RECORD_STATUS_NAV: OneToOneLink<TimeAccountPostingRule, MdfEnumValue>;
    /**
     * Static representation of the one-to-one navigation property [[timeAccountTypeNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TIME_ACCOUNT_TYPE_NAV: OneToOneLink<TimeAccountPostingRule, TimeAccountType>;
    /**
     * All fields of the TimeAccountPostingRule entity.
     */
    const _allFields: Array<StringField<TimeAccountPostingRule> | DateField<TimeAccountPostingRule> | OneToOneLink<TimeAccountPostingRule, User> | OneToOneLink<TimeAccountPostingRule, MdfEnumValue> | OneToOneLink<TimeAccountPostingRule, TimeAccountType>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<TimeAccountPostingRule>;
    /**
     * All key fields of the TimeAccountPostingRule entity.
     */
    const _keyFields: Array<Selectable<TimeAccountPostingRule>>;
    /**
     * Mapping of all key field names to the respective static field property TimeAccountPostingRule.
     */
    const _keys: {
        [keys: string]: Selectable<TimeAccountPostingRule>;
    };
}
//# sourceMappingURL=TimeAccountPostingRule.d.ts.map
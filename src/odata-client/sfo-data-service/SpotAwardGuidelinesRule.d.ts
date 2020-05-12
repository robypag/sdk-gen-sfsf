import { SpotAwardGuidelinesRuleRequestBuilder } from './SpotAwardGuidelinesRuleRequestBuilder';
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, CustomField, DateField, Entity, EntityBuilderType, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "SpotAwardGuidelinesRule" of service "SFOData".
 */
export declare class SpotAwardGuidelinesRule extends Entity implements SpotAwardGuidelinesRuleType {
    /**
     * Technical entity name for SpotAwardGuidelinesRule.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for SpotAwardGuidelinesRule.
     */
    static _serviceName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
    /**
     * Spot Award Program_Code.
     * Maximum length: 38.
     */
    spotAwardProgramExternalCode: string;
    /**
     * Category.
     * Maximum length: 128.
     * @nullable
     */
    category?: string;
    /**
     * Country/Region.
     * Maximum length: 255.
     * @nullable
     */
    country?: string;
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
     * Currency.
     * Maximum length: 255.
     * @nullable
     */
    currency?: string;
    /**
     * Code.
     * Maximum length: 38.
     */
    externalCode: string;
    /**
     * Order.
     * @nullable
     */
    guideLineRuleOrder?: BigNumber;
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
     * Level.
     * Maximum length: 128.
     * @nullable
     */
    level?: string;
    /**
     * Maximum Amount.
     * @nullable
     */
    maxRuleAmount?: BigNumber;
    /**
     * Record Status.
     * Maximum length: 255.
     * @nullable
     */
    mdfSystemRecordStatus?: string;
    /**
     * Minimum Amount.
     * @nullable
     */
    minRuleAmount?: BigNumber;
    /**
     * Amount.
     * @nullable
     */
    ruleAmount?: BigNumber;
    /**
     * Incremented By.
     * @nullable
     */
    ruleAmountIncrement?: BigNumber;
    /**
     * One-to-one navigation property to the [[SpotAwardCategory]] entity.
     */
    categoryNav: SpotAwardCategory;
    /**
     * One-to-one navigation property to the [[User]] entity.
     */
    createdByNav: User;
    /**
     * One-to-one navigation property to the [[User]] entity.
     */
    lastModifiedByNav: User;
    /**
     * One-to-one navigation property to the [[SpotAwardLevel]] entity.
     */
    levelNav: SpotAwardLevel;
    /**
     * One-to-one navigation property to the [[MdfEnumValue]] entity.
     */
    mdfSystemRecordStatusNav: MdfEnumValue;
    /**
     * Returns an entity builder to construct instances `SpotAwardGuidelinesRule`.
     * @returns A builder that constructs instances of entity type `SpotAwardGuidelinesRule`.
     */
    static builder(): EntityBuilderType<SpotAwardGuidelinesRule, SpotAwardGuidelinesRuleTypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `SpotAwardGuidelinesRule` entity type.
     * @returns A `SpotAwardGuidelinesRule` request builder.
     */
    static requestBuilder(): SpotAwardGuidelinesRuleRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `SpotAwardGuidelinesRule`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `SpotAwardGuidelinesRule`.
     */
    static customField(fieldName: string): CustomField<SpotAwardGuidelinesRule>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
import { SpotAwardCategory, SpotAwardCategoryType } from './SpotAwardCategory';
import { User, UserType } from './User';
import { SpotAwardLevel, SpotAwardLevelType } from './SpotAwardLevel';
import { MdfEnumValue, MdfEnumValueType } from './MdfEnumValue';
export interface SpotAwardGuidelinesRuleType {
    spotAwardProgramExternalCode: string;
    category?: string;
    country?: string;
    createdBy?: string;
    createdDateTime?: Moment;
    currency?: string;
    externalCode: string;
    guideLineRuleOrder?: BigNumber;
    lastModifiedBy?: string;
    lastModifiedDateTime?: Moment;
    level?: string;
    maxRuleAmount?: BigNumber;
    mdfSystemRecordStatus?: string;
    minRuleAmount?: BigNumber;
    ruleAmount?: BigNumber;
    ruleAmountIncrement?: BigNumber;
    categoryNav: SpotAwardCategoryType;
    createdByNav: UserType;
    lastModifiedByNav: UserType;
    levelNav: SpotAwardLevelType;
    mdfSystemRecordStatusNav: MdfEnumValueType;
}
export interface SpotAwardGuidelinesRuleTypeForceMandatory {
    spotAwardProgramExternalCode: string;
    category: string;
    country: string;
    createdBy: string;
    createdDateTime: Moment;
    currency: string;
    externalCode: string;
    guideLineRuleOrder: BigNumber;
    lastModifiedBy: string;
    lastModifiedDateTime: Moment;
    level: string;
    maxRuleAmount: BigNumber;
    mdfSystemRecordStatus: string;
    minRuleAmount: BigNumber;
    ruleAmount: BigNumber;
    ruleAmountIncrement: BigNumber;
    categoryNav: SpotAwardCategoryType;
    createdByNav: UserType;
    lastModifiedByNav: UserType;
    levelNav: SpotAwardLevelType;
    mdfSystemRecordStatusNav: MdfEnumValueType;
}
export declare namespace SpotAwardGuidelinesRule {
    /**
     * Static representation of the [[spotAwardProgramExternalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SPOT_AWARD_PROGRAM_EXTERNAL_CODE: StringField<SpotAwardGuidelinesRule>;
    /**
     * Static representation of the [[category]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CATEGORY: StringField<SpotAwardGuidelinesRule>;
    /**
     * Static representation of the [[country]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const COUNTRY: StringField<SpotAwardGuidelinesRule>;
    /**
     * Static representation of the [[createdBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_BY: StringField<SpotAwardGuidelinesRule>;
    /**
     * Static representation of the [[createdDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_DATE_TIME: DateField<SpotAwardGuidelinesRule>;
    /**
     * Static representation of the [[currency]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CURRENCY: StringField<SpotAwardGuidelinesRule>;
    /**
     * Static representation of the [[externalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXTERNAL_CODE: StringField<SpotAwardGuidelinesRule>;
    /**
     * Static representation of the [[guideLineRuleOrder]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const GUIDE_LINE_RULE_ORDER: BigNumberField<SpotAwardGuidelinesRule>;
    /**
     * Static representation of the [[lastModifiedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_BY: StringField<SpotAwardGuidelinesRule>;
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_DATE_TIME: DateField<SpotAwardGuidelinesRule>;
    /**
     * Static representation of the [[level]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LEVEL: StringField<SpotAwardGuidelinesRule>;
    /**
     * Static representation of the [[maxRuleAmount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MAX_RULE_AMOUNT: BigNumberField<SpotAwardGuidelinesRule>;
    /**
     * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MDF_SYSTEM_RECORD_STATUS: StringField<SpotAwardGuidelinesRule>;
    /**
     * Static representation of the [[minRuleAmount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MIN_RULE_AMOUNT: BigNumberField<SpotAwardGuidelinesRule>;
    /**
     * Static representation of the [[ruleAmount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const RULE_AMOUNT: BigNumberField<SpotAwardGuidelinesRule>;
    /**
     * Static representation of the [[ruleAmountIncrement]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const RULE_AMOUNT_INCREMENT: BigNumberField<SpotAwardGuidelinesRule>;
    /**
     * Static representation of the one-to-one navigation property [[categoryNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CATEGORY_NAV: OneToOneLink<SpotAwardGuidelinesRule, SpotAwardCategory>;
    /**
     * Static representation of the one-to-one navigation property [[createdByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_BY_NAV: OneToOneLink<SpotAwardGuidelinesRule, User>;
    /**
     * Static representation of the one-to-one navigation property [[lastModifiedByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_BY_NAV: OneToOneLink<SpotAwardGuidelinesRule, User>;
    /**
     * Static representation of the one-to-one navigation property [[levelNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LEVEL_NAV: OneToOneLink<SpotAwardGuidelinesRule, SpotAwardLevel>;
    /**
     * Static representation of the one-to-one navigation property [[mdfSystemRecordStatusNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MDF_SYSTEM_RECORD_STATUS_NAV: OneToOneLink<SpotAwardGuidelinesRule, MdfEnumValue>;
    /**
     * All fields of the SpotAwardGuidelinesRule entity.
     */
    const _allFields: Array<StringField<SpotAwardGuidelinesRule> | DateField<SpotAwardGuidelinesRule> | BigNumberField<SpotAwardGuidelinesRule> | OneToOneLink<SpotAwardGuidelinesRule, SpotAwardCategory> | OneToOneLink<SpotAwardGuidelinesRule, User> | OneToOneLink<SpotAwardGuidelinesRule, SpotAwardLevel> | OneToOneLink<SpotAwardGuidelinesRule, MdfEnumValue>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<SpotAwardGuidelinesRule>;
    /**
     * All key fields of the SpotAwardGuidelinesRule entity.
     */
    const _keyFields: Array<Selectable<SpotAwardGuidelinesRule>>;
    /**
     * Mapping of all key field names to the respective static field property SpotAwardGuidelinesRule.
     */
    const _keys: {
        [keys: string]: Selectable<SpotAwardGuidelinesRule>;
    };
}
//# sourceMappingURL=SpotAwardGuidelinesRule.d.ts.map
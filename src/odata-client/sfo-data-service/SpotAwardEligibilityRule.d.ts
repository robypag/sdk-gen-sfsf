import { SpotAwardEligibilityRuleRequestBuilder } from './SpotAwardEligibilityRuleRequestBuilder';
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, CustomField, DateField, Entity, EntityBuilderType, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "SpotAwardEligibilityRule" of service "SFOData".
 */
export declare class SpotAwardEligibilityRule extends Entity implements SpotAwardEligibilityRuleType {
    /**
     * Technical entity name for SpotAwardEligibilityRule.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for SpotAwardEligibilityRule.
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
     * Code.
     * Maximum length: 38.
     */
    externalCode: string;
    /**
     * Group ID.
     * @nullable
     */
    groupId?: BigNumber;
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
     * Maximum length: 255.
     * @nullable
     */
    mdfSystemRecordStatus?: string;
    /**
     * Eligibility Rule.
     * Maximum length: 128.
     * @nullable
     */
    rule?: string;
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
     * Returns an entity builder to construct instances `SpotAwardEligibilityRule`.
     * @returns A builder that constructs instances of entity type `SpotAwardEligibilityRule`.
     */
    static builder(): EntityBuilderType<SpotAwardEligibilityRule, SpotAwardEligibilityRuleTypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `SpotAwardEligibilityRule` entity type.
     * @returns A `SpotAwardEligibilityRule` request builder.
     */
    static requestBuilder(): SpotAwardEligibilityRuleRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `SpotAwardEligibilityRule`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `SpotAwardEligibilityRule`.
     */
    static customField(fieldName: string): CustomField<SpotAwardEligibilityRule>;
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
export interface SpotAwardEligibilityRuleType {
    spotAwardProgramExternalCode: string;
    createdBy?: string;
    createdDateTime?: Moment;
    externalCode: string;
    groupId?: BigNumber;
    lastModifiedBy?: string;
    lastModifiedDateTime?: Moment;
    mdfSystemRecordStatus?: string;
    rule?: string;
    createdByNav: UserType;
    lastModifiedByNav: UserType;
    mdfSystemRecordStatusNav: MdfEnumValueType;
}
export interface SpotAwardEligibilityRuleTypeForceMandatory {
    spotAwardProgramExternalCode: string;
    createdBy: string;
    createdDateTime: Moment;
    externalCode: string;
    groupId: BigNumber;
    lastModifiedBy: string;
    lastModifiedDateTime: Moment;
    mdfSystemRecordStatus: string;
    rule: string;
    createdByNav: UserType;
    lastModifiedByNav: UserType;
    mdfSystemRecordStatusNav: MdfEnumValueType;
}
export declare namespace SpotAwardEligibilityRule {
    /**
     * Static representation of the [[spotAwardProgramExternalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SPOT_AWARD_PROGRAM_EXTERNAL_CODE: StringField<SpotAwardEligibilityRule>;
    /**
     * Static representation of the [[createdBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_BY: StringField<SpotAwardEligibilityRule>;
    /**
     * Static representation of the [[createdDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_DATE_TIME: DateField<SpotAwardEligibilityRule>;
    /**
     * Static representation of the [[externalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXTERNAL_CODE: StringField<SpotAwardEligibilityRule>;
    /**
     * Static representation of the [[groupId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const GROUP_ID: BigNumberField<SpotAwardEligibilityRule>;
    /**
     * Static representation of the [[lastModifiedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_BY: StringField<SpotAwardEligibilityRule>;
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_DATE_TIME: DateField<SpotAwardEligibilityRule>;
    /**
     * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MDF_SYSTEM_RECORD_STATUS: StringField<SpotAwardEligibilityRule>;
    /**
     * Static representation of the [[rule]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const RULE: StringField<SpotAwardEligibilityRule>;
    /**
     * Static representation of the one-to-one navigation property [[createdByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_BY_NAV: OneToOneLink<SpotAwardEligibilityRule, User>;
    /**
     * Static representation of the one-to-one navigation property [[lastModifiedByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_BY_NAV: OneToOneLink<SpotAwardEligibilityRule, User>;
    /**
     * Static representation of the one-to-one navigation property [[mdfSystemRecordStatusNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MDF_SYSTEM_RECORD_STATUS_NAV: OneToOneLink<SpotAwardEligibilityRule, MdfEnumValue>;
    /**
     * All fields of the SpotAwardEligibilityRule entity.
     */
    const _allFields: Array<StringField<SpotAwardEligibilityRule> | DateField<SpotAwardEligibilityRule> | BigNumberField<SpotAwardEligibilityRule> | OneToOneLink<SpotAwardEligibilityRule, User> | OneToOneLink<SpotAwardEligibilityRule, MdfEnumValue>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<SpotAwardEligibilityRule>;
    /**
     * All key fields of the SpotAwardEligibilityRule entity.
     */
    const _keyFields: Array<Selectable<SpotAwardEligibilityRule>>;
    /**
     * Mapping of all key field names to the respective static field property SpotAwardEligibilityRule.
     */
    const _keys: {
        [keys: string]: Selectable<SpotAwardEligibilityRule>;
    };
}
//# sourceMappingURL=SpotAwardEligibilityRule.d.ts.map
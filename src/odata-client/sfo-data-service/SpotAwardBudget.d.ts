import { SpotAwardBudgetRequestBuilder } from './SpotAwardBudgetRequestBuilder';
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, CustomField, DateField, Entity, EntityBuilderType, Link, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "SpotAwardBudget" of service "SFOData".
 */
export declare class SpotAwardBudget extends Entity implements SpotAwardBudgetType {
    /**
     * Technical entity name for SpotAwardBudget.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for SpotAwardBudget.
     */
    static _serviceName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
    /**
     * Budget Amount.
     * @nullable
     */
    budgetAmount?: BigNumber;
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
     * effectiveEndDate.
     * @nullable
     */
    effectiveEndDate?: Moment;
    /**
     * Start Date.
     */
    effectiveStartDate: Moment;
    /**
     * Status.
     * Maximum length: 128.
     * @nullable
     */
    effectiveStatus?: string;
    /**
     * Code.
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
     * Spot Award Program.
     * Maximum length: 128.
     * @nullable
     */
    spotAwardProgram?: string;
    /**
     * Used Amount.
     * @nullable
     */
    usedAmount?: BigNumber;
    /**
     * Budget Holder Name.
     * Maximum length: 100.
     * @nullable
     */
    userId?: string;
    /**
     * One-to-one navigation property to the [[User]] entity.
     */
    createdByNav: User;
    /**
     * One-to-one navigation property to the [[MdfEnumValue]] entity.
     */
    effectiveStatusNav: MdfEnumValue;
    /**
     * One-to-one navigation property to the [[User]] entity.
     */
    lastModifiedByNav: User;
    /**
     * One-to-one navigation property to the [[MdfEnumValue]] entity.
     */
    mdfSystemRecordStatusNav: MdfEnumValue;
    /**
     * One-to-one navigation property to the [[SpotAwardProgram]] entity.
     */
    spotAwardProgramNav: SpotAwardProgram;
    /**
     * One-to-one navigation property to the [[User]] entity.
     */
    userIdNav: User;
    /**
     * One-to-many navigation property to the [[WfRequest]] entity.
     */
    wfRequestNav: WfRequest[];
    /**
     * Returns an entity builder to construct instances `SpotAwardBudget`.
     * @returns A builder that constructs instances of entity type `SpotAwardBudget`.
     */
    static builder(): EntityBuilderType<SpotAwardBudget, SpotAwardBudgetTypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `SpotAwardBudget` entity type.
     * @returns A `SpotAwardBudget` request builder.
     */
    static requestBuilder(): SpotAwardBudgetRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `SpotAwardBudget`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `SpotAwardBudget`.
     */
    static customField(fieldName: string): CustomField<SpotAwardBudget>;
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
import { SpotAwardProgram, SpotAwardProgramType } from './SpotAwardProgram';
import { WfRequest, WfRequestType } from './WfRequest';
export interface SpotAwardBudgetType {
    budgetAmount?: BigNumber;
    createdBy?: string;
    createdDateTime?: Moment;
    currency?: string;
    effectiveEndDate?: Moment;
    effectiveStartDate: Moment;
    effectiveStatus?: string;
    externalCode: string;
    lastModifiedBy?: string;
    lastModifiedDateTime?: Moment;
    mdfSystemRecordStatus?: string;
    spotAwardProgram?: string;
    usedAmount?: BigNumber;
    userId?: string;
    createdByNav: UserType;
    effectiveStatusNav: MdfEnumValueType;
    lastModifiedByNav: UserType;
    mdfSystemRecordStatusNav: MdfEnumValueType;
    spotAwardProgramNav: SpotAwardProgramType;
    userIdNav: UserType;
    wfRequestNav: WfRequestType[];
}
export interface SpotAwardBudgetTypeForceMandatory {
    budgetAmount: BigNumber;
    createdBy: string;
    createdDateTime: Moment;
    currency: string;
    effectiveEndDate: Moment;
    effectiveStartDate: Moment;
    effectiveStatus: string;
    externalCode: string;
    lastModifiedBy: string;
    lastModifiedDateTime: Moment;
    mdfSystemRecordStatus: string;
    spotAwardProgram: string;
    usedAmount: BigNumber;
    userId: string;
    createdByNav: UserType;
    effectiveStatusNav: MdfEnumValueType;
    lastModifiedByNav: UserType;
    mdfSystemRecordStatusNav: MdfEnumValueType;
    spotAwardProgramNav: SpotAwardProgramType;
    userIdNav: UserType;
    wfRequestNav: WfRequestType[];
}
export declare namespace SpotAwardBudget {
    /**
     * Static representation of the [[budgetAmount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BUDGET_AMOUNT: BigNumberField<SpotAwardBudget>;
    /**
     * Static representation of the [[createdBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_BY: StringField<SpotAwardBudget>;
    /**
     * Static representation of the [[createdDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_DATE_TIME: DateField<SpotAwardBudget>;
    /**
     * Static representation of the [[currency]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CURRENCY: StringField<SpotAwardBudget>;
    /**
     * Static representation of the [[effectiveEndDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EFFECTIVE_END_DATE: DateField<SpotAwardBudget>;
    /**
     * Static representation of the [[effectiveStartDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EFFECTIVE_START_DATE: DateField<SpotAwardBudget>;
    /**
     * Static representation of the [[effectiveStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EFFECTIVE_STATUS: StringField<SpotAwardBudget>;
    /**
     * Static representation of the [[externalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXTERNAL_CODE: StringField<SpotAwardBudget>;
    /**
     * Static representation of the [[lastModifiedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_BY: StringField<SpotAwardBudget>;
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_DATE_TIME: DateField<SpotAwardBudget>;
    /**
     * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MDF_SYSTEM_RECORD_STATUS: StringField<SpotAwardBudget>;
    /**
     * Static representation of the [[spotAwardProgram]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SPOT_AWARD_PROGRAM: StringField<SpotAwardBudget>;
    /**
     * Static representation of the [[usedAmount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const USED_AMOUNT: BigNumberField<SpotAwardBudget>;
    /**
     * Static representation of the [[userId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const USER_ID: StringField<SpotAwardBudget>;
    /**
     * Static representation of the one-to-one navigation property [[createdByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_BY_NAV: OneToOneLink<SpotAwardBudget, User>;
    /**
     * Static representation of the one-to-one navigation property [[effectiveStatusNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EFFECTIVE_STATUS_NAV: OneToOneLink<SpotAwardBudget, MdfEnumValue>;
    /**
     * Static representation of the one-to-one navigation property [[lastModifiedByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_BY_NAV: OneToOneLink<SpotAwardBudget, User>;
    /**
     * Static representation of the one-to-one navigation property [[mdfSystemRecordStatusNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MDF_SYSTEM_RECORD_STATUS_NAV: OneToOneLink<SpotAwardBudget, MdfEnumValue>;
    /**
     * Static representation of the one-to-one navigation property [[spotAwardProgramNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SPOT_AWARD_PROGRAM_NAV: OneToOneLink<SpotAwardBudget, SpotAwardProgram>;
    /**
     * Static representation of the one-to-one navigation property [[userIdNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const USER_ID_NAV: OneToOneLink<SpotAwardBudget, User>;
    /**
     * Static representation of the one-to-many navigation property [[wfRequestNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const WF_REQUEST_NAV: Link<SpotAwardBudget, WfRequest>;
    /**
     * All fields of the SpotAwardBudget entity.
     */
    const _allFields: Array<BigNumberField<SpotAwardBudget> | StringField<SpotAwardBudget> | DateField<SpotAwardBudget> | OneToOneLink<SpotAwardBudget, User> | OneToOneLink<SpotAwardBudget, MdfEnumValue> | OneToOneLink<SpotAwardBudget, SpotAwardProgram> | Link<SpotAwardBudget, WfRequest>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<SpotAwardBudget>;
    /**
     * All key fields of the SpotAwardBudget entity.
     */
    const _keyFields: Array<Selectable<SpotAwardBudget>>;
    /**
     * Mapping of all key field names to the respective static field property SpotAwardBudget.
     */
    const _keys: {
        [keys: string]: Selectable<SpotAwardBudget>;
    };
}
//# sourceMappingURL=SpotAwardBudget.d.ts.map
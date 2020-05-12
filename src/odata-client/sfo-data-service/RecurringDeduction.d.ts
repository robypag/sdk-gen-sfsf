import { RecurringDeductionRequestBuilder } from './RecurringDeductionRequestBuilder';
import { Moment } from 'moment';
import { AllFields, CustomField, DateField, Entity, EntityBuilderType, Link, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "RecurringDeduction" of service "SFOData".
 */
export declare class RecurringDeduction extends Entity implements RecurringDeductionType {
    /**
     * Technical entity name for RecurringDeduction.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for RecurringDeduction.
     */
    static _serviceName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
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
     * Effective End Date.
     * @nullable
     */
    effectiveEndDate?: Moment;
    /**
     * Effective Start Date.
     */
    effectiveStartDate: Moment;
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
     * User.
     * Maximum length: 100.
     */
    userSysId: string;
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
     * One-to-many navigation property to the [[RecurringDeductionItem]] entity.
     */
    recurringItems: RecurringDeductionItem[];
    /**
     * One-to-one navigation property to the [[User]] entity.
     */
    userSysIdNav: User;
    /**
     * One-to-many navigation property to the [[WfRequest]] entity.
     */
    wfRequestNav: WfRequest[];
    /**
     * Returns an entity builder to construct instances `RecurringDeduction`.
     * @returns A builder that constructs instances of entity type `RecurringDeduction`.
     */
    static builder(): EntityBuilderType<RecurringDeduction, RecurringDeductionTypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `RecurringDeduction` entity type.
     * @returns A `RecurringDeduction` request builder.
     */
    static requestBuilder(): RecurringDeductionRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `RecurringDeduction`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `RecurringDeduction`.
     */
    static customField(fieldName: string): CustomField<RecurringDeduction>;
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
import { RecurringDeductionItem, RecurringDeductionItemType } from './RecurringDeductionItem';
import { WfRequest, WfRequestType } from './WfRequest';
export interface RecurringDeductionType {
    createdBy?: string;
    createdDateTime?: Moment;
    effectiveEndDate?: Moment;
    effectiveStartDate: Moment;
    lastModifiedBy?: string;
    lastModifiedDateTime?: Moment;
    mdfSystemRecordStatus?: string;
    userSysId: string;
    createdByNav: UserType;
    lastModifiedByNav: UserType;
    mdfSystemRecordStatusNav: MdfEnumValueType;
    recurringItems: RecurringDeductionItemType[];
    userSysIdNav: UserType;
    wfRequestNav: WfRequestType[];
}
export interface RecurringDeductionTypeForceMandatory {
    createdBy: string;
    createdDateTime: Moment;
    effectiveEndDate: Moment;
    effectiveStartDate: Moment;
    lastModifiedBy: string;
    lastModifiedDateTime: Moment;
    mdfSystemRecordStatus: string;
    userSysId: string;
    createdByNav: UserType;
    lastModifiedByNav: UserType;
    mdfSystemRecordStatusNav: MdfEnumValueType;
    recurringItems: RecurringDeductionItemType[];
    userSysIdNav: UserType;
    wfRequestNav: WfRequestType[];
}
export declare namespace RecurringDeduction {
    /**
     * Static representation of the [[createdBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_BY: StringField<RecurringDeduction>;
    /**
     * Static representation of the [[createdDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_DATE_TIME: DateField<RecurringDeduction>;
    /**
     * Static representation of the [[effectiveEndDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EFFECTIVE_END_DATE: DateField<RecurringDeduction>;
    /**
     * Static representation of the [[effectiveStartDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EFFECTIVE_START_DATE: DateField<RecurringDeduction>;
    /**
     * Static representation of the [[lastModifiedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_BY: StringField<RecurringDeduction>;
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_DATE_TIME: DateField<RecurringDeduction>;
    /**
     * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MDF_SYSTEM_RECORD_STATUS: StringField<RecurringDeduction>;
    /**
     * Static representation of the [[userSysId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const USER_SYS_ID: StringField<RecurringDeduction>;
    /**
     * Static representation of the one-to-one navigation property [[createdByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_BY_NAV: OneToOneLink<RecurringDeduction, User>;
    /**
     * Static representation of the one-to-one navigation property [[lastModifiedByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_BY_NAV: OneToOneLink<RecurringDeduction, User>;
    /**
     * Static representation of the one-to-one navigation property [[mdfSystemRecordStatusNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MDF_SYSTEM_RECORD_STATUS_NAV: OneToOneLink<RecurringDeduction, MdfEnumValue>;
    /**
     * Static representation of the one-to-many navigation property [[recurringItems]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const RECURRING_ITEMS: Link<RecurringDeduction, RecurringDeductionItem>;
    /**
     * Static representation of the one-to-one navigation property [[userSysIdNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const USER_SYS_ID_NAV: OneToOneLink<RecurringDeduction, User>;
    /**
     * Static representation of the one-to-many navigation property [[wfRequestNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const WF_REQUEST_NAV: Link<RecurringDeduction, WfRequest>;
    /**
     * All fields of the RecurringDeduction entity.
     */
    const _allFields: Array<StringField<RecurringDeduction> | DateField<RecurringDeduction> | OneToOneLink<RecurringDeduction, User> | OneToOneLink<RecurringDeduction, MdfEnumValue> | Link<RecurringDeduction, RecurringDeductionItem> | Link<RecurringDeduction, WfRequest>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<RecurringDeduction>;
    /**
     * All key fields of the RecurringDeduction entity.
     */
    const _keyFields: Array<Selectable<RecurringDeduction>>;
    /**
     * Mapping of all key field names to the respective static field property RecurringDeduction.
     */
    const _keys: {
        [keys: string]: Selectable<RecurringDeduction>;
    };
}
//# sourceMappingURL=RecurringDeduction.d.ts.map
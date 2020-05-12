import { WorkOrderRequestBuilder } from './WorkOrderRequestBuilder';
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, CustomField, DateField, Entity, EntityBuilderType, Link, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "WorkOrder" of service "SFOData".
 */
export declare class WorkOrder extends Entity implements WorkOrderType {
    /**
     * Technical entity name for WorkOrder.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for WorkOrder.
     */
    static _serviceName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
    /**
     * Billing Amount.
     * @nullable
     */
    billingAmount?: BigNumber;
    /**
     * Billing Rate.
     * Maximum length: 32.
     * @nullable
     */
    billingRate?: string;
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
     * Currency.
     * Maximum length: 128.
     * @nullable
     */
    currency?: string;
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
     * Effective Status.
     * Maximum length: 255.
     * @nullable
     */
    effectiveStatus?: string;
    /**
     * End Date.
     * @nullable
     */
    endDate?: Moment;
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
     * Start Date.
     * @nullable
     */
    startDate?: Moment;
    /**
     * User ID.
     * Maximum length: 100.
     */
    userSysId: string;
    /**
     * Vendor.
     * Maximum length: 128.
     * @nullable
     */
    vendor?: string;
    /**
     * Work Order ID.
     * Maximum length: 128.
     * @nullable
     */
    workOrderId?: string;
    /**
     * Work Order Name.
     * Maximum length: 255.
     * @nullable
     */
    workOrderName?: string;
    /**
     * Work Order Owner.
     * Maximum length: 100.
     * @nullable
     */
    workOrderOwnerId?: string;
    /**
     * Worker Type.
     * Maximum length: 128.
     * @nullable
     */
    workerType?: string;
    /**
     * One-to-one navigation property to the [[FoFrequency]] entity.
     */
    billingRateNav: FoFrequency;
    /**
     * One-to-one navigation property to the [[User]] entity.
     */
    createdByNav: User;
    /**
     * One-to-one navigation property to the [[Currency]] entity.
     */
    currencyNav: Currency;
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
     * One-to-one navigation property to the [[User]] entity.
     */
    userSysIdNav: User;
    /**
     * One-to-one navigation property to the [[VendorInfo]] entity.
     */
    vendorNav: VendorInfo;
    /**
     * One-to-many navigation property to the [[WfRequest]] entity.
     */
    wfRequestNav: WfRequest[];
    /**
     * One-to-one navigation property to the [[User]] entity.
     */
    workOrderOwnerIdNav: User;
    /**
     * One-to-one navigation property to the [[PickListValueV2]] entity.
     */
    workerTypeNav: PickListValueV2;
    /**
     * Returns an entity builder to construct instances `WorkOrder`.
     * @returns A builder that constructs instances of entity type `WorkOrder`.
     */
    static builder(): EntityBuilderType<WorkOrder, WorkOrderTypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `WorkOrder` entity type.
     * @returns A `WorkOrder` request builder.
     */
    static requestBuilder(): WorkOrderRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `WorkOrder`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `WorkOrder`.
     */
    static customField(fieldName: string): CustomField<WorkOrder>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
import { FoFrequency, FoFrequencyType } from './FoFrequency';
import { User, UserType } from './User';
import { Currency, CurrencyType } from './Currency';
import { MdfEnumValue, MdfEnumValueType } from './MdfEnumValue';
import { VendorInfo, VendorInfoType } from './VendorInfo';
import { WfRequest, WfRequestType } from './WfRequest';
import { PickListValueV2, PickListValueV2Type } from './PickListValueV2';
export interface WorkOrderType {
    billingAmount?: BigNumber;
    billingRate?: string;
    createdBy?: string;
    createdDateTime?: Moment;
    currency?: string;
    effectiveEndDate?: Moment;
    effectiveStartDate: Moment;
    effectiveStatus?: string;
    endDate?: Moment;
    lastModifiedBy?: string;
    lastModifiedDateTime?: Moment;
    mdfSystemRecordStatus?: string;
    startDate?: Moment;
    userSysId: string;
    vendor?: string;
    workOrderId?: string;
    workOrderName?: string;
    workOrderOwnerId?: string;
    workerType?: string;
    billingRateNav: FoFrequencyType;
    createdByNav: UserType;
    currencyNav: CurrencyType;
    effectiveStatusNav: MdfEnumValueType;
    lastModifiedByNav: UserType;
    mdfSystemRecordStatusNav: MdfEnumValueType;
    userSysIdNav: UserType;
    vendorNav: VendorInfoType;
    wfRequestNav: WfRequestType[];
    workOrderOwnerIdNav: UserType;
    workerTypeNav: PickListValueV2Type;
}
export interface WorkOrderTypeForceMandatory {
    billingAmount: BigNumber;
    billingRate: string;
    createdBy: string;
    createdDateTime: Moment;
    currency: string;
    effectiveEndDate: Moment;
    effectiveStartDate: Moment;
    effectiveStatus: string;
    endDate: Moment;
    lastModifiedBy: string;
    lastModifiedDateTime: Moment;
    mdfSystemRecordStatus: string;
    startDate: Moment;
    userSysId: string;
    vendor: string;
    workOrderId: string;
    workOrderName: string;
    workOrderOwnerId: string;
    workerType: string;
    billingRateNav: FoFrequencyType;
    createdByNav: UserType;
    currencyNav: CurrencyType;
    effectiveStatusNav: MdfEnumValueType;
    lastModifiedByNav: UserType;
    mdfSystemRecordStatusNav: MdfEnumValueType;
    userSysIdNav: UserType;
    vendorNav: VendorInfoType;
    wfRequestNav: WfRequestType[];
    workOrderOwnerIdNav: UserType;
    workerTypeNav: PickListValueV2Type;
}
export declare namespace WorkOrder {
    /**
     * Static representation of the [[billingAmount]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BILLING_AMOUNT: BigNumberField<WorkOrder>;
    /**
     * Static representation of the [[billingRate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BILLING_RATE: StringField<WorkOrder>;
    /**
     * Static representation of the [[createdBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_BY: StringField<WorkOrder>;
    /**
     * Static representation of the [[createdDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_DATE_TIME: DateField<WorkOrder>;
    /**
     * Static representation of the [[currency]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CURRENCY: StringField<WorkOrder>;
    /**
     * Static representation of the [[effectiveEndDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EFFECTIVE_END_DATE: DateField<WorkOrder>;
    /**
     * Static representation of the [[effectiveStartDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EFFECTIVE_START_DATE: DateField<WorkOrder>;
    /**
     * Static representation of the [[effectiveStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EFFECTIVE_STATUS: StringField<WorkOrder>;
    /**
     * Static representation of the [[endDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const END_DATE: DateField<WorkOrder>;
    /**
     * Static representation of the [[lastModifiedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_BY: StringField<WorkOrder>;
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_DATE_TIME: DateField<WorkOrder>;
    /**
     * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MDF_SYSTEM_RECORD_STATUS: StringField<WorkOrder>;
    /**
     * Static representation of the [[startDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const START_DATE: DateField<WorkOrder>;
    /**
     * Static representation of the [[userSysId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const USER_SYS_ID: StringField<WorkOrder>;
    /**
     * Static representation of the [[vendor]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const VENDOR: StringField<WorkOrder>;
    /**
     * Static representation of the [[workOrderId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const WORK_ORDER_ID: StringField<WorkOrder>;
    /**
     * Static representation of the [[workOrderName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const WORK_ORDER_NAME: StringField<WorkOrder>;
    /**
     * Static representation of the [[workOrderOwnerId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const WORK_ORDER_OWNER_ID: StringField<WorkOrder>;
    /**
     * Static representation of the [[workerType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const WORKER_TYPE: StringField<WorkOrder>;
    /**
     * Static representation of the one-to-one navigation property [[billingRateNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BILLING_RATE_NAV: OneToOneLink<WorkOrder, FoFrequency>;
    /**
     * Static representation of the one-to-one navigation property [[createdByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_BY_NAV: OneToOneLink<WorkOrder, User>;
    /**
     * Static representation of the one-to-one navigation property [[currencyNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CURRENCY_NAV: OneToOneLink<WorkOrder, Currency>;
    /**
     * Static representation of the one-to-one navigation property [[effectiveStatusNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EFFECTIVE_STATUS_NAV: OneToOneLink<WorkOrder, MdfEnumValue>;
    /**
     * Static representation of the one-to-one navigation property [[lastModifiedByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_BY_NAV: OneToOneLink<WorkOrder, User>;
    /**
     * Static representation of the one-to-one navigation property [[mdfSystemRecordStatusNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MDF_SYSTEM_RECORD_STATUS_NAV: OneToOneLink<WorkOrder, MdfEnumValue>;
    /**
     * Static representation of the one-to-one navigation property [[userSysIdNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const USER_SYS_ID_NAV: OneToOneLink<WorkOrder, User>;
    /**
     * Static representation of the one-to-one navigation property [[vendorNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const VENDOR_NAV: OneToOneLink<WorkOrder, VendorInfo>;
    /**
     * Static representation of the one-to-many navigation property [[wfRequestNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const WF_REQUEST_NAV: Link<WorkOrder, WfRequest>;
    /**
     * Static representation of the one-to-one navigation property [[workOrderOwnerIdNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const WORK_ORDER_OWNER_ID_NAV: OneToOneLink<WorkOrder, User>;
    /**
     * Static representation of the one-to-one navigation property [[workerTypeNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const WORKER_TYPE_NAV: OneToOneLink<WorkOrder, PickListValueV2>;
    /**
     * All fields of the WorkOrder entity.
     */
    const _allFields: Array<BigNumberField<WorkOrder> | StringField<WorkOrder> | DateField<WorkOrder> | OneToOneLink<WorkOrder, FoFrequency> | OneToOneLink<WorkOrder, User> | OneToOneLink<WorkOrder, Currency> | OneToOneLink<WorkOrder, MdfEnumValue> | OneToOneLink<WorkOrder, VendorInfo> | Link<WorkOrder, WfRequest> | OneToOneLink<WorkOrder, PickListValueV2>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<WorkOrder>;
    /**
     * All key fields of the WorkOrder entity.
     */
    const _keyFields: Array<Selectable<WorkOrder>>;
    /**
     * Mapping of all key field names to the respective static field property WorkOrder.
     */
    const _keys: {
        [keys: string]: Selectable<WorkOrder>;
    };
}
//# sourceMappingURL=WorkOrder.d.ts.map
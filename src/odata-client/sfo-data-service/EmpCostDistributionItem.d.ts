import { EmpCostDistributionItemRequestBuilder } from './EmpCostDistributionItemRequestBuilder';
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, CustomField, DateField, Entity, EntityBuilderType, Link, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "EmpCostDistributionItem" of service "SFOData".
 */
export declare class EmpCostDistributionItem extends Entity implements EmpCostDistributionItemType {
    /**
     * Technical entity name for EmpCostDistributionItem.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for EmpCostDistributionItem.
     */
    static _serviceName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
    /**
     * Alternative Cost Distribution_Effective Start Date.
     */
    empCostDistributionEffectiveStartDate: Moment;
    /**
     * Alternative Cost Distribution_User.
     * Maximum length: 100.
     */
    empCostDistributionUsersSysId: string;
    /**
     * Cost Center.
     * Maximum length: 128.
     * @nullable
     */
    costCenter?: string;
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
     * External Code.
     */
    externalCode: BigNumber;
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
     * Percentage.
     * @nullable
     */
    percentage?: BigNumber;
    /**
     * One-to-many navigation property to the [[FoCostCenter]] entity.
     */
    costCenterNav: FoCostCenter[];
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
     * Returns an entity builder to construct instances `EmpCostDistributionItem`.
     * @returns A builder that constructs instances of entity type `EmpCostDistributionItem`.
     */
    static builder(): EntityBuilderType<EmpCostDistributionItem, EmpCostDistributionItemTypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `EmpCostDistributionItem` entity type.
     * @returns A `EmpCostDistributionItem` request builder.
     */
    static requestBuilder(): EmpCostDistributionItemRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `EmpCostDistributionItem`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `EmpCostDistributionItem`.
     */
    static customField(fieldName: string): CustomField<EmpCostDistributionItem>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
import { FoCostCenter, FoCostCenterType } from './FoCostCenter';
import { User, UserType } from './User';
import { MdfEnumValue, MdfEnumValueType } from './MdfEnumValue';
export interface EmpCostDistributionItemType {
    empCostDistributionEffectiveStartDate: Moment;
    empCostDistributionUsersSysId: string;
    costCenter?: string;
    createdBy?: string;
    createdDateTime?: Moment;
    externalCode: BigNumber;
    lastModifiedBy?: string;
    lastModifiedDateTime?: Moment;
    mdfSystemRecordStatus?: string;
    percentage?: BigNumber;
    costCenterNav: FoCostCenterType[];
    createdByNav: UserType;
    lastModifiedByNav: UserType;
    mdfSystemRecordStatusNav: MdfEnumValueType;
}
export interface EmpCostDistributionItemTypeForceMandatory {
    empCostDistributionEffectiveStartDate: Moment;
    empCostDistributionUsersSysId: string;
    costCenter: string;
    createdBy: string;
    createdDateTime: Moment;
    externalCode: BigNumber;
    lastModifiedBy: string;
    lastModifiedDateTime: Moment;
    mdfSystemRecordStatus: string;
    percentage: BigNumber;
    costCenterNav: FoCostCenterType[];
    createdByNav: UserType;
    lastModifiedByNav: UserType;
    mdfSystemRecordStatusNav: MdfEnumValueType;
}
export declare namespace EmpCostDistributionItem {
    /**
     * Static representation of the [[empCostDistributionEffectiveStartDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EMP_COST_DISTRIBUTION_EFFECTIVE_START_DATE: DateField<EmpCostDistributionItem>;
    /**
     * Static representation of the [[empCostDistributionUsersSysId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EMP_COST_DISTRIBUTION_USERS_SYS_ID: StringField<EmpCostDistributionItem>;
    /**
     * Static representation of the [[costCenter]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const COST_CENTER: StringField<EmpCostDistributionItem>;
    /**
     * Static representation of the [[createdBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_BY: StringField<EmpCostDistributionItem>;
    /**
     * Static representation of the [[createdDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_DATE_TIME: DateField<EmpCostDistributionItem>;
    /**
     * Static representation of the [[externalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXTERNAL_CODE: BigNumberField<EmpCostDistributionItem>;
    /**
     * Static representation of the [[lastModifiedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_BY: StringField<EmpCostDistributionItem>;
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_DATE_TIME: DateField<EmpCostDistributionItem>;
    /**
     * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MDF_SYSTEM_RECORD_STATUS: StringField<EmpCostDistributionItem>;
    /**
     * Static representation of the [[percentage]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PERCENTAGE: BigNumberField<EmpCostDistributionItem>;
    /**
     * Static representation of the one-to-many navigation property [[costCenterNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const COST_CENTER_NAV: Link<EmpCostDistributionItem, FoCostCenter>;
    /**
     * Static representation of the one-to-one navigation property [[createdByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_BY_NAV: OneToOneLink<EmpCostDistributionItem, User>;
    /**
     * Static representation of the one-to-one navigation property [[lastModifiedByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_BY_NAV: OneToOneLink<EmpCostDistributionItem, User>;
    /**
     * Static representation of the one-to-one navigation property [[mdfSystemRecordStatusNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MDF_SYSTEM_RECORD_STATUS_NAV: OneToOneLink<EmpCostDistributionItem, MdfEnumValue>;
    /**
     * All fields of the EmpCostDistributionItem entity.
     */
    const _allFields: Array<DateField<EmpCostDistributionItem> | StringField<EmpCostDistributionItem> | BigNumberField<EmpCostDistributionItem> | Link<EmpCostDistributionItem, FoCostCenter> | OneToOneLink<EmpCostDistributionItem, User> | OneToOneLink<EmpCostDistributionItem, MdfEnumValue>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<EmpCostDistributionItem>;
    /**
     * All key fields of the EmpCostDistributionItem entity.
     */
    const _keyFields: Array<Selectable<EmpCostDistributionItem>>;
    /**
     * Mapping of all key field names to the respective static field property EmpCostDistributionItem.
     */
    const _keys: {
        [keys: string]: Selectable<EmpCostDistributionItem>;
    };
}
//# sourceMappingURL=EmpCostDistributionItem.d.ts.map
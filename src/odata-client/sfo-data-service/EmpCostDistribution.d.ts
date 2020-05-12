import { EmpCostDistributionRequestBuilder } from './EmpCostDistributionRequestBuilder';
import { Moment } from 'moment';
import { AllFields, CustomField, DateField, Entity, EntityBuilderType, Link, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "EmpCostDistribution" of service "SFOData".
 */
export declare class EmpCostDistribution extends Entity implements EmpCostDistributionType {
    /**
     * Technical entity name for EmpCostDistribution.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for EmpCostDistribution.
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
     * User.
     * Maximum length: 100.
     */
    usersSysId: string;
    /**
     * One-to-one navigation property to the [[User]] entity.
     */
    createdByNav: User;
    /**
     * One-to-many navigation property to the [[EmpCostDistributionItem]] entity.
     */
    items: EmpCostDistributionItem[];
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
    usersSysIdNav: User;
    /**
     * One-to-many navigation property to the [[WfRequest]] entity.
     */
    wfRequestNav: WfRequest[];
    /**
     * Returns an entity builder to construct instances `EmpCostDistribution`.
     * @returns A builder that constructs instances of entity type `EmpCostDistribution`.
     */
    static builder(): EntityBuilderType<EmpCostDistribution, EmpCostDistributionTypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `EmpCostDistribution` entity type.
     * @returns A `EmpCostDistribution` request builder.
     */
    static requestBuilder(): EmpCostDistributionRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `EmpCostDistribution`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `EmpCostDistribution`.
     */
    static customField(fieldName: string): CustomField<EmpCostDistribution>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
import { User, UserType } from './User';
import { EmpCostDistributionItem, EmpCostDistributionItemType } from './EmpCostDistributionItem';
import { MdfEnumValue, MdfEnumValueType } from './MdfEnumValue';
import { WfRequest, WfRequestType } from './WfRequest';
export interface EmpCostDistributionType {
    createdBy?: string;
    createdDateTime?: Moment;
    effectiveEndDate?: Moment;
    effectiveStartDate: Moment;
    lastModifiedBy?: string;
    lastModifiedDateTime?: Moment;
    mdfSystemRecordStatus?: string;
    usersSysId: string;
    createdByNav: UserType;
    items: EmpCostDistributionItemType[];
    lastModifiedByNav: UserType;
    mdfSystemRecordStatusNav: MdfEnumValueType;
    usersSysIdNav: UserType;
    wfRequestNav: WfRequestType[];
}
export interface EmpCostDistributionTypeForceMandatory {
    createdBy: string;
    createdDateTime: Moment;
    effectiveEndDate: Moment;
    effectiveStartDate: Moment;
    lastModifiedBy: string;
    lastModifiedDateTime: Moment;
    mdfSystemRecordStatus: string;
    usersSysId: string;
    createdByNav: UserType;
    items: EmpCostDistributionItemType[];
    lastModifiedByNav: UserType;
    mdfSystemRecordStatusNav: MdfEnumValueType;
    usersSysIdNav: UserType;
    wfRequestNav: WfRequestType[];
}
export declare namespace EmpCostDistribution {
    /**
     * Static representation of the [[createdBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_BY: StringField<EmpCostDistribution>;
    /**
     * Static representation of the [[createdDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_DATE_TIME: DateField<EmpCostDistribution>;
    /**
     * Static representation of the [[effectiveEndDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EFFECTIVE_END_DATE: DateField<EmpCostDistribution>;
    /**
     * Static representation of the [[effectiveStartDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EFFECTIVE_START_DATE: DateField<EmpCostDistribution>;
    /**
     * Static representation of the [[lastModifiedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_BY: StringField<EmpCostDistribution>;
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_DATE_TIME: DateField<EmpCostDistribution>;
    /**
     * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MDF_SYSTEM_RECORD_STATUS: StringField<EmpCostDistribution>;
    /**
     * Static representation of the [[usersSysId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const USERS_SYS_ID: StringField<EmpCostDistribution>;
    /**
     * Static representation of the one-to-one navigation property [[createdByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_BY_NAV: OneToOneLink<EmpCostDistribution, User>;
    /**
     * Static representation of the one-to-many navigation property [[items]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ITEMS: Link<EmpCostDistribution, EmpCostDistributionItem>;
    /**
     * Static representation of the one-to-one navigation property [[lastModifiedByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_BY_NAV: OneToOneLink<EmpCostDistribution, User>;
    /**
     * Static representation of the one-to-one navigation property [[mdfSystemRecordStatusNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MDF_SYSTEM_RECORD_STATUS_NAV: OneToOneLink<EmpCostDistribution, MdfEnumValue>;
    /**
     * Static representation of the one-to-one navigation property [[usersSysIdNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const USERS_SYS_ID_NAV: OneToOneLink<EmpCostDistribution, User>;
    /**
     * Static representation of the one-to-many navigation property [[wfRequestNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const WF_REQUEST_NAV: Link<EmpCostDistribution, WfRequest>;
    /**
     * All fields of the EmpCostDistribution entity.
     */
    const _allFields: Array<StringField<EmpCostDistribution> | DateField<EmpCostDistribution> | OneToOneLink<EmpCostDistribution, User> | Link<EmpCostDistribution, EmpCostDistributionItem> | OneToOneLink<EmpCostDistribution, MdfEnumValue> | Link<EmpCostDistribution, WfRequest>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<EmpCostDistribution>;
    /**
     * All key fields of the EmpCostDistribution entity.
     */
    const _keyFields: Array<Selectable<EmpCostDistribution>>;
    /**
     * Mapping of all key field names to the respective static field property EmpCostDistribution.
     */
    const _keys: {
        [keys: string]: Selectable<EmpCostDistribution>;
    };
}
//# sourceMappingURL=EmpCostDistribution.d.ts.map
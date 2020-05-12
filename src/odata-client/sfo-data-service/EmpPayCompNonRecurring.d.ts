import { EmpPayCompNonRecurringRequestBuilder } from './EmpPayCompNonRecurringRequestBuilder';
import { Moment } from 'moment';
import { AllFields, CustomField, DateField, Entity, EntityBuilderType, Link, NumberField, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "EmpPayCompNonRecurring" of service "SFOData".
 */
export declare class EmpPayCompNonRecurring extends Entity implements EmpPayCompNonRecurringType {
    /**
     * Technical entity name for EmpPayCompNonRecurring.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for EmpPayCompNonRecurring.
     */
    static _serviceName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
    /**
     * Alternative Cost Center.
     * Maximum length: 32.
     * @nullable
     */
    alternativeCostCenter?: string;
    /**
     * Created By.
     * Maximum length: 100.
     * @nullable
     */
    createdBy?: string;
    /**
     * Created Date Time.
     * @nullable
     */
    createdDateTime?: Moment;
    /**
     * Created On.
     * @nullable
     */
    createdOn?: Moment;
    /**
     * Currency Code.
     * Maximum length: 20.
     * @nullable
     */
    currencyCode?: string;
    /**
     * Last Modified By.
     * Maximum length: 100.
     * @nullable
     */
    lastModifiedBy?: string;
    /**
     * Last Modified Date Time.
     * @nullable
     */
    lastModifiedDateTime?: Moment;
    /**
     * Last Modified On.
     * @nullable
     */
    lastModifiedOn?: Moment;
    /**
     * notes.
     * Maximum length: 4000.
     * @nullable
     */
    notes?: string;
    /**
     * operation.
     * @nullable
     */
    operation?: string;
    /**
     * Type.
     */
    payComponentCode: string;
    /**
     * Issue Date.
     */
    payDate: Moment;
    /**
     * User ID.
     * Maximum length: 100.
     */
    userId: string;
    /**
     * Value.
     * @nullable
     */
    value?: number;
    /**
     * One-to-many navigation property to the [[FoCostCenter]] entity.
     */
    alternativeCostCenterNav: FoCostCenter[];
    /**
     * One-to-one navigation property to the [[EmpEmployment]] entity.
     */
    employmentNav: EmpEmployment;
    /**
     * One-to-many navigation property to the [[FoPayComponent]] entity.
     */
    payComponentCodeNav: FoPayComponent[];
    /**
     * One-to-one navigation property to the [[User]] entity.
     */
    userNav: User;
    /**
     * One-to-one navigation property to the [[WfRequest]] entity.
     */
    wfRequestNav: WfRequest;
    /**
     * Returns an entity builder to construct instances `EmpPayCompNonRecurring`.
     * @returns A builder that constructs instances of entity type `EmpPayCompNonRecurring`.
     */
    static builder(): EntityBuilderType<EmpPayCompNonRecurring, EmpPayCompNonRecurringTypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `EmpPayCompNonRecurring` entity type.
     * @returns A `EmpPayCompNonRecurring` request builder.
     */
    static requestBuilder(): EmpPayCompNonRecurringRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `EmpPayCompNonRecurring`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `EmpPayCompNonRecurring`.
     */
    static customField(fieldName: string): CustomField<EmpPayCompNonRecurring>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
import { FoCostCenter, FoCostCenterType } from './FoCostCenter';
import { EmpEmployment, EmpEmploymentType } from './EmpEmployment';
import { FoPayComponent, FoPayComponentType } from './FoPayComponent';
import { User, UserType } from './User';
import { WfRequest, WfRequestType } from './WfRequest';
export interface EmpPayCompNonRecurringType {
    alternativeCostCenter?: string;
    createdBy?: string;
    createdDateTime?: Moment;
    createdOn?: Moment;
    currencyCode?: string;
    lastModifiedBy?: string;
    lastModifiedDateTime?: Moment;
    lastModifiedOn?: Moment;
    notes?: string;
    operation?: string;
    payComponentCode: string;
    payDate: Moment;
    userId: string;
    value?: number;
    alternativeCostCenterNav: FoCostCenterType[];
    employmentNav: EmpEmploymentType;
    payComponentCodeNav: FoPayComponentType[];
    userNav: UserType;
    wfRequestNav: WfRequestType;
}
export interface EmpPayCompNonRecurringTypeForceMandatory {
    alternativeCostCenter: string;
    createdBy: string;
    createdDateTime: Moment;
    createdOn: Moment;
    currencyCode: string;
    lastModifiedBy: string;
    lastModifiedDateTime: Moment;
    lastModifiedOn: Moment;
    notes: string;
    operation: string;
    payComponentCode: string;
    payDate: Moment;
    userId: string;
    value: number;
    alternativeCostCenterNav: FoCostCenterType[];
    employmentNav: EmpEmploymentType;
    payComponentCodeNav: FoPayComponentType[];
    userNav: UserType;
    wfRequestNav: WfRequestType;
}
export declare namespace EmpPayCompNonRecurring {
    /**
     * Static representation of the [[alternativeCostCenter]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ALTERNATIVE_COST_CENTER: StringField<EmpPayCompNonRecurring>;
    /**
     * Static representation of the [[createdBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_BY: StringField<EmpPayCompNonRecurring>;
    /**
     * Static representation of the [[createdDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_DATE_TIME: DateField<EmpPayCompNonRecurring>;
    /**
     * Static representation of the [[createdOn]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_ON: DateField<EmpPayCompNonRecurring>;
    /**
     * Static representation of the [[currencyCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CURRENCY_CODE: StringField<EmpPayCompNonRecurring>;
    /**
     * Static representation of the [[lastModifiedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_BY: StringField<EmpPayCompNonRecurring>;
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_DATE_TIME: DateField<EmpPayCompNonRecurring>;
    /**
     * Static representation of the [[lastModifiedOn]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_ON: DateField<EmpPayCompNonRecurring>;
    /**
     * Static representation of the [[notes]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const NOTES: StringField<EmpPayCompNonRecurring>;
    /**
     * Static representation of the [[operation]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const OPERATION: StringField<EmpPayCompNonRecurring>;
    /**
     * Static representation of the [[payComponentCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PAY_COMPONENT_CODE: StringField<EmpPayCompNonRecurring>;
    /**
     * Static representation of the [[payDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PAY_DATE: DateField<EmpPayCompNonRecurring>;
    /**
     * Static representation of the [[userId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const USER_ID: StringField<EmpPayCompNonRecurring>;
    /**
     * Static representation of the [[value]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const VALUE: NumberField<EmpPayCompNonRecurring>;
    /**
     * Static representation of the one-to-many navigation property [[alternativeCostCenterNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ALTERNATIVE_COST_CENTER_NAV: Link<EmpPayCompNonRecurring, FoCostCenter>;
    /**
     * Static representation of the one-to-one navigation property [[employmentNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EMPLOYMENT_NAV: OneToOneLink<EmpPayCompNonRecurring, EmpEmployment>;
    /**
     * Static representation of the one-to-many navigation property [[payComponentCodeNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PAY_COMPONENT_CODE_NAV: Link<EmpPayCompNonRecurring, FoPayComponent>;
    /**
     * Static representation of the one-to-one navigation property [[userNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const USER_NAV: OneToOneLink<EmpPayCompNonRecurring, User>;
    /**
     * Static representation of the one-to-one navigation property [[wfRequestNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const WF_REQUEST_NAV: OneToOneLink<EmpPayCompNonRecurring, WfRequest>;
    /**
     * All fields of the EmpPayCompNonRecurring entity.
     */
    const _allFields: Array<StringField<EmpPayCompNonRecurring> | DateField<EmpPayCompNonRecurring> | NumberField<EmpPayCompNonRecurring> | Link<EmpPayCompNonRecurring, FoCostCenter> | OneToOneLink<EmpPayCompNonRecurring, EmpEmployment> | Link<EmpPayCompNonRecurring, FoPayComponent> | OneToOneLink<EmpPayCompNonRecurring, User> | OneToOneLink<EmpPayCompNonRecurring, WfRequest>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<EmpPayCompNonRecurring>;
    /**
     * All key fields of the EmpPayCompNonRecurring entity.
     */
    const _keyFields: Array<Selectable<EmpPayCompNonRecurring>>;
    /**
     * Mapping of all key field names to the respective static field property EmpPayCompNonRecurring.
     */
    const _keys: {
        [keys: string]: Selectable<EmpPayCompNonRecurring>;
    };
}
//# sourceMappingURL=EmpPayCompNonRecurring.d.ts.map
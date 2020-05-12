import { EmpCompensationRequestBuilder } from './EmpCompensationRequestBuilder';
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, CustomField, DateField, Entity, EntityBuilderType, Link, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "EmpCompensation" of service "SFOData".
 */
export declare class EmpCompensation extends Entity implements EmpCompensationType {
    /**
     * Technical entity name for EmpCompensation.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for EmpCompensation.
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
     * End Date.
     * @nullable
     */
    endDate?: Moment;
    /**
     * Event.
     * Maximum length: 45.
     * @nullable
     */
    event?: string;
    /**
     * Event Reason.
     * @nullable
     */
    eventReason?: string;
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
     * operation.
     * @nullable
     */
    operation?: string;
    /**
     * Pay Group.
     * Maximum length: 32.
     * @nullable
     */
    payGroup?: string;
    /**
     * Payroll Id.
     * Maximum length: 64.
     * @nullable
     */
    payrollId?: string;
    /**
     * Sequence Number.
     */
    seqNumber: BigNumber;
    /**
     * Start Date.
     */
    startDate: Moment;
    /**
     * User ID.
     * Maximum length: 100.
     */
    userId: string;
    /**
     * One-to-one navigation property to the [[EmpCompensationCalculated]] entity.
     */
    empCompensationCalculatedNav: EmpCompensationCalculated;
    /**
     * One-to-many navigation property to the [[EmpCompensationGroupSumCalculated]] entity.
     */
    empCompensationGroupSumCalculatedNav: EmpCompensationGroupSumCalculated[];
    /**
     * One-to-many navigation property to the [[EmpPayCompRecurring]] entity.
     */
    empPayCompRecurringNav: EmpPayCompRecurring[];
    /**
     * One-to-one navigation property to the [[EmpEmployment]] entity.
     */
    employmentNav: EmpEmployment;
    /**
     * One-to-one navigation property to the [[PicklistOption]] entity.
     */
    eventNav: PicklistOption;
    /**
     * One-to-one navigation property to the [[FoEventReason]] entity.
     */
    eventReasonNav: FoEventReason;
    /**
     * One-to-one navigation property to the [[FoPayGroup]] entity.
     */
    payGroupNav: FoPayGroup;
    /**
     * One-to-one navigation property to the [[User]] entity.
     */
    userNav: User;
    /**
     * One-to-one navigation property to the [[WfRequest]] entity.
     */
    wfRequestNav: WfRequest;
    /**
     * Returns an entity builder to construct instances `EmpCompensation`.
     * @returns A builder that constructs instances of entity type `EmpCompensation`.
     */
    static builder(): EntityBuilderType<EmpCompensation, EmpCompensationTypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `EmpCompensation` entity type.
     * @returns A `EmpCompensation` request builder.
     */
    static requestBuilder(): EmpCompensationRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `EmpCompensation`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `EmpCompensation`.
     */
    static customField(fieldName: string): CustomField<EmpCompensation>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
import { EmpCompensationCalculated, EmpCompensationCalculatedType } from './EmpCompensationCalculated';
import { EmpCompensationGroupSumCalculated, EmpCompensationGroupSumCalculatedType } from './EmpCompensationGroupSumCalculated';
import { EmpPayCompRecurring, EmpPayCompRecurringType } from './EmpPayCompRecurring';
import { EmpEmployment, EmpEmploymentType } from './EmpEmployment';
import { PicklistOption, PicklistOptionType } from './PicklistOption';
import { FoEventReason, FoEventReasonType } from './FoEventReason';
import { FoPayGroup, FoPayGroupType } from './FoPayGroup';
import { User, UserType } from './User';
import { WfRequest, WfRequestType } from './WfRequest';
export interface EmpCompensationType {
    createdBy?: string;
    createdDateTime?: Moment;
    createdOn?: Moment;
    endDate?: Moment;
    event?: string;
    eventReason?: string;
    lastModifiedBy?: string;
    lastModifiedDateTime?: Moment;
    lastModifiedOn?: Moment;
    operation?: string;
    payGroup?: string;
    payrollId?: string;
    seqNumber: BigNumber;
    startDate: Moment;
    userId: string;
    empCompensationCalculatedNav: EmpCompensationCalculatedType;
    empCompensationGroupSumCalculatedNav: EmpCompensationGroupSumCalculatedType[];
    empPayCompRecurringNav: EmpPayCompRecurringType[];
    employmentNav: EmpEmploymentType;
    eventNav: PicklistOptionType;
    eventReasonNav: FoEventReasonType;
    payGroupNav: FoPayGroupType;
    userNav: UserType;
    wfRequestNav: WfRequestType;
}
export interface EmpCompensationTypeForceMandatory {
    createdBy: string;
    createdDateTime: Moment;
    createdOn: Moment;
    endDate: Moment;
    event: string;
    eventReason: string;
    lastModifiedBy: string;
    lastModifiedDateTime: Moment;
    lastModifiedOn: Moment;
    operation: string;
    payGroup: string;
    payrollId: string;
    seqNumber: BigNumber;
    startDate: Moment;
    userId: string;
    empCompensationCalculatedNav: EmpCompensationCalculatedType;
    empCompensationGroupSumCalculatedNav: EmpCompensationGroupSumCalculatedType[];
    empPayCompRecurringNav: EmpPayCompRecurringType[];
    employmentNav: EmpEmploymentType;
    eventNav: PicklistOptionType;
    eventReasonNav: FoEventReasonType;
    payGroupNav: FoPayGroupType;
    userNav: UserType;
    wfRequestNav: WfRequestType;
}
export declare namespace EmpCompensation {
    /**
     * Static representation of the [[createdBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_BY: StringField<EmpCompensation>;
    /**
     * Static representation of the [[createdDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_DATE_TIME: DateField<EmpCompensation>;
    /**
     * Static representation of the [[createdOn]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_ON: DateField<EmpCompensation>;
    /**
     * Static representation of the [[endDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const END_DATE: DateField<EmpCompensation>;
    /**
     * Static representation of the [[event]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EVENT: StringField<EmpCompensation>;
    /**
     * Static representation of the [[eventReason]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EVENT_REASON: StringField<EmpCompensation>;
    /**
     * Static representation of the [[lastModifiedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_BY: StringField<EmpCompensation>;
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_DATE_TIME: DateField<EmpCompensation>;
    /**
     * Static representation of the [[lastModifiedOn]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_ON: DateField<EmpCompensation>;
    /**
     * Static representation of the [[operation]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const OPERATION: StringField<EmpCompensation>;
    /**
     * Static representation of the [[payGroup]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PAY_GROUP: StringField<EmpCompensation>;
    /**
     * Static representation of the [[payrollId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PAYROLL_ID: StringField<EmpCompensation>;
    /**
     * Static representation of the [[seqNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SEQ_NUMBER: BigNumberField<EmpCompensation>;
    /**
     * Static representation of the [[startDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const START_DATE: DateField<EmpCompensation>;
    /**
     * Static representation of the [[userId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const USER_ID: StringField<EmpCompensation>;
    /**
     * Static representation of the one-to-one navigation property [[empCompensationCalculatedNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EMP_COMPENSATION_CALCULATED_NAV: OneToOneLink<EmpCompensation, EmpCompensationCalculated>;
    /**
     * Static representation of the one-to-many navigation property [[empCompensationGroupSumCalculatedNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EMP_COMPENSATION_GROUP_SUM_CALCULATED_NAV: Link<EmpCompensation, EmpCompensationGroupSumCalculated>;
    /**
     * Static representation of the one-to-many navigation property [[empPayCompRecurringNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EMP_PAY_COMP_RECURRING_NAV: Link<EmpCompensation, EmpPayCompRecurring>;
    /**
     * Static representation of the one-to-one navigation property [[employmentNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EMPLOYMENT_NAV: OneToOneLink<EmpCompensation, EmpEmployment>;
    /**
     * Static representation of the one-to-one navigation property [[eventNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EVENT_NAV: OneToOneLink<EmpCompensation, PicklistOption>;
    /**
     * Static representation of the one-to-one navigation property [[eventReasonNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EVENT_REASON_NAV: OneToOneLink<EmpCompensation, FoEventReason>;
    /**
     * Static representation of the one-to-one navigation property [[payGroupNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PAY_GROUP_NAV: OneToOneLink<EmpCompensation, FoPayGroup>;
    /**
     * Static representation of the one-to-one navigation property [[userNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const USER_NAV: OneToOneLink<EmpCompensation, User>;
    /**
     * Static representation of the one-to-one navigation property [[wfRequestNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const WF_REQUEST_NAV: OneToOneLink<EmpCompensation, WfRequest>;
    /**
     * All fields of the EmpCompensation entity.
     */
    const _allFields: Array<StringField<EmpCompensation> | DateField<EmpCompensation> | BigNumberField<EmpCompensation> | OneToOneLink<EmpCompensation, EmpCompensationCalculated> | Link<EmpCompensation, EmpCompensationGroupSumCalculated> | Link<EmpCompensation, EmpPayCompRecurring> | OneToOneLink<EmpCompensation, EmpEmployment> | OneToOneLink<EmpCompensation, PicklistOption> | OneToOneLink<EmpCompensation, FoEventReason> | OneToOneLink<EmpCompensation, FoPayGroup> | OneToOneLink<EmpCompensation, User> | OneToOneLink<EmpCompensation, WfRequest>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<EmpCompensation>;
    /**
     * All key fields of the EmpCompensation entity.
     */
    const _keyFields: Array<Selectable<EmpCompensation>>;
    /**
     * Mapping of all key field names to the respective static field property EmpCompensation.
     */
    const _keys: {
        [keys: string]: Selectable<EmpCompensation>;
    };
}
//# sourceMappingURL=EmpCompensation.d.ts.map
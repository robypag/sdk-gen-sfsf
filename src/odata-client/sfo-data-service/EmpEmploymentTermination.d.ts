import { EmpEmploymentTerminationRequestBuilder } from './EmpEmploymentTerminationRequestBuilder';
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, CustomField, DateField, Entity, EntityBuilderType, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "EmpEmploymentTermination" of service "SFOData".
 */
export declare class EmpEmploymentTermination extends Entity implements EmpEmploymentTerminationType {
    /**
     * Technical entity name for EmpEmploymentTermination.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for EmpEmploymentTermination.
     */
    static _serviceName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
    /**
     * Attachment.
     * Maximum length: 128.
     * @nullable
     */
    attachmentId?: string;
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
     * Termination Date.
     */
    endDate: Moment;
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
     * newMainEmploymentId.
     * @nullable
     */
    newMainEmploymentId?: BigNumber;
    /**
     * Payroll End Date.
     * @nullable
     */
    payrollEndDate?: Moment;
    /**
     * Person ID External.
     * Maximum length: 100.
     */
    personIdExternal: string;
    /**
     * User ID.
     * Maximum length: 100.
     */
    userId: string;
    /**
     * One-to-one navigation property to the [[EmpEmployment]] entity.
     */
    employmentNav: EmpEmployment;
    /**
     * One-to-one navigation property to the [[EmpJob]] entity.
     */
    jobInfoNav: EmpJob;
    /**
     * One-to-one navigation property to the [[PerPerson]] entity.
     */
    personNav: PerPerson;
    /**
     * One-to-one navigation property to the [[User]] entity.
     */
    userNav: User;
    /**
     * Returns an entity builder to construct instances `EmpEmploymentTermination`.
     * @returns A builder that constructs instances of entity type `EmpEmploymentTermination`.
     */
    static builder(): EntityBuilderType<EmpEmploymentTermination, EmpEmploymentTerminationTypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `EmpEmploymentTermination` entity type.
     * @returns A `EmpEmploymentTermination` request builder.
     */
    static requestBuilder(): EmpEmploymentTerminationRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `EmpEmploymentTermination`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `EmpEmploymentTermination`.
     */
    static customField(fieldName: string): CustomField<EmpEmploymentTermination>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
import { EmpEmployment, EmpEmploymentType } from './EmpEmployment';
import { EmpJob, EmpJobType } from './EmpJob';
import { PerPerson, PerPersonType } from './PerPerson';
import { User, UserType } from './User';
export interface EmpEmploymentTerminationType {
    attachmentId?: string;
    createdBy?: string;
    createdDateTime?: Moment;
    createdOn?: Moment;
    endDate: Moment;
    eventReason?: string;
    lastModifiedBy?: string;
    lastModifiedDateTime?: Moment;
    lastModifiedOn?: Moment;
    newMainEmploymentId?: BigNumber;
    payrollEndDate?: Moment;
    personIdExternal: string;
    userId: string;
    employmentNav: EmpEmploymentType;
    jobInfoNav: EmpJobType;
    personNav: PerPersonType;
    userNav: UserType;
}
export interface EmpEmploymentTerminationTypeForceMandatory {
    attachmentId: string;
    createdBy: string;
    createdDateTime: Moment;
    createdOn: Moment;
    endDate: Moment;
    eventReason: string;
    lastModifiedBy: string;
    lastModifiedDateTime: Moment;
    lastModifiedOn: Moment;
    newMainEmploymentId: BigNumber;
    payrollEndDate: Moment;
    personIdExternal: string;
    userId: string;
    employmentNav: EmpEmploymentType;
    jobInfoNav: EmpJobType;
    personNav: PerPersonType;
    userNav: UserType;
}
export declare namespace EmpEmploymentTermination {
    /**
     * Static representation of the [[attachmentId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ATTACHMENT_ID: StringField<EmpEmploymentTermination>;
    /**
     * Static representation of the [[createdBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_BY: StringField<EmpEmploymentTermination>;
    /**
     * Static representation of the [[createdDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_DATE_TIME: DateField<EmpEmploymentTermination>;
    /**
     * Static representation of the [[createdOn]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_ON: DateField<EmpEmploymentTermination>;
    /**
     * Static representation of the [[endDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const END_DATE: DateField<EmpEmploymentTermination>;
    /**
     * Static representation of the [[eventReason]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EVENT_REASON: StringField<EmpEmploymentTermination>;
    /**
     * Static representation of the [[lastModifiedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_BY: StringField<EmpEmploymentTermination>;
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_DATE_TIME: DateField<EmpEmploymentTermination>;
    /**
     * Static representation of the [[lastModifiedOn]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_ON: DateField<EmpEmploymentTermination>;
    /**
     * Static representation of the [[newMainEmploymentId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const NEW_MAIN_EMPLOYMENT_ID: BigNumberField<EmpEmploymentTermination>;
    /**
     * Static representation of the [[payrollEndDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PAYROLL_END_DATE: DateField<EmpEmploymentTermination>;
    /**
     * Static representation of the [[personIdExternal]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PERSON_ID_EXTERNAL: StringField<EmpEmploymentTermination>;
    /**
     * Static representation of the [[userId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const USER_ID: StringField<EmpEmploymentTermination>;
    /**
     * Static representation of the one-to-one navigation property [[employmentNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EMPLOYMENT_NAV: OneToOneLink<EmpEmploymentTermination, EmpEmployment>;
    /**
     * Static representation of the one-to-one navigation property [[jobInfoNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const JOB_INFO_NAV: OneToOneLink<EmpEmploymentTermination, EmpJob>;
    /**
     * Static representation of the one-to-one navigation property [[personNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PERSON_NAV: OneToOneLink<EmpEmploymentTermination, PerPerson>;
    /**
     * Static representation of the one-to-one navigation property [[userNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const USER_NAV: OneToOneLink<EmpEmploymentTermination, User>;
    /**
     * All fields of the EmpEmploymentTermination entity.
     */
    const _allFields: Array<StringField<EmpEmploymentTermination> | DateField<EmpEmploymentTermination> | BigNumberField<EmpEmploymentTermination> | OneToOneLink<EmpEmploymentTermination, EmpEmployment> | OneToOneLink<EmpEmploymentTermination, EmpJob> | OneToOneLink<EmpEmploymentTermination, PerPerson> | OneToOneLink<EmpEmploymentTermination, User>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<EmpEmploymentTermination>;
    /**
     * All key fields of the EmpEmploymentTermination entity.
     */
    const _keyFields: Array<Selectable<EmpEmploymentTermination>>;
    /**
     * Mapping of all key field names to the respective static field property EmpEmploymentTermination.
     */
    const _keys: {
        [keys: string]: Selectable<EmpEmploymentTermination>;
    };
}
//# sourceMappingURL=EmpEmploymentTermination.d.ts.map
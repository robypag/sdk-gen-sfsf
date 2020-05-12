import { EmpGlobalAssignmentRequestBuilder } from './EmpGlobalAssignmentRequestBuilder';
import { Moment } from 'moment';
import { AllFields, CustomField, DateField, Entity, EntityBuilderType, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "EmpGlobalAssignment" of service "SFOData".
 */
export declare class EmpGlobalAssignment extends Entity implements EmpGlobalAssignmentType {
    /**
     * Technical entity name for EmpGlobalAssignment.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for EmpGlobalAssignment.
     */
    static _serviceName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
    /**
     * assignmentClass.
     * @nullable
     */
    assignmentClass?: string;
    /**
     * Assignment Type.
     * @nullable
     */
    assignmentType?: string;
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
     * Actual End Date.
     * @nullable
     */
    endDate?: Moment;
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
     * payrollEndDate.
     * @nullable
     */
    payrollEndDate?: Moment;
    /**
     * Person ID External.
     * Maximum length: 100.
     */
    personIdExternal: string;
    /**
     * Planned End Date.
     * @nullable
     */
    plannedEndDate?: Moment;
    /**
     * Actual Start Date.
     * @nullable
     */
    startDate?: Moment;
    /**
     * User ID.
     * Maximum length: 100.
     */
    userId: string;
    /**
     * One-to-one navigation property to the [[PicklistOption]] entity.
     */
    assignmentTypeNav: PicklistOption;
    /**
     * One-to-one navigation property to the [[EmpEmployment]] entity.
     */
    employmentNav: EmpEmployment;
    /**
     * One-to-one navigation property to the [[User]] entity.
     */
    userNav: User;
    /**
     * Returns an entity builder to construct instances `EmpGlobalAssignment`.
     * @returns A builder that constructs instances of entity type `EmpGlobalAssignment`.
     */
    static builder(): EntityBuilderType<EmpGlobalAssignment, EmpGlobalAssignmentTypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `EmpGlobalAssignment` entity type.
     * @returns A `EmpGlobalAssignment` request builder.
     */
    static requestBuilder(): EmpGlobalAssignmentRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `EmpGlobalAssignment`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `EmpGlobalAssignment`.
     */
    static customField(fieldName: string): CustomField<EmpGlobalAssignment>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
import { PicklistOption, PicklistOptionType } from './PicklistOption';
import { EmpEmployment, EmpEmploymentType } from './EmpEmployment';
import { User, UserType } from './User';
export interface EmpGlobalAssignmentType {
    assignmentClass?: string;
    assignmentType?: string;
    createdBy?: string;
    createdDateTime?: Moment;
    createdOn?: Moment;
    endDate?: Moment;
    lastModifiedBy?: string;
    lastModifiedDateTime?: Moment;
    lastModifiedOn?: Moment;
    payrollEndDate?: Moment;
    personIdExternal: string;
    plannedEndDate?: Moment;
    startDate?: Moment;
    userId: string;
    assignmentTypeNav: PicklistOptionType;
    employmentNav: EmpEmploymentType;
    userNav: UserType;
}
export interface EmpGlobalAssignmentTypeForceMandatory {
    assignmentClass: string;
    assignmentType: string;
    createdBy: string;
    createdDateTime: Moment;
    createdOn: Moment;
    endDate: Moment;
    lastModifiedBy: string;
    lastModifiedDateTime: Moment;
    lastModifiedOn: Moment;
    payrollEndDate: Moment;
    personIdExternal: string;
    plannedEndDate: Moment;
    startDate: Moment;
    userId: string;
    assignmentTypeNav: PicklistOptionType;
    employmentNav: EmpEmploymentType;
    userNav: UserType;
}
export declare namespace EmpGlobalAssignment {
    /**
     * Static representation of the [[assignmentClass]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ASSIGNMENT_CLASS: StringField<EmpGlobalAssignment>;
    /**
     * Static representation of the [[assignmentType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ASSIGNMENT_TYPE: StringField<EmpGlobalAssignment>;
    /**
     * Static representation of the [[createdBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_BY: StringField<EmpGlobalAssignment>;
    /**
     * Static representation of the [[createdDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_DATE_TIME: DateField<EmpGlobalAssignment>;
    /**
     * Static representation of the [[createdOn]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_ON: DateField<EmpGlobalAssignment>;
    /**
     * Static representation of the [[endDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const END_DATE: DateField<EmpGlobalAssignment>;
    /**
     * Static representation of the [[lastModifiedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_BY: StringField<EmpGlobalAssignment>;
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_DATE_TIME: DateField<EmpGlobalAssignment>;
    /**
     * Static representation of the [[lastModifiedOn]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_ON: DateField<EmpGlobalAssignment>;
    /**
     * Static representation of the [[payrollEndDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PAYROLL_END_DATE: DateField<EmpGlobalAssignment>;
    /**
     * Static representation of the [[personIdExternal]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PERSON_ID_EXTERNAL: StringField<EmpGlobalAssignment>;
    /**
     * Static representation of the [[plannedEndDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PLANNED_END_DATE: DateField<EmpGlobalAssignment>;
    /**
     * Static representation of the [[startDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const START_DATE: DateField<EmpGlobalAssignment>;
    /**
     * Static representation of the [[userId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const USER_ID: StringField<EmpGlobalAssignment>;
    /**
     * Static representation of the one-to-one navigation property [[assignmentTypeNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ASSIGNMENT_TYPE_NAV: OneToOneLink<EmpGlobalAssignment, PicklistOption>;
    /**
     * Static representation of the one-to-one navigation property [[employmentNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EMPLOYMENT_NAV: OneToOneLink<EmpGlobalAssignment, EmpEmployment>;
    /**
     * Static representation of the one-to-one navigation property [[userNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const USER_NAV: OneToOneLink<EmpGlobalAssignment, User>;
    /**
     * All fields of the EmpGlobalAssignment entity.
     */
    const _allFields: Array<StringField<EmpGlobalAssignment> | DateField<EmpGlobalAssignment> | OneToOneLink<EmpGlobalAssignment, PicklistOption> | OneToOneLink<EmpGlobalAssignment, EmpEmployment> | OneToOneLink<EmpGlobalAssignment, User>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<EmpGlobalAssignment>;
    /**
     * All key fields of the EmpGlobalAssignment entity.
     */
    const _keyFields: Array<Selectable<EmpGlobalAssignment>>;
    /**
     * Mapping of all key field names to the respective static field property EmpGlobalAssignment.
     */
    const _keys: {
        [keys: string]: Selectable<EmpGlobalAssignment>;
    };
}
//# sourceMappingURL=EmpGlobalAssignment.d.ts.map
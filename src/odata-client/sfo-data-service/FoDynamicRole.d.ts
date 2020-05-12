import { FoDynamicRoleRequestBuilder } from './FoDynamicRoleRequestBuilder';
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, CustomField, DateField, Entity, EntityBuilderType, Link, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "FODynamicRole" of service "SFOData".
 */
export declare class FoDynamicRole extends Entity implements FoDynamicRoleType {
    /**
     * Technical entity name for FoDynamicRole.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for FoDynamicRole.
     */
    static _serviceName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
    /**
     * Business Unit.
     * @nullable
     */
    businessUnit?: string;
    /**
     * Legal Entity.
     * @nullable
     */
    company?: string;
    /**
     * Cost Center.
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
     * Department.
     * @nullable
     */
    department?: string;
    /**
     * Description.
     * Maximum length: 128.
     * @nullable
     */
    description?: string;
    /**
     * division.
     * @nullable
     */
    division?: string;
    /**
     * dynamicGroup.
     * @nullable
     */
    dynamicGroup?: string;
    /**
     * Dynamic Role Assignment Id.
     */
    dynamicRoleAssignmentId: BigNumber;
    /**
     * eventReason.
     * @nullable
     */
    eventReason?: string;
    /**
     * Dynamic Role ID.
     * Maximum length: 32.
     */
    externalCode: string;
    /**
     * Job Classification.
     * @nullable
     */
    jobCode?: string;
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
     * Location.
     * @nullable
     */
    location?: string;
    /**
     * Dynamic Role.
     * Maximum length: 32.
     * @nullable
     */
    name?: string;
    /**
     * Pay Grade.
     * @nullable
     */
    payGrade?: string;
    /**
     * Pay Group.
     * @nullable
     */
    payGroup?: string;
    /**
     * Approver.
     * @nullable
     */
    person?: string;
    /**
     * position.
     * @nullable
     */
    position?: string;
    /**
     * Approver Type.
     * @nullable
     */
    resolverType?: string;
    /**
     * One-to-many navigation property to the [[FoBusinessUnit]] entity.
     */
    businessUnitNav: FoBusinessUnit[];
    /**
     * One-to-many navigation property to the [[FoCompany]] entity.
     */
    companyNav: FoCompany[];
    /**
     * One-to-many navigation property to the [[FoCostCenter]] entity.
     */
    costCenterNav: FoCostCenter[];
    /**
     * One-to-many navigation property to the [[FoDepartment]] entity.
     */
    departmentNav: FoDepartment[];
    /**
     * One-to-one navigation property to the [[FoTranslation]] entity.
     */
    descriptionTranslationNav: FoTranslation;
    /**
     * One-to-many navigation property to the [[FoDivision]] entity.
     */
    divisionNav: FoDivision[];
    /**
     * One-to-one navigation property to the [[DynamicGroup]] entity.
     */
    dynamicGroupNav: DynamicGroup;
    /**
     * One-to-many navigation property to the [[FoEventReason]] entity.
     */
    eventReasonNav: FoEventReason[];
    /**
     * One-to-many navigation property to the [[FoJobCode]] entity.
     */
    jobCodeNav: FoJobCode[];
    /**
     * One-to-many navigation property to the [[FoLocation]] entity.
     */
    locationNav: FoLocation[];
    /**
     * One-to-one navigation property to the [[FoTranslation]] entity.
     */
    nameTranslationNav: FoTranslation;
    /**
     * One-to-many navigation property to the [[FoPayGrade]] entity.
     */
    payGradeNav: FoPayGrade[];
    /**
     * One-to-many navigation property to the [[FoPayGroup]] entity.
     */
    payGroupNav: FoPayGroup[];
    /**
     * One-to-one navigation property to the [[User]] entity.
     */
    personNav: User;
    /**
     * One-to-many navigation property to the [[Position]] entity.
     */
    positionNav: Position[];
    /**
     * Returns an entity builder to construct instances `FoDynamicRole`.
     * @returns A builder that constructs instances of entity type `FoDynamicRole`.
     */
    static builder(): EntityBuilderType<FoDynamicRole, FoDynamicRoleTypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `FoDynamicRole` entity type.
     * @returns A `FoDynamicRole` request builder.
     */
    static requestBuilder(): FoDynamicRoleRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `FoDynamicRole`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `FoDynamicRole`.
     */
    static customField(fieldName: string): CustomField<FoDynamicRole>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
import { FoBusinessUnit, FoBusinessUnitType } from './FoBusinessUnit';
import { FoCompany, FoCompanyType } from './FoCompany';
import { FoCostCenter, FoCostCenterType } from './FoCostCenter';
import { FoDepartment, FoDepartmentType } from './FoDepartment';
import { FoTranslation, FoTranslationType } from './FoTranslation';
import { FoDivision, FoDivisionType } from './FoDivision';
import { DynamicGroup, DynamicGroupType } from './DynamicGroup';
import { FoEventReason, FoEventReasonType } from './FoEventReason';
import { FoJobCode, FoJobCodeType } from './FoJobCode';
import { FoLocation, FoLocationType } from './FoLocation';
import { FoPayGrade, FoPayGradeType } from './FoPayGrade';
import { FoPayGroup, FoPayGroupType } from './FoPayGroup';
import { User, UserType } from './User';
import { Position, PositionType } from './Position';
export interface FoDynamicRoleType {
    businessUnit?: string;
    company?: string;
    costCenter?: string;
    createdBy?: string;
    createdDateTime?: Moment;
    createdOn?: Moment;
    department?: string;
    description?: string;
    division?: string;
    dynamicGroup?: string;
    dynamicRoleAssignmentId: BigNumber;
    eventReason?: string;
    externalCode: string;
    jobCode?: string;
    lastModifiedBy?: string;
    lastModifiedDateTime?: Moment;
    lastModifiedOn?: Moment;
    location?: string;
    name?: string;
    payGrade?: string;
    payGroup?: string;
    person?: string;
    position?: string;
    resolverType?: string;
    businessUnitNav: FoBusinessUnitType[];
    companyNav: FoCompanyType[];
    costCenterNav: FoCostCenterType[];
    departmentNav: FoDepartmentType[];
    descriptionTranslationNav: FoTranslationType;
    divisionNav: FoDivisionType[];
    dynamicGroupNav: DynamicGroupType;
    eventReasonNav: FoEventReasonType[];
    jobCodeNav: FoJobCodeType[];
    locationNav: FoLocationType[];
    nameTranslationNav: FoTranslationType;
    payGradeNav: FoPayGradeType[];
    payGroupNav: FoPayGroupType[];
    personNav: UserType;
    positionNav: PositionType[];
}
export interface FoDynamicRoleTypeForceMandatory {
    businessUnit: string;
    company: string;
    costCenter: string;
    createdBy: string;
    createdDateTime: Moment;
    createdOn: Moment;
    department: string;
    description: string;
    division: string;
    dynamicGroup: string;
    dynamicRoleAssignmentId: BigNumber;
    eventReason: string;
    externalCode: string;
    jobCode: string;
    lastModifiedBy: string;
    lastModifiedDateTime: Moment;
    lastModifiedOn: Moment;
    location: string;
    name: string;
    payGrade: string;
    payGroup: string;
    person: string;
    position: string;
    resolverType: string;
    businessUnitNav: FoBusinessUnitType[];
    companyNav: FoCompanyType[];
    costCenterNav: FoCostCenterType[];
    departmentNav: FoDepartmentType[];
    descriptionTranslationNav: FoTranslationType;
    divisionNav: FoDivisionType[];
    dynamicGroupNav: DynamicGroupType;
    eventReasonNav: FoEventReasonType[];
    jobCodeNav: FoJobCodeType[];
    locationNav: FoLocationType[];
    nameTranslationNav: FoTranslationType;
    payGradeNav: FoPayGradeType[];
    payGroupNav: FoPayGroupType[];
    personNav: UserType;
    positionNav: PositionType[];
}
export declare namespace FoDynamicRole {
    /**
     * Static representation of the [[businessUnit]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BUSINESS_UNIT: StringField<FoDynamicRole>;
    /**
     * Static representation of the [[company]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const COMPANY: StringField<FoDynamicRole>;
    /**
     * Static representation of the [[costCenter]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const COST_CENTER: StringField<FoDynamicRole>;
    /**
     * Static representation of the [[createdBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_BY: StringField<FoDynamicRole>;
    /**
     * Static representation of the [[createdDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_DATE_TIME: DateField<FoDynamicRole>;
    /**
     * Static representation of the [[createdOn]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_ON: DateField<FoDynamicRole>;
    /**
     * Static representation of the [[department]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DEPARTMENT: StringField<FoDynamicRole>;
    /**
     * Static representation of the [[description]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DESCRIPTION: StringField<FoDynamicRole>;
    /**
     * Static representation of the [[division]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DIVISION: StringField<FoDynamicRole>;
    /**
     * Static representation of the [[dynamicGroup]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DYNAMIC_GROUP: StringField<FoDynamicRole>;
    /**
     * Static representation of the [[dynamicRoleAssignmentId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DYNAMIC_ROLE_ASSIGNMENT_ID: BigNumberField<FoDynamicRole>;
    /**
     * Static representation of the [[eventReason]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EVENT_REASON: StringField<FoDynamicRole>;
    /**
     * Static representation of the [[externalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXTERNAL_CODE: StringField<FoDynamicRole>;
    /**
     * Static representation of the [[jobCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const JOB_CODE: StringField<FoDynamicRole>;
    /**
     * Static representation of the [[lastModifiedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_BY: StringField<FoDynamicRole>;
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_DATE_TIME: DateField<FoDynamicRole>;
    /**
     * Static representation of the [[lastModifiedOn]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_ON: DateField<FoDynamicRole>;
    /**
     * Static representation of the [[location]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LOCATION: StringField<FoDynamicRole>;
    /**
     * Static representation of the [[name]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const NAME: StringField<FoDynamicRole>;
    /**
     * Static representation of the [[payGrade]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PAY_GRADE: StringField<FoDynamicRole>;
    /**
     * Static representation of the [[payGroup]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PAY_GROUP: StringField<FoDynamicRole>;
    /**
     * Static representation of the [[person]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PERSON: StringField<FoDynamicRole>;
    /**
     * Static representation of the [[position]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const POSITION: StringField<FoDynamicRole>;
    /**
     * Static representation of the [[resolverType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const RESOLVER_TYPE: StringField<FoDynamicRole>;
    /**
     * Static representation of the one-to-many navigation property [[businessUnitNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BUSINESS_UNIT_NAV: Link<FoDynamicRole, FoBusinessUnit>;
    /**
     * Static representation of the one-to-many navigation property [[companyNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const COMPANY_NAV: Link<FoDynamicRole, FoCompany>;
    /**
     * Static representation of the one-to-many navigation property [[costCenterNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const COST_CENTER_NAV: Link<FoDynamicRole, FoCostCenter>;
    /**
     * Static representation of the one-to-many navigation property [[departmentNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DEPARTMENT_NAV: Link<FoDynamicRole, FoDepartment>;
    /**
     * Static representation of the one-to-one navigation property [[descriptionTranslationNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DESCRIPTION_TRANSLATION_NAV: OneToOneLink<FoDynamicRole, FoTranslation>;
    /**
     * Static representation of the one-to-many navigation property [[divisionNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DIVISION_NAV: Link<FoDynamicRole, FoDivision>;
    /**
     * Static representation of the one-to-one navigation property [[dynamicGroupNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DYNAMIC_GROUP_NAV: OneToOneLink<FoDynamicRole, DynamicGroup>;
    /**
     * Static representation of the one-to-many navigation property [[eventReasonNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EVENT_REASON_NAV: Link<FoDynamicRole, FoEventReason>;
    /**
     * Static representation of the one-to-many navigation property [[jobCodeNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const JOB_CODE_NAV: Link<FoDynamicRole, FoJobCode>;
    /**
     * Static representation of the one-to-many navigation property [[locationNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LOCATION_NAV: Link<FoDynamicRole, FoLocation>;
    /**
     * Static representation of the one-to-one navigation property [[nameTranslationNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const NAME_TRANSLATION_NAV: OneToOneLink<FoDynamicRole, FoTranslation>;
    /**
     * Static representation of the one-to-many navigation property [[payGradeNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PAY_GRADE_NAV: Link<FoDynamicRole, FoPayGrade>;
    /**
     * Static representation of the one-to-many navigation property [[payGroupNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PAY_GROUP_NAV: Link<FoDynamicRole, FoPayGroup>;
    /**
     * Static representation of the one-to-one navigation property [[personNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PERSON_NAV: OneToOneLink<FoDynamicRole, User>;
    /**
     * Static representation of the one-to-many navigation property [[positionNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const POSITION_NAV: Link<FoDynamicRole, Position>;
    /**
     * All fields of the FoDynamicRole entity.
     */
    const _allFields: Array<StringField<FoDynamicRole> | DateField<FoDynamicRole> | BigNumberField<FoDynamicRole> | Link<FoDynamicRole, FoBusinessUnit> | Link<FoDynamicRole, FoCompany> | Link<FoDynamicRole, FoCostCenter> | Link<FoDynamicRole, FoDepartment> | OneToOneLink<FoDynamicRole, FoTranslation> | Link<FoDynamicRole, FoDivision> | OneToOneLink<FoDynamicRole, DynamicGroup> | Link<FoDynamicRole, FoEventReason> | Link<FoDynamicRole, FoJobCode> | Link<FoDynamicRole, FoLocation> | Link<FoDynamicRole, FoPayGrade> | Link<FoDynamicRole, FoPayGroup> | OneToOneLink<FoDynamicRole, User> | Link<FoDynamicRole, Position>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<FoDynamicRole>;
    /**
     * All key fields of the FoDynamicRole entity.
     */
    const _keyFields: Array<Selectable<FoDynamicRole>>;
    /**
     * Mapping of all key field names to the respective static field property FoDynamicRole.
     */
    const _keys: {
        [keys: string]: Selectable<FoDynamicRole>;
    };
}
//# sourceMappingURL=FoDynamicRole.d.ts.map
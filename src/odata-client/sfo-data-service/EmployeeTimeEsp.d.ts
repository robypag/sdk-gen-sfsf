import { EmployeeTimeEspRequestBuilder } from './EmployeeTimeEspRequestBuilder';
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, BooleanField, CustomField, DateField, Entity, EntityBuilderType, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "EmployeeTimeESP" of service "SFOData".
 */
export declare class EmployeeTimeEsp extends Entity implements EmployeeTimeEspType {
    /**
     * Technical entity name for EmployeeTimeEsp.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for EmployeeTimeEsp.
     */
    static _serviceName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
    /**
     * Employee Time_External Code.
     * Maximum length: 128.
     */
    employeeTimeExternalCode: string;
    /**
     * createdBy.
     * Maximum length: 255.
     * @nullable
     */
    createdBy?: string;
    /**
     * createdDate.
     * @nullable
     */
    createdDateTime?: Moment;
    /**
     * externalCode.
     */
    externalCode: BigNumber;
    /**
     * Identical Sicknesses.
     * Maximum length: 128.
     * @nullable
     */
    identicalSicknessGroup?: string;
    /**
     * lastModifiedBy.
     * Maximum length: 255.
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
     * Original Absence.
     * @nullable
     */
    originalAbsence?: boolean;
    /**
     * One-to-one navigation property to the [[User]] entity.
     */
    createdByNav: User;
    /**
     * One-to-one navigation property to the [[EmployeeTimeGroup]] entity.
     */
    identicalSicknessGroupNav: EmployeeTimeGroup;
    /**
     * One-to-one navigation property to the [[User]] entity.
     */
    lastModifiedByNav: User;
    /**
     * One-to-one navigation property to the [[MdfEnumValue]] entity.
     */
    mdfSystemRecordStatusNav: MdfEnumValue;
    /**
     * Returns an entity builder to construct instances `EmployeeTimeEsp`.
     * @returns A builder that constructs instances of entity type `EmployeeTimeEsp`.
     */
    static builder(): EntityBuilderType<EmployeeTimeEsp, EmployeeTimeEspTypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `EmployeeTimeEsp` entity type.
     * @returns A `EmployeeTimeEsp` request builder.
     */
    static requestBuilder(): EmployeeTimeEspRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `EmployeeTimeEsp`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `EmployeeTimeEsp`.
     */
    static customField(fieldName: string): CustomField<EmployeeTimeEsp>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
import { User, UserType } from './User';
import { EmployeeTimeGroup, EmployeeTimeGroupType } from './EmployeeTimeGroup';
import { MdfEnumValue, MdfEnumValueType } from './MdfEnumValue';
export interface EmployeeTimeEspType {
    employeeTimeExternalCode: string;
    createdBy?: string;
    createdDateTime?: Moment;
    externalCode: BigNumber;
    identicalSicknessGroup?: string;
    lastModifiedBy?: string;
    lastModifiedDateTime?: Moment;
    mdfSystemRecordStatus?: string;
    originalAbsence?: boolean;
    createdByNav: UserType;
    identicalSicknessGroupNav: EmployeeTimeGroupType;
    lastModifiedByNav: UserType;
    mdfSystemRecordStatusNav: MdfEnumValueType;
}
export interface EmployeeTimeEspTypeForceMandatory {
    employeeTimeExternalCode: string;
    createdBy: string;
    createdDateTime: Moment;
    externalCode: BigNumber;
    identicalSicknessGroup: string;
    lastModifiedBy: string;
    lastModifiedDateTime: Moment;
    mdfSystemRecordStatus: string;
    originalAbsence: boolean;
    createdByNav: UserType;
    identicalSicknessGroupNav: EmployeeTimeGroupType;
    lastModifiedByNav: UserType;
    mdfSystemRecordStatusNav: MdfEnumValueType;
}
export declare namespace EmployeeTimeEsp {
    /**
     * Static representation of the [[employeeTimeExternalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EMPLOYEE_TIME_EXTERNAL_CODE: StringField<EmployeeTimeEsp>;
    /**
     * Static representation of the [[createdBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_BY: StringField<EmployeeTimeEsp>;
    /**
     * Static representation of the [[createdDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_DATE_TIME: DateField<EmployeeTimeEsp>;
    /**
     * Static representation of the [[externalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXTERNAL_CODE: BigNumberField<EmployeeTimeEsp>;
    /**
     * Static representation of the [[identicalSicknessGroup]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const IDENTICAL_SICKNESS_GROUP: StringField<EmployeeTimeEsp>;
    /**
     * Static representation of the [[lastModifiedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_BY: StringField<EmployeeTimeEsp>;
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_DATE_TIME: DateField<EmployeeTimeEsp>;
    /**
     * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MDF_SYSTEM_RECORD_STATUS: StringField<EmployeeTimeEsp>;
    /**
     * Static representation of the [[originalAbsence]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ORIGINAL_ABSENCE: BooleanField<EmployeeTimeEsp>;
    /**
     * Static representation of the one-to-one navigation property [[createdByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_BY_NAV: OneToOneLink<EmployeeTimeEsp, User>;
    /**
     * Static representation of the one-to-one navigation property [[identicalSicknessGroupNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const IDENTICAL_SICKNESS_GROUP_NAV: OneToOneLink<EmployeeTimeEsp, EmployeeTimeGroup>;
    /**
     * Static representation of the one-to-one navigation property [[lastModifiedByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_BY_NAV: OneToOneLink<EmployeeTimeEsp, User>;
    /**
     * Static representation of the one-to-one navigation property [[mdfSystemRecordStatusNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MDF_SYSTEM_RECORD_STATUS_NAV: OneToOneLink<EmployeeTimeEsp, MdfEnumValue>;
    /**
     * All fields of the EmployeeTimeEsp entity.
     */
    const _allFields: Array<StringField<EmployeeTimeEsp> | DateField<EmployeeTimeEsp> | BigNumberField<EmployeeTimeEsp> | BooleanField<EmployeeTimeEsp> | OneToOneLink<EmployeeTimeEsp, User> | OneToOneLink<EmployeeTimeEsp, EmployeeTimeGroup> | OneToOneLink<EmployeeTimeEsp, MdfEnumValue>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<EmployeeTimeEsp>;
    /**
     * All key fields of the EmployeeTimeEsp entity.
     */
    const _keyFields: Array<Selectable<EmployeeTimeEsp>>;
    /**
     * Mapping of all key field names to the respective static field property EmployeeTimeEsp.
     */
    const _keys: {
        [keys: string]: Selectable<EmployeeTimeEsp>;
    };
}
//# sourceMappingURL=EmployeeTimeEsp.d.ts.map
import { EmployeeTimeDeuRequestBuilder } from './EmployeeTimeDeuRequestBuilder';
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, CustomField, DateField, Entity, EntityBuilderType, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "EmployeeTimeDEU" of service "SFOData".
 */
export declare class EmployeeTimeDeu extends Entity implements EmployeeTimeDeuType {
    /**
     * Technical entity name for EmployeeTimeDeu.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for EmployeeTimeDeu.
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
     * Days Credited for Continued Pay.
     * @nullable
     */
    continuedPayCreditedDays?: BigNumber;
    /**
     * End of Continued Pay.
     * @nullable
     */
    continuedPayEndDate?: Moment;
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
     * Overlapping Sicknesses.
     * Maximum length: 128.
     * @nullable
     */
    overlappingSicknessGroup?: string;
    /**
     * End of Sick Pay Supplement.
     * @nullable
     */
    paySupplementEndDate?: Moment;
    /**
     * Start Date of Sick Pay Supplement.
     * @nullable
     */
    paySupplementStartDate?: Moment;
    /**
     * Certified Start Date of Sickness.
     * @nullable
     */
    sicknessCertificateStartDate?: Moment;
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
     * One-to-one navigation property to the [[EmployeeTimeGroup]] entity.
     */
    overlappingSicknessGroupNav: EmployeeTimeGroup;
    /**
     * Returns an entity builder to construct instances `EmployeeTimeDeu`.
     * @returns A builder that constructs instances of entity type `EmployeeTimeDeu`.
     */
    static builder(): EntityBuilderType<EmployeeTimeDeu, EmployeeTimeDeuTypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `EmployeeTimeDeu` entity type.
     * @returns A `EmployeeTimeDeu` request builder.
     */
    static requestBuilder(): EmployeeTimeDeuRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `EmployeeTimeDeu`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `EmployeeTimeDeu`.
     */
    static customField(fieldName: string): CustomField<EmployeeTimeDeu>;
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
export interface EmployeeTimeDeuType {
    employeeTimeExternalCode: string;
    continuedPayCreditedDays?: BigNumber;
    continuedPayEndDate?: Moment;
    createdBy?: string;
    createdDateTime?: Moment;
    externalCode: BigNumber;
    identicalSicknessGroup?: string;
    lastModifiedBy?: string;
    lastModifiedDateTime?: Moment;
    mdfSystemRecordStatus?: string;
    overlappingSicknessGroup?: string;
    paySupplementEndDate?: Moment;
    paySupplementStartDate?: Moment;
    sicknessCertificateStartDate?: Moment;
    createdByNav: UserType;
    identicalSicknessGroupNav: EmployeeTimeGroupType;
    lastModifiedByNav: UserType;
    mdfSystemRecordStatusNav: MdfEnumValueType;
    overlappingSicknessGroupNav: EmployeeTimeGroupType;
}
export interface EmployeeTimeDeuTypeForceMandatory {
    employeeTimeExternalCode: string;
    continuedPayCreditedDays: BigNumber;
    continuedPayEndDate: Moment;
    createdBy: string;
    createdDateTime: Moment;
    externalCode: BigNumber;
    identicalSicknessGroup: string;
    lastModifiedBy: string;
    lastModifiedDateTime: Moment;
    mdfSystemRecordStatus: string;
    overlappingSicknessGroup: string;
    paySupplementEndDate: Moment;
    paySupplementStartDate: Moment;
    sicknessCertificateStartDate: Moment;
    createdByNav: UserType;
    identicalSicknessGroupNav: EmployeeTimeGroupType;
    lastModifiedByNav: UserType;
    mdfSystemRecordStatusNav: MdfEnumValueType;
    overlappingSicknessGroupNav: EmployeeTimeGroupType;
}
export declare namespace EmployeeTimeDeu {
    /**
     * Static representation of the [[employeeTimeExternalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EMPLOYEE_TIME_EXTERNAL_CODE: StringField<EmployeeTimeDeu>;
    /**
     * Static representation of the [[continuedPayCreditedDays]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CONTINUED_PAY_CREDITED_DAYS: BigNumberField<EmployeeTimeDeu>;
    /**
     * Static representation of the [[continuedPayEndDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CONTINUED_PAY_END_DATE: DateField<EmployeeTimeDeu>;
    /**
     * Static representation of the [[createdBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_BY: StringField<EmployeeTimeDeu>;
    /**
     * Static representation of the [[createdDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_DATE_TIME: DateField<EmployeeTimeDeu>;
    /**
     * Static representation of the [[externalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXTERNAL_CODE: BigNumberField<EmployeeTimeDeu>;
    /**
     * Static representation of the [[identicalSicknessGroup]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const IDENTICAL_SICKNESS_GROUP: StringField<EmployeeTimeDeu>;
    /**
     * Static representation of the [[lastModifiedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_BY: StringField<EmployeeTimeDeu>;
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_DATE_TIME: DateField<EmployeeTimeDeu>;
    /**
     * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MDF_SYSTEM_RECORD_STATUS: StringField<EmployeeTimeDeu>;
    /**
     * Static representation of the [[overlappingSicknessGroup]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const OVERLAPPING_SICKNESS_GROUP: StringField<EmployeeTimeDeu>;
    /**
     * Static representation of the [[paySupplementEndDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PAY_SUPPLEMENT_END_DATE: DateField<EmployeeTimeDeu>;
    /**
     * Static representation of the [[paySupplementStartDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PAY_SUPPLEMENT_START_DATE: DateField<EmployeeTimeDeu>;
    /**
     * Static representation of the [[sicknessCertificateStartDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SICKNESS_CERTIFICATE_START_DATE: DateField<EmployeeTimeDeu>;
    /**
     * Static representation of the one-to-one navigation property [[createdByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_BY_NAV: OneToOneLink<EmployeeTimeDeu, User>;
    /**
     * Static representation of the one-to-one navigation property [[identicalSicknessGroupNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const IDENTICAL_SICKNESS_GROUP_NAV: OneToOneLink<EmployeeTimeDeu, EmployeeTimeGroup>;
    /**
     * Static representation of the one-to-one navigation property [[lastModifiedByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_BY_NAV: OneToOneLink<EmployeeTimeDeu, User>;
    /**
     * Static representation of the one-to-one navigation property [[mdfSystemRecordStatusNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MDF_SYSTEM_RECORD_STATUS_NAV: OneToOneLink<EmployeeTimeDeu, MdfEnumValue>;
    /**
     * Static representation of the one-to-one navigation property [[overlappingSicknessGroupNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const OVERLAPPING_SICKNESS_GROUP_NAV: OneToOneLink<EmployeeTimeDeu, EmployeeTimeGroup>;
    /**
     * All fields of the EmployeeTimeDeu entity.
     */
    const _allFields: Array<StringField<EmployeeTimeDeu> | BigNumberField<EmployeeTimeDeu> | DateField<EmployeeTimeDeu> | OneToOneLink<EmployeeTimeDeu, User> | OneToOneLink<EmployeeTimeDeu, EmployeeTimeGroup> | OneToOneLink<EmployeeTimeDeu, MdfEnumValue>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<EmployeeTimeDeu>;
    /**
     * All key fields of the EmployeeTimeDeu entity.
     */
    const _keyFields: Array<Selectable<EmployeeTimeDeu>>;
    /**
     * Mapping of all key field names to the respective static field property EmployeeTimeDeu.
     */
    const _keys: {
        [keys: string]: Selectable<EmployeeTimeDeu>;
    };
}
//# sourceMappingURL=EmployeeTimeDeu.d.ts.map
import { LegalEntityDeuRequestBuilder } from './LegalEntityDeuRequestBuilder';
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, CustomField, DateField, Entity, EntityBuilderType, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "LegalEntityDEU" of service "SFOData".
 */
export declare class LegalEntityDeu extends Entity implements LegalEntityDeuType {
    /**
     * Technical entity name for LegalEntityDeu.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for LegalEntityDeu.
     */
    static _serviceName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
    /**
     * Legal Entity_Effective as of.
     */
    legalEntityEffectiveStartDate: Moment;
    /**
     * Legal Entity_Code.
     * Maximum length: 32.
     */
    legalEntityExternalCode: string;
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
     * externalCode.
     */
    externalCode: BigNumber;
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
     * Social Accident Insurance.
     * Maximum length: 45.
     * @nullable
     */
    socialAccidentInsurance?: string;
    /**
     * Social Accident Insurance Registration Number.
     * Maximum length: 45.
     * @nullable
     */
    socialAccidentInsuranceRegistrationNumber?: string;
    /**
     * Tax Unit.
     * Maximum length: 45.
     * @nullable
     */
    taxUnit?: string;
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
     * Returns an entity builder to construct instances `LegalEntityDeu`.
     * @returns A builder that constructs instances of entity type `LegalEntityDeu`.
     */
    static builder(): EntityBuilderType<LegalEntityDeu, LegalEntityDeuTypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `LegalEntityDeu` entity type.
     * @returns A `LegalEntityDeu` request builder.
     */
    static requestBuilder(): LegalEntityDeuRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `LegalEntityDeu`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `LegalEntityDeu`.
     */
    static customField(fieldName: string): CustomField<LegalEntityDeu>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
import { User, UserType } from './User';
import { MdfEnumValue, MdfEnumValueType } from './MdfEnumValue';
export interface LegalEntityDeuType {
    legalEntityEffectiveStartDate: Moment;
    legalEntityExternalCode: string;
    createdBy?: string;
    createdDateTime?: Moment;
    externalCode: BigNumber;
    lastModifiedBy?: string;
    lastModifiedDateTime?: Moment;
    mdfSystemRecordStatus?: string;
    socialAccidentInsurance?: string;
    socialAccidentInsuranceRegistrationNumber?: string;
    taxUnit?: string;
    createdByNav: UserType;
    lastModifiedByNav: UserType;
    mdfSystemRecordStatusNav: MdfEnumValueType;
}
export interface LegalEntityDeuTypeForceMandatory {
    legalEntityEffectiveStartDate: Moment;
    legalEntityExternalCode: string;
    createdBy: string;
    createdDateTime: Moment;
    externalCode: BigNumber;
    lastModifiedBy: string;
    lastModifiedDateTime: Moment;
    mdfSystemRecordStatus: string;
    socialAccidentInsurance: string;
    socialAccidentInsuranceRegistrationNumber: string;
    taxUnit: string;
    createdByNav: UserType;
    lastModifiedByNav: UserType;
    mdfSystemRecordStatusNav: MdfEnumValueType;
}
export declare namespace LegalEntityDeu {
    /**
     * Static representation of the [[legalEntityEffectiveStartDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LEGAL_ENTITY_EFFECTIVE_START_DATE: DateField<LegalEntityDeu>;
    /**
     * Static representation of the [[legalEntityExternalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LEGAL_ENTITY_EXTERNAL_CODE: StringField<LegalEntityDeu>;
    /**
     * Static representation of the [[createdBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_BY: StringField<LegalEntityDeu>;
    /**
     * Static representation of the [[createdDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_DATE_TIME: DateField<LegalEntityDeu>;
    /**
     * Static representation of the [[externalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXTERNAL_CODE: BigNumberField<LegalEntityDeu>;
    /**
     * Static representation of the [[lastModifiedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_BY: StringField<LegalEntityDeu>;
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_DATE_TIME: DateField<LegalEntityDeu>;
    /**
     * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MDF_SYSTEM_RECORD_STATUS: StringField<LegalEntityDeu>;
    /**
     * Static representation of the [[socialAccidentInsurance]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SOCIAL_ACCIDENT_INSURANCE: StringField<LegalEntityDeu>;
    /**
     * Static representation of the [[socialAccidentInsuranceRegistrationNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SOCIAL_ACCIDENT_INSURANCE_REGISTRATION_NUMBER: StringField<LegalEntityDeu>;
    /**
     * Static representation of the [[taxUnit]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TAX_UNIT: StringField<LegalEntityDeu>;
    /**
     * Static representation of the one-to-one navigation property [[createdByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_BY_NAV: OneToOneLink<LegalEntityDeu, User>;
    /**
     * Static representation of the one-to-one navigation property [[lastModifiedByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_BY_NAV: OneToOneLink<LegalEntityDeu, User>;
    /**
     * Static representation of the one-to-one navigation property [[mdfSystemRecordStatusNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MDF_SYSTEM_RECORD_STATUS_NAV: OneToOneLink<LegalEntityDeu, MdfEnumValue>;
    /**
     * All fields of the LegalEntityDeu entity.
     */
    const _allFields: Array<DateField<LegalEntityDeu> | StringField<LegalEntityDeu> | BigNumberField<LegalEntityDeu> | OneToOneLink<LegalEntityDeu, User> | OneToOneLink<LegalEntityDeu, MdfEnumValue>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<LegalEntityDeu>;
    /**
     * All key fields of the LegalEntityDeu entity.
     */
    const _keyFields: Array<Selectable<LegalEntityDeu>>;
    /**
     * Mapping of all key field names to the respective static field property LegalEntityDeu.
     */
    const _keys: {
        [keys: string]: Selectable<LegalEntityDeu>;
    };
}
//# sourceMappingURL=LegalEntityDeu.d.ts.map
import { LegalEntityRusRequestBuilder } from './LegalEntityRusRequestBuilder';
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, CustomField, DateField, Entity, EntityBuilderType, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "LegalEntityRUS" of service "SFOData".
 */
export declare class LegalEntityRus extends Entity implements LegalEntityRusType {
    /**
     * Technical entity name for LegalEntityRus.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for LegalEntityRus.
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
     * OKPO Number.
     * Maximum length: 10.
     * @nullable
     */
    okpoNumber?: string;
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
     * Returns an entity builder to construct instances `LegalEntityRus`.
     * @returns A builder that constructs instances of entity type `LegalEntityRus`.
     */
    static builder(): EntityBuilderType<LegalEntityRus, LegalEntityRusTypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `LegalEntityRus` entity type.
     * @returns A `LegalEntityRus` request builder.
     */
    static requestBuilder(): LegalEntityRusRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `LegalEntityRus`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `LegalEntityRus`.
     */
    static customField(fieldName: string): CustomField<LegalEntityRus>;
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
export interface LegalEntityRusType {
    legalEntityEffectiveStartDate: Moment;
    legalEntityExternalCode: string;
    createdBy?: string;
    createdDateTime?: Moment;
    externalCode: BigNumber;
    lastModifiedBy?: string;
    lastModifiedDateTime?: Moment;
    mdfSystemRecordStatus?: string;
    okpoNumber?: string;
    createdByNav: UserType;
    lastModifiedByNav: UserType;
    mdfSystemRecordStatusNav: MdfEnumValueType;
}
export interface LegalEntityRusTypeForceMandatory {
    legalEntityEffectiveStartDate: Moment;
    legalEntityExternalCode: string;
    createdBy: string;
    createdDateTime: Moment;
    externalCode: BigNumber;
    lastModifiedBy: string;
    lastModifiedDateTime: Moment;
    mdfSystemRecordStatus: string;
    okpoNumber: string;
    createdByNav: UserType;
    lastModifiedByNav: UserType;
    mdfSystemRecordStatusNav: MdfEnumValueType;
}
export declare namespace LegalEntityRus {
    /**
     * Static representation of the [[legalEntityEffectiveStartDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LEGAL_ENTITY_EFFECTIVE_START_DATE: DateField<LegalEntityRus>;
    /**
     * Static representation of the [[legalEntityExternalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LEGAL_ENTITY_EXTERNAL_CODE: StringField<LegalEntityRus>;
    /**
     * Static representation of the [[createdBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_BY: StringField<LegalEntityRus>;
    /**
     * Static representation of the [[createdDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_DATE_TIME: DateField<LegalEntityRus>;
    /**
     * Static representation of the [[externalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXTERNAL_CODE: BigNumberField<LegalEntityRus>;
    /**
     * Static representation of the [[lastModifiedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_BY: StringField<LegalEntityRus>;
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_DATE_TIME: DateField<LegalEntityRus>;
    /**
     * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MDF_SYSTEM_RECORD_STATUS: StringField<LegalEntityRus>;
    /**
     * Static representation of the [[okpoNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const OKPO_NUMBER: StringField<LegalEntityRus>;
    /**
     * Static representation of the one-to-one navigation property [[createdByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_BY_NAV: OneToOneLink<LegalEntityRus, User>;
    /**
     * Static representation of the one-to-one navigation property [[lastModifiedByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_BY_NAV: OneToOneLink<LegalEntityRus, User>;
    /**
     * Static representation of the one-to-one navigation property [[mdfSystemRecordStatusNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MDF_SYSTEM_RECORD_STATUS_NAV: OneToOneLink<LegalEntityRus, MdfEnumValue>;
    /**
     * All fields of the LegalEntityRus entity.
     */
    const _allFields: Array<DateField<LegalEntityRus> | StringField<LegalEntityRus> | BigNumberField<LegalEntityRus> | OneToOneLink<LegalEntityRus, User> | OneToOneLink<LegalEntityRus, MdfEnumValue>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<LegalEntityRus>;
    /**
     * All key fields of the LegalEntityRus entity.
     */
    const _keyFields: Array<Selectable<LegalEntityRus>>;
    /**
     * Mapping of all key field names to the respective static field property LegalEntityRus.
     */
    const _keys: {
        [keys: string]: Selectable<LegalEntityRus>;
    };
}
//# sourceMappingURL=LegalEntityRus.d.ts.map
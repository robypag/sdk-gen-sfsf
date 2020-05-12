import { PersonTypeUsageRequestBuilder } from './PersonTypeUsageRequestBuilder';
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, CustomField, DateField, Entity, EntityBuilderType, Link, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "PersonTypeUsage" of service "SFOData".
 */
export declare class PersonTypeUsage extends Entity implements PersonTypeUsageType {
    /**
     * Technical entity name for PersonTypeUsage.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for PersonTypeUsage.
     */
    static _serviceName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
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
     * endDate.
     * @nullable
     */
    endDate?: Moment;
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
     * person.
     * Maximum length: 128.
     * @nullable
     */
    person?: string;
    /**
     * personType.
     * Maximum length: 128.
     * @nullable
     */
    personType?: string;
    /**
     * startDate.
     * @nullable
     */
    startDate?: Moment;
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
     * One-to-one navigation property to the [[PersonType]] entity.
     */
    personTypeNav: PersonType;
    /**
     * One-to-many navigation property to the [[WfRequest]] entity.
     */
    wfRequestNav: WfRequest[];
    /**
     * Returns an entity builder to construct instances `PersonTypeUsage`.
     * @returns A builder that constructs instances of entity type `PersonTypeUsage`.
     */
    static builder(): EntityBuilderType<PersonTypeUsage, PersonTypeUsageTypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `PersonTypeUsage` entity type.
     * @returns A `PersonTypeUsage` request builder.
     */
    static requestBuilder(): PersonTypeUsageRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `PersonTypeUsage`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `PersonTypeUsage`.
     */
    static customField(fieldName: string): CustomField<PersonTypeUsage>;
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
import { PersonType, PersonTypeType } from './PersonType';
import { WfRequest, WfRequestType } from './WfRequest';
export interface PersonTypeUsageType {
    createdBy?: string;
    createdDateTime?: Moment;
    endDate?: Moment;
    externalCode: BigNumber;
    lastModifiedBy?: string;
    lastModifiedDateTime?: Moment;
    mdfSystemRecordStatus?: string;
    person?: string;
    personType?: string;
    startDate?: Moment;
    createdByNav: UserType;
    lastModifiedByNav: UserType;
    mdfSystemRecordStatusNav: MdfEnumValueType;
    personTypeNav: PersonTypeType;
    wfRequestNav: WfRequestType[];
}
export interface PersonTypeUsageTypeForceMandatory {
    createdBy: string;
    createdDateTime: Moment;
    endDate: Moment;
    externalCode: BigNumber;
    lastModifiedBy: string;
    lastModifiedDateTime: Moment;
    mdfSystemRecordStatus: string;
    person: string;
    personType: string;
    startDate: Moment;
    createdByNav: UserType;
    lastModifiedByNav: UserType;
    mdfSystemRecordStatusNav: MdfEnumValueType;
    personTypeNav: PersonTypeType;
    wfRequestNav: WfRequestType[];
}
export declare namespace PersonTypeUsage {
    /**
     * Static representation of the [[createdBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_BY: StringField<PersonTypeUsage>;
    /**
     * Static representation of the [[createdDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_DATE_TIME: DateField<PersonTypeUsage>;
    /**
     * Static representation of the [[endDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const END_DATE: DateField<PersonTypeUsage>;
    /**
     * Static representation of the [[externalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EXTERNAL_CODE: BigNumberField<PersonTypeUsage>;
    /**
     * Static representation of the [[lastModifiedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_BY: StringField<PersonTypeUsage>;
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_DATE_TIME: DateField<PersonTypeUsage>;
    /**
     * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MDF_SYSTEM_RECORD_STATUS: StringField<PersonTypeUsage>;
    /**
     * Static representation of the [[person]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PERSON: StringField<PersonTypeUsage>;
    /**
     * Static representation of the [[personType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PERSON_TYPE: StringField<PersonTypeUsage>;
    /**
     * Static representation of the [[startDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const START_DATE: DateField<PersonTypeUsage>;
    /**
     * Static representation of the one-to-one navigation property [[createdByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_BY_NAV: OneToOneLink<PersonTypeUsage, User>;
    /**
     * Static representation of the one-to-one navigation property [[lastModifiedByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_BY_NAV: OneToOneLink<PersonTypeUsage, User>;
    /**
     * Static representation of the one-to-one navigation property [[mdfSystemRecordStatusNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MDF_SYSTEM_RECORD_STATUS_NAV: OneToOneLink<PersonTypeUsage, MdfEnumValue>;
    /**
     * Static representation of the one-to-one navigation property [[personTypeNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PERSON_TYPE_NAV: OneToOneLink<PersonTypeUsage, PersonType>;
    /**
     * Static representation of the one-to-many navigation property [[wfRequestNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const WF_REQUEST_NAV: Link<PersonTypeUsage, WfRequest>;
    /**
     * All fields of the PersonTypeUsage entity.
     */
    const _allFields: Array<StringField<PersonTypeUsage> | DateField<PersonTypeUsage> | BigNumberField<PersonTypeUsage> | OneToOneLink<PersonTypeUsage, User> | OneToOneLink<PersonTypeUsage, MdfEnumValue> | OneToOneLink<PersonTypeUsage, PersonType> | Link<PersonTypeUsage, WfRequest>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<PersonTypeUsage>;
    /**
     * All key fields of the PersonTypeUsage entity.
     */
    const _keyFields: Array<Selectable<PersonTypeUsage>>;
    /**
     * Mapping of all key field names to the respective static field property PersonTypeUsage.
     */
    const _keys: {
        [keys: string]: Selectable<PersonTypeUsage>;
    };
}
//# sourceMappingURL=PersonTypeUsage.d.ts.map
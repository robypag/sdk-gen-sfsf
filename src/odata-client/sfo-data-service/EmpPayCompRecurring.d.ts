import { EmpPayCompRecurringRequestBuilder } from './EmpPayCompRecurringRequestBuilder';
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, CustomField, DateField, Entity, EntityBuilderType, NumberField, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "EmpPayCompRecurring" of service "SFOData".
 */
export declare class EmpPayCompRecurring extends Entity implements EmpPayCompRecurringType {
    /**
     * Technical entity name for EmpPayCompRecurring.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for EmpPayCompRecurring.
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
     * Currency.
     * Maximum length: 32.
     * @nullable
     */
    currencyCode?: string;
    /**
     * End Date.
     * @nullable
     */
    endDate?: Moment;
    /**
     * Frequency.
     * Maximum length: 30.
     * @nullable
     */
    frequency?: string;
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
     * Pay Component.
     */
    payComponent: string;
    /**
     * Amount.
     * @nullable
     */
    paycompvalue?: number;
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
     * One-to-one navigation property to the [[EmpCompensation]] entity.
     */
    compensationNav: EmpCompensation;
    /**
     * One-to-one navigation property to the [[EmpEmployment]] entity.
     */
    employmentNav: EmpEmployment;
    /**
     * One-to-one navigation property to the [[FoFrequency]] entity.
     */
    frequencyNav: FoFrequency;
    /**
     * One-to-one navigation property to the [[FoPayComponent]] entity.
     */
    payComponentNav: FoPayComponent;
    /**
     * One-to-one navigation property to the [[User]] entity.
     */
    userNav: User;
    /**
     * Returns an entity builder to construct instances `EmpPayCompRecurring`.
     * @returns A builder that constructs instances of entity type `EmpPayCompRecurring`.
     */
    static builder(): EntityBuilderType<EmpPayCompRecurring, EmpPayCompRecurringTypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `EmpPayCompRecurring` entity type.
     * @returns A `EmpPayCompRecurring` request builder.
     */
    static requestBuilder(): EmpPayCompRecurringRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `EmpPayCompRecurring`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `EmpPayCompRecurring`.
     */
    static customField(fieldName: string): CustomField<EmpPayCompRecurring>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
import { EmpCompensation, EmpCompensationType } from './EmpCompensation';
import { EmpEmployment, EmpEmploymentType } from './EmpEmployment';
import { FoFrequency, FoFrequencyType } from './FoFrequency';
import { FoPayComponent, FoPayComponentType } from './FoPayComponent';
import { User, UserType } from './User';
export interface EmpPayCompRecurringType {
    createdBy?: string;
    createdDateTime?: Moment;
    createdOn?: Moment;
    currencyCode?: string;
    endDate?: Moment;
    frequency?: string;
    lastModifiedBy?: string;
    lastModifiedDateTime?: Moment;
    lastModifiedOn?: Moment;
    notes?: string;
    operation?: string;
    payComponent: string;
    paycompvalue?: number;
    seqNumber: BigNumber;
    startDate: Moment;
    userId: string;
    compensationNav: EmpCompensationType;
    employmentNav: EmpEmploymentType;
    frequencyNav: FoFrequencyType;
    payComponentNav: FoPayComponentType;
    userNav: UserType;
}
export interface EmpPayCompRecurringTypeForceMandatory {
    createdBy: string;
    createdDateTime: Moment;
    createdOn: Moment;
    currencyCode: string;
    endDate: Moment;
    frequency: string;
    lastModifiedBy: string;
    lastModifiedDateTime: Moment;
    lastModifiedOn: Moment;
    notes: string;
    operation: string;
    payComponent: string;
    paycompvalue: number;
    seqNumber: BigNumber;
    startDate: Moment;
    userId: string;
    compensationNav: EmpCompensationType;
    employmentNav: EmpEmploymentType;
    frequencyNav: FoFrequencyType;
    payComponentNav: FoPayComponentType;
    userNav: UserType;
}
export declare namespace EmpPayCompRecurring {
    /**
     * Static representation of the [[createdBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_BY: StringField<EmpPayCompRecurring>;
    /**
     * Static representation of the [[createdDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_DATE_TIME: DateField<EmpPayCompRecurring>;
    /**
     * Static representation of the [[createdOn]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_ON: DateField<EmpPayCompRecurring>;
    /**
     * Static representation of the [[currencyCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CURRENCY_CODE: StringField<EmpPayCompRecurring>;
    /**
     * Static representation of the [[endDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const END_DATE: DateField<EmpPayCompRecurring>;
    /**
     * Static representation of the [[frequency]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const FREQUENCY: StringField<EmpPayCompRecurring>;
    /**
     * Static representation of the [[lastModifiedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_BY: StringField<EmpPayCompRecurring>;
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_DATE_TIME: DateField<EmpPayCompRecurring>;
    /**
     * Static representation of the [[lastModifiedOn]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_ON: DateField<EmpPayCompRecurring>;
    /**
     * Static representation of the [[notes]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const NOTES: StringField<EmpPayCompRecurring>;
    /**
     * Static representation of the [[operation]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const OPERATION: StringField<EmpPayCompRecurring>;
    /**
     * Static representation of the [[payComponent]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PAY_COMPONENT: StringField<EmpPayCompRecurring>;
    /**
     * Static representation of the [[paycompvalue]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PAYCOMPVALUE: NumberField<EmpPayCompRecurring>;
    /**
     * Static representation of the [[seqNumber]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SEQ_NUMBER: BigNumberField<EmpPayCompRecurring>;
    /**
     * Static representation of the [[startDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const START_DATE: DateField<EmpPayCompRecurring>;
    /**
     * Static representation of the [[userId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const USER_ID: StringField<EmpPayCompRecurring>;
    /**
     * Static representation of the one-to-one navigation property [[compensationNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const COMPENSATION_NAV: OneToOneLink<EmpPayCompRecurring, EmpCompensation>;
    /**
     * Static representation of the one-to-one navigation property [[employmentNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EMPLOYMENT_NAV: OneToOneLink<EmpPayCompRecurring, EmpEmployment>;
    /**
     * Static representation of the one-to-one navigation property [[frequencyNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const FREQUENCY_NAV: OneToOneLink<EmpPayCompRecurring, FoFrequency>;
    /**
     * Static representation of the one-to-one navigation property [[payComponentNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PAY_COMPONENT_NAV: OneToOneLink<EmpPayCompRecurring, FoPayComponent>;
    /**
     * Static representation of the one-to-one navigation property [[userNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const USER_NAV: OneToOneLink<EmpPayCompRecurring, User>;
    /**
     * All fields of the EmpPayCompRecurring entity.
     */
    const _allFields: Array<StringField<EmpPayCompRecurring> | DateField<EmpPayCompRecurring> | NumberField<EmpPayCompRecurring> | BigNumberField<EmpPayCompRecurring> | OneToOneLink<EmpPayCompRecurring, EmpCompensation> | OneToOneLink<EmpPayCompRecurring, EmpEmployment> | OneToOneLink<EmpPayCompRecurring, FoFrequency> | OneToOneLink<EmpPayCompRecurring, FoPayComponent> | OneToOneLink<EmpPayCompRecurring, User>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<EmpPayCompRecurring>;
    /**
     * All key fields of the EmpPayCompRecurring entity.
     */
    const _keyFields: Array<Selectable<EmpPayCompRecurring>>;
    /**
     * Mapping of all key field names to the respective static field property EmpPayCompRecurring.
     */
    const _keys: {
        [keys: string]: Selectable<EmpPayCompRecurring>;
    };
}
//# sourceMappingURL=EmpPayCompRecurring.d.ts.map
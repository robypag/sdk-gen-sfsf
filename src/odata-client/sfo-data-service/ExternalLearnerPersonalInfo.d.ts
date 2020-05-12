import { ExternalLearnerPersonalInfoRequestBuilder } from './ExternalLearnerPersonalInfoRequestBuilder';
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, BooleanField, CustomField, DateField, Entity, EntityBuilderType, Selectable, StringField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "ExternalLearnerPersonalInfo" of service "SFOData".
 */
export declare class ExternalLearnerPersonalInfo extends Entity implements ExternalLearnerPersonalInfoType {
    /**
     * Technical entity name for ExternalLearnerPersonalInfo.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for ExternalLearnerPersonalInfo.
     */
    static _serviceName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
    /**
     * Birth Name.
     * Maximum length: 128.
     * @nullable
     */
    birthName?: string;
    /**
     * Certificate End Date.
     * @nullable
     */
    certificateEndDate?: Moment;
    /**
     * Certificate Start Date.
     * @nullable
     */
    certificateStartDate?: Moment;
    /**
     * Challenge Status.
     * @nullable
     */
    challengeStatus?: boolean;
    /**
     * Country Of Birth.
     * Maximum length: 256.
     * @nullable
     */
    countryOfBirth?: string;
    /**
     * Preferred Name.
     * Maximum length: 128.
     * @nullable
     */
    customString1?: string;
    /**
     * Date Of Birth.
     * @nullable
     */
    dateOfBirth?: Moment;
    /**
     * Date Of Death.
     * @nullable
     */
    dateOfDeath?: Moment;
    /**
     * Display Name.
     * Maximum length: 128.
     * @nullable
     */
    displayName?: string;
    /**
     * Display Name Alt1.
     * Maximum length: 128.
     * @nullable
     */
    displayNameAlt1?: string;
    /**
     * Display Name Alt2.
     * Maximum length: 128.
     * @nullable
     */
    displayNameAlt2?: string;
    /**
     * First Name.
     * Maximum length: 128.
     * @nullable
     */
    firstName?: string;
    /**
     * First Name Alt1.
     * Maximum length: 128.
     * @nullable
     */
    firstNameAlt1?: string;
    /**
     * First Name Alt2.
     * Maximum length: 128.
     * @nullable
     */
    firstNameAlt2?: string;
    /**
     * Formal Name.
     * Maximum length: 128.
     * @nullable
     */
    formalName?: string;
    /**
     * Formal Name Alt1.
     * Maximum length: 128.
     * @nullable
     */
    formalNameAlt1?: string;
    /**
     * Formal Name Alt2.
     * Maximum length: 128.
     * @nullable
     */
    formalNameAlt2?: string;
    /**
     * Gender.
     * Maximum length: 2.
     * @nullable
     */
    gender?: string;
    /**
     * Initials.
     * Maximum length: 128.
     * @nullable
     */
    initials?: string;
    /**
     * Customize Name Format.
     * @nullable
     */
    isOverridden?: boolean;
    /**
     * is_deleted.
     * @nullable
     */
    isDeleted?: boolean;
    /**
     * itemId.
     */
    itemId: BigNumber;
    /**
     * lastModifiedDateTime.
     * @nullable
     */
    lastModifiedDateTime?: Moment;
    /**
     * Last Name.
     * Maximum length: 128.
     * @nullable
     */
    lastName?: string;
    /**
     * Last Name Alt1.
     * Maximum length: 128.
     * @nullable
     */
    lastNameAlt1?: string;
    /**
     * Last Name Alt2.
     * Maximum length: 128.
     * @nullable
     */
    lastNameAlt2?: string;
    /**
     * Marital Status.
     * Maximum length: 50.
     * @nullable
     */
    maritalStatus?: string;
    /**
     * Middle Name.
     * Maximum length: 128.
     * @nullable
     */
    middleName?: string;
    /**
     * Middle Name Alt1.
     * Maximum length: 128.
     * @nullable
     */
    middleNameAlt1?: string;
    /**
     * Middle Name Alt2.
     * Maximum length: 128.
     * @nullable
     */
    middleNameAlt2?: string;
    /**
     * Prefix.
     * Maximum length: 128.
     * @nullable
     */
    namePrefix?: string;
    /**
     * Nationality.
     * Maximum length: 128.
     * @nullable
     */
    nationality?: string;
    /**
     * Native Preferred Language.
     * Maximum length: 256.
     * @nullable
     */
    nativePreferredLang?: string;
    /**
     * Preferred Name.
     * Maximum length: 128.
     * @nullable
     */
    preferredName?: string;
    /**
     * Salutation.
     * Maximum length: 128.
     * @nullable
     */
    salutation?: string;
    /**
     * Second Last Name.
     * Maximum length: 128.
     * @nullable
     */
    secondLastName?: string;
    /**
     * Second Nationality.
     * Maximum length: 128.
     * @nullable
     */
    secondNationality?: string;
    /**
     * Second Title.
     * Maximum length: 128.
     * @nullable
     */
    secondTitle?: string;
    /**
     * Marital Status Since.
     * @nullable
     */
    since?: Moment;
    /**
     * Suffix.
     * Maximum length: 128.
     * @nullable
     */
    suffix?: string;
    /**
     * Third Nationality.
     * Maximum length: 128.
     * @nullable
     */
    thirdNationality?: string;
    /**
     * Title.
     * Maximum length: 128.
     * @nullable
     */
    title?: string;
    /**
     * Returns an entity builder to construct instances `ExternalLearnerPersonalInfo`.
     * @returns A builder that constructs instances of entity type `ExternalLearnerPersonalInfo`.
     */
    static builder(): EntityBuilderType<ExternalLearnerPersonalInfo, ExternalLearnerPersonalInfoTypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `ExternalLearnerPersonalInfo` entity type.
     * @returns A `ExternalLearnerPersonalInfo` request builder.
     */
    static requestBuilder(): ExternalLearnerPersonalInfoRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `ExternalLearnerPersonalInfo`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `ExternalLearnerPersonalInfo`.
     */
    static customField(fieldName: string): CustomField<ExternalLearnerPersonalInfo>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
export interface ExternalLearnerPersonalInfoType {
    birthName?: string;
    certificateEndDate?: Moment;
    certificateStartDate?: Moment;
    challengeStatus?: boolean;
    countryOfBirth?: string;
    customString1?: string;
    dateOfBirth?: Moment;
    dateOfDeath?: Moment;
    displayName?: string;
    displayNameAlt1?: string;
    displayNameAlt2?: string;
    firstName?: string;
    firstNameAlt1?: string;
    firstNameAlt2?: string;
    formalName?: string;
    formalNameAlt1?: string;
    formalNameAlt2?: string;
    gender?: string;
    initials?: string;
    isOverridden?: boolean;
    isDeleted?: boolean;
    itemId: BigNumber;
    lastModifiedDateTime?: Moment;
    lastName?: string;
    lastNameAlt1?: string;
    lastNameAlt2?: string;
    maritalStatus?: string;
    middleName?: string;
    middleNameAlt1?: string;
    middleNameAlt2?: string;
    namePrefix?: string;
    nationality?: string;
    nativePreferredLang?: string;
    preferredName?: string;
    salutation?: string;
    secondLastName?: string;
    secondNationality?: string;
    secondTitle?: string;
    since?: Moment;
    suffix?: string;
    thirdNationality?: string;
    title?: string;
}
export interface ExternalLearnerPersonalInfoTypeForceMandatory {
    birthName: string;
    certificateEndDate: Moment;
    certificateStartDate: Moment;
    challengeStatus: boolean;
    countryOfBirth: string;
    customString1: string;
    dateOfBirth: Moment;
    dateOfDeath: Moment;
    displayName: string;
    displayNameAlt1: string;
    displayNameAlt2: string;
    firstName: string;
    firstNameAlt1: string;
    firstNameAlt2: string;
    formalName: string;
    formalNameAlt1: string;
    formalNameAlt2: string;
    gender: string;
    initials: string;
    isOverridden: boolean;
    isDeleted: boolean;
    itemId: BigNumber;
    lastModifiedDateTime: Moment;
    lastName: string;
    lastNameAlt1: string;
    lastNameAlt2: string;
    maritalStatus: string;
    middleName: string;
    middleNameAlt1: string;
    middleNameAlt2: string;
    namePrefix: string;
    nationality: string;
    nativePreferredLang: string;
    preferredName: string;
    salutation: string;
    secondLastName: string;
    secondNationality: string;
    secondTitle: string;
    since: Moment;
    suffix: string;
    thirdNationality: string;
    title: string;
}
export declare namespace ExternalLearnerPersonalInfo {
    /**
     * Static representation of the [[birthName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BIRTH_NAME: StringField<ExternalLearnerPersonalInfo>;
    /**
     * Static representation of the [[certificateEndDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CERTIFICATE_END_DATE: DateField<ExternalLearnerPersonalInfo>;
    /**
     * Static representation of the [[certificateStartDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CERTIFICATE_START_DATE: DateField<ExternalLearnerPersonalInfo>;
    /**
     * Static representation of the [[challengeStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CHALLENGE_STATUS: BooleanField<ExternalLearnerPersonalInfo>;
    /**
     * Static representation of the [[countryOfBirth]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const COUNTRY_OF_BIRTH: StringField<ExternalLearnerPersonalInfo>;
    /**
     * Static representation of the [[customString1]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CUSTOM_STRING_1: StringField<ExternalLearnerPersonalInfo>;
    /**
     * Static representation of the [[dateOfBirth]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DATE_OF_BIRTH: DateField<ExternalLearnerPersonalInfo>;
    /**
     * Static representation of the [[dateOfDeath]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DATE_OF_DEATH: DateField<ExternalLearnerPersonalInfo>;
    /**
     * Static representation of the [[displayName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DISPLAY_NAME: StringField<ExternalLearnerPersonalInfo>;
    /**
     * Static representation of the [[displayNameAlt1]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DISPLAY_NAME_ALT_1: StringField<ExternalLearnerPersonalInfo>;
    /**
     * Static representation of the [[displayNameAlt2]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DISPLAY_NAME_ALT_2: StringField<ExternalLearnerPersonalInfo>;
    /**
     * Static representation of the [[firstName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const FIRST_NAME: StringField<ExternalLearnerPersonalInfo>;
    /**
     * Static representation of the [[firstNameAlt1]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const FIRST_NAME_ALT_1: StringField<ExternalLearnerPersonalInfo>;
    /**
     * Static representation of the [[firstNameAlt2]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const FIRST_NAME_ALT_2: StringField<ExternalLearnerPersonalInfo>;
    /**
     * Static representation of the [[formalName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const FORMAL_NAME: StringField<ExternalLearnerPersonalInfo>;
    /**
     * Static representation of the [[formalNameAlt1]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const FORMAL_NAME_ALT_1: StringField<ExternalLearnerPersonalInfo>;
    /**
     * Static representation of the [[formalNameAlt2]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const FORMAL_NAME_ALT_2: StringField<ExternalLearnerPersonalInfo>;
    /**
     * Static representation of the [[gender]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const GENDER: StringField<ExternalLearnerPersonalInfo>;
    /**
     * Static representation of the [[initials]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const INITIALS: StringField<ExternalLearnerPersonalInfo>;
    /**
     * Static representation of the [[isOverridden]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const IS_OVERRIDDEN: BooleanField<ExternalLearnerPersonalInfo>;
    /**
     * Static representation of the [[isDeleted]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const IS_DELETED: BooleanField<ExternalLearnerPersonalInfo>;
    /**
     * Static representation of the [[itemId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ITEM_ID: BigNumberField<ExternalLearnerPersonalInfo>;
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_DATE_TIME: DateField<ExternalLearnerPersonalInfo>;
    /**
     * Static representation of the [[lastName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_NAME: StringField<ExternalLearnerPersonalInfo>;
    /**
     * Static representation of the [[lastNameAlt1]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_NAME_ALT_1: StringField<ExternalLearnerPersonalInfo>;
    /**
     * Static representation of the [[lastNameAlt2]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_NAME_ALT_2: StringField<ExternalLearnerPersonalInfo>;
    /**
     * Static representation of the [[maritalStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MARITAL_STATUS: StringField<ExternalLearnerPersonalInfo>;
    /**
     * Static representation of the [[middleName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MIDDLE_NAME: StringField<ExternalLearnerPersonalInfo>;
    /**
     * Static representation of the [[middleNameAlt1]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MIDDLE_NAME_ALT_1: StringField<ExternalLearnerPersonalInfo>;
    /**
     * Static representation of the [[middleNameAlt2]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MIDDLE_NAME_ALT_2: StringField<ExternalLearnerPersonalInfo>;
    /**
     * Static representation of the [[namePrefix]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const NAME_PREFIX: StringField<ExternalLearnerPersonalInfo>;
    /**
     * Static representation of the [[nationality]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const NATIONALITY: StringField<ExternalLearnerPersonalInfo>;
    /**
     * Static representation of the [[nativePreferredLang]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const NATIVE_PREFERRED_LANG: StringField<ExternalLearnerPersonalInfo>;
    /**
     * Static representation of the [[preferredName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PREFERRED_NAME: StringField<ExternalLearnerPersonalInfo>;
    /**
     * Static representation of the [[salutation]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SALUTATION: StringField<ExternalLearnerPersonalInfo>;
    /**
     * Static representation of the [[secondLastName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SECOND_LAST_NAME: StringField<ExternalLearnerPersonalInfo>;
    /**
     * Static representation of the [[secondNationality]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SECOND_NATIONALITY: StringField<ExternalLearnerPersonalInfo>;
    /**
     * Static representation of the [[secondTitle]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SECOND_TITLE: StringField<ExternalLearnerPersonalInfo>;
    /**
     * Static representation of the [[since]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SINCE: DateField<ExternalLearnerPersonalInfo>;
    /**
     * Static representation of the [[suffix]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SUFFIX: StringField<ExternalLearnerPersonalInfo>;
    /**
     * Static representation of the [[thirdNationality]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const THIRD_NATIONALITY: StringField<ExternalLearnerPersonalInfo>;
    /**
     * Static representation of the [[title]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TITLE: StringField<ExternalLearnerPersonalInfo>;
    /**
     * All fields of the ExternalLearnerPersonalInfo entity.
     */
    const _allFields: Array<StringField<ExternalLearnerPersonalInfo> | DateField<ExternalLearnerPersonalInfo> | BooleanField<ExternalLearnerPersonalInfo> | BigNumberField<ExternalLearnerPersonalInfo>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<ExternalLearnerPersonalInfo>;
    /**
     * All key fields of the ExternalLearnerPersonalInfo entity.
     */
    const _keyFields: Array<Selectable<ExternalLearnerPersonalInfo>>;
    /**
     * Mapping of all key field names to the respective static field property ExternalLearnerPersonalInfo.
     */
    const _keys: {
        [keys: string]: Selectable<ExternalLearnerPersonalInfo>;
    };
}
//# sourceMappingURL=ExternalLearnerPersonalInfo.d.ts.map
import { UserPermissionsRequestBuilder } from './UserPermissionsRequestBuilder';
import { AllFields, CustomField, Entity, EntityBuilderType, NumberField, Selectable } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "UserPermissions" of service "SFOData".
 */
export declare class UserPermissions extends Entity implements UserPermissionsType {
    /**
     * Technical entity name for UserPermissions.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for UserPermissions.
     */
    static _serviceName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
    /**
     * addressLine1.
     * @nullable
     */
    addressLine1?: number;
    /**
     * addressLine2.
     * @nullable
     */
    addressLine2?: number;
    /**
     * addressLine3.
     * @nullable
     */
    addressLine3?: number;
    /**
     * benchStrength.
     * @nullable
     */
    benchStrength?: number;
    /**
     * benchStrengthNav.
     * @nullable
     */
    benchStrengthNav?: number;
    /**
     * businessPhone.
     * @nullable
     */
    businessPhone?: number;
    /**
     * businessSegment.
     * @nullable
     */
    businessSegment?: number;
    /**
     * businessSegmentNav.
     * @nullable
     */
    businessSegmentNav?: number;
    /**
     * cellPhone.
     * @nullable
     */
    cellPhone?: number;
    /**
     * citizenship.
     * @nullable
     */
    citizenship?: number;
    /**
     * city.
     * @nullable
     */
    city?: number;
    /**
     * competency.
     * @nullable
     */
    competency?: number;
    /**
     * competencyRatingNav.
     * @nullable
     */
    competencyRatingNav?: number;
    /**
     * country.
     * @nullable
     */
    country?: number;
    /**
     * custom01.
     * @nullable
     */
    custom01?: number;
    /**
     * custom02.
     * @nullable
     */
    custom02?: number;
    /**
     * custom03.
     * @nullable
     */
    custom03?: number;
    /**
     * custom04.
     * @nullable
     */
    custom04?: number;
    /**
     * custom05.
     * @nullable
     */
    custom05?: number;
    /**
     * custom05Nav.
     * @nullable
     */
    custom05Nav?: number;
    /**
     * custom06.
     * @nullable
     */
    custom06?: number;
    /**
     * custom07.
     * @nullable
     */
    custom07?: number;
    /**
     * custom08.
     * @nullable
     */
    custom08?: number;
    /**
     * custom09.
     * @nullable
     */
    custom09?: number;
    /**
     * custom10.
     * @nullable
     */
    custom10?: number;
    /**
     * custom11.
     * @nullable
     */
    custom11?: number;
    /**
     * custom12.
     * @nullable
     */
    custom12?: number;
    /**
     * custom13.
     * @nullable
     */
    custom13?: number;
    /**
     * custom14.
     * @nullable
     */
    custom14?: number;
    /**
     * custom15.
     * @nullable
     */
    custom15?: number;
    /**
     * customManager.
     * @nullable
     */
    customManager?: number;
    /**
     * customReports.
     * @nullable
     */
    customReports?: number;
    /**
     * dateOfBirth.
     * @nullable
     */
    dateOfBirth?: number;
    /**
     * dateOfPosition.
     * @nullable
     */
    dateOfPosition?: number;
    /**
     * defaultFullName.
     * @nullable
     */
    defaultFullName?: number;
    /**
     * defaultLocale.
     * @nullable
     */
    defaultLocale?: number;
    /**
     * department.
     * @nullable
     */
    department?: number;
    /**
     * directReports.
     * @nullable
     */
    directReports?: number;
    /**
     * division.
     * @nullable
     */
    division?: number;
    /**
     * dummyNominationNav.
     * @nullable
     */
    dummyNominationNav?: number;
    /**
     * email.
     * @nullable
     */
    email?: number;
    /**
     * empId.
     * @nullable
     */
    empId?: number;
    /**
     * empInfo.
     * @nullable
     */
    empInfo?: number;
    /**
     * ethnicity.
     * @nullable
     */
    ethnicity?: number;
    /**
     * ethnicityNav.
     * @nullable
     */
    ethnicityNav?: number;
    /**
     * fax.
     * @nullable
     */
    fax?: number;
    /**
     * firstName.
     * @nullable
     */
    firstName?: number;
    /**
     * futureLeader.
     * @nullable
     */
    futureLeader?: number;
    /**
     * gender.
     * @nullable
     */
    gender?: number;
    /**
     * hireDate.
     * @nullable
     */
    hireDate?: number;
    /**
     * homePhone.
     * @nullable
     */
    homePhone?: number;
    /**
     * hr.
     * @nullable
     */
    hr?: number;
    /**
     * hrReports.
     * @nullable
     */
    hrReports?: number;
    /**
     * impactOfLoss.
     * @nullable
     */
    impactOfLoss?: number;
    /**
     * impactOfLossNav.
     * @nullable
     */
    impactOfLossNav?: number;
    /**
     * jobCode.
     * @nullable
     */
    jobCode?: number;
    /**
     * keyPosition.
     * @nullable
     */
    keyPosition?: number;
    /**
     * lastModified.
     * @nullable
     */
    lastModified?: number;
    /**
     * lastModifiedDateTime.
     * @nullable
     */
    lastModifiedDateTime?: number;
    /**
     * lastModifiedWithTZ.
     * @nullable
     */
    lastModifiedWithTz?: number;
    /**
     * lastName.
     * @nullable
     */
    lastName?: number;
    /**
     * lastReviewDate.
     * @nullable
     */
    lastReviewDate?: number;
    /**
     * level.
     * @nullable
     */
    level?: number;
    /**
     * location.
     * @nullable
     */
    location?: number;
    /**
     * manager.
     * @nullable
     */
    manager?: number;
    /**
     * married.
     * @nullable
     */
    married?: number;
    /**
     * matrix1Label.
     * @nullable
     */
    matrix1Label?: number;
    /**
     * matrix2Label.
     * @nullable
     */
    matrix2Label?: number;
    /**
     * matrixManaged.
     * @nullable
     */
    matrixManaged?: number;
    /**
     * matrixManager.
     * @nullable
     */
    matrixManager?: number;
    /**
     * matrixReports.
     * @nullable
     */
    matrixReports?: number;
    /**
     * mi.
     * @nullable
     */
    mi?: number;
    /**
     * minority.
     * @nullable
     */
    minority?: number;
    /**
     * nationality.
     * @nullable
     */
    nationality?: number;
    /**
     * newToPosition.
     * @nullable
     */
    newToPosition?: number;
    /**
     * nickname.
     * @nullable
     */
    nickname?: number;
    /**
     * nominationNav.
     * @nullable
     */
    nominationNav?: number;
    /**
     * objective.
     * @nullable
     */
    objective?: number;
    /**
     * onboardingId.
     * @nullable
     */
    onboardingId?: number;
    /**
     * password.
     * @nullable
     */
    password?: number;
    /**
     * performance.
     * @nullable
     */
    performance?: number;
    /**
     * potential.
     * @nullable
     */
    potential?: number;
    /**
     * proxy.
     * @nullable
     */
    proxy?: number;
    /**
     * reasonForLeaving.
     * @nullable
     */
    reasonForLeaving?: number;
    /**
     * reasonForLeavingNav.
     * @nullable
     */
    reasonForLeavingNav?: number;
    /**
     * reviewFreq.
     * @nullable
     */
    reviewFreq?: number;
    /**
     * riskOfLoss.
     * @nullable
     */
    riskOfLoss?: number;
    /**
     * riskOfLossNav.
     * @nullable
     */
    riskOfLossNav?: number;
    /**
     * sciLastModified.
     * @nullable
     */
    sciLastModified?: number;
    /**
     * secondManager.
     * @nullable
     */
    secondManager?: number;
    /**
     * secondReports.
     * @nullable
     */
    secondReports?: number;
    /**
     * serviceDate.
     * @nullable
     */
    serviceDate?: number;
    /**
     * ssn.
     * @nullable
     */
    ssn?: number;
    /**
     * state.
     * @nullable
     */
    state?: number;
    /**
     * status.
     * @nullable
     */
    status?: number;
    /**
     * suffix.
     * @nullable
     */
    suffix?: number;
    /**
     * talentPool.
     * @nullable
     */
    talentPool?: number;
    /**
     * talentPoolNav.
     * @nullable
     */
    talentPoolNav?: number;
    /**
     * teamMembersSize.
     * @nullable
     */
    teamMembersSize?: number;
    /**
     * timeZone.
     * @nullable
     */
    timeZone?: number;
    /**
     * title.
     * @nullable
     */
    title?: number;
    /**
     * totalTeamSize.
     * @nullable
     */
    totalTeamSize?: number;
    /**
     * userId.
     */
    userId: number;
    /**
     * userPermissionsNav.
     * @nullable
     */
    userPermissionsNav?: number;
    /**
     * username.
     * @nullable
     */
    username?: number;
    /**
     * zipCode.
     * @nullable
     */
    zipCode?: number;
    /**
     * Returns an entity builder to construct instances `UserPermissions`.
     * @returns A builder that constructs instances of entity type `UserPermissions`.
     */
    static builder(): EntityBuilderType<UserPermissions, UserPermissionsTypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `UserPermissions` entity type.
     * @returns A `UserPermissions` request builder.
     */
    static requestBuilder(): UserPermissionsRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `UserPermissions`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `UserPermissions`.
     */
    static customField(fieldName: string): CustomField<UserPermissions>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
export interface UserPermissionsType {
    addressLine1?: number;
    addressLine2?: number;
    addressLine3?: number;
    benchStrength?: number;
    benchStrengthNav?: number;
    businessPhone?: number;
    businessSegment?: number;
    businessSegmentNav?: number;
    cellPhone?: number;
    citizenship?: number;
    city?: number;
    competency?: number;
    competencyRatingNav?: number;
    country?: number;
    custom01?: number;
    custom02?: number;
    custom03?: number;
    custom04?: number;
    custom05?: number;
    custom05Nav?: number;
    custom06?: number;
    custom07?: number;
    custom08?: number;
    custom09?: number;
    custom10?: number;
    custom11?: number;
    custom12?: number;
    custom13?: number;
    custom14?: number;
    custom15?: number;
    customManager?: number;
    customReports?: number;
    dateOfBirth?: number;
    dateOfPosition?: number;
    defaultFullName?: number;
    defaultLocale?: number;
    department?: number;
    directReports?: number;
    division?: number;
    dummyNominationNav?: number;
    email?: number;
    empId?: number;
    empInfo?: number;
    ethnicity?: number;
    ethnicityNav?: number;
    fax?: number;
    firstName?: number;
    futureLeader?: number;
    gender?: number;
    hireDate?: number;
    homePhone?: number;
    hr?: number;
    hrReports?: number;
    impactOfLoss?: number;
    impactOfLossNav?: number;
    jobCode?: number;
    keyPosition?: number;
    lastModified?: number;
    lastModifiedDateTime?: number;
    lastModifiedWithTz?: number;
    lastName?: number;
    lastReviewDate?: number;
    level?: number;
    location?: number;
    manager?: number;
    married?: number;
    matrix1Label?: number;
    matrix2Label?: number;
    matrixManaged?: number;
    matrixManager?: number;
    matrixReports?: number;
    mi?: number;
    minority?: number;
    nationality?: number;
    newToPosition?: number;
    nickname?: number;
    nominationNav?: number;
    objective?: number;
    onboardingId?: number;
    password?: number;
    performance?: number;
    potential?: number;
    proxy?: number;
    reasonForLeaving?: number;
    reasonForLeavingNav?: number;
    reviewFreq?: number;
    riskOfLoss?: number;
    riskOfLossNav?: number;
    sciLastModified?: number;
    secondManager?: number;
    secondReports?: number;
    serviceDate?: number;
    ssn?: number;
    state?: number;
    status?: number;
    suffix?: number;
    talentPool?: number;
    talentPoolNav?: number;
    teamMembersSize?: number;
    timeZone?: number;
    title?: number;
    totalTeamSize?: number;
    userId: number;
    userPermissionsNav?: number;
    username?: number;
    zipCode?: number;
}
export interface UserPermissionsTypeForceMandatory {
    addressLine1: number;
    addressLine2: number;
    addressLine3: number;
    benchStrength: number;
    benchStrengthNav: number;
    businessPhone: number;
    businessSegment: number;
    businessSegmentNav: number;
    cellPhone: number;
    citizenship: number;
    city: number;
    competency: number;
    competencyRatingNav: number;
    country: number;
    custom01: number;
    custom02: number;
    custom03: number;
    custom04: number;
    custom05: number;
    custom05Nav: number;
    custom06: number;
    custom07: number;
    custom08: number;
    custom09: number;
    custom10: number;
    custom11: number;
    custom12: number;
    custom13: number;
    custom14: number;
    custom15: number;
    customManager: number;
    customReports: number;
    dateOfBirth: number;
    dateOfPosition: number;
    defaultFullName: number;
    defaultLocale: number;
    department: number;
    directReports: number;
    division: number;
    dummyNominationNav: number;
    email: number;
    empId: number;
    empInfo: number;
    ethnicity: number;
    ethnicityNav: number;
    fax: number;
    firstName: number;
    futureLeader: number;
    gender: number;
    hireDate: number;
    homePhone: number;
    hr: number;
    hrReports: number;
    impactOfLoss: number;
    impactOfLossNav: number;
    jobCode: number;
    keyPosition: number;
    lastModified: number;
    lastModifiedDateTime: number;
    lastModifiedWithTz: number;
    lastName: number;
    lastReviewDate: number;
    level: number;
    location: number;
    manager: number;
    married: number;
    matrix1Label: number;
    matrix2Label: number;
    matrixManaged: number;
    matrixManager: number;
    matrixReports: number;
    mi: number;
    minority: number;
    nationality: number;
    newToPosition: number;
    nickname: number;
    nominationNav: number;
    objective: number;
    onboardingId: number;
    password: number;
    performance: number;
    potential: number;
    proxy: number;
    reasonForLeaving: number;
    reasonForLeavingNav: number;
    reviewFreq: number;
    riskOfLoss: number;
    riskOfLossNav: number;
    sciLastModified: number;
    secondManager: number;
    secondReports: number;
    serviceDate: number;
    ssn: number;
    state: number;
    status: number;
    suffix: number;
    talentPool: number;
    talentPoolNav: number;
    teamMembersSize: number;
    timeZone: number;
    title: number;
    totalTeamSize: number;
    userId: number;
    userPermissionsNav: number;
    username: number;
    zipCode: number;
}
export declare namespace UserPermissions {
    /**
     * Static representation of the [[addressLine1]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ADDRESS_LINE_1: NumberField<UserPermissions>;
    /**
     * Static representation of the [[addressLine2]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ADDRESS_LINE_2: NumberField<UserPermissions>;
    /**
     * Static representation of the [[addressLine3]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ADDRESS_LINE_3: NumberField<UserPermissions>;
    /**
     * Static representation of the [[benchStrength]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BENCH_STRENGTH: NumberField<UserPermissions>;
    /**
     * Static representation of the [[benchStrengthNav]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BENCH_STRENGTH_NAV: NumberField<UserPermissions>;
    /**
     * Static representation of the [[businessPhone]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BUSINESS_PHONE: NumberField<UserPermissions>;
    /**
     * Static representation of the [[businessSegment]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BUSINESS_SEGMENT: NumberField<UserPermissions>;
    /**
     * Static representation of the [[businessSegmentNav]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BUSINESS_SEGMENT_NAV: NumberField<UserPermissions>;
    /**
     * Static representation of the [[cellPhone]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CELL_PHONE: NumberField<UserPermissions>;
    /**
     * Static representation of the [[citizenship]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CITIZENSHIP: NumberField<UserPermissions>;
    /**
     * Static representation of the [[city]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CITY: NumberField<UserPermissions>;
    /**
     * Static representation of the [[competency]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const COMPETENCY: NumberField<UserPermissions>;
    /**
     * Static representation of the [[competencyRatingNav]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const COMPETENCY_RATING_NAV: NumberField<UserPermissions>;
    /**
     * Static representation of the [[country]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const COUNTRY: NumberField<UserPermissions>;
    /**
     * Static representation of the [[custom01]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CUSTOM_01: NumberField<UserPermissions>;
    /**
     * Static representation of the [[custom02]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CUSTOM_02: NumberField<UserPermissions>;
    /**
     * Static representation of the [[custom03]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CUSTOM_03: NumberField<UserPermissions>;
    /**
     * Static representation of the [[custom04]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CUSTOM_04: NumberField<UserPermissions>;
    /**
     * Static representation of the [[custom05]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CUSTOM_05: NumberField<UserPermissions>;
    /**
     * Static representation of the [[custom05Nav]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CUSTOM_05_NAV: NumberField<UserPermissions>;
    /**
     * Static representation of the [[custom06]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CUSTOM_06: NumberField<UserPermissions>;
    /**
     * Static representation of the [[custom07]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CUSTOM_07: NumberField<UserPermissions>;
    /**
     * Static representation of the [[custom08]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CUSTOM_08: NumberField<UserPermissions>;
    /**
     * Static representation of the [[custom09]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CUSTOM_09: NumberField<UserPermissions>;
    /**
     * Static representation of the [[custom10]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CUSTOM_10: NumberField<UserPermissions>;
    /**
     * Static representation of the [[custom11]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CUSTOM_11: NumberField<UserPermissions>;
    /**
     * Static representation of the [[custom12]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CUSTOM_12: NumberField<UserPermissions>;
    /**
     * Static representation of the [[custom13]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CUSTOM_13: NumberField<UserPermissions>;
    /**
     * Static representation of the [[custom14]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CUSTOM_14: NumberField<UserPermissions>;
    /**
     * Static representation of the [[custom15]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CUSTOM_15: NumberField<UserPermissions>;
    /**
     * Static representation of the [[customManager]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CUSTOM_MANAGER: NumberField<UserPermissions>;
    /**
     * Static representation of the [[customReports]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CUSTOM_REPORTS: NumberField<UserPermissions>;
    /**
     * Static representation of the [[dateOfBirth]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DATE_OF_BIRTH: NumberField<UserPermissions>;
    /**
     * Static representation of the [[dateOfPosition]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DATE_OF_POSITION: NumberField<UserPermissions>;
    /**
     * Static representation of the [[defaultFullName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DEFAULT_FULL_NAME: NumberField<UserPermissions>;
    /**
     * Static representation of the [[defaultLocale]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DEFAULT_LOCALE: NumberField<UserPermissions>;
    /**
     * Static representation of the [[department]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DEPARTMENT: NumberField<UserPermissions>;
    /**
     * Static representation of the [[directReports]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DIRECT_REPORTS: NumberField<UserPermissions>;
    /**
     * Static representation of the [[division]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DIVISION: NumberField<UserPermissions>;
    /**
     * Static representation of the [[dummyNominationNav]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DUMMY_NOMINATION_NAV: NumberField<UserPermissions>;
    /**
     * Static representation of the [[email]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EMAIL: NumberField<UserPermissions>;
    /**
     * Static representation of the [[empId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EMP_ID: NumberField<UserPermissions>;
    /**
     * Static representation of the [[empInfo]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const EMP_INFO: NumberField<UserPermissions>;
    /**
     * Static representation of the [[ethnicity]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ETHNICITY: NumberField<UserPermissions>;
    /**
     * Static representation of the [[ethnicityNav]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ETHNICITY_NAV: NumberField<UserPermissions>;
    /**
     * Static representation of the [[fax]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const FAX: NumberField<UserPermissions>;
    /**
     * Static representation of the [[firstName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const FIRST_NAME: NumberField<UserPermissions>;
    /**
     * Static representation of the [[futureLeader]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const FUTURE_LEADER: NumberField<UserPermissions>;
    /**
     * Static representation of the [[gender]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const GENDER: NumberField<UserPermissions>;
    /**
     * Static representation of the [[hireDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const HIRE_DATE: NumberField<UserPermissions>;
    /**
     * Static representation of the [[homePhone]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const HOME_PHONE: NumberField<UserPermissions>;
    /**
     * Static representation of the [[hr]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const HR: NumberField<UserPermissions>;
    /**
     * Static representation of the [[hrReports]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const HR_REPORTS: NumberField<UserPermissions>;
    /**
     * Static representation of the [[impactOfLoss]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const IMPACT_OF_LOSS: NumberField<UserPermissions>;
    /**
     * Static representation of the [[impactOfLossNav]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const IMPACT_OF_LOSS_NAV: NumberField<UserPermissions>;
    /**
     * Static representation of the [[jobCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const JOB_CODE: NumberField<UserPermissions>;
    /**
     * Static representation of the [[keyPosition]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const KEY_POSITION: NumberField<UserPermissions>;
    /**
     * Static representation of the [[lastModified]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED: NumberField<UserPermissions>;
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_DATE_TIME: NumberField<UserPermissions>;
    /**
     * Static representation of the [[lastModifiedWithTz]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_WITH_TZ: NumberField<UserPermissions>;
    /**
     * Static representation of the [[lastName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_NAME: NumberField<UserPermissions>;
    /**
     * Static representation of the [[lastReviewDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_REVIEW_DATE: NumberField<UserPermissions>;
    /**
     * Static representation of the [[level]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LEVEL: NumberField<UserPermissions>;
    /**
     * Static representation of the [[location]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LOCATION: NumberField<UserPermissions>;
    /**
     * Static representation of the [[manager]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MANAGER: NumberField<UserPermissions>;
    /**
     * Static representation of the [[married]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MARRIED: NumberField<UserPermissions>;
    /**
     * Static representation of the [[matrix1Label]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MATRIX_1_LABEL: NumberField<UserPermissions>;
    /**
     * Static representation of the [[matrix2Label]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MATRIX_2_LABEL: NumberField<UserPermissions>;
    /**
     * Static representation of the [[matrixManaged]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MATRIX_MANAGED: NumberField<UserPermissions>;
    /**
     * Static representation of the [[matrixManager]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MATRIX_MANAGER: NumberField<UserPermissions>;
    /**
     * Static representation of the [[matrixReports]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MATRIX_REPORTS: NumberField<UserPermissions>;
    /**
     * Static representation of the [[mi]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MI: NumberField<UserPermissions>;
    /**
     * Static representation of the [[minority]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MINORITY: NumberField<UserPermissions>;
    /**
     * Static representation of the [[nationality]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const NATIONALITY: NumberField<UserPermissions>;
    /**
     * Static representation of the [[newToPosition]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const NEW_TO_POSITION: NumberField<UserPermissions>;
    /**
     * Static representation of the [[nickname]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const NICKNAME: NumberField<UserPermissions>;
    /**
     * Static representation of the [[nominationNav]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const NOMINATION_NAV: NumberField<UserPermissions>;
    /**
     * Static representation of the [[objective]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const OBJECTIVE: NumberField<UserPermissions>;
    /**
     * Static representation of the [[onboardingId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ONBOARDING_ID: NumberField<UserPermissions>;
    /**
     * Static representation of the [[password]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PASSWORD: NumberField<UserPermissions>;
    /**
     * Static representation of the [[performance]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PERFORMANCE: NumberField<UserPermissions>;
    /**
     * Static representation of the [[potential]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const POTENTIAL: NumberField<UserPermissions>;
    /**
     * Static representation of the [[proxy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const PROXY: NumberField<UserPermissions>;
    /**
     * Static representation of the [[reasonForLeaving]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const REASON_FOR_LEAVING: NumberField<UserPermissions>;
    /**
     * Static representation of the [[reasonForLeavingNav]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const REASON_FOR_LEAVING_NAV: NumberField<UserPermissions>;
    /**
     * Static representation of the [[reviewFreq]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const REVIEW_FREQ: NumberField<UserPermissions>;
    /**
     * Static representation of the [[riskOfLoss]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const RISK_OF_LOSS: NumberField<UserPermissions>;
    /**
     * Static representation of the [[riskOfLossNav]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const RISK_OF_LOSS_NAV: NumberField<UserPermissions>;
    /**
     * Static representation of the [[sciLastModified]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SCI_LAST_MODIFIED: NumberField<UserPermissions>;
    /**
     * Static representation of the [[secondManager]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SECOND_MANAGER: NumberField<UserPermissions>;
    /**
     * Static representation of the [[secondReports]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SECOND_REPORTS: NumberField<UserPermissions>;
    /**
     * Static representation of the [[serviceDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SERVICE_DATE: NumberField<UserPermissions>;
    /**
     * Static representation of the [[ssn]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SSN: NumberField<UserPermissions>;
    /**
     * Static representation of the [[state]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const STATE: NumberField<UserPermissions>;
    /**
     * Static representation of the [[status]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const STATUS: NumberField<UserPermissions>;
    /**
     * Static representation of the [[suffix]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const SUFFIX: NumberField<UserPermissions>;
    /**
     * Static representation of the [[talentPool]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TALENT_POOL: NumberField<UserPermissions>;
    /**
     * Static representation of the [[talentPoolNav]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TALENT_POOL_NAV: NumberField<UserPermissions>;
    /**
     * Static representation of the [[teamMembersSize]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TEAM_MEMBERS_SIZE: NumberField<UserPermissions>;
    /**
     * Static representation of the [[timeZone]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TIME_ZONE: NumberField<UserPermissions>;
    /**
     * Static representation of the [[title]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TITLE: NumberField<UserPermissions>;
    /**
     * Static representation of the [[totalTeamSize]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const TOTAL_TEAM_SIZE: NumberField<UserPermissions>;
    /**
     * Static representation of the [[userId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const USER_ID: NumberField<UserPermissions>;
    /**
     * Static representation of the [[userPermissionsNav]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const USER_PERMISSIONS_NAV: NumberField<UserPermissions>;
    /**
     * Static representation of the [[username]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const USERNAME: NumberField<UserPermissions>;
    /**
     * Static representation of the [[zipCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const ZIP_CODE: NumberField<UserPermissions>;
    /**
     * All fields of the UserPermissions entity.
     */
    const _allFields: Array<NumberField<UserPermissions>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<UserPermissions>;
    /**
     * All key fields of the UserPermissions entity.
     */
    const _keyFields: Array<Selectable<UserPermissions>>;
    /**
     * Mapping of all key field names to the respective static field property UserPermissions.
     */
    const _keys: {
        [keys: string]: Selectable<UserPermissions>;
    };
}
//# sourceMappingURL=UserPermissions.d.ts.map
import { CandidateProfileExtensionRequestBuilder } from './CandidateProfileExtensionRequestBuilder';
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, CustomField, DateField, Entity, EntityBuilderType, Link, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "CandidateProfileExtension" of service "SFOData".
 */
export declare class CandidateProfileExtension extends Entity implements CandidateProfileExtensionType {
    /**
     * Technical entity name for CandidateProfileExtension.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for CandidateProfileExtension.
     */
    static _serviceName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
    /**
     * Candidate ID.
     */
    candidateId: BigNumber;
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
     * Grad Year.
     * Maximum length: 128.
     * @nullable
     */
    custGradYear?: string;
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
     * One-to-one navigation property to the [[User]] entity.
     */
    createdByNav: User;
    /**
     * One-to-many navigation property to the [[PickListValueV2]] entity.
     */
    custGradYearNav: PickListValueV2[];
    /**
     * One-to-one navigation property to the [[User]] entity.
     */
    lastModifiedByNav: User;
    /**
     * One-to-one navigation property to the [[MdfEnumValue]] entity.
     */
    mdfSystemRecordStatusNav: MdfEnumValue;
    /**
     * One-to-many navigation property to the [[WfRequest]] entity.
     */
    wfRequestNav: WfRequest[];
    /**
     * Returns an entity builder to construct instances `CandidateProfileExtension`.
     * @returns A builder that constructs instances of entity type `CandidateProfileExtension`.
     */
    static builder(): EntityBuilderType<CandidateProfileExtension, CandidateProfileExtensionTypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `CandidateProfileExtension` entity type.
     * @returns A `CandidateProfileExtension` request builder.
     */
    static requestBuilder(): CandidateProfileExtensionRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `CandidateProfileExtension`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `CandidateProfileExtension`.
     */
    static customField(fieldName: string): CustomField<CandidateProfileExtension>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
import { User, UserType } from './User';
import { PickListValueV2, PickListValueV2Type } from './PickListValueV2';
import { MdfEnumValue, MdfEnumValueType } from './MdfEnumValue';
import { WfRequest, WfRequestType } from './WfRequest';
export interface CandidateProfileExtensionType {
    candidateId: BigNumber;
    createdBy?: string;
    createdDateTime?: Moment;
    custGradYear?: string;
    lastModifiedBy?: string;
    lastModifiedDateTime?: Moment;
    mdfSystemRecordStatus?: string;
    createdByNav: UserType;
    custGradYearNav: PickListValueV2Type[];
    lastModifiedByNav: UserType;
    mdfSystemRecordStatusNav: MdfEnumValueType;
    wfRequestNav: WfRequestType[];
}
export interface CandidateProfileExtensionTypeForceMandatory {
    candidateId: BigNumber;
    createdBy: string;
    createdDateTime: Moment;
    custGradYear: string;
    lastModifiedBy: string;
    lastModifiedDateTime: Moment;
    mdfSystemRecordStatus: string;
    createdByNav: UserType;
    custGradYearNav: PickListValueV2Type[];
    lastModifiedByNav: UserType;
    mdfSystemRecordStatusNav: MdfEnumValueType;
    wfRequestNav: WfRequestType[];
}
export declare namespace CandidateProfileExtension {
    /**
     * Static representation of the [[candidateId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CANDIDATE_ID: BigNumberField<CandidateProfileExtension>;
    /**
     * Static representation of the [[createdBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_BY: StringField<CandidateProfileExtension>;
    /**
     * Static representation of the [[createdDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_DATE_TIME: DateField<CandidateProfileExtension>;
    /**
     * Static representation of the [[custGradYear]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CUST_GRAD_YEAR: StringField<CandidateProfileExtension>;
    /**
     * Static representation of the [[lastModifiedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_BY: StringField<CandidateProfileExtension>;
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_DATE_TIME: DateField<CandidateProfileExtension>;
    /**
     * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MDF_SYSTEM_RECORD_STATUS: StringField<CandidateProfileExtension>;
    /**
     * Static representation of the one-to-one navigation property [[createdByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CREATED_BY_NAV: OneToOneLink<CandidateProfileExtension, User>;
    /**
     * Static representation of the one-to-many navigation property [[custGradYearNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const CUST_GRAD_YEAR_NAV: Link<CandidateProfileExtension, PickListValueV2>;
    /**
     * Static representation of the one-to-one navigation property [[lastModifiedByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_BY_NAV: OneToOneLink<CandidateProfileExtension, User>;
    /**
     * Static representation of the one-to-one navigation property [[mdfSystemRecordStatusNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const MDF_SYSTEM_RECORD_STATUS_NAV: OneToOneLink<CandidateProfileExtension, MdfEnumValue>;
    /**
     * Static representation of the one-to-many navigation property [[wfRequestNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const WF_REQUEST_NAV: Link<CandidateProfileExtension, WfRequest>;
    /**
     * All fields of the CandidateProfileExtension entity.
     */
    const _allFields: Array<BigNumberField<CandidateProfileExtension> | StringField<CandidateProfileExtension> | DateField<CandidateProfileExtension> | OneToOneLink<CandidateProfileExtension, User> | Link<CandidateProfileExtension, PickListValueV2> | OneToOneLink<CandidateProfileExtension, MdfEnumValue> | Link<CandidateProfileExtension, WfRequest>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<CandidateProfileExtension>;
    /**
     * All key fields of the CandidateProfileExtension entity.
     */
    const _keyFields: Array<Selectable<CandidateProfileExtension>>;
    /**
     * Mapping of all key field names to the respective static field property CandidateProfileExtension.
     */
    const _keys: {
        [keys: string]: Selectable<CandidateProfileExtension>;
    };
}
//# sourceMappingURL=CandidateProfileExtension.d.ts.map
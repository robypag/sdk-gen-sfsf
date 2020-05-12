import { Background_CertificatesRequestBuilder } from './Background_CertificatesRequestBuilder';
import { Moment } from 'moment';
import { BigNumber } from 'bignumber.js';
import { AllFields, BigNumberField, CustomField, DateField, Entity, EntityBuilderType, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';
/**
 * This class represents the entity "Background_Certificates" of service "SFOData".
 */
export declare class Background_Certificates extends Entity implements Background_CertificatesType {
    /**
     * Technical entity name for Background_Certificates.
     */
    static _entityName: string;
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for Background_Certificates.
     */
    static _serviceName: string;
    /**
     * Default url path for the according service.
     */
    static _defaultServicePath: string;
    /**
     * backgroundElementId.
     */
    backgroundElementId: BigNumber;
    /**
     * bgOrderPos.
     */
    bgOrderPos: BigNumber;
    /**
     * Description.
     * @nullable
     */
    description?: string;
    /**
     * Expiration Date.
     * @nullable
     */
    endDate?: Moment;
    /**
     * Institution.
     * @nullable
     */
    institution?: string;
    /**
     * Last Modified Date.
     */
    lastModifiedDate: Moment;
    /**
     * Certification/License.
     */
    name: string;
    /**
     * Effective Date.
     * @nullable
     */
    startDate?: Moment;
    /**
     * userId.
     */
    userId: string;
    /**
     * One-to-one navigation property to the [[User]] entity.
     */
    userIdNav: User;
    /**
     * Returns an entity builder to construct instances `Background_Certificates`.
     * @returns A builder that constructs instances of entity type `Background_Certificates`.
     */
    static builder(): EntityBuilderType<Background_Certificates, Background_CertificatesTypeForceMandatory>;
    /**
     * Returns a request builder to construct requests for operations on the `Background_Certificates` entity type.
     * @returns A `Background_Certificates` request builder.
     */
    static requestBuilder(): Background_CertificatesRequestBuilder;
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `Background_Certificates`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `Background_Certificates`.
     */
    static customField(fieldName: string): CustomField<Background_Certificates>;
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    toJSON(): {
        [key: string]: any;
    };
}
import { User, UserType } from './User';
export interface Background_CertificatesType {
    backgroundElementId: BigNumber;
    bgOrderPos: BigNumber;
    description?: string;
    endDate?: Moment;
    institution?: string;
    lastModifiedDate: Moment;
    name: string;
    startDate?: Moment;
    userId: string;
    userIdNav: UserType;
}
export interface Background_CertificatesTypeForceMandatory {
    backgroundElementId: BigNumber;
    bgOrderPos: BigNumber;
    description: string;
    endDate: Moment;
    institution: string;
    lastModifiedDate: Moment;
    name: string;
    startDate: Moment;
    userId: string;
    userIdNav: UserType;
}
export declare namespace Background_Certificates {
    /**
     * Static representation of the [[backgroundElementId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BACKGROUND_ELEMENT_ID: BigNumberField<Background_Certificates>;
    /**
     * Static representation of the [[bgOrderPos]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const BG_ORDER_POS: BigNumberField<Background_Certificates>;
    /**
     * Static representation of the [[description]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const DESCRIPTION: StringField<Background_Certificates>;
    /**
     * Static representation of the [[endDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const END_DATE: DateField<Background_Certificates>;
    /**
     * Static representation of the [[institution]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const INSTITUTION: StringField<Background_Certificates>;
    /**
     * Static representation of the [[lastModifiedDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const LAST_MODIFIED_DATE: DateField<Background_Certificates>;
    /**
     * Static representation of the [[name]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const NAME: StringField<Background_Certificates>;
    /**
     * Static representation of the [[startDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const START_DATE: DateField<Background_Certificates>;
    /**
     * Static representation of the [[userId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const USER_ID: StringField<Background_Certificates>;
    /**
     * Static representation of the one-to-one navigation property [[userIdNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    const USER_ID_NAV: OneToOneLink<Background_Certificates, User>;
    /**
     * All fields of the Background_Certificates entity.
     */
    const _allFields: Array<BigNumberField<Background_Certificates> | StringField<Background_Certificates> | DateField<Background_Certificates> | OneToOneLink<Background_Certificates, User>>;
    /**
     * All fields selector.
     */
    const ALL_FIELDS: AllFields<Background_Certificates>;
    /**
     * All key fields of the Background_Certificates entity.
     */
    const _keyFields: Array<Selectable<Background_Certificates>>;
    /**
     * Mapping of all key field names to the respective static field property Background_Certificates.
     */
    const _keys: {
        [keys: string]: Selectable<Background_Certificates>;
    };
}
//# sourceMappingURL=Background_Certificates.d.ts.map
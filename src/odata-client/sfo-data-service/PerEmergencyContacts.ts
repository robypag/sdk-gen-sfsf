/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
import { PerEmergencyContactsRequestBuilder } from './PerEmergencyContactsRequestBuilder';
import { Moment } from 'moment';
import { AllFields, BooleanField, CustomField, DateField, Entity, EntityBuilderType, OneToOneLink, Selectable, StringField } from '@sap-cloud-sdk/core';

/**
 * This class represents the entity "PerEmergencyContacts" of service "SFOData".
 */
export class PerEmergencyContacts extends Entity implements PerEmergencyContactsType {
  /**
   * Technical entity name for PerEmergencyContacts.
   */
  static _entityName = 'PerEmergencyContacts';
  /**
   * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
   * Technical service name for PerEmergencyContacts.
   */
  static _serviceName = 'SFOData';
  /**
   * Default url path for the according service.
   */
  static _defaultServicePath = 'VALUE_IS_UNDEFINED';
  /**
   * addressAddress1.
   * Maximum length: 256.
   * @nullable
   */
  addressAddress1?: string;
  /**
   * Apartment.
   * Maximum length: 256.
   * @nullable
   */
  addressAddress10?: string;
  /**
   * Bed Number.
   * Maximum length: 256.
   * @nullable
   */
  addressAddress11?: string;
  /**
   * City.
   * Maximum length: 256.
   * @nullable
   */
  addressAddress12?: string;
  /**
   * addressAddress2.
   * Maximum length: 256.
   * @nullable
   */
  addressAddress2?: string;
  /**
   * addressAddress3.
   * Maximum length: 256.
   * @nullable
   */
  addressAddress3?: string;
  /**
   * Apartment.
   * Maximum length: 256.
   * @nullable
   */
  addressAddress4?: string;
  /**
   * Second Address Line.
   * Maximum length: 256.
   * @nullable
   */
  addressAddress5?: string;
  /**
   * POBOX.
   * Maximum length: 256.
   * @nullable
   */
  addressAddress6?: string;
  /**
   * Camp.
   * Maximum length: 256.
   * @nullable
   */
  addressAddress7?: string;
  /**
   * Bed Number.
   * Maximum length: 256.
   * @nullable
   */
  addressAddress8?: string;
  /**
   * Building.
   * Maximum length: 256.
   * @nullable
   */
  addressAddress9?: string;
  /**
   * addressCity.
   * Maximum length: 256.
   * @nullable
   */
  addressCity?: string;
  /**
   * addressCountry.
   * Maximum length: 256.
   * @nullable
   */
  addressCountry?: string;
  /**
   * addressCounty.
   * Maximum length: 256.
   * @nullable
   */
  addressCounty?: string;
  /**
   * addressNotes.
   * Maximum length: 4000.
   * @nullable
   */
  addressNotes?: string;
  /**
   * addressProvince.
   * Maximum length: 256.
   * @nullable
   */
  addressProvince?: string;
  /**
   * addressState.
   * Maximum length: 256.
   * @nullable
   */
  addressState?: string;
  /**
   * addressZipCode.
   * Maximum length: 256.
   * @nullable
   */
  addressZipCode?: string;
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
   * Email.
   * Maximum length: 100.
   * @nullable
   */
  email?: string;
  /**
   * Copy Address from Employee.
   * @nullable
   */
  isAddSameAsEmployee?: boolean;
  /**
   * Dependent.
   * @nullable
   */
  isDependent?: boolean;
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
   * Name.
   * Maximum length: 256.
   */
  name!: string;
  /**
   * operation.
   * @nullable
   */
  operation?: string;
  /**
   * Person ID External.
   * Maximum length: 100.
   */
  personIdExternal!: string;
  /**
   * Phone.
   * Maximum length: 256.
   * @nullable
   */
  phone?: string;
  /**
   * primaryFlag.
   * Maximum length: 1.
   * @nullable
   */
  primaryFlag?: string;
  /**
   * Relationship.
   * Maximum length: 50.
   */
  relationship!: string;
  /**
   * One-to-one navigation property to the [[HrisEmergencyContactAddressDeflt]] entity.
   */
  addressNavDeflt!: HrisEmergencyContactAddressDeflt;
  /**
   * One-to-one navigation property to the [[PerPerson]] entity.
   */
  personNav!: PerPerson;
  /**
   * One-to-one navigation property to the [[PicklistOption]] entity.
   */
  relationshipNav!: PicklistOption;

  /**
   * Returns an entity builder to construct instances `PerEmergencyContacts`.
   * @returns A builder that constructs instances of entity type `PerEmergencyContacts`.
   */
  static builder(): EntityBuilderType<PerEmergencyContacts, PerEmergencyContactsTypeForceMandatory> {
    return Entity.entityBuilder(PerEmergencyContacts);
  }

  /**
   * Returns a request builder to construct requests for operations on the `PerEmergencyContacts` entity type.
   * @returns A `PerEmergencyContacts` request builder.
   */
  static requestBuilder(): PerEmergencyContactsRequestBuilder {
    return new PerEmergencyContactsRequestBuilder();
  }

  /**
   * Returns a selectable object that allows the selection of custom field in a get request for the entity `PerEmergencyContacts`.
   * @param fieldName Name of the custom field to select
   * @returns A builder that constructs instances of entity type `PerEmergencyContacts`.
   */
  static customField(fieldName: string): CustomField<PerEmergencyContacts> {
    return Entity.customFieldSelector(fieldName, PerEmergencyContacts);
  }

  /**
   * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
   * @returns An object containing all instance variables + custom fields.
   */
  toJSON(): { [key: string]: any } {
    return { ...this, ...this._customFields };
  }
}

import { HrisEmergencyContactAddressDeflt, HrisEmergencyContactAddressDefltType } from './HrisEmergencyContactAddressDeflt';
import { PerPerson, PerPersonType } from './PerPerson';
import { PicklistOption, PicklistOptionType } from './PicklistOption';

export interface PerEmergencyContactsType {
  addressAddress1?: string;
  addressAddress10?: string;
  addressAddress11?: string;
  addressAddress12?: string;
  addressAddress2?: string;
  addressAddress3?: string;
  addressAddress4?: string;
  addressAddress5?: string;
  addressAddress6?: string;
  addressAddress7?: string;
  addressAddress8?: string;
  addressAddress9?: string;
  addressCity?: string;
  addressCountry?: string;
  addressCounty?: string;
  addressNotes?: string;
  addressProvince?: string;
  addressState?: string;
  addressZipCode?: string;
  createdBy?: string;
  createdDateTime?: Moment;
  createdOn?: Moment;
  email?: string;
  isAddSameAsEmployee?: boolean;
  isDependent?: boolean;
  lastModifiedBy?: string;
  lastModifiedDateTime?: Moment;
  lastModifiedOn?: Moment;
  name: string;
  operation?: string;
  personIdExternal: string;
  phone?: string;
  primaryFlag?: string;
  relationship: string;
  addressNavDeflt: HrisEmergencyContactAddressDefltType;
  personNav: PerPersonType;
  relationshipNav: PicklistOptionType;
}

export interface PerEmergencyContactsTypeForceMandatory {
  addressAddress1: string;
  addressAddress10: string;
  addressAddress11: string;
  addressAddress12: string;
  addressAddress2: string;
  addressAddress3: string;
  addressAddress4: string;
  addressAddress5: string;
  addressAddress6: string;
  addressAddress7: string;
  addressAddress8: string;
  addressAddress9: string;
  addressCity: string;
  addressCountry: string;
  addressCounty: string;
  addressNotes: string;
  addressProvince: string;
  addressState: string;
  addressZipCode: string;
  createdBy: string;
  createdDateTime: Moment;
  createdOn: Moment;
  email: string;
  isAddSameAsEmployee: boolean;
  isDependent: boolean;
  lastModifiedBy: string;
  lastModifiedDateTime: Moment;
  lastModifiedOn: Moment;
  name: string;
  operation: string;
  personIdExternal: string;
  phone: string;
  primaryFlag: string;
  relationship: string;
  addressNavDeflt: HrisEmergencyContactAddressDefltType;
  personNav: PerPersonType;
  relationshipNav: PicklistOptionType;
}

export namespace PerEmergencyContacts {
  /**
   * Static representation of the [[addressAddress1]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ADDRESS_ADDRESS_1: StringField<PerEmergencyContacts> = new StringField('addressAddress1', PerEmergencyContacts, 'Edm.String');
  /**
   * Static representation of the [[addressAddress10]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ADDRESS_ADDRESS_10: StringField<PerEmergencyContacts> = new StringField('addressAddress10', PerEmergencyContacts, 'Edm.String');
  /**
   * Static representation of the [[addressAddress11]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ADDRESS_ADDRESS_11: StringField<PerEmergencyContacts> = new StringField('addressAddress11', PerEmergencyContacts, 'Edm.String');
  /**
   * Static representation of the [[addressAddress12]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ADDRESS_ADDRESS_12: StringField<PerEmergencyContacts> = new StringField('addressAddress12', PerEmergencyContacts, 'Edm.String');
  /**
   * Static representation of the [[addressAddress2]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ADDRESS_ADDRESS_2: StringField<PerEmergencyContacts> = new StringField('addressAddress2', PerEmergencyContacts, 'Edm.String');
  /**
   * Static representation of the [[addressAddress3]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ADDRESS_ADDRESS_3: StringField<PerEmergencyContacts> = new StringField('addressAddress3', PerEmergencyContacts, 'Edm.String');
  /**
   * Static representation of the [[addressAddress4]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ADDRESS_ADDRESS_4: StringField<PerEmergencyContacts> = new StringField('addressAddress4', PerEmergencyContacts, 'Edm.String');
  /**
   * Static representation of the [[addressAddress5]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ADDRESS_ADDRESS_5: StringField<PerEmergencyContacts> = new StringField('addressAddress5', PerEmergencyContacts, 'Edm.String');
  /**
   * Static representation of the [[addressAddress6]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ADDRESS_ADDRESS_6: StringField<PerEmergencyContacts> = new StringField('addressAddress6', PerEmergencyContacts, 'Edm.String');
  /**
   * Static representation of the [[addressAddress7]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ADDRESS_ADDRESS_7: StringField<PerEmergencyContacts> = new StringField('addressAddress7', PerEmergencyContacts, 'Edm.String');
  /**
   * Static representation of the [[addressAddress8]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ADDRESS_ADDRESS_8: StringField<PerEmergencyContacts> = new StringField('addressAddress8', PerEmergencyContacts, 'Edm.String');
  /**
   * Static representation of the [[addressAddress9]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ADDRESS_ADDRESS_9: StringField<PerEmergencyContacts> = new StringField('addressAddress9', PerEmergencyContacts, 'Edm.String');
  /**
   * Static representation of the [[addressCity]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ADDRESS_CITY: StringField<PerEmergencyContacts> = new StringField('addressCity', PerEmergencyContacts, 'Edm.String');
  /**
   * Static representation of the [[addressCountry]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ADDRESS_COUNTRY: StringField<PerEmergencyContacts> = new StringField('addressCountry', PerEmergencyContacts, 'Edm.String');
  /**
   * Static representation of the [[addressCounty]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ADDRESS_COUNTY: StringField<PerEmergencyContacts> = new StringField('addressCounty', PerEmergencyContacts, 'Edm.String');
  /**
   * Static representation of the [[addressNotes]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ADDRESS_NOTES: StringField<PerEmergencyContacts> = new StringField('addressNotes', PerEmergencyContacts, 'Edm.String');
  /**
   * Static representation of the [[addressProvince]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ADDRESS_PROVINCE: StringField<PerEmergencyContacts> = new StringField('addressProvince', PerEmergencyContacts, 'Edm.String');
  /**
   * Static representation of the [[addressState]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ADDRESS_STATE: StringField<PerEmergencyContacts> = new StringField('addressState', PerEmergencyContacts, 'Edm.String');
  /**
   * Static representation of the [[addressZipCode]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ADDRESS_ZIP_CODE: StringField<PerEmergencyContacts> = new StringField('addressZipCode', PerEmergencyContacts, 'Edm.String');
  /**
   * Static representation of the [[createdBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_BY: StringField<PerEmergencyContacts> = new StringField('createdBy', PerEmergencyContacts, 'Edm.String');
  /**
   * Static representation of the [[createdDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_DATE_TIME: DateField<PerEmergencyContacts> = new DateField('createdDateTime', PerEmergencyContacts, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[createdOn]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const CREATED_ON: DateField<PerEmergencyContacts> = new DateField('createdOn', PerEmergencyContacts, 'Edm.DateTime');
  /**
   * Static representation of the [[email]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const EMAIL: StringField<PerEmergencyContacts> = new StringField('email', PerEmergencyContacts, 'Edm.String');
  /**
   * Static representation of the [[isAddSameAsEmployee]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const IS_ADD_SAME_AS_EMPLOYEE: BooleanField<PerEmergencyContacts> = new BooleanField('isAddSameAsEmployee', PerEmergencyContacts, 'Edm.Boolean');
  /**
   * Static representation of the [[isDependent]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const IS_DEPENDENT: BooleanField<PerEmergencyContacts> = new BooleanField('isDependent', PerEmergencyContacts, 'Edm.Boolean');
  /**
   * Static representation of the [[lastModifiedBy]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_BY: StringField<PerEmergencyContacts> = new StringField('lastModifiedBy', PerEmergencyContacts, 'Edm.String');
  /**
   * Static representation of the [[lastModifiedDateTime]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_DATE_TIME: DateField<PerEmergencyContacts> = new DateField('lastModifiedDateTime', PerEmergencyContacts, 'Edm.DateTimeOffset');
  /**
   * Static representation of the [[lastModifiedOn]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const LAST_MODIFIED_ON: DateField<PerEmergencyContacts> = new DateField('lastModifiedOn', PerEmergencyContacts, 'Edm.DateTime');
  /**
   * Static representation of the [[name]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const NAME: StringField<PerEmergencyContacts> = new StringField('name', PerEmergencyContacts, 'Edm.String');
  /**
   * Static representation of the [[operation]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const OPERATION: StringField<PerEmergencyContacts> = new StringField('operation', PerEmergencyContacts, 'Edm.String');
  /**
   * Static representation of the [[personIdExternal]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PERSON_ID_EXTERNAL: StringField<PerEmergencyContacts> = new StringField('personIdExternal', PerEmergencyContacts, 'Edm.String');
  /**
   * Static representation of the [[phone]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PHONE: StringField<PerEmergencyContacts> = new StringField('phone', PerEmergencyContacts, 'Edm.String');
  /**
   * Static representation of the [[primaryFlag]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PRIMARY_FLAG: StringField<PerEmergencyContacts> = new StringField('primaryFlag', PerEmergencyContacts, 'Edm.String');
  /**
   * Static representation of the [[relationship]] property for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const RELATIONSHIP: StringField<PerEmergencyContacts> = new StringField('relationship', PerEmergencyContacts, 'Edm.String');
  /**
   * Static representation of the one-to-one navigation property [[addressNavDeflt]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const ADDRESS_NAV_DEFLT: OneToOneLink<PerEmergencyContacts, HrisEmergencyContactAddressDeflt> = new OneToOneLink('addressNavDEFLT', PerEmergencyContacts, HrisEmergencyContactAddressDeflt);
  /**
   * Static representation of the one-to-one navigation property [[personNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const PERSON_NAV: OneToOneLink<PerEmergencyContacts, PerPerson> = new OneToOneLink('personNav', PerEmergencyContacts, PerPerson);
  /**
   * Static representation of the one-to-one navigation property [[relationshipNav]] for query construction.
   * Use to reference this property in query operations such as 'select' in the fluent request API.
   */
  export const RELATIONSHIP_NAV: OneToOneLink<PerEmergencyContacts, PicklistOption> = new OneToOneLink('relationshipNav', PerEmergencyContacts, PicklistOption);
  /**
   * All fields of the PerEmergencyContacts entity.
   */
  export const _allFields: Array<StringField<PerEmergencyContacts> | DateField<PerEmergencyContacts> | BooleanField<PerEmergencyContacts> | OneToOneLink<PerEmergencyContacts, HrisEmergencyContactAddressDeflt> | OneToOneLink<PerEmergencyContacts, PerPerson> | OneToOneLink<PerEmergencyContacts, PicklistOption>> = [
    PerEmergencyContacts.ADDRESS_ADDRESS_1,
    PerEmergencyContacts.ADDRESS_ADDRESS_10,
    PerEmergencyContacts.ADDRESS_ADDRESS_11,
    PerEmergencyContacts.ADDRESS_ADDRESS_12,
    PerEmergencyContacts.ADDRESS_ADDRESS_2,
    PerEmergencyContacts.ADDRESS_ADDRESS_3,
    PerEmergencyContacts.ADDRESS_ADDRESS_4,
    PerEmergencyContacts.ADDRESS_ADDRESS_5,
    PerEmergencyContacts.ADDRESS_ADDRESS_6,
    PerEmergencyContacts.ADDRESS_ADDRESS_7,
    PerEmergencyContacts.ADDRESS_ADDRESS_8,
    PerEmergencyContacts.ADDRESS_ADDRESS_9,
    PerEmergencyContacts.ADDRESS_CITY,
    PerEmergencyContacts.ADDRESS_COUNTRY,
    PerEmergencyContacts.ADDRESS_COUNTY,
    PerEmergencyContacts.ADDRESS_NOTES,
    PerEmergencyContacts.ADDRESS_PROVINCE,
    PerEmergencyContacts.ADDRESS_STATE,
    PerEmergencyContacts.ADDRESS_ZIP_CODE,
    PerEmergencyContacts.CREATED_BY,
    PerEmergencyContacts.CREATED_DATE_TIME,
    PerEmergencyContacts.CREATED_ON,
    PerEmergencyContacts.EMAIL,
    PerEmergencyContacts.IS_ADD_SAME_AS_EMPLOYEE,
    PerEmergencyContacts.IS_DEPENDENT,
    PerEmergencyContacts.LAST_MODIFIED_BY,
    PerEmergencyContacts.LAST_MODIFIED_DATE_TIME,
    PerEmergencyContacts.LAST_MODIFIED_ON,
    PerEmergencyContacts.NAME,
    PerEmergencyContacts.OPERATION,
    PerEmergencyContacts.PERSON_ID_EXTERNAL,
    PerEmergencyContacts.PHONE,
    PerEmergencyContacts.PRIMARY_FLAG,
    PerEmergencyContacts.RELATIONSHIP,
    PerEmergencyContacts.ADDRESS_NAV_DEFLT,
    PerEmergencyContacts.PERSON_NAV,
    PerEmergencyContacts.RELATIONSHIP_NAV
  ];
  /**
   * All fields selector.
   */
  export const ALL_FIELDS: AllFields<PerEmergencyContacts> = new AllFields('*', PerEmergencyContacts);
  /**
   * All key fields of the PerEmergencyContacts entity.
   */
  export const _keyFields: Array<Selectable<PerEmergencyContacts>> = [PerEmergencyContacts.NAME, PerEmergencyContacts.PERSON_ID_EXTERNAL, PerEmergencyContacts.RELATIONSHIP];
  /**
   * Mapping of all key field names to the respective static field property PerEmergencyContacts.
   */
  export const _keys: { [keys: string]: Selectable<PerEmergencyContacts> } = PerEmergencyContacts._keyFields.reduce((acc: { [keys: string]: Selectable<PerEmergencyContacts> }, field: Selectable<PerEmergencyContacts>) => {
    acc[field._fieldName] = field;
    return acc;
  }, {});
}

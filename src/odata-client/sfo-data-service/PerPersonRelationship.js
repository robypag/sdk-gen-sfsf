"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var PerPersonRelationshipRequestBuilder_1 = require("./PerPersonRelationshipRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "PerPersonRelationship" of service "SFOData".
 */
var PerPersonRelationship = /** @class */ (function (_super) {
    __extends(PerPersonRelationship, _super);
    function PerPersonRelationship() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `PerPersonRelationship`.
     * @returns A builder that constructs instances of entity type `PerPersonRelationship`.
     */
    PerPersonRelationship.builder = function () {
        return core_1.Entity.entityBuilder(PerPersonRelationship);
    };
    /**
     * Returns a request builder to construct requests for operations on the `PerPersonRelationship` entity type.
     * @returns A `PerPersonRelationship` request builder.
     */
    PerPersonRelationship.requestBuilder = function () {
        return new PerPersonRelationshipRequestBuilder_1.PerPersonRelationshipRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `PerPersonRelationship`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `PerPersonRelationship`.
     */
    PerPersonRelationship.customField = function (fieldName) {
        return core_1.Entity.customFieldSelector(fieldName, PerPersonRelationship);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    PerPersonRelationship.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for PerPersonRelationship.
     */
    PerPersonRelationship._entityName = 'PerPersonRelationship';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for PerPersonRelationship.
     */
    PerPersonRelationship._serviceName = 'SFOData';
    /**
     * Default url path for the according service.
     */
    PerPersonRelationship._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return PerPersonRelationship;
}(core_1.Entity));
exports.PerPersonRelationship = PerPersonRelationship;
var PerPerson_1 = require("./PerPerson");
var PerNationalId_1 = require("./PerNationalId");
var PerPersonal_1 = require("./PerPersonal");
var PicklistOption_1 = require("./PicklistOption");
(function (PerPersonRelationship) {
    /**
     * Static representation of the [[addressAddress1]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerPersonRelationship.ADDRESS_ADDRESS_1 = new core_1.StringField('addressAddress1', PerPersonRelationship, 'Edm.String');
    /**
     * Static representation of the [[addressAddress10]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerPersonRelationship.ADDRESS_ADDRESS_10 = new core_1.StringField('addressAddress10', PerPersonRelationship, 'Edm.String');
    /**
     * Static representation of the [[addressAddress11]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerPersonRelationship.ADDRESS_ADDRESS_11 = new core_1.StringField('addressAddress11', PerPersonRelationship, 'Edm.String');
    /**
     * Static representation of the [[addressAddress12]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerPersonRelationship.ADDRESS_ADDRESS_12 = new core_1.StringField('addressAddress12', PerPersonRelationship, 'Edm.String');
    /**
     * Static representation of the [[addressAddress2]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerPersonRelationship.ADDRESS_ADDRESS_2 = new core_1.StringField('addressAddress2', PerPersonRelationship, 'Edm.String');
    /**
     * Static representation of the [[addressAddress3]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerPersonRelationship.ADDRESS_ADDRESS_3 = new core_1.StringField('addressAddress3', PerPersonRelationship, 'Edm.String');
    /**
     * Static representation of the [[addressAddress4]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerPersonRelationship.ADDRESS_ADDRESS_4 = new core_1.StringField('addressAddress4', PerPersonRelationship, 'Edm.String');
    /**
     * Static representation of the [[addressAddress5]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerPersonRelationship.ADDRESS_ADDRESS_5 = new core_1.StringField('addressAddress5', PerPersonRelationship, 'Edm.String');
    /**
     * Static representation of the [[addressAddress6]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerPersonRelationship.ADDRESS_ADDRESS_6 = new core_1.StringField('addressAddress6', PerPersonRelationship, 'Edm.String');
    /**
     * Static representation of the [[addressAddress7]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerPersonRelationship.ADDRESS_ADDRESS_7 = new core_1.StringField('addressAddress7', PerPersonRelationship, 'Edm.String');
    /**
     * Static representation of the [[addressAddress8]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerPersonRelationship.ADDRESS_ADDRESS_8 = new core_1.StringField('addressAddress8', PerPersonRelationship, 'Edm.String');
    /**
     * Static representation of the [[addressAddress9]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerPersonRelationship.ADDRESS_ADDRESS_9 = new core_1.StringField('addressAddress9', PerPersonRelationship, 'Edm.String');
    /**
     * Static representation of the [[addressCity]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerPersonRelationship.ADDRESS_CITY = new core_1.StringField('addressCity', PerPersonRelationship, 'Edm.String');
    /**
     * Static representation of the [[addressCountry]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerPersonRelationship.ADDRESS_COUNTRY = new core_1.StringField('addressCountry', PerPersonRelationship, 'Edm.String');
    /**
     * Static representation of the [[addressCounty]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerPersonRelationship.ADDRESS_COUNTY = new core_1.StringField('addressCounty', PerPersonRelationship, 'Edm.String');
    /**
     * Static representation of the [[addressNotes]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerPersonRelationship.ADDRESS_NOTES = new core_1.StringField('addressNotes', PerPersonRelationship, 'Edm.String');
    /**
     * Static representation of the [[addressProvince]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerPersonRelationship.ADDRESS_PROVINCE = new core_1.StringField('addressProvince', PerPersonRelationship, 'Edm.String');
    /**
     * Static representation of the [[addressState]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerPersonRelationship.ADDRESS_STATE = new core_1.StringField('addressState', PerPersonRelationship, 'Edm.String');
    /**
     * Static representation of the [[addressZipCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerPersonRelationship.ADDRESS_ZIP_CODE = new core_1.StringField('addressZipCode', PerPersonRelationship, 'Edm.String');
    /**
     * Static representation of the [[attachmentId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerPersonRelationship.ATTACHMENT_ID = new core_1.StringField('attachmentId', PerPersonRelationship, 'Edm.String');
    /**
     * Static representation of the [[createdBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerPersonRelationship.CREATED_BY = new core_1.StringField('createdBy', PerPersonRelationship, 'Edm.String');
    /**
     * Static representation of the [[createdDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerPersonRelationship.CREATED_DATE_TIME = new core_1.DateField('createdDateTime', PerPersonRelationship, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[createdOn]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerPersonRelationship.CREATED_ON = new core_1.DateField('createdOn', PerPersonRelationship, 'Edm.DateTime');
    /**
     * Static representation of the [[endDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerPersonRelationship.END_DATE = new core_1.DateField('endDate', PerPersonRelationship, 'Edm.DateTime');
    /**
     * Static representation of the [[firstName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerPersonRelationship.FIRST_NAME = new core_1.StringField('firstName', PerPersonRelationship, 'Edm.String');
    /**
     * Static representation of the [[isAccompanyingDependent]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerPersonRelationship.IS_ACCOMPANYING_DEPENDENT = new core_1.BooleanField('isAccompanyingDependent', PerPersonRelationship, 'Edm.Boolean');
    /**
     * Static representation of the [[isAddressSameAsPerson]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerPersonRelationship.IS_ADDRESS_SAME_AS_PERSON = new core_1.BooleanField('isAddressSameAsPerson', PerPersonRelationship, 'Edm.Boolean');
    /**
     * Static representation of the [[isBeneficiary]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerPersonRelationship.IS_BENEFICIARY = new core_1.BooleanField('isBeneficiary', PerPersonRelationship, 'Edm.Boolean');
    /**
     * Static representation of the [[lastModifiedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerPersonRelationship.LAST_MODIFIED_BY = new core_1.StringField('lastModifiedBy', PerPersonRelationship, 'Edm.String');
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerPersonRelationship.LAST_MODIFIED_DATE_TIME = new core_1.DateField('lastModifiedDateTime', PerPersonRelationship, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[lastModifiedOn]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerPersonRelationship.LAST_MODIFIED_ON = new core_1.DateField('lastModifiedOn', PerPersonRelationship, 'Edm.DateTime');
    /**
     * Static representation of the [[lastName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerPersonRelationship.LAST_NAME = new core_1.StringField('lastName', PerPersonRelationship, 'Edm.String');
    /**
     * Static representation of the [[operation]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerPersonRelationship.OPERATION = new core_1.StringField('operation', PerPersonRelationship, 'Edm.String');
    /**
     * Static representation of the [[personIdExternal]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerPersonRelationship.PERSON_ID_EXTERNAL = new core_1.StringField('personIdExternal', PerPersonRelationship, 'Edm.String');
    /**
     * Static representation of the [[relatedPersonIdExternal]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerPersonRelationship.RELATED_PERSON_ID_EXTERNAL = new core_1.StringField('relatedPersonIdExternal', PerPersonRelationship, 'Edm.String');
    /**
     * Static representation of the [[relationshipType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerPersonRelationship.RELATIONSHIP_TYPE = new core_1.StringField('relationshipType', PerPersonRelationship, 'Edm.String');
    /**
     * Static representation of the [[startDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerPersonRelationship.START_DATE = new core_1.DateField('startDate', PerPersonRelationship, 'Edm.DateTime');
    /**
     * Static representation of the one-to-one navigation property [[personNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerPersonRelationship.PERSON_NAV = new core_1.OneToOneLink('personNav', PerPersonRelationship, PerPerson_1.PerPerson);
    /**
     * Static representation of the one-to-one navigation property [[relNationalIdNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerPersonRelationship.REL_NATIONAL_ID_NAV = new core_1.OneToOneLink('relNationalIdNav', PerPersonRelationship, PerNationalId_1.PerNationalId);
    /**
     * Static representation of the one-to-one navigation property [[relPersonNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerPersonRelationship.REL_PERSON_NAV = new core_1.OneToOneLink('relPersonNav', PerPersonRelationship, PerPerson_1.PerPerson);
    /**
     * Static representation of the one-to-one navigation property [[relPersonalNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerPersonRelationship.REL_PERSONAL_NAV = new core_1.OneToOneLink('relPersonalNav', PerPersonRelationship, PerPersonal_1.PerPersonal);
    /**
     * Static representation of the one-to-one navigation property [[relationshipTypeNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PerPersonRelationship.RELATIONSHIP_TYPE_NAV = new core_1.OneToOneLink('relationshipTypeNav', PerPersonRelationship, PicklistOption_1.PicklistOption);
    /**
     * All fields of the PerPersonRelationship entity.
     */
    PerPersonRelationship._allFields = [
        PerPersonRelationship.ADDRESS_ADDRESS_1,
        PerPersonRelationship.ADDRESS_ADDRESS_10,
        PerPersonRelationship.ADDRESS_ADDRESS_11,
        PerPersonRelationship.ADDRESS_ADDRESS_12,
        PerPersonRelationship.ADDRESS_ADDRESS_2,
        PerPersonRelationship.ADDRESS_ADDRESS_3,
        PerPersonRelationship.ADDRESS_ADDRESS_4,
        PerPersonRelationship.ADDRESS_ADDRESS_5,
        PerPersonRelationship.ADDRESS_ADDRESS_6,
        PerPersonRelationship.ADDRESS_ADDRESS_7,
        PerPersonRelationship.ADDRESS_ADDRESS_8,
        PerPersonRelationship.ADDRESS_ADDRESS_9,
        PerPersonRelationship.ADDRESS_CITY,
        PerPersonRelationship.ADDRESS_COUNTRY,
        PerPersonRelationship.ADDRESS_COUNTY,
        PerPersonRelationship.ADDRESS_NOTES,
        PerPersonRelationship.ADDRESS_PROVINCE,
        PerPersonRelationship.ADDRESS_STATE,
        PerPersonRelationship.ADDRESS_ZIP_CODE,
        PerPersonRelationship.ATTACHMENT_ID,
        PerPersonRelationship.CREATED_BY,
        PerPersonRelationship.CREATED_DATE_TIME,
        PerPersonRelationship.CREATED_ON,
        PerPersonRelationship.END_DATE,
        PerPersonRelationship.FIRST_NAME,
        PerPersonRelationship.IS_ACCOMPANYING_DEPENDENT,
        PerPersonRelationship.IS_ADDRESS_SAME_AS_PERSON,
        PerPersonRelationship.IS_BENEFICIARY,
        PerPersonRelationship.LAST_MODIFIED_BY,
        PerPersonRelationship.LAST_MODIFIED_DATE_TIME,
        PerPersonRelationship.LAST_MODIFIED_ON,
        PerPersonRelationship.LAST_NAME,
        PerPersonRelationship.OPERATION,
        PerPersonRelationship.PERSON_ID_EXTERNAL,
        PerPersonRelationship.RELATED_PERSON_ID_EXTERNAL,
        PerPersonRelationship.RELATIONSHIP_TYPE,
        PerPersonRelationship.START_DATE,
        PerPersonRelationship.PERSON_NAV,
        PerPersonRelationship.REL_NATIONAL_ID_NAV,
        PerPersonRelationship.REL_PERSON_NAV,
        PerPersonRelationship.REL_PERSONAL_NAV,
        PerPersonRelationship.RELATIONSHIP_TYPE_NAV
    ];
    /**
     * All fields selector.
     */
    PerPersonRelationship.ALL_FIELDS = new core_1.AllFields('*', PerPersonRelationship);
    /**
     * All key fields of the PerPersonRelationship entity.
     */
    PerPersonRelationship._keyFields = [PerPersonRelationship.PERSON_ID_EXTERNAL, PerPersonRelationship.RELATED_PERSON_ID_EXTERNAL, PerPersonRelationship.START_DATE];
    /**
     * Mapping of all key field names to the respective static field property PerPersonRelationship.
     */
    PerPersonRelationship._keys = PerPersonRelationship._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(PerPersonRelationship = exports.PerPersonRelationship || (exports.PerPersonRelationship = {}));
exports.PerPersonRelationship = PerPersonRelationship;
//# sourceMappingURL=PerPersonRelationship.js.map
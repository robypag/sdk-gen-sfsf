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
var PersonTypeUsageRequestBuilder_1 = require("./PersonTypeUsageRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "PersonTypeUsage" of service "SFOData".
 */
var PersonTypeUsage = /** @class */ (function (_super) {
    __extends(PersonTypeUsage, _super);
    function PersonTypeUsage() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `PersonTypeUsage`.
     * @returns A builder that constructs instances of entity type `PersonTypeUsage`.
     */
    PersonTypeUsage.builder = function () {
        return core_1.Entity.entityBuilder(PersonTypeUsage);
    };
    /**
     * Returns a request builder to construct requests for operations on the `PersonTypeUsage` entity type.
     * @returns A `PersonTypeUsage` request builder.
     */
    PersonTypeUsage.requestBuilder = function () {
        return new PersonTypeUsageRequestBuilder_1.PersonTypeUsageRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `PersonTypeUsage`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `PersonTypeUsage`.
     */
    PersonTypeUsage.customField = function (fieldName) {
        return core_1.Entity.customFieldSelector(fieldName, PersonTypeUsage);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    PersonTypeUsage.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for PersonTypeUsage.
     */
    PersonTypeUsage._entityName = 'PersonTypeUsage';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for PersonTypeUsage.
     */
    PersonTypeUsage._serviceName = 'SFOData';
    /**
     * Default url path for the according service.
     */
    PersonTypeUsage._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return PersonTypeUsage;
}(core_1.Entity));
exports.PersonTypeUsage = PersonTypeUsage;
var User_1 = require("./User");
var MdfEnumValue_1 = require("./MdfEnumValue");
var PersonType_1 = require("./PersonType");
var WfRequest_1 = require("./WfRequest");
(function (PersonTypeUsage) {
    /**
     * Static representation of the [[createdBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PersonTypeUsage.CREATED_BY = new core_1.StringField('createdBy', PersonTypeUsage, 'Edm.String');
    /**
     * Static representation of the [[createdDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PersonTypeUsage.CREATED_DATE_TIME = new core_1.DateField('createdDateTime', PersonTypeUsage, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[endDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PersonTypeUsage.END_DATE = new core_1.DateField('endDate', PersonTypeUsage, 'Edm.DateTime');
    /**
     * Static representation of the [[externalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PersonTypeUsage.EXTERNAL_CODE = new core_1.BigNumberField('externalCode', PersonTypeUsage, 'Edm.Int64');
    /**
     * Static representation of the [[lastModifiedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PersonTypeUsage.LAST_MODIFIED_BY = new core_1.StringField('lastModifiedBy', PersonTypeUsage, 'Edm.String');
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PersonTypeUsage.LAST_MODIFIED_DATE_TIME = new core_1.DateField('lastModifiedDateTime', PersonTypeUsage, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PersonTypeUsage.MDF_SYSTEM_RECORD_STATUS = new core_1.StringField('mdfSystemRecordStatus', PersonTypeUsage, 'Edm.String');
    /**
     * Static representation of the [[person]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PersonTypeUsage.PERSON = new core_1.StringField('person', PersonTypeUsage, 'Edm.String');
    /**
     * Static representation of the [[personType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PersonTypeUsage.PERSON_TYPE = new core_1.StringField('personType', PersonTypeUsage, 'Edm.String');
    /**
     * Static representation of the [[startDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PersonTypeUsage.START_DATE = new core_1.DateField('startDate', PersonTypeUsage, 'Edm.DateTime');
    /**
     * Static representation of the one-to-one navigation property [[createdByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PersonTypeUsage.CREATED_BY_NAV = new core_1.OneToOneLink('createdByNav', PersonTypeUsage, User_1.User);
    /**
     * Static representation of the one-to-one navigation property [[lastModifiedByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PersonTypeUsage.LAST_MODIFIED_BY_NAV = new core_1.OneToOneLink('lastModifiedByNav', PersonTypeUsage, User_1.User);
    /**
     * Static representation of the one-to-one navigation property [[mdfSystemRecordStatusNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PersonTypeUsage.MDF_SYSTEM_RECORD_STATUS_NAV = new core_1.OneToOneLink('mdfSystemRecordStatusNav', PersonTypeUsage, MdfEnumValue_1.MdfEnumValue);
    /**
     * Static representation of the one-to-one navigation property [[personTypeNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PersonTypeUsage.PERSON_TYPE_NAV = new core_1.OneToOneLink('personTypeNav', PersonTypeUsage, PersonType_1.PersonType);
    /**
     * Static representation of the one-to-many navigation property [[wfRequestNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PersonTypeUsage.WF_REQUEST_NAV = new core_1.Link('wfRequestNav', PersonTypeUsage, WfRequest_1.WfRequest);
    /**
     * All fields of the PersonTypeUsage entity.
     */
    PersonTypeUsage._allFields = [
        PersonTypeUsage.CREATED_BY,
        PersonTypeUsage.CREATED_DATE_TIME,
        PersonTypeUsage.END_DATE,
        PersonTypeUsage.EXTERNAL_CODE,
        PersonTypeUsage.LAST_MODIFIED_BY,
        PersonTypeUsage.LAST_MODIFIED_DATE_TIME,
        PersonTypeUsage.MDF_SYSTEM_RECORD_STATUS,
        PersonTypeUsage.PERSON,
        PersonTypeUsage.PERSON_TYPE,
        PersonTypeUsage.START_DATE,
        PersonTypeUsage.CREATED_BY_NAV,
        PersonTypeUsage.LAST_MODIFIED_BY_NAV,
        PersonTypeUsage.MDF_SYSTEM_RECORD_STATUS_NAV,
        PersonTypeUsage.PERSON_TYPE_NAV,
        PersonTypeUsage.WF_REQUEST_NAV
    ];
    /**
     * All fields selector.
     */
    PersonTypeUsage.ALL_FIELDS = new core_1.AllFields('*', PersonTypeUsage);
    /**
     * All key fields of the PersonTypeUsage entity.
     */
    PersonTypeUsage._keyFields = [PersonTypeUsage.EXTERNAL_CODE];
    /**
     * Mapping of all key field names to the respective static field property PersonTypeUsage.
     */
    PersonTypeUsage._keys = PersonTypeUsage._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(PersonTypeUsage = exports.PersonTypeUsage || (exports.PersonTypeUsage = {}));
exports.PersonTypeUsage = PersonTypeUsage;
//# sourceMappingURL=PersonTypeUsage.js.map
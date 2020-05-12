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
var Cust_SubBusinessUnitRequestBuilder_1 = require("./Cust_SubBusinessUnitRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "cust_SubBusinessUnit" of service "SFOData".
 */
var Cust_SubBusinessUnit = /** @class */ (function (_super) {
    __extends(Cust_SubBusinessUnit, _super);
    function Cust_SubBusinessUnit() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `Cust_SubBusinessUnit`.
     * @returns A builder that constructs instances of entity type `Cust_SubBusinessUnit`.
     */
    Cust_SubBusinessUnit.builder = function () {
        return core_1.Entity.entityBuilder(Cust_SubBusinessUnit);
    };
    /**
     * Returns a request builder to construct requests for operations on the `Cust_SubBusinessUnit` entity type.
     * @returns A `Cust_SubBusinessUnit` request builder.
     */
    Cust_SubBusinessUnit.requestBuilder = function () {
        return new Cust_SubBusinessUnitRequestBuilder_1.Cust_SubBusinessUnitRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `Cust_SubBusinessUnit`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `Cust_SubBusinessUnit`.
     */
    Cust_SubBusinessUnit.customField = function (fieldName) {
        return core_1.Entity.customFieldSelector(fieldName, Cust_SubBusinessUnit);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    Cust_SubBusinessUnit.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for Cust_SubBusinessUnit.
     */
    Cust_SubBusinessUnit._entityName = 'cust_SubBusinessUnit';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for Cust_SubBusinessUnit.
     */
    Cust_SubBusinessUnit._serviceName = 'SFOData';
    /**
     * Default url path for the according service.
     */
    Cust_SubBusinessUnit._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return Cust_SubBusinessUnit;
}(core_1.Entity));
exports.Cust_SubBusinessUnit = Cust_SubBusinessUnit;
var User_1 = require("./User");
var FoCompany_1 = require("./FoCompany");
var MdfEnumValue_1 = require("./MdfEnumValue");
var WfRequest_1 = require("./WfRequest");
(function (Cust_SubBusinessUnit) {
    /**
     * Static representation of the [[createdBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Cust_SubBusinessUnit.CREATED_BY = new core_1.StringField('createdBy', Cust_SubBusinessUnit, 'Edm.String');
    /**
     * Static representation of the [[createdDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Cust_SubBusinessUnit.CREATED_DATE_TIME = new core_1.DateField('createdDateTime', Cust_SubBusinessUnit, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[custDescription]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Cust_SubBusinessUnit.CUST_DESCRIPTION = new core_1.StringField('cust_description', Cust_SubBusinessUnit, 'Edm.String');
    /**
     * Static representation of the [[custEffectiveEndDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Cust_SubBusinessUnit.CUST_EFFECTIVE_END_DATE = new core_1.DateField('cust_effectiveEndDate', Cust_SubBusinessUnit, 'Edm.DateTime');
    /**
     * Static representation of the [[effectiveStartDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Cust_SubBusinessUnit.EFFECTIVE_START_DATE = new core_1.DateField('effectiveStartDate', Cust_SubBusinessUnit, 'Edm.DateTime');
    /**
     * Static representation of the [[externalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Cust_SubBusinessUnit.EXTERNAL_CODE = new core_1.StringField('externalCode', Cust_SubBusinessUnit, 'Edm.String');
    /**
     * Static representation of the [[externalName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Cust_SubBusinessUnit.EXTERNAL_NAME = new core_1.StringField('externalName', Cust_SubBusinessUnit, 'Edm.String');
    /**
     * Static representation of the [[lastModifiedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Cust_SubBusinessUnit.LAST_MODIFIED_BY = new core_1.StringField('lastModifiedBy', Cust_SubBusinessUnit, 'Edm.String');
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Cust_SubBusinessUnit.LAST_MODIFIED_DATE_TIME = new core_1.DateField('lastModifiedDateTime', Cust_SubBusinessUnit, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[mdfSystemEffectiveEndDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Cust_SubBusinessUnit.MDF_SYSTEM_EFFECTIVE_END_DATE = new core_1.DateField('mdfSystemEffectiveEndDate', Cust_SubBusinessUnit, 'Edm.DateTime');
    /**
     * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Cust_SubBusinessUnit.MDF_SYSTEM_RECORD_STATUS = new core_1.StringField('mdfSystemRecordStatus', Cust_SubBusinessUnit, 'Edm.String');
    /**
     * Static representation of the [[mdfSystemStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Cust_SubBusinessUnit.MDF_SYSTEM_STATUS = new core_1.StringField('mdfSystemStatus', Cust_SubBusinessUnit, 'Edm.String');
    /**
     * Static representation of the one-to-one navigation property [[createdByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Cust_SubBusinessUnit.CREATED_BY_NAV = new core_1.OneToOneLink('createdByNav', Cust_SubBusinessUnit, User_1.User);
    /**
     * Static representation of the one-to-many navigation property [[custLegalEntity]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Cust_SubBusinessUnit.CUST_LEGAL_ENTITY = new core_1.Link('cust_legalEntity', Cust_SubBusinessUnit, FoCompany_1.FoCompany);
    /**
     * Static representation of the one-to-one navigation property [[lastModifiedByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Cust_SubBusinessUnit.LAST_MODIFIED_BY_NAV = new core_1.OneToOneLink('lastModifiedByNav', Cust_SubBusinessUnit, User_1.User);
    /**
     * Static representation of the one-to-one navigation property [[mdfSystemRecordStatusNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Cust_SubBusinessUnit.MDF_SYSTEM_RECORD_STATUS_NAV = new core_1.OneToOneLink('mdfSystemRecordStatusNav', Cust_SubBusinessUnit, MdfEnumValue_1.MdfEnumValue);
    /**
     * Static representation of the one-to-one navigation property [[mdfSystemStatusNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Cust_SubBusinessUnit.MDF_SYSTEM_STATUS_NAV = new core_1.OneToOneLink('mdfSystemStatusNav', Cust_SubBusinessUnit, MdfEnumValue_1.MdfEnumValue);
    /**
     * Static representation of the one-to-many navigation property [[wfRequestNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Cust_SubBusinessUnit.WF_REQUEST_NAV = new core_1.Link('wfRequestNav', Cust_SubBusinessUnit, WfRequest_1.WfRequest);
    /**
     * All fields of the Cust_SubBusinessUnit entity.
     */
    Cust_SubBusinessUnit._allFields = [
        Cust_SubBusinessUnit.CREATED_BY,
        Cust_SubBusinessUnit.CREATED_DATE_TIME,
        Cust_SubBusinessUnit.CUST_DESCRIPTION,
        Cust_SubBusinessUnit.CUST_EFFECTIVE_END_DATE,
        Cust_SubBusinessUnit.EFFECTIVE_START_DATE,
        Cust_SubBusinessUnit.EXTERNAL_CODE,
        Cust_SubBusinessUnit.EXTERNAL_NAME,
        Cust_SubBusinessUnit.LAST_MODIFIED_BY,
        Cust_SubBusinessUnit.LAST_MODIFIED_DATE_TIME,
        Cust_SubBusinessUnit.MDF_SYSTEM_EFFECTIVE_END_DATE,
        Cust_SubBusinessUnit.MDF_SYSTEM_RECORD_STATUS,
        Cust_SubBusinessUnit.MDF_SYSTEM_STATUS,
        Cust_SubBusinessUnit.CREATED_BY_NAV,
        Cust_SubBusinessUnit.CUST_LEGAL_ENTITY,
        Cust_SubBusinessUnit.LAST_MODIFIED_BY_NAV,
        Cust_SubBusinessUnit.MDF_SYSTEM_RECORD_STATUS_NAV,
        Cust_SubBusinessUnit.MDF_SYSTEM_STATUS_NAV,
        Cust_SubBusinessUnit.WF_REQUEST_NAV
    ];
    /**
     * All fields selector.
     */
    Cust_SubBusinessUnit.ALL_FIELDS = new core_1.AllFields('*', Cust_SubBusinessUnit);
    /**
     * All key fields of the Cust_SubBusinessUnit entity.
     */
    Cust_SubBusinessUnit._keyFields = [Cust_SubBusinessUnit.EFFECTIVE_START_DATE, Cust_SubBusinessUnit.EXTERNAL_CODE];
    /**
     * Mapping of all key field names to the respective static field property Cust_SubBusinessUnit.
     */
    Cust_SubBusinessUnit._keys = Cust_SubBusinessUnit._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(Cust_SubBusinessUnit = exports.Cust_SubBusinessUnit || (exports.Cust_SubBusinessUnit = {}));
exports.Cust_SubBusinessUnit = Cust_SubBusinessUnit;
//# sourceMappingURL=Cust_SubBusinessUnit.js.map
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
var CandidateProfileExtensionRequestBuilder_1 = require("./CandidateProfileExtensionRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "CandidateProfileExtension" of service "SFOData".
 */
var CandidateProfileExtension = /** @class */ (function (_super) {
    __extends(CandidateProfileExtension, _super);
    function CandidateProfileExtension() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `CandidateProfileExtension`.
     * @returns A builder that constructs instances of entity type `CandidateProfileExtension`.
     */
    CandidateProfileExtension.builder = function () {
        return core_1.Entity.entityBuilder(CandidateProfileExtension);
    };
    /**
     * Returns a request builder to construct requests for operations on the `CandidateProfileExtension` entity type.
     * @returns A `CandidateProfileExtension` request builder.
     */
    CandidateProfileExtension.requestBuilder = function () {
        return new CandidateProfileExtensionRequestBuilder_1.CandidateProfileExtensionRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `CandidateProfileExtension`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `CandidateProfileExtension`.
     */
    CandidateProfileExtension.customField = function (fieldName) {
        return core_1.Entity.customFieldSelector(fieldName, CandidateProfileExtension);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    CandidateProfileExtension.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for CandidateProfileExtension.
     */
    CandidateProfileExtension._entityName = 'CandidateProfileExtension';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for CandidateProfileExtension.
     */
    CandidateProfileExtension._serviceName = 'SFOData';
    /**
     * Default url path for the according service.
     */
    CandidateProfileExtension._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return CandidateProfileExtension;
}(core_1.Entity));
exports.CandidateProfileExtension = CandidateProfileExtension;
var User_1 = require("./User");
var PickListValueV2_1 = require("./PickListValueV2");
var MdfEnumValue_1 = require("./MdfEnumValue");
var WfRequest_1 = require("./WfRequest");
(function (CandidateProfileExtension) {
    /**
     * Static representation of the [[candidateId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CandidateProfileExtension.CANDIDATE_ID = new core_1.BigNumberField('candidateId', CandidateProfileExtension, 'Edm.Int64');
    /**
     * Static representation of the [[createdBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CandidateProfileExtension.CREATED_BY = new core_1.StringField('createdBy', CandidateProfileExtension, 'Edm.String');
    /**
     * Static representation of the [[createdDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CandidateProfileExtension.CREATED_DATE_TIME = new core_1.DateField('createdDateTime', CandidateProfileExtension, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[custGradYear]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CandidateProfileExtension.CUST_GRAD_YEAR = new core_1.StringField('cust_GradYear', CandidateProfileExtension, 'Edm.String');
    /**
     * Static representation of the [[lastModifiedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CandidateProfileExtension.LAST_MODIFIED_BY = new core_1.StringField('lastModifiedBy', CandidateProfileExtension, 'Edm.String');
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CandidateProfileExtension.LAST_MODIFIED_DATE_TIME = new core_1.DateField('lastModifiedDateTime', CandidateProfileExtension, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[mdfSystemRecordStatus]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CandidateProfileExtension.MDF_SYSTEM_RECORD_STATUS = new core_1.StringField('mdfSystemRecordStatus', CandidateProfileExtension, 'Edm.String');
    /**
     * Static representation of the one-to-one navigation property [[createdByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CandidateProfileExtension.CREATED_BY_NAV = new core_1.OneToOneLink('createdByNav', CandidateProfileExtension, User_1.User);
    /**
     * Static representation of the one-to-many navigation property [[custGradYearNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CandidateProfileExtension.CUST_GRAD_YEAR_NAV = new core_1.Link('cust_GradYearNav', CandidateProfileExtension, PickListValueV2_1.PickListValueV2);
    /**
     * Static representation of the one-to-one navigation property [[lastModifiedByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CandidateProfileExtension.LAST_MODIFIED_BY_NAV = new core_1.OneToOneLink('lastModifiedByNav', CandidateProfileExtension, User_1.User);
    /**
     * Static representation of the one-to-one navigation property [[mdfSystemRecordStatusNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CandidateProfileExtension.MDF_SYSTEM_RECORD_STATUS_NAV = new core_1.OneToOneLink('mdfSystemRecordStatusNav', CandidateProfileExtension, MdfEnumValue_1.MdfEnumValue);
    /**
     * Static representation of the one-to-many navigation property [[wfRequestNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CandidateProfileExtension.WF_REQUEST_NAV = new core_1.Link('wfRequestNav', CandidateProfileExtension, WfRequest_1.WfRequest);
    /**
     * All fields of the CandidateProfileExtension entity.
     */
    CandidateProfileExtension._allFields = [
        CandidateProfileExtension.CANDIDATE_ID,
        CandidateProfileExtension.CREATED_BY,
        CandidateProfileExtension.CREATED_DATE_TIME,
        CandidateProfileExtension.CUST_GRAD_YEAR,
        CandidateProfileExtension.LAST_MODIFIED_BY,
        CandidateProfileExtension.LAST_MODIFIED_DATE_TIME,
        CandidateProfileExtension.MDF_SYSTEM_RECORD_STATUS,
        CandidateProfileExtension.CREATED_BY_NAV,
        CandidateProfileExtension.CUST_GRAD_YEAR_NAV,
        CandidateProfileExtension.LAST_MODIFIED_BY_NAV,
        CandidateProfileExtension.MDF_SYSTEM_RECORD_STATUS_NAV,
        CandidateProfileExtension.WF_REQUEST_NAV
    ];
    /**
     * All fields selector.
     */
    CandidateProfileExtension.ALL_FIELDS = new core_1.AllFields('*', CandidateProfileExtension);
    /**
     * All key fields of the CandidateProfileExtension entity.
     */
    CandidateProfileExtension._keyFields = [CandidateProfileExtension.CANDIDATE_ID];
    /**
     * Mapping of all key field names to the respective static field property CandidateProfileExtension.
     */
    CandidateProfileExtension._keys = CandidateProfileExtension._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(CandidateProfileExtension = exports.CandidateProfileExtension || (exports.CandidateProfileExtension = {}));
exports.CandidateProfileExtension = CandidateProfileExtension;
//# sourceMappingURL=CandidateProfileExtension.js.map
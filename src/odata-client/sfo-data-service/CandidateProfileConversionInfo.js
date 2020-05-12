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
var CandidateProfileConversionInfoRequestBuilder_1 = require("./CandidateProfileConversionInfoRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "CandidateProfileConversionInfo" of service "SFOData".
 */
var CandidateProfileConversionInfo = /** @class */ (function (_super) {
    __extends(CandidateProfileConversionInfo, _super);
    function CandidateProfileConversionInfo() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `CandidateProfileConversionInfo`.
     * @returns A builder that constructs instances of entity type `CandidateProfileConversionInfo`.
     */
    CandidateProfileConversionInfo.builder = function () {
        return core_1.Entity.entityBuilder(CandidateProfileConversionInfo);
    };
    /**
     * Returns a request builder to construct requests for operations on the `CandidateProfileConversionInfo` entity type.
     * @returns A `CandidateProfileConversionInfo` request builder.
     */
    CandidateProfileConversionInfo.requestBuilder = function () {
        return new CandidateProfileConversionInfoRequestBuilder_1.CandidateProfileConversionInfoRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `CandidateProfileConversionInfo`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `CandidateProfileConversionInfo`.
     */
    CandidateProfileConversionInfo.customField = function (fieldName) {
        return core_1.Entity.customFieldSelector(fieldName, CandidateProfileConversionInfo);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    CandidateProfileConversionInfo.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for CandidateProfileConversionInfo.
     */
    CandidateProfileConversionInfo._entityName = 'CandidateProfileConversionInfo';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for CandidateProfileConversionInfo.
     */
    CandidateProfileConversionInfo._serviceName = 'SFOData';
    /**
     * Default url path for the according service.
     */
    CandidateProfileConversionInfo._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return CandidateProfileConversionInfo;
}(core_1.Entity));
exports.CandidateProfileConversionInfo = CandidateProfileConversionInfo;
var User_1 = require("./User");
(function (CandidateProfileConversionInfo) {
    /**
     * Static representation of the [[alumniUsersSysId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CandidateProfileConversionInfo.ALUMNI_USERS_SYS_ID = new core_1.StringField('alumniUsersSysId', CandidateProfileConversionInfo, 'Edm.String');
    /**
     * Static representation of the [[candidateId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CandidateProfileConversionInfo.CANDIDATE_ID = new core_1.BigNumberField('candidateId', CandidateProfileConversionInfo, 'Edm.Int64');
    /**
     * Static representation of the [[isAlumni]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CandidateProfileConversionInfo.IS_ALUMNI = new core_1.BooleanField('isAlumni', CandidateProfileConversionInfo, 'Edm.Boolean');
    /**
     * Static representation of the [[postConvExtEmailAddress1]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CandidateProfileConversionInfo.POST_CONV_EXT_EMAIL_ADDRESS_1 = new core_1.StringField('postConvExtEmailAddress1', CandidateProfileConversionInfo, 'Edm.String');
    /**
     * Static representation of the [[postConvExtEmailAddress2]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CandidateProfileConversionInfo.POST_CONV_EXT_EMAIL_ADDRESS_2 = new core_1.StringField('postConvExtEmailAddress2', CandidateProfileConversionInfo, 'Edm.String');
    /**
     * Static representation of the one-to-one navigation property [[alumniUser]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CandidateProfileConversionInfo.ALUMNI_USER = new core_1.OneToOneLink('alumniUser', CandidateProfileConversionInfo, User_1.User);
    /**
     * All fields of the CandidateProfileConversionInfo entity.
     */
    CandidateProfileConversionInfo._allFields = [
        CandidateProfileConversionInfo.ALUMNI_USERS_SYS_ID,
        CandidateProfileConversionInfo.CANDIDATE_ID,
        CandidateProfileConversionInfo.IS_ALUMNI,
        CandidateProfileConversionInfo.POST_CONV_EXT_EMAIL_ADDRESS_1,
        CandidateProfileConversionInfo.POST_CONV_EXT_EMAIL_ADDRESS_2,
        CandidateProfileConversionInfo.ALUMNI_USER
    ];
    /**
     * All fields selector.
     */
    CandidateProfileConversionInfo.ALL_FIELDS = new core_1.AllFields('*', CandidateProfileConversionInfo);
    /**
     * All key fields of the CandidateProfileConversionInfo entity.
     */
    CandidateProfileConversionInfo._keyFields = [CandidateProfileConversionInfo.CANDIDATE_ID];
    /**
     * Mapping of all key field names to the respective static field property CandidateProfileConversionInfo.
     */
    CandidateProfileConversionInfo._keys = CandidateProfileConversionInfo._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(CandidateProfileConversionInfo = exports.CandidateProfileConversionInfo || (exports.CandidateProfileConversionInfo = {}));
exports.CandidateProfileConversionInfo = CandidateProfileConversionInfo;
//# sourceMappingURL=CandidateProfileConversionInfo.js.map
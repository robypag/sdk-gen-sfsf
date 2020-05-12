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
var CandidateBackground_MobilityRequestBuilder_1 = require("./CandidateBackground_MobilityRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "CandidateBackground_Mobility" of service "SFOData".
 */
var CandidateBackground_Mobility = /** @class */ (function (_super) {
    __extends(CandidateBackground_Mobility, _super);
    function CandidateBackground_Mobility() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `CandidateBackground_Mobility`.
     * @returns A builder that constructs instances of entity type `CandidateBackground_Mobility`.
     */
    CandidateBackground_Mobility.builder = function () {
        return core_1.Entity.entityBuilder(CandidateBackground_Mobility);
    };
    /**
     * Returns a request builder to construct requests for operations on the `CandidateBackground_Mobility` entity type.
     * @returns A `CandidateBackground_Mobility` request builder.
     */
    CandidateBackground_Mobility.requestBuilder = function () {
        return new CandidateBackground_MobilityRequestBuilder_1.CandidateBackground_MobilityRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `CandidateBackground_Mobility`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `CandidateBackground_Mobility`.
     */
    CandidateBackground_Mobility.customField = function (fieldName) {
        return core_1.Entity.customFieldSelector(fieldName, CandidateBackground_Mobility);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    CandidateBackground_Mobility.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for CandidateBackground_Mobility.
     */
    CandidateBackground_Mobility._entityName = 'CandidateBackground_Mobility';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for CandidateBackground_Mobility.
     */
    CandidateBackground_Mobility._serviceName = 'SFOData';
    /**
     * Default url path for the according service.
     */
    CandidateBackground_Mobility._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return CandidateBackground_Mobility;
}(core_1.Entity));
exports.CandidateBackground_Mobility = CandidateBackground_Mobility;
var Candidate_1 = require("./Candidate");
var PicklistOption_1 = require("./PicklistOption");
(function (CandidateBackground_Mobility) {
    /**
     * Static representation of the [[backgroundElementId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CandidateBackground_Mobility.BACKGROUND_ELEMENT_ID = new core_1.BigNumberField('backgroundElementId', CandidateBackground_Mobility, 'Edm.Int64');
    /**
     * Static representation of the [[bgOrderPos]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CandidateBackground_Mobility.BG_ORDER_POS = new core_1.BigNumberField('bgOrderPos', CandidateBackground_Mobility, 'Edm.Int64');
    /**
     * Static representation of the [[candidateId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CandidateBackground_Mobility.CANDIDATE_ID = new core_1.BigNumberField('candidateId', CandidateBackground_Mobility, 'Edm.Int64');
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CandidateBackground_Mobility.LAST_MODIFIED_DATE_TIME = new core_1.DateField('lastModifiedDateTime', CandidateBackground_Mobility, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[location]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CandidateBackground_Mobility.LOCATION = new core_1.StringField('location', CandidateBackground_Mobility, 'Edm.String');
    /**
     * Static representation of the [[willingness]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CandidateBackground_Mobility.WILLINGNESS = new core_1.StringField('willingness', CandidateBackground_Mobility, 'Edm.String');
    /**
     * Static representation of the one-to-one navigation property [[candidate]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CandidateBackground_Mobility.CANDIDATE = new core_1.OneToOneLink('candidate', CandidateBackground_Mobility, Candidate_1.Candidate);
    /**
     * Static representation of the one-to-one navigation property [[willingnessNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CandidateBackground_Mobility.WILLINGNESS_NAV = new core_1.OneToOneLink('willingnessNav', CandidateBackground_Mobility, PicklistOption_1.PicklistOption);
    /**
     * All fields of the CandidateBackground_Mobility entity.
     */
    CandidateBackground_Mobility._allFields = [
        CandidateBackground_Mobility.BACKGROUND_ELEMENT_ID,
        CandidateBackground_Mobility.BG_ORDER_POS,
        CandidateBackground_Mobility.CANDIDATE_ID,
        CandidateBackground_Mobility.LAST_MODIFIED_DATE_TIME,
        CandidateBackground_Mobility.LOCATION,
        CandidateBackground_Mobility.WILLINGNESS,
        CandidateBackground_Mobility.CANDIDATE,
        CandidateBackground_Mobility.WILLINGNESS_NAV
    ];
    /**
     * All fields selector.
     */
    CandidateBackground_Mobility.ALL_FIELDS = new core_1.AllFields('*', CandidateBackground_Mobility);
    /**
     * All key fields of the CandidateBackground_Mobility entity.
     */
    CandidateBackground_Mobility._keyFields = [CandidateBackground_Mobility.BACKGROUND_ELEMENT_ID];
    /**
     * Mapping of all key field names to the respective static field property CandidateBackground_Mobility.
     */
    CandidateBackground_Mobility._keys = CandidateBackground_Mobility._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(CandidateBackground_Mobility = exports.CandidateBackground_Mobility || (exports.CandidateBackground_Mobility = {}));
exports.CandidateBackground_Mobility = CandidateBackground_Mobility;
//# sourceMappingURL=CandidateBackground_Mobility.js.map
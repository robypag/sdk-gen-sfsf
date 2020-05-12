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
var CalibrationSubjectRankRequestBuilder_1 = require("./CalibrationSubjectRankRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "CalibrationSubjectRank" of service "SFOData".
 */
var CalibrationSubjectRank = /** @class */ (function (_super) {
    __extends(CalibrationSubjectRank, _super);
    function CalibrationSubjectRank() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `CalibrationSubjectRank`.
     * @returns A builder that constructs instances of entity type `CalibrationSubjectRank`.
     */
    CalibrationSubjectRank.builder = function () {
        return core_1.Entity.entityBuilder(CalibrationSubjectRank);
    };
    /**
     * Returns a request builder to construct requests for operations on the `CalibrationSubjectRank` entity type.
     * @returns A `CalibrationSubjectRank` request builder.
     */
    CalibrationSubjectRank.requestBuilder = function () {
        return new CalibrationSubjectRankRequestBuilder_1.CalibrationSubjectRankRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `CalibrationSubjectRank`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `CalibrationSubjectRank`.
     */
    CalibrationSubjectRank.customField = function (fieldName) {
        return core_1.Entity.customFieldSelector(fieldName, CalibrationSubjectRank);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    CalibrationSubjectRank.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for CalibrationSubjectRank.
     */
    CalibrationSubjectRank._entityName = 'CalibrationSubjectRank';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for CalibrationSubjectRank.
     */
    CalibrationSubjectRank._serviceName = 'SFOData';
    /**
     * Default url path for the according service.
     */
    CalibrationSubjectRank._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return CalibrationSubjectRank;
}(core_1.Entity));
exports.CalibrationSubjectRank = CalibrationSubjectRank;
var CalibrationSessionSubject_1 = require("./CalibrationSessionSubject");
(function (CalibrationSubjectRank) {
    /**
     * Static representation of the [[dataType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CalibrationSubjectRank.DATA_TYPE = new core_1.NumberField('dataType', CalibrationSubjectRank, 'Edm.Int32');
    /**
     * Static representation of the [[rank]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CalibrationSubjectRank.RANK = new core_1.NumberField('rank', CalibrationSubjectRank, 'Edm.Int32');
    /**
     * Static representation of the [[ratingValue]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CalibrationSubjectRank.RATING_VALUE = new core_1.NumberField('ratingValue', CalibrationSubjectRank, 'Edm.Double');
    /**
     * Static representation of the [[subjectRankId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CalibrationSubjectRank.SUBJECT_RANK_ID = new core_1.BigNumberField('subjectRankId', CalibrationSubjectRank, 'Edm.Int64');
    /**
     * Static representation of the one-to-one navigation property [[calSessionSubject]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CalibrationSubjectRank.CAL_SESSION_SUBJECT = new core_1.OneToOneLink('calSessionSubject', CalibrationSubjectRank, CalibrationSessionSubject_1.CalibrationSessionSubject);
    /**
     * All fields of the CalibrationSubjectRank entity.
     */
    CalibrationSubjectRank._allFields = [
        CalibrationSubjectRank.DATA_TYPE,
        CalibrationSubjectRank.RANK,
        CalibrationSubjectRank.RATING_VALUE,
        CalibrationSubjectRank.SUBJECT_RANK_ID,
        CalibrationSubjectRank.CAL_SESSION_SUBJECT
    ];
    /**
     * All fields selector.
     */
    CalibrationSubjectRank.ALL_FIELDS = new core_1.AllFields('*', CalibrationSubjectRank);
    /**
     * All key fields of the CalibrationSubjectRank entity.
     */
    CalibrationSubjectRank._keyFields = [CalibrationSubjectRank.SUBJECT_RANK_ID];
    /**
     * Mapping of all key field names to the respective static field property CalibrationSubjectRank.
     */
    CalibrationSubjectRank._keys = CalibrationSubjectRank._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(CalibrationSubjectRank = exports.CalibrationSubjectRank || (exports.CalibrationSubjectRank = {}));
exports.CalibrationSubjectRank = CalibrationSubjectRank;
//# sourceMappingURL=CalibrationSubjectRank.js.map
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
var TalentRatingsRequestBuilder_1 = require("./TalentRatingsRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "TalentRatings" of service "SFOData".
 */
var TalentRatings = /** @class */ (function (_super) {
    __extends(TalentRatings, _super);
    function TalentRatings() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `TalentRatings`.
     * @returns A builder that constructs instances of entity type `TalentRatings`.
     */
    TalentRatings.builder = function () {
        return core_1.Entity.entityBuilder(TalentRatings);
    };
    /**
     * Returns a request builder to construct requests for operations on the `TalentRatings` entity type.
     * @returns A `TalentRatings` request builder.
     */
    TalentRatings.requestBuilder = function () {
        return new TalentRatingsRequestBuilder_1.TalentRatingsRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `TalentRatings`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `TalentRatings`.
     */
    TalentRatings.customField = function (fieldName) {
        return core_1.Entity.customFieldSelector(fieldName, TalentRatings);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    TalentRatings.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for TalentRatings.
     */
    TalentRatings._entityName = 'TalentRatings';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for TalentRatings.
     */
    TalentRatings._serviceName = 'SFOData';
    /**
     * Default url path for the according service.
     */
    TalentRatings._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return TalentRatings;
}(core_1.Entity));
exports.TalentRatings = TalentRatings;
var CalibrationSession_1 = require("./CalibrationSession");
var User_1 = require("./User");
(function (TalentRatings) {
    /**
     * Static representation of the [[employeeId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TalentRatings.EMPLOYEE_ID = new core_1.StringField('employeeId', TalentRatings, 'Edm.String');
    /**
     * Static representation of the [[feedbackId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TalentRatings.FEEDBACK_ID = new core_1.BigNumberField('feedbackId', TalentRatings, 'Edm.Int64');
    /**
     * Static representation of the [[feedbackModule]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TalentRatings.FEEDBACK_MODULE = new core_1.NumberField('feedbackModule', TalentRatings, 'Edm.Int32');
    /**
     * Static representation of the [[feedbackName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TalentRatings.FEEDBACK_NAME = new core_1.StringField('feedbackName', TalentRatings, 'Edm.String');
    /**
     * Static representation of the [[feedbackRating]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TalentRatings.FEEDBACK_RATING = new core_1.NumberField('feedbackRating', TalentRatings, 'Edm.Double');
    /**
     * Static representation of the [[feedbackRatingLabel]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TalentRatings.FEEDBACK_RATING_LABEL = new core_1.StringField('feedbackRatingLabel', TalentRatings, 'Edm.String');
    /**
     * Static representation of the [[feedbackScaleId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TalentRatings.FEEDBACK_SCALE_ID = new core_1.BigNumberField('feedbackScaleId', TalentRatings, 'Edm.Int64');
    /**
     * Static representation of the [[feedbackScaleMaximum]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TalentRatings.FEEDBACK_SCALE_MAXIMUM = new core_1.NumberField('feedbackScaleMaximum', TalentRatings, 'Edm.Double');
    /**
     * Static representation of the [[feedbackScaleMinimum]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TalentRatings.FEEDBACK_SCALE_MINIMUM = new core_1.NumberField('feedbackScaleMinimum', TalentRatings, 'Edm.Double');
    /**
     * Static representation of the [[feedbackSource]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TalentRatings.FEEDBACK_SOURCE = new core_1.NumberField('feedbackSource', TalentRatings, 'Edm.Int32');
    /**
     * Static representation of the [[feedbackType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TalentRatings.FEEDBACK_TYPE = new core_1.NumberField('feedbackType', TalentRatings, 'Edm.Int32');
    /**
     * Static representation of the [[feedbackWeight]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TalentRatings.FEEDBACK_WEIGHT = new core_1.NumberField('feedbackWeight', TalentRatings, 'Edm.Double');
    /**
     * Static representation of the [[formContentId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TalentRatings.FORM_CONTENT_ID = new core_1.BigNumberField('formContentId', TalentRatings, 'Edm.Int64');
    /**
     * Static representation of the [[formDataId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TalentRatings.FORM_DATA_ID = new core_1.BigNumberField('formDataId', TalentRatings, 'Edm.Int64');
    /**
     * Static representation of the one-to-one navigation property [[calSession]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TalentRatings.CAL_SESSION = new core_1.OneToOneLink('calSession', TalentRatings, CalibrationSession_1.CalibrationSession);
    /**
     * Static representation of the one-to-one navigation property [[employeeUser]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    TalentRatings.EMPLOYEE_USER = new core_1.OneToOneLink('employeeUser', TalentRatings, User_1.User);
    /**
     * All fields of the TalentRatings entity.
     */
    TalentRatings._allFields = [
        TalentRatings.EMPLOYEE_ID,
        TalentRatings.FEEDBACK_ID,
        TalentRatings.FEEDBACK_MODULE,
        TalentRatings.FEEDBACK_NAME,
        TalentRatings.FEEDBACK_RATING,
        TalentRatings.FEEDBACK_RATING_LABEL,
        TalentRatings.FEEDBACK_SCALE_ID,
        TalentRatings.FEEDBACK_SCALE_MAXIMUM,
        TalentRatings.FEEDBACK_SCALE_MINIMUM,
        TalentRatings.FEEDBACK_SOURCE,
        TalentRatings.FEEDBACK_TYPE,
        TalentRatings.FEEDBACK_WEIGHT,
        TalentRatings.FORM_CONTENT_ID,
        TalentRatings.FORM_DATA_ID,
        TalentRatings.CAL_SESSION,
        TalentRatings.EMPLOYEE_USER
    ];
    /**
     * All fields selector.
     */
    TalentRatings.ALL_FIELDS = new core_1.AllFields('*', TalentRatings);
    /**
     * All key fields of the TalentRatings entity.
     */
    TalentRatings._keyFields = [TalentRatings.FEEDBACK_ID];
    /**
     * Mapping of all key field names to the respective static field property TalentRatings.
     */
    TalentRatings._keys = TalentRatings._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(TalentRatings = exports.TalentRatings || (exports.TalentRatings = {}));
exports.TalentRatings = TalentRatings;
//# sourceMappingURL=TalentRatings.js.map
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
var CalibrationSessionRequestBuilder_1 = require("./CalibrationSessionRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "CalibrationSession" of service "SFOData".
 */
var CalibrationSession = /** @class */ (function (_super) {
    __extends(CalibrationSession, _super);
    function CalibrationSession() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `CalibrationSession`.
     * @returns A builder that constructs instances of entity type `CalibrationSession`.
     */
    CalibrationSession.builder = function () {
        return core_1.Entity.entityBuilder(CalibrationSession);
    };
    /**
     * Returns a request builder to construct requests for operations on the `CalibrationSession` entity type.
     * @returns A `CalibrationSession` request builder.
     */
    CalibrationSession.requestBuilder = function () {
        return new CalibrationSessionRequestBuilder_1.CalibrationSessionRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `CalibrationSession`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `CalibrationSession`.
     */
    CalibrationSession.customField = function (fieldName) {
        return core_1.Entity.customFieldSelector(fieldName, CalibrationSession);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    CalibrationSession.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for CalibrationSession.
     */
    CalibrationSession._entityName = 'CalibrationSession';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for CalibrationSession.
     */
    CalibrationSession._serviceName = 'SFOData';
    /**
     * Default url path for the according service.
     */
    CalibrationSession._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return CalibrationSession;
}(core_1.Entity));
exports.CalibrationSession = CalibrationSession;
var CalibrationTemplate_1 = require("./CalibrationTemplate");
var User_1 = require("./User");
var CalibrationSessionSubject_1 = require("./CalibrationSessionSubject");
(function (CalibrationSession) {
    /**
     * Static representation of the [[activationDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CalibrationSession.ACTIVATION_DATE = new core_1.DateField('activationDate', CalibrationSession, 'Edm.DateTime');
    /**
     * Static representation of the [[lastModifiedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CalibrationSession.LAST_MODIFIED_BY = new core_1.StringField('lastModifiedBy', CalibrationSession, 'Edm.String');
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CalibrationSession.LAST_MODIFIED_DATE_TIME = new core_1.DateField('lastModifiedDateTime', CalibrationSession, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[sessionDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CalibrationSession.SESSION_DATE = new core_1.DateField('sessionDate', CalibrationSession, 'Edm.DateTime');
    /**
     * Static representation of the [[sessionId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CalibrationSession.SESSION_ID = new core_1.BigNumberField('sessionId', CalibrationSession, 'Edm.Int64');
    /**
     * Static representation of the [[sessionLocation]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CalibrationSession.SESSION_LOCATION = new core_1.StringField('sessionLocation', CalibrationSession, 'Edm.String');
    /**
     * Static representation of the [[sessionName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CalibrationSession.SESSION_NAME = new core_1.StringField('sessionName', CalibrationSession, 'Edm.String');
    /**
     * Static representation of the [[status]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CalibrationSession.STATUS = new core_1.NumberField('status', CalibrationSession, 'Edm.Int32');
    /**
     * Static representation of the one-to-one navigation property [[calTemplate]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CalibrationSession.CAL_TEMPLATE = new core_1.OneToOneLink('calTemplate', CalibrationSession, CalibrationTemplate_1.CalibrationTemplate);
    /**
     * Static representation of the one-to-many navigation property [[facilitatorList]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CalibrationSession.FACILITATOR_LIST = new core_1.Link('facilitatorList', CalibrationSession, User_1.User);
    /**
     * Static representation of the one-to-many navigation property [[ownerList]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CalibrationSession.OWNER_LIST = new core_1.Link('ownerList', CalibrationSession, User_1.User);
    /**
     * Static representation of the one-to-many navigation property [[participantList]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CalibrationSession.PARTICIPANT_LIST = new core_1.Link('participantList', CalibrationSession, User_1.User);
    /**
     * Static representation of the one-to-many navigation property [[subjectList]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CalibrationSession.SUBJECT_LIST = new core_1.Link('subjectList', CalibrationSession, CalibrationSessionSubject_1.CalibrationSessionSubject);
    /**
     * All fields of the CalibrationSession entity.
     */
    CalibrationSession._allFields = [
        CalibrationSession.ACTIVATION_DATE,
        CalibrationSession.LAST_MODIFIED_BY,
        CalibrationSession.LAST_MODIFIED_DATE_TIME,
        CalibrationSession.SESSION_DATE,
        CalibrationSession.SESSION_ID,
        CalibrationSession.SESSION_LOCATION,
        CalibrationSession.SESSION_NAME,
        CalibrationSession.STATUS,
        CalibrationSession.CAL_TEMPLATE,
        CalibrationSession.FACILITATOR_LIST,
        CalibrationSession.OWNER_LIST,
        CalibrationSession.PARTICIPANT_LIST,
        CalibrationSession.SUBJECT_LIST
    ];
    /**
     * All fields selector.
     */
    CalibrationSession.ALL_FIELDS = new core_1.AllFields('*', CalibrationSession);
    /**
     * All key fields of the CalibrationSession entity.
     */
    CalibrationSession._keyFields = [CalibrationSession.SESSION_ID];
    /**
     * Mapping of all key field names to the respective static field property CalibrationSession.
     */
    CalibrationSession._keys = CalibrationSession._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(CalibrationSession = exports.CalibrationSession || (exports.CalibrationSession = {}));
exports.CalibrationSession = CalibrationSession;
//# sourceMappingURL=CalibrationSession.js.map
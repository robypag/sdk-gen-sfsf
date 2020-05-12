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
var CalibrationSessionSubjectRequestBuilder_1 = require("./CalibrationSessionSubjectRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "CalibrationSessionSubject" of service "SFOData".
 */
var CalibrationSessionSubject = /** @class */ (function (_super) {
    __extends(CalibrationSessionSubject, _super);
    function CalibrationSessionSubject() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `CalibrationSessionSubject`.
     * @returns A builder that constructs instances of entity type `CalibrationSessionSubject`.
     */
    CalibrationSessionSubject.builder = function () {
        return core_1.Entity.entityBuilder(CalibrationSessionSubject);
    };
    /**
     * Returns a request builder to construct requests for operations on the `CalibrationSessionSubject` entity type.
     * @returns A `CalibrationSessionSubject` request builder.
     */
    CalibrationSessionSubject.requestBuilder = function () {
        return new CalibrationSessionSubjectRequestBuilder_1.CalibrationSessionSubjectRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `CalibrationSessionSubject`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `CalibrationSessionSubject`.
     */
    CalibrationSessionSubject.customField = function (fieldName) {
        return core_1.Entity.customFieldSelector(fieldName, CalibrationSessionSubject);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    CalibrationSessionSubject.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for CalibrationSessionSubject.
     */
    CalibrationSessionSubject._entityName = 'CalibrationSessionSubject';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for CalibrationSessionSubject.
     */
    CalibrationSessionSubject._serviceName = 'SFOData';
    /**
     * Default url path for the according service.
     */
    CalibrationSessionSubject._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return CalibrationSessionSubject;
}(core_1.Entity));
exports.CalibrationSessionSubject = CalibrationSessionSubject;
var CalibrationSession_1 = require("./CalibrationSession");
var TalentRatings_1 = require("./TalentRatings");
var CalibrationSubjectRank_1 = require("./CalibrationSubjectRank");
var User_1 = require("./User");
(function (CalibrationSessionSubject) {
    /**
     * Static representation of the [[authorizedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CalibrationSessionSubject.AUTHORIZED_BY = new core_1.StringField('authorizedBy', CalibrationSessionSubject, 'Edm.String');
    /**
     * Static representation of the [[calSessionId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CalibrationSessionSubject.CAL_SESSION_ID = new core_1.BigNumberField('calSessionId', CalibrationSessionSubject, 'Edm.Int64');
    /**
     * Static representation of the [[calibratedFlag]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CalibrationSessionSubject.CALIBRATED_FLAG = new core_1.BooleanField('calibratedFlag', CalibrationSessionSubject, 'Edm.Boolean');
    /**
     * Static representation of the [[comments]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CalibrationSessionSubject.COMMENTS = new core_1.StringField('comments', CalibrationSessionSubject, 'Edm.String');
    /**
     * Static representation of the [[createdBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CalibrationSessionSubject.CREATED_BY = new core_1.StringField('createdBy', CalibrationSessionSubject, 'Edm.String');
    /**
     * Static representation of the [[createdDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CalibrationSessionSubject.CREATED_DATE_TIME = new core_1.DateField('createdDateTime', CalibrationSessionSubject, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[externalComments]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CalibrationSessionSubject.EXTERNAL_COMMENTS = new core_1.StringField('externalComments', CalibrationSessionSubject, 'Edm.String');
    /**
     * Static representation of the [[lastModifiedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CalibrationSessionSubject.LAST_MODIFIED_BY = new core_1.StringField('lastModifiedBy', CalibrationSessionSubject, 'Edm.String');
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CalibrationSessionSubject.LAST_MODIFIED_DATE_TIME = new core_1.DateField('lastModifiedDateTime', CalibrationSessionSubject, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[pmFolderMapId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CalibrationSessionSubject.PM_FOLDER_MAP_ID = new core_1.BigNumberField('pmFolderMapId', CalibrationSessionSubject, 'Edm.Int64');
    /**
     * Static representation of the [[pmFormDataId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CalibrationSessionSubject.PM_FORM_DATA_ID = new core_1.BigNumberField('pmFormDataId', CalibrationSessionSubject, 'Edm.Int64');
    /**
     * Static representation of the [[pmFormOwnerId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CalibrationSessionSubject.PM_FORM_OWNER_ID = new core_1.StringField('pmFormOwnerId', CalibrationSessionSubject, 'Edm.String');
    /**
     * Static representation of the [[reason]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CalibrationSessionSubject.REASON = new core_1.StringField('reason', CalibrationSessionSubject, 'Edm.String');
    /**
     * Static representation of the [[reasonId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CalibrationSessionSubject.REASON_ID = new core_1.BigNumberField('reasonId', CalibrationSessionSubject, 'Edm.Int64');
    /**
     * Static representation of the [[sessionSubjectId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CalibrationSessionSubject.SESSION_SUBJECT_ID = new core_1.BigNumberField('sessionSubjectId', CalibrationSessionSubject, 'Edm.Int64');
    /**
     * Static representation of the [[status]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CalibrationSessionSubject.STATUS = new core_1.NumberField('status', CalibrationSessionSubject, 'Edm.Int32');
    /**
     * Static representation of the [[userId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CalibrationSessionSubject.USER_ID = new core_1.StringField('userId', CalibrationSessionSubject, 'Edm.String');
    /**
     * Static representation of the one-to-one navigation property [[calSession]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CalibrationSessionSubject.CAL_SESSION = new core_1.OneToOneLink('calSession', CalibrationSessionSubject, CalibrationSession_1.CalibrationSession);
    /**
     * Static representation of the one-to-many navigation property [[pmRatingList]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CalibrationSessionSubject.PM_RATING_LIST = new core_1.Link('pmRatingList', CalibrationSessionSubject, TalentRatings_1.TalentRatings);
    /**
     * Static representation of the one-to-many navigation property [[rankList]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CalibrationSessionSubject.RANK_LIST = new core_1.Link('rankList', CalibrationSessionSubject, CalibrationSubjectRank_1.CalibrationSubjectRank);
    /**
     * Static representation of the one-to-one navigation property [[subjectUser]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CalibrationSessionSubject.SUBJECT_USER = new core_1.OneToOneLink('subjectUser', CalibrationSessionSubject, User_1.User);
    /**
     * All fields of the CalibrationSessionSubject entity.
     */
    CalibrationSessionSubject._allFields = [
        CalibrationSessionSubject.AUTHORIZED_BY,
        CalibrationSessionSubject.CAL_SESSION_ID,
        CalibrationSessionSubject.CALIBRATED_FLAG,
        CalibrationSessionSubject.COMMENTS,
        CalibrationSessionSubject.CREATED_BY,
        CalibrationSessionSubject.CREATED_DATE_TIME,
        CalibrationSessionSubject.EXTERNAL_COMMENTS,
        CalibrationSessionSubject.LAST_MODIFIED_BY,
        CalibrationSessionSubject.LAST_MODIFIED_DATE_TIME,
        CalibrationSessionSubject.PM_FOLDER_MAP_ID,
        CalibrationSessionSubject.PM_FORM_DATA_ID,
        CalibrationSessionSubject.PM_FORM_OWNER_ID,
        CalibrationSessionSubject.REASON,
        CalibrationSessionSubject.REASON_ID,
        CalibrationSessionSubject.SESSION_SUBJECT_ID,
        CalibrationSessionSubject.STATUS,
        CalibrationSessionSubject.USER_ID,
        CalibrationSessionSubject.CAL_SESSION,
        CalibrationSessionSubject.PM_RATING_LIST,
        CalibrationSessionSubject.RANK_LIST,
        CalibrationSessionSubject.SUBJECT_USER
    ];
    /**
     * All fields selector.
     */
    CalibrationSessionSubject.ALL_FIELDS = new core_1.AllFields('*', CalibrationSessionSubject);
    /**
     * All key fields of the CalibrationSessionSubject entity.
     */
    CalibrationSessionSubject._keyFields = [CalibrationSessionSubject.SESSION_SUBJECT_ID];
    /**
     * Mapping of all key field names to the respective static field property CalibrationSessionSubject.
     */
    CalibrationSessionSubject._keys = CalibrationSessionSubject._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(CalibrationSessionSubject = exports.CalibrationSessionSubject || (exports.CalibrationSessionSubject = {}));
exports.CalibrationSessionSubject = CalibrationSessionSubject;
//# sourceMappingURL=CalibrationSessionSubject.js.map
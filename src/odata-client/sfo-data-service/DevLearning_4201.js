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
var DevLearning_4201RequestBuilder_1 = require("./DevLearning_4201RequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "DevLearning_4201" of service "SFOData".
 */
var DevLearning_4201 = /** @class */ (function (_super) {
    __extends(DevLearning_4201, _super);
    function DevLearning_4201() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `DevLearning_4201`.
     * @returns A builder that constructs instances of entity type `DevLearning_4201`.
     */
    DevLearning_4201.builder = function () {
        return core_1.Entity.entityBuilder(DevLearning_4201);
    };
    /**
     * Returns a request builder to construct requests for operations on the `DevLearning_4201` entity type.
     * @returns A `DevLearning_4201` request builder.
     */
    DevLearning_4201.requestBuilder = function () {
        return new DevLearning_4201RequestBuilder_1.DevLearning_4201RequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `DevLearning_4201`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `DevLearning_4201`.
     */
    DevLearning_4201.customField = function (fieldName) {
        return core_1.Entity.customFieldSelector(fieldName, DevLearning_4201);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    DevLearning_4201.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for DevLearning_4201.
     */
    DevLearning_4201._entityName = 'DevLearning_4201';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for DevLearning_4201.
     */
    DevLearning_4201._serviceName = 'SFOData';
    /**
     * Default url path for the according service.
     */
    DevLearning_4201._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return DevLearning_4201;
}(core_1.Entity));
exports.DevLearning_4201 = DevLearning_4201;
var User_1 = require("./User");
(function (DevLearning_4201) {
    /**
     * Static representation of the [[assignee]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DevLearning_4201.ASSIGNEE = new core_1.StringField('assignee', DevLearning_4201, 'Edm.String');
    /**
     * Static representation of the [[completedDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DevLearning_4201.COMPLETED_DATE = new core_1.DateField('completed_date', DevLearning_4201, 'Edm.DateTime');
    /**
     * Static representation of the [[customtext1]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DevLearning_4201.CUSTOMTEXT_1 = new core_1.StringField('customtext1', DevLearning_4201, 'Edm.String');
    /**
     * Static representation of the [[description]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DevLearning_4201.DESCRIPTION = new core_1.StringField('description', DevLearning_4201, 'Edm.String');
    /**
     * Static representation of the [[devGoals]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DevLearning_4201.DEV_GOALS = new core_1.StringField('dev_goals', DevLearning_4201, 'Edm.String');
    /**
     * Static representation of the [[guid]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DevLearning_4201.GUID = new core_1.StringField('guid', DevLearning_4201, 'Edm.String');
    /**
     * Static representation of the [[learningId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DevLearning_4201.LEARNING_ID = new core_1.BigNumberField('learningId', DevLearning_4201, 'Edm.Int64');
    /**
     * Static representation of the [[name]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DevLearning_4201.NAME = new core_1.StringField('name', DevLearning_4201, 'Edm.String');
    /**
     * Static representation of the [[sourceType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DevLearning_4201.SOURCE_TYPE = new core_1.StringField('source_type', DevLearning_4201, 'Edm.String');
    /**
     * Static representation of the [[status]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DevLearning_4201.STATUS = new core_1.StringField('status', DevLearning_4201, 'Edm.String');
    /**
     * Static representation of the [[type]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DevLearning_4201.TYPE = new core_1.StringField('type', DevLearning_4201, 'Edm.String');
    /**
     * Static representation of the [[userId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DevLearning_4201.USER_ID = new core_1.StringField('userId', DevLearning_4201, 'Edm.String');
    /**
     * Static representation of the one-to-one navigation property [[learningUserIdNavigation]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    DevLearning_4201.LEARNING_USER_ID_NAVIGATION = new core_1.OneToOneLink('LearningUserIdNavigation', DevLearning_4201, User_1.User);
    /**
     * All fields of the DevLearning_4201 entity.
     */
    DevLearning_4201._allFields = [
        DevLearning_4201.ASSIGNEE,
        DevLearning_4201.COMPLETED_DATE,
        DevLearning_4201.CUSTOMTEXT_1,
        DevLearning_4201.DESCRIPTION,
        DevLearning_4201.DEV_GOALS,
        DevLearning_4201.GUID,
        DevLearning_4201.LEARNING_ID,
        DevLearning_4201.NAME,
        DevLearning_4201.SOURCE_TYPE,
        DevLearning_4201.STATUS,
        DevLearning_4201.TYPE,
        DevLearning_4201.USER_ID,
        DevLearning_4201.LEARNING_USER_ID_NAVIGATION
    ];
    /**
     * All fields selector.
     */
    DevLearning_4201.ALL_FIELDS = new core_1.AllFields('*', DevLearning_4201);
    /**
     * All key fields of the DevLearning_4201 entity.
     */
    DevLearning_4201._keyFields = [DevLearning_4201.LEARNING_ID];
    /**
     * Mapping of all key field names to the respective static field property DevLearning_4201.
     */
    DevLearning_4201._keys = DevLearning_4201._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(DevLearning_4201 = exports.DevLearning_4201 || (exports.DevLearning_4201 = {}));
exports.DevLearning_4201 = DevLearning_4201;
//# sourceMappingURL=DevLearning_4201.js.map
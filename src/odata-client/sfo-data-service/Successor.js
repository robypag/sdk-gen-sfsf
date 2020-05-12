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
var SuccessorRequestBuilder_1 = require("./SuccessorRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "Successor" of service "SFOData".
 */
var Successor = /** @class */ (function (_super) {
    __extends(Successor, _super);
    function Successor() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `Successor`.
     * @returns A builder that constructs instances of entity type `Successor`.
     */
    Successor.builder = function () {
        return core_1.Entity.entityBuilder(Successor);
    };
    /**
     * Returns a request builder to construct requests for operations on the `Successor` entity type.
     * @returns A `Successor` request builder.
     */
    Successor.requestBuilder = function () {
        return new SuccessorRequestBuilder_1.SuccessorRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `Successor`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `Successor`.
     */
    Successor.customField = function (fieldName) {
        return core_1.Entity.customFieldSelector(fieldName, Successor);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    Successor.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for Successor.
     */
    Successor._entityName = 'Successor';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for Successor.
     */
    Successor._serviceName = 'SFOData';
    /**
     * Default url path for the according service.
     */
    Successor._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return Successor;
}(core_1.Entity));
exports.Successor = Successor;
var User_1 = require("./User");
var NomineeHistory_1 = require("./NomineeHistory");
(function (Successor) {
    /**
     * Static representation of the [[id]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Successor.ID = new core_1.BigNumberField('id', Successor, 'Edm.Int64');
    /**
     * Static representation of the [[lastModifiedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Successor.LAST_MODIFIED_BY = new core_1.StringField('lastModifiedBy', Successor, 'Edm.String');
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Successor.LAST_MODIFIED_DATE_TIME = new core_1.DateField('lastModifiedDateTime', Successor, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[nomineeUserId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Successor.NOMINEE_USER_ID = new core_1.StringField('nomineeUserId', Successor, 'Edm.String');
    /**
     * Static representation of the [[note]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Successor.NOTE = new core_1.StringField('note', Successor, 'Edm.String');
    /**
     * Static representation of the [[rank]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Successor.RANK = new core_1.NumberField('rank', Successor, 'Edm.Int32');
    /**
     * Static representation of the [[readiness]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Successor.READINESS = new core_1.NumberField('readiness', Successor, 'Edm.Double');
    /**
     * Static representation of the [[readinessLabel]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Successor.READINESS_LABEL = new core_1.StringField('readinessLabel', Successor, 'Edm.String');
    /**
     * Static representation of the [[status]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Successor.STATUS = new core_1.NumberField('status', Successor, 'Edm.Int32');
    /**
     * Static representation of the [[statusLabel]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Successor.STATUS_LABEL = new core_1.StringField('statusLabel', Successor, 'Edm.String');
    /**
     * Static representation of the one-to-one navigation property [[lastModifiedByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Successor.LAST_MODIFIED_BY_NAV = new core_1.OneToOneLink('lastModifiedByNav', Successor, User_1.User);
    /**
     * Static representation of the one-to-many navigation property [[nomineeHistoryNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Successor.NOMINEE_HISTORY_NAV = new core_1.Link('nomineeHistoryNav', Successor, NomineeHistory_1.NomineeHistory);
    /**
     * Static representation of the one-to-one navigation property [[userNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Successor.USER_NAV = new core_1.OneToOneLink('userNav', Successor, User_1.User);
    /**
     * All fields of the Successor entity.
     */
    Successor._allFields = [
        Successor.ID,
        Successor.LAST_MODIFIED_BY,
        Successor.LAST_MODIFIED_DATE_TIME,
        Successor.NOMINEE_USER_ID,
        Successor.NOTE,
        Successor.RANK,
        Successor.READINESS,
        Successor.READINESS_LABEL,
        Successor.STATUS,
        Successor.STATUS_LABEL,
        Successor.LAST_MODIFIED_BY_NAV,
        Successor.NOMINEE_HISTORY_NAV,
        Successor.USER_NAV
    ];
    /**
     * All fields selector.
     */
    Successor.ALL_FIELDS = new core_1.AllFields('*', Successor);
    /**
     * All key fields of the Successor entity.
     */
    Successor._keyFields = [Successor.ID];
    /**
     * Mapping of all key field names to the respective static field property Successor.
     */
    Successor._keys = Successor._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(Successor = exports.Successor || (exports.Successor = {}));
exports.Successor = Successor;
//# sourceMappingURL=Successor.js.map
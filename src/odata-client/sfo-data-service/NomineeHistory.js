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
var NomineeHistoryRequestBuilder_1 = require("./NomineeHistoryRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "NomineeHistory" of service "SFOData".
 */
var NomineeHistory = /** @class */ (function (_super) {
    __extends(NomineeHistory, _super);
    function NomineeHistory() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `NomineeHistory`.
     * @returns A builder that constructs instances of entity type `NomineeHistory`.
     */
    NomineeHistory.builder = function () {
        return core_1.Entity.entityBuilder(NomineeHistory);
    };
    /**
     * Returns a request builder to construct requests for operations on the `NomineeHistory` entity type.
     * @returns A `NomineeHistory` request builder.
     */
    NomineeHistory.requestBuilder = function () {
        return new NomineeHistoryRequestBuilder_1.NomineeHistoryRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `NomineeHistory`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `NomineeHistory`.
     */
    NomineeHistory.customField = function (fieldName) {
        return core_1.Entity.customFieldSelector(fieldName, NomineeHistory);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    NomineeHistory.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for NomineeHistory.
     */
    NomineeHistory._entityName = 'NomineeHistory';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for NomineeHistory.
     */
    NomineeHistory._serviceName = 'SFOData';
    /**
     * Default url path for the according service.
     */
    NomineeHistory._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return NomineeHistory;
}(core_1.Entity));
exports.NomineeHistory = NomineeHistory;
var User_1 = require("./User");
(function (NomineeHistory) {
    /**
     * Static representation of the [[changeType]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    NomineeHistory.CHANGE_TYPE = new core_1.NumberField('changeType', NomineeHistory, 'Edm.Int32');
    /**
     * Static representation of the [[changeTypeLabel]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    NomineeHistory.CHANGE_TYPE_LABEL = new core_1.StringField('changeTypeLabel', NomineeHistory, 'Edm.String');
    /**
     * Static representation of the [[id]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    NomineeHistory.ID = new core_1.BigNumberField('id', NomineeHistory, 'Edm.Int64');
    /**
     * Static representation of the [[modifiedBy]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    NomineeHistory.MODIFIED_BY = new core_1.StringField('modifiedBy', NomineeHistory, 'Edm.String');
    /**
     * Static representation of the [[modifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    NomineeHistory.MODIFIED_DATE_TIME = new core_1.DateField('modifiedDateTime', NomineeHistory, 'Edm.DateTime');
    /**
     * Static representation of the [[nomineeId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    NomineeHistory.NOMINEE_ID = new core_1.BigNumberField('nomineeId', NomineeHistory, 'Edm.Int64');
    /**
     * Static representation of the [[note]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    NomineeHistory.NOTE = new core_1.StringField('note', NomineeHistory, 'Edm.String');
    /**
     * Static representation of the [[rank]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    NomineeHistory.RANK = new core_1.NumberField('rank', NomineeHistory, 'Edm.Int32');
    /**
     * Static representation of the [[readiness]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    NomineeHistory.READINESS = new core_1.NumberField('readiness', NomineeHistory, 'Edm.Double');
    /**
     * Static representation of the [[readinessLabel]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    NomineeHistory.READINESS_LABEL = new core_1.StringField('readinessLabel', NomineeHistory, 'Edm.String');
    /**
     * Static representation of the [[status]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    NomineeHistory.STATUS = new core_1.NumberField('status', NomineeHistory, 'Edm.Int32');
    /**
     * Static representation of the [[statusLabel]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    NomineeHistory.STATUS_LABEL = new core_1.StringField('statusLabel', NomineeHistory, 'Edm.String');
    /**
     * Static representation of the one-to-one navigation property [[modifiedByNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    NomineeHistory.MODIFIED_BY_NAV = new core_1.OneToOneLink('modifiedByNav', NomineeHistory, User_1.User);
    /**
     * Static representation of the one-to-one navigation property [[nomineeUserNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    NomineeHistory.NOMINEE_USER_NAV = new core_1.OneToOneLink('nomineeUserNav', NomineeHistory, User_1.User);
    /**
     * All fields of the NomineeHistory entity.
     */
    NomineeHistory._allFields = [
        NomineeHistory.CHANGE_TYPE,
        NomineeHistory.CHANGE_TYPE_LABEL,
        NomineeHistory.ID,
        NomineeHistory.MODIFIED_BY,
        NomineeHistory.MODIFIED_DATE_TIME,
        NomineeHistory.NOMINEE_ID,
        NomineeHistory.NOTE,
        NomineeHistory.RANK,
        NomineeHistory.READINESS,
        NomineeHistory.READINESS_LABEL,
        NomineeHistory.STATUS,
        NomineeHistory.STATUS_LABEL,
        NomineeHistory.MODIFIED_BY_NAV,
        NomineeHistory.NOMINEE_USER_NAV
    ];
    /**
     * All fields selector.
     */
    NomineeHistory.ALL_FIELDS = new core_1.AllFields('*', NomineeHistory);
    /**
     * All key fields of the NomineeHistory entity.
     */
    NomineeHistory._keyFields = [NomineeHistory.ID];
    /**
     * Mapping of all key field names to the respective static field property NomineeHistory.
     */
    NomineeHistory._keys = NomineeHistory._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(NomineeHistory = exports.NomineeHistory || (exports.NomineeHistory = {}));
exports.NomineeHistory = NomineeHistory;
//# sourceMappingURL=NomineeHistory.js.map
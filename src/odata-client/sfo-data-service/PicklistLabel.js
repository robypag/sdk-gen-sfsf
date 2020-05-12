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
var PicklistLabelRequestBuilder_1 = require("./PicklistLabelRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "PicklistLabel" of service "SFOData".
 */
var PicklistLabel = /** @class */ (function (_super) {
    __extends(PicklistLabel, _super);
    function PicklistLabel() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `PicklistLabel`.
     * @returns A builder that constructs instances of entity type `PicklistLabel`.
     */
    PicklistLabel.builder = function () {
        return core_1.Entity.entityBuilder(PicklistLabel);
    };
    /**
     * Returns a request builder to construct requests for operations on the `PicklistLabel` entity type.
     * @returns A `PicklistLabel` request builder.
     */
    PicklistLabel.requestBuilder = function () {
        return new PicklistLabelRequestBuilder_1.PicklistLabelRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `PicklistLabel`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `PicklistLabel`.
     */
    PicklistLabel.customField = function (fieldName) {
        return core_1.Entity.customFieldSelector(fieldName, PicklistLabel);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    PicklistLabel.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for PicklistLabel.
     */
    PicklistLabel._entityName = 'PicklistLabel';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for PicklistLabel.
     */
    PicklistLabel._serviceName = 'SFOData';
    /**
     * Default url path for the according service.
     */
    PicklistLabel._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return PicklistLabel;
}(core_1.Entity));
exports.PicklistLabel = PicklistLabel;
var PicklistOption_1 = require("./PicklistOption");
(function (PicklistLabel) {
    /**
     * Static representation of the [[id]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PicklistLabel.ID = new core_1.BigNumberField('id', PicklistLabel, 'Edm.Int64');
    /**
     * Static representation of the [[label]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PicklistLabel.LABEL = new core_1.StringField('label', PicklistLabel, 'Edm.String');
    /**
     * Static representation of the [[locale]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PicklistLabel.LOCALE = new core_1.StringField('locale', PicklistLabel, 'Edm.String');
    /**
     * Static representation of the [[optionId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PicklistLabel.OPTION_ID = new core_1.BigNumberField('optionId', PicklistLabel, 'Edm.Int64');
    /**
     * Static representation of the one-to-one navigation property [[picklistOption]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PicklistLabel.PICKLIST_OPTION = new core_1.OneToOneLink('picklistOption', PicklistLabel, PicklistOption_1.PicklistOption);
    /**
     * All fields of the PicklistLabel entity.
     */
    PicklistLabel._allFields = [
        PicklistLabel.ID,
        PicklistLabel.LABEL,
        PicklistLabel.LOCALE,
        PicklistLabel.OPTION_ID,
        PicklistLabel.PICKLIST_OPTION
    ];
    /**
     * All fields selector.
     */
    PicklistLabel.ALL_FIELDS = new core_1.AllFields('*', PicklistLabel);
    /**
     * All key fields of the PicklistLabel entity.
     */
    PicklistLabel._keyFields = [PicklistLabel.LOCALE, PicklistLabel.OPTION_ID];
    /**
     * Mapping of all key field names to the respective static field property PicklistLabel.
     */
    PicklistLabel._keys = PicklistLabel._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(PicklistLabel = exports.PicklistLabel || (exports.PicklistLabel = {}));
exports.PicklistLabel = PicklistLabel;
//# sourceMappingURL=PicklistLabel.js.map
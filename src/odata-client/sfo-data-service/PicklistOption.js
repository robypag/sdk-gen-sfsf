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
var PicklistOptionRequestBuilder_1 = require("./PicklistOptionRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "PicklistOption" of service "SFOData".
 */
var PicklistOption = /** @class */ (function (_super) {
    __extends(PicklistOption, _super);
    function PicklistOption() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `PicklistOption`.
     * @returns A builder that constructs instances of entity type `PicklistOption`.
     */
    PicklistOption.builder = function () {
        return core_1.Entity.entityBuilder(PicklistOption);
    };
    /**
     * Returns a request builder to construct requests for operations on the `PicklistOption` entity type.
     * @returns A `PicklistOption` request builder.
     */
    PicklistOption.requestBuilder = function () {
        return new PicklistOptionRequestBuilder_1.PicklistOptionRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `PicklistOption`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `PicklistOption`.
     */
    PicklistOption.customField = function (fieldName) {
        return core_1.Entity.customFieldSelector(fieldName, PicklistOption);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    PicklistOption.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for PicklistOption.
     */
    PicklistOption._entityName = 'PicklistOption';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for PicklistOption.
     */
    PicklistOption._serviceName = 'SFOData';
    /**
     * Default url path for the according service.
     */
    PicklistOption._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return PicklistOption;
}(core_1.Entity));
exports.PicklistOption = PicklistOption;
var Picklist_1 = require("./Picklist");
var PicklistLabel_1 = require("./PicklistLabel");
(function (PicklistOption) {
    /**
     * Static representation of the [[externalCode]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PicklistOption.EXTERNAL_CODE = new core_1.StringField('externalCode', PicklistOption, 'Edm.String');
    /**
     * Static representation of the [[id]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PicklistOption.ID = new core_1.BigNumberField('id', PicklistOption, 'Edm.Int64');
    /**
     * Static representation of the [[localeLabel]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PicklistOption.LOCALE_LABEL = new core_1.StringField('localeLabel', PicklistOption, 'Edm.String');
    /**
     * Static representation of the [[maxValue]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PicklistOption.MAX_VALUE = new core_1.NumberField('maxValue', PicklistOption, 'Edm.Double');
    /**
     * Static representation of the [[minValue]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PicklistOption.MIN_VALUE = new core_1.NumberField('minValue', PicklistOption, 'Edm.Double');
    /**
     * Static representation of the [[optionValue]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PicklistOption.OPTION_VALUE = new core_1.NumberField('optionValue', PicklistOption, 'Edm.Double');
    /**
     * Static representation of the [[sortOrder]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PicklistOption.SORT_ORDER = new core_1.NumberField('sortOrder', PicklistOption, 'Edm.Int32');
    /**
     * Static representation of the [[status]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PicklistOption.STATUS = new core_1.StringField('status', PicklistOption, 'Edm.String');
    /**
     * Static representation of the one-to-many navigation property [[childPicklistOptions]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PicklistOption.CHILD_PICKLIST_OPTIONS = new core_1.Link('childPicklistOptions', PicklistOption, PicklistOption);
    /**
     * Static representation of the one-to-one navigation property [[parentPicklistOption]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PicklistOption.PARENT_PICKLIST_OPTION = new core_1.OneToOneLink('parentPicklistOption', PicklistOption, PicklistOption);
    /**
     * Static representation of the one-to-one navigation property [[picklist]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PicklistOption.PICKLIST = new core_1.OneToOneLink('picklist', PicklistOption, Picklist_1.Picklist);
    /**
     * Static representation of the one-to-many navigation property [[picklistLabels]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    PicklistOption.PICKLIST_LABELS = new core_1.Link('picklistLabels', PicklistOption, PicklistLabel_1.PicklistLabel);
    /**
     * All fields of the PicklistOption entity.
     */
    PicklistOption._allFields = [
        PicklistOption.EXTERNAL_CODE,
        PicklistOption.ID,
        PicklistOption.LOCALE_LABEL,
        PicklistOption.MAX_VALUE,
        PicklistOption.MIN_VALUE,
        PicklistOption.OPTION_VALUE,
        PicklistOption.SORT_ORDER,
        PicklistOption.STATUS,
        PicklistOption.CHILD_PICKLIST_OPTIONS,
        PicklistOption.PARENT_PICKLIST_OPTION,
        PicklistOption.PICKLIST,
        PicklistOption.PICKLIST_LABELS
    ];
    /**
     * All fields selector.
     */
    PicklistOption.ALL_FIELDS = new core_1.AllFields('*', PicklistOption);
    /**
     * All key fields of the PicklistOption entity.
     */
    PicklistOption._keyFields = [PicklistOption.ID];
    /**
     * Mapping of all key field names to the respective static field property PicklistOption.
     */
    PicklistOption._keys = PicklistOption._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(PicklistOption = exports.PicklistOption || (exports.PicklistOption = {}));
exports.PicklistOption = PicklistOption;
//# sourceMappingURL=PicklistOption.js.map
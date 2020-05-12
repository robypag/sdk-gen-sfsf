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
var CompetencyRatingRequestBuilder_1 = require("./CompetencyRatingRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "CompetencyRating" of service "SFOData".
 */
var CompetencyRating = /** @class */ (function (_super) {
    __extends(CompetencyRating, _super);
    function CompetencyRating() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `CompetencyRating`.
     * @returns A builder that constructs instances of entity type `CompetencyRating`.
     */
    CompetencyRating.builder = function () {
        return core_1.Entity.entityBuilder(CompetencyRating);
    };
    /**
     * Returns a request builder to construct requests for operations on the `CompetencyRating` entity type.
     * @returns A `CompetencyRating` request builder.
     */
    CompetencyRating.requestBuilder = function () {
        return new CompetencyRatingRequestBuilder_1.CompetencyRatingRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `CompetencyRating`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `CompetencyRating`.
     */
    CompetencyRating.customField = function (fieldName) {
        return core_1.Entity.customFieldSelector(fieldName, CompetencyRating);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    CompetencyRating.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for CompetencyRating.
     */
    CompetencyRating._entityName = 'CompetencyRating';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for CompetencyRating.
     */
    CompetencyRating._serviceName = 'SFOData';
    /**
     * Default url path for the according service.
     */
    CompetencyRating._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return CompetencyRating;
}(core_1.Entity));
exports.CompetencyRating = CompetencyRating;
var User_1 = require("./User");
(function (CompetencyRating) {
    /**
     * Static representation of the [[formContentId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CompetencyRating.FORM_CONTENT_ID = new core_1.BigNumberField('formContentId', CompetencyRating, 'Edm.Int64');
    /**
     * Static representation of the [[formDataId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CompetencyRating.FORM_DATA_ID = new core_1.BigNumberField('formDataId', CompetencyRating, 'Edm.Int64');
    /**
     * Static representation of the [[guid]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CompetencyRating.GUID = new core_1.StringField('guid', CompetencyRating, 'Edm.String');
    /**
     * Static representation of the [[id]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CompetencyRating.ID = new core_1.BigNumberField('id', CompetencyRating, 'Edm.Int64');
    /**
     * Static representation of the [[lastModified]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CompetencyRating.LAST_MODIFIED = new core_1.DateField('lastModified', CompetencyRating, 'Edm.DateTime');
    /**
     * Static representation of the [[lastModifiedDateTime]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CompetencyRating.LAST_MODIFIED_DATE_TIME = new core_1.DateField('lastModifiedDateTime', CompetencyRating, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[lastModifiedWithTz]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CompetencyRating.LAST_MODIFIED_WITH_TZ = new core_1.DateField('lastModifiedWithTZ', CompetencyRating, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[module]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CompetencyRating.MODULE = new core_1.NumberField('module', CompetencyRating, 'Edm.Int32');
    /**
     * Static representation of the [[rater]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CompetencyRating.RATER = new core_1.StringField('rater', CompetencyRating, 'Edm.String');
    /**
     * Static representation of the [[raterCategory]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CompetencyRating.RATER_CATEGORY = new core_1.StringField('raterCategory', CompetencyRating, 'Edm.String');
    /**
     * Static representation of the [[rating]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CompetencyRating.RATING = new core_1.NumberField('rating', CompetencyRating, 'Edm.Double');
    /**
     * Static representation of the [[scaleMax]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CompetencyRating.SCALE_MAX = new core_1.BigNumberField('scaleMax', CompetencyRating, 'Edm.Int64');
    /**
     * Static representation of the [[scaleMin]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CompetencyRating.SCALE_MIN = new core_1.BigNumberField('scaleMin', CompetencyRating, 'Edm.Int64');
    /**
     * Static representation of the [[source]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CompetencyRating.SOURCE = new core_1.NumberField('source', CompetencyRating, 'Edm.Int32');
    /**
     * Static representation of the [[status]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CompetencyRating.STATUS = new core_1.BigNumberField('status', CompetencyRating, 'Edm.Int64');
    /**
     * Static representation of the [[type]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CompetencyRating.TYPE = new core_1.NumberField('type', CompetencyRating, 'Edm.Int32');
    /**
     * Static representation of the [[userId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CompetencyRating.USER_ID = new core_1.StringField('userId', CompetencyRating, 'Edm.String');
    /**
     * Static representation of the [[validFrom]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CompetencyRating.VALID_FROM = new core_1.DateField('validFrom', CompetencyRating, 'Edm.DateTime');
    /**
     * Static representation of the [[validTo]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CompetencyRating.VALID_TO = new core_1.DateField('validTo', CompetencyRating, 'Edm.DateTime');
    /**
     * Static representation of the one-to-one navigation property [[userNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    CompetencyRating.USER_NAV = new core_1.OneToOneLink('userNav', CompetencyRating, User_1.User);
    /**
     * All fields of the CompetencyRating entity.
     */
    CompetencyRating._allFields = [
        CompetencyRating.FORM_CONTENT_ID,
        CompetencyRating.FORM_DATA_ID,
        CompetencyRating.GUID,
        CompetencyRating.ID,
        CompetencyRating.LAST_MODIFIED,
        CompetencyRating.LAST_MODIFIED_DATE_TIME,
        CompetencyRating.LAST_MODIFIED_WITH_TZ,
        CompetencyRating.MODULE,
        CompetencyRating.RATER,
        CompetencyRating.RATER_CATEGORY,
        CompetencyRating.RATING,
        CompetencyRating.SCALE_MAX,
        CompetencyRating.SCALE_MIN,
        CompetencyRating.SOURCE,
        CompetencyRating.STATUS,
        CompetencyRating.TYPE,
        CompetencyRating.USER_ID,
        CompetencyRating.VALID_FROM,
        CompetencyRating.VALID_TO,
        CompetencyRating.USER_NAV
    ];
    /**
     * All fields selector.
     */
    CompetencyRating.ALL_FIELDS = new core_1.AllFields('*', CompetencyRating);
    /**
     * All key fields of the CompetencyRating entity.
     */
    CompetencyRating._keyFields = [CompetencyRating.ID];
    /**
     * Mapping of all key field names to the respective static field property CompetencyRating.
     */
    CompetencyRating._keys = CompetencyRating._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(CompetencyRating = exports.CompetencyRating || (exports.CompetencyRating = {}));
exports.CompetencyRating = CompetencyRating;
//# sourceMappingURL=CompetencyRating.js.map
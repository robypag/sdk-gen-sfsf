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
var Background_CompensationRequestBuilder_1 = require("./Background_CompensationRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "Background_Compensation" of service "SFOData".
 */
var Background_Compensation = /** @class */ (function (_super) {
    __extends(Background_Compensation, _super);
    function Background_Compensation() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `Background_Compensation`.
     * @returns A builder that constructs instances of entity type `Background_Compensation`.
     */
    Background_Compensation.builder = function () {
        return core_1.Entity.entityBuilder(Background_Compensation);
    };
    /**
     * Returns a request builder to construct requests for operations on the `Background_Compensation` entity type.
     * @returns A `Background_Compensation` request builder.
     */
    Background_Compensation.requestBuilder = function () {
        return new Background_CompensationRequestBuilder_1.Background_CompensationRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `Background_Compensation`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `Background_Compensation`.
     */
    Background_Compensation.customField = function (fieldName) {
        return core_1.Entity.customFieldSelector(fieldName, Background_Compensation);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    Background_Compensation.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for Background_Compensation.
     */
    Background_Compensation._entityName = 'Background_Compensation';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for Background_Compensation.
     */
    Background_Compensation._serviceName = 'SFOData';
    /**
     * Default url path for the according service.
     */
    Background_Compensation._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return Background_Compensation;
}(core_1.Entity));
exports.Background_Compensation = Background_Compensation;
var User_1 = require("./User");
(function (Background_Compensation) {
    /**
     * Static representation of the [[backgroundElementId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Background_Compensation.BACKGROUND_ELEMENT_ID = new core_1.BigNumberField('backgroundElementId', Background_Compensation, 'Edm.Int64');
    /**
     * Static representation of the [[bgOrderPos]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Background_Compensation.BG_ORDER_POS = new core_1.BigNumberField('bgOrderPos', Background_Compensation, 'Edm.Int64');
    /**
     * Static representation of the [[bonusTotal]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Background_Compensation.BONUS_TOTAL = new core_1.NumberField('bonusTotal', Background_Compensation, 'Edm.Double');
    /**
     * Static representation of the [[compaRatio]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Background_Compensation.COMPA_RATIO = new core_1.NumberField('compaRatio', Background_Compensation, 'Edm.Double');
    /**
     * Static representation of the [[curSalary]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Background_Compensation.CUR_SALARY = new core_1.StringField('curSalary', Background_Compensation, 'Edm.String');
    /**
     * Static representation of the [[finSalary]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Background_Compensation.FIN_SALARY = new core_1.StringField('finSalary', Background_Compensation, 'Edm.String');
    /**
     * Static representation of the [[jobTitle]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Background_Compensation.JOB_TITLE = new core_1.StringField('jobTitle', Background_Compensation, 'Edm.String');
    /**
     * Static representation of the [[lastModifiedDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Background_Compensation.LAST_MODIFIED_DATE = new core_1.DateField('lastModifiedDate', Background_Compensation, 'Edm.DateTimeOffset');
    /**
     * Static representation of the [[lumpSum]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Background_Compensation.LUMP_SUM = new core_1.NumberField('lumpSum', Background_Compensation, 'Edm.Double');
    /**
     * Static representation of the [[merit]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Background_Compensation.MERIT = new core_1.StringField('merit', Background_Compensation, 'Edm.String');
    /**
     * Static representation of the [[options]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Background_Compensation.OPTIONS = new core_1.NumberField('options', Background_Compensation, 'Edm.Int32');
    /**
     * Static representation of the [[pmRating]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Background_Compensation.PM_RATING = new core_1.StringField('pmRating', Background_Compensation, 'Edm.String');
    /**
     * Static representation of the [[stock]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Background_Compensation.STOCK = new core_1.NumberField('stock', Background_Compensation, 'Edm.Int32');
    /**
     * Static representation of the [[stockGrantDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Background_Compensation.STOCK_GRANT_DATE = new core_1.DateField('stockGrantDate', Background_Compensation, 'Edm.DateTime');
    /**
     * Static representation of the [[sysCompTemplateName]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Background_Compensation.SYS_COMP_TEMPLATE_NAME = new core_1.StringField('sysCompTemplateName', Background_Compensation, 'Edm.String');
    /**
     * Static representation of the [[sysReviewEndDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Background_Compensation.SYS_REVIEW_END_DATE = new core_1.DateField('sysReviewEndDate', Background_Compensation, 'Edm.DateTime');
    /**
     * Static representation of the [[sysReviewStartDate]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Background_Compensation.SYS_REVIEW_START_DATE = new core_1.DateField('sysReviewStartDate', Background_Compensation, 'Edm.DateTime');
    /**
     * Static representation of the [[totalComp]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Background_Compensation.TOTAL_COMP = new core_1.NumberField('totalComp', Background_Compensation, 'Edm.Double');
    /**
     * Static representation of the [[userId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Background_Compensation.USER_ID = new core_1.StringField('userId', Background_Compensation, 'Edm.String');
    /**
     * Static representation of the one-to-one navigation property [[userIdNav]] for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    Background_Compensation.USER_ID_NAV = new core_1.OneToOneLink('userIdNav', Background_Compensation, User_1.User);
    /**
     * All fields of the Background_Compensation entity.
     */
    Background_Compensation._allFields = [
        Background_Compensation.BACKGROUND_ELEMENT_ID,
        Background_Compensation.BG_ORDER_POS,
        Background_Compensation.BONUS_TOTAL,
        Background_Compensation.COMPA_RATIO,
        Background_Compensation.CUR_SALARY,
        Background_Compensation.FIN_SALARY,
        Background_Compensation.JOB_TITLE,
        Background_Compensation.LAST_MODIFIED_DATE,
        Background_Compensation.LUMP_SUM,
        Background_Compensation.MERIT,
        Background_Compensation.OPTIONS,
        Background_Compensation.PM_RATING,
        Background_Compensation.STOCK,
        Background_Compensation.STOCK_GRANT_DATE,
        Background_Compensation.SYS_COMP_TEMPLATE_NAME,
        Background_Compensation.SYS_REVIEW_END_DATE,
        Background_Compensation.SYS_REVIEW_START_DATE,
        Background_Compensation.TOTAL_COMP,
        Background_Compensation.USER_ID,
        Background_Compensation.USER_ID_NAV
    ];
    /**
     * All fields selector.
     */
    Background_Compensation.ALL_FIELDS = new core_1.AllFields('*', Background_Compensation);
    /**
     * All key fields of the Background_Compensation entity.
     */
    Background_Compensation._keyFields = [Background_Compensation.BACKGROUND_ELEMENT_ID, Background_Compensation.USER_ID];
    /**
     * Mapping of all key field names to the respective static field property Background_Compensation.
     */
    Background_Compensation._keys = Background_Compensation._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(Background_Compensation = exports.Background_Compensation || (exports.Background_Compensation = {}));
exports.Background_Compensation = Background_Compensation;
//# sourceMappingURL=Background_Compensation.js.map
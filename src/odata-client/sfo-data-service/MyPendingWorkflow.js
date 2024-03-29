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
var MyPendingWorkflowRequestBuilder_1 = require("./MyPendingWorkflowRequestBuilder");
var core_1 = require("@sap-cloud-sdk/core");
/**
 * This class represents the entity "MyPendingWorkflow" of service "SFOData".
 */
var MyPendingWorkflow = /** @class */ (function (_super) {
    __extends(MyPendingWorkflow, _super);
    function MyPendingWorkflow() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns an entity builder to construct instances `MyPendingWorkflow`.
     * @returns A builder that constructs instances of entity type `MyPendingWorkflow`.
     */
    MyPendingWorkflow.builder = function () {
        return core_1.Entity.entityBuilder(MyPendingWorkflow);
    };
    /**
     * Returns a request builder to construct requests for operations on the `MyPendingWorkflow` entity type.
     * @returns A `MyPendingWorkflow` request builder.
     */
    MyPendingWorkflow.requestBuilder = function () {
        return new MyPendingWorkflowRequestBuilder_1.MyPendingWorkflowRequestBuilder();
    };
    /**
     * Returns a selectable object that allows the selection of custom field in a get request for the entity `MyPendingWorkflow`.
     * @param fieldName Name of the custom field to select
     * @returns A builder that constructs instances of entity type `MyPendingWorkflow`.
     */
    MyPendingWorkflow.customField = function (fieldName) {
        return core_1.Entity.customFieldSelector(fieldName, MyPendingWorkflow);
    };
    /**
     * Overwrites the default toJSON method so that all instance variables as well as all custom fields of the entity are returned.
     * @returns An object containing all instance variables + custom fields.
     */
    MyPendingWorkflow.prototype.toJSON = function () {
        return __assign(__assign({}, this), this._customFields);
    };
    /**
     * Technical entity name for MyPendingWorkflow.
     */
    MyPendingWorkflow._entityName = 'MyPendingWorkflow';
    /**
     * @deprecated Since v1.0.1 Use [[_defaultServicePath]] instead.
     * Technical service name for MyPendingWorkflow.
     */
    MyPendingWorkflow._serviceName = 'SFOData';
    /**
     * Default url path for the according service.
     */
    MyPendingWorkflow._defaultServicePath = 'VALUE_IS_UNDEFINED';
    return MyPendingWorkflow;
}(core_1.Entity));
exports.MyPendingWorkflow = MyPendingWorkflow;
(function (MyPendingWorkflow) {
    /**
     * Static representation of the [[desc]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    MyPendingWorkflow.DESC = new core_1.StringField('desc', MyPendingWorkflow, 'Edm.String');
    /**
     * Static representation of the [[subject]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    MyPendingWorkflow.SUBJECT = new core_1.StringField('subject', MyPendingWorkflow, 'Edm.String');
    /**
     * Static representation of the [[url]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    MyPendingWorkflow.URL = new core_1.StringField('url', MyPendingWorkflow, 'Edm.String');
    /**
     * Static representation of the [[wfRequestId]] property for query construction.
     * Use to reference this property in query operations such as 'select' in the fluent request API.
     */
    MyPendingWorkflow.WF_REQUEST_ID = new core_1.StringField('wfRequestId', MyPendingWorkflow, 'Edm.String');
    /**
     * All fields of the MyPendingWorkflow entity.
     */
    MyPendingWorkflow._allFields = [
        MyPendingWorkflow.DESC,
        MyPendingWorkflow.SUBJECT,
        MyPendingWorkflow.URL,
        MyPendingWorkflow.WF_REQUEST_ID
    ];
    /**
     * All fields selector.
     */
    MyPendingWorkflow.ALL_FIELDS = new core_1.AllFields('*', MyPendingWorkflow);
    /**
     * All key fields of the MyPendingWorkflow entity.
     */
    MyPendingWorkflow._keyFields = [MyPendingWorkflow.WF_REQUEST_ID];
    /**
     * Mapping of all key field names to the respective static field property MyPendingWorkflow.
     */
    MyPendingWorkflow._keys = MyPendingWorkflow._keyFields.reduce(function (acc, field) {
        acc[field._fieldName] = field;
        return acc;
    }, {});
})(MyPendingWorkflow = exports.MyPendingWorkflow || (exports.MyPendingWorkflow = {}));
exports.MyPendingWorkflow = MyPendingWorkflow;
//# sourceMappingURL=MyPendingWorkflow.js.map
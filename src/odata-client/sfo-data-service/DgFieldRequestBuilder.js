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
Object.defineProperty(exports, "__esModule", { value: true });
/*
 * Copyright (c) 2020 SAP SE or an SAP affiliate company. All rights reserved.
 *
 * This is a generated file powered by the SAP Cloud SDK for JavaScript.
 */
var core_1 = require("@sap-cloud-sdk/core");
var DgField_1 = require("./DgField");
/**
 * Request builder class for operations supported on the [[DgField]] entity.
 */
var DgFieldRequestBuilder = /** @class */ (function (_super) {
    __extends(DgFieldRequestBuilder, _super);
    function DgFieldRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `DgField` entity based on its keys.
     * @param name Key property. See [[DgField.name]].
     * @returns A request builder for creating requests to retrieve one `DgField` entity based on its keys.
     */
    DgFieldRequestBuilder.prototype.getByKey = function (name) {
        return new core_1.GetByKeyRequestBuilder(DgField_1.DgField, { name: name });
    };
    /**
     * Returns a request builder for querying all `DgField` entities.
     * @returns A request builder for creating requests to retrieve all `DgField` entities.
     */
    DgFieldRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilder(DgField_1.DgField);
    };
    return DgFieldRequestBuilder;
}(core_1.RequestBuilder));
exports.DgFieldRequestBuilder = DgFieldRequestBuilder;
//# sourceMappingURL=DgFieldRequestBuilder.js.map
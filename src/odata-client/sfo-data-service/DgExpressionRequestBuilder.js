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
var DgExpression_1 = require("./DgExpression");
/**
 * Request builder class for operations supported on the [[DgExpression]] entity.
 */
var DgExpressionRequestBuilder = /** @class */ (function (_super) {
    __extends(DgExpressionRequestBuilder, _super);
    function DgExpressionRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `DgExpression` entity based on its keys.
     * @param expressionId Key property. See [[DgExpression.expressionId]].
     * @returns A request builder for creating requests to retrieve one `DgExpression` entity based on its keys.
     */
    DgExpressionRequestBuilder.prototype.getByKey = function (expressionId) {
        return new core_1.GetByKeyRequestBuilder(DgExpression_1.DgExpression, { expressionID: expressionId });
    };
    /**
     * Returns a request builder for querying all `DgExpression` entities.
     * @returns A request builder for creating requests to retrieve all `DgExpression` entities.
     */
    DgExpressionRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilder(DgExpression_1.DgExpression);
    };
    return DgExpressionRequestBuilder;
}(core_1.RequestBuilder));
exports.DgExpressionRequestBuilder = DgExpressionRequestBuilder;
//# sourceMappingURL=DgExpressionRequestBuilder.js.map
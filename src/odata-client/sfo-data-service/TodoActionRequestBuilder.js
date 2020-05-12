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
var TodoAction_1 = require("./TodoAction");
/**
 * Request builder class for operations supported on the [[TodoAction]] entity.
 */
var TodoActionRequestBuilder = /** @class */ (function (_super) {
    __extends(TodoActionRequestBuilder, _super);
    function TodoActionRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `TodoAction` entity based on its keys.
     * @param actionId Key property. See [[TodoAction.actionId]].
     * @param categoryId Key property. See [[TodoAction.categoryId]].
     * @returns A request builder for creating requests to retrieve one `TodoAction` entity based on its keys.
     */
    TodoActionRequestBuilder.prototype.getByKey = function (actionId, categoryId) {
        return new core_1.GetByKeyRequestBuilder(TodoAction_1.TodoAction, {
            actionId: actionId,
            categoryId: categoryId
        });
    };
    /**
     * Returns a request builder for querying all `TodoAction` entities.
     * @returns A request builder for creating requests to retrieve all `TodoAction` entities.
     */
    TodoActionRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilder(TodoAction_1.TodoAction);
    };
    return TodoActionRequestBuilder;
}(core_1.RequestBuilder));
exports.TodoActionRequestBuilder = TodoActionRequestBuilder;
//# sourceMappingURL=TodoActionRequestBuilder.js.map
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
var Todo_1 = require("./Todo");
/**
 * Request builder class for operations supported on the [[Todo]] entity.
 */
var TodoRequestBuilder = /** @class */ (function (_super) {
    __extends(TodoRequestBuilder, _super);
    function TodoRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `Todo` entity based on its keys.
     * @param categoryId Key property. See [[Todo.categoryId]].
     * @returns A request builder for creating requests to retrieve one `Todo` entity based on its keys.
     */
    TodoRequestBuilder.prototype.getByKey = function (categoryId) {
        return new core_1.GetByKeyRequestBuilder(Todo_1.Todo, { categoryId: categoryId });
    };
    /**
     * Returns a request builder for querying all `Todo` entities.
     * @returns A request builder for creating requests to retrieve all `Todo` entities.
     */
    TodoRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilder(Todo_1.Todo);
    };
    return TodoRequestBuilder;
}(core_1.RequestBuilder));
exports.TodoRequestBuilder = TodoRequestBuilder;
//# sourceMappingURL=TodoRequestBuilder.js.map
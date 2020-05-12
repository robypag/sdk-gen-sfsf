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
var core_1 = require("@sap-cloud-sdk/core");
var EmEvent_1 = require("./EmEvent");
/**
 * Request builder class for operations supported on the [[EmEvent]] entity.
 */
var EmEventRequestBuilder = /** @class */ (function (_super) {
    __extends(EmEventRequestBuilder, _super);
    function EmEventRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `EmEvent` entity based on its keys.
     * @param id Key property. See [[EmEvent.id]].
     * @returns A request builder for creating requests to retrieve one `EmEvent` entity based on its keys.
     */
    EmEventRequestBuilder.prototype.getByKey = function (id) {
        return new core_1.GetByKeyRequestBuilder(EmEvent_1.EmEvent, { id: id });
    };
    /**
     * Returns a request builder for querying all `EmEvent` entities.
     * @returns A request builder for creating requests to retrieve all `EmEvent` entities.
     */
    EmEventRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilder(EmEvent_1.EmEvent);
    };
    /**
     * Returns a request builder for creating a `EmEvent` entity.
     * @param entity The entity to be created
     * @returns A request builder for creating requests that create an entity of type `EmEvent`.
     */
    EmEventRequestBuilder.prototype.create = function (entity) {
        return new core_1.CreateRequestBuilder(EmEvent_1.EmEvent, entity);
    };
    return EmEventRequestBuilder;
}(core_1.RequestBuilder));
exports.EmEventRequestBuilder = EmEventRequestBuilder;
//# sourceMappingURL=EmEventRequestBuilder.js.map
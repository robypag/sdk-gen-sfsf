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
var Form360ParticipantConfig_1 = require("./Form360ParticipantConfig");
/**
 * Request builder class for operations supported on the [[Form360ParticipantConfig]] entity.
 */
var Form360ParticipantConfigRequestBuilder = /** @class */ (function (_super) {
    __extends(Form360ParticipantConfigRequestBuilder, _super);
    function Form360ParticipantConfigRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `Form360ParticipantConfig` entity based on its keys.
     * @param formContentId Key property. See [[Form360ParticipantConfig.formContentId]].
     * @param formDataId Key property. See [[Form360ParticipantConfig.formDataId]].
     * @returns A request builder for creating requests to retrieve one `Form360ParticipantConfig` entity based on its keys.
     */
    Form360ParticipantConfigRequestBuilder.prototype.getByKey = function (formContentId, formDataId) {
        return new core_1.GetByKeyRequestBuilder(Form360ParticipantConfig_1.Form360ParticipantConfig, {
            formContentId: formContentId,
            formDataId: formDataId
        });
    };
    /**
     * Returns a request builder for querying all `Form360ParticipantConfig` entities.
     * @returns A request builder for creating requests to retrieve all `Form360ParticipantConfig` entities.
     */
    Form360ParticipantConfigRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilder(Form360ParticipantConfig_1.Form360ParticipantConfig);
    };
    return Form360ParticipantConfigRequestBuilder;
}(core_1.RequestBuilder));
exports.Form360ParticipantConfigRequestBuilder = Form360ParticipantConfigRequestBuilder;
//# sourceMappingURL=Form360ParticipantConfigRequestBuilder.js.map
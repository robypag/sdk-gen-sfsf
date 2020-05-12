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
var FormFolder_1 = require("./FormFolder");
/**
 * Request builder class for operations supported on the [[FormFolder]] entity.
 */
var FormFolderRequestBuilder = /** @class */ (function (_super) {
    __extends(FormFolderRequestBuilder, _super);
    function FormFolderRequestBuilder() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    /**
     * Returns a request builder for retrieving one `FormFolder` entity based on its keys.
     * @param folderId Key property. See [[FormFolder.folderId]].
     * @returns A request builder for creating requests to retrieve one `FormFolder` entity based on its keys.
     */
    FormFolderRequestBuilder.prototype.getByKey = function (folderId) {
        return new core_1.GetByKeyRequestBuilder(FormFolder_1.FormFolder, { folderId: folderId });
    };
    /**
     * Returns a request builder for querying all `FormFolder` entities.
     * @returns A request builder for creating requests to retrieve all `FormFolder` entities.
     */
    FormFolderRequestBuilder.prototype.getAll = function () {
        return new core_1.GetAllRequestBuilder(FormFolder_1.FormFolder);
    };
    return FormFolderRequestBuilder;
}(core_1.RequestBuilder));
exports.FormFolderRequestBuilder = FormFolderRequestBuilder;
//# sourceMappingURL=FormFolderRequestBuilder.js.map
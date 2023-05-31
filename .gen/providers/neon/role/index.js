"use strict";
// https://registry.terraform.io/providers/kislerdm/neon/0.1.0/docs/resources/role
// generated from terraform resource schema
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Role = void 0;
const cdktf = __importStar(require("cdktf"));
/**
* Represents a {@link https://registry.terraform.io/providers/kislerdm/neon/0.1.0/docs/resources/role neon_role}
*/
class Role extends cdktf.TerraformResource {
    // ===========
    // INITIALIZER
    // ===========
    /**
    * Create a new {@link https://registry.terraform.io/providers/kislerdm/neon/0.1.0/docs/resources/role neon_role} Resource
    *
    * @param scope The scope in which to define this construct
    * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
    * @param options RoleConfig
    */
    constructor(scope, id, config) {
        super(scope, id, {
            terraformResourceType: 'neon_role',
            terraformGeneratorMetadata: {
                providerName: 'neon',
                providerVersion: '0.1.0'
            },
            provider: config.provider,
            dependsOn: config.dependsOn,
            count: config.count,
            lifecycle: config.lifecycle,
            provisioners: config.provisioners,
            connection: config.connection,
            forEach: config.forEach
        });
        this._branchId = config.branchId;
        this._id = config.id;
        this._name = config.name;
        this._projectId = config.projectId;
    }
    get branchId() {
        return this.getStringAttribute('branch_id');
    }
    set branchId(value) {
        this._branchId = value;
    }
    // Temporarily expose input value. Use with caution.
    get branchIdInput() {
        return this._branchId;
    }
    // created_at - computed: true, optional: false, required: false
    get createdAt() {
        return this.getStringAttribute('created_at');
    }
    get id() {
        return this.getStringAttribute('id');
    }
    set id(value) {
        this._id = value;
    }
    resetId() {
        this._id = undefined;
    }
    // Temporarily expose input value. Use with caution.
    get idInput() {
        return this._id;
    }
    get name() {
        return this.getStringAttribute('name');
    }
    set name(value) {
        this._name = value;
    }
    // Temporarily expose input value. Use with caution.
    get nameInput() {
        return this._name;
    }
    // password - computed: true, optional: false, required: false
    get password() {
        return this.getStringAttribute('password');
    }
    get projectId() {
        return this.getStringAttribute('project_id');
    }
    set projectId(value) {
        this._projectId = value;
    }
    // Temporarily expose input value. Use with caution.
    get projectIdInput() {
        return this._projectId;
    }
    // protected - computed: true, optional: false, required: false
    get protected() {
        return this.getBooleanAttribute('protected');
    }
    // updated_at - computed: true, optional: false, required: false
    get updatedAt() {
        return this.getStringAttribute('updated_at');
    }
    // =========
    // SYNTHESIS
    // =========
    synthesizeAttributes() {
        return {
            branch_id: cdktf.stringToTerraform(this._branchId),
            id: cdktf.stringToTerraform(this._id),
            name: cdktf.stringToTerraform(this._name),
            project_id: cdktf.stringToTerraform(this._projectId),
        };
    }
}
// =================
// STATIC PROPERTIES
// =================
Role.tfResourceType = "neon_role";
exports.Role = Role;

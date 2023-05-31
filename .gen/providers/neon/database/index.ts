// https://registry.terraform.io/providers/kislerdm/neon/0.1.0/docs/resources/database
// generated from terraform resource schema

import { Construct } from 'constructs';
import * as cdktf from 'cdktf';

// Configuration

export interface DatabaseConfig extends cdktf.TerraformMetaArguments {
  /**
  * Branch ID.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kislerdm/neon/0.1.0/docs/resources/database#branch_id Database#branch_id}
  */
  readonly branchId: string;
  /**
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kislerdm/neon/0.1.0/docs/resources/database#id Database#id}
  *
  * Please be aware that the id field is automatically added to all resources in Terraform providers using a Terraform provider SDK version below 2.
  * If you experience problems setting this value it might not be settable. Please take a look at the provider documentation to ensure it should be settable.
  */
  readonly id?: string;
  /**
  * Database name.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kislerdm/neon/0.1.0/docs/resources/database#name Database#name}
  */
  readonly name: string;
  /**
  * Role name of the database owner.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kislerdm/neon/0.1.0/docs/resources/database#owner_name Database#owner_name}
  */
  readonly ownerName: string;
  /**
  * Project ID.
  * 
  * Docs at Terraform Registry: {@link https://registry.terraform.io/providers/kislerdm/neon/0.1.0/docs/resources/database#project_id Database#project_id}
  */
  readonly projectId: string;
}

/**
* Represents a {@link https://registry.terraform.io/providers/kislerdm/neon/0.1.0/docs/resources/database neon_database}
*/
export class Database extends cdktf.TerraformResource {

  // =================
  // STATIC PROPERTIES
  // =================
  public static readonly tfResourceType = "neon_database";

  // ===========
  // INITIALIZER
  // ===========

  /**
  * Create a new {@link https://registry.terraform.io/providers/kislerdm/neon/0.1.0/docs/resources/database neon_database} Resource
  *
  * @param scope The scope in which to define this construct
  * @param id The scoped construct ID. Must be unique amongst siblings in the same scope
  * @param options DatabaseConfig
  */
  public constructor(scope: Construct, id: string, config: DatabaseConfig) {
    super(scope, id, {
      terraformResourceType: 'neon_database',
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
    this._ownerName = config.ownerName;
    this._projectId = config.projectId;
  }

  // ==========
  // ATTRIBUTES
  // ==========

  // branch_id - computed: false, optional: false, required: true
  private _branchId?: string; 
  public get branchId() {
    return this.getStringAttribute('branch_id');
  }
  public set branchId(value: string) {
    this._branchId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get branchIdInput() {
    return this._branchId;
  }

  // created_at - computed: true, optional: false, required: false
  public get createdAt() {
    return this.getStringAttribute('created_at');
  }

  // id - computed: true, optional: true, required: false
  private _id?: string; 
  public get id() {
    return this.getStringAttribute('id');
  }
  public set id(value: string) {
    this._id = value;
  }
  public resetId() {
    this._id = undefined;
  }
  // Temporarily expose input value. Use with caution.
  public get idInput() {
    return this._id;
  }

  // name - computed: false, optional: false, required: true
  private _name?: string; 
  public get name() {
    return this.getStringAttribute('name');
  }
  public set name(value: string) {
    this._name = value;
  }
  // Temporarily expose input value. Use with caution.
  public get nameInput() {
    return this._name;
  }

  // owner_name - computed: false, optional: false, required: true
  private _ownerName?: string; 
  public get ownerName() {
    return this.getStringAttribute('owner_name');
  }
  public set ownerName(value: string) {
    this._ownerName = value;
  }
  // Temporarily expose input value. Use with caution.
  public get ownerNameInput() {
    return this._ownerName;
  }

  // project_id - computed: false, optional: false, required: true
  private _projectId?: string; 
  public get projectId() {
    return this.getStringAttribute('project_id');
  }
  public set projectId(value: string) {
    this._projectId = value;
  }
  // Temporarily expose input value. Use with caution.
  public get projectIdInput() {
    return this._projectId;
  }

  // updated_at - computed: true, optional: false, required: false
  public get updatedAt() {
    return this.getStringAttribute('updated_at');
  }

  // =========
  // SYNTHESIS
  // =========

  protected synthesizeAttributes(): { [name: string]: any } {
    return {
      branch_id: cdktf.stringToTerraform(this._branchId),
      id: cdktf.stringToTerraform(this._id),
      name: cdktf.stringToTerraform(this._name),
      owner_name: cdktf.stringToTerraform(this._ownerName),
      project_id: cdktf.stringToTerraform(this._projectId),
    };
  }
}

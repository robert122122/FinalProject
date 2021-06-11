using System;
using Microsoft.EntityFrameworkCore.Migrations;

namespace Schools.Migrations
{
    public partial class AddTables : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.RenameColumn(
                name: "SchoolID",
                table: "Teacher",
                newName: "SchoolId");

            migrationBuilder.CreateTable(
                name: "Ranking",
                columns: table => new
                {
                    id = table.Column<Guid>(type: "uniqueidentifier", nullable: false),
                    StudentId = table.Column<int>(type: "int", nullable: false),
                    grade = table.Column<decimal>(type: "decimal(18,2)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Ranking", x => x.id);
                });
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Ranking");

            migrationBuilder.RenameColumn(
                name: "SchoolId",
                table: "Teacher",
                newName: "SchoolID");
        }
    }
}
